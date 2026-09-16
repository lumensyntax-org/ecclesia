// content:check — validates the `ecclesia:` v1 blocks across content/ (editorial model v1).
// Entries with `ecclesia.schema_version` are validated; entries without it are reported
// as `legacy_pending` (not errors). Structural / reference errors exit non-zero so CI
// fails; property-alias normalization and declared-pending items are reported, not fatal.

import fs from "node:fs"
import path from "node:path"
import matter from "gray-matter"
import { validateEcclesia, normalizeProperties, EcclesiaIssue } from "../quartz/util/ecclesiaSchema"

const CONTENT = path.resolve(process.cwd(), "content")
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

// Approximate Quartz's slug for cross-reference resolution: path minus .md, spaces -> hyphens.
const slugOf = (abs: string): string =>
  path
    .relative(CONTENT, abs)
    .replace(/\.md$/, "")
    .split(path.sep)
    .map((s) => s.replace(/ /g, "-"))
    .join("/")

const files = walk(CONTENT)
const knownSlugs = new Set(files.map(slugOf))

const issues: EcclesiaIssue[] = []
let v1 = 0
let legacy = 0
for (const abs of files) {
  const rel = path.relative(process.cwd(), abs)
  let data: Record<string, unknown>
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
  if (Array.isArray(data.properties)) {
    const { warnings } = normalizeProperties(data.properties as string[])
    for (const w of warnings)
      issues.push({ level: "warning", file: rel, field: "properties", message: w })
  }
  const eb = data.ecclesia
  if (eb && typeof eb === "object") {
    v1++
    issues.push(
      ...validateEcclesia(eb, { file: rel, knownSlugs, validProperties: VALID_PROPERTIES }),
    )
  } else {
    legacy++
  }
}

const errors = issues.filter((i) => i.level === "error")
const warnings = issues.filter((i) => i.level === "warning")
console.log(
  `[content:check] ${files.length} files · ${v1} v1 · ${legacy} legacy_pending · ${errors.length} errors · ${warnings.length} warnings`,
)
for (const i of issues)
  console.log(`  ${i.level.toUpperCase()} ${i.file} [${i.field}] ${i.message}`)
if (errors.length) {
  console.error(`[content:check] FAILED: ${errors.length} structural error(s)`)
  process.exit(1)
}
console.log("[content:check] OK")
