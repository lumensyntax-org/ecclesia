// content:check — the editorial model v1 gate.
//
// Usage: node --import tsx scripts/content-check.ts [contentRoot]
//
// Three things the PR #3 review (F1/F3/F4) required of this gate:
//  - a present-but-malformed `ecclesia:` block is an ERROR, not "legacy" (F1);
//  - the frontmatter ENVELOPE of a v1 entry is validated too: canonical properties, and
//    no active root strength/status (which the export would still publish) (F3);
//  - slugs and entry classification are REUSED from Quartz / the shared util rather than
//    re-approximated, and catalogue entries are counted apart from auxiliary pages (F4).
//
// Added with the label retirement (2026-11):
//  - NO catalogue entry may carry an active root strength/status. Those labels read as
//    "this entry is peer reviewed / strongly established" and had no measurable criterion;
//    the retired values live under ecclesia_legacy as a record only;
//  - when the catalogue publishes CORRECTIONS.md, the counts the home page states (entries,
//    domains, migrated, checked, corrected, retracted) must equal what this gate computes,
//    so the page cannot drift from the catalogue the way the hand-written total did.

import fs from "node:fs"
import path from "node:path"
import matter from "gray-matter"
import {
  validateEcclesia,
  normalizeProperties,
  supportIsChecked,
  isRetracted,
  EcclesiaIssue,
} from "../quartz/util/ecclesiaSchema"
import { isEntrySlug, domainOf } from "../quartz/util/entries"
import { parseCorrections, parseHomeCounts } from "../quartz/util/corrections"
import { slugifyFilePath } from "../quartz/util/path"
import type { FilePath } from "../quartz/util/path"

const CONTENT = path.resolve(process.argv[2] ?? path.join(process.cwd(), "content"))
const VALID_PROPERTIES = new Set([
  "alignment",
  "proportion",
  "honesty",
  "humility",
  "non_fabrication",
])

const walk = (dir: string): string[] =>
  fs.readdirSync(dir, { withFileTypes: true }).flatMap((d) => {
    if (d.isDirectory()) return walk(path.join(dir, d.name))
    return d.name.endsWith(".md") ? [path.join(dir, d.name)] : []
  })

const files = walk(CONTENT)
const issues: EcclesiaIssue[] = []

type Doc = {
  rel: string
  slug: string
  data: Record<string, unknown>
  isEntry: boolean
  isDraft: boolean
  hasV1: boolean
  body: string
}
const docs: Doc[] = []

for (const abs of files) {
  const relFromContent = path.relative(CONTENT, abs).split(path.sep).join("/")
  const rel = path.relative(process.cwd(), abs)
  let data: Record<string, unknown> = {}
  let body = ""
  try {
    const parsed = matter(fs.readFileSync(abs, "utf8"))
    data = parsed.data as Record<string, unknown>
    body = parsed.content
  } catch (e) {
    issues.push({
      level: "error",
      file: rel,
      field: "frontmatter",
      message: `unparseable frontmatter: ${(e as Error).message}`,
    })
    continue
  }
  const slug = slugifyFilePath(relFromContent as FilePath)
  docs.push({
    rel,
    slug,
    data,
    isEntry: isEntrySlug(slug),
    isDraft: data.draft === true || data.draft === "true",
    hasV1: "ecclesia" in data,
    body,
  })
}

// `entry:` targets may only point at entries the catalogue actually publishes.
const knownSlugs = new Set(docs.filter((d) => d.isEntry && !d.isDraft).map((d) => d.slug))

let v1 = 0
let legacyEntries = 0
for (const d of docs) {
  const eb = d.data.ecclesia
  const isV1 = d.hasV1 && isObjLike(eb)

  // --- the ecclesia block itself ---
  if (d.hasV1 && !isObjLike(eb)) {
    // F1: present but malformed must never be waved through as "legacy".
    issues.push({
      level: "error",
      file: d.rel,
      field: "ecclesia",
      message: `malformed ecclesia block (expected a mapping, got ${eb === null ? "null" : typeof eb})`,
    })
  } else if (isV1) {
    v1++
    issues.push(
      ...validateEcclesia(eb, { file: d.rel, knownSlugs, validProperties: VALID_PROPERTIES }),
    )
  } else if (d.isEntry) {
    legacyEntries++
  }

  // --- the frontmatter envelope (F3) ---
  if (Array.isArray(d.data.properties)) {
    const raw = d.data.properties as string[]
    const { props, warnings } = normalizeProperties(raw)
    for (const w of warnings) {
      issues.push({
        level: isV1 ? "error" : "warning",
        file: d.rel,
        field: "properties",
        message: isV1 ? `${w} — v1 entries require the canonical identifier` : w,
      })
    }
    for (const p of props) {
      if (!VALID_PROPERTIES.has(String(p))) {
        issues.push({
          level: isV1 ? "error" : "warning",
          file: d.rel,
          field: "properties",
          message: `unknown property "${String(p)}"`,
        })
      }
    }
  }
  if (isV1 || d.isEntry) {
    for (const legacyField of ["strength", "status"]) {
      if (d.data[legacyField] !== undefined) {
        issues.push({
          level: "error",
          file: d.rel,
          field: legacyField,
          message: `catalogue entries must not carry an active root ${legacyField}; move it under ecclesia_legacy`,
        })
      }
    }
  }
}

