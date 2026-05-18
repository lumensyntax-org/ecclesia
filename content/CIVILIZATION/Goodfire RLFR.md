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
RLFR proposes that internal model representations — features extracted via sparse autoencoders — contain reliable signals distinguishing factual grounding from fabrication, and that these signals can serve as reward in reinforcement learning to reduce hallucination. The structural claim underlying the method is that the boundary between knowledge and fabrication exists in representations, not only in outputs: the model's own internal state already discriminates what it knows from what it merely produces. This reframes alignment from "train the model to prefer truthful outputs" to "translate what the model's representations already encode into what the decoder emits."

## Pattern Mapping
**Honesty** -- RLFR makes the model's internal representations the arbiter of factual grounding, rather than external human raters. If representations contain the signal, honest output is a matter of translating what the model already knows, not what raters prefer. **Non-fabrication** -- the core problem RLFR addresses is fabrication: models producing outputs their own representations do not support. The Knowledge-Action Gap is precisely the gap between what features represent and what the decoder outputs.

## Connections
- [[RLHF Paradigm]] -- RLFR addresses RLHF's structural flaw by replacing preference with internal features (Meta-Pattern 01: Error Correction)
- [[Scientific Revolution]] -- both propose that evidence (internal features/empirical observation) should override authority (preference labels/tradition)
- [[Efficient Market Hypothesis]] -- both assume internal signals aggregate information honestly; both are approximately true
- [[Blood-Brain Barrier]] -- both are boundaries that separate what belongs from what does not, discovered upon examination (Meta-Pattern 02: The Boundary Pre-Exists)
- [[Price Mechanism]] -- internal features aggregate distributed knowledge, like prices aggregate distributed economic information

## Status
Preprint (arXiv 2026). Results should not be treated as established until peer-reviewed.

---

*The mapping to the five properties is this project's structural interpretation.*