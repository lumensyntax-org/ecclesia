import test, { describe } from "node:test"
import assert from "node:assert"
import { parseCorrections, parseHomeCounts } from "./corrections"

describe("parseCorrections", () => {
  test("reads date, entry, kind and commit from a table row", () => {
    const { rows, problems } = parseCorrections(
      "| Date | Entry | Kind | What changed | Commit |\n| --- | --- | --- | --- | --- |\n" +
        "| 2026-09-28 | [[SHADOW/The Inverted Outlet]] | corrected | fixed | `7a48563` |\n",
    )
    assert.deepStrictEqual(problems, [])
    assert.deepStrictEqual(rows, [
      {
        date: "2026-09-28",
        entry: "SHADOW/The Inverted Outlet",
        kind: "corrected",
        commit: "7a48563",
      },
    ])
  })

  test("an aliased wikilink keeps its target and does not break the columns", () => {
    const { rows, problems } = parseCorrections(
      "| 2026-09-28 | [[SHADOW/The Inverted Outlet\\|Outlet]] | narrowed | scoped | `7a48563` |",
    )
    assert.deepStrictEqual(problems, [])
    assert.strictEqual(rows[0].entry, "SHADOW/The Inverted Outlet")
  })

  test("reports a row with no commit hash rather than dropping it silently", () => {
    const { rows, problems } = parseCorrections(
      "| 2026-09-28 | [[SHADOW/X]] | corrected | fixed | see history |",
    )
    assert.strictEqual(rows.length, 0)
    assert.match(problems[0], /git hash/)
  })

  test("ignores prose and the header rows", () => {
    const { rows, problems } = parseCorrections(
      "# Corrections\n\n| Date | Entry |\n| --- | --- |\n",
    )
    assert.deepStrictEqual(rows, [])
    assert.deepStrictEqual(problems, [])
  })
})

describe("parseHomeCounts", () => {
  const body =
    "**Total**: 435 entries across 19 domains.\n\n**Verification status.** Of 435 entries, 3 have been migrated to the source-and-locator model and 0 carry a locator checked against its primary source. 4 entries have been corrected and 0 retracted; see [[CORRECTIONS]].\n"

  test("reads the six stated counts", () => {
    assert.deepStrictEqual(parseHomeCounts(body), {
      entries: 435,
      domains: 19,
      migrated: 3,
      checked: 0,
      corrected: 4,
      retracted: 0,
    })
  })

  test("returns null when the two sentences disagree about the entry total", () => {
    assert.strictEqual(parseHomeCounts(body.replace("Of 435", "Of 434")), null)
  })

  test("returns null when the verification paragraph is missing", () => {
    assert.strictEqual(parseHomeCounts("**Total**: 435 entries across 19 domains."), null)
  })
})
