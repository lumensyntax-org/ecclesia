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

import fs from "node:fs"
import path from "node:path"
import matter from "gray-matter"
import { validateEcclesia, normalizeProperties, EcclesiaIssue } from "../quartz/util/ecclesiaSchema"
import { isEntrySlug } from "../quartz/util/entries"
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
}
const docs: Doc[] = []

for (const abs of files) {
  const relFromContent = path.relative(CONTENT, abs).split(path.sep).join("/")
  const rel = path.relative(process.cwd(), abs)
  let data: Record<string, unknown> = {}
  try {
    data = matter(fs.readFileSync(abs, "utf8")).data as Record<string, unknown>
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
  if (isV1) {
    for (const legacyField of ["strength", "status"]) {
      if (d.data[legacyField] !== undefined) {
        issues.push({
          level: "error",
          file: d.rel,
          field: legacyField,
          message: `v1 entries must not carry an active root ${legacyField}; move it under ecclesia_legacy`,
        })
      }
    }
  }
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
