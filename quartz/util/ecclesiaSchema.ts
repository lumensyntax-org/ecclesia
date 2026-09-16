// Validator + normalizer for the `ecclesia:` frontmatter block (editorial model v1,
// decided in Ecclesia-Modelo-Editorial-v1.md). A structural check is not enough: this
// also resolves cross-references (support -> source, mapping -> claim/property/entry)
// and the conditional rules (a `direct` support needs a locator + a review; a
// `documented` academic review needs evidence; a fiche-level `reviewed` needs
// `complete` coverage). Errors block publication; warnings and pending items report.

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
const SUPPORT_KINDS = new Set(["direct", "partial", "context", "contradicts", "unassessed"])
const MAPPING_KINDS = new Set([
  "formal_correspondence",
  "shared_mechanism",
  "functional_analogy",
  "conceptual_analogy",
  "interpretive_synthesis",
])
const REVIEW_STATES = new Set(["pending", "partial", "reviewed"])
const ID_RE = /^[a-z][a-z0-9_]*$/
// support kinds that assert a relation and therefore require a locator + a review record
const ASSERTED_SUPPORT = new Set(["direct", "partial", "contradicts"])

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

const isObj = (v: unknown): v is Record<string, unknown> =>
  typeof v === "object" && v !== null && !Array.isArray(v)

