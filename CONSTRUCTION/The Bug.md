---
domain: construction
properties: [alignment, honesty, non_fabrication]
strength: STRONG
status: historical
---

# The Bug

**Source**: Grace Hopper, 1947; Thomas Edison, 1878

## Finding

On September 9, 1947, operators of the Harvard Mark II found a moth trapped in Relay #70, causing a malfunction. Hopper's team taped it into the logbook with the annotation "First actual case of bug being found." Every software bug is, structurally, a violation of alignment: the code's stated purpose and its actual behavior diverge. A null pointer dereference, a race condition, a buffer overflow -- each is a measurable gap between intent and execution. The entire history of debugging is the history of detecting and closing alignment gaps.

## Pattern Mapping

**Alignment** -- Every bug is a measurable gap between what the code should do and what it does. Debugging is alignment verification. The tools evolve (print statements, symbolic debuggers, static analysis, formal verification) but the structure of the problem is invariant: find where intent and execution diverge.

**Honesty** -- A bug report that says "works as intended" when the software crashes is dishonesty. Good bug tracking (Bugzilla, Jira) is a culture of honest documentation: what happened, what was expected, what the gap is.

**Non-fabrication** -- Marking a known bug as "won't fix" without disclosing it to users fabricates the appearance of correctness where none exists.

## Connections

- [[Testing]] -- tests are the systematic search for alignment gaps (-> [[Meta-Pattern 01]])
- [[Type Systems]] -- type systems catch alignment failures at compile time
- [[Redundancy in Aviation]] -- aviation checklists verify alignment between intended and actual state
- [[Cancer]] -- cancer is the biological bug: cell behavior diverges from organismic purpose
- [[Autoimmune Disease]] -- immune classification error parallels software misclassification
- [[Error-Correcting Codes]] -- structured redundancy to detect and correct errors (-> [[Meta-Pattern 01]])

## Status

The moth incident is documented fact (Smithsonian logbook). The structural characterization of all bugs as alignment failures is this project's interpretation, consistent with Dijkstra's definition of correctness (1972).

---

*The mapping to the five properties is this project's structural interpretation.*
