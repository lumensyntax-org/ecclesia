---
domain: shadow
properties: [alignment, honesty, humility, proportion]
strength: STRONG
status: peer_reviewed
---

# Dark Patterns in UX

**Source**: Harry Brignull, 2010; Gray et al., CHI '18, 2018; Mathur et al., CSCW '19, 2019

## Finding

Dark patterns are interface designs manipulating users against their interests: confirmshaming (guilt to prevent opt-out), hidden costs (fees revealed at checkout), roach motels (easy subscribe, hard cancel), misdirection (visual design drawing attention from unfavorable options), forced continuity (free trial silently converting to paid). Mathur et al. found dark patterns on 11% of ~11,000 shopping sites. The CCPA (2018) and EU Digital Services Act (2022) have begun regulating these patterns.

## Properties Violated

**Alignment** violated -- the interface claims to serve the user ("We value your experience") while actually serving conversion metrics. The misalignment is designed, tested, and A/B optimized.

**Honesty** violated -- the interface presents choices that are not genuine choices. A "close" button that subscribes is a lie embedded in the interface.

**Humility** violated -- the designer exercises authority over the user's attention, decisions, and wallet beyond legitimate scope. The user consented to use the product, not to be manipulated.

**Proportion** violated -- the effort to opt out vastly exceeds the effort to opt in. A deliberate asymmetry.

The structural signature: dark patterns weaponize the user's trust in interface conventions.

## Connections

- [[Network Effects and Lock-In]] -- dark patterns are the micro-tactics of lock-in (-> [[Meta-Pattern 06]])
- [[Confidence Trick]] -- both exploit trust in conventions
- [[Gaslighting]] -- both manipulate through designed environments
- [[Testing]] -- ethical testing verifies code honesty; dark patterns are designed test failures
- [[Propaganda]] -- both use aligned messaging to serve hidden purposes

## Status

Brignull at deceptive.design. Gray et al. (CHI '18). Mathur et al. (CSCW '19). CCPA and DSA are regulatory references. Structural analysis is this project's interpretation.

---

*The mapping to the five properties is this project's structural interpretation.*
