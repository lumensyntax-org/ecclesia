---
domain: formal-language
properties: [honesty, alignment, proportion]
strength: STRONG
status: peer_reviewed
---

# Error-Correcting Codes

**Source**: Richard Hamming, Bell System Technical Journal, 1950; Reed & Solomon, 1960; Shannon, channel coding theorem, 1948

## Finding

Hamming showed how to add structured redundancy so errors during transmission can be detected and corrected. Hamming(7,4) encodes 4 data bits into 7, correcting any single-bit error. Reed-Solomon codes generalize to symbol blocks, enabling CDs, DVDs, QR codes, deep-space communication. Shannon's channel coding theorem proved reliable communication is possible at any rate below channel capacity. The noise does not destroy the signal if the encoding has sufficient structure. Gates et al. (c. 2008) discovered error-correcting codes structurally identical to doubly-even self-dual binary block codes in supersymmetry equations.

## Pattern Mapping

**Honesty** -- Error-correcting codes are the mathematical infrastructure making honest communication possible despite noise. The structure added does not change the message; it protects it. Honest communication is not the absence of noise but the presence of structure sufficient to survive it.

**Alignment** -- The received message, after error correction, matches the sent message. The code ensures alignment between intent and result.

**Proportion** -- Redundancy added is exactly what the noise level requires. Hamming codes correct one error per block; Reed-Solomon codes correct more. Protection proportional to threat.

## Connections

- [[DNA as Communication]] -- DNA proofreading IS error correction on molecular sequences (-> [[Meta-Pattern 01]])
- [[Redundancy in Aviation]] -- triple redundancy is physical error correction
- [[Distributed Systems and Consensus]] -- BFT achieves consensus despite fabricating nodes
- [[Encryption and Hashing]] -- both ensure message integrity through mathematical structure
- [[Gates Error-Correcting Codes]] -- SUSY codes containing identical structures (contingent on SUSY confirmation)

## Status

Established information theory. Shannon's theorem is proved. Gates discovery published but dependent on unconfirmed SUSY. The mapping is this project's interpretation.

---

*The mapping to the five properties is this project's structural interpretation.*
