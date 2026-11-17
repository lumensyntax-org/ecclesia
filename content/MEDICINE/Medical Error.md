---
domain: medicine
properties: [alignment, honesty, humility]
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
    Not reached: the full text of Makary & Daniel (BMJ 2016). bmj.com returned 403 to the fetch
    tool, and the article is behind a subscription; only the free opening was read, from a Wayback
    snapshot of the article page. Their figure (251,454), its method and the ranking are taken
    from the Johns Hopkins news release, also read from a Wayback snapshot because the live page
    returned 403. Shojania & Dixon-Woods (BMJ Qual Saf 2017): only the PubMed record (citation,
    title, affiliations, no abstract) was read; the publisher page returned 403 and an archive
    fetch was not permitted in this session, so their arguments are unchecked. Reason, Human Error
    (1990): only the publisher's page was read; whether the book presents the Swiss cheese model
    is unchecked. The model is checked against Reason's 2000 BMJ paper, where the 1990 book is
    cited for the forms of active failure, not for the model. The claim death_certificates comes
    from the Pattern Mapping (Honesty) and was added to ground that mapping; the Pattern Mapping
    sentence that the CDC system has no code for medical error was not checked. The Status sentence
    'The structural analysis is this project's interpretation' is not a factual claim and was
    not made one. Pattern Mapping and Connections were otherwise not checked; they are interpretation.
  review_status: partial
  reviews: []
  sources:
  - id: makary_2016_pubmed
    citation: >-
      Makary MA, Daniel M. Medical error-the third leading cause of death in the US. BMJ 353:i2139,
      2016. PubMed record 27143499.
    source_kind: academic_article
    origin: external
    url: https://doi.org/10.1136/bmj.i2139
    academic_review:
      status: not_documented
      note: This record does not document a peer-review process.
  - id: makary_2016
    citation: >-
      Makary MA, Daniel M. Medical error—the third leading cause of death in the US. BMJ 353:i2139,
      2016. Opening of the article (free preview).
    source_kind: academic_article
    origin: external
    url: https://www.bmj.com/content/353/bmj.i2139
    academic_review:
      status: not_documented
      note: This record does not document a peer-review process.
  - id: jhu_release_2016
    citation: >-
      Johns Hopkins Medicine. Study Suggests Medical Errors Now Third Leading Cause of Death in
      the U.S. News release, May 3, 2016.
    source_kind: institutional_document
    origin: external
    url: >-
      https://www.hopkinsmedicine.org/news/media/releases/study_suggests_medical_errors_now_third_leading_cause_of_death_in_the_us
    academic_review:
      status: not_applicable
      note: Institutional news release, not a journal article.
  - id: iom_brief_1999
    citation: >-
      Institute of Medicine. To Err Is Human: Building a Safer Health System. Report brief, November
      1999.
    source_kind: institutional_document
    origin: external
    url: https://nap.nationalacademies.org/resource/9728/To-Err-is-Human-1999--report-brief.pdf
    academic_review:
      status: not_applicable
      note: >-
        Consensus report of the Institute of Medicine (National Academies) and its report brief,
        institutional documents, not journal articles.
  - id: iom_2000
    citation: >-
      Institute of Medicine. To Err Is Human: Building a Safer Health System, Executive Summary.
      Washington, DC: The National Academies Press, 2000. doi:10.17226/9728.
    source_kind: institutional_document
    origin: external
    url: https://doi.org/10.17226/9728
    academic_review:
      status: not_applicable
      note: >-
        Consensus report of the Institute of Medicine (National Academies) and its report brief,
        institutional documents, not journal articles.
  - id: reason_2000
    citation: 'Reason J. Human error: models and management. BMJ 320(7237):768-770, 2000.'
    source_kind: academic_article
    origin: external
    url: https://doi.org/10.1136/bmj.320.7237.768
    academic_review:
      status: not_documented
      note: This record does not document a peer-review process.
  - id: reason_1990
    citation: >-
      Reason J. Human Error. Cambridge: Cambridge University Press, 1990. Publisher's book page
      (Cambridge Core).
    source_kind: other
    kind_note: Publisher's page for the book. The book's text was not opened.
    origin: external
    url: https://doi.org/10.1017/CBO9781139062367
    academic_review:
      status: not_documented
      note: This record does not document a peer-review process.
  - id: shojania_2017
    citation: >-
      Shojania KG, Dixon-Woods M. Estimating deaths due to medical error: the ongoing controversy
      and why it matters. BMJ Quality & Safety 26(5):423-428, 2017. PubMed record 27733444.
    source_kind: academic_article
    origin: external
    url: https://doi.org/10.1136/bmjqs-2016-006144
    academic_review:
      status: not_documented
      note: This record does not document a peer-review process.
  claims:
  - id: makary_citation
    text: >-
      Makary and Daniel published 'Medical error—the third leading cause of death in the US' in
      BMJ volume 353 in 2016.
    claim_kind: historical_textual
    supports:
    - source_id: makary_2016_pubmed
      locator:
        kind: other
        value: PubMed record 27143499, citation and title
      support: direct
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=27143499&rettype=abstract&retmode=text
        accessed: '2026-11-17'
        quote: BMJ. 2016 May 3;353:i2139.
        claim_digest: sha256:d7660eda2f2ce986ce75f793e4920c4a38c070c01d161f4ad677f43a40633349
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=27143499&rettype=abstract&retmode=text
        accessed: '2026-11-17'
        quote: Medical error-the third leading cause of death in the US. Makary MA(1), Daniel
          M(2).
        claim_digest: sha256:d7660eda2f2ce986ce75f793e4920c4a38c070c01d161f4ad677f43a40633349
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: reason_book
    text: James Reason's book Human Error was published by Cambridge University Press in 1990.
    claim_kind: historical_textual
    supports:
    - source_id: reason_1990
      locator:
        kind: other
        value: 'Publisher''s page: book details'
      support: direct
      note: >-
        The same page's description also says the book was 'published in 1991'; the paperback
        publication date it gives is 26 October 1990.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://www.cambridge.org/core/books/human-error/281486994DE4704203A514F7B7D826C0
        accessed: '2026-11-17'
        quote: 'Format: Paperback Publication date: 26 October 1990'
        claim_digest: sha256:90d6714c56d06aa866dca3be926995cc80dc2933e5eb5b3b27d8b24127572822
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: institutions
    text: >-
      Makary and Daniel were affiliated with Johns Hopkins, and Reason with the University of
      Manchester.
    claim_kind: historical_textual
    supports:
    - source_id: makary_2016_pubmed
      locator:
        kind: other
        value: PubMed record 27143499, author information
      support: direct
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=27143499&rettype=abstract&retmode=text
        accessed: '2026-11-17'
        quote: >-
          (1)Department of Surgery, Johns Hopkins University School of Medicine, Baltimore, MD
          21287, USA
        claim_digest: sha256:063e45201dbdbcd7c1f92eafb725eac5571bc5724e3856cc0a14b606e817aff6
      review_status: partial
    - source_id: reason_2000
      locator:
        kind: other
        value: Author information
      support: direct
      note: This is Reason's affiliation on the 2000 paper.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://pmc.ncbi.nlm.nih.gov/articles/PMC1117770/
        accessed: '2026-11-17'
        quote: Department of Psychology, University of Manchester, Manchester M13 9PL
        claim_digest: sha256:063e45201dbdbcd7c1f92eafb725eac5571bc5724e3856cc0a14b606e817aff6
      review_status: partial
    - source_id: reason_1990
      locator:
        kind: other
        value: 'Publisher''s page: author line'
      support: direct
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://www.cambridge.org/core/books/human-error/281486994DE4704203A514F7B7D826C0
        accessed: '2026-11-17'
        quote: James Reason , University of Manchester
        claim_digest: sha256:063e45201dbdbcd7c1f92eafb725eac5571bc5724e3856cc0a14b606e817aff6
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: makary_estimate
    text: >-
      Makary and Daniel estimated that medical error causes more than 250,000 deaths a year in
      the US, which would rank it as the third leading cause of death.
    claim_kind: empirical
    supports:
    - source_id: jhu_release_2016
      locator:
        kind: paragraph
        value: First and fifth paragraphs of the release
      support: direct
      note: >-
        The release reports the figure as an extrapolation: four studies of death rate data from
        2000 to 2008 applied to 35,416,020 hospital admissions in 2013, giving 251,454 deaths.
        The paper's own statement of the figure and its method was not read.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://web.archive.org/web/20160608050608/http://www.hopkinsmedicine.org:80/news/media/releases/study_suggests_medical_errors_now_third_leading_cause_of_death_in_the_us
        accessed: '2026-11-17'
        quote: calculated that more than 250,000 deaths per year are due to medical error in the
          U.S.
        claim_digest: sha256:b469338e03310f394eecbdec857e8013ed26bc189cf79c6cd8e55ab6484493b6
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://web.archive.org/web/20160608050608/http://www.hopkinsmedicine.org:80/news/media/releases/study_suggests_medical_errors_now_third_leading_cause_of_death_in_the_us
        accessed: '2026-11-17'
        quote: 251,454 deaths stemmed from a medical error
        claim_digest: sha256:b469338e03310f394eecbdec857e8013ed26bc189cf79c6cd8e55ab6484493b6
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://web.archive.org/web/20160608050608/http://www.hopkinsmedicine.org:80/news/media/releases/study_suggests_medical_errors_now_third_leading_cause_of_death_in_the_us
        accessed: '2026-11-17'
        quote: >-
          The newly calculated figure for medical errors puts this cause of death behind cancer
          but ahead of respiratory disease.
        claim_digest: sha256:b469338e03310f394eecbdec857e8013ed26bc189cf79c6cd8e55ab6484493b6
      review_status: partial
    - source_id: makary_2016
      locator:
        kind: other
        value: Article title and standfirst
      support: partial
      note: >-
        The readable opening gives the ranking only through the title and says the authors assess
        error's contribution to mortality. The figure is behind the subscription wall and was
        not reached.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://web.archive.org/web/20160602070841/http://www.bmj.com/content/353/bmj.i2139
        accessed: '2026-11-17'
        quote: Analysis Medical error—the third leading cause of death in the US
        claim_digest: sha256:b469338e03310f394eecbdec857e8013ed26bc189cf79c6cd8e55ab6484493b6
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://web.archive.org/web/20160602070841/http://www.bmj.com/content/353/bmj.i2139
        accessed: '2026-11-17'
        quote: >-
          Martin Makary and Michael Daniel assess its contribution to mortality and call for better
          reporting
        claim_digest: sha256:b469338e03310f394eecbdec857e8013ed26bc189cf79c6cd8e55ab6484493b6
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: iom_estimate
    text: >-
      The Institute of Medicine's report To Err Is Human, issued in 1999, estimated that 44,000
      to 98,000 people die each year from medical errors.
    claim_kind: empirical
    supports:
    - source_id: iom_brief_1999
      locator:
        kind: page
        value: p. 1, opening paragraph and the paragraph introducing the report
      support: direct
      note: >-
        The figures are for deaths in hospitals from medical errors that could have been prevented;
        the entry omits 'in hospitals'.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://nap.nationalacademies.org/resource/9728/To-Err-is-Human-1999--report-brief.pdf
        accessed: '2026-11-17'
        quote: >-
          At least 44,000 people, and perhaps as many as 98,000 people, die in hospitals each
          year as a result of medical errors that could have been prevented
        claim_digest: sha256:bd726832c65871b6919c7eefbe07d2bec4cf5eeedac63e190d8b850e79445b0e
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://nap.nationalacademies.org/resource/9728/To-Err-is-Human-1999--report-brief.pdf
        accessed: '2026-11-17'
        quote: In this report, issued in November 1999
        claim_digest: sha256:bd726832c65871b6919c7eefbe07d2bec4cf5eeedac63e190d8b850e79445b0e
      review_status: partial
    - source_id: iom_2000
      locator:
        kind: section
        value: Executive Summary, opening section
      support: direct
      note: >-
        The book edition is dated 2000 in the publisher's suggested citation; the report brief
        gives November 1999 as the release.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://nap.nationalacademies.org/read/9728/chapter/2
        accessed: '2026-11-17'
        quote: at least 44,000 Americans die each year as a result of medical errors.
        claim_digest: sha256:bd726832c65871b6919c7eefbe07d2bec4cf5eeedac63e190d8b850e79445b0e
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://nap.nationalacademies.org/read/9728/chapter/2
        accessed: '2026-11-17'
        quote: The results of the New York Study suggest the number may be as high as 98,000.
        claim_digest: sha256:bd726832c65871b6919c7eefbe07d2bec4cf5eeedac63e190d8b850e79445b0e
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://nap.nationalacademies.org/read/9728/chapter/2
        accessed: '2026-11-17'
        quote: Institute of Medicine. 2000. To Err Is Human
        claim_digest: sha256:bd726832c65871b6919c7eefbe07d2bec4cf5eeedac63e190d8b850e79445b0e
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: systemic
    text: >-
      Most medical errors arise from faulty systems, processes and conditions rather than from
      individual failings.
    claim_kind: empirical
    supports:
    - source_id: iom_brief_1999
      locator:
        kind: page
        value: Paragraph on the report's main conclusions
      support: direct
      note: >-
        In the extracted PDF text a pull quote is spliced into this sentence, so it is quoted
        in two contiguous pieces.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://nap.nationalacademies.org/resource/9728/To-Err-is-Human-1999--report-brief.pdf
        accessed: '2026-11-17'
        quote: >-
          do not result from individual recklessness or the actions of a particular group--this
          is not a “bad apple” problem.
        claim_digest: sha256:b1ada53f2538607f3066a43b39f75d4a64e5ca7b108b2468727df27b3363be24
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://nap.nationalacademies.org/resource/9728/To-Err-is-Human-1999--report-brief.pdf
        accessed: '2026-11-17'
        quote: faulty systems, processes, and conditions that lead people to make mistakes or
        claim_digest: sha256:b1ada53f2538607f3066a43b39f75d4a64e5ca7b108b2468727df27b3363be24
      review_status: partial
    - source_id: jhu_release_2016
      locator:
        kind: paragraph
        value: Paragraph beginning 'The researchers caution'
      support: direct
      note: Reported as the view of Makary and Daniel.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://web.archive.org/web/20160608050608/http://www.hopkinsmedicine.org:80/news/media/releases/study_suggests_medical_errors_now_third_leading_cause_of_death_in_the_us
        accessed: '2026-11-17'
        quote: most errors represent systemic problems
        claim_digest: sha256:b1ada53f2538607f3066a43b39f75d4a64e5ca7b108b2468727df27b3363be24
      review_status: partial
    - source_id: reason_2000
      locator:
        kind: section
        value: System approach
      support: partial
      note: >-
        Reason argues for a system approach over a person approach; he does not state what share
        of errors is systemic.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://pmc.ncbi.nlm.nih.gov/articles/PMC1117770/
        accessed: '2026-11-17'
        quote: >-
          When an adverse event occurs, the important issue is not who blundered, but how and
          why the defences failed.
        claim_digest: sha256:b1ada53f2538607f3066a43b39f75d4a64e5ca7b108b2468727df27b3363be24
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: swiss_cheese
    text: >-
      Reason's Swiss cheese model describes harm as occurring when holes in several defensive
      layers line up.
    claim_kind: historical_textual
    supports:
    - source_id: reason_2000
      locator:
        kind: section
        value: The Swiss cheese model of system accidents
      support: direct
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://pmc.ncbi.nlm.nih.gov/articles/PMC1117770/
        accessed: '2026-11-17'
        quote: The Swiss cheese model of system accidents
        claim_digest: sha256:ef702b30832eac5fdea6ad32801c76f11c428a07092e72a93768be9584add692
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://pmc.ncbi.nlm.nih.gov/articles/PMC1117770/
        accessed: '2026-11-17'
        quote: >-
          Usually, this can happen only when the holes in many layers momentarily line up to permit
          a trajectory of accident opportunity
        claim_digest: sha256:ef702b30832eac5fdea6ad32801c76f11c428a07092e72a93768be9584add692
      review_status: partial
    - source_id: reason_1990
      locator: null
      support: unassessed
      note: >-
        The entry's Source line cites Human Error (1990). The book was not opened, so whether
        it presents this model is unchecked. In the 2000 paper the 1990 book is cited for the
        forms of active failure, not for the model.
      reviews: []
      review_status: pending
    origin: source_summary
    reviews: []
    review_status: partial
  - id: defense_layers
    text: In the model the defensive layers include training, protocols, checklists and oversight.
    claim_kind: historical_textual
    supports:
    - source_id: reason_2000
      locator:
        kind: section
        value: The Swiss cheese model of system accidents, first paragraph
      support: partial
      note: >-
        Reason names engineered defences, people, and procedures and administrative controls.
        Procedures and administrative controls correspond roughly to protocols and oversight;
        training and checklists are not named. The entry's list is a medical gloss.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://pmc.ncbi.nlm.nih.gov/articles/PMC1117770/
        accessed: '2026-11-17'
        quote: >-
          some are engineered (alarms, physical barriers, automatic shutdowns, etc), others rely
          on people (surgeons, anaesthetists, pilots, control room operators, etc), and yet others
          depend on procedures and administrative controls.
        claim_digest: sha256:09709ac3225acd188483a3a8997a40f3b653add3f5552a3b1709ffac264561cf
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: multiple_failures
    text: >-
      In the model a single failure does not normally suffice; harm usually occurs when several
      defences fail at the same time.
    claim_kind: historical_textual
    supports:
    - source_id: reason_2000
      locator:
        kind: section
        value: The Swiss cheese model of system accidents, first paragraph
      support: direct
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://pmc.ncbi.nlm.nih.gov/articles/PMC1117770/
        accessed: '2026-11-17'
        quote: The presence of holes in any one “slice” does not normally cause a bad outcome.
        claim_digest: sha256:32774d51af1fe7431c714c85166fe0f83a387487f89ebe540bd3945a2a6ae718
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://pmc.ncbi.nlm.nih.gov/articles/PMC1117770/
        accessed: '2026-11-17'
        quote: Usually, this can happen only when the holes in many layers momentarily line up
        claim_digest: sha256:32774d51af1fe7431c714c85166fe0f83a387487f89ebe540bd3945a2a6ae718
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: methodology_debated
    text: >-
      The methodology of estimating deaths from medical error is debated, for example by Shojania
      and Dixon-Woods in BMJ Quality & Safety 26 (2017).
    claim_kind: historical_textual
    supports:
    - source_id: shojania_2017
      locator:
        kind: other
        value: PubMed record 27733444, citation and title
      support: partial
      note: >-
        The record has no abstract. The title supports an ongoing controversy over estimating
        deaths due to medical error; it does not name Makary and Daniel or say what the dispute
        is about. The full text was not reached.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=27733444&rettype=abstract&retmode=text
        accessed: '2026-11-17'
        quote: BMJ Qual Saf. 2017 May;26(5):423-428.
        claim_digest: sha256:41f68a7a41a62c6338b51e907242fa209b942d9fe63f576a88fd0ba775ca8398
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=27733444&rettype=abstract&retmode=text
        accessed: '2026-11-17'
        quote: 'Estimating deaths due to medical error: the ongoing controversy and why it matters.'
        claim_digest: sha256:41f68a7a41a62c6338b51e907242fa209b942d9fe63f576a88fd0ba775ca8398
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: not_disputed
    text: The existence of systemic medical error is not disputed.
    claim_kind: empirical
    supports:
    - source_id: shojania_2017
      locator: null
      support: unassessed
      note: >-
        No opened source states this. The full text of Shojania and Dixon-Woods, where the state
        of the debate would be described, was not reached.
      reviews: []
      review_status: pending
    origin: source_summary
    reviews: []
    review_status: pending
  - id: death_certificates
    text: >-
      Makary and Daniel state that medical error is not recorded on US death certificates or in
      the CDC ranking of causes of death, because the certificates rely on ICD codes and causes
      without an ICD code are not captured.
    claim_kind: empirical
    supports:
    - source_id: makary_2016
      locator:
        kind: paragraph
        value: Standfirst and first paragraph
      support: direct
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://web.archive.org/web/20160602070841/http://www.bmj.com/content/353/bmj.i2139
        accessed: '2026-11-17'
        quote: Medical error is not included on death certificates or in rankings of cause of
          death.
        claim_digest: sha256:1540d601678a1196f190418a30edf8b4415e5837b4120d882fa3d1a1c6f2dd4a
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://web.archive.org/web/20160602070841/http://www.bmj.com/content/353/bmj.i2139
        accessed: '2026-11-17'
        quote: >-
          a major limitation of the death certificate is that it relies on assigning an International
          Classification of Disease (ICD) code to the cause of death.
        claim_digest: sha256:1540d601678a1196f190418a30edf8b4415e5837b4120d882fa3d1a1c6f2dd4a
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://web.archive.org/web/20160602070841/http://www.bmj.com/content/353/bmj.i2139
        accessed: '2026-11-17'
        quote: >-
          causes of death not associated with an ICD code, such as human and system factors, are
          not captured.
        claim_digest: sha256:1540d601678a1196f190418a30edf8b4415e5837b4120d882fa3d1a1c6f2dd4a
      review_status: partial
    - source_id: jhu_release_2016
      locator:
        kind: paragraph
        value: Second paragraph
      support: direct
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://web.archive.org/web/20160608050608/http://www.hopkinsmedicine.org:80/news/media/releases/study_suggests_medical_errors_now_third_leading_cause_of_death_in_the_us
        accessed: '2026-11-17'
        quote: fails to classify medical errors separately on the death certificate
        claim_digest: sha256:1540d601678a1196f190418a30edf8b4415e5837b4120d882fa3d1a1c6f2dd4a
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  mappings:
  - id: alignment_knowledge_action
    statement: >-
      The entry reads medical error as a gap between knowledge and action: clinicians know the
      protocols, but the system does not turn that knowledge into consistent action.
    claim_ids:
    - systemic
    - multiple_failures
    targets:
    - property:alignment
    mapping_kind: interpretive_synthesis
    argument: >-
      The IOM and Makary and Daniel place most errors in systems, processes and conditions rather
      than in individual recklessness, and Reason's model locates harm in failures that line up
      across layers. The entry reads this as a failure to carry what is known into what is done.
    limits: >-
      No cited source frames medical error as a gap between knowledge and action. None establishes
      that the clinicians involved knew the relevant protocols, or that checklists are skipped;
      no opened source mentions checklists. The Johns Hopkins release speaks of poorly coordinated
      care, the absence or underuse of safety nets and protocols, and unwarranted variation in
      practice, which is not the same claim.
    review_status: pending
    reviews: []
  - id: honesty_death_certificates
    statement: >-
      The entry reads the absence of medical error from death certificates and cause-of-death
      rankings as an institutional failure of honesty: the system that counts deaths cannot name
      one of their leading causes.
    claim_ids:
    - death_certificates
    - makary_estimate
    targets:
    - property:honesty
    mapping_kind: interpretive_synthesis
    argument: >-
      Makary and Daniel state that death certificates rely on ICD codes and that causes without
      one, such as human and system factors, are not captured, so medical error does not appear
      in the CDC ranking. The entry reads the distance between what the count reports and what
      is known about deaths from error as a failure of honesty.
    limits: >-
      The sources describe a limitation of ICD-based coding, not dishonesty; the Johns Hopkins
      release quotes Makary saying medical errors were 'unintentionally excluded' from national
      statistics, which cuts against reading it as a failure of honesty. The sources say causes
      'not associated with an ICD code' go uncaptured; they do not establish the Pattern Mapping's
      statement that the CDC system has no code for medical error, which was not checked. The
      estimate that makes error one of the leading causes is itself contested (Shojania and Dixon-Woods,
      2017).
    review_status: pending
    reviews: []
  - id: humility_system_approach
    statement: >-
      The entry reads Reason's system approach, which asks how the defences failed rather than
      who erred, as humility about causation.
    claim_ids:
    - swiss_cheese
    - multiple_failures
    - systemic
    targets:
    - property:humility
    mapping_kind: interpretive_synthesis
    argument: >-
      Reason writes that after an adverse event the important issue is not who blundered but how
      and why the defences failed, and the IOM says most errors come from faulty systems rather
      than individual recklessness. The entry reads this restraint in assigning cause to one person
      as humility.
    limits: >-
      Neither source refuses to blame the individual, as the entry says the model does. Reason
      calls for a just culture that draws a line between blameless and blameworthy actions, and
      the IOM report says people must still be vigilant and held responsible for their actions.
      The sources argue that a system approach prevents more errors; they do not frame it as humility,
      and that reading is this project's.
    review_status: pending
    reviews: []
