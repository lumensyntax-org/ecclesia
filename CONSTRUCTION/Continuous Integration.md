---
domain: construction
properties: [alignment, proportion, honesty]
strength: STRONG
status: peer_reviewed
---

# Continuous Integration / Continuous Deployment

**Source**: Martin Fowler, "Continuous Integration," 2006; Kent Beck, *Extreme Programming Explained*, 1999; Humble & Farley, *Continuous Delivery*, 2010

## Finding

CI/CD verifies alignment on every change rather than at release. Every commit triggers automated build and test. The structural insight is temporal: traditional development verified alignment periodically (quarterly, annually); CI/CD verifies it continuously. A bug introduced at 2:00 PM is caught at 2:05 PM, not three months later. The mean time to detection approaches zero. This does not eliminate bugs (testing's limits remain, per Dijkstra), but it minimizes the gap between introducing a misalignment and detecting it.

## Pattern Mapping

**Alignment** -- Alignment verified continuously rather than periodically. Every change is tested against the existing specification. The system asks, on every commit: does the code still do what it claims?

**Proportion** -- The response to a failing build is proportional: the specific breaking commit is identified and only that commit needs fixing. Compare release-cycle development where failure could have been introduced at any point in months of work.

**Honesty** -- The CI dashboard (green/red build status) is a public, real-time honesty display. Everyone sees whether the code is working. No hiding behind "it works on my machine."

## Connections

- [[Testing]] -- CI/CD automates test execution; testing provides the honesty checks CI runs
- [[The Bug]] -- CI/CD minimizes the time a bug exists undetected (-> [[Meta-Pattern 09 - Feedback and Homeostasis]])
- [[Version Control]] -- Git provides the infrastructure; CI/CD provides the verification layer
- [[Homeostasis]] -- biological homeostasis is continuous alignment verification; CI/CD is its engineering equivalent
- [[Feedback Control]] -- CI/CD is a feedback loop: commit -> test -> signal -> correction

## Status

Fowler (2006) is the standard reference. Beck (1999) provides theoretical foundation. Humble & Farley (2010) formalized the deployment pipeline. State of DevOps Report (DORA, annually since 2014) shows CI/CD correlates with delivery performance.

---

*The mapping to the five properties is this project's structural interpretation.*
