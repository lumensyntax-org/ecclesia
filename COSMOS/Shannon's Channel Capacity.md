---
domain: cosmos
properties: [proportion, honesty, alignment]
strength: STRONG
status: peer_reviewed
---

# Shannon's Channel Capacity

**Source**: Claude E. Shannon, "A Mathematical Theory of Communication," *Bell System Technical Journal* 27(3-4), 1948
**Institution**: Bell Labs

## Finding

Every communication channel has a maximum rate at which information can be transmitted reliably: C = B * log_2(1 + S/N) bits per second. Below this rate, error-free communication is possible with sufficiently sophisticated coding. Above this rate, errors are unavoidable regardless of coding. The theorem is an existence proof -- it guarantees that good codes exist but does not construct them. Decades of coding theory (turbo codes, LDPC codes, polar codes) have approached the Shannon limit in practice.

## Pattern Mapping

**Proportion** -- The channel capacity is a hard ceiling determined by the physics of the channel. No amount of cleverness, computational power, or desire can push reliable communication above this limit. Action cannot exceed what structure permits.

**Honesty** -- Shannon's framework forces honesty about the difference between information and noise. Entropy (H = -sum p_i log p_i) measures genuine uncertainty, not apparent complexity. A random string has maximum entropy but minimum information content.

**Alignment** -- The entire framework ensures that what is sent and what is received are the same, despite channel corruption. Reliable communication means alignment between sender's intent and receiver's reconstruction.

## Connections

- [[Noether's Theorem]] -- both reveal structural ceilings that are mathematical identities, not engineering limits
- [[DNA Error Correction]] -- biological channels approach their own Shannon limit through layered coding (-> Meta-Pattern 01: Error Correction)
- [[Conservation Laws]] -- channel capacity is a conservation-like constraint: you cannot transmit more than the channel permits
- [[Le Chatelier's Principle]] -- both describe structural ceilings on system response
- [[Concentration of Measure]] -- information-theoretic and geometric constraints converge

## Status

Established information theory. See Cover & Thomas, *Elements of Information Theory* (2nd ed., 2006). The approach to channel capacity by modern codes is experimentally demonstrated. The mapping to proportion is this project's structural interpretation.

---

*The mapping to the five properties is this project's structural interpretation.*