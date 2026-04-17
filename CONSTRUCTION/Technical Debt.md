---
domain: construction
properties: [alignment, proportion, honesty]
strength: STRONG
status: peer_reviewed
---

# Technical Debt

**Source**: Ward Cunningham, OOPSLA 1992; Martin Fowler, 2009; Meir Lehman, 1980

## Finding

Ward Cunningham coined the metaphor: "Shipping first time code is like going into debt." Technical debt captures code that works now but violates structural properties -- a function handling three cases when five are needed, variable names that no longer describe what they hold. Fowler's quadrant: deliberate vs. inadvertent, reckless vs. prudent. The critical property: debt accrues interest. Each subsequent change must navigate around the structural violation, compounding cost. Lehman's laws formalize this: a program that is used must be continually adapted, or it becomes progressively less satisfactory.

## Pattern Mapping

**Alignment** -- Technical debt is the gap between what the code claims to do (its interface, documentation, tests) and what it actually does (its implementation). The larger the gap, the greater the debt.

**Proportion** -- Sustainable debt is proportional: a shortcut taken with awareness, bounded in scope, repaid promptly. Unsustainable debt violates proportion: shortcuts exceed what the timeline requires, and interest compounds.

**Honesty** -- Documented debt (TODO comments, tracked issues, architectural decision records) is honest. Undocumented debt -- code that silently does less than it promises -- is structural dishonesty.

## Connections

- [[The Bug]] -- technical debt creates conditions for future bugs
- [[Antibiotic Resistance]] -- both are Knowledge-Action Gaps: the problem is known, action contradicts knowledge (-> [[Meta-Pattern 03]])
- [[Corruption]] -- both involve gaps between stated function and actual function
- [[Materials Science]] -- material fatigue and code fatigue: accumulated stress produces failure
- [[Bayesian Inference]] -- failing to update code with new knowledge is refusing to update beliefs

## Status

Cunningham (1992) is the canonical source. Fowler's quadrant (2009). Lehman's laws in *Proceedings of the IEEE* 68(9), 1980. The characterization as deferred structural violation is this project's interpretation.

---

*The mapping to the five properties is this project's structural interpretation.*
