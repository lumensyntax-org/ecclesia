---
domain: medicine
properties: [alignment, honesty, non_fabrication]
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
    Only PubMed records were read for the journal articles; the full texts of Beecher (JAMA 1955),
    Hróbjartsson & Gøtzsche (NEJM 2001) and Wager et al. (Science 2004) returned 403 and were
    not reached. Not checked: that Beecher (1955) is foundational (his PubMed record has no abstract);
    Beecher's Harvard affiliation (the record lists none, and a Harvard library guide showing
    that Countway holds his papers was not used as evidence of affiliation); whether the Hróbjartsson
    & Gøtzsche full text names Beecher; the comments and author reply on Wager et al. that the
    PubMed record lists (Science 303:1121 and 304:1109). For the Benedetti book only the publisher-deposited
    Crossref metadata was read (the OUP page returned an empty response and Oxford Academic returned
    403); the book's contents were not opened. The replication claim is supported by one later
    trial from the same research program; no search for independent replications was made. The
    Institution line is only partly checked. Pattern Mapping and Connections were not checked;
    they are interpretation.
  review_status: partial
  reviews: []
  sources:
  - id: beecher_1955
    citation: Beecher HK. The powerful placebo. JAMA 159(17):1602-1606, 1955.
    source_kind: academic_article
    origin: external
    url: https://doi.org/10.1001/jama.1955.02960340022006
    academic_review:
      status: not_documented
      note: This record does not document a peer-review process.
  - id: wager_2004
    citation: >-
      Wager TD, Rilling JK, Smith EE, Sokolik A, Casey KL, Davidson RJ, Kosslyn SM, Rose RM, Cohen
      JD. Placebo-induced changes in FMRI in the anticipation and experience of pain. Science
      303(5661):1162-1167, 2004.
    source_kind: academic_article
    origin: external
    url: https://doi.org/10.1126/science.1093065
    academic_review:
      status: not_documented
      note: This record does not document a peer-review process.
  - id: kaptchuk_2010
    citation: >-
      Kaptchuk TJ, Friedlander E, Kelley JM, Sanchez MN, Kokkotou E, Singer JP, Kowalczykowski
      M, Miller FG, Kirsch I, Lembo AJ. Placebos without deception: a randomized controlled trial
      in irritable bowel syndrome. PLoS ONE 5(12):e15591, 2010.
    source_kind: academic_article
    origin: external
    url: https://doi.org/10.1371/journal.pone.0015591
    academic_review:
      status: not_documented
      note: This record does not document a peer-review process.
  - id: levine_1978
    citation: >-
      Levine JD, Gordon NC, Fields HL. The mechanism of placebo analgesia. Lancet 2(8091):654-657,
      1978.
    source_kind: academic_article
    origin: external
    url: https://doi.org/10.1016/s0140-6736(78)92762-9
    academic_review:
      status: not_documented
      note: This record does not document a peer-review process.
  - id: delafuente_2001
    citation: >-
      de la Fuente-Fernández R, Ruth TJ, Sossi V, Schulzer M, Calne DB, Stoessl AJ. Expectation
      and dopamine release: mechanism of the placebo effect in Parkinson's disease. Science 293(5532):1164-1166,
      2001.
    source_kind: academic_article
    origin: external
    url: https://doi.org/10.1126/science.1060937
    academic_review:
      status: not_documented
      note: This record does not document a peer-review process.
  - id: ader_1975
    citation: >-
      Ader R, Cohen N. Behaviorally conditioned immunosuppression. Psychosomatic Medicine 37(4):333-340,
      1975.
    source_kind: academic_article
    origin: external
    url: https://doi.org/10.1097/00006842-197507000-00007
    academic_review:
      status: not_documented
      note: This record does not document a peer-review process.
  - id: hrobjartsson_2001
    citation: >-
      Hróbjartsson A, Gøtzsche PC. Is the placebo powerless? An analysis of clinical trials comparing
      placebo with no treatment. N Engl J Med 344(21):1594-1602, 2001.
    source_kind: academic_article
    origin: external
    url: https://doi.org/10.1056/NEJM200105243442106
    academic_review:
      status: not_documented
      note: This record does not document a peer-review process.
  - id: lembo_2021
    citation: >-
      Lembo A, Kelley JM, Nee J, Ballou S, Iturrino J, Cheng V, Rangan V, Katon J, Hirsch W, Kirsch
      I, Hall K, Davis RB, Kaptchuk TJ. Open-label placebo vs double-blind placebo for irritable
      bowel syndrome: a randomized clinical trial. Pain 162(9):2428-2435, 2021.
    source_kind: academic_article
    origin: external
    url: https://doi.org/10.1097/j.pain.0000000000002234
    academic_review:
      status: not_documented
      note: This record does not document a peer-review process.
  - id: wager_cv_2007
    citation: >-
      Wager TD. Curriculum vitae, last updated October 14, 2007. Hosted by the Department of Psychology,
      Columbia University.
    source_kind: other
    kind_note: >-
      An author's curriculum vitae on a university web page; used only for his employment dates.
    origin: external
    url: https://www.columbia.edu/cu/psychology/tor/Papers/Wager_CV_Oct_2007.pdf
    academic_review:
      status: not_applicable
      note: A personal CV on an institutional page, not a journal article.
  - id: benedetti_2014_crossref
    citation: >-
      Crossref metadata record for Benedetti F. Placebo Effects, 2nd edition: Understanding the
      mechanisms in health and disease. Oxford University Press, 2014. doi:10.1093/acprof:oso/9780198705086.001.0001.
    source_kind: other
    kind_note: >-
      Bibliographic metadata deposited by the publisher with Crossref for the book's DOI. The
      book itself was not opened.
    origin: external
    url: https://doi.org/10.1093/acprof:oso/9780198705086.001.0001
    academic_review:
      status: not_applicable
      note: A metadata record, not a journal article.
  claims:
  - id: source_citations
    text: >-
      Beecher's "The Powerful Placebo" appeared in JAMA volume 159 in 1955, Wager et al. in Science
      volume 303 in 2004, and Kaptchuk et al. in PLoS ONE in 2010.
    claim_kind: historical_textual
    supports:
    - source_id: beecher_1955
      locator:
        kind: other
        value: PubMed record 13271123, citation line
      support: direct
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&rettype=abstract&retmode=text&id=13271123
        accessed: '2026-11-17'
        quote: J Am Med Assoc. 1955 Dec 24;159(17):1602-6.
        claim_digest: sha256:f4ed58528df4035d54541204e288b7e30633836b3e09d731dfadbcea9a8cf38f
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&rettype=abstract&retmode=text&id=13271123
        accessed: '2026-11-17'
        quote: The powerful placebo. BEECHER HK.
        claim_digest: sha256:f4ed58528df4035d54541204e288b7e30633836b3e09d731dfadbcea9a8cf38f
      review_status: partial
    - source_id: wager_2004
      locator:
        kind: other
        value: PubMed record 14976306, citation line
      support: direct
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&rettype=abstract&retmode=text&id=14976306
        accessed: '2026-11-17'
        quote: Science. 2004 Feb 20;303(5661):1162-7.
        claim_digest: sha256:f4ed58528df4035d54541204e288b7e30633836b3e09d731dfadbcea9a8cf38f
      review_status: partial
    - source_id: kaptchuk_2010
      locator:
        kind: other
        value: PubMed record 21203519, citation line
      support: direct
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&rettype=abstract&retmode=text&id=21203519
        accessed: '2026-11-17'
        quote: PLoS One. 2010 Dec 22;5(12):e15591.
        claim_digest: sha256:f4ed58528df4035d54541204e288b7e30633836b3e09d731dfadbcea9a8cf38f
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: institutions
    text: The cited work comes from Harvard and Columbia.
    claim_kind: historical_textual
    supports:
    - source_id: kaptchuk_2010
      locator:
        kind: other
        value: PubMed record, author information
      support: partial
      note: >-
        Supports Harvard for the 2010 open-label trial only. Beecher's affiliation was not checked:
        his PubMed record lists none and the JAMA page returned 403.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&rettype=abstract&retmode=text&id=21203519
        accessed: '2026-11-17'
        quote: Beth Israel Deaconess Medical Center, Harvard Medical School, Boston, Massachusetts
        claim_digest: sha256:5137f9a8974548bf885319f60409baf0b99bea3a0839726928c9e2ea0d45ca93
      review_status: partial
    - source_id: wager_cv_2007
      locator:
        kind: page
        value: p. 1, Professional experience
      support: partial
      note: >-
        Shows that Wager was at Columbia from 2004. The PubMed record of the 2004 Science paper
        gives his affiliation as the Department of Psychology, University of Michigan, so the
        paper itself was not checked as a Columbia paper. De la Fuente-Fernández et al. (2001)
        are at the University of British Columbia.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://www.columbia.edu/cu/psychology/tor/Papers/Wager_CV_Oct_2007.pdf
        accessed: '2026-11-17'
        quote: 2004 – present Assistant Professor of Psychology, Columbia University
        claim_digest: sha256:5137f9a8974548bf885319f60409baf0b99bea3a0839726928c9e2ea0d45ca93
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: placebo_definition
    text: >-
      The placebo effect is measurable improvement from an inert treatment that the patient believes
      is active.
    claim_kind: empirical
    supports:
    - source_id: wager_2004
      locator:
        kind: section
        value: Abstract
      support: partial
      note: >-
        Supports inert treatment acting through expectation, in pain. It is not a definition of
        the placebo effect in general.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&rettype=abstract&retmode=text&id=14976306
        accessed: '2026-11-17'
        quote: >-
          placebo treatments that have no intrinsic pharmacological effects may produce analgesia
          by altering expectations
        claim_digest: sha256:2b45293536d98b2f423e5878d898a0263ada805965d38ec47a53c6af3e407ed1
      review_status: partial
    - source_id: hrobjartsson_2001
      locator:
        kind: section
        value: Abstract, Conclusions
      support: partial
      note: >-
        Supports measurable but small improvement on subjective outcomes and pain. It found no
        significant effect on objective outcomes, which is why the word 'physiological' was removed
        from the definition.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&rettype=abstract&retmode=text&id=11372012
        accessed: '2026-11-17'
        quote: >-
          Although placebos had no significant effects on objective or binary outcomes, they had
          possible small benefits in studies with continuous subjective outcomes and for the treatment
          of pain.
        claim_digest: sha256:2b45293536d98b2f423e5878d898a0263ada805965d38ec47a53c6af3e407ed1
      review_status: partial
    - source_id: kaptchuk_2010
      locator:
        kind: section
        value: Abstract, Background and Methods
      support: partial
      note: >-
        Weakens 'the patient believes is active' as a requirement: these patients were told the
        pills were inert and still improved. They were also told the pills had been shown to help,
        so a positive expectation was still given.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&rettype=abstract&retmode=text&id=21203519
        accessed: '2026-11-17'
        quote: it is widely believed that response to placebo requires concealment or deception
        claim_digest: sha256:2b45293536d98b2f423e5878d898a0263ada805965d38ec47a53c6af3e407ed1
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&rettype=abstract&retmode=text&id=21203519
        accessed: '2026-11-17'
        quote: >-
          placebo pills made of an inert substance, like sugar pills, that have been shown in
          clinical studies to produce significant improvement in IBS symptoms through mind-body
          self-healing processes
        claim_digest: sha256:2b45293536d98b2f423e5878d898a0263ada805965d38ec47a53c6af3e407ed1
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: levine_opioid
    text: >-
      In a dental postoperative pain trial, naloxone increased pain in placebo responders, which
      the authors judged consistent with endorphin release mediating placebo analgesia for dental
      postoperative pain.
    claim_kind: empirical
    supports:
    - source_id: levine_1978
      locator:
        kind: section
        value: Abstract
      support: direct
      note: >-
        A pharmacological trial with no imaging and no direct measurement of opioids. The authors
        state the result as consistent with the hypothesis, and only for dental postoperative
        pain.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&rettype=abstract&retmode=text&id=80579
        accessed: '2026-11-17'
        quote: >-
          Naloxone given as a second drug produced no additional increase in pain levels in nonresponders
          but did increase pain levels of placebo responders.
        claim_digest: sha256:6d6f6060d56f341b5ac8995d88504ee6a6d1c07524fe543cb99c27b41265fc7d
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&rettype=abstract&retmode=text&id=80579
        accessed: '2026-11-17'
        quote: >-
          These data are consistent with the hypothesis that endorphin release mediates placebo
          analgesia for dental postoperative pain.
        claim_digest: sha256:6d6f6060d56f341b5ac8995d88504ee6a6d1c07524fe543cb99c27b41265fc7d
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: pd_dopamine
    text: >-
      PET imaging showed release of endogenous dopamine in the striatum of Parkinson's disease
      patients given a placebo.
    claim_kind: empirical
    supports:
    - source_id: delafuente_2001
      locator:
        kind: section
        value: Abstract
      support: direct
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&rettype=abstract&retmode=text&id=11498597
        accessed: '2026-11-17'
        quote: >-
          we provide in vivo evidence for substantial release of endogenous dopamine in the striatum
          of PD patients in response to placebo
        claim_digest: sha256:caba1ccf4f03ec2b6d30374b3d4c73d8493957afdb96b98ba57bf23245921fd6
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: ader_conditioning
    text: Ader and Cohen (1975) showed behaviorally conditioned immunosuppression in rats.
    claim_kind: empirical
    supports:
    - source_id: ader_1975
      locator:
        kind: section
        value: Abstract
      support: direct
      note: >-
        An animal study. The abstract does not present the result as a placebo effect; reading
        it as one is the entry's framing. The phrase 'placebo-treated rats' in the abstract refers
        to a control group.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&rettype=abstract&retmode=text&id=1162023
        accessed: '2026-11-17'
        quote: >-
          An illness-induced taste aversion was conditioned in rats by pairing saccharin with
          cyclophosphamide, an immunosuppressive agent.
        claim_digest: sha256:661b6a22256c6aa12667b70418c0a74e2c9d58fcb0b96640df37283833a22e6c
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&rettype=abstract&retmode=text&id=1162023
        accessed: '2026-11-17'
        quote: >-
          Conditioned animals exposed to saccharin at the time of or following the injection of
          antigen were significantly immunosuppressed.
        claim_digest: sha256:661b6a22256c6aa12667b70418c0a74e2c9d58fcb0b96640df37283833a22e6c
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: kaptchuk_olp
    text: >-
      In a randomized trial of 80 IBS patients, open-label placebo pills, which patients were
      told were inert, produced significantly greater improvement than a no-treatment control,
      and the authors concluded that placebos given without deception may be effective.
    claim_kind: empirical
    supports:
    - source_id: kaptchuk_2010
      locator:
        kind: section
        value: Abstract, Findings and Conclusion
      support: direct
      note: >-
        Single center, three weeks, self-reported outcomes. Patients were told the pills had been
        shown to produce improvement.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&rettype=abstract&retmode=text&id=21203519
        accessed: '2026-11-17'
        quote: involving 80 primarily female (70%) patients
        claim_digest: sha256:b79eda164cd6627f520c1536f21a40e382797f873ed182acfdf6a9151c9e57aa
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&rettype=abstract&retmode=text&id=21203519
        accessed: '2026-11-17'
        quote: >-
          open-label placebo (non-deceptive and non-concealed administration) is superior to a
          no-treatment control
        claim_digest: sha256:b79eda164cd6627f520c1536f21a40e382797f873ed182acfdf6a9151c9e57aa
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&rettype=abstract&retmode=text&id=21203519
        accessed: '2026-11-17'
        quote: placebo pills made of an inert substance, like sugar pills
        claim_digest: sha256:b79eda164cd6627f520c1536f21a40e382797f873ed182acfdf6a9151c9e57aa
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&rettype=abstract&retmode=text&id=21203519
        accessed: '2026-11-17'
        quote: >-
          Open-label placebo produced significantly higher mean (±SD) global improvement scores
          (IBS-GIS)
        claim_digest: sha256:b79eda164cd6627f520c1536f21a40e382797f873ed182acfdf6a9151c9e57aa
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&rettype=abstract&retmode=text&id=21203519
        accessed: '2026-11-17'
        quote: Placebos administered without deception may be an effective treatment for IBS.
        claim_digest: sha256:b79eda164cd6627f520c1536f21a40e382797f873ed182acfdf6a9151c9e57aa
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: olp_replication
    text: >-
      A later randomized trial in IBS reproduced the finding that open-label placebo outperforms
      a no-pill control.
    claim_kind: empirical
    supports:
    - source_id: lembo_2021
      locator:
        kind: section
        value: Abstract
      support: direct
      note: >-
        The trial comes from the same research program (Kaptchuk, Lembo, Kelley and Kirsch are
        authors of both), so it is not an independent replication. The entry names no replication
        source; this one was found for the check. No search for independent replications was made.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&rettype=abstract&retmode=text&id=33605656
        accessed: '2026-11-17'
        quote: >-
          The mean improvement on the IBS Severity Scoring System from baseline to the 6-week
          end point was significantly greater in OLP compared with that in NPC (90.6 vs 52.3,
          P = 0.038).
        claim_digest: sha256:85133e3412322475fc65004f81f1451842094c45d5fcecf0efe0d44d503d2f96
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: beecher_foundational
    text: Beecher's 1955 paper is foundational to placebo research.
    claim_kind: historical_textual
    supports:
    - source_id: beecher_1955
      locator: null
      support: unassessed
      note: >-
        Not checked. The PubMed record has no abstract, the JAMA page returned 403, and no source
        was opened that assesses the paper's place in the field.
      reviews: []
      review_status: pending
    origin: source_summary
    reviews: []
    review_status: pending
  - id: hrobjartsson_critique
    text: >-
      Hróbjartsson and Gøtzsche (NEJM 344, 2001) challenged the view that placebos have powerful
      clinical effects, the view of Beecher's 1955 paper.
    claim_kind: historical_textual
    supports:
    - source_id: hrobjartsson_2001
      locator:
        kind: section
        value: Title and Abstract, Conclusions
      support: partial
      note: >-
        The abstract challenges powerful placebo effects, but it does not name Beecher. The full
        text returned 403, so whether the paper criticizes Beecher directly is unchecked. Attributing
        the 'powerful effects' view to Beecher rests here only on his paper's title; his text
        was not read.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&rettype=abstract&retmode=text&id=11372012
        accessed: '2026-11-17'
        quote: N Engl J Med. 2001 May 24;344(21):1594-602.
        claim_digest: sha256:88c38bc89efda6060d4adcaf8ebd84c3626e062eae92101bce62f0ea7b2ee768
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&rettype=abstract&retmode=text&id=11372012
        accessed: '2026-11-17'
        quote: We found little evidence in general that placebos had powerful clinical effects.
        claim_digest: sha256:88c38bc89efda6060d4adcaf8ebd84c3626e062eae92101bce62f0ea7b2ee768
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: imaging_evidence
    text: >-
      Neuroimaging studies (Wager et al., 2004; de la Fuente-Fernández et al., 2001) provide evidence
      for brain mechanisms of placebo effects.
    claim_kind: empirical
    supports:
    - source_id: wager_2004
      locator:
        kind: section
        value: Abstract
      support: direct
      note: >-
        fMRI in experimental pain. The PubMed record lists published comments and an author reply,
        which were not read.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&rettype=abstract&retmode=text&id=14976306
        accessed: '2026-11-17'
        quote: >-
          we found that placebo analgesia was related to decreased brain activity in pain-sensitive
          brain regions, including the thalamus, insula, and anterior cingulate cortex
        claim_digest: sha256:064af90c87f5d8e1f92a96da303627e5f687009c03cf2645361c5e5175a3fd53
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&rettype=abstract&retmode=text&id=14976306
        accessed: '2026-11-17'
        quote: providing evidence that placebos alter the experience of pain
        claim_digest: sha256:064af90c87f5d8e1f92a96da303627e5f687009c03cf2645361c5e5175a3fd53
      review_status: partial
    - source_id: delafuente_2001
      locator:
        kind: section
        value: Abstract
      support: direct
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&rettype=abstract&retmode=text&id=11498597
        accessed: '2026-11-17'
        quote: >-
          Our findings indicate that the placebo effect in PD is powerful and is mediated through
          activation of the damaged nigrostriatal dopamine system.
        claim_digest: sha256:064af90c87f5d8e1f92a96da303627e5f687009c03cf2645361c5e5175a3fd53
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: benedetti_book
    text: >-
      Benedetti's Placebo Effects appeared in a second edition from Oxford University Press in
      2014.
    claim_kind: historical_textual
    supports:
    - source_id: benedetti_2014_crossref
      locator:
        kind: other
        value: Crossref record fields publisher, subtitle, published-print
      support: direct
      note: Publisher-deposited metadata. The book itself was not opened.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://api.crossref.org/works/10.1093/acprof:oso/9780198705086.001.0001
        accessed: '2026-11-17'
        quote: '"publisher":"Oxford University Press"'
        claim_digest: sha256:911ab9d5971b49bd384e0fc4a0880e6a3c9c69980729f2a1a36972ad293955d9
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://api.crossref.org/works/10.1093/acprof:oso/9780198705086.001.0001
        accessed: '2026-11-17'
        quote: '"subtitle":["2nd Edition: Understanding the mechanisms in health and disease"]'
        claim_digest: sha256:911ab9d5971b49bd384e0fc4a0880e6a3c9c69980729f2a1a36972ad293955d9
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://api.crossref.org/works/10.1093/acprof:oso/9780198705086.001.0001
        accessed: '2026-11-17'
        quote: '"published-print":{"date-parts":[[2014,9,25]]}'
        claim_digest: sha256:911ab9d5971b49bd384e0fc4a0880e6a3c9c69980729f2a1a36972ad293955d9
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://api.crossref.org/works/10.1093/acprof:oso/9780198705086.001.0001
        accessed: '2026-11-17'
        quote: '"given":"Fabrizio","family":"Benedetti"'
        claim_digest: sha256:911ab9d5971b49bd384e0fc4a0880e6a3c9c69980729f2a1a36972ad293955d9
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  mappings:
  - id: alignment_belief_physiology
    statement: >-
      The entry reads the placebo response as an alignment between what the patient expects and
      how the body responds.
    claim_ids:
    - pd_dopamine
    - levine_opioid
    - imaging_evidence
    targets:
    - property:alignment
    mapping_kind: conceptual_analogy
    argument: >-
      In the cited studies an expectation of benefit is followed by measured changes: dopamine
      release in Parkinson's patients, altered pain-related brain activity, and pain relief that
      naloxone reverses. The entry reads this match between expectation and bodily response as
      alignment.
    limits: >-
      A physiological process states no purpose, so this is an analogy, not a finding. The sources
      show the effect in particular settings (dental postoperative pain, Parkinson's patients,
      experimental pain). They do not show that belief and physiology are generally aligned, and
      Hróbjartsson and Gøtzsche found no significant effect on objective outcomes across clinical
      trials.
    review_status: pending
    reviews: []
  - id: honesty_open_label
    statement: >-
      The entry reads open-label placebo as evidence that honesty with patients and therapeutic
      benefit need not conflict.
    claim_ids:
    - kaptchuk_olp
    - olp_replication
    - placebo_definition
    targets:
    - property:honesty
    mapping_kind: interpretive_synthesis
    argument: >-
      Clinicians who tell patients that the pills are inert still saw improvement over no treatment,
      and the 2010 authors raise using placebos consistent with informed consent. The entry reads
      this as disclosure and benefit coexisting.
    limits: >-
      The 2010 trial had 80 patients at one center for three weeks, with self-reported outcomes,
      and patients were told the pills had been shown to work, so expectation was still induced.
      The cited replication comes from the same research group. The sources do not settle the
      ethics of prescribing placebos, and Hróbjartsson and Gøtzsche concluded that outside clinical
      trials there is no justification for their use.
    review_status: pending
    reviews: []
  - id: non_fabrication_real_effect
    statement: >-
      The entry holds that the placebo effect is not fabrication and that dismissing it as unreal
      would itself be a fabrication.
    claim_ids:
    - pd_dopamine
    - levine_opioid
    - hrobjartsson_critique
    targets:
    - property:non_fabrication
    mapping_kind: conceptual_analogy
    argument: >-
      Measured changes such as striatal dopamine release, and pain increases under naloxone in
      placebo responders, are reported findings rather than invented ones. The entry reads them
      as a real effect that should not be denied.
    limits: >-
      The cited sources do not establish a uniformly real or large physiological effect: the systematic
      review found little evidence of powerful clinical effects and none on objective outcomes.
      That skepticism is a position drawn from a review of clinical trials, not a fabrication;
      calling dismissal a fabrication is this project's framing.
    review_status: pending
    reviews: []
