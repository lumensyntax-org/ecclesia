---
domain: construction
properties: [honesty, humility, proportion]
strength: STRONG
status: peer_reviewed
---

# Testing

**Source**: Kent Beck, *Test-Driven Development*, 2003; Edsger Dijkstra, EWD 249, 1972; Claessen & Hughes, QuickCheck, 2000

## Finding

Software testing asks a single structural question: does the code do what it claims? Unit tests, integration tests, and end-to-end tests form layers of honesty verification. TDD writes the test before the code -- the test defines expected behavior; the code is written to satisfy it. Property-based testing (QuickCheck) generates random inputs and checks that properties hold universally. Dijkstra observed: "Program testing can be used to show the presence of bugs, but never to show their absence." Testing is honest about its own limits.

## Pattern Mapping

**Honesty** -- Every test is a question: "Does this code do what it claims?" A passing test suite means behavior matches specification on tested inputs. A failing test is the code's honest admission of a gap.

**Humility** -- Dijkstra's observation is humility about testing itself: testing can catch failures but cannot prove correctness. TDD practitioners accept this, writing many small tests knowing each covers only its specific case.

**Proportion** -- Good test design tests what matters and avoids testing implementation details. Over-testing violates proportion; under-testing violates honesty.

## Connections

- [[The Bug]] -- testing is the systematic search for bugs (alignment gaps)
- [[Type Systems]] -- compile-time honesty enforcement complements runtime testing
- [[Bayesian Inference]] -- both update confidence based on evidence (-> [[Meta-Pattern 01]])
- [[Redundancy in Aviation]] -- aviation checklists are tests applied to physical systems
- [[Spectroscopy]] -- spectral analysis tests atomic identity; software testing tests code identity
- [[DNA as Communication]] -- DNA proofreading is molecular-level testing (-> [[Meta-Pattern 01]])

## Status

TDD is documented in Beck (2003). QuickCheck in Claessen and Hughes (ICFP 2000). Dijkstra's observation is from EWD 249 (1972). The characterization of tests as honesty mechanisms is this project's structural interpretation.

---

*The mapping to the five properties is this project's structural interpretation.*
