// Pure, testable helpers for the llms.txt / llms-full.txt generator.
// Kept separate from gen-llms.mjs (which does IO) so the classification and
// parsing rules can be unit-tested. See scripts/gen-llms.test.ts.

// CRLF-tolerant frontmatter parser (T07: the old LF-only regex left the whole
// YAML block in the body on CRLF files and dropped their metadata).
export const parseFrontmatter = (md) => {
  const m = md.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/)
  if (!m) return { fm: {}, body: md }
  const fm = {}
  for (const line of m[1].split(/\r?\n/)) {
    const mm = line.match(/^([A-Za-z0-9_]+):\s*(.+)$/)
    if (mm) fm[mm[1]] = mm[2].trim()
  }
  return { fm, body: md.slice(m[0].length).replace(/^\s+/, "") }
}

// Navigation indexes, the entry template, and the meta-patterns map are not
// catalogue entries (T06: 00-Index-Influence.md / 00-Index-Scale.md were counted,
// making the total 437 instead of 435).
export const isIndexOrTemplate = (filename) =>
  /^00-Index/.test(filename) || /TEMPLATE/i.test(filename) || filename === "META-PATTERNS.md"

// Mirror Quartz's RemoveDrafts filter (T01): a draft must never reach the export.
export const isDraft = (fm) => fm?.draft === true || fm?.draft === "true"

// Mirror Quartz's ignorePatterns (quartz.config.ts) so excluded directories are
// never walked into by the exporter (T01).
export const IGNORED_DIRS = ["private", "templates", ".obsidian"]
