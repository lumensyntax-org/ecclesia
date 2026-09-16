export const escapeHTML = (unsafe: string) => {
  return unsafe
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;")
}

// Escape regex metacharacters so a user's raw search text is matched literally
// (otherwise `new RegExp("c++")` throws, and `(`/`[` are interpreted as syntax).
export const escapeRegExp = (str: string) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")

export const unescapeHTML = (html: string) => {
  return html
    .replaceAll("&amp;", "&")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&quot;", '"')
    .replaceAll("&#039;", "'")
}

// Decode HTML entities exactly ONE layer, in a single left-to-right pass, so that
// "&amp;lt;" becomes "&lt;" (an author's literal entity) rather than "<". Unlike
// unescapeHTML's chained replaceAll, it never re-decodes text a prior replacement
// produced. Used to recover plain text from Quartz's already-escaped file.data.text (N1).
const ENTITY_ONCE: Record<string, string> = {
  amp: "&",
  lt: "<",
  gt: ">",
  quot: '"',
  "#039": "'",
}
export const decodeEntitiesOnce = (s: string) =>
  s.replace(/&(amp|lt|gt|quot|#039);/g, (_, name: string) => ENTITY_ONCE[name])
