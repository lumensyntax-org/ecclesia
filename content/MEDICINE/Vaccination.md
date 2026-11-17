---
domain: medicine
properties: [alignment, proportion, honesty]
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
    Not reached: the text of Anderson & May, Infectious Diseases of Humans (1991). The publisher's
    page returned an empty HTTP 202 response and no Internet Archive copy was found, so the book's
    bibliographic details are checked only against a 1992 review in Epidemiology and Infection,
    and the Status attribution of the herd immunity statements to the book is unassessed. The
    herd immunity thresholds are checked against WHO and against Pollard & Bijker (2021), not
    against Anderson & May. The CDC explainer pages on how vaccines work returned HTTP 403, and
    Fine, Eames & Heymann (2011) returned HTTP 403 at the publisher, so neither was used. Jenner's
    Inquiry is read in the Project Gutenberg transcription of the 1798 first edition (fetched
    from the Internet Archive copy, because gutenberg.org returned HTTP 503), not in page images.
    The Institution line's 'Imperial College London' is checked only for Anderson, through the
    affiliation on one 1990 PubMed record; PubMed lists only the first author's affiliation, so
    May's institution is unchecked. The WHO page that carries the deaths figure is undated; the
    '(2023)' in Status is checked only against an Internet Archive snapshot of that page from
    8 July 2023. Two claims (nyhan_findings, maglione_scope) do not come from Source, Finding
    or Status: nyhan_findings reports what the Nyhan paper cited in Status found, and maglione_scope
    reports the scope of the review that the Pattern Mapping cites. Both are added so that the
    mapping limits rest on opened sources. Pattern Mapping and Connections were not checked as
    claims; they are interpretation.
  review_status: partial
  reviews: []
  sources:
  - id: jenner_1798
    citation: >-
      Jenner E. An Inquiry into the Causes and Effects of the Variolæ Vaccinæ, a Disease Discovered
      in Some of the Western Counties of England, Particularly Gloucestershire, and Known by the
      Name of the Cow Pox. London: printed for the author by Sampson Low, 1798. Project Gutenberg
      eBook #29414 (2009), transcribed from page images of the Posner Memorial Collection, Carnegie
      Mellon University Libraries.
    source_kind: scholarly_book
    origin: external
    url: https://www.gutenberg.org/ebooks/29414
    academic_review:
      status: not_documented
      note: This record does not document a peer-review process.
  - id: tillett_1992
    citation: >-
      Tillett HE. Book review: Infectious Diseases of Humans: Dynamics and Control, by R. M. Anderson
      and R. M. May. Epidemiology and Infection 108:211-212, 1992. doi:10.1017/S0950268800059896.
    source_kind: other
    kind_note: >-
      A journal's review of the book, used only for the book's bibliographic details (authors,
      title, publisher, year). The book itself was not opened, and the review is not used as a
      source for the book's content.
    origin: external
    url: https://doi.org/10.1017/S0950268800059896
    academic_review:
      status: not_documented
      note: This record does not document a peer-review process.
  - id: anderson_may_1990
    citation: >-
      Anderson RM, May RM. Immunisation and herd immunity. Lancet 335(8690):641-645, 1990. PubMed
      record (no abstract).
    source_kind: academic_article
    origin: external
    url: https://doi.org/10.1016/0140-6736(90)90420-a
    academic_review:
      status: not_documented
      note: This record does not document a peer-review process.
  - id: who_what_is_vaccination
    citation: >-
      World Health Organization. Vaccines and immunization: What is vaccination? Questions and
      answers, 22 October 2025.
    source_kind: institutional_document
    origin: external
    url: >-
      https://www.who.int/news-room/questions-and-answers/item/vaccines-and-immunization-what-is-vaccination
    academic_review:
      status: not_applicable
      note: Public information page of the World Health Organization, not a journal article.
  - id: pollard_bijker_2021
    citation: >-
      Pollard AJ, Bijker EM. A guide to vaccinology: from basic principles to new developments.
      Nature Reviews Immunology 21(2):83-100, 2021.
    source_kind: academic_article
    origin: external
    url: https://doi.org/10.1038/s41577-020-00479-7
    academic_review:
      status: not_documented
      note: This record does not document a peer-review process.
  - id: who_herd_2020
    citation: >-
      World Health Organization. Coronavirus disease (COVID-19): Herd immunity, lockdowns and
      COVID-19. Questions and answers, updated 31 December 2020 (marked as no longer updated).
    source_kind: institutional_document
    origin: external
    url: >-
      https://www.who.int/news-room/questions-and-answers/item/herd-immunity-lockdowns-and-covid-19
    academic_review:
      status: not_applicable
      note: Public information page of the World Health Organization, not a journal article.
  - id: who_vaccines_topic
    citation: >-
      World Health Organization. Vaccines and immunization (health topic page). Undated; accessed
      17 November 2026.
    source_kind: institutional_document
    origin: external
    url: https://www.who.int/health-topics/vaccines-and-immunization
    academic_review:
      status: not_applicable
      note: Public information page of the World Health Organization, not a journal article.
  - id: who_vaccines_topic_2023
    citation: >-
      World Health Organization. Vaccines and immunization (health topic page), as archived by
      the Internet Archive on 8 July 2023.
    source_kind: institutional_document
    origin: external
    url: >-
      http://web.archive.org/web/20230708061854/https://www.who.int/health-topics/vaccines-and-immunization
    academic_review:
      status: not_applicable
      note: Public information page of the World Health Organization, not a journal article.
  - id: nyhan_2014
    citation: >-
      Nyhan B, Reifler J, Richey S, Freed GL. Effective messages in vaccine promotion: a randomized
      trial. Pediatrics 133(4):e835-e842, 2014.
    source_kind: academic_article
    origin: external
    url: https://doi.org/10.1542/peds.2013-2365
    academic_review:
      status: not_documented
      note: This record does not document a peer-review process.
  - id: maglione_2014
    citation: >-
      Maglione MA, Das L, Raaen L, Smith A, Chari R, Newberry S, Shanman R, Perry T, Goetz MB,
      Gidengil C. Safety of vaccines used for routine immunization of U.S. children: a systematic
      review. Pediatrics 134(2):325-337, 2014.
    source_kind: academic_article
    origin: external
    url: https://doi.org/10.1542/peds.2014-1079
    academic_review:
      status: not_documented
      note: This record does not document a peer-review process.
  claims:
  - id: jenner_inquiry_1798
    text: >-
      Edward Jenner's An Inquiry into the Causes and Effects of the Variolae Vaccinae was printed
      in London in 1798.
    claim_kind: historical_textual
    supports:
    - source_id: jenner_1798
      locator:
        kind: page
        value: Title page
      support: direct
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://archive.org/download/aninquiryintothe29414gut/pg29414.txt
        accessed: '2026-11-17'
        quote: >-
          INTO THE CAUSES AND EFFECTS OF THE VARIOLÆ VACCINÆ, A DISEASE DISCOVERED IN SOME OF
          THE WESTERN COUNTIES OF ENGLAND
        claim_digest: sha256:011ca7df4030fc06ee481d8f873abbfe18036ed1c4973fe89581c5377e1ef28e
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://archive.org/download/aninquiryintothe29414gut/pg29414.txt
        accessed: '2026-11-17'
        quote: 'London: PRINTED, FOR THE AUTHOR, BY SAMPSON LOW'
        claim_digest: sha256:011ca7df4030fc06ee481d8f873abbfe18036ed1c4973fe89581c5377e1ef28e
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://archive.org/download/aninquiryintothe29414gut/pg29414.txt
        accessed: '2026-11-17'
        quote: AND MURRAY AND HIGHLEY, FLEET STREET. 1798.
        claim_digest: sha256:011ca7df4030fc06ee481d8f873abbfe18036ed1c4973fe89581c5377e1ef28e
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: anderson_may_book_1991
    text: >-
      Roy Anderson and Robert May's Infectious Diseases of Humans was published by Oxford University
      Press in 1991.
    claim_kind: historical_textual
    supports:
    - source_id: tillett_1992
      locator:
        kind: page
        value: p. 211, review heading
      support: direct
      note: Checked against a journal review's bibliographic heading, not against the book.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://resolve.cambridge.org/core/services/aop-cambridge-core/content/view/1F1BDF226A60746329883BBA5BE2DD1F/S0950268800059896a.pdf/infectious-diseases-of-humans-dynamics-and-control-r-m-anderson-r-m-may-pp-757-oxford-university-press-1991-pound5000.pdf
        accessed: '2026-11-17'
        quote: >-
          Infectious Diseases of Humans: Dynamics and Control. R. M. ANDERSON, R. M. MAY. Pp.
          757. Oxford University Press; 1991.
        claim_digest: sha256:4d4c39591b3ddd534efbaa0ced12c02ebc590d3fea6bfbd3a052498ab7163759
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: jenner_berkeley
    text: >-
      Jenner wrote from Berkeley, Gloucestershire, where he signed the Inquiry's dedication in
      June 1798.
    claim_kind: historical_textual
    supports:
    - source_id: jenner_1798
      locator:
        kind: page
        value: Dedication to C. H. Parry, closing lines
      support: direct
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://archive.org/download/aninquiryintothe29414gut/pg29414.txt
        accessed: '2026-11-17'
        quote: EDWARD JENNER. Berkeley, Gloucestershire, June 21st, 1798.
        claim_digest: sha256:792d82713e336786f8f5de4ee6cf7d44850175d3ee302c9fe31460832f78d452
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: anderson_may_imperial
    text: Anderson and May worked at Imperial College London.
    claim_kind: historical_textual
    supports:
    - source_id: anderson_may_1990
      locator:
        kind: other
        value: PubMed record, author information
      support: partial
      note: >-
        The record gives Anderson's affiliation in 1990 as the Biology Department, Imperial College.
        PubMed lists only the first author's affiliation, so May's institution is not checked,
        and the record is of a 1990 article, not of the 1991 book.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=1969023,1683006,2282182&rettype=abstract&retmode=text
        accessed: '2026-11-17'
        quote: >-
          Immunisation and herd immunity. Anderson RM(1), May RM. Author information: (1)Biology
          Department, Imperial College, London, UK.
        claim_digest: sha256:2f5d8f2e2d1030286c27e80b23d6de7f820dca60f093eb0bb9b7994d58de7ea2
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: vaccination_trains_immunity
    text: >-
      Vaccination trains the adaptive immune system to recognize a pathogen before a person is
      exposed to it.
    claim_kind: empirical
    supports:
    - source_id: who_what_is_vaccination
      locator:
        kind: section
        value: What is vaccination?; What's in a vaccine?
      support: partial
      note: >-
        States that vaccines protect before contact and train the body to recognize the germ.
        It speaks of the immune system and the body, not of the adaptive immune system.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://www.who.int/news-room/questions-and-answers/item/vaccines-and-immunization-what-is-vaccination
        accessed: '2026-11-17'
        quote: >-
          Vaccination is a simple, safe, and effective way of protecting you against harmful diseases,
          before you come into contact with them.
        claim_digest: sha256:98ea66e1dc39024bd39d5318abe4175071c2e056daa5bc4e123398ea320891ea
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://www.who.int/news-room/questions-and-answers/item/vaccines-and-immunization-what-is-vaccination
        accessed: '2026-11-17'
        quote: Antigens train our bodies to recognize the germ and respond if exposed in the future
        claim_digest: sha256:98ea66e1dc39024bd39d5318abe4175071c2e056daa5bc4e123398ea320891ea
      review_status: partial
    - source_id: pollard_bijker_2021
      locator:
        kind: section
        value: Vaccines induce antibodies
      support: partial
      note: >-
        Supports the adaptive part: the adaptive response is B and T cells, and routine vaccines
        are thought to protect mainly through antibodies. The same sentence notes BCG as an exception,
        believed to act partly through innate responses.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://www.ebi.ac.uk/europepmc/webservices/rest/PMC7754704/fullTextXML
        accessed: '2026-11-17'
        quote: >-
          The adaptive immune response is mediated by B cells that produce antibodies (humoral
          immunity) and by T cells (cellular immunity).
        claim_digest: sha256:98ea66e1dc39024bd39d5318abe4175071c2e056daa5bc4e123398ea320891ea
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://www.ebi.ac.uk/europepmc/webservices/rest/PMC7754704/fullTextXML
        accessed: '2026-11-17'
        quote: are thought to mainly confer protection through the induction of antibodies
        claim_digest: sha256:98ea66e1dc39024bd39d5318abe4175071c2e056daa5bc4e123398ea320891ea
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: jenner_1796_case
    text: >-
      Jenner reported that a boy he inoculated with cowpox in May 1796 developed no disease when
      inoculated with smallpox matter that July.
    claim_kind: historical_textual
    supports:
    - source_id: jenner_1798
      locator:
        kind: section
        value: Case XVII
      support: direct
      note: >-
        The 1796 evidence is one boy, challenged by inoculation with smallpox matter (variolation),
        not by natural smallpox. Jenner writes that his research then paused until spring 1798,
        before the Inquiry was printed. The entry's earlier wording, that Jenner 'demonstrated
        in 1796 that cowpox inoculation protected against smallpox', was narrowed to this.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://archive.org/download/aninquiryintothe29414gut/pg29414.txt
        accessed: '2026-11-17'
        quote: >-
          I selected a healthy boy, about eight years old, for the purpose of inoculation for
          the Cow Pox.
        claim_digest: sha256:c1aeae47cbc02eab882542589446b97f5c00e5c6ad6ae703300e73be46ac5dd7
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://archive.org/download/aninquiryintothe29414gut/pg29414.txt
        accessed: '2026-11-17'
        quote: it was inserted, on the 14th of May, 1796, into the arm of the boy
        claim_digest: sha256:c1aeae47cbc02eab882542589446b97f5c00e5c6ad6ae703300e73be46ac5dd7
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://archive.org/download/aninquiryintothe29414gut/pg29414.txt
        accessed: '2026-11-17'
        quote: >-
          he was inoculated the 1st of July following with variolous matter, immediately taken
          from a pustule.
        claim_digest: sha256:c1aeae47cbc02eab882542589446b97f5c00e5c6ad6ae703300e73be46ac5dd7
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://archive.org/download/aninquiryintothe29414gut/pg29414.txt
        accessed: '2026-11-17'
        quote: the matter was carefully inserted, but no disease followed.
        claim_digest: sha256:c1aeae47cbc02eab882542589446b97f5c00e5c6ad6ae703300e73be46ac5dd7
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://archive.org/download/aninquiryintothe29414gut/pg29414.txt
        accessed: '2026-11-17'
        quote: Here my researches were interrupted till the spring of the year 1798
        claim_digest: sha256:c1aeae47cbc02eab882542589446b97f5c00e5c6ad6ae703300e73be46ac5dd7
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: memory_b_t_cells
    text: >-
      Vaccines present antigens to the immune system and generate memory B cells and memory T
      cells.
    claim_kind: empirical
    supports:
    - source_id: pollard_bijker_2021
      locator:
        kind: other
        value: Fig. 3 legend, The generation of an immune response to a vaccine
      support: direct
      note: >-
        The legend describes the response to a conventional protein-antigen vaccine; the entry
        says 'modern vaccines' in general.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://www.ebi.ac.uk/europepmc/webservices/rest/PMC7754704/fullTextXML
        accessed: '2026-11-17'
        quote: >-
          the presentation of peptides of the vaccine protein antigen by MHC molecules on the
          dendritic cell activates T cells through their T cell receptor (TCR).
        claim_digest: sha256:505ac88fff0799bb7833d72683d32250c594241816321b96dadf284efdaf62ae
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://www.ebi.ac.uk/europepmc/webservices/rest/PMC7754704/fullTextXML
        accessed: '2026-11-17'
        quote: Memory B cells are also produced, which mediate immune memory.
        claim_digest: sha256:505ac88fff0799bb7833d72683d32250c594241816321b96dadf284efdaf62ae
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://www.ebi.ac.uk/europepmc/webservices/rest/PMC7754704/fullTextXML
        accessed: '2026-11-17'
        quote: CD8 + memory T cells can proliferate rapidly when they encounter a pathogen
        claim_digest: sha256:505ac88fff0799bb7833d72683d32250c594241816321b96dadf284efdaf62ae
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: herd_immunity_mechanism
    text: >-
      When a large enough share of a population is immune, transmission chains break and people
      who are not immune are indirectly protected.
    claim_kind: empirical
    supports:
    - source_id: who_herd_2020
      locator:
        kind: section
        value: What is 'herd immunity'?
      support: direct
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://www.who.int/news-room/questions-and-answers/item/herd-immunity-lockdowns-and-covid-19
        accessed: '2026-11-17'
        quote: >-
          is the indirect protection from an infectious disease that happens when a population
          is immune either through vaccination or immunity developed through previous infection.
        claim_digest: sha256:4c013c47307bdc79aac3af80784d23f9897636523141e8d0cf1dd4cd76c08bab
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://www.who.int/news-room/questions-and-answers/item/herd-immunity-lockdowns-and-covid-19
        accessed: '2026-11-17'
        quote: >-
          Vaccinated people are protected from getting the disease in question and passing on
          the pathogen, breaking any chains of transmission.
        claim_digest: sha256:4c013c47307bdc79aac3af80784d23f9897636523141e8d0cf1dd4cd76c08bab
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://www.who.int/news-room/questions-and-answers/item/herd-immunity-lockdowns-and-covid-19
        accessed: '2026-11-17'
        quote: >-
          The percentage of people who need to be immune in order to achieve herd immunity varies
          with each disease.
        claim_digest: sha256:4c013c47307bdc79aac3af80784d23f9897636523141e8d0cf1dd4cd76c08bab
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: measles_threshold
    text: Herd immunity against measles requires about 95% of a population to be vaccinated.
    claim_kind: empirical
    supports:
    - source_id: who_herd_2020
      locator:
        kind: section
        value: What is 'herd immunity'?
      support: direct
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://www.who.int/news-room/questions-and-answers/item/herd-immunity-lockdowns-and-covid-19
        accessed: '2026-11-17'
        quote: herd immunity against measles requires about 95% of a population to be vaccinated.
        claim_digest: sha256:5f899fc627d6cc04e1ffc7186c8271462ac04cb9a4d48e55ec58d526423e518b
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://www.who.int/news-room/questions-and-answers/item/herd-immunity-lockdowns-and-covid-19
        accessed: '2026-11-17'
        quote: >-
          The remaining 5% will be protected by the fact that measles will not spread among those
          who are vaccinated.
        claim_digest: sha256:5f899fc627d6cc04e1ffc7186c8271462ac04cb9a4d48e55ec58d526423e518b
      review_status: partial
    - source_id: pollard_bijker_2021
      locator:
        kind: section
        value: Herd immunity, text beside Fig. 5
      support: direct
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://www.ebi.ac.uk/europepmc/webservices/rest/PMC7754704/fullTextXML
        accessed: '2026-11-17'
        quote: >-
          For highly transmissible pathogens, such as those causing measles or pertussis, around
          95% of the population must be vaccinated to prevent disease outbreaks
        claim_digest: sha256:5f899fc627d6cc04e1ffc7186c8271462ac04cb9a4d48e55ec58d526423e518b
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: polio_threshold
    text: The herd immunity threshold for polio is about 80 to 85%.
    claim_kind: empirical
    supports:
    - source_id: who_herd_2020
      locator:
        kind: section
        value: What is 'herd immunity'?
      support: partial
      note: This source gives about 80%, the lower end of the entry's range. It does not state 85%.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://www.who.int/news-room/questions-and-answers/item/herd-immunity-lockdowns-and-covid-19
        accessed: '2026-11-17'
        quote: For polio, the threshold is about 80%.
        claim_digest: sha256:65f03a14456f6445bd8f1525d25cc3eab85d76911dcb9c4e77c0b964a803c257
      review_status: partial
    - source_id: pollard_bijker_2021
      locator:
        kind: section
        value: Herd immunity, text beside Fig. 5
      support: partial
      note: >-
        Gives an upper bound (coverage can be 86% or less) for polio and other less transmissible
        infections, citing a Statista table. The entry's range sits inside that bound; the source
        does not state the range itself.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://www.ebi.ac.uk/europepmc/webservices/rest/PMC7754704/fullTextXML
        accessed: '2026-11-17'
        quote: for polio, rubella, mumps or diphtheria, vaccine coverage can be ≤86%
        claim_digest: sha256:65f03a14456f6445bd8f1525d25cc3eab85d76911dcb9c4e77c0b964a803c257
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: who_deaths_prevented
    text: WHO states that immunization prevents 3.5 to 5 million deaths every year.
    claim_kind: empirical
    supports:
    - source_id: who_vaccines_topic
      locator:
        kind: paragraph
        value: Overview, first paragraph
      support: direct
      note: The page gives the figure without its method or underlying study.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://www.who.int/health-topics/vaccines-and-immunization
        accessed: '2026-11-17'
        quote: >-
          Immunization currently prevents 3.5 million to 5 million deaths every year from diseases
          like diphtheria, tetanus, pertussis (whooping cough), influenza and measles.
        claim_digest: sha256:464a9c347f433aabff8d0cd68d5f8a9844153821b8c6523149e9234c242ef000
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: who_estimate_2023
    text: WHO published the 3.5 to 5 million deaths estimate in 2023.
    claim_kind: historical_textual
    supports:
    - source_id: who_vaccines_topic_2023
      locator:
        kind: paragraph
        value: Overview, first paragraph, snapshot of 8 July 2023
      support: partial
      note: >-
        The snapshot shows WHO stating the figure in July 2023. The page is undated and the figure
        is still on the current page, so whether the estimate was first made in 2023 or earlier
        is not established.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          http://web.archive.org/web/20230708061854/https://www.who.int/health-topics/vaccines-and-immunization
        accessed: '2026-11-17'
        quote: >-
          Immunization currently prevents 3.5-5 million deaths every year from diseases like diphtheria,
          tetanus, pertussis, influenza and measles.
        claim_digest: sha256:d85fc9d049169106ee09690de90778f5ffac5a674bfafef20c6a639bee474c68
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: herd_immunity_anderson_may
    text: Anderson & May's 1991 book is the source for the entry's herd immunity statements.
    claim_kind: historical_textual
    supports:
    - source_id: tillett_1992
      locator: null
      support: unassessed
      note: >-
        The book was not opened. The review used for its bibliographic details mentions vaccination
        strategies but not herd immunity thresholds, and is not a source for the book's content.
        The thresholds in the entry are checked against WHO and Pollard & Bijker instead.
      reviews: []
      review_status: pending
    origin: source_summary
    reviews: []
    review_status: pending
  - id: nyhan_citation
    text: >-
      Nyhan and colleagues published a study of vaccine promotion messages in Pediatrics volume
      133 in 2014.
    claim_kind: historical_textual
    supports:
    - source_id: nyhan_2014
      locator:
        kind: other
        value: PubMed record, citation line
      support: direct
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=24590751&rettype=abstract&retmode=text
        accessed: '2026-11-17'
        quote: >-
          Pediatrics. 2014 Apr;133(4):e835-42. doi: 10.1542/peds.2013-2365. Epub 2014 Mar 3. Effective
          messages in vaccine promotion: a randomized trial. Nyhan B(1), Reifler J, Richey S,
          Freed GL.
        claim_digest: sha256:865a945c193611fdaa5049f1aa5f32dad566c9433b6b8afa255aa80905bd8fe6
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: nyhan_findings
    text: >-
      In a randomized online survey experiment with 1759 US parents, none of four pro-vaccine
      messages raised intent to vaccinate a future child, and correcting the MMR-autism claim
      lowered intent among the parents least favourable to vaccines.
    claim_kind: empirical
    supports:
    - source_id: nyhan_2014
      locator:
        kind: section
        value: 'Abstract: Methods and Results'
      support: direct
      note: >-
        The outcomes are stated intent and beliefs in a survey, not observed vaccination behaviour.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=24590751&rettype=abstract&retmode=text
        accessed: '2026-11-17'
        quote: >-
          A Web-based nationally representative 2-wave survey experiment was conducted with 1759
          parents
        claim_digest: sha256:2d9ef280068cbcc9de759980c26979b80466255e24df454598eeadfe859e8064
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=24590751&rettype=abstract&retmode=text
        accessed: '2026-11-17'
        quote: None of the interventions increased parental intent to vaccinate a future child.
        claim_digest: sha256:2d9ef280068cbcc9de759980c26979b80466255e24df454598eeadfe859e8064
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=24590751&rettype=abstract&retmode=text
        accessed: '2026-11-17'
        quote: >-
          Refuting claims of an MMR/autism link successfully reduced misperceptions that vaccines
          cause autism but nonetheless decreased intent to vaccinate among parents who had the
          least favorable vaccine attitudes.
        claim_digest: sha256:2d9ef280068cbcc9de759980c26979b80466255e24df454598eeadfe859e8064
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: maglione_scope
    text: >-
      Maglione and colleagues systematically reviewed the safety of routine US childhood vaccines
      and found that some are associated with serious adverse events, which are extremely rare.
    claim_kind: empirical
    supports:
    - source_id: maglione_2014
      locator:
        kind: section
        value: 'Abstract: Background, Results and Conclusions'
      support: direct
      note: The review covers safety, not efficacy, and included 67 studies.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=25086160&rettype=abstract&retmode=text
        accessed: '2026-11-17'
        quote: >-
          This study systematically reviewed the literature on the safety of routine vaccines
          recommended for children in the United States.
        claim_digest: sha256:77d42eb5e8d30011da2547e73da70ef96774dce9e3e6d6ef29aff1fb5431f772
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=25086160&rettype=abstract&retmode=text
        accessed: '2026-11-17'
        quote: Of 20 478 titles identified, 67 were included.
        claim_digest: sha256:77d42eb5e8d30011da2547e73da70ef96774dce9e3e6d6ef29aff1fb5431f772
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=25086160&rettype=abstract&retmode=text
        accessed: '2026-11-17'
        quote: >-
          We found evidence that some vaccines are associated with serious AEs; however, these
          events are extremely rare and must be weighed against the protective benefits that vaccines
          provide.
        claim_digest: sha256:77d42eb5e8d30011da2547e73da70ef96774dce9e3e6d6ef29aff1fb5431f772
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  mappings:
  - id: alignment_rehearsal
    statement: >-
      The entry reads vaccination as aligning the immune response with a threat that has not yet
      arrived: the body rehearses a defence it will need.
    claim_ids:
    - vaccination_trains_immunity
    - memory_b_t_cells
    - jenner_1796_case
    targets:
    - property:alignment
    mapping_kind: functional_analogy
    argument: >-
      The sources describe vaccination as training the immune system to recognize a pathogen before
      exposure and as producing memory cells that respond faster on a later encounter. The entry
      treats this match between the response prepared and the threat later met as a functional
      counterpart of purpose and action being consistent.
    limits: >-
      The immune system asserts nothing and has no stated purpose; calling protection its 'purpose'
      is the project's gloss, not a claim of the sources. The sources describe a mechanism, and
      Pollard & Bijker note that most routine vaccines are thought to protect mainly through antibodies
      and that BCG may act partly through innate responses, so the reading does not apply uniformly.
      Jenner's 1796 evidence is a single case.
    review_status: pending
    reviews: []
  - id: proportion_threshold
    statement: >-
      The entry reads the herd immunity threshold as a proportionality condition: below it transmission
      continues, above it further vaccination adds less, and what is required is a sufficient
      share, not every individual.
    claim_ids:
    - herd_immunity_mechanism
    - measles_threshold
    - polio_threshold
    targets:
    - property:proportion
    mapping_kind: conceptual_analogy
    argument: >-
      WHO and Pollard & Bijker describe indirect protection that appears once enough of a population
      is immune, at a share that differs by disease (about 95% for measles, lower for polio).
      The entry reads a threshold that is fixed by the disease rather than by maximal effort as
      an instance of action sized to what the purpose requires.
    limits: >-
      No cited source frames the threshold as proportion. The sources do not state that vaccination
      above the threshold yields diminishing returns, and the statement that no single individual
      must be vaccinated is the project's reading, not theirs; WHO presents herd immunity as a
      way to protect people who cannot be vaccinated. The thresholds are approximate: WHO says
      the share varies with each disease, Pollard & Bijker say the influenza threshold varies
      from season to season, and the WHO page dates from 2020 and is no longer updated. Anderson
      & May, cited in the entry for herd immunity, was not opened.
    review_status: pending
    reviews: []
  - id: honesty_hesitancy_gap
    statement: >-
      The entry reads vaccine hesitancy as a knowledge-action gap: safety evidence exists, yet
      stated intent does not follow it, and correcting misinformation can lower intent.
    claim_ids:
    - nyhan_findings
    - maglione_scope
    targets:
    - property:honesty
    mapping_kind: interpretive_synthesis
    argument: >-
      Maglione et al. reviewed the safety literature and found serious adverse events to be extremely
      rare. Nyhan et al. found that no message they tested raised parents' intent to vaccinate,
      and that correcting the MMR-autism claim lowered intent among the least favourable parents.
      The entry reads the distance between that evidence and that intent as a gap between what
      is known and what is done.
    limits: >-
      Nyhan et al. is one survey experiment on stated intent, not on behaviour; it does not show
      that more information often hardens anti-vaccine positions in general, as the Pattern Mapping
      says. Maglione et al. reviews safety only, not efficacy, and does not say that vaccine evidence
      is among the most extensively documented in medicine. The entry's section is titled Knowledge-Action
      Gap while its frontmatter lists honesty; that pairing, and the closing statement that personal
      autonomy claims authority beyond its scope (which reads closer to humility), are the project's
      interpretation and are not established by the cited sources.
    review_status: pending
    reviews: []
