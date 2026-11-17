import test, { describe } from "node:test"
import assert from "node:assert"
import { validateEcclesia, claimDigest, supportIsChecked, isRetracted } from "./ecclesiaSchema"

// Locator records: the one thing this system can accredit. An asserted support passes only
// when someone opened the primary source, recorded where and when, quoted what is there,
// and bound the record to the claim text with a digest.

const ctx = () => ({
  file: "content/MEDICINE/Test.md",
  knownSlugs: new Set<string>(),
  validProperties: new Set(["alignment", "proportion", "honesty", "humility", "non_fabrication"]),
})
const errs = (b: any) => validateEcclesia(b, ctx()).filter((i) => i.level === "error")

const CLAIM = "The FDA approved Casgevy for sickle cell disease in December 2023."
const record = (over: Record<string, unknown> = {}) => ({
  reviewer: "session 2026-11-18",
  reviewer_kind: "ai_session",
  date: "2026-11-18",
  scope: "locator",
  result: "passage found",
  method: "opened_primary_source",
  source_url: "https://www.fda.gov/news-events/press-announcements/example",
  accessed: "2026-11-18",
  quote: "FDA approved two milestone treatments",
  claim_digest: claimDigest(CLAIM),
  ...over,
})
const support = (over: Record<string, unknown> = {}) => ({
  source_id: "s",
  locator: { kind: "paragraph", value: "first paragraph" },
  support: "direct",
  review_status: "partial",
  reviews: [record()],
  ...over,
})
const entry = (sup: any, claimOver: Record<string, unknown> = {}, over: any = {}): any => ({
  schema_version: 1,
  entry_kind: "source_analysis",
  coverage: "partial",
  coverage_notes: "one claim inventoried",
  review_status: "partial",
  reviews: [],
  sources: [
    {
      id: "s",
      citation: "FDA press announcement",
      source_kind: "institutional_document",
      origin: "external",
      academic_review: { status: "not_applicable", note: "regulatory announcement" },
    },
  ],
  claims: [
    {
      id: "c",
      text: CLAIM,
      claim_kind: "empirical",
      origin: "source_summary",
      review_status: "partial",
      reviews: [],
      supports: [sup],
      ...claimOver,
    },
  ],
  mappings: [],
  ...over,
})

describe("claimDigest", () => {
  test("is stable under re-wrapping but changes with the wording", () => {
    assert.strictEqual(claimDigest("a  b\n c "), claimDigest("a b c"))
    assert.notStrictEqual(claimDigest("a b c"), claimDigest("a b d"))
    assert.match(claimDigest("x"), /^sha256:[0-9a-f]{64}$/)
  })
})

