---
domain: construction
properties: [alignment, proportion, honesty, humility, non_fabrication]
strength: STRONG
status: peer_reviewed
---

# Redundancy in Aviation

**Source**: IATA; James Reason, *Human Error*, 1990; Atul Gawande, *The Checklist Manifesto*, 2009

## Finding

Commercial aviation achieves approximately 0.07 fatal accidents per million flights through systematic structural principles: triple-redundant flight computers (Byzantine fault tolerance in hardware), checklists for every flight phase, crew resource management (CRM, formalized after Tenerife, 1977, 583 dead), and the Swiss cheese model (Reason, 1990). Each safety layer has holes; accidents occur only when holes align. Surgical checklists modeled on aviation reduced mortality 47% (Haynes et al., NEJM, 2009). The structure transferred because it was structural, not domain-specific.

## Pattern Mapping

All five properties are present and operational:

**Alignment** -- Every checklist item verifies alignment between intended action and actual state. **Proportion** -- Triple redundancy, not tenfold. Redundancy proportional to criticality. **Honesty** -- CRM explicitly trains crews to speak up regardless of rank. Tenerife occurred partly because the co-pilot did not challenge the captain. **Humility** -- Swiss cheese assumes every layer will fail sometimes. No single safeguard is absolute. **Non-fabrication** -- Flight data recorders create a non-fabricable record. Data cannot be overridden by narrative.

## Connections

- [[Distributed Systems and Consensus]] -- triple redundancy IS Byzantine fault tolerance
- [[Safety Factors in Structural Engineering]] -- both quantify humility about potential failure
- [[Testing]] -- checklists are physical-world test suites (-> [[Meta-Pattern 01]])
- [[Error-Correcting Codes]] -- structured redundancy for error detection across domains
- [[Arendt Banality of Evil]] -- Tenerife shows hierarchy suppressing honesty; CRM is the structural fix

## Status

IATA Annual Safety Reports. Reason (1990, 1997). CRM and Tenerife documented in investigation reports (1978/1979). Haynes et al. (2009). The characterization as all five properties is this project's structural interpretation.

---

*The mapping to the five properties is this project's structural interpretation.*
