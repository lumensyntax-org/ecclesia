import test, { describe } from "node:test"
import assert from "node:assert"
import { buildEcclesiaView, ecclesiaViewText, sourcingLine, checkSummary } from "./ecclesiaView"
import { claimDigest } from "./ecclesiaSchema"

const CLAIM = "The source says X."
const block = (): any => ({
  schema_version: 1,
  coverage: "partial",
  coverage_notes: "second source not inventoried",
  sources: [
    {
      id: "s",
      citation: "Author, Title, 2020",
      source_kind: "academic_article",
      url: "https://doi.org/10.1000/example",
      academic_review: { status: "not_documented" },
    },
  ],
  claims: [
    {
      id: "checked",
      text: CLAIM,
      origin: "source_summary",
      supports: [
        {
          source_id: "s",
          locator: { kind: "page", value: "p. 12" },
          support: "direct",
          reviews: [
            {
              reviewer_kind: "ai_session",
              method: "opened_primary_source",
              source_url: "https://doi.org/10.1000/example",
              accessed: new Date("2026-11-18"),
              quote: "X is the case",
              claim_digest: claimDigest(CLAIM),
            },
          ],
        },
      ],
    },
    {
      id: "open",
      text: "The source says Y.",
      origin: "source_summary",
      supports: [
        { source_id: "s", locator: null, support: "unassessed", note: "paywalled", reviews: [] },
      ],
    },
    { id: "ours", text: "We propose Z.", origin: "project_proposal", supports: [] },
  ],
  mappings: [
    {
      id: "m",
      statement: "X is read as proportion.",
      mapping_kind: "functional_analogy",
      argument: "because",
      limits: "The subject asserts nothing.",
    },
  ],
})

describe("buildEcclesiaView", () => {
  test("returns null for a legacy entry", () => {
    assert.strictEqual(buildEcclesiaView(undefined), null)
    assert.strictEqual(buildEcclesiaView("broken"), null)
  })

  test("counts checked claims against claims taken from a source only", () => {
    const v = buildEcclesiaView(block())!
    assert.strictEqual(v.sourcedClaims, 2)
    assert.strictEqual(v.checkedClaims, 1)
    assert.strictEqual(checkSummary(v).startsWith("1 of 2 claims"), true)
  })

  test("a checked support shows who checked it, when, where and the quote", () => {
    const s = buildEcclesiaView(block())!.claims[0].supports[0]
    assert.strictEqual(s.label, "The source states this")
    assert.strictEqual(s.locator, "page: p. 12")
    assert.deepStrictEqual(s.checks, [
      {
        by: "AI session",
        accessed: "2026-11-18",
        url: "https://doi.org/10.1000/example",
        quote: "X is the case",
      },
    ])
  })

  test("an asserted kind with no locator record is shown as unchecked, never as a finding", () => {
    const b = block()
    b.claims[0].supports[0].reviews = []
    const v = buildEcclesiaView(b)!
    assert.strictEqual(v.claims[0].supports[0].label, "Not yet checked against the source")
    assert.strictEqual(v.claims[0].supports[0].checked, false)
    assert.strictEqual(v.checkedClaims, 0)
  })

  test("only http(s) source URLs become links", () => {
    const b = block()
    b.sources[0].url = "javascript:alert(1)"
    assert.strictEqual(buildEcclesiaView(b)!.sources[0].url, "")
  })

  test("carries the retraction when there is one", () => {
    const b = {
      ...block(),
      retraction: { date: "2026-11-20", reason: "no source", commit: "abc1234" },
    }
    assert.deepStrictEqual(buildEcclesiaView(b)!.retraction, {
      date: "2026-11-20",
      reason: "no source",
      commit: "abc1234",
    })
  })
})

describe("text export", () => {
  test("states the count, the check, the open note and the mapping limits", () => {
    const text = ecclesiaViewText(buildEcclesiaView(block())!)
    assert.match(text, /1 of 2 claims taken from a source/)
    assert.match(text, /It is a locator check, not academic review\./)
    assert.match(
      text,
      /Checked 2026-11-18 by AI session at <https:\/\/doi\.org\/10\.1000\/example>: "X is the case"/,
    )
    assert.match(text, /Not yet checked against the source\. Author, Title, 2020/)
    assert.match(text, /Note: paywalled/)
    assert.match(text, /\[Analogy of function\]\n {2}Limits: The subject asserts nothing\./)
    assert.match(text, /Not yet covered: second source not inventoried/)
  })

  test("sourcingLine distinguishes legacy from migrated", () => {
    assert.match(sourcingLine(null), /legacy entry/)
    assert.match(sourcingLine(buildEcclesiaView(block())), /1 of 2 sourced claims checked/)
  })
})