describe("locator records accredit an asserted support", () => {
  test("direct support with a valid AI locator record passes, up to partial", () => {
    assert.deepStrictEqual(errs(entry(support())), [])
  })

  test("YAML-parsed Date values are accepted for the dates", () => {
    const sup = support({
      reviews: [record({ date: new Date("2026-11-18"), accessed: new Date("2026-11-18") })],
    })
    assert.deepStrictEqual(errs(entry(sup)), [])
  })

  test("editing the claim after the check invalidates the support", () => {
    const e = errs(entry(support(), { text: CLAIM.replace("December", "November") }))
    assert.ok(e.some((i) => /claim_digest does not match/.test(i.message)))
    assert.ok(e.some((i) => /requires a locator record/.test(i.message)))
  })

  test("an AI record cannot carry review_status: reviewed", () => {
    const e = errs(entry(support({ review_status: "reviewed" })))
    assert.ok(e.some((i) => /by a human reviewer/.test(i.message)))
  })

  test("a human record allows reviewed on the support and on the claim", () => {
    const sup = support({
      review_status: "reviewed",
      reviews: [record({ reviewer_kind: "human" })],
    })
    assert.deepStrictEqual(errs(entry(sup, { review_status: "reviewed" })), [])
  })

  test("a claim is not reviewed while one of its supports is unchecked", () => {
    const human = support({
      review_status: "reviewed",
      reviews: [record({ reviewer_kind: "human" })],
    })
    const loose = {
      source_id: "s",
      locator: null,
      support: "unassessed",
      note: "second source not reached",
      review_status: "pending",
      reviews: [],
    }
    const b = entry(human, { review_status: "reviewed", supports: [human, loose] })
    assert.ok(errs(b).some((i) => /every support of the claim/.test(i.message)))
  })

  for (const [field, value, pattern] of [
    ["source_url", "fda.gov/page", /http\(s\) URL/],
    ["accessed", "last week", /YYYY-MM-DD/],
    ["quote", "", /literal quote/],
    ["quote", "x".repeat(301), /at most 300/],
    ["reviewer_kind", undefined, /who checked it/],
    ["claim_digest", undefined, /requires claim_digest/],
    ["method", "remembered", /method must be/],
  ] as const) {
    test(`a locator record with a bad ${field} does not accredit`, () => {
      const e = errs(entry(support({ reviews: [record({ [field]: value })] })))
      assert.ok(
        e.some((i) => pattern.test(i.message)),
        JSON.stringify(e),
      )
      assert.ok(e.some((i) => /requires a locator record|partial requires/.test(i.message)))
    })
  }

  test("an asserted support still needs the locator itself", () => {
    const e = errs(entry(support({ locator: null })))
    assert.ok(e.some((i) => /requires a locator \{kind, value\}/.test(i.message)))
  })

  test("a locator record on a claim or an entry is misplaced", () => {
    const b = entry(support(), { reviews: [record()] })
    assert.ok(errs(b).some((i) => /belongs on a support/.test(i.message)))
  })

  test("partial at entry or claim level needs a checked support behind it", () => {
    const loose = {
      source_id: "s",
      locator: { kind: "page", value: "p. 1" },
      support: "unassessed",
      review_status: "pending",
      reviews: [],
    }
    const e = errs(entry(loose))
    assert.ok(e.some((i) => i.field === "ecclesia.review_status"))
    assert.ok(e.some((i) => /claims\[0\]\.review_status/.test(i.field)))
  })

  test("entry-level reviewed and mapping-level partial stay unaccreditable", () => {
    const b = entry(support(), {}, { coverage: "complete", review_status: "reviewed" })
    assert.ok(errs(b).some((i) => /cannot be accredited/.test(i.message)))
    const m = entry(support())
    m.mappings = [
      {
        id: "m",
        statement: "s",
        claim_ids: ["c"],
        targets: ["property:proportion"],
        mapping_kind: "functional_analogy",
        argument: "a",
        limits: "l",
        review_status: "partial",
        reviews: [],
      },
    ]
    assert.ok(errs(m).some((i) => /cannot be accredited/.test(i.message)))
  })
})

describe("supportIsChecked", () => {
  test("true only for an asserted support with a locator record", () => {
    assert.ok(supportIsChecked(support()))
    assert.ok(!supportIsChecked(support({ support: "unassessed" })))
    assert.ok(!supportIsChecked(support({ reviews: [] })))
    assert.ok(!supportIsChecked(support({ support: "context" })))
  })
})

describe("retraction", () => {
  const base = () => entry(support())
  test("a well-formed retraction passes and is detected", () => {
    const b = {
      ...base(),
      retraction: { date: "2026-11-20", reason: "no source", commit: "abc1234" },
    }
    assert.deepStrictEqual(errs(b), [])
    assert.ok(isRetracted(b))
    assert.ok(!isRetracted(base()))
  })
  test("a retraction needs a date, a reason and a commit hash", () => {
    const e = errs({ ...base(), retraction: { reason: "", commit: "later" } })
    assert.strictEqual(e.filter((i) => /retraction/.test(i.field)).length, 3)
  })
})
