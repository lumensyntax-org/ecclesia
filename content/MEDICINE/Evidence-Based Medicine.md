---
domain: medicine
properties: [honesty, non_fabrication, humility]
ecclesia_legacy:
  status: peer_reviewed
  strength: STRONG
  from_commit: db4ed54e3768e7fbaf023e0b7c73b58cf48d108b
  migration_state: migrated
ecclesia:
  schema_version: 1
  entry_kind: source_analysis
  coverage: partial
  coverage_notes: >-
    Not reached: the full text of Sackett et al. (BMJ 1996). The PubMed record has no abstract;
    the PMC copy is a scanned PDF served behind a browser challenge page; bmj.com and Europe PMC
    returned HTTP 403. So the quoted definition and the Institution line (McMaster University)
    are unchecked. The Oxford CEBM Levels of Evidence page, tried as a source for where expert
    opinion sits, returned an empty HTTP 202 response, so the claim that expert opinion is at
    the bottom of the hierarchy is unchecked. The explanation of why expert opinion ranks lowest
    has no source in the entry and none was found. The sentence that the mapping is this project's
    interpretation is not a factual claim and was not treated as one. Three claims (grade_beyond_design,
    selective_publication, greenhalgh_expert_judgment) are not in the prose; they come from the
    two papers cited in Status and are added so that the mapping limits rest on opened sources.
  review_status: partial
  reviews: []
  sources:
  - id: sackett_1996
    citation: >-
      Sackett DL, Rosenberg WM, Gray JA, Haynes RB, Richardson WS. Evidence based medicine: what
      it is and what it isn't. BMJ 312(7023):71-72, 1996.
    source_kind: academic_article
    origin: external
    url: https://doi.org/10.1136/bmj.312.7023.71
    academic_review:
      status: not_documented
      note: This record does not document a peer-review process.
  - id: grade_2004
    citation: >-
      Atkins D, Best D, Briss PA, Eccles M, Falck-Ytter Y, Flottorp S, Guyatt GH, et al.; GRADE
      Working Group. Grading quality of evidence and strength of recommendations. BMJ 328(7454):1490,
      2004.
    source_kind: academic_article
    origin: external
    url: https://doi.org/10.1136/bmj.328.7454.1490
    academic_review:
      status: not_documented
      note: This record does not document a peer-review process.
  - id: greenhalgh_2014
    citation: >-
      Greenhalgh T, Howick J, Maskrey N; Evidence Based Medicine Renaissance Group. Evidence based
      medicine: a movement in crisis? BMJ 348:g3725, 2014.
    source_kind: academic_article
    origin: external
    url: https://doi.org/10.1136/bmj.g3725
    academic_review:
      status: not_documented
      note: This record does not document a peer-review process.
  claims:
  - id: sackett_citation
    text: >-
      Sackett and four co-authors published "Evidence based medicine: what it is and what it isn't"
      in BMJ volume 312 in 1996.
    claim_kind: historical_textual
    supports:
    - source_id: sackett_1996
      locator:
        kind: other
        value: PubMed record PMID 8555924, citation line
      support: direct
      note: >-
        The record lists five authors with Sackett first. The entry's Finding attributes the definition
        to David Sackett alone; the paper is jointly authored.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=8555924&rettype=abstract&retmode=text
        accessed: '2026-11-17'
        quote: >-
          BMJ. 1996 Jan 13;312(7023):71-2. doi: 10.1136/bmj.312.7023.71. Evidence based medicine:
          what it is and what it isn't. Sackett DL, Rosenberg WM, Gray JA, Haynes RB, Richardson
          WS.
        claim_digest: sha256:f2eac5061981abd25696295979801afb5389efff8cb555971e9366df4432587c
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: sackett_institution
    text: The 1996 paper came from McMaster University.
    claim_kind: historical_textual
    supports:
    - source_id: sackett_1996
      locator: null
      support: unassessed
      note: >-
        Neither the PubMed record nor the PMC landing page gives author affiliations, and the
        full text was not reached, so the affiliation of the authors in 1996 was not checked.
      reviews: []
      review_status: pending
    origin: source_summary
    reviews: []
    review_status: pending
  - id: sackett_definition
    text: >-
      The 1996 paper defines evidence based medicine as the conscientious, explicit and judicious
      use of current best evidence in making decisions about the care of individual patients.
    claim_kind: historical_textual
    supports:
    - source_id: sackett_1996
      locator: null
      support: unassessed
      note: >-
        The PubMed record has no abstract. The PMC copy is a scanned PDF behind a browser challenge
        page, and bmj.com and Europe PMC returned HTTP 403. The quoted wording was not seen in
        any opened source.
      reviews: []
      review_status: pending
    origin: source_summary
    reviews: []
    review_status: pending
  - id: hierarchy_top
    text: >-
      Evidence based medicine ranks evidence by study design, with systematic reviews and randomised
      trials at the top.
    claim_kind: historical_textual
    supports:
    - source_id: grade_2004
      locator:
        kind: section
        value: 'Box 2: Criteria for assigning grade of evidence'
      support: partial
      note: >-
        GRADE starts randomised trials at the highest grade and observational studies lower. It
        does not place systematic reviews at the top of a ranking; it uses systematic reviews
        as the basis for grading. Its Table 1 faults other systems for judging quality on study
        design alone, and it lets the starting grade go down or up.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://pmc.ncbi.nlm.nih.gov/articles/PMC428525/
        accessed: '2026-11-17'
        quote: >-
          Box 2: Criteria for assigning grade of evidence Type of evidence Randomised trial =
          high Observational study = low Any other evidence = very low
        claim_digest: sha256:75a27a59a32b119ea3bb2cdf50d0f453c28f01a5bcc9f3da9b4dbbecf3d6f29a
      review_status: partial
    - source_id: greenhalgh_2014
      locator:
        kind: paragraph
        value: Opening paragraph
      support: partial
      note: >-
        Describes the original programme of the evidence based medicine working group: tradition
        and anecdote to be replaced by evidence from trials and observational studies, combined
        with clinical expertise. It does not set out a ranked hierarchy. Whether EBM itself 'established'
        the hierarchy, as the entry says, was not checked.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://pmc.ncbi.nlm.nih.gov/articles/PMC4056639/
        accessed: '2026-11-17'
        quote: >-
          Tradition, anecdote, and theoretical reasoning from basic sciences would be replaced
          by evidence from high quality randomised controlled trials and observational studies,
          in combination with clinical expertise and the needs and wishes of patients.
        claim_digest: sha256:75a27a59a32b119ea3bb2cdf50d0f453c28f01a5bcc9f3da9b4dbbecf3d6f29a
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: hierarchy_expert_bottom
    text: In that hierarchy expert opinion sits at the bottom.
    claim_kind: historical_textual
    supports:
    - source_id: grade_2004
      locator: null
      support: unassessed
      note: >-
        GRADE does not mention expert opinion as a category of evidence; its lowest starting grade
        is 'Any other evidence = very low'. Reading expert opinion into that category would be
        an inference. The Oxford CEBM Levels of Evidence page, which might show it, returned an
        empty response and was not reached.
      reviews: []
      review_status: pending
    origin: source_summary
    reviews: []
    review_status: pending
  - id: bias_ranking
    text: The hierarchy orders kinds of evidence by how well each resists bias.
    claim_kind: historical_textual
    supports:
    - source_id: grade_2004
      locator:
        kind: section
        value: Definitions; Study quality; Box 2
      support: partial
      note: >-
        GRADE defines quality as confidence that an estimate of effect is correct, and lowers
        it for study limitations and reporting bias. Bias is one component: inconsistency, indirectness
        and imprecision also lower the grade. So 'ranks evidence by resistance to bias' is a narrower
        framing than the source's.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://pmc.ncbi.nlm.nih.gov/articles/PMC428525/
        accessed: '2026-11-17'
        quote: >-
          the quality of evidence indicates the extent to which one can be confident that an estimate
          of effect is correct.
        claim_digest: sha256:77b908baec62213bdbb8835801cb8f4dae55b066f1a94d6850976d491c51a52a
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://pmc.ncbi.nlm.nih.gov/articles/PMC428525/
        accessed: '2026-11-17'
        quote: >-
          For randomised trials, for example, reviewers might use criteria such as the adequacy
          of allocation concealment, blinding, and follow up.
        claim_digest: sha256:77b908baec62213bdbb8835801cb8f4dae55b066f1a94d6850976d491c51a52a
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://pmc.ncbi.nlm.nih.gov/articles/PMC428525/
        accessed: '2026-11-17'
        quote: High probability of reporting bias (- 1)
        claim_digest: sha256:77b908baec62213bdbb8835801cb8f4dae55b066f1a94d6850976d491c51a52a
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: randomization_confounders
    text: Randomised trials control for confounding through randomisation.
    claim_kind: empirical
    supports:
    - source_id: grade_2004
      locator:
        kind: section
        value: Study design; Box 2
      support: partial
      note: >-
        GRADE shows that observational results can diverge from later trials (hormone replacement
        therapy) and treats plausible confounding as a consideration for observational evidence.
        It does not state the mechanism by which randomisation controls confounding.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://pmc.ncbi.nlm.nih.gov/articles/PMC428525/
        accessed: '2026-11-17'
        quote: >-
          Although observational studies commonly have results that are similar to those of randomised
          trials, this is not always the case.
        claim_digest: sha256:c3dd7ccd63837fe4e4665ffed7fdce8fa2f68b6fd2aeae03d87c3f0d25abea7a
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://pmc.ncbi.nlm.nih.gov/articles/PMC428525/
        accessed: '2026-11-17'
        quote: >-
          based on consistent evidence from two or more observational studies, with no plausible
          confounders (+1)
        claim_digest: sha256:c3dd7ccd63837fe4e4665ffed7fdce8fa2f68b6fd2aeae03d87c3f0d25abea7a
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: expert_bias_reason
    text: >-
      Expert opinion ranks lowest not because experts are wrong but because individual judgment
      is the most susceptible to bias, selective memory and motivated reasoning.
    claim_kind: empirical
    supports:
    - source_id: grade_2004
      locator: null
      support: unassessed
      note: >-
        No opened source gives this rationale. GRADE does not discuss expert opinion, and the
        Sackett full text was not reached.
      reviews: []
      review_status: pending
    origin: source_summary
    reviews: []
    review_status: pending
  - id: grade_citation
    text: >-
      The GRADE Working Group published its approach to grading quality of evidence and strength
      of recommendations in BMJ volume 328 in 2004.
    claim_kind: historical_textual
    supports:
    - source_id: grade_2004
      locator:
        kind: other
        value: PMC article header
      support: direct
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://pmc.ncbi.nlm.nih.gov/articles/PMC428525/
        accessed: '2026-11-17'
        quote: BMJ . 2004 Jun 19;328(7454):1490.
        claim_digest: sha256:0cc77a48b50cb94bce7b33a38e6f3afc7b0cbeea41b754df6e9dbdcbfe8e43f6
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://pmc.ncbi.nlm.nih.gov/articles/PMC428525/
        accessed: '2026-11-17'
        quote: Grading quality of evidence and strength of recommendations GRADE Working Group
        claim_digest: sha256:0cc77a48b50cb94bce7b33a38e6f3afc7b0cbeea41b754df6e9dbdcbfe8e43f6
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: grade_beyond_design
    text: >-
      GRADE judges quality of evidence on study design together with study quality, consistency
      and directness, and holds that observational studies can sometimes give better evidence
      than randomised trials.
    claim_kind: historical_textual
    supports:
    - source_id: grade_2004
      locator:
        kind: section
        value: Table 1; Study design
      support: direct
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://pmc.ncbi.nlm.nih.gov/articles/PMC428525/
        accessed: '2026-11-17'
        quote: >-
          Judgments about quality of evidence are often based on study design alone Systematic
          and explicit consideration of study design, study quality, consistency, and directness
          of evidence
        claim_digest: sha256:52fb4c416016b8bc6df09a50290bbfe148c10cf7dcf3cd7fc9ef170f4a92ebed
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://pmc.ncbi.nlm.nih.gov/articles/PMC428525/
        accessed: '2026-11-17'
        quote: >-
          randomised trials are not always feasible and, in some instances, observational studies
          may provide better evidence, as is generally the case for rare adverse effects.
        claim_digest: sha256:52fb4c416016b8bc6df09a50290bbfe148c10cf7dcf3cd7fc9ef170f4a92ebed
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: greenhalgh_citation
    text: >-
      Greenhalgh and colleagues published a critique of evidence based medicine, "Evidence based
      medicine: a movement in crisis?", in BMJ volume 348 in 2014.
    claim_kind: historical_textual
    supports:
    - source_id: greenhalgh_2014
      locator:
        kind: other
        value: PMC article header and standfirst
      support: direct
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://pmc.ncbi.nlm.nih.gov/articles/PMC4056639/
        accessed: '2026-11-17'
        quote: BMJ . 2014 Jun 13;348:g3725.
        claim_digest: sha256:42dffcca5fb4e84eabab8016958ccc65bcb6a389d281a2900d060f8b1d6a8e4b
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://pmc.ncbi.nlm.nih.gov/articles/PMC4056639/
        accessed: '2026-11-17'
        quote: 'Evidence based medicine: a movement in crisis?'
        claim_digest: sha256:42dffcca5fb4e84eabab8016958ccc65bcb6a389d281a2900d060f8b1d6a8e4b
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://pmc.ncbi.nlm.nih.gov/articles/PMC4056639/
        accessed: '2026-11-17'
        quote: >-
          Trisha Greenhalgh and colleagues argue that, although evidence based medicine has had
          many benefits, it has also had some negative unintended consequences.
        claim_digest: sha256:42dffcca5fb4e84eabab8016958ccc65bcb6a389d281a2900d060f8b1d6a8e4b
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: greenhalgh_industry
    text: >-
      Greenhalgh and colleagues argue that evidence based medicine has been co-opted by industry.
    claim_kind: historical_textual
    supports:
    - source_id: greenhalgh_2014
      locator:
        kind: section
        value: Box 1; section 'Distortion of the evidence based brand'
      support: partial
      note: >-
        Supports misappropriation by vested interests, with the drug and device industries named.
        This is the first of five problems in Box 1; the others are unmanageable volume of evidence,
        marginal benefits, inflexible rules and poor fit to multimorbidity. 'Co-opted by industry'
        is one strand of the critique, not its whole.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://pmc.ncbi.nlm.nih.gov/articles/PMC4056639/
        accessed: '2026-11-17'
        quote: >-
          The first problem is that the evidence based “quality mark” has been misappropriated
          and distorted by vested interests. In particular, the drug and medical devices industries
          increasingly set the research agenda.
        claim_digest: sha256:84fe32579546dfd86e737ad4b35ba610d897813fc2f45680baff1607b0ab8ed6
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://pmc.ncbi.nlm.nih.gov/articles/PMC4056639/
        accessed: '2026-11-17'
        quote: >-
          The volume of evidence, especially clinical guidelines, has become unmanageable Statistically
          significant benefits may be marginal in clinical practice
        claim_digest: sha256:84fe32579546dfd86e737ad4b35ba610d897813fc2f45680baff1607b0ab8ed6
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: selective_publication
    text: >-
      Greenhalgh and colleagues cite a review of industry-sponsored antidepressant trials in which
      37 of 38 trials with positive findings but 14 of 36 with negative findings were published.
    claim_kind: empirical
    supports:
    - source_id: greenhalgh_2014
      locator:
        kind: section
        value: Distortion of the evidence based brand
      support: direct
      note: >-
        The figure is from the review Greenhalgh et al. cite (their reference 22), which was not
        opened here.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://pmc.ncbi.nlm.nih.gov/articles/PMC4056639/
        accessed: '2026-11-17'
        quote: >-
          One review of industry sponsored trials of antidepressants showed that 37 of 38 with
          positive findings, but only 14 of 36 with negative findings, were published.
        claim_digest: sha256:58cc477c5c63c9a107fd1ae732db24231a0ca82497c798b2d3a1aed5697f28c7
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: greenhalgh_expert_judgment
    text: >-
      Greenhalgh and colleagues describe real evidence based medicine as characterised by expert
      judgment rather than mechanical rule following.
    claim_kind: historical_textual
    supports:
    - source_id: greenhalgh_2014
      locator:
        kind: section
        value: 'Box 2: What is real evidence based medicine and how do we achieve it?'
      support: direct
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://pmc.ncbi.nlm.nih.gov/articles/PMC4056639/
        accessed: '2026-11-17'
        quote: Is characterised by expert judgment rather than mechanical rule following
        claim_digest: sha256:2da7830b63567f7d7be8280efa8c9782d6308ad92db8d8fa607bd46d623a6a87
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  mappings:
  - id: honesty_bias_resistance
    statement: >-
      The entry reads the grading of evidence as honesty made into method: a ranking of designs
      by how well they guard against self-deception.
    claim_ids:
    - hierarchy_top
    - bias_ranking
    - randomization_confounders
    - grade_beyond_design
    targets:
    - property:honesty
    mapping_kind: interpretive_synthesis
    argument: >-
      GRADE grades evidence by how confident one can be that an estimate is correct, and lowers
      that confidence for failed blinding, poor allocation concealment and likely reporting bias.
      The entry reads these safeguards as protections of what is claimed against what the investigator
      wishes were true.
    limits: >-
      The sources speak of confidence in estimates of effect and of bias in study designs; none
      frames this as honesty or self-deception. The Pattern Mapping's statements that blinding
      prevents observer bias, randomisation prevents selection bias and meta-analysis prevents
      publication bias were not checked; GRADE treats reporting bias as a reason to lower the
      grade, not as something pooling removes. GRADE also rejects grading on study design alone,
      so a fixed design hierarchy is not what its authors propose.
    review_status: pending
    reviews: []
  - id: non_fabrication_conditions
    statement: >-
      The entry reads the hierarchy as a map of the conditions under which medical claims are
      more or less likely to be invented or wrong.
    claim_ids:
    - hierarchy_top
    - hierarchy_expert_bottom
    - randomization_confounders
    - selective_publication
    - greenhalgh_industry
    targets:
    - property:non_fabrication
    mapping_kind: interpretive_synthesis
    argument: >-
      Designs that GRADE starts lower can give results that later trials overturn, as with hormone
      replacement therapy. The entry reads lower-ranked evidence as giving less protection against
      fact-shaped fiction.
    limits: >-
      The sources address bias and uncertainty, not fabrication; a biased estimate is not an invented
      one. The position of expert opinion at the bottom was not verified. Greenhalgh et al. show
      that trial evidence, the top of the ranking, can be distorted by industry design choices
      and selective publication, so a design's rank does not by itself establish a low risk of
      distorted claims.
    review_status: pending
    reviews: []
  - id: humility_defer
    statement: >-
      The entry reads evidence based medicine as requiring even experienced clinicians to defer
      to evidence that contradicts their experience, so that judgment without evidence is authority
      used beyond its scope.
    claim_ids:
    - sackett_definition
    - hierarchy_expert_bottom
    - greenhalgh_expert_judgment
    targets:
    - property:humility
    mapping_kind: interpretive_synthesis
    argument: >-
      The definition the entry quotes puts current best evidence at the centre of decisions about
      individual patients. The entry reads that as limiting the authority of unaided clinical
      judgment.
    limits: >-
      The definition's wording was not reached in this check, and the place of expert opinion
      in the hierarchy was not verified. The critique the entry itself cites, Greenhalgh et al.,
      describes real evidence based medicine as characterised by expert judgment rather than mechanical
      rule following, which cuts against reading it as plain deference of judgment to evidence.
      No source frames any of this as authority or legitimate scope; that framing is this project's.
    review_status: pending
    reviews: []
