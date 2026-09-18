import test, { describe } from "node:test"
import assert from "node:assert"
import fs from "node:fs"
import os from "node:os"
import path from "node:path"
import { execFileSync } from "node:child_process"
import { fileURLToPath } from "node:url"

// CLI-level regression tests for the PR #3 foundation review (F1/F3/F4): the gate must
// fail on malformed blocks and on a v1 envelope that breaks the contract, and it must
// report catalogue entries separately from auxiliary pages.

const SCRIPT = fileURLToPath(new URL("../../scripts/content-check.ts", import.meta.url))
const REPO = fileURLToPath(new URL("../../", import.meta.url))

const VALID_V1 = `---
domain: spirit
properties: [alignment, non_fabrication]
ecclesia:
  schema_version: 1
  entry_kind: normative_proposal
  coverage: partial
  coverage_notes: pending inventory
  review_status: pending
  reviews: []
  sources: []
  claims: []
  mappings: []
---

# Ok
body
`

// A v1 entry whose mapping points at a neighbouring entry. `target` is interpolated so a
// test can ask for Quartz's slug form or a naive approximation of it.
const v1TargetingEntry = (target: string) => `---
domain: spirit
properties: [alignment, non_fabrication]
ecclesia:
  schema_version: 1
  entry_kind: normative_proposal
  coverage: partial
  coverage_notes: pending inventory
  review_status: pending
  reviews: []
  sources: []
  claims:
    - id: c1
      text: A claim that points at a neighbouring entry.
      claim_kind: normative
      origin: project_proposal
      supports: []
      review_status: pending
      reviews: []
  mappings:
    - id: m1
      statement: relates to the neighbouring entry
      claim_ids: [c1]
      targets: ["entry:${target}"]
      mapping_kind: interpretive_synthesis
      argument: the two entries share a structure of mediation
      limits: not a derivation
      review_status: pending
      reviews: []
---

# Ref
body
`

const write = (root: string, rel: string, body: string) => {
  const abs = path.join(root, rel)
  fs.mkdirSync(path.dirname(abs), { recursive: true })
  fs.writeFileSync(abs, body)
}

// returns { status, out }
const runCli = (contentRoot: string) => {
  try {
    const out = execFileSync("node", ["--import", "tsx", SCRIPT, contentRoot], {
      encoding: "utf8",
      cwd: REPO,
      stdio: ["ignore", "pipe", "pipe"],
    })
    return { status: 0, out }
  } catch (e: any) {
    return { status: e.status ?? 1, out: `${e.stdout ?? ""}${e.stderr ?? ""}` }
  }
}

const withFixture = (files: Record<string, string>, fn: (root: string) => void) => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "ecclesia-cc-"))
  try {
    for (const [rel, body] of Object.entries(files)) write(root, rel, body)
    fn(root)
  } finally {
    fs.rmSync(root, { recursive: true, force: true })
  }
}

describe("content:check CLI (F1/F3/F4 regressions)", () => {
  test("a well-formed v1 entry passes with exit 0", () => {
    withFixture({ "SPIRIT/Ok.md": VALID_V1 }, (root) => {
      assert.strictEqual(runCli(root).status, 0)
    })
  })

  test("a malformed ecclesia block fails instead of counting as legacy (F1)", () => {
    withFixture(
      { "SPIRIT/Bad.md": "---\ndomain: spirit\necclesia: broken\n---\n\n# x\n" },
      (root) => {
        const r = runCli(root)
        assert.notStrictEqual(r.status, 0, "malformed block must fail the gate")
        assert.match(r.out, /malformed|ecclesia/i)
      },
    )
  })

  test("an unknown property value fails (F3)", () => {
    const body = VALID_V1.replace("[alignment, non_fabrication]", "[sparkle, 42]")
    withFixture({ "SPIRIT/Props.md": body }, (root) => {
      assert.notStrictEqual(runCli(root).status, 0)
    })
  })

  test("an active root strength/status beside a v1 block fails (F3)", () => {
    const body = VALID_V1.replace(
      "domain: spirit\n",
      "domain: spirit\nstrength: STRONG\nstatus: peer_reviewed\n",
    )
    withFixture({ "SPIRIT/Legacyleak.md": body }, (root) => {
      const r = runCli(root)
      assert.notStrictEqual(r.status, 0, "v1 entries must not carry active legacy fields")
      assert.match(r.out, /strength|status/i)
    })
  })

  test("the legacy alias is tolerated on a legacy entry but rejected on a v1 entry (F3)", () => {
    withFixture(
      { "SPIRIT/Old.md": "---\ndomain: spirit\nproperties: [non-fabrication]\n---\n\n# x\n" },
      (root) => {
        assert.strictEqual(runCli(root).status, 0, "legacy entry: warn, do not fail")
      },
    )
    const v1Alias = VALID_V1.replace("[alignment, non_fabrication]", "[non-fabrication]")
    withFixture({ "SPIRIT/New.md": v1Alias }, (root) => {
      assert.notStrictEqual(runCli(root).status, 0, "v1 entry: canonical form required")
    })
  })

  test("counts report catalogue entries apart from auxiliary pages (F4)", () => {
    withFixture(
      {
        "SPIRIT/Ok.md": VALID_V1,
        "SPIRIT/00-Index.md": "---\ndomain: spirit\n---\n\n# Index\n",
        "META-PATTERNS.md": "---\n---\n\n# Meta\n",
        "index.md": "---\n---\n\n# Home\n",
      },
      (root) => {
        const r = runCli(root)
        assert.strictEqual(r.status, 0)
        assert.match(r.out, /1 entr/i, "should report 1 catalogue entry")
        assert.match(r.out, /3 auxiliary/i, "should report the 3 auxiliary pages separately")
      },
    )
  })

  // The other half of F4: knownSlugs is built with slugifyFilePath, and `entry:` targets are
  // resolved against it. If the gate ever re-approximates the slugifier, a legitimate target
  // starts reading as unknown (or a broken one sails through) and the gate reports wrong
  // answers about its own catalogue. These two pin the slug FORM, not just its reuse.
  const AMPERSAND_ENTRY = "SPIRIT/A & B.md"

  test("an entry: target in Quartz's slug form resolves (F4)", () => {
    withFixture(
      {
        [AMPERSAND_ENTRY]: "---\ndomain: spirit\n---\n\n# x\n",
        "SPIRIT/Ref.md": v1TargetingEntry("SPIRIT/A--and--B"),
      },
      (root) => {
        const r = runCli(root)
        assert.strictEqual(
          r.status,
          0,
          `the & filename must slugify the way Quartz does:\n${r.out}`,
        )
      },
    )
  })

  test("an entry: target in a naive slug form is rejected (F4)", () => {
    withFixture(
      {
        [AMPERSAND_ENTRY]: "---\ndomain: spirit\n---\n\n# x\n",
        "SPIRIT/Ref.md": v1TargetingEntry("SPIRIT/A-&-B"),
      },
      (root) => {
        const r = runCli(root)
        assert.notStrictEqual(r.status, 0, "a slug Quartz never emits must not resolve")
        assert.match(r.out, /unknown published entry slug.*A-&-B/i)
      },
    )
  })
})
