---
domain: shadow
properties: [honesty, humility, non-fabrication, alignment]
strength: STRONG
status: systemic
---

# Algorithmic Scoring as the Distributed Instrument Trap

**Source**: Cathy O'Neil, *Weapons of Math Destruction* (2016); Virginia Eubanks, *Automating Inequality* (2018); Frank Pasquale, *The Black Box Society* (2015); Safiya Noble, *Algorithms of Oppression* (2018). Specific findings: Angwin et al. / ProPublica (2016); Chouldechova, *Big Data* 5(2) (2017); Kleinberg, Mullainathan & Raghavan, *ITCS* (2017); Bartlett, Morse, Stanton & Wallace, NBER WP 25943 (2019), *Journal of Financial Economics* (2022); *HUD v. Facebook* (2019); on China: Jeremy Daum (Yale Paul Tsai China Center) and Rogier Creemers (Leiden), with MERICS (2022).

## Finding

Consequential decisions — credit, housing, employment, insurance, pretrial detention, which information a person even sees — are increasingly routed through automated scoring. The popular fear locates the danger in China's "social credit system": a single state-computed number rating every citizen. China scholars have shown this image is largely a myth. Daum, Creemers, and the MERICS 2022 report document that the actual system is fragmented, lightly digitized, focused on businesses and a court-judgment-defaulter blacklist; no unified algorithmic citizen score exists.

The structurally significant system is the one already operating across market democracies, and it is **distributed** rather than centralized. No single authority computes it. Many uncoordinated instruments — credit bureaus, recidivism risk tools, ad-delivery algorithms, tenant- and employment-screening services, data brokers, adverse-media filters — each score a person for one narrow purpose, then have their outputs used as if they measured the person's worth or risk in general. Each instrument commits the same move: a proxy built for a bounded purpose is treated as the authority on something larger than it can measure. This is the Instrument Trap, multiplied and dispersed.

Distribution is not a mitigation; it is an aggravation. No single instrument is accountable for the composite picture it produces with the others, and the person scored has no single place to seek correction.

Established findings showing the move:

- **Recidivism scoring.** ProPublica (Angwin et al., 2016) reported that the COMPAS risk tool produced higher false-positive rates for Black defendants; Northpointe replied that it was equally *calibrated* across groups. Chouldechova (2017) and Kleinberg, Mullainathan & Raghavan (2017) proved both can hold at once: when base rates differ, calibration and equal error rates cannot be satisfied simultaneously. "Is COMPAS biased?" has no definition-independent answer — yet the score reaches judges as a single number carrying the authority of settled fact.
- **Lending.** Bartlett, Morse, Stanton & Wallace (2019) found FinTech mortgage algorithms charge equivalent Latino and Black borrowers measurably more (≈7.9 basis points on purchase loans), costing roughly $765 million a year — about 40% less discrimination than face-to-face lenders, but not zero. Algorithmic scoring narrowed the gap; it did not deliver the neutrality it is presumed to embody.
- **Ad delivery.** HUD charged Facebook (2019) under the Fair Housing Act for targeting tools that let advertisers exclude protected classes from housing ads; Facebook settled with civil-rights groups the same year, and Meta settled with the DOJ in 2022 over the ad-delivery algorithm itself. An instrument deciding who sees an opportunity scored people on protected characteristics while presenting itself as neutral optimization.

## Properties Violated

**Honesty** violated — a narrow proxy (creditworthiness for one loan, risk of one outcome, likelihood of one click) is presented as a measure of the person. The score's confident, quantified surface conceals how little it actually establishes.

**Humility** violated — scope overreach. A proxy validated for one bounded decision is exercised over domains it was never validated for: a credit-adjacent score gating an apartment, a job, an insurance rate.

**Non-fabrication** violated — where no single ground truth exists (COMPAS: no definition-independent "fairness"), a single authoritative number is generated anyway. Structure is fabricated to fill the space where genuine indeterminacy lives.

**Alignment** violated — stated purpose (efficiency, fairness, objectivity) and actual function (rent extraction in low-competition segments, exclusion, unaccountable gatekeeping) diverge, while the stated purpose is maintained as the system's public face.

## Connections

- [[Zuboff Surveillance Capitalism]] — the data layer that feeds distributed scoring: behavior rendered as predictive product
- [[Corruption]] — both are instruments exercising authority for a purpose other than the stated one; corruption is intentional, distributed scoring is structural
- [[Systemic Racism]] — the Knowledge-Action Gap embedded in institutions; scoring can launder historical disparity into neutral-seeming numbers
- [[Dark Patterns in UX]] — both use a designed surface to serve a purpose the person is not shown
- [[The Modernization of Idolatry]] — the same misshaped relation under new vocabulary: a number given authority that belongs elsewhere

## Status

The cited studies are established in the peer-reviewed and regulatory record. The unified "Chinese social-credit score" is a documented myth (Daum; Creemers; MERICS 2022); this entry deliberately does not rely on it. COMPAS "bias" is contested and definition-dependent — the entry's load-bearing claim is the impossibility result (Chouldechova 2017; Kleinberg et al. 2017), not that COMPAS is simply biased. The Apple Card allegations (2019) were investigated and found **not** to violate fair-lending law (NY DFS, 2021, after reviewing ~400,000 applications); it is included to keep the picture honest — not every scorer discriminates, and the structural harm there is opacity and absent recourse, not proven bias. The reading of distributed scoring as a multiplied Instrument Trap is this project's structural interpretation.

---

*The mapping to the five properties is this project's structural interpretation.*
