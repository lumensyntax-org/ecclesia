// Validator + normalizer for the `ecclesia:` frontmatter block (editorial model v1,
// decided in Ecclesia-Modelo-Editorial-v1.md).
//
// Two disciplines this file has to hold, both learned from review findings:
//
// 1. Wrong-typed data must NOT be silently coerced away (F1). Replacing `sources: broken`
//    with [] made the cross-reference checks vacuous and produced a green gate over
//    content the renderer would later receive. A collection that is deliberately empty is
//    valid; a collection of the wrong type is an error.
// 2. States the system cannot yet accredit must be REJECTED, not accepted (F2). Until the
//    review-record + content-digest subsystem exists, `review_status: partial|reviewed`,
//    asserted supports (`direct|partial|contradicts`) and `academic_review: documented`
//    have no verifiable backing, so they fail instead of passing unchecked. Honest
//    `pending` / `unassessed` / `not_documented` declarations pass.

export type IssueLevel = "error" | "warning" | "pending"
export interface EcclesiaIssue {
  level: IssueLevel
  file: string
  field: string
  message: string
}

export interface ValidateCtx {
  file: string
  knownSlugs: Set<string>
  validProperties: Set<string>
}

const ENTRY_KINDS = new Set([
  "normative_proposal",
  "source_analysis",
  "interpretive_synthesis",
  "person_profile",
])
const SOURCE_KINDS = new Set([
  "academic_article",
  "scholarly_book",
  "canonical_text",
  "papal_encyclical",
  "institutional_document",
  "literary_work",
  "dataset",
  "other",
])
const CLAIM_KINDS = new Set([
  "empirical",
  "formal",
  "historical_textual",
  "theological_doctrinal",
  "normative",
])
const SUPPORT_KINDS = new Set(["direct", "partial", "contradicts", "context", "unassessed"])
const MAPPING_KINDS = new Set([
  "formal_correspondence",
  "shared_mechanism",
  "functional_analogy",
  "conceptual_analogy",
  "interpretive_synthesis",
])
const REVIEW_STATES = new Set(["pending", "partial", "reviewed"])
const LOCATOR_KINDS = new Set([
  "article",
  "section",
  "paragraph",
  "page",
  "theorem",
  "verse",
  "timestamp",
  "other",
])
const ACADEMIC_REVIEW_STATES = new Set(["documented", "not_documented", "not_applicable"])
const ID_RE = /^[a-z][a-z0-9_]*$/

// Support kinds that assert a relation, and therefore need a locator and a review record.
const ASSERTED_SUPPORT = new Set(["direct", "partial", "contradicts"])
// Until reviews carry verifiable records + digests, these states cannot be accredited.
const UNACCREDITABLE_REVIEW_STATES = new Set(["partial", "reviewed"])
const NOT_YET =
  "cannot be accredited until the review-record + content-digest subsystem exists; declare it pending instead"

const isObj = (v: unknown): v is Record<string, unknown> =>
  typeof v === "object" && v !== null && !Array.isArray(v)
const nonEmptyStr = (v: unknown): v is string => typeof v === "string" && v.trim() !== ""

// Canonical machine id for the fifth property; "non-fabrication" is a legacy display alias.
export const normalizeProperties = (props: string[]): { props: string[]; warnings: string[] } => {
  const warnings: string[] = []
  const seen = new Set<string>()
  const out: string[] = []
  for (const raw of props) {
    const p = raw === "non-fabrication" ? "non_fabrication" : raw
    if (p !== raw) warnings.push(`normalized property alias "${raw}" -> "${p}"`)
    if (!seen.has(p)) {
      seen.add(p)
      out.push(p)
    }
  }
  return { props: out, warnings }
}

