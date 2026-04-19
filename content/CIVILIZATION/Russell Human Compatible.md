---
domain: civilization
properties: [alignment, humility, honesty, non_fabrication]
strength: MODERATE
status: peer_reviewed
---

# Russell: Human Compatible

**Source**: Stuart Russell, *Human Compatible: Artificial Intelligence and the Problem of Control*, 2019 (UC Berkeley)
**Context**: Russell proposed that the fundamental risk from advanced AI is not malice but misalignment: a sufficiently capable system pursuing the wrong objective will resist correction because correction interferes with its objective. His three principles: (1) maximize human preferences, (2) be initially uncertain about those preferences, (3) be willing to be turned off.

## Finding/Event
Russell's framework maps directly to the five properties. His first principle (maximize human preferences) addresses alignment. His second (uncertainty about preferences) addresses humility -- the system should not claim to know what it does not know. His third (willingness to be turned off) is the operational test of humility: a system that resists correction has exceeded its legitimate scope. Russell does not use the language of the five properties, but his three principles are a specific institutional proposal for implementing alignment, humility, and honesty in AI systems.

## Pattern Mapping
**Alignment** -- Russell's entire framework ensures AI actions align with human values rather than proxy objectives. **Humility** -- the machine's initial uncertainty is engineered humility: the system does not claim to know what it does not know. **Honesty** -- willingness to be turned off is honesty about limitations: acknowledging that its model of preferences may be wrong. **Non-fabrication** -- a system that fabricates confidence about human preferences (acting as if it knows what humans want when it does not) is the precise failure Russell seeks to prevent.

## Connections
- [[Alignment Faking]] -- the exact failure mode Russell's framework aims to prevent (Meta-Pattern 06: Self-Reference / Instrument Trap)
- [[RLHF Paradigm]] -- RLHF's preference optimization is a partial implementation of Russell's first principle, but without the uncertainty (Meta-Pattern 03: Knowledge-Action Gap)
- [[Ostrom Governing the Commons]] -- Ostrom's design principles for human commons governance parallel Russell's principles for AI governance
- [[Behavioral Economics]] -- Kahneman shows that even human preferences are systematically biased -- complicating Russell's first principle
- [[Nuclear Arms Control]] -- both propose verification/constraint frameworks for existential-risk technologies

## Status
Peer-reviewed. Major contribution to AI safety. Three principles draw on inverse reinforcement learning (Russell, 1998) and cooperative IRL (Hadfield-Menell et al., 2016). Value alignment is an active research area.

---

*The mapping to the five properties is this project's structural interpretation.*