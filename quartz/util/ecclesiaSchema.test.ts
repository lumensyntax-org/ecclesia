import test, { describe } from "node:test"
import assert from "node:assert"
import { validateEcclesia, normalizeProperties } from "./ecclesiaSchema"

const VALID_PROPS = new Set(["alignment", "proportion", "honesty", "humility", "non_fabrication"])
const KNOWN_SLUGS = new Set(["SPIRIT/The-First-Light-Bearer"])
const ctx = () => ({
  file: "content/SPIRIT/Test.md",
  knownSlugs: KNOWN_SLUGS,
  validProperties: VALID_PROPS,
})

// a minimal well-formed v1 block (typed loose: tests mutate fields per case)
const validBlock = (): any => ({
  schema_version: 1,
  entry_kind: "normative_proposal",
  coverage: "partial",
  coverage_notes: "remaining attributions pending",
  review_status: "pending",
  reviews: [],
  sources: [
    {
      id: "aquinas_st",
      citation: "Aquinas, Summa Theologiae III q64",
      source_kind: "scholarly_book",
      origin: "external",
      academic_review: { status: "not_documented", note: "not documented here" },
    },
  ],
  claims: [
    {
      id: "c1",
      text: "Ecclesia adopts the three conditions as its discipline.",
      claim_kind: "normative",
      origin: "project_proposal",
      supports: [],
      review_status: "pending",
      reviews: [],
    },
  ],
  mappings: [
    {
      id: "m1",
      statement: "informs an ethic of mediation",
      claim_ids: ["c1"],
      targets: ["property:honesty"],
      mapping_kind: "interpretive_synthesis",
      argument: "distinguishes conveying from appropriating authority",
      limits: "not a derivation of sacramental validity",
      review_status: "pending",
      reviews: [],
    },
  ],
})

const errs = (issues: { level: string }[]) => issues.filter((i) => i.level === "error")

describe("validateEcclesia (model v1, §9 acceptance)", () => {
  test("a well-formed partial entry passes with no errors", () => {
    assert.deepStrictEqual(errs(validateEcclesia(validBlock(), ctx())), [])
  })

  test("support referencing a nonexistent source is an error", () => {
    const b = validBlock()
    b.claims[0].supports = [
      {
        source_id: "ghost",
        locator: { kind: "article", value: "1" },
        support: "direct",
        review_status: "reviewed",
        reviews: [{ reviewer: "x" }],
      },
    ]
    assert.ok(errs(validateEcclesia(b, ctx())).some((e) => /source/i.test((e as any).message)))
  })

  test("duplicate source id is an error", () => {
    const b = validBlock()
    b.sources.push({ ...b.sources[0] })
    assert.ok(errs(validateEcclesia(b, ctx())).some((e) => /duplicate/i.test((e as any).message)))
  })

  test("mapping referencing an unknown claim_id is an error", () => {
    const b = validBlock()
    b.mappings[0].claim_ids = ["nope"]
    assert.ok(errs(validateEcclesia(b, ctx())).some((e) => /claim/i.test((e as any).message)))
  })

  test("mapping target with an invalid property is an error", () => {
    const b = validBlock()
    b.mappings[0].targets = ["property:sparkle"]
    assert.ok(errs(validateEcclesia(b, ctx())).some((e) => /propert/i.test((e as any).message)))
  })

  test("direct support without a locator is an error", () => {
    const b = validBlock()
    b.claims[0].supports = [
      {
        source_id: "aquinas_st",
        locator: null,
        support: "direct",
        review_status: "reviewed",
        reviews: [{ reviewer: "x" }],
      },
    ]
    assert.ok(errs(validateEcclesia(b, ctx())).some((e) => /locator/i.test((e as any).message)))
  })

  test("academic_review: documented is rejected while it cannot be accredited", () => {
    // Stricter since the PR #3 foundation review (F2): `documented` has no verifiable
    // backing until the review-record + digest subsystem exists, so it is rejected
    // outright rather than accepted on an unchecked `evidence` field.
    const b = validBlock()
    b.sources[0].academic_review = { status: "documented", note: "x" }
    assert.ok(
      errs(validateEcclesia(b, ctx())).some((e) => /accredit|subsystem/i.test((e as any).message)),
    )
  })

  test("coverage partial but review_status reviewed is an error", () => {
    const b = validBlock()
    b.review_status = "reviewed"
    assert.ok(errs(validateEcclesia(b, ctx())).length >= 1)
  })

  test("an unassessed support with null locator and pending review passes", () => {
    const b = validBlock()
    b.claims[0].supports = [
      {
        source_id: "aquinas_st",
        locator: null,
        support: "unassessed",
        note: "pending",
        review_status: "pending",
        reviews: [],
      },
    ]
    assert.deepStrictEqual(errs(validateEcclesia(b, ctx())), [])
  })

  test("a project_proposal claim with empty supports is allowed (shown as proposal)", () => {
    assert.deepStrictEqual(errs(validateEcclesia(validBlock(), ctx())), [])
  })
})

describe("normalizeProperties", () => {
  test("normalizes the non-fabrication alias with a warning", () => {
    const { props, warnings } = normalizeProperties(["alignment", "non-fabrication"])
    assert.deepStrictEqual(props, ["alignment", "non_fabrication"])
    assert.ok(warnings.length >= 1)
  })

  test("deduplicates when both forms appear", () => {
    const { props } = normalizeProperties(["non_fabrication", "non-fabrication"])
    assert.deepStrictEqual(props, ["non_fabrication"])
  })
})