---

# Vaccination

**Source**: Edward Jenner, *An Inquiry into the Causes and Effects of the Variolae Vaccinae*, 1798; Anderson & May, *Infectious Diseases of Humans*, 1991
**Institution**: Berkeley, Gloucestershire; Imperial College London

## Finding

Vaccination trains the adaptive immune system to recognize a pathogen before natural infection. Jenner reported a 1796 case in which cowpox inoculation protected a boy against inoculated smallpox. Modern vaccines present antigens to generate memory B and T cells. Herd immunity: when sufficient population proportion is immune (~95% for measles, ~80-85% for polio), transmission chains break and unvaccinated individuals are protected. WHO estimates vaccination prevents 3.5-5 million deaths per year.

## Pattern Mapping

**Alignment** -- Vaccination aligns the immune system's response with a threat not yet materialized. The immune system's purpose (protect against pathogens) and its action (memory response to vaccine antigen) are consistent. The body rehearses a defense it will need.

**Proportion** -- Herd immunity is collective proportion. The threshold is a proportionality condition: below it, the system fails; above it, additional vaccination yields diminishing returns. No single individual must be vaccinated; a sufficient proportion must be.

**Knowledge-Action Gap** -- Vaccine hesitancy: evidence for safety and efficacy is among the most extensively documented in medicine (Maglione et al., 2014), yet action contradicts evidence. Providing more information often hardens anti-vaccine positions (Nyhan et al., 2014). Personal autonomy (legitimate) claims authority over epidemiological reality (beyond its scope).

## Connections

- [[Immune System and Clonal Selection]] -- vaccination educates the self/non-self boundary before the threat arrives
- [[Epidemiology]] -- herd immunity thresholds are epidemiological calculations
- [[Antibiotic Resistance]] -- both: K-A Gaps in public health practice
- [[DNA Error Correction]] -- vaccination adds a layer to the body's error correction
- [[Propaganda]] -- anti-vax messaging uses propaganda structure to exploit legitimate autonomy concerns

## Status

Jenner (1798). Herd immunity: Anderson & May (1991). WHO mortality estimate (2023). Vaccine hesitancy: Nyhan et al., *Pediatrics* 133, 2014. The mapping to the five properties is this project's structural interpretation.

---

*The mapping to the five properties is this project's structural interpretation.*
