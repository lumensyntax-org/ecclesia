---
domain: construction
properties: [non_fabrication, honesty, alignment]
strength: STRONG
status: peer_reviewed
---

# Encryption and Hashing

**Source**: SHA-256 (NSA/NIST, 2001); AES (Daemen & Rijmen, NIST 2001); Diffie-Hellman, 1976

## Finding

Cryptographic hash functions (SHA-256) take arbitrary input and produce a fixed-length output with three critical properties: determinism (same input, same hash), pre-image resistance (infeasible to find input from hash), and collision resistance (infeasible to find two inputs with same hash). The hash IS the content's identity. Git, Bitcoin, digital certificates, and file integrity verification all rely on this. Symmetric encryption (AES) transforms plaintext into ciphertext reversible only with the key. Together these tools provide mathematically enforced confidentiality, integrity, and authentication without requiring trust in intermediaries.

## Pattern Mapping

**Non-fabrication** -- Collision resistance means you cannot fabricate two different documents with the same hash. The hash binds content to identity with mathematical force. A digital signature binds identity to action.

**Honesty** -- Encryption makes honest communication possible in hostile environments. Without it, intermediaries can read or alter messages. With it, the message arrives as sent.

**Alignment** -- A hash function promises determinism: same input, same output, always. This is alignment reduced to mathematical essence.

## Connections

- [[Version Control]] -- Git uses SHA-1 hashes as its integrity mechanism
- [[Cryptography]] -- public-key cryptography provides the asymmetric complement (-> [[Meta-Pattern 01]])
- [[DNA as Communication]] -- DNA error correction and cryptographic integrity: both bind content to identity
- [[Spectroscopy]] -- spectral fingerprints and cryptographic hashes: unforgeable identity declarations
- [[Distributed Systems and Consensus]] -- Byzantine fault tolerance uses cryptographic verification

## Status

SHA-256 is FIPS 180-4 (NIST, 2015). AES is FIPS 197 (NIST, 2001). Computational hardness assumptions are believed but unproved. See Katz and Lindell, *Introduction to Modern Cryptography* (3rd ed., 2020). The characterization as mathematical non-fabrication is this project's interpretation.

---

*The mapping to the five properties is this project's structural interpretation.*
