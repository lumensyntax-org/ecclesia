// Shared catalogue-entry classification. The llms emitter and the content:check gate
// must agree on what counts as an entry — duplicating this rule is exactly how the
// export and the site diverged before (audit R1/R2, and again in the PR #3 review F4).

// Navigation indexes, the entry template, and the meta-patterns map are published pages
// but not catalogue entries. Classify by SLUG (precise) rather than by a title substring,
// so an entry like "Template Matching" is not misclassified as the template.
export const isEntrySlug = (slug: string): boolean => {
  if (slug === "index" || slug === "META-PATTERNS" || slug === "ENTRY-TEMPLATE") return false
  const last = slug.split("/").at(-1) ?? slug
  return !/^00-Index/.test(last)
}

// Domains are the first slug segment of real entries — never a bare directory name,
// so an auxiliary folder (e.g. assets) with no entries is not counted.
export const domainOf = (slug: string): string => slug.split("/")[0]
