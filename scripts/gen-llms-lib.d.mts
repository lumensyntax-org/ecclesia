// Type declarations for gen-llms-lib.mjs (kept as .mjs so plain `node` can run it
// in the Vercel build; this file lets tsc typecheck the .ts tests that import it).
export function parseFrontmatter(md: string): { fm: Record<string, string>; body: string }
export function isIndexOrTemplate(filename: string): boolean
export function isDraft(fm: Record<string, unknown> | null | undefined): boolean
export const IGNORED_DIRS: string[]
