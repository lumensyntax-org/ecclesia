---
domain: construction
properties: [honesty, non_fabrication, alignment, humility]
strength: STRONG
status: peer_reviewed
---

# Version Control

**Source**: Linus Torvalds, Git, April 2005

## Finding

Git is a distributed version control system using content-addressable storage: every file, directory tree, and commit is identified by its SHA-1 hash. The hash IS the content -- any change, even a single bit, produces a different hash. Every commit points to its parent(s), forming a directed acyclic graph. The entire history is a hash chain: each commit's identity depends on everything before it. History cannot be silently altered. If a commit is modified, its hash changes, changing every subsequent commit. The discrepancy is detectable.

## Pattern Mapping

**Honesty** -- Git is an honesty machine. Every commit is a timestamped, hash-verified record of exactly what changed, who changed it, and what came before. `git log` is the project's honest memory.

**Non-fabrication** -- Content-addressable storage makes fabrication detectable. The hash of the content IS the content's identity. Two different files cannot share a hash (within collision resistance bounds).

**Alignment** -- The commit message states the intent; the diff shows the action. When these diverge, the misalignment is visible to any reviewer.

**Humility** -- `git blame` attributes every line to its author. The system does not allow you to claim credit for work you did not do, or hide responsibility for changes you made.

## Connections

- [[Encryption and Hashing]] -- Git uses the same cryptographic primitives (-> [[Meta-Pattern 01]])
- [[DNA as Communication]] -- both are hash-verified records persisting across time
- [[Open Source]] -- Git enabled distributed open-source collaboration
- [[Spectroscopy]] -- spectral fingerprints and content hashes: identity declared honestly
- [[Redundancy in Aviation]] -- flight data recorders and git logs: non-fabricable records

## Status

Git's design is documented in Torvalds's original announcement (Linux kernel mailing list, April 2005). Content-addressable storage predates Git (Venti, 2002). The characterization as honesty mechanism is this project's structural interpretation.

---

*The mapping to the five properties is this project's structural interpretation.*