---

# Placebo Effect

**Source**: Beecher, "The Powerful Placebo," *JAMA* 159, 1955; Wager et al., *Science* 303, 2004; Kaptchuk et al., *PLoS ONE*, 2010
**Institution**: Harvard; Columbia

## Finding

The placebo effect is measurable improvement from an inert treatment the patient believes is active. Not imaginary -- pharmacological, imaging and conditioning studies provide evidence for specific mechanisms: placebo analgesia involves endogenous opioid release (Levine et al., 1978, reversible by naloxone); placebo in Parkinson's involves striatal dopamine release (de la Fuente-Fernandez et al., 2001); conditioned immunosuppression has been demonstrated in rats (Ader & Cohen, 1975). Kaptchuk's open-label placebos (2010) -- patients told they are receiving placebos -- still produce significant improvement in IBS, suggesting the mechanism may not require deception.

## Pattern Mapping

**Alignment** -- The placebo is alignment between belief and physiology. The patient believes healing is happening; the body acts accordingly. The physiological change is real. Belief and biological response are genuinely aligned.

**Honesty** -- The paradox: the treatment is inert, but the effect is real. Open-label placebos suggest honesty and efficacy may not be in conflict. The ethical dilemma (deception for benefit) is a genuine tension between honesty and alignment.

**Non-fabrication** -- The placebo effect is categorically NOT fabrication. The molecules are released, the pain decreases. Dismissing placebo as "not real" is itself a fabrication -- denying a phenomenon because it does not fit the expected mechanism.

## Connections

- [[MIND/Hard Problem of Consciousness|Consciousness and the Hard Problem]] -- belief produces physical change; the mind-body boundary
- [[Homeostasis]] -- the placebo engages the body's own regulatory systems
- [[Diagnosis]] -- the diagnosis itself can trigger physiological responses (nocebo effect)
- [[Informed Consent]] -- placebo prescription creates a tension with the duty to inform
- [[Immune System and Clonal Selection]] -- conditioned immunosuppression: the placebo educates immunity

## Status

Beecher (1955) foundational but criticized (Hrobjartsson & Gotzsche, *NEJM* 344, 2001). Neuroimaging provides evidence for mechanisms: Wager et al. (2004), de la Fuente-Fernandez et al. (2001). Kaptchuk (2010) replicated. Benedetti, *Placebo Effects* (Oxford UP, 2nd ed., 2014). The mapping to the five properties is this project's structural interpretation.

---

*The mapping to the five properties is this project's structural interpretation.*
