---
domain: formal-language
properties: [honesty, humility, alignment, non_fabrication]
strength: STRONG
status: peer_reviewed
---

# Cryptography

**Source**: Whitfield Diffie & Martin Hellman, "New Directions in Cryptography," IEEE, 1976; RSA (Rivest, Shamir, Adleman), 1977

## Finding

Modern public-key cryptography exploits computational asymmetry: multiplying large primes is trivial; factoring their product is infeasible. This enables encryption (anyone locks with the public key, only the private key holder unlocks) and digital signatures (the private key holder signs, anyone with the public key verifies). A signed message cannot be forged or denied. This is honesty enforced by structure, not by trust.

## Pattern Mapping

**Honesty** -- Digital signatures provide mathematical proof of authorship. A signed message cannot be forged (within computational assumptions) or denied.

**Humility** -- Security rests on unproved assumptions (hardness of factoring, discrete logarithm). No one has proved these problems are inherently hard. Cryptography operates under conditional security and is honest about this.

**Alignment** -- Public key and private key are mathematically linked. The system works because alignment between them is structural, not conventional.

**Non-fabrication** -- Cryptographic verification eliminates fabricated identity in communication. You either hold the private key or you do not.

## Connections

- [[Encryption and Hashing]] -- symmetric encryption complements public-key cryptography
- [[Type Systems]] -- both enforce structural properties through mathematical constraint (-> [[Meta-Pattern 01]])
- [[Version Control]] -- Git uses cryptographic hashes for integrity
- [[Confidence Trick]] -- cons succeed where identity verification fails; cryptography prevents this
- [[Ponzi Schemes]] -- fabricated statements vs. cryptographically verified records

## Status

Diffie-Hellman and RSA are established. Hardness assumptions are standard but unproved. See Katz and Lindell, *Introduction to Modern Cryptography* (3rd ed., 2020). The mapping is this project's interpretation.

---

*The mapping to the five properties is this project's structural interpretation.*
