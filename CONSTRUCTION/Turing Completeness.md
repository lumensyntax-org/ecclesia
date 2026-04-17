---
domain: construction
properties: [alignment, humility, proportion]
strength: STRONG
status: peer_reviewed
---

# Turing Completeness

**Source**: Alan Turing, "On Computable Numbers," 1936; Alonzo Church, lambda calculus, 1936

## Finding

Turing demonstrated that a simple abstract machine -- a tape, a head, a state table -- can compute anything that is computable. Any system that can simulate a Turing machine is "Turing complete" and can compute anything any other Turing-complete system can. This includes every general-purpose programming language, Conway's Game of Life (1970), PowerPoint (Wildenhain, 2017), and Magic: The Gathering (Churchill et al., 2019). The Church-Turing thesis: the informal notion of "computable" corresponds exactly to "computable by a Turing machine." But the Halting Problem means no Turing machine can decide whether an arbitrary Turing machine will halt.

## Pattern Mapping

**Alignment** -- Turing completeness establishes exact equivalence between what different systems can compute. A Turing machine, a lambda calculus expression, and a Python program that compute the same function are structurally aligned despite radically different implementations.

**Humility** -- The Halting Problem is the price of universality. A system powerful enough to compute everything computable cannot fully predict its own behavior. This is a proved structural limit.

**Proportion** -- The minimal Turing machine is astonishingly simple. Yet it can compute anything computable. The minimum sufficient structure for universal computation is far less than one might expect.

## Connections

- [[Halting Problem]] -- the inherent limit of universal computation (-> [[Meta-Pattern 06]])
- [[Godel's Incompleteness Theorems]] -- structurally equivalent: self-reference establishing limits
- [[Big-O Notation]] -- complexity measures what Turing completeness guarantees is possible
- [[Continuum Hypothesis]] -- both reveal undecidable questions within formal systems
- [[Maxwell's Unification]] -- structural invariant: same phenomenon across different substrates

## Status

Turing (1936) and Church (1936) are foundational documents. Church-Turing thesis is a thesis, not a theorem. See Sipser, *Introduction to the Theory of Computation* (3rd ed., 2012). The mapping is this project's structural interpretation.

---

*The mapping to the five properties is this project's structural interpretation.*
