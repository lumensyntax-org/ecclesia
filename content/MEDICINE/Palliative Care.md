---
domain: medicine
properties: [proportion, honesty, humility]
ecclesia_legacy:
  status: established
  strength: STRONG
  from_commit: db4ed54e3768e7fbaf023e0b7c73b58cf48d108b
  migration_state: migrated
ecclesia:
  schema_version: 1
  entry_kind: source_analysis
  coverage: partial
  coverage_notes: >-
    Not reached: Saunders's 1964 paper in the Prescribers' Journal (reference 3 of Saunders 2001),
    where 'total pain' was first defined, so the definition and its date are checked only through
    her 2001 account; the Oregon Legislature's own ORS page (connection failed twice, HTTP 000),
    so the section range is read from the Oregon Health Authority's reproduction of the statute;
    the publisher's page for Saunders 2001 (blocked), so the PMC full text was read instead. Washington
    v. Glucksberg was read in the Legal Information Institute's reproduction, not in the official
    United States Reports. The St Christopher's page was downloaded with a plain curl request
    because the shared fetch tool's user agent was refused (HTTP 403); its text was normalized
    the same way. Not checked because they are the project's interpretation: that the shift from
    curative to palliative intent changes medicine's purpose, that optimistic prognosis is fabrication
    of hope, and the framing of assisted death as autonomy against sanctity of life. The phrase
    'integrated experience requiring integrated care' in the total pain sentence is not in the
    source read.
  review_status: partial
  reviews: []
  sources:
  - id: saunders_2001
    citation: >-
      Saunders C. The evolution of palliative care. Journal of the Royal Society of Medicine 94(9):430-432,
      2001. doi:10.1177/014107680109400904.
    source_kind: academic_article
    origin: external
    url: https://doi.org/10.1177/014107680109400904
    academic_review:
      status: not_documented
      note: This record does not document a peer-review process.
  - id: christakis_2000
    citation: >-
      Christakis NA, Lamont EB. Extent and determinants of error in doctors' prognoses in terminally
      ill patients: prospective cohort study. BMJ 320(7233):469-472, 2000 (PMC lists 469-473).
      doi:10.1136/bmj.320.7233.469.
    source_kind: academic_article
    origin: external
    url: https://doi.org/10.1136/bmj.320.7233.469
    academic_review:
      status: not_documented
      note: This record does not document a peer-review process.
  - id: who_palliative_2020
    citation: World Health Organization. Palliative care. Fact sheet, 5 August 2020.
    source_kind: institutional_document
    origin: external
    url: https://www.who.int/news-room/fact-sheets/detail/palliative-care
    academic_review:
      status: not_applicable
      note: Institutional web page of a health agency or hospice, not a journal article.
  - id: nia_palliative
    citation: >-
      National Institute on Aging, National Institutes of Health. What Are Palliative Care and
      Hospice Care? Web page, content reviewed May 14, 2021.
    source_kind: institutional_document
    origin: external
    url: >-
      https://www.nia.nih.gov/health/hospice-and-palliative-care/what-are-palliative-care-and-hospice-care
    academic_review:
      status: not_applicable
      note: Institutional web page of a health agency or hospice, not a journal article.
  - id: stc_history
    citation: St Christopher's Hospice. Our history. Institution web page.
    source_kind: institutional_document
    origin: external
    url: https://www.stchristophers.org.uk/about/history/
    academic_review:
      status: not_applicable
      note: Institutional web page of a health agency or hospice, not a journal article.
  - id: oha_dwda
    citation: Oregon Health Authority, Public Health Division. Death with Dignity Act (program
      page).
    source_kind: institutional_document
    origin: external
    url: >-
      https://www.oregon.gov/oha/ph/providerpartnerresources/evaluationresearch/deathwithdignityact/pages/index.aspx
    academic_review:
      status: not_applicable
      note: Regulator's page or its reproduction of a statute, not a journal article.
  - id: oha_dwda_faqs
    citation: >-
      Oregon Health Authority, Public Health Division. Frequently Asked Questions about the Death
      with Dignity Act.
    source_kind: institutional_document
    origin: external
    url: >-
      https://www.oregon.gov/oha/PH/PROVIDERPARTNERRESOURCES/EVALUATIONRESEARCH/DEATHWITHDIGNITYACT/Pages/faqs.aspx
    academic_review:
      status: not_applicable
      note: Regulator's page or its reproduction of a statute, not a journal article.
  - id: oha_ors_127
    citation: >-
      Oregon Revised Statutes, chapter 127, sections 127.800 to 127.897 (The Oregon Death with
      Dignity Act), as reproduced by the Oregon Health Authority.
    source_kind: institutional_document
    origin: external
    url: >-
      https://www.oregon.gov/oha/PH/PROVIDERPARTNERRESOURCES/EVALUATIONRESEARCH/DEATHWITHDIGNITYACT/Pages/ors.aspx
    academic_review:
      status: not_applicable
      note: Regulator's page or its reproduction of a statute, not a journal article.
  - id: glucksberg_1997
    citation: >-
      Washington v. Glucksberg, 521 U.S. 702 (1997). Supreme Court of the United States, decided
      June 26, 1997; opinion of the Court delivered by Rehnquist, C.J. Text as reproduced by the
      Legal Information Institute, Cornell Law School.
    source_kind: institutional_document
    origin: external
    url: https://www.law.cornell.edu/supremecourt/text/521/702
    academic_review:
      status: not_applicable
      note: Court opinion, not a journal article.
  claims:
  - id: source_citations
    text: >-
      Saunders's article on the evolution of palliative care appeared in the Journal of the Royal
      Society of Medicine, volume 94, 2001, and Christakis and Lamont's study of prognostic error
      in the BMJ, volume 320, 2000.
    claim_kind: historical_textual
    supports:
    - source_id: saunders_2001
      locator:
        kind: other
        value: PMC citation line, title and author line
      support: direct
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://pmc.ncbi.nlm.nih.gov/articles/PMC1282179/
        accessed: '2026-11-17'
        quote: J R Soc Med . 2001 Sep;94(9):430–432.
        claim_digest: sha256:63952a22724e367606f3ca8ca68f1febc4a43a9a9844de374fbae8f42e1d65d3
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://pmc.ncbi.nlm.nih.gov/articles/PMC1282179/
        accessed: '2026-11-17'
        quote: The evolution of palliative care Cicely Saunders
        claim_digest: sha256:63952a22724e367606f3ca8ca68f1febc4a43a9a9844de374fbae8f42e1d65d3
      review_status: partial
    - source_id: christakis_2000
      locator:
        kind: other
        value: PMC citation line, title and author lines
      support: direct
      note: PubMed gives the page range as 469-72; PMC gives 469–473.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://pmc.ncbi.nlm.nih.gov/articles/PMC27288/
        accessed: '2026-11-17'
        quote: BMJ . 2000 Feb 19;320(7233):469–473.
        claim_digest: sha256:63952a22724e367606f3ca8ca68f1febc4a43a9a9844de374fbae8f42e1d65d3
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://pmc.ncbi.nlm.nih.gov/articles/PMC27288/
        accessed: '2026-11-17'
        quote: >-
          Extent and determinants of error in doctors' prognoses in terminally ill patients: prospective
          cohort study Nicholas A Christakis
        claim_digest: sha256:63952a22724e367606f3ca8ca68f1febc4a43a9a9844de374fbae8f42e1d65d3
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://pmc.ncbi.nlm.nih.gov/articles/PMC27288/
        accessed: '2026-11-17'
        quote: Find articles by Elizabeth B Lamont
        claim_digest: sha256:63952a22724e367606f3ca8ca68f1febc4a43a9a9844de374fbae8f42e1d65d3
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: institution_stc
    text: Saunders wrote the 2001 article from St Christopher's Hospice in London.
    claim_kind: historical_textual
    supports:
    - source_id: saunders_2001
      locator:
        kind: other
        value: Author affiliation
      support: direct
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://pmc.ncbi.nlm.nih.gov/articles/PMC1282179/
        accessed: '2026-11-17'
        quote: St Christopher's Hospice, 51-59 Lawrie Park Road, Sydenham, London SE26 6JZ, UK
        claim_digest: sha256:04660bfd986db273d5b6a9a76054ab2ce7ce603f64917bf4cd2d305a57fa0c5c
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: pc_definition
    text: >-
      Palliative care aims to relieve suffering in people with serious illness, regardless of
      prognosis.
    claim_kind: historical_textual
    supports:
    - source_id: who_palliative_2020
      locator:
        kind: section
        value: Overview
      support: partial
      note: >-
        Supports the relief of suffering in life-threatening illness and use early in the illness.
        It does not use the words 'regardless of prognosis'.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://www.who.int/news-room/fact-sheets/detail/palliative-care
        accessed: '2026-11-17'
        quote: facing problems associated with life-threatening illness
        claim_digest: sha256:e8003f39da064b763ef845c0dbbfa0c9a8ddb789ecf11e35371bb8b46f180845
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://www.who.int/news-room/fact-sheets/detail/palliative-care
        accessed: '2026-11-17'
        quote: >-
          It prevents and relieves suffering through the early identification, correct assessment
          and treatment of pain and other problems, whether physical, psychosocial or spiritual.
        claim_digest: sha256:e8003f39da064b763ef845c0dbbfa0c9a8ddb789ecf11e35371bb8b46f180845
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://www.who.int/news-room/fact-sheets/detail/palliative-care
        accessed: '2026-11-17'
        quote: Palliative care is most effective when considered early in the course of the illness.
        claim_digest: sha256:e8003f39da064b763ef845c0dbbfa0c9a8ddb789ecf11e35371bb8b46f180845
      review_status: partial
    - source_id: nia_palliative
      locator:
        kind: section
        value: What is palliative care?
      support: partial
      note: >-
        Supports serious illness as the scope and that care may start at diagnosis alongside curative
        treatment, which implies it is not limited to a terminal prognosis. 'Regardless of prognosis'
        is not stated.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://www.nia.nih.gov/health/hospice-and-palliative-care/what-are-palliative-care-and-hospice-care
        accessed: '2026-11-17'
        quote: >-
          Palliative care is focused on improving quality of life for people with serious illnesses
          and their care partners.
        claim_digest: sha256:e8003f39da064b763ef845c0dbbfa0c9a8ddb789ecf11e35371bb8b46f180845
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://www.nia.nih.gov/health/hospice-and-palliative-care/what-are-palliative-care-and-hospice-care
        accessed: '2026-11-17'
        quote: >-
          In palliative care, a person does not have to give up treatment that might cure a serious
          illness.
        claim_digest: sha256:e8003f39da064b763ef845c0dbbfa0c9a8ddb789ecf11e35371bb8b46f180845
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://www.nia.nih.gov/health/hospice-and-palliative-care/what-are-palliative-care-and-hospice-care
        accessed: '2026-11-17'
        quote: >-
          Palliative care can be provided along with curative treatment and may begin at the time
          of diagnosis.
        claim_digest: sha256:e8003f39da064b763ef845c0dbbfa0c9a8ddb789ecf11e35371bb8b46f180845
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: stc_founding
    text: Cicely Saunders founded St Christopher's Hospice, which opened in 1967.
    claim_kind: historical_textual
    supports:
    - source_id: stc_history
      locator:
        kind: section
        value: Our history, section on Dame Cicely Saunders
      support: direct
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://www.stchristophers.org.uk/about/history/
        accessed: '2026-11-17'
        quote: >-
          Dame Cicely founded St Christopher’s Hospice in 1967 as the first hospice linking expert
          pain and symptom control, compassionate care, teaching and clinical research.
        claim_digest: sha256:9ce3b80de7ef1e2c6aafc092243d7e3847e30e60ad766cff3adbbca74cc0070e
      review_status: partial
    - source_id: saunders_2001
      locator:
        kind: section
        value: A demonstration project
      support: partial
      note: >-
        States the 1967 opening. Saunders describes launching the charity in the first person
        but does not use the word 'founded'.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://pmc.ncbi.nlm.nih.gov/articles/PMC1282179/
        accessed: '2026-11-17'
        quote: St Christopher's Hospice opened in 1967 with a building for 54 patients
        claim_digest: sha256:9ce3b80de7ef1e2c6aafc092243d7e3847e30e60ad766cff3adbbca74cc0070e
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: total_pain
    text: >-
      Saunders introduced the concept of 'total pain', which takes in physical, emotional, social
      and spiritual suffering as one experience calling for integrated care.
    claim_kind: historical_textual
    supports:
    - source_id: saunders_2001
      locator:
        kind: paragraph
        value: Opening paragraphs, with reference 3
      support: partial
      note: >-
        Supports the concept, its four components (the source says 'mental distress' where the
        entry says 'emotional') and its definition in 1964 in a paper by Saunders herself (reference
        3, not opened). The source does not say 'integrated experience requiring integrated care';
        that is the entry's gloss.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://pmc.ncbi.nlm.nih.gov/articles/PMC1282179/
        accessed: '2026-11-17'
        quote: >-
          the concept of ‘total pain’—defined in 1964 as including not only physical symptoms
          but also mental distress and social or spiritual problems
        claim_digest: sha256:99abc8ecf8dff889031787b49d0d0d47e6c1a2de3aa751423761529fea29e858
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://pmc.ncbi.nlm.nih.gov/articles/PMC1282179/
        accessed: '2026-11-17'
        quote: >-
          3. Saunders C. The symptomatic treatment of incurable malignant disease. Prescribers
          J 1964;4: 68-73
        claim_digest: sha256:99abc8ecf8dff889031787b49d0d0d47e6c1a2de3aa751423761529fea29e858
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: curative_shift
    text: >-
      The shift from curative to palliative intent changes medicine's purpose from defeating disease
      to accompanying the patient.
    claim_kind: normative
    origin: project_proposal
    supports: []
    reviews: []
    review_status: pending
  - id: prognostic_optimism
    text: >-
      Doctors systematically overestimate survival in terminally ill patients; their prognostic
      error is biased toward optimism.
    claim_kind: empirical
    supports:
    - source_id: christakis_2000
      locator:
        kind: section
        value: Abstract (Results, Conclusion) and Discussion
      support: direct
      note: >-
        The general wording is the authors' own conclusion. The data are one prospective cohort:
        343 doctors and 468 terminally ill patients at referral to five outpatient hospice programmes
        in Chicago. The estimates were reported to the investigators, not to patients, so the
        study measures estimation error, not what patients were told.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://pmc.ncbi.nlm.nih.gov/articles/PMC27288/
        accessed: '2026-11-17'
        quote: >-
          Doctors are inaccurate in their prognoses for terminally ill patients and the error
          is systematically optimistic.
        claim_digest: sha256:66e43d5935ebc1a1317d6dcf8db933ac9519453a8875e11e0bd44bd845bfca2c
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://pmc.ncbi.nlm.nih.gov/articles/PMC27288/
        accessed: '2026-11-17'
        quote: Overall, doctors overestimated survival by a factor of 5.3.
        claim_digest: sha256:66e43d5935ebc1a1317d6dcf8db933ac9519453a8875e11e0bd44bd845bfca2c
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://pmc.ncbi.nlm.nih.gov/articles/PMC27288/
        accessed: '2026-11-17'
        quote: >-
          343 doctors provided survival estimates for 468 terminally ill patients at the time
          of hospice referral.
        claim_digest: sha256:66e43d5935ebc1a1317d6dcf8db933ac9519453a8875e11e0bd44bd845bfca2c
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://pmc.ncbi.nlm.nih.gov/articles/PMC27288/
        accessed: '2026-11-17'
        quote: >-
          These prognoses were doctors' best guesses about their patients' survival prospects,
          objectively communicated to the investigators and not to patients themselves.
        claim_digest: sha256:66e43d5935ebc1a1317d6dcf8db933ac9519453a8875e11e0bd44bd845bfca2c
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: fabrication_of_hope
    text: >-
      Optimistic prognostic error amounts to a fabrication of hope where an honest prognosis would
      be more painful but more useful.
    claim_kind: normative
    origin: project_proposal
    supports: []
    reviews: []
    review_status: pending
  - id: dwda_dates
    text: >-
      Oregon's Death with Dignity Act took effect on October 27, 1997, after Oregon voters first
      passed it in November 1994.
    claim_kind: historical_textual
    supports:
    - source_id: oha_dwda
      locator:
        kind: section
        value: About the Death with Dignity Act
      support: direct
      note: >-
        The regulator's main page uses 'enacted' for October 27, 1997, the date the injunction
        was lifted.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://www.oregon.gov/oha/ph/providerpartnerresources/evaluationresearch/deathwithdignityact/pages/index.aspx
        accessed: '2026-11-17'
        quote: >-
          On October 27, 1997, Oregon enacted the Death with Dignity Act which allows terminally
          ill individuals to end their lives through the voluntary self-administration of lethal
          medications, expressly prescribed by a physician for that purpose.
        claim_digest: sha256:f497a01173863d2d36cd55c1e0cac850cf7b1e8bfc71fd00c820a124a00cc2ac
      review_status: partial
    - source_id: oha_dwda_faqs
      locator:
        kind: section
        value: Answer on the history of the Act
      support: direct
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://www.oregon.gov/oha/PH/PROVIDERPARTNERRESOURCES/EVALUATIONRESEARCH/DEATHWITHDIGNITYACT/Pages/faqs.aspx
        accessed: '2026-11-17'
        quote: >-
          The first time was in a general election in November 1994 when it passed by a margin
          of 51% to 49%. An injunction delayed implementation of the Act until it was lifted on
          October 27, 1997.
        claim_digest: sha256:f497a01173863d2d36cd55c1e0cac850cf7b1e8bfc71fd00c820a124a00cc2ac
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: dwda_ors
    text: The Oregon Death with Dignity Act is codified at ORS 127.800 to 127.897.
    claim_kind: historical_textual
    supports:
    - source_id: oha_ors_127
      locator:
        kind: section
        value: 127.800 §1.01, Definitions
      support: direct
      note: >-
        Read in the Oregon Health Authority's reproduction; the Legislature's own ORS page could
        not be reached.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://www.oregon.gov/oha/PH/PROVIDERPARTNERRESOURCES/EVALUATIONRESEARCH/DEATHWITHDIGNITYACT/Pages/ors.aspx
        accessed: '2026-11-17'
        quote: whenever used in ORS 127.800 to 127.897, have the following meanings
        claim_digest: sha256:afebf9cab7f965ac7273cc08531575611e301016baf7873a254fa84c61da5229
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: pad_contested
    text: The ethical status of physician-assisted death is contested.
    claim_kind: historical_textual
    supports:
    - source_id: glucksberg_1997
      locator:
        kind: section
        value: Opinion of the Court, closing paragraph
      support: partial
      note: >-
        A 1997 statement by the US Supreme Court about debate in the United States, covering morality,
        legality and practicality. It does not establish the current state of the debate or its
        extent outside the United States; 'genuinely' is the entry's word.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://www.law.cornell.edu/supremecourt/text/521/702
        accessed: '2026-11-17'
        quote: >-
          Throughout the Nation, Americans are engaged in an earnest and profound debate about
          the morality, legality, and practicality of physician-assisted suicide.
        claim_digest: sha256:b787a734d592a62673cd4e9541980f447bfe7b20f95518a976fb5891ffd614e3
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  mappings:
  - id: proportion_when_to_stop
    statement: >-
      The entry reads palliative care as recognizing when cure is no longer possible, so that
      continued aggressive treatment would exceed what the patient's well-being requires.
    claim_ids:
    - pc_definition
    - curative_shift
    targets:
    - property:proportion
    mapping_kind: interpretive_synthesis
    argument: >-
      Palliative care is defined by relief of suffering rather than by cure. The entry treats
      aggressive treatment that no longer serves the patient as action out of proportion to the
      purpose, and palliative care as the correction.
    limits: >-
      No cited source says that continued aggressive treatment is disproportionate, or that deciding
      when to stop is the hardest clinical decision. The National Institute on Aging says palliative
      care can be given alongside curative treatment and from diagnosis, so the sequential 'shift
      from cure to comfort' is the project's framing and fits end-of-life or hospice care better
      than palliative care as WHO and NIA define it.
    review_status: pending
    reviews: []
  - id: honesty_prognosis
    statement: >-
      The entry reads doctors' optimistic prognostic error as a failure of honesty at the point
      where the patient needs an honest prognosis.
    claim_ids:
    - prognostic_optimism
    - fabrication_of_hope
    targets:
    - property:honesty
    mapping_kind: interpretive_synthesis
    argument: >-
      Christakis and Lamont found doctors' survival estimates for terminally ill patients systematically
      optimistic. The entry reads that optimism as hope offered where the facts do not support
      it.
    limits: >-
      The study measured estimates that doctors reported to the investigators, not what they told
      patients, so it shows miscalibrated judgement (error), not dishonesty or invented hope.
      The paper raises effects on patients only conditionally, to the extent that doctors' communication
      shapes patients' views. It does not establish why the error is optimistic. The word 'fabrication'
      and the claim that this honesty is among the hardest in medicine are the project's.
    review_status: pending
    reviews: []
  - id: humility_limits
    statement: >-
      The entry reads the move from cure to comfort as medicine acknowledging the limits of its
      authority over disease.
    claim_ids:
    - curative_shift
    - pc_definition
    targets:
    - property:humility
    mapping_kind: interpretive_synthesis
    argument: >-
      When cure is not possible, care is redirected to relieving suffering rather than defeating
      the disease. The entry reads this as authority exercised within its scope.
    limits: >-
      No cited source describes palliative care as medicine admitting its limits or speaks of
      medicine's authority. Saunders presents palliative care as applying scientific method and
      an evidence base to pain and distress, an extension of medical work rather than a retreat
      from it. Since palliative care can accompany curative treatment, it is not in general a
      cessation of the attempt to cure.
    review_status: pending
    reviews: []
