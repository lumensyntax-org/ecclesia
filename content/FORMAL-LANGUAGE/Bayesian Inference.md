---
domain: formal-language
properties: [honesty, proportion, humility, non_fabrication]
strength: STRONG
status: peer_reviewed
---

# Bayesian Inference

**Source**: Thomas Bayes, 1763 (posthumous); Pierre-Simon Laplace, 1774

## Finding

Bayes' theorem: P(H|E) = P(E|H) * P(H) / P(E). The posterior probability of a hypothesis given evidence is proportional to the likelihood of evidence given hypothesis, times the prior. It is the mathematically correct way to update beliefs in light of new evidence. A strong prior should yield to strong contrary evidence. Without evidence, the posterior equals the prior. The framework prevents generating confidence where none is warranted.

## Pattern Mapping

**Honesty** -- Bayesian inference formalizes what honesty demands: beliefs should change in proportion to evidence. Refusing to update -- holding a prior fixed regardless of data -- is the mathematical equivalent of dishonesty.

**Proportion** -- The update is exactly proportional to evidence strength. Weak evidence produces small updates; strong evidence produces large ones. No overcorrection (fabricated certainty) or undercorrection (fabricated doubt).

**Humility** -- The prior acknowledges what you believed before evidence arrived. Making the prior explicit is an act of humility: admitting your starting position rather than pretending to begin from nowhere.

**Non-fabrication** -- Bayesian inference does not allow manufacturing certainty from nothing. Without discriminating evidence, the posterior equals the prior.

## Connections

- [[Testing]] -- both update confidence based on evidence (-> [[Meta-Pattern 01]])
- [[Error-Correcting Codes]] -- both are formal frameworks for maintaining signal integrity
- [[Photoelectric Effect]] -- Millikan's honest updating despite theoretical commitments
- [[Technical Debt]] -- failing to update code is refusing to update beliefs
- [[Propaganda]] -- propaganda exploits those who fail to update: the Big Lie persists despite evidence

## Status

Established probability theory. See Jaynes, *Probability Theory: The Logic of Science* (2003); Gelman et al., *Bayesian Data Analysis* (3rd ed., 2013). The mapping is this project's interpretation, though "rational belief revision" is standard epistemology.

---

*The mapping to the five properties is this project's structural interpretation.*
