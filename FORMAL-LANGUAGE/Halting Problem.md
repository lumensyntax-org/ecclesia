---
domain: formal-language
properties: [humility, non_fabrication, honesty]
strength: STRONG
status: peer_reviewed
---

# Halting Problem

**Source**: Alan Turing, "On Computable Numbers, with an Application to the Entscheidungsproblem," 1936

## Finding

Turing proved that no general algorithm can determine whether an arbitrary Turing machine will halt on a given input. The proof is by contradiction using self-reference: assume a halting-decider H exists. Construct D that does the opposite of what H predicts. H cannot exist. This is structurally parallel to Godel's incompleteness (1931) -- both use self-reference to establish inherent limits.

## Pattern Mapping

**Humility** -- A universal computing machine, despite being able to simulate any other machine, cannot fully predict its own behavior. This is not an engineering gap; it is a theorem about structure. The system's authority does not extend to complete self-knowledge.

**Non-fabrication** -- Any claim to have built a universal program verifier that checks all programs for halting would be fabrication. The theorem proves it cannot exist.

**Honesty** -- The Halting Problem establishes an honesty constraint on computer science: there are questions about computation that no computation can answer. Acknowledging this is the foundation of computability theory.

## Connections

- [[Turing Completeness]] -- the Halting Problem is the structural limit of universal computation (-> [[Meta-Pattern 06]])
- [[Godel's Incompleteness Theorems]] -- structurally equivalent proofs via self-reference
- [[Continuum Hypothesis]] -- both establish undecidability within formal systems
- [[The Landscape Problem]] -- both face questions a framework cannot answer about itself
- [[Kolmogorov Complexity]] -- Kolmogorov complexity is uncomputable, a consequence of the Halting Problem

## Status

Foundational document of computer science. See Davis, *The Undecidable* (1965); Hofstadter, *Godel, Escher, Bach* (1979). The parallel between Turing and Godel is standard mathematical logic. The mapping is this project's interpretation.

---

*The mapping to the five properties is this project's structural interpretation.*
