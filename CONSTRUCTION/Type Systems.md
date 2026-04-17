---
domain: construction
properties: [honesty, non_fabrication, alignment]
strength: STRONG
status: peer_reviewed
---

# Type Systems

**Source**: Haskell Curry, 1934; William Alvin Howard, 1969; Tony Hoare, QCon 2009

## Finding

A type system assigns a type to every expression in a program, restricting what operations are permitted. The Curry-Howard correspondence reveals the deepest connection: types ARE logical propositions; programs ARE proofs. A type `A -> B` corresponds to the logical implication "if A then B." A program of that type is a constructive proof. If no program of a given type can be written, the corresponding proposition is unprovable. Hoare called the null reference his "billion-dollar mistake" -- the introduction of a fabricated value (null pretending to be any type) into the type system.

## Pattern Mapping

**Honesty** -- The type system is a compile-time honesty enforcer. A function that claims to return an integer cannot return a string. The type IS the claim, and the compiler verifies it.

**Non-fabrication** -- In a sound type system, if the program compiles, the types are not fabricated. Null was the introduction of a fabricated value -- null pretending to be any type. Rust's `Option<T>` eliminates this fabrication.

**Alignment** -- The Curry-Howard correspondence reveals that the alignment between types and propositions is not metaphor. It is a formal isomorphism. Code that type-checks is, literally, a proof that the stated property holds.

## Connections

- [[The Bug]] -- type systems prevent entire classes of bugs at compile time
- [[Cryptography]] -- both enforce structural properties through mathematical constraint (-> [[Meta-Pattern 01]])
- [[Euler's Identity]] -- structural convergence: different domains reveal same deep connection
- [[Kolmogorov Complexity]] -- both formalize the relationship between structure and description
- [[Noether's Theorem]] -- Curry-Howard is to logic/computation as Noether is to symmetry/conservation

## Status

Curry-Howard is established mathematical logic (Sorensen and Urzyczyn, 2006). Hoare's "billion-dollar mistake" is from his 2009 QCon keynote. See Pierce, *Types and Programming Languages* (2002). The characterization as honesty enforcement is this project's structural interpretation.

---

*The mapping to the five properties is this project's structural interpretation.*
