// Turns a validated `ecclesia:` block into what a reader is shown. One model feeds the page
// component and the llms export, so the site and the export cannot say different things
// about the same entry. It assumes the block passed validateEcclesia.

import { isoDate, supportIsChecked, LOCATOR_METHOD } from "./ecclesiaSchema"

const isObj = (v: unknown): v is Record<string, unknown> =>
  typeof v === "object" && v !== null && !Array.isArray(v)
const str = (v: unknown): string => (typeof v === "string" ? v.trim() : "")
const list = (v: unknown): Record<string, unknown>[] => (Array.isArray(v) ? v.filter(isObj) : [])
const words = (v: unknown): string => str(v).replace(/_/g, " ")

const SUPPORT_LABELS: Record<string, string> = {
  direct: "The source states this",
  partial: "The source supports part of this",
  contradicts: "The source contradicts this",
  context: "Background, not evidence",
  unassessed: "Not yet checked against the source",
}
const MAPPING_LABELS: Record<string, string> = {
  formal_correspondence: "Formal correspondence",
  shared_mechanism: "Shared mechanism",
  functional_analogy: "Analogy of function",
  conceptual_analogy: "Analogy of concept",
  interpretive_synthesis: "Interpretive synthesis",
}
const ACADEMIC_LABELS: Record<string, string> = {
  documented: "peer review documented",
  not_documented: "peer review not documented in this record",
  not_applicable: "peer review not applicable",
}

export interface CheckView {
  by: "AI session" | "Human reviewer"
  accessed: string
  url: string
  quote: string
}
export interface SupportView {
  citation: string
  locator: string
  label: string
  checked: boolean
  note: string
  checks: CheckView[]
}
export interface ClaimView {
  text: string
  origin: "From a source" | "Proposed by this project"
  supports: SupportView[]
  checked: boolean
}
export interface SourceView {
  citation: string
  url: string
  kind: string
  academicReview: string
}
export interface MappingView {
  statement: string
  kind: string
  argument: string
  limits: string
}
export interface RetractionView {
  date: string
  reason: string
  commit: string
}
export interface EcclesiaView {
  sources: SourceView[]
  claims: ClaimView[]
  mappings: MappingView[]
  coverage: string
  coverageNotes: string
  sourcedClaims: number
  checkedClaims: number
  retraction: RetractionView | null
}

export const buildEcclesiaView = (block: unknown): EcclesiaView | null => {
  if (!isObj(block)) return null
  const sourceById = new Map<string, Record<string, unknown>>()
  for (const s of list(block.sources)) sourceById.set(str(s.id), s)

  const sources: SourceView[] = list(block.sources).map((s) => {
    const ar = isObj(s.academic_review) ? str(s.academic_review.status) : ""
    return {
      citation: str(s.citation),
      url: /^https?:\/\//.test(str(s.url)) ? str(s.url) : "",
      kind: words(s.source_kind),
      academicReview: ACADEMIC_LABELS[ar] ?? "",
    }
  })

  const claims: ClaimView[] = list(block.claims).map((c) => {
    const supports: SupportView[] = list(c.supports).map((sup) => {
      const checked = supportIsChecked(sup)
      const kind = str(sup.support)
      const loc = isObj(sup.locator) ? `${words(sup.locator.kind)}: ${str(sup.locator.value)}` : ""
      const checks: CheckView[] = list(sup.reviews)
        .filter((r) => r.method === LOCATOR_METHOD)
        .map((r) => ({
          by: r.reviewer_kind === "human" ? "Human reviewer" : "AI session",
          accessed: isoDate(r.accessed),
          url: str(r.source_url),
          quote: str(r.quote),
        }))
      return {
        citation: str(sourceById.get(str(sup.source_id))?.citation) || str(sup.source_id),
        locator: loc,
        // An asserted kind without a record never validates; if one reaches the view
        // anyway it is shown as unchecked rather than as a finding.
        label:
          checked || kind === "context"
            ? (SUPPORT_LABELS[kind] ?? kind)
            : SUPPORT_LABELS.unassessed,
        checked,
        note: str(sup.note),
        checks: checked ? checks : [],
      }
    })
    return {
      text: str(c.text),
      origin: c.origin === "project_proposal" ? "Proposed by this project" : "From a source",
      supports,
      checked: supports.some((s) => s.checked),
    }
  })

  const mappings: MappingView[] = list(block.mappings).map((m) => ({
    statement: str(m.statement),
    kind: MAPPING_LABELS[str(m.mapping_kind)] ?? words(m.mapping_kind),
    argument: str(m.argument),
    limits: str(m.limits),
  }))

  const r = block.retraction
  return {
    sources,
    claims,
    mappings,
    coverage: str(block.coverage),
    coverageNotes: str(block.coverage_notes),
    sourcedClaims: claims.filter((c) => c.origin === "From a source").length,
    checkedClaims: claims.filter((c) => c.checked).length,
    retraction: isObj(r)
      ? { date: isoDate(r.date), reason: str(r.reason), commit: str(r.commit) }
      : null,
  }
}

export const LEGACY_NOTE =
  "Legacy entry. It names its sources, but they have not yet been checked passage by passage."

export const CHECK_EXPLANATION =
  'A check by an "AI session" means an AI opened the source on that date and found the quoted passage there. It is a locator check, not academic review.'

export const checkSummary = (v: EcclesiaView): string =>
  v.sourcedClaims === 0
    ? "No claim from a source has been inventoried yet."
    : `${v.checkedClaims} of ${v.sourcedClaims} claims taken from a source have a locator checked against the primary source.`

// The one-line state printed next to each entry in the llms export.
export const sourcingLine = (v: EcclesiaView | null): string =>
  v === null
    ? "sourcing: legacy entry, sources not yet checked against the primary text"
    : v.sourcedClaims === 0
      ? "sourcing: source-and-locator model, no claim from a source inventoried yet"
      : `sourcing: source-and-locator model, ${v.checkedClaims} of ${v.sourcedClaims} sourced claims checked against the primary source`

// Plain-text rendering for the llms export.
export const ecclesiaViewText = (v: EcclesiaView): string => {
  const L: string[] = ["--- Sources and checks ---", checkSummary(v)]
  if (v.checkedClaims > 0) L.push(CHECK_EXPLANATION)
  if (v.sources.length) {
    L.push("", "Sources:")
    for (const s of v.sources) {
      const tail = [s.kind, s.academicReview].filter(Boolean).join("; ")
      L.push(`- ${s.citation}${s.url ? ` <${s.url}>` : ""}${tail ? ` (${tail})` : ""}`)
    }
  }
  if (v.claims.length) {
    L.push("", "Claims:")
    v.claims.forEach((c, i) => {
      L.push(`${i + 1}. ${c.text} [${c.origin}]`)
      for (const s of c.supports) {
        L.push(`   - ${s.label}. ${s.citation}${s.locator ? `, ${s.locator}` : ""}`)
        for (const k of s.checks)
          L.push(`     Checked ${k.accessed} by ${k.by} at <${k.url}>: "${k.quote}"`)
        if (s.note) L.push(`     Note: ${s.note}`)
      }
    })
  }
  if (v.mappings.length) {
    L.push("", "Mappings (this project's interpretation):")
    for (const m of v.mappings) {
      L.push(`- ${m.statement} [${m.kind}]`)
      L.push(`  Limits: ${m.limits}`)
    }
  }
  if (v.coverage === "partial" && v.coverageNotes) L.push("", `Not yet covered: ${v.coverageNotes}`)
  return L.join("\n")
}
