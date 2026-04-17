---
domain: construction
properties: [humility, proportion, honesty]
strength: STRONG
status: peer_reviewed
---

# Abstraction Layers

**Source**: Andrew Tanenbaum; Joel Spolsky, "The Law of Leaky Abstractions," 2002

## Finding

Modern computing is built in layers: transistors implement logic gates, logic gates implement processor instructions, processors run operating systems, operating systems provide system calls, libraries build on system calls, frameworks on libraries, applications on frameworks. Each layer provides a simplified interface to the layer above, hiding the complexity beneath. Spolsky identified the critical failure mode: all non-trivial abstractions are leaky. TCP guarantees reliable delivery -- until the network cable is cut. SQL abstracts data access -- until a query takes hours. The abstraction hides most complexity, but under stress, underlying reality leaks through.

## Pattern Mapping

**Humility** -- Each abstraction layer operates within its scope and claims no knowledge of what lies below or above. The file system does not know what files contain. The network stack does not know what packets mean. Deliberate, structural humility: authority is bounded.

**Proportion** -- A well-designed abstraction hides exactly the complexity the user does not need. Too many implementation details exposed: proportion violation upward. Critical failure modes hidden: proportion violation downward.

**Honesty** -- Spolsky's leaky abstractions are honesty failures: the abstraction claims to hide complexity, but under stress, hidden complexity reasserts itself. Abstractions are approximations, not truths.

## Connections

- [[Unix Philosophy]] -- Unix tools are abstraction layers with minimal scope
- [[Phase Transitions]] -- leaky abstractions are phase transitions: continuous stress, discontinuous failure (-> [[Meta-Pattern 05]])
- [[The Visible Window]] -- human vision is a biological abstraction layer hiding the full EM spectrum
- [[Graceful Degradation vs Catastrophic Failure]] -- leaky abstractions can cascade
- [[Topology]] -- topology strips surface detail to find invariants; abstraction strips implementation detail

## Status

Tanenbaum, *Structured Computer Organization* (6th ed., 2012). Spolsky's essay (2002). TCP/IP model (Cerf and Kahn, 1974). The characterization as humility mechanisms is this project's structural interpretation.

---

*The mapping to the five properties is this project's structural interpretation.*