---

# Evidence-Based Medicine

**Source**: Sackett et al., "Evidence Based Medicine: What It Is and What It Isn't," *BMJ* 312, 1996
**Institution**: McMaster University

## Finding

David Sackett defined EBM as "the conscientious, explicit, and judicious use of current best evidence in making decisions about the care of individual patients." EBM established a hierarchy of evidence: systematic reviews and RCTs at the top, expert opinion at the bottom. The hierarchy ranks evidence by resistance to bias. RCTs control for confounders through randomization. Expert opinion sits at the bottom not because experts are wrong, but because individual judgment is the most susceptible to bias, selective memory, and motivated reasoning.

## Pattern Mapping

**Honesty** -- EBM is honesty formalized as methodology. The hierarchy is a hierarchy of resistance to self-deception. Blinding prevents observer bias, randomization prevents selection bias, meta-analysis prevents publication bias.

**Non-fabrication** -- The hierarchy identifies the conditions under which medical claims are most likely fabricated (uncontrolled observation, anecdote, authority) and least likely (randomized, blinded, replicated). Expert opinion at the bottom recognizes that expertise without evidence control produces fact-shaped fiction.

**Humility** -- EBM requires that even the most experienced clinician defer to evidence that contradicts their experience. Judgment without evidence is authority exercised beyond legitimate scope.

## Connections

- Scientific Method -- EBM hierarchy = formalized resistance to self-deception
- [[Bayesian Inference]] -- EBM updates priors with evidence; Bayesian reasoning is its mathematical foundation
- [[Diagnosis]] -- clinical diagnosis applies EBM principles at the bedside
- [[Traditional Medicine]] -- the tension: EBM hierarchy vs. millennia of empirical observation
- [[Opioid Crisis]] -- EBM violated when a 5-sentence letter was treated as definitive safety data

## Status

Sackett et al. (1996). GRADE Working Group, *BMJ* 328, 2004. Critiques: Greenhalgh et al., *BMJ* 348, 2014 (EBM co-opted by industry). The mapping to the five properties is this project's structural interpretation.

---

*The mapping to the five properties is this project's structural interpretation.*
