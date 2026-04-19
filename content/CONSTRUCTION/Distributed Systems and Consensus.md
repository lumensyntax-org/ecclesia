---
domain: construction
properties: [honesty, humility, alignment, non_fabrication]
strength: STRONG
status: peer_reviewed
---

# Distributed Systems and Consensus

**Source**: Lamport, Shostak & Pease, "The Byzantine Generals Problem," 1982; Gilbert & Lynch, CAP theorem proof, 2002

## Finding

The Byzantine Generals Problem: how can distributed nodes reach agreement when some may be faulty or malicious? Proof: consensus is possible if and only if fewer than one-third of nodes are Byzantine. The CAP theorem states a distributed system cannot simultaneously guarantee Consistency, Availability, and Partition tolerance. In the presence of a partition (inevitable in real networks), you must choose between consistency and availability. This is a proved impossibility result, not a design preference. Practical BFT was advanced by Castro and Liskov (OSDI, 1999).

## Pattern Mapping

**Honesty** -- Byzantine fault tolerance is the formal study of achieving honest consensus when some participants lie. The one-third bound is structural: below it, consensus is achievable; above it, no protocol can distinguish truth from fabrication.

**Humility** -- The CAP theorem enforces humility on system designers. You cannot have everything. Any system claiming all three in the presence of partitions is either wrong or redefining terms.

**Alignment** -- Consistency IS alignment across distributed participants: what each node claims is the state matches what every other node claims.

**Non-fabrication** -- In Byzantine systems, faulty nodes fabricate messages. The entire field is about building systems where fabrication by a minority cannot corrupt the majority's consensus.

## Connections

- [[Encryption and Hashing]] -- cryptographic verification underlies distributed consensus
- [[Redundancy in Aviation]] -- triple redundancy is Byzantine fault tolerance in hardware
- [[Ponzi Schemes]] -- Ponzi schemes succeed where verification fails; BFT prevents this (-> [[Meta-Pattern 01]])
- [[Autoimmune Disease]] -- immune consensus on self/non-self parallels distributed consensus
- [[Open Source]] -- open-source development is consensus among distributed contributors

## Status

Lamport et al. (1982) is foundational. CAP proof by Gilbert and Lynch (2002). See Kleppmann, *Designing Data-Intensive Applications* (2017). The characterization as structural honesty is this project's interpretation.

---

*The mapping to the five properties is this project's structural interpretation.*
