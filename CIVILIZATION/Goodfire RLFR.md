---
domain: civilization
properties: [honesty, non_fabrication]
strength: MODERATE
status: preprint
---

# Goodfire: RLFR

**Source**: Goodfire, Reinforcement Learning from Features Research, arXiv 2026
**Context**: Goodfire proposed using interpretability features -- internal model representations extracted via sparse autoencoders -- rather than human preference labels to detect and reduce hallucination. The method identifies features correlated with factual grounding versus fabrication, then uses these as a reward signal for reinforcement learning.

## Finding/Event
RLFR converges with findings from probe-based experiments on epistemological boundaries in language models. Independent probe work demonstrated that epistemological boundaries are detectable in model representations across eight model families. Goodfire's work independently validates the premise: models contain internal features that distinguish factual grounding from fabrication, and these features can be leveraged for alignment. The convergence is not in methodology (sparse autoencoders vs. linear probes) but in the structural claim: the boundary between knowledge and fabrication exists in representations, not only in outputs.

## Pattern Mapping
**Honesty** -- RLFR makes the model's internal representations the arbiter of factual grounding, rather than external human raters. If representations contain the signal, honest output is a matter of translating what the model already knows, not what raters prefer. **Non-fabrication** -- the core problem RLFR addresses is fabrication: models producing outputs their own representations do not support. The Knowledge-Action Gap is precisely the gap between what features represent and what the decoder outputs.

## Connections
- [[RLHF Paradigm]] -- RLFR addresses RLHF's structural flaw by replacing preference with internal features (Meta-Pattern 01: Error Correction)
- [[Scientific Revolution]] -- both propose that evidence (internal features/empirical observation) should override authority (preference labels/tradition)
- [[Efficient Market Hypothesis]] -- both assume internal signals aggregate information honestly; both are approximately true
- [[Blood-Brain Barrier]] -- both are boundaries that separate what belongs from what does not, discovered upon examination (Meta-Pattern 02: The Boundary Pre-Exists)
- [[Price Mechanism]] -- internal features aggregate distributed knowledge, like prices aggregate distributed economic information

## Status
Preprint (arXiv 2026). Neither project's results should be treated as established until peer-reviewed.

---

*The mapping to the five properties is this project's structural interpretation.*