// --- the corrections log and the counts the home page states ---
const published = docs.filter((d) => d.isEntry && !d.isDraft)
const correctionsDoc = docs.find((d) => d.slug === "CORRECTIONS")
if (correctionsDoc) {
  const { rows, problems } = parseCorrections(correctionsDoc.body)
  for (const m of problems)
    issues.push({ level: "error", file: correctionsDoc.rel, field: "corrections", message: m })
  for (const r of rows) {
    if (!knownSlugs.has(slugifyFilePath(`${r.entry}.md` as FilePath)))
      issues.push({
        level: "error",
        file: correctionsDoc.rel,
        field: "corrections",
        message: `row ${r.date} names "${r.entry}", which is not a published entry`,
      })
  }
  // A retracted entry keeps its page but is no longer part of the catalogue's count, and
  // the page and the log must agree about which entries are retracted.
  const standing = published.filter((d) => !isRetracted(d.data.ecclesia))
  const retractedInLog = new Set<string>(
    rows
      .filter((r) => r.kind === "retracted")
      .map((r) => slugifyFilePath(`${r.entry}.md` as FilePath)),
  )
  for (const d of published) {
    const marked = isRetracted(d.data.ecclesia)
    if (marked && !retractedInLog.has(d.slug))
      issues.push({
        level: "error",
        file: d.rel,
        field: "ecclesia.retraction",
        message: "a retracted entry must have a `retracted` row in CORRECTIONS.md",
      })
    if (!marked && retractedInLog.has(d.slug))
      issues.push({
        level: "error",
        file: d.rel,
        field: "ecclesia.retraction",
        message:
          "CORRECTIONS.md lists this entry as retracted, but it carries no ecclesia.retraction",
      })
  }
  const actual = {
    entries: standing.length,
    domains: new Set(standing.map((d) => domainOf(d.slug))).size,
    migrated: standing.filter((d) => d.hasV1).length,
    checked: standing.filter((d) => hasCheckedLocator(d.data.ecclesia)).length,
    corrected: new Set(rows.filter((r) => r.kind !== "retracted").map((r) => r.entry)).size,
    retracted: new Set(rows.filter((r) => r.kind === "retracted").map((r) => r.entry)).size,
  }
  const home = docs.find((d) => d.slug === "index")
  const stated = home ? parseHomeCounts(home.body) : null
  if (!home || !stated) {
    issues.push({
      level: "error",
      file: home?.rel ?? "content/index.md",
      field: "counts",
      message:
        "the home page must state its verification counts (the Total line and the Verification status paragraph)",
    })
  } else {
    for (const k of Object.keys(actual) as (keyof typeof actual)[]) {
      if (stated[k] !== actual[k])
        issues.push({
          level: "error",
          file: home.rel,
          field: `counts.${k}`,
          message: `home page states ${k} = ${stated[k]}, the catalogue has ${actual[k]}`,
        })
    }
  }
}

// An entry counts as "checked" when at least one of its claims has a support backed by a
// locator record. The schema rejects an asserted support without one, so on a green gate
// this is exactly the entries a reader can check against a primary source.
function hasCheckedLocator(block: unknown): boolean {
  if (!isObjLike(block)) return false
  const claims = (block as Record<string, unknown>).claims
  if (!Array.isArray(claims)) return false
  return claims.some(
    (c) =>
      isObjLike(c) &&
      Array.isArray((c as Record<string, unknown>).supports) &&
      ((c as Record<string, unknown>).supports as unknown[]).some(supportIsChecked),
  )
}

function isObjLike(v: unknown): boolean {
  return typeof v === "object" && v !== null && !Array.isArray(v)
}

const entries = docs.filter((d) => d.isEntry).length
const auxiliary = docs.length - entries
const errors = issues.filter((i) => i.level === "error")
const warnings = issues.filter((i) => i.level === "warning")

console.log(
  `[content:check] ${files.length} files · ${entries} entries · ${auxiliary} auxiliary pages · ` +
    `${v1} v1 · ${legacyEntries} legacy_pending entries · ${errors.length} errors · ${warnings.length} warnings`,
)
for (const i of issues)
  console.log(`  ${i.level.toUpperCase()} ${i.file} [${i.field}] ${i.message}`)
if (errors.length) {
  console.error(`[content:check] FAILED: ${errors.length} structural error(s)`)
  process.exit(1)
}
console.log("[content:check] OK")
