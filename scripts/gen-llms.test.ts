import test, { describe } from "node:test"
import assert from "node:assert"
import { parseFrontmatter, isIndexOrTemplate, isDraft } from "./gen-llms-lib.mjs"

describe("parseFrontmatter", () => {
  test("parses LF frontmatter", () => {
    const { fm, body } = parseFrontmatter("---\ndomain: spirit\nstrength: STRONG\n---\n# Title\nbody")
    assert.strictEqual(fm.domain, "spirit")
    assert.strictEqual(fm.strength, "STRONG")
    assert.match(body, /# Title/)
  })

  test("parses CRLF frontmatter without leaving it in the body (T07)", () => {
    const { fm, body } = parseFrontmatter(
      "---\r\ndomain: spirit\r\nstatus: peer_reviewed\r\n---\r\n# Title\r\nbody",
    )
    assert.strictEqual(fm.domain, "spirit")
    assert.strictEqual(fm.status, "peer_reviewed")
    assert.doesNotMatch(body, /---/)
  })

  test("returns empty fm when there is no frontmatter", () => {
    const { fm, body } = parseFrontmatter("# Just a title\nno fm")
    assert.deepStrictEqual(fm, {})
    assert.match(body, /Just a title/)
  })
})

describe("isIndexOrTemplate (T06 — the 437 over-count)", () => {
  test("excludes the domain hub and its sub-indexes", () => {
    assert.ok(isIndexOrTemplate("00-Index.md"))
    assert.ok(isIndexOrTemplate("00-Index-Influence.md"))
    assert.ok(isIndexOrTemplate("00-Index-Scale.md"))
  })

  test("excludes the entry template and the meta-patterns map", () => {
    assert.ok(isIndexOrTemplate("ENTRY-TEMPLATE.md"))
    assert.ok(isIndexOrTemplate("META-PATTERNS.md"))
  })

  test("counts a normal entry", () => {
    assert.ok(!isIndexOrTemplate("The Chalice Test.md"))
  })
})

describe("isDraft (T01 — mirror Quartz RemoveDrafts)", () => {
  test("true for draft frontmatter (string or boolean)", () => {
    assert.ok(isDraft({ draft: "true" }))
    assert.ok(isDraft({ draft: true }))
  })

  test("false when published or unset", () => {
    assert.ok(!isDraft({}))
    assert.ok(!isDraft({ draft: "false" }))
  })
})
