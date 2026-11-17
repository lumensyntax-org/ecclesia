// Prints the digest of every claim in an entry's `ecclesia:` block, to paste into a
// locator record as `claim_digest`.
//
// Usage: node --import tsx scripts/claim-digest.ts "content/MEDICINE/Some Entry.md"

import fs from "node:fs"
import matter from "gray-matter"
import { claimDigest } from "../quartz/util/ecclesiaSchema"

const file = process.argv[2]
if (!file) {
  console.error("usage: claim-digest <entry.md>")
  process.exit(2)
}
const block = matter(fs.readFileSync(file, "utf8")).data.ecclesia as
  | { claims?: { id?: string; text?: string }[] }
  | undefined
if (!block || !Array.isArray(block.claims)) {
  console.error(`${file}: no ecclesia.claims list`)
  process.exit(1)
}
for (const c of block.claims) {
  if (typeof c?.text === "string") console.log(`${c.id ?? "?"}\t${claimDigest(c.text)}`)
}
