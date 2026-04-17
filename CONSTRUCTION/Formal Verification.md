---
domain: construction
properties: [alignment, honesty, humility]
strength: STRONG
status: peer_reviewed
---

# Formal Verification

**Source**: Coq (Coquand & Huet, INRIA, 1989); Lean (de Moura, Microsoft Research, 2013); CompCert (Leroy, INRIA, 2006); seL4 (NICTA/Data61, 2009)

## Finding

Formal verification uses proof assistants to prove that software satisfies its specification with mathematical certainty. CompCert is a formally verified C compiler: every compilation step is proved to preserve semantics. seL4 is a formally verified microkernel: the C code is proved to implement its abstract specification. Through the Curry-Howard correspondence, writing a formally verified program and writing a mathematical proof are the same activity. The type of a program IS its specification; a type-checking program IS a proof. This is the strongest possible alignment: the code does not merely claim to satisfy its specification -- the code IS the proof.

## Pattern Mapping

**Alignment** -- Alignment at its absolute limit. Specification and implementation are connected by machine-checked proof. No gap, no approximation, no "works on tested inputs." Total alignment within the scope of the specification.

**Honesty** -- The proof assistant rejects any step not logically justified. No hand-waving, no appeals to intuition, no "it probably works." The machine accepts proof or rejects non-proof.

**Humility** -- The proof guarantees code matches spec, but the spec itself must be correct. seL4 is proved to implement its spec; whether the spec captures user needs is a separate question. Specification is the boundary of verification's authority.

## Connections

- [[Type Systems]] -- Curry-Howard correspondence makes types and propositions the same object
- [[Testing]] -- testing can falsify but not verify; formal verification can prove (-> [[Meta-Pattern 02 - The Boundary Pre-Exists]])
- [[Encryption and Hashing]] -- cryptographic proofs share the structure of irrefutable verification
- [[DNA Error Correction]] -- molecular proofreading achieves biological verification at 10^-9 error rate (-> [[Meta-Pattern 01 - Error Correction]])
- [[Scientific Revolution]] -- "Nullius in verba" and formal verification both demand evidence over authority

## Status

CompCert published in Leroy (CACM 52(7), 2009). seL4 in Klein et al. (SOSP 2009). CertiKOS in Gu et al. (OSDI 2016). Curry-Howard is established mathematics. Characterization as strongest alignment is this project's interpretation.

---

*The mapping to the five properties is this project's structural interpretation.*
