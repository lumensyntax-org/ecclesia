import { FullSlug, joinSegments } from "../../util/path"
import { QuartzEmitterPlugin } from "../types"
import { write } from "./helpers"
import { decodeEntitiesOnce } from "../../util/escape"

// A published page reduced to what the AI exports need. Populated from Quartz's
// already-filtered content (drafts, ignorePatterns, hidden dirs and .gitignore are
// applied before an emitter runs), so the export can never diverge from the site.
export type LlmsEntry = {
  slug: string
  title: string
  domain: string
  // Whether the entry has been migrated to the source-and-locator model. The retired
  // strength/status labels are deliberately NOT exported: they read as a verdict on the
  // entry and had no measurable criterion.
  migrated?: boolean
  text: string
}

export const sourcingNote = (e: Pick<LlmsEntry, "migrated">): string =>
  e.migrated
    ? "sourcing: source-and-locator model, review pending"
    : "sourcing: legacy entry, sources not yet checked against the primary text"

// Entry classification lives in util/entries so the emitter and the content:check gate
// cannot drift apart (PR #3 review, F4). Re-exported for this module's existing tests.
export { isEntrySlug, domainOf } from "../../util/entries"
import { isEntrySlug, domainOf } from "../../util/entries"

const entryUrl = (baseUrl: string, slug: string) =>
  `https://${joinSegments(baseUrl, encodeURI(slug))}`

const groupByDomain = (entries: LlmsEntry[]) => {
  const byDomain = new Map<string, LlmsEntry[]>()
  for (const e of entries) {
    if (!byDomain.has(e.domain)) byDomain.set(e.domain, [])
    byDomain.get(e.domain)!.push(e)
  }
  return byDomain
}

export const buildLlmsIndex = (
  entries: LlmsEntry[],
  baseUrl: string,
  today: string,
  hubDomains: Set<string> = new Set(),
): string => {
  const base = `https://${baseUrl}`
  const byDomain = groupByDomain(entries)
  const domains = [...byDomain.keys()].sort()
  const L: string[] = []
  L.push("# The Ecclesia")
  L.push("")
  L.push(
    "> ἐκκλησία — the called out, the assembly. A cross-domain catalogue of established findings, each read through five properties this project uses to examine systems that assert something: alignment, proportion, honesty, humility, non-fabrication. The properties are a reading lens, not a law of nature; their number was chosen, not derived; entries about things that assert nothing are analogies. Every mapping is the project's interpretation. Most entries are legacy: their sources have not yet been checked against the primary text. CC BY-SA 4.0.",
  )
  L.push("")
  L.push(
    `The full corpus as one file: [/llms-full.txt](${base}/llms-full.txt). Every canonical page URL: [/sitemap.xml](${base}/sitemap.xml). Source and contribution rules: [github.com/lumensyntax-org/ecclesia](https://github.com/lumensyntax-org/ecclesia).`,
  )
  L.push("")
  L.push(
    `This index lists ${entries.length} entries across ${domains.length} domains (generated ${today}).`,
  )
  L.push("")
  L.push("## Domains")
  for (const dom of domains) {
    const hubLink = hubDomains.has(dom) ? ` — [index](${base}/${dom}/00-Index)` : ""
    L.push("")
    L.push(`### ${dom}${hubLink}`)
    for (const e of byDomain.get(dom)!) L.push(`- ${e.title}`)
  }
  L.push("")
  L.push("## Meta")
  L.push(`- [Home](${base}/) — how to read the catalogue`)
  L.push(
    `- [META-PATTERNS](${base}/META-PATTERNS) — cross-domain structural invariants; the strength ratings there are the project's own unvalidated judgement`,
  )
  L.push(
    `- [CORRECTIONS](${base}/CORRECTIONS) — the public log of entries corrected, narrowed, relabelled or retracted`,
  )
  L.push("")
  return L.join("\n")
}

export const buildLlmsFull = (entries: LlmsEntry[], baseUrl: string, today: string): string => {
  const byDomain = groupByDomain(entries)
  const domains = [...byDomain.keys()].sort()
  const F: string[] = []
  F.push("# The Ecclesia — full text export")
  F.push("")
  F.push(`Generated: ${today}`)
  F.push(
    `Entries: ${entries.length} across ${domains.length} domains (domain-index pages and the META-PATTERNS map are not included below).`,
  )
  F.push("Source: https://github.com/lumensyntax-org/ecclesia")
  F.push("License: CC BY-SA 4.0")
  F.push("")
  F.push(
    "Point-in-time snapshot for whole-corpus analysis, regenerated on every deploy by the LlmsText Quartz emitter, so it always matches the published catalogue.",
  )
  F.push("")
  for (const dom of domains) {
    F.push("")
    F.push("================================================================")
    F.push(`DOMAIN: ${dom}`)
    F.push("================================================================")
    for (const e of byDomain.get(dom)!) {
      F.push("")
      F.push(`## ${e.title}`)
      F.push(`URL: ${entryUrl(baseUrl, e.slug)}  [${sourcingNote(e)}]`)
      F.push("")
      // Quartz stores file.data.text HTML-escaped; the export is plain text, so decode
      // exactly one layer here (N1) — "Jones &amp; Baylin" -> "Jones & Baylin", and an
      // author's literal "&lt;" survives as "&lt;". No repeated decoding.
      F.push(decodeEntitiesOnce(e.text).trim())
    }
  }
  F.push("")
  return F.join("\n")
}

export const LlmsText: QuartzEmitterPlugin = () => ({
  name: "LlmsText",
  async *emit(ctx, content) {
    const baseUrl = ctx.cfg.configuration.baseUrl ?? "example.com"
    const today = new Date().toISOString().slice(0, 10)

    const entries: LlmsEntry[] = []
    const hubDomains = new Set<string>()
    for (const [, file] of content) {
      const slug = file.data.slug!
      const last = slug.split("/").at(-1) ?? slug
      if (last === "00-Index" && slug.includes("/")) hubDomains.add(domainOf(slug))
      if (!isEntrySlug(slug)) continue
      const fm = (file.data.frontmatter ?? {}) as Record<string, unknown>
      entries.push({
        slug,
        title: (fm.title as string) ?? slug,
        domain: domainOf(slug),
        migrated: typeof fm.ecclesia === "object" && fm.ecclesia !== null,
        text: file.data.text ?? "",
      })
    }
    entries.sort((a, b) => a.slug.localeCompare(b.slug))

    yield write({
      ctx,
      content: buildLlmsIndex(entries, baseUrl, today, hubDomains),
      slug: "llms" as FullSlug,
      ext: ".txt",
    })
    yield write({
      ctx,
      content: buildLlmsFull(entries, baseUrl, today),
      slug: "llms-full" as FullSlug,
      ext: ".txt",
    })
  },
})