export const validateEcclesia = (block: unknown, ctx: ValidateCtx): EcclesiaIssue[] => {
  const issues: EcclesiaIssue[] = []
  const err = (field: string, message: string) =>
    issues.push({ level: "error", file: ctx.file, field, message })

  if (!isObj(block)) {
    err("ecclesia", "the ecclesia block must be a mapping")
    return issues
  }

  if (block.schema_version !== 1) err("ecclesia.schema_version", "schema_version must be 1")
  if (typeof block.entry_kind !== "string" || !ENTRY_KINDS.has(block.entry_kind))
    err("ecclesia.entry_kind", `entry_kind must be one of ${[...ENTRY_KINDS].join(", ")}`)

  const coverage = block.coverage
  if (coverage !== "partial" && coverage !== "complete")
    err("ecclesia.coverage", "coverage must be 'partial' or 'complete'")
  if (coverage === "partial" && !block.coverage_notes)
    err("ecclesia.coverage_notes", "coverage: partial requires coverage_notes")

  const reviewStatus = block.review_status
  if (typeof reviewStatus !== "string" || !REVIEW_STATES.has(reviewStatus))
    err("ecclesia.review_status", "review_status must be pending | partial | reviewed")
  // §2: a fiche-level `reviewed` requires complete coverage.
  if (reviewStatus === "reviewed" && coverage !== "complete")
    err(
      "ecclesia.review_status",
      "review_status: reviewed requires coverage: complete (partial coverage cannot be fully reviewed)",
    )

  // ---- sources ----
  const sources = Array.isArray(block.sources) ? block.sources : []
  const sourceIds = new Set<string>()
  for (const [i, s] of sources.entries()) {
    const at = `ecclesia.sources[${i}]`
    if (!isObj(s)) {
      err(at, "each source must be a mapping")
      continue
    }
    const id = s.id
    if (typeof id !== "string" || !ID_RE.test(id))
      err(`${at}.id`, "source id must match [a-z][a-z0-9_]*")
    else if (sourceIds.has(id)) err(`${at}.id`, `duplicate source id "${id}"`)
    else sourceIds.add(id)
    if (!s.citation) err(`${at}.citation`, "source requires a citation")
    if (typeof s.source_kind !== "string" || !SOURCE_KINDS.has(s.source_kind))
      err(`${at}.source_kind`, "invalid source_kind")
    if (s.origin !== "external" && s.origin !== "project")
      err(`${at}.origin`, "origin must be external | project")
    const ar = s.academic_review
    if (!isObj(ar) || typeof ar.status !== "string") {
      err(`${at}.academic_review`, "academic_review requires a status")
    } else if (!["documented", "not_documented", "not_applicable"].includes(ar.status)) {
      err(
        `${at}.academic_review.status`,
        "status must be documented | not_documented | not_applicable",
      )
    } else if (ar.status === "documented" && !ar.evidence) {
      err(
        `${at}.academic_review`,
        "academic_review: documented requires evidence (reputation is not evidence)",
      )
    } else if (ar.status === "not_applicable" && !ar.note) {
      err(`${at}.academic_review`, "not_applicable requires a note justifying it")
    }
  }

  // ---- claims ----
  const claims = Array.isArray(block.claims) ? block.claims : []
  const claimIds = new Set<string>()
  for (const [i, c] of claims.entries()) {
    const at = `ecclesia.claims[${i}]`
    if (!isObj(c)) {
      err(at, "each claim must be a mapping")
      continue
    }
    const id = c.id
    if (typeof id !== "string" || !ID_RE.test(id))
      err(`${at}.id`, "claim id must match [a-z][a-z0-9_]*")
    else if (claimIds.has(id)) err(`${at}.id`, `duplicate claim id "${id}"`)
    else claimIds.add(id)
    if (!c.text) err(`${at}.text`, "claim requires text")
    if (typeof c.claim_kind !== "string" || !CLAIM_KINDS.has(c.claim_kind))
      err(`${at}.claim_kind`, "invalid claim_kind")
    if (c.origin !== "source_summary" && c.origin !== "project_proposal")
      err(`${at}.origin`, "origin must be source_summary | project_proposal")
    const supports = Array.isArray(c.supports) ? c.supports : []
    for (const [j, sup] of supports.entries()) {
      const sat = `${at}.supports[${j}]`
      if (!isObj(sup)) {
        err(sat, "each support must be a mapping")
        continue
      }
      if (typeof sup.source_id !== "string" || !sourceIds.has(sup.source_id))
        err(`${sat}.source_id`, `support references unknown source "${String(sup.source_id)}"`)
      if (typeof sup.support !== "string" || !SUPPORT_KINDS.has(sup.support))
        err(`${sat}.support`, "invalid support kind")
      const hasLocator = isObj(sup.locator) && !!(sup.locator as any).value
      const hasReview = Array.isArray(sup.reviews) && sup.reviews.length > 0
      if (typeof sup.support === "string" && ASSERTED_SUPPORT.has(sup.support)) {
        if (!hasLocator)
          err(
            `${sat}.locator`,
            `support: ${sup.support} requires a non-empty locator {kind, value}`,
          )
        if (!hasReview) err(`${sat}.reviews`, `support: ${sup.support} requires a review record`)
      }
      if (sup.locator === null && sup.support !== "unassessed")
        err(
          `${sat}.locator`,
          "locator: null is only allowed with support: unassessed (pending, with a note)",
        )
    }
  }

  // ---- mappings ----
  const mappings = Array.isArray(block.mappings) ? block.mappings : []
  const mappingIds = new Set<string>()
  for (const [i, m] of mappings.entries()) {
    const at = `ecclesia.mappings[${i}]`
    if (!isObj(m)) {
      err(at, "each mapping must be a mapping")
      continue
    }
    const id = m.id
    if (typeof id !== "string" || !ID_RE.test(id))
      err(`${at}.id`, "mapping id must match [a-z][a-z0-9_]*")
    else if (mappingIds.has(id)) err(`${at}.id`, `duplicate mapping id "${id}"`)
    else mappingIds.add(id)
    if (typeof m.mapping_kind !== "string" || !MAPPING_KINDS.has(m.mapping_kind))
      err(`${at}.mapping_kind`, "invalid mapping_kind")
    if (!m.argument) err(`${at}.argument`, "mapping requires an argument")
    if (!m.limits) err(`${at}.limits`, "mapping requires limits")
    for (const cid of Array.isArray(m.claim_ids) ? m.claim_ids : []) {
      if (typeof cid !== "string" || !claimIds.has(cid))
        err(`${at}.claim_ids`, `mapping references unknown claim "${String(cid)}"`)
    }
    for (const t of Array.isArray(m.targets) ? m.targets : []) {
      if (typeof t !== "string") {
        err(`${at}.targets`, "each target must be a string")
        continue
      }
      if (t.startsWith("property:")) {
        const p = t.slice("property:".length)
        if (!ctx.validProperties.has(p)) err(`${at}.targets`, `unknown property "${p}"`)
      } else if (t.startsWith("entry:")) {
        const slug = t.slice("entry:".length)
        if (!ctx.knownSlugs.has(slug)) err(`${at}.targets`, `unknown entry slug "${slug}"`)
      } else {
        err(`${at}.targets`, `target must be "property:<name>" or "entry:<slug>", got "${t}"`)
      }
    }
  }

  return issues
}
