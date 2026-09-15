import { FullSlug, joinSegments } from "../../util/path"
import { QuartzEmitterPlugin } from "../types"
import { write } from "./helpers"

// A published page reduced to what the AI exports need. Populated from Quartz's
// already-filtered content (drafts, ignorePatterns, hidden dirs and .gitignore are
// applied before an emitter runs), so the export can never diverge from the site.
export type LlmsEntry = {
  slug: string
  title: string
  domain: string
  strength?: string
  status?: string
  text: string
}

// Navigation indexes, the entry template, and the meta-patterns map are pages but
// not catalogue entries. Classify by SLUG (precise) rather than by a title substring,
// so an entry like "Template Matching" is not misclassified as the template (R4).
export const isEntrySlug = (slug: string): boolean => {
  if (slug === "index" || slug === "META-PATTERNS" || slug === "ENTRY-TEMPLATE") return false
  const last = slug.split("/").at(-1) ?? slug
  return !/^00-Index/.test(last)
}

// Domains are the first slug segment of real entries — never a bare directory name,
// so an auxiliary folder (e.g. assets) with no entries is not counted (R4).
export const domainOf = (slug: string): string => slug.split("/")[0]

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
    "> ἐκκλησία — the called out, the assembly. A cross-domain catalogue that maps established findings — from physics to theology, from immunology to economics — to five recurring structural properties: alignment, proportion, honesty, humility, non-fabrication. Every entry cites an established source and marks what is established apart from what is interpreted. CC BY-SA 4.0.",
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
    `- [META-PATTERNS](${base}/META-PATTERNS) — cross-domain structural invariants, with strength ratings`,
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
      const meta = [e.strength && `strength: ${e.strength}`, e.status && `status: ${e.status}`]
        .filter(Boolean)
        .join(" · ")
      F.push("")
      F.push(`## ${e.title}`)
      F.push(`URL: ${entryUrl(baseUrl, e.slug)}${meta ? `  [${meta}]` : ""}`)
      F.push("")
      F.push(e.text.trim())
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
        strength: fm.strength as string | undefined,
        status: fm.status as string | undefined,
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