---

# Palliative Care

**Source**: Cicely Saunders, *Journal of the Royal Society of Medicine* 94, 2001; Christakis & Lamont, *BMJ* 320, 2000
**Institution**: St. Christopher's Hospice, London

## Finding

Palliative care focuses on relief from suffering for patients with serious illness, regardless of prognosis. Dame Cicely Saunders founded St. Christopher's Hospice (1967) and introduced "total pain" -- physical, emotional, social, and spiritual suffering as integrated experience requiring integrated care. The shift from curative to palliative intent is a fundamental change in medicine's purpose: from defeating disease to accompanying the patient. Physicians systematically overestimate prognosis for terminally ill patients (Christakis & Lamont, 2000), biased toward optimism -- fabrication of hope where honest ground would be more painful but more useful. Death with dignity legislation (Oregon, 1997) raises MYSTERY_EXPLORATION: autonomy vs. sanctity of life.

## Pattern Mapping

**Proportion** -- Palliative care recognizes when medicine's purpose shifts. When cure is impossible, continued aggressive treatment is disproportionate -- action exceeds what the patient's well-being requires. The hardest clinical decision is often when to stop.

**Honesty** -- The transition requires an honest conversation: the disease will not be cured. This is among the most difficult honesty in medicine. Systematic prognostic overestimation is fabrication of hope.

**Humility** -- Palliative care is medicine admitting its limits. The physician who transitions from cure to comfort acknowledges that the disease has exceeded medicine's authority. Not failure -- recognition that healing sometimes means accompanying, not conquering.

## Connections

- [[Apoptosis]] -- programmed ending as structural integrity: cellular and clinical
- [[Hippocratic Oath]] -- proportion at the end of life is the Oath carried to its limit
- [[Triage]] -- both: medicine acting within recognized limits
- [[Black Hole Thermodynamics]] -- death of component serves higher-order function
- [[Buddhist Middle Way]] -- the balance between fighting death and accepting it

## Status

Saunders (2001). Christakis & Lamont (2000). Oregon Death with Dignity Act: ORS 127.800-127.897 (1997). Ethical status of physician-assisted death is genuinely contested (MYSTERY_EXPLORATION). The mapping to the five properties is this project's structural interpretation.

---

*The mapping to the five properties is this project's structural interpretation.*
