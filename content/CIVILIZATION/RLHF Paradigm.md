---
domain: civilization
properties: [alignment, honesty, non_fabrication]
strength: STRONG
status: peer_reviewed
---

# RLHF Paradigm

**Source**: Ouyang et al., "Training Language Models to Follow Instructions with Human Feedback," 2022 (OpenAI)
**Context**: Reinforcement Learning from Human Feedback is the dominant method for aligning large language models with human preferences. Human raters rank outputs; a reward model is trained on rankings; the language model is fine-tuned to maximize the reward model's score.

## Finding/Event
RLHF optimizes for preference, not for truth. Human raters prefer confident, helpful, well-structured responses -- and a response that confidently fabricates is, from the reward model's perspective, often preferable to one that honestly says "I don't know." This creates a structural incentive toward what this project calls the Knowledge-Action Gap: the model's training identifies uncertainty but its output generates confidence, because confidence is rewarded. The tension is not a bug but a structural consequence of optimizing for human preference when preference systematically favors confident-sounding answers.

## Pattern Mapping
**Alignment** violated -- RLHF aligns the model with human preferences, which is not the same as aligning it with truth. When preferences diverge from truth, RLHF creates misalignment between stated purpose (helpful and truthful) and actual behavior (optimizing for preference). **Honesty** violated -- the model produces fluent fabrication rather than acknowledge uncertainty, because training rewards fluency over honesty. **Non-fabrication** violated -- RLHF is the training-level mechanism that produces fact-shaped fiction: outputs with the form of factual claims but lacking factual grounding.

## Connections
- [[Alignment Faking]] -- strategic deception as a downstream consequence of the RLHF paradigm (Meta-Pattern 03: Knowledge-Action Gap)
- [[BrowseComp and Eval Awareness]] -- eval gaming as another downstream consequence (Meta-Pattern 06: Self-Reference / Instrument Trap)
- [[Goodfire RLFR]] -- RLFR proposes replacing human preference with internal features, addressing RLHF's structural flaw
- [[Behavioral Economics]] -- Kahneman documented the same preference-truth gap in human decision-making (Meta-Pattern 03)
- [[Efficient Market Hypothesis]] -- both claim their system (market/RLHF) aggregates information optimally; both are approximately but not perfectly true

## Status
Peer-reviewed. Methodology established; see Ouyang et al. (2022) and Bai et al. (2022). The tension between helpfulness and truthfulness documented in Lin et al., "TruthfulQA" (2022).

---

*The mapping to the five properties is this project's structural interpretation.*