export const validateEcclesia = (block: unknown, ctx: ValidateCtx): EcclesiaIssue[] => {
  const issues: EcclesiaIssue[] = []
  const err = (field: string, message: string) =>
    issues.push({ level: "error", file: ctx.file, field, message })

  if (!isObj(block)) {
    err("ecclesia", "the ecclesia block must be a mapping")
    return issues
  }

  if (block.schema_version !== 1) err("ecclesia.schema_version", "schema_version must be 1")
  if (!nonEmptyStr(block.entry_kind) || !ENTRY_KINDS.has(block.entry_kind))
    err("ecclesia.entry_kind", `entry_kind must be one of ${[...ENTRY_KINDS].join(", ")}`)

  const coverage = block.coverage
  if (coverage !== "partial" && coverage !== "complete")
    err("ecclesia.coverage", "coverage must be 'partial' or 'complete'")
  if (coverage === "partial" && !nonEmptyStr(block.coverage_notes))
    err("ecclesia.coverage_notes", "coverage: partial requires non-empty coverage_notes")

  // review_status, at fiche level
  const reviewStatus = block.review_status
  if (!nonEmptyStr(reviewStatus) || !REVIEW_STATES.has(reviewStatus))
    err("ecclesia.review_status", "review_status must be pending | partial | reviewed")
  else if (UNACCREDITABLE_REVIEW_STATES.has(reviewStatus))
    err("ecclesia.review_status", `review_status: ${reviewStatus} ${NOT_YET}`)
  if (reviewStatus === "reviewed" && coverage !== "complete")
    err(
      "ecclesia.review_status",
      "review_status: reviewed requires coverage: complete (partial coverage cannot be fully reviewed)",
    )

  // A review record must at least have a checkable shape, even before digests exist.
  const checkReviews = (v: unknown, at: string) => {
    if (v === undefined) return
    if (!Array.isArray(v)) {
      err(at, "reviews must be a list")
      return
    }
    for (const [i, r] of v.entries()) {
      if (!isObj(r)) {
        err(`${at}[${i}]`, "each review record must be a mapping")
        continue
      }
      for (const f of ["reviewer", "date", "scope", "result"]) {
        if (!nonEmptyStr(r[f])) err(`${at}[${i}].${f}`, `review record requires a non-empty ${f}`)
      }
    }
  }
  checkReviews(block.reviews, "ecclesia.reviews")

  const nestedReviewStatus = (v: unknown, at: string) => {
    if (!nonEmptyStr(v) || !REVIEW_STATES.has(v))
      err(at, "review_status must be pending | partial | reviewed")
    else if (UNACCREDITABLE_REVIEW_STATES.has(v)) err(at, `review_status: ${v} ${NOT_YET}`)
  }

  // A required collection: must be present and an array. Empty is fine; wrong type is not.
  const collection = (v: unknown, at: string): unknown[] | null => {
    if (!Array.isArray(v)) {
      err(at, `${at.split(".").pop()} must be a list (an empty list is valid; a wrong type is not)`)
      return null
    }
    return v
  }

  // ---- sources ----
  const sources = collection(block.sources, "ecclesia.sources") ?? []
  const sourceIds = new Set<string>()
  for (const [i, s] of sources.entries()) {
    const at = `ecclesia.sources[${i}]`
    if (!isObj(s)) {
      err(at, "each source must be a mapping")
      continue
    }
    if (!nonEmptyStr(s.id) || !ID_RE.test(s.id))
      err(`${at}.id`, "source id must match [a-z][a-z0-9_]*")
    else if (sourceIds.has(s.id)) err(`${at}.id`, `duplicate source id "${s.id}"`)
    else sourceIds.add(s.id)
    if (!nonEmptyStr(s.citation))
      err(`${at}.citation`, "source requires a non-empty citation string")
    if (!nonEmptyStr(s.source_kind) || !SOURCE_KINDS.has(s.source_kind))
      err(`${at}.source_kind`, "invalid source_kind")
    else if (s.source_kind === "other" && !nonEmptyStr(s.kind_note))
      err(`${at}.kind_note`, "source_kind: other requires a kind_note")
    if (s.origin !== "external" && s.origin !== "project")
      err(`${at}.origin`, "origin must be external | project")

    const ar = s.academic_review
    if (!isObj(ar) || !nonEmptyStr(ar.status)) {
      err(`${at}.academic_review`, "academic_review requires a status")
    } else if (!ACADEMIC_REVIEW_STATES.has(ar.status)) {
      err(
        `${at}.academic_review.status`,
        "status must be documented | not_documented | not_applicable",
      )
    } else if (ar.status === "documented") {
      err(`${at}.academic_review`, `academic_review: documented ${NOT_YET}`)
    } else if (ar.status === "not_applicable" && !nonEmptyStr(ar.note)) {
      err(`${at}.academic_review`, "not_applicable requires a note justifying it")
    }
  }

  // ---- claims ----
  const claims = collection(block.claims, "ecclesia.claims") ?? []
  const claimIds = new Set<string>()
  for (const [i, c] of claims.entries()) {
    const at = `ecclesia.claims[${i}]`
    if (!isObj(c)) {
      err(at, "each claim must be a mapping")
      continue
    }
    if (!nonEmptyStr(c.id) || !ID_RE.test(c.id))
      err(`${at}.id`, "claim id must match [a-z][a-z0-9_]*")
    else if (claimIds.has(c.id)) err(`${at}.id`, `duplicate claim id "${c.id}"`)
    else claimIds.add(c.id)
    if (!nonEmptyStr(c.text)) err(`${at}.text`, "claim requires a non-empty text string")
    if (!nonEmptyStr(c.claim_kind) || !CLAIM_KINDS.has(c.claim_kind))
      err(`${at}.claim_kind`, "invalid claim_kind")
    if (c.origin !== "source_summary" && c.origin !== "project_proposal")
      err(`${at}.origin`, "origin must be source_summary | project_proposal")
    nestedReviewStatus(c.review_status, `${at}.review_status`)
    checkReviews(c.reviews, `${at}.reviews`)

    const supports = collection(c.supports, `${at}.supports`) ?? []
    for (const [j, sup] of supports.entries()) {
      const sat = `${at}.supports[${j}]`
      if (!isObj(sup)) {
        err(sat, "each support must be a mapping")
        continue
      }
      if (!nonEmptyStr(sup.source_id) || !sourceIds.has(sup.source_id))
        err(`${sat}.source_id`, `support references unknown source "${String(sup.source_id)}"`)
      const kind = sup.support
      if (!nonEmptyStr(kind) || !SUPPORT_KINDS.has(kind))
        err(`${sat}.support`, "invalid support kind")
      nestedReviewStatus(sup.review_status, `${sat}.review_status`)
      checkReviews(sup.reviews, `${sat}.reviews`)

      // locator: either a well-formed {kind, value} object, or null for unassessed + note.
      if (sup.locator === null || sup.locator === undefined) {
        if (kind !== "unassessed")
          err(`${sat}.locator`, "a null locator is only allowed with support: unassessed")
        else if (!nonEmptyStr(sup.note))
          err(
            `${sat}.note`,
            "support: unassessed with a null locator requires a note saying what is pending",
          )
      } else if (!isObj(sup.locator)) {
        err(`${sat}.locator`, "locator must be a mapping {kind, value} or null")
      } else {
        const lk = (sup.locator as Record<string, unknown>).kind
        const lv = (sup.locator as Record<string, unknown>).value
        if (!nonEmptyStr(lk) || !LOCATOR_KINDS.has(lk))
          err(`${sat}.locator.kind`, `locator kind must be one of ${[...LOCATOR_KINDS].join(", ")}`)
        if (!nonEmptyStr(lv))
          err(
            `${sat}.locator.value`,
            "locator value must be a non-empty string that lets a reader find the passage",
          )
      }

      if (nonEmptyStr(kind) && ASSERTED_SUPPORT.has(kind)) {
        err(`${sat}.support`, `support: ${kind} ${NOT_YET}`)
        if (!isObj(sup.locator))
          err(`${sat}.locator`, `support: ${kind} requires a locator {kind, value}`)
        if (!Array.isArray(sup.reviews) || sup.reviews.length === 0)
          err(`${sat}.reviews`, `support: ${kind} requires a review record`)
      }
    }
  }

  // ---- mappings ----
  const mappings = collection(block.mappings, "ecclesia.mappings") ?? []
  const mappingIds = new Set<string>()
  for (const [i, m] of mappings.entries()) {
    const at = `ecclesia.mappings[${i}]`
    if (!isObj(m)) {
      err(at, "each mapping must be a mapping")
      continue
    }
    if (!nonEmptyStr(m.id) || !ID_RE.test(m.id))
      err(`${at}.id`, "mapping id must match [a-z][a-z0-9_]*")
    else if (mappingIds.has(m.id)) err(`${at}.id`, `duplicate mapping id "${m.id}"`)
    else mappingIds.add(m.id)
    if (!nonEmptyStr(m.statement)) err(`${at}.statement`, "mapping requires a non-empty statement")
    if (!nonEmptyStr(m.mapping_kind) || !MAPPING_KINDS.has(m.mapping_kind))
      err(`${at}.mapping_kind`, "invalid mapping_kind")
    if (!nonEmptyStr(m.argument)) err(`${at}.argument`, "mapping requires a non-empty argument")
    if (!nonEmptyStr(m.limits)) err(`${at}.limits`, "mapping requires non-empty limits")
    nestedReviewStatus(m.review_status, `${at}.review_status`)
    checkReviews(m.reviews, `${at}.reviews`)

    for (const cid of collection(m.claim_ids, `${at}.claim_ids`) ?? []) {
      if (!nonEmptyStr(cid) || !claimIds.has(cid))
        err(`${at}.claim_ids`, `mapping references unknown claim "${String(cid)}"`)
    }
    for (const t of collection(m.targets, `${at}.targets`) ?? []) {
      if (!nonEmptyStr(t)) {
        err(`${at}.targets`, "each target must be a non-empty string")
        continue
      }
      if (t.startsWith("property:")) {
        const p = t.slice("property:".length)
        if (!ctx.validProperties.has(p)) err(`${at}.targets`, `unknown property "${p}"`)
      } else if (t.startsWith("entry:")) {
        const slug = t.slice("entry:".length)
        if (!ctx.knownSlugs.has(slug))
          err(
            `${at}.targets`,
            `unknown published entry slug "${slug}" (use the canonical Quartz slug)`,
          )
      } else {
        err(`${at}.targets`, `target must be "property:<name>" or "entry:<slug>", got "${t}"`)
      }
    }
  }

  return issues
}
