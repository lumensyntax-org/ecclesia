import test, { describe } from "node:test"
import assert from "node:assert"
import { validateEcclesia } from "./ecclesiaSchema"

// Regression tests for the PR #3 foundation review (F1/F2): the validator silently
// coerced wrong-typed collections to [] (so references were never checked) and accepted
// review states the system cannot accredit.

const ctx = () => ({
  file: "content/SPIRIT/Test.md",
  knownSlugs: new Set(["SPIRIT/The-First-Light-Bearer"]),
  validProperties: new Set(["alignment", "proportion", "honesty", "humility", "non_fabrication"]),
})
const errs = (b: any) => validateEcclesia(b, ctx()).filter((i) => i.level === "error")
const base = (): any => ({
  schema_version: 1,
  entry_kind: "normative_proposal",
  coverage: "partial",
  coverage_notes: "pending",
  review_status: "pending",
  reviews: [],
  sources: [],
  claims: [],
  mappings: [],
})
const source = () => ({
  id: "s",
  citation: "A citation",
  source_kind: "canonical_text",
  origin: "external",
  academic_review: { status: "not_documented", note: "not documented here" },
})

describe("F1 — wrong-typed data must not be silently discarded", () => {
  test("collections with the wrong type are errors, not empty lists", () => {
    const b = base()
    b.sources = "broken"
    b.claims = { broken: true }
    b.mappings = 17
    const e = errs(b)
    assert.ok(
      e.some((i) => /sources/.test(i.field)),
      "sources must error",
    )
    assert.ok(
      e.some((i) => /claims/.test(i.field)),
      "claims must error",
    )
    assert.ok(
      e.some((i) => /mappings/.test(i.field)),
      "mappings must error",
    )
  })

  test("supports as an object and claim_ids/targets as strings are errors", () => {
    const b = base()
    b.sources = [source()]
    b.claims = [
      {
        id: "c",
        text: "t",
        claim_kind: "normative",
        origin: "project_proposal",
        supports: { bad: 1 },
        review_status: "pending",
        reviews: [],
      },
    ]
    b.mappings = [
      {
        id: "m",
        statement: "s",
        claim_ids: "c",
        targets: "property:honesty",
        mapping_kind: "interpretive_synthesis",
        argument: "a",
        limits: "l",
        review_status: "pending",
        reviews: [],
      },
    ]
    const e = errs(b)
    assert.ok(e.some((i) => /supports/.test(i.field)))
    assert.ok(e.some((i) => /claim_ids/.test(i.field)))
    assert.ok(e.some((i) => /targets/.test(i.field)))
  })

  test("required text fields must be non-empty strings, not any truthy value", () => {
    const b = base()
    b.sources = [{ ...source(), citation: { a: 1 } }]
    b.claims = [
      {
        id: "c",
        text: ["a list"],
        claim_kind: "normative",
        origin: "project_proposal",
        supports: [],
        review_status: "pending",
        reviews: [],
      },
    ]
    b.mappings = [
      {
        id: "m",
        statement: "",
        claim_ids: ["c"],
        targets: [],
        mapping_kind: "interpretive_synthesis",
        argument: true,
        limits: 42,
        review_status: "pending",
        reviews: [],
      },
    ]
    const e = errs(b)
    for (const f of ["citation", "text", "statement", "argument", "limits"]) {
      assert.ok(
        e.some((i) => i.field.includes(f)),
        `${f} must error`,
      )
    }
  })

  test("a locator must have a valid kind and a textual value", () => {
    const b = base()
    b.sources = [source()]
    b.claims = [
      {
        id: "c",
        text: "t",
        claim_kind: "normative",
        origin: "project_proposal",
        review_status: "pending",
        reviews: [],
        supports: [
          {
            source_id: "s",
            locator: { kind: "nonsense", value: {} },
            support: "unassessed",
            note: "n",
            review_status: "pending",
            reviews: [],
          },
        ],
      },
    ]
    const e = errs(b)
    assert.ok(e.some((i) => /locator/.test(i.field)))
  })

  test("source_kind: other requires a kind_note", () => {
    const b = base()
    b.sources = [{ ...source(), source_kind: "other" }]
    assert.ok(errs(b).some((i) => /kind_note/.test(i.field + i.message)))
  })
})

describe("F2 — review states the system cannot accredit must be rejected", () => {
  test("an unknown nested review state is an error", () => {
    const b = base()
    b.sources = [source()]
    b.claims = [
      {
        id: "c",
        text: "t",
        claim_kind: "normative",
        origin: "project_proposal",
        supports: [],
        review_status: "certified",
        reviews: [],
      },
    ]
    assert.ok(errs(b).some((i) => /review_status/.test(i.field)))
  })

  test("review_status reviewed/partial is rejected while records cannot be verified", () => {
    const b = base()
    b.coverage = "complete"
    b.review_status = "reviewed"
    assert.ok(errs(b).some((i) => /accredit|subsystem/i.test(i.message)))
  })

  test("an asserted support (direct) is rejected while records cannot be verified", () => {
    const b = base()
    b.sources = [source()]
    b.claims = [
      {
        id: "c",
        text: "t",
        claim_kind: "normative",
        origin: "project_proposal",
        review_status: "pending",
        reviews: [],
        supports: [
          {
            source_id: "s",
            locator: { kind: "article", value: "III q64 a8" },
            support: "direct",
            review_status: "reviewed",
            reviews: [{}],
          },
        ],
      },
    ]
    assert.ok(errs(b).some((i) => /accredit|subsystem/i.test(i.message)))
  })

  test("academic_review: documented is rejected while evidence cannot be verified", () => {
    const b = base()
    b.sources = [{ ...source(), academic_review: { status: "documented", evidence: true } }]
    assert.ok(errs(b).some((i) => /accredit|subsystem/i.test(i.message)))
  })

  test("a non-empty review record must have reviewer, date, scope and result", () => {
    const b = base()
    b.reviews = [{}]
    const e = errs(b)
    assert.ok(e.some((i) => /reviews/.test(i.field)))
  })

  test("unassessed with a null locator requires a note", () => {
    const b = base()
    b.sources = [source()]
    b.claims = [
      {
        id: "c",
        text: "t",
        claim_kind: "normative",
        origin: "project_proposal",
        review_status: "pending",
        reviews: [],
        supports: [
          {
            source_id: "s",
            locator: null,
            support: "unassessed",
            review_status: "pending",
            reviews: [],
          },
        ],
      },
    ]
    assert.ok(errs(b).some((i) => /note/i.test(i.message)))
  })

  test("the honest pilot shape (pending + unassessed + real locator) still passes", () => {
    const b = base()
    b.sources = [source()]
    b.claims = [
      {
        id: "c",
        text: "t",
        claim_kind: "historical_textual",
        origin: "source_summary",
        review_status: "pending",
        reviews: [],
        supports: [
          {
            source_id: "s",
            locator: { kind: "article", value: "III, question 64, articles 8 and 10" },
            support: "unassessed",
            note: "locator verified; review record pending",
            review_status: "pending",
            reviews: [],
          },
        ],
      },
    ]
    b.mappings = [
      {
        id: "m",
        statement: "s",
        claim_ids: ["c"],
        targets: ["property:honesty", "entry:SPIRIT/The-First-Light-Bearer"],
        mapping_kind: "interpretive_synthesis",
        argument: "a",
        limits: "l",
        review_status: "pending",
        reviews: [],
      },
    ]
    assert.deepStrictEqual(errs(b), [])
  })
})
