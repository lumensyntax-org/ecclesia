---
domain: construction
properties: [proportion, honesty, humility]
strength: STRONG
status: peer_reviewed
---

# Big-O Notation

**Source**: Paul Bachmann, 1894; Donald Knuth, *The Art of Computer Programming*, 1968

## Finding

Big-O notation describes the asymptotic upper bound of an algorithm's resource consumption as a function of input size n. O(1) is constant. O(log n) is logarithmic. O(n) is linear. O(n log n) is the lower bound for comparison-based sorting. O(2^n) is exponential. The same task can require wildly different resources: searching a sorted billion-element array is 30 steps with binary search (O(log n)) versus a billion with linear search (O(n)). The P vs NP problem ($1M Clay Prize) asks whether every efficiently verifiable problem is also efficiently solvable. It is open.

## Pattern Mapping

**Proportion** -- Big-O is proportion formalized. An O(n) algorithm uses resources proportional to its input. An O(n^2) algorithm uses resources disproportionate to its input at large scale. Algorithm design is the pursuit of minimum complexity for a given task.

**Honesty** -- Big-O makes the cost of computation explicit. A function advertised as "fast" that runs in O(2^n) is dishonest at scale. The notation forces honest disclosure of asymptotic behavior.

**Humility** -- P vs NP is the deepest open problem about computational proportion: are there problems where verification is inherently easier than solution? If P is not NP, no cleverness can close the gap.

## Connections

- [[Turing Completeness]] -- Big-O measures cost within the space Turing completeness defines
- [[Kolmogorov Complexity]] -- both formalize relationships between structure and resource cost
- [[Zeno's Paradoxes and Calculus]] -- both analyze asymptotic behavior of processes (-> [[Meta-Pattern 04]])
- [[Feedback Control]] -- PID tuning and algorithm optimization: proportion between input and response
- [[Halting Problem]] -- both address fundamental limits of computation

## Status

Big-O is standard (Knuth, SIGACT News 8(2), 1976). P vs NP is a Clay Millennium Problem (Cook, 2000). See Cormen et al., *Introduction to Algorithms* (4th ed., 2022). The characterization as formalized proportion is this project's interpretation.

---

*The mapping to the five properties is this project's structural interpretation.*
