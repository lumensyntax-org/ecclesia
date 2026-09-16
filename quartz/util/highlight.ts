import { escapeHTML, escapeRegExp } from "./escape"

// Highlight occurrences of `term` inside `text`, matching against the ORIGINAL text
// and escaping every fragment (matched and unmatched) separately. This keeps three
// guarantees at once: literal matching of regex metacharacters (T04, via
// escapeRegExp), no raw markup surviving into innerHTML (T05, via escapeHTML), and —
// unlike escaping first and then matching — HTML entities are never split, because
// matching happens before any "&"/"<"/">" becomes "&amp;"/"&lt;"/"&gt;" (R3).
export const highlightFragment = (text: string, term: string): string => {
  const regex = new RegExp(escapeRegExp(term), "gi")
  let out = ""
  let last = 0
  for (const m of text.matchAll(regex)) {
    out += escapeHTML(text.slice(last, m.index))
    out += `<span class="highlight">${escapeHTML(m[0])}</span>`
    last = m.index + m[0].length
  }
  out += escapeHTML(text.slice(last))
  return out
}