---

# Medical Error

**Source**: Makary & Daniel, "Medical Error -- the Third Leading Cause of Death in the US," *BMJ* 353, 2016; Reason, *Human Error*, 1990
**Institution**: Johns Hopkins; University of Manchester

## Finding

Makary and Daniel estimated that medical errors cause more than 250,000 deaths per year in the U.S., making them the third leading cause of death. The Institute of Medicine's *To Err Is Human* (1999) estimated 44,000-98,000. The key insight: medical error is predominantly systemic, not individual. James Reason's Swiss cheese model describes how harm results from aligned holes in multiple defensive layers -- training, protocols, checklists, oversight. A single failure does not normally suffice; the system fails when multiple defenses fail simultaneously.

## Pattern Mapping

**Alignment** violated as Knowledge-Action Gap -- physicians know protocols, but systems fail to translate knowledge into consistent action. The surgeon knows the checklist; the environment creates conditions where it is skipped. The gap is between knowledge and action, not knowledge and ignorance.

**Honesty** -- Medical errors are not listed on death certificates. The CDC's cause-of-death system has no code for "medical error." The system that counts deaths cannot honestly name one of the leading causes. The failure of honesty is institutional.

**Humility** -- The Swiss cheese model is structurally humble. It refuses to blame the individual and examines the system. Humility about causation: the system's failure, not the individual's character, is primary.

## Connections

- [[Technical Debt]] -- both are K-A Gaps: known problems, contradictory action
- [[Antibiotic Resistance]] -- both: institutional K-A Gap in medicine
- [[Arendt Banality of Evil]] -- systemic structures overriding individual knowledge
- [[Feedback Control]] -- error correction mechanisms that fail when layers align
- [[Triage]] -- both: resource and system constraints shape patient outcomes

## Status

Makary & Daniel (2016). *To Err Is Human* (1999). Reason (1990). Methodology debated: Shojania & Dixon-Woods, *BMJ Quality & Safety* 26, 2017. The existence of systemic medical error is not disputed. The structural analysis is this project's interpretation.

---

*The mapping to the five properties is this project's structural interpretation.*
