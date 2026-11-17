// Parsers for the public corrections log (content/CORRECTIONS.md) and for the counts the
// home page states. Pure functions, shared by the content:check gate and its tests.

export const CORRECTION_KINDS = ["retracted", "narrowed", "corrected", "relabelled"] as const
export type CorrectionKind = (typeof CORRECTION_KINDS)[number]

export interface CorrectionRow {
  date: string
  entry: string
  kind: CorrectionKind
  commit: string
}

const cell = (s: string) => s.trim()

// A log row is a markdown table row whose first cell is an ISO date:
// | 2026-09-28 | [[SHADOW/The Inverted Outlet]] | narrowed | what changed | `7a48563` |
export const parseCorrections = (body: string): { rows: CorrectionRow[]; problems: string[] } => {
  const rows: CorrectionRow[] = []
  const problems: string[] = []
  for (const line of body.split("\n")) {
    if (!/^\|\s*\d{4}-\d{2}-\d{2}\s*\|/.test(line)) continue
    // An aliased wikilink carries an escaped pipe (\|) that is not a column break.
    const cells = line
      .replace(/\\\|/g, "\u0000")
      .split("|")
      .slice(1, -1)
      .map((c) => cell(c.replace(/\u0000/g, "|")))
    const date = cells[0]
    if (cells.length !== 5) {
      problems.push(`row ${date}: expected 5 columns, found ${cells.length}`)
      continue
    }
    const link = /^\[\[([^\]|]+)(?:\|[^\]]*)?\]\]$/.exec(cells[1])
    if (!link) {
      problems.push(`row ${date}: the entry cell must be a single [[wikilink]]`)
      continue
    }
    const kind = cells[2] as CorrectionKind
    if (!CORRECTION_KINDS.includes(kind)) {
      problems.push(`row ${date}: kind must be one of ${CORRECTION_KINDS.join(", ")}`)
      continue
    }
    if (cells[3] === "") problems.push(`row ${date}: the change description is empty`)
    const commit = /^`([0-9a-f]{7,40})`$/.exec(cells[4])
    if (!commit) {
      problems.push(`row ${date}: the commit cell must be a git hash in backticks`)
      continue
    }
    rows.push({ date, entry: link[1].trim(), kind, commit: commit[1] })
  }
  return { rows, problems }
}

export interface HomeCounts {
  entries: number
  domains: number
  migrated: number
  checked: number
  corrected: number
  retracted: number
}

// Reads the two sentences the home page uses to state its counts. Returns null when either
// is missing or when they disagree with each other about the number of entries.
export const parseHomeCounts = (body: string): HomeCounts | null => {
  const total = /\*\*Total\*\*: (\d+) entries across (\d+) domains\./.exec(body)
  const status =
    /Of (\d+) entries, (\d+) have been migrated to the source-and-locator model and (\d+) carry a locator checked against its primary source\. (\d+) entries have been corrected and (\d+) retracted/.exec(
      body,
    )
  if (!total || !status) return null
  if (total[1] !== status[1]) return null
  return {
    entries: Number(total[1]),
    domains: Number(total[2]),
    migrated: Number(status[2]),
    checked: Number(status[3]),
    corrected: Number(status[4]),
    retracted: Number(status[5]),
  }
}
