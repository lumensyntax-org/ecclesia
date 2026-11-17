---
domain: medicine
properties: [proportion, humility, alignment]
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
    Larrey was read only as Internet Archive OCR of the French text (Tome I, Wellcome copy; Tome
    III, Columbia copy). The quotes keep the OCR errors. The volumes were searched by keyword,
    not read through. Tome II was searched but is not cited, and Tome IV was not searched. The
    three-way sorting the entry used to attribute to Larrey (survive without treatment, might
    survive with it, die regardless) was not found in those searches. It is stated in Emanuel
    et al. (2020) as their way of putting benefit maximization into practice. NEJM's own site
    refused the fetcher (HTTP 403), so Emanuel et al. was read from the PDF in the University
    of Oxford repository (ORA). That PDF carries the NEJM layout and page numbers 2049-2054. OpenAlex
    labels it the submitted version. The quotes come from a reading-order extraction of that same
    PDF (emanuel_ora_flow.txt, made with pdftotext without -layout), because the layout extraction
    made by fetch.py (emanuel_ora.txt) interleaves the two columns. AHRQ's current ESI page refused
    the fetcher (403), so the Internet Archive copy of 28 December 2019 was read. The Mackway-Jones
    book was not read. Its Internet Archive copy is access-restricted, so only the catalogue record
    was opened. Two claims, emanuel_three_groups and emanuel_no_wealth, match no sentence of the
    prose. They record what the cited paper says on the points the Pattern Mapping relies on.
    Not checked: whether triage originated with Larrey (no source on earlier practice was opened),
    and whether either five-level scale derives from Larrey.
  review_status: partial
  reviews: []
  sources:
  - id: larrey_1812_t1
    citation: >-
      Larrey DJ. Mémoires de chirurgie militaire, et campagnes. Tome I. Paris: J. Smith, 1812.
      Wellcome Collection copy, Internet Archive item b33491501_0001 (OCR text).
    source_kind: scholarly_book
    origin: external
    url: https://archive.org/details/b33491501_0001
    academic_review:
      status: not_documented
      note: This record does not document a peer-review process.
  - id: larrey_1812_t3
    citation: >-
      Larrey DJ. Mémoires de chirurgie militaire, et campagnes. Tome III. Paris: J. Smith; F.
      Buisson, 1812. Columbia University Health Sciences Library copy, Internet Archive item mmoiresdechiru03larr
      (OCR text).
    source_kind: scholarly_book
    origin: external
    url: https://archive.org/details/mmoiresdechiru03larr
    academic_review:
      status: not_documented
      note: This record does not document a peer-review process.
  - id: emanuel_2020
    citation: >-
      Emanuel EJ, Persad G, Upshur R, Thome B, Parker M, Glickman A, Zhang C, Boyle C, Smith M,
      Phillips JP. Fair Allocation of Scarce Medical Resources in the Time of Covid-19. N Engl
      J Med 382(21):2049-2055, 2020. doi:10.1056/NEJMsb2005114.
    source_kind: academic_article
    origin: external
    url: https://doi.org/10.1056/NEJMsb2005114
    academic_review:
      status: not_documented
      note: This record does not document a peer-review process.
  - id: emanuel_2020_record
    citation: >-
      PubMed record 32202722 for Emanuel EJ et al., Fair Allocation of Scarce Medical Resources
      in the Time of Covid-19, N Engl J Med 2020.
    source_kind: other
    kind_note: >-
      Bibliographic database record of the article (it has no abstract). Used for the citation
      line and the author affiliations.
    origin: external
    url: https://pubmed.ncbi.nlm.nih.gov/32202722/
    academic_review:
      status: not_applicable
      note: Bibliographic database record, not a scholarly text.
  - id: ahrq_esi
    citation: >-
      Agency for Healthcare Research and Quality. Emergency Severity Index (ESI): A Triage Tool
      for Emergency Departments, Version 4. Web page, as archived by the Internet Archive on 28
      December 2019.
    source_kind: institutional_document
    origin: external
    url: https://www.ahrq.gov/professionals/systems/hospital/esi/index.html
    academic_review:
      status: not_applicable
      note: Web page of a government agency, not a journal article.
  - id: zachariasse_2017
    citation: >-
      Zachariasse JM, Seiger N, Rood PPM, Alves CF, Freitas P, Smit FJ, Roukema GR, Moll HA. Validity
      of the Manchester Triage System in emergency care: A prospective observational study. PLoS
      One 12(2):e0170811, 2017. doi:10.1371/journal.pone.0170811.
    source_kind: academic_article
    origin: external
    url: https://doi.org/10.1371/journal.pone.0170811
    academic_review:
      status: not_documented
      note: This record does not document a peer-review process.
  - id: emergency_triage_2006_record
    citation: >-
      Internet Archive catalogue record for Emergency Triage. Manchester Triage Group; Mackway-Jones
      K, Marsden J, Windle J. Malden, Mass.; Oxford: Blackwell Pub., 2006 (item emergencytriage0000unse).
    source_kind: other
    kind_note: >-
      Catalogue record of an access-restricted lending copy. Only the bibliographic record was
      read, not the book.
    origin: external
    url: https://archive.org/details/emergencytriage0000unse
    academic_review:
      status: not_applicable
      note: Library catalogue record, not a scholarly text.
  claims:
  - id: larrey_work_1812
    text: >-
      Larrey's Mémoires de chirurgie militaire, et campagnes was published in Paris; Tomes I and
      III are dated 1812.
    claim_kind: historical_textual
    supports:
    - source_id: larrey_1812_t1
      locator:
        kind: page
        value: Tome I, title page
      support: direct
      note: >-
        The OCR renders the printer 'J. Smith' as 'J. Surrx'. Later volumes were not read, so
        their dates are not checked.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://archive.org/download/b33491501_0001/b33491501_0001_djvu.txt
        accessed: '2026-11-17'
        quote: Imprimeur-Libraire, rue de Montmorency. 1812.
        claim_digest: sha256:86917fc9ac7264504118aaee34e820e31ba0f29b1d0a4c1d235d29c83a445536
      review_status: partial
    - source_id: larrey_1812_t3
      locator:
        kind: page
        value: Tome III, title page
      support: direct
      note: The OCR splits the year on this title page ('18 12').
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://archive.org/download/mmoiresdechiru03larr/mmoiresdechiru03larr_djvu.txt
        accessed: '2026-11-17'
        quote: MÉMOIRES DE CHIRURGIE MILITAIRE, ET CAMPAGNES DE D. J. LARREY,
        claim_digest: sha256:86917fc9ac7264504118aaee34e820e31ba0f29b1d0a4c1d235d29c83a445536
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://archive.org/download/mmoiresdechiru03larr/mmoiresdechiru03larr_djvu.txt
        accessed: '2026-11-17'
        quote: TOME m. PARIS, Chez J. Smith
        claim_digest: sha256:86917fc9ac7264504118aaee34e820e31ba0f29b1d0a4c1d235d29c83a445536
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://archive.org/download/mmoiresdechiru03larr/mmoiresdechiru03larr_djvu.txt
        accessed: '2026-11-17'
        quote: Libraire, rue Gît-Ie-Cœur, n. ° 10. 18 12 .
        claim_digest: sha256:86917fc9ac7264504118aaee34e820e31ba0f29b1d0a4c1d235d29c83a445536
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: larrey_guard
    text: Larrey was first surgeon of the Guard of Napoleon (the Imperial Guard).
    claim_kind: historical_textual
    supports:
    - source_id: larrey_1812_t1
      locator:
        kind: page
        value: Tome I, title page
      support: direct
      note: >-
        The title page reads 'Premier Chirurgien de la Garde ... de S. M. I. et R.' (His Imperial
        and Royal Majesty). The OCR splits 'Chirurgien' and joins 'de S.'.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://archive.org/download/b33491501_0001/b33491501_0001_djvu.txt
        accessed: '2026-11-17'
        quote: Premier Chirur gien de la Garde et de l'Hôpital de la Garde deS. M. I. et R.
        claim_digest: sha256:cdddbf2b8adcacd24fbef2780ed8aa97c4293825c0581a5ee3531c209d741c0a
      review_status: partial
    - source_id: larrey_1812_t3
      locator:
        kind: section
        value: Tome III, Campagne de Pologne
      support: direct
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://archive.org/download/mmoiresdechiru03larr/mmoiresdechiru03larr_djvu.txt
        accessed: '2026-11-17'
        quote: Premier Chirurgien de la Garde
        claim_digest: sha256:cdddbf2b8adcacd24fbef2780ed8aa97c4293825c0581a5ee3531c209d741c0a
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://archive.org/download/mmoiresdechiru03larr/mmoiresdechiru03larr_djvu.txt
        accessed: '2026-11-17'
        quote: suivre la garde impériale et l'Empereur
        claim_digest: sha256:cdddbf2b8adcacd24fbef2780ed8aa97c4293825c0581a5ee3531c209d741c0a
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: triage_definition
    text: Triage is the allocation of medical resources when demand exceeds supply.
    claim_kind: empirical
    supports:
    - source_id: emanuel_2020
      locator:
        kind: paragraph
        value: p. 2049, opening paragraphs
      support: partial
      note: >-
        The paper describes rationing forced by demand outrunning supply. No opened source defines
        triage. Emergency department scales (ESI, MTS) are used to set the order of care in routine
        practice, not only when supply runs short.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://ora.ox.ac.uk/objects/uuid:b515b0c2-d408-4869-be7b-01e02b0da9b2/files/r4m90dv65v
        accessed: '2026-11-17'
        quote: Such demands will create the need to ration medical equipment and interventions.
        claim_digest: sha256:5295849368c778bde5703258a85da909fefbf7d529138ccdd2f744774f7f8e7b
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://ora.ox.ac.uk/objects/uuid:b515b0c2-d408-4869-be7b-01e02b0da9b2/files/r4m90dv65v
        accessed: '2026-11-17'
        quote: >-
          The rapidly growing imbalance between supply and demand for medical resources in many
          countries presents an inherently normative question
        claim_digest: sha256:5295849368c778bde5703258a85da909fefbf7d529138ccdd2f744774f7f8e7b
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: larrey_origin
    text: Triage originated in Napoleonic military medicine.
    claim_kind: historical_textual
    supports:
    - source_id: larrey_1812_t3
      locator:
        kind: page
        value: Tome III, Campagne de Pologne, account of the battle at Eylau, pp. 38-39
      support: partial
      note: >-
        The passage shows Larrey applying his own rule of priority on a Napoleonic battlefield
        and calling it his principles. He does not claim to have originated it, and no source
        on earlier practice was opened. 'Originated' is unverified.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://archive.org/download/mmoiresdechiru03larr/mmoiresdechiru03larr_djvu.txt
        accessed: '2026-11-17'
        quote: descendirent la colline qui devance le bassin d'Eylau
        claim_digest: sha256:74ac457815d038f11a8169c8e1cc8fe04a99e22d0e15004620f40a62dbfbf65d
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://archive.org/download/mmoiresdechiru03larr/mmoiresdechiru03larr_djvu.txt
        accessed: '2026-11-17'
        quote: fidèle à mes principes , j e commençai
        claim_digest: sha256:74ac457815d038f11a8169c8e1cc8fe04a99e22d0e15004620f40a62dbfbf65d
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: larrey_priority
    text: Larrey treated the most gravely wounded first, without regard to rank or distinction.
    claim_kind: historical_textual
    supports:
    - source_id: larrey_1812_t3
      locator:
        kind: page
        value: Tome III, Campagne de Pologne, account of the battle at Eylau, pp. 38-39
      support: direct
      note: >-
        OCR errors: 'é^^ard' is 'égard', the word after 'au' is garbled, and 'j e' is 'je'. Larrey
        says he first gave his care to the Imperial Guard and, within that, began with the most
        gravely wounded. This sentence replaces the earlier claim that Larrey sorted casualties
        into three groups (survive without treatment, might survive with it, die regardless).
        That claim was not found in keyword searches of Tomes I-III, and the principle Larrey
        states here is a different ordering.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://archive.org/download/mmoiresdechiru03larr/mmoiresdechiru03larr_djvu.txt
        accessed: '2026-11-17'
        quote: Je donnai d'abord mes soins aux gardes impér- riales
        claim_digest: sha256:e13b5eac053fe0bf7d71a631a6e39ef65f4f46a151ddfa2a83e26a735fbdb834
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://archive.org/download/mmoiresdechiru03larr/mmoiresdechiru03larr_djvu.txt
        accessed: '2026-11-17'
        quote: fidèle à mes principes , j e commençai
        claim_digest: sha256:e13b5eac053fe0bf7d71a631a6e39ef65f4f46a151ddfa2a83e26a735fbdb834
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://archive.org/download/mmoiresdechiru03larr/mmoiresdechiru03larr_djvu.txt
        accessed: '2026-11-17'
        quote: >-
          par ceux qui étaient le plus grièvement blessés , sans avoir é^^ard au rang" ni aux
          distinctions.
        claim_digest: sha256:e13b5eac053fe0bf7d71a631a6e39ef65f4f46a151ddfa2a83e26a735fbdb834
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: five_level_scales
    text: >-
      The Manchester Triage System and the Emergency Severity Index each sort patients into five
      levels of urgency.
    claim_kind: empirical
    supports:
    - source_id: ahrq_esi
      locator:
        kind: paragraph
        value: Opening paragraph
      support: direct
      note: ESI levels are set by acuity and expected resource needs, not by likelihood of survival.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://web.archive.org/web/20191228163924/https://www.ahrq.gov/professionals/systems/hospital/esi/index.html
        accessed: '2026-11-17'
        quote: >-
          The Emergency Severity Index (ESI) is a five-level emergency department (ED) triage
          algorithm that provides clinically relevant stratification of patients into five groups
          from 1 (most urgent) to 5 (least urgent) on the basis of acuity and resource needs.
        claim_digest: sha256:fa1bc64cb0ad9da60b732967470b406df0b6e851bf80a63ab51aca57c4a238aa
      review_status: partial
    - source_id: zachariasse_2017
      locator:
        kind: section
        value: Introduction
      support: direct
      note: A validation study describing the MTS, not the MTS manual itself.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://pmc.ncbi.nlm.nih.gov/articles/PMC5289484/
        accessed: '2026-11-17'
        quote: >-
          The MTS allocates patients to one out of five urgency categories, which determine the
          maximum time to first contact with a physician.
        claim_digest: sha256:fa1bc64cb0ad9da60b732967470b406df0b6e851bf80a63ab51aca57c4a238aa
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: scales_formalize_larrey
    text: The five-level scales formalize Larrey's sorting of casualties.
    claim_kind: historical_textual
    supports:
    - source_id: ahrq_esi
      locator: null
      support: unassessed
      note: >-
        Neither the AHRQ page nor the MTS study traces its scale to Larrey, and no history of
        either scale was opened. The two scales order patients by urgency, acuity and resource
        needs.
      reviews: []
      review_status: pending
    origin: source_summary
    reviews: []
    review_status: pending
  - id: ethics_max_benefit
    text: >-
      In pandemic rationing, maximizing benefits is the leading ethical value, within a framework
      of several values.
    claim_kind: normative
    supports:
    - source_id: emanuel_2020
      locator:
        kind: section
        value: Ethical Values for Rationing Health Resources in a Pandemic; Recommendation 1;
          Table 2
      support: direct
      note: >-
        This is the recommendation of one group of authors for pandemic guidelines, not a survey
        of triage ethics. The entry's earlier wording, 'The ethical foundation is utilitarian',
        is contradicted by the paper. The paper calls benefit maximization consistent with both
        utilitarian and nonutilitarian views, and it says no single value suffices.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://ora.ox.ac.uk/objects/uuid:b515b0c2-d408-4869-be7b-01e02b0da9b2/files/r4m90dv65v
        accessed: '2026-11-17'
        quote: Because maximizing benefits is paramount in a pandemic
        claim_digest: sha256:c34f329bd3056e62c52a1026271071e30d4db5f98eee451d2ea37b8acf328c1b
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://ora.ox.ac.uk/objects/uuid:b515b0c2-d408-4869-be7b-01e02b0da9b2/files/r4m90dv65v
        accessed: '2026-11-17'
        quote: >-
          No single value is sufficient alone to determine which patients should receive scarce
          resources.
        claim_digest: sha256:c34f329bd3056e62c52a1026271071e30d4db5f98eee451d2ea37b8acf328c1b
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://ora.ox.ac.uk/objects/uuid:b515b0c2-d408-4869-be7b-01e02b0da9b2/files/r4m90dv65v
        accessed: '2026-11-17'
        quote: Hence, fair allocation requires a multivalue ethical framework
        claim_digest: sha256:c34f329bd3056e62c52a1026271071e30d4db5f98eee451d2ea37b8acf328c1b
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://ora.ox.ac.uk/objects/uuid:b515b0c2-d408-4869-be7b-01e02b0da9b2/files/r4m90dv65v
        accessed: '2026-11-17'
        quote: >-
          It is consistent both with utilitarian ethical perspectives that emphasize population
          outcomes and with nonutilitarian views that emphasize the paramount value of each human
          life.
        claim_digest: sha256:c34f329bd3056e62c52a1026271071e30d4db5f98eee451d2ea37b8acf328c1b
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: emanuel_three_groups
    text: >-
      Emanuel et al. put benefit maximization into practice by giving priority to patients who
      could recover if treated over those unlikely to recover even if treated and those likely
      to recover without treatment.
    claim_kind: normative
    supports:
    - source_id: emanuel_2020
      locator:
        kind: section
        value: Recommendation 1, p. 2052
      support: direct
      note: >-
        This claim matches no sentence of the prose. It records where the three-way sorting is
        stated, which the Proportion mapping relies on.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://ora.ox.ac.uk/objects/uuid:b515b0c2-d408-4869-be7b-01e02b0da9b2/files/r4m90dv65v
        accessed: '2026-11-17'
        quote: >-
          Operationalizing the value of maximizing benefits means that people who are sick but
          could recover if treated are given priority over those who are unlikely to recover even
          if treated and those who are likely to recover without treatment.
        claim_digest: sha256:7724de12864fd38480b8d178f6e055422eb844c5d24872b725608d359b0c9531
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: emanuel_no_wealth
    text: >-
      Emanuel et al. report a consensus that a person's wealth should not decide who lives, and
      they warn against giving priority to the wealthy, the famous or the politically powerful.
    claim_kind: normative
    supports:
    - source_id: emanuel_2020
      locator:
        kind: section
        value: Ethical Values for Rationing Health Resources in a Pandemic; Recommendation 2
      support: direct
      note: >-
        This claim matches no sentence of the prose. It records the paper's position on the point
        the Alignment mapping relies on.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://ora.ox.ac.uk/objects/uuid:b515b0c2-d408-4869-be7b-01e02b0da9b2/files/r4m90dv65v
        accessed: '2026-11-17'
        quote: >-
          Consensus exists that an individual person’s wealth should not determine who lives or
          dies.
        claim_digest: sha256:45d186b90474aa24dada4dd00f982b8d7c0dbdea357f4a277712627f22883253
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://ora.ox.ac.uk/objects/uuid:b515b0c2-d408-4869-be7b-01e02b0da9b2/files/r4m90dv65v
        accessed: '2026-11-17'
        quote: >-
          Priority for critical workers must not be abused by prioritizing wealthy or famous persons
          or the politically powerful above first responders and medical staff
        claim_digest: sha256:45d186b90474aa24dada4dd00f982b8d7c0dbdea357f4a277712627f22883253
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: covid_ventilators
    text: >-
      During COVID-19, ventilator allocation protocols forced explicit decisions about who would
      receive life-sustaining treatment.
    claim_kind: historical_textual
    supports:
    - source_id: emanuel_2020
      locator:
        kind: paragraph
        value: >-
          pp. 2049-2054: opening, Health System Capacity, Recommendation 1, Implementing Rationing
          Policies
      support: partial
      note: >-
        The paper was first published on 23 March 2020 and looks ahead. It reports Italian physicians'
        proposals, expects ventilators to run short, defends withdrawing ventilators and calls
        for explicit guidelines. It does not report protocols in use or decisions they forced.
        No later source on what happened was opened.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://ora.ox.ac.uk/objects/uuid:b515b0c2-d408-4869-be7b-01e02b0da9b2/files/r4m90dv65v
        accessed: '2026-11-17'
        quote: This article was published on March 23, 2020, at NEJM.org.
        claim_digest: sha256:e2c8b948a255237f6b713e70b3b08259fdeb8cd10812b1002a5f12e21f4b8838
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://ora.ox.ac.uk/objects/uuid:b515b0c2-d408-4869-be7b-01e02b0da9b2/files/r4m90dv65v
        accessed: '2026-11-17'
        quote: >-
          Physicians in Italy have proposed directing crucial resources such as intensive care
          beds and ventilators to patients who can benefit most from treatment.
        claim_digest: sha256:e2c8b948a255237f6b713e70b3b08259fdeb8cd10812b1002a5f12e21f4b8838
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://ora.ox.ac.uk/objects/uuid:b515b0c2-d408-4869-be7b-01e02b0da9b2/files/r4m90dv65v
        accessed: '2026-11-17'
        quote: >-
          the Covid-19 pandemic is likely to cause a shortage of hospital beds, ICU beds, and
          ventilators
        claim_digest: sha256:e2c8b948a255237f6b713e70b3b08259fdeb8cd10812b1002a5f12e21f4b8838
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://ora.ox.ac.uk/objects/uuid:b515b0c2-d408-4869-be7b-01e02b0da9b2/files/r4m90dv65v
        accessed: '2026-11-17'
        quote: >-
          ensure that individual physicians are not faced with the terrible task of improvising
          decisions about whom to treat
        claim_digest: sha256:e2c8b948a255237f6b713e70b3b08259fdeb8cd10812b1002a5f12e21f4b8838
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: emanuel_citation
    text: >-
      Emanuel et al. published their article in the New England Journal of Medicine, volume 382,
      in 2020.
    claim_kind: historical_textual
    supports:
    - source_id: emanuel_2020_record
      locator:
        kind: other
        value: Citation line of the PubMed record
      support: direct
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=32202722&rettype=abstract&retmode=text
        accessed: '2026-11-17'
        quote: N Engl J Med. 2020 May 21;382(21):2049-2055.
        claim_digest: sha256:37872f467fa3ac6f5707a8c2590d6e9d7f489642420298ee2eef7ca8f8a3f221
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=32202722&rettype=abstract&retmode=text
        accessed: '2026-11-17'
        quote: Fair Allocation of Scarce Medical Resources in the Time of Covid-19. Emanuel EJ(1)
        claim_digest: sha256:37872f467fa3ac6f5707a8c2590d6e9d7f489642420298ee2eef7ca8f8a3f221
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: penn_affiliation
    text: The lead author of Emanuel et al. (2020) was at the University of Pennsylvania.
    claim_kind: historical_textual
    supports:
    - source_id: emanuel_2020_record
      locator:
        kind: other
        value: Author information
      support: direct
      note: >-
        Emanuel and three co-authors were at Pennsylvania. The others were at Denver, Toronto,
        Western University, São Paulo, Oxford and George Washington University.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=32202722&rettype=abstract&retmode=text
        accessed: '2026-11-17'
        quote: >-
          From the Department of Medical Ethics and Health Policy, Perelman School of Medicine,
          University of Pennsylvania, Philadelphia (E.J.E., A.G., C.Z., C.B.)
        claim_digest: sha256:915e8fce602bc89c432c5761304f2189c46e6e48bc6aaf8eabb6f35f68331495
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: mts_book_2006
    text: >-
      The book Emergency Triage, by the Manchester Triage Group with Kevin Mackway-Jones, Janet
      Marsden and Jill Windle, was published by Blackwell in 2006.
    claim_kind: historical_textual
    supports:
    - source_id: emergency_triage_2006_record
      locator:
        kind: other
        value: 'Item metadata: publication date, publisher, associated names'
      support: direct
      note: >-
        Catalogue record only; the book was not read. The record gives no edition and does not
        say whether 2006 was the first publication of the Manchester Triage System.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://archive.org/details/emergencytriage0000unse
        accessed: '2026-11-17'
        quote: Emergency triage Publication date 2006
        claim_digest: sha256:5eeb1b5f55bebf06aad88b41481086133d3c2c1923509d18ed2b2aa0791e1fda
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://archive.org/details/emergencytriage0000unse
        accessed: '2026-11-17'
        quote: 'Publisher Malden, Mass. ; Oxford : Blackwell Pub.'
        claim_digest: sha256:5eeb1b5f55bebf06aad88b41481086133d3c2c1923509d18ed2b2aa0791e1fda
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://archive.org/details/emergencytriage0000unse
        accessed: '2026-11-17'
        quote: >-
          Associated-names Mackway-Jones, Kevin; Marsden, Janet; Windle, Jill; Manchester Triage
          Group
        claim_digest: sha256:5eeb1b5f55bebf06aad88b41481086133d3c2c1923509d18ed2b2aa0791e1fda
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  mappings:
  - id: proportion_benefit
    statement: >-
      The entry reads triage under scarcity as proportion: a scarce resource goes where it can
      change the outcome, not where it cannot.
    claim_ids:
    - ethics_max_benefit
    - emanuel_three_groups
    - larrey_priority
    targets:
    - property:proportion
    mapping_kind: interpretive_synthesis
    argument: >-
      Emanuel et al. give priority to patients who could recover if treated over those unlikely
      to recover even if treated. The entry reads spending the resource on the latter as action
      that exceeds what the purpose requires.
    limits: >-
      The paper frames this as maximizing benefits, not as proportion. It is one group's recommendation
      for pandemic rationing, not a description of all triage. Larrey's stated principle, the
      most gravely wounded first, is a different ordering from the one this reading uses. Emergency
      department scales order patients by urgency, not by expected benefit. No cited source establishes
      that treating a patient unlikely to survive is disproportionate.
    review_status: pending
    reviews: []
  - id: humility_bounded
    statement: >-
      The entry reads triage as accepting that not everyone can be saved, with the physician's
      authority to treat bounded by the resources available.
    claim_ids:
    - triage_definition
    - covid_ventilators
    targets:
    - property:humility
    mapping_kind: interpretive_synthesis
    argument: >-
      Emanuel et al. treat limits on access to treatment as forced by scarcity. They want those
      limits set in guidelines rather than improvised by individual physicians. The entry reads
      this as authority exercised within a boundary the physician does not set.
    limits: >-
      The paper's concerns are fairness, consistency and the burden on clinicians. It does not
      speak of humility or of the legitimate scope of a physician's authority. Reading resource
      limits as limits of authority is this project's interpretation, and Larrey's text says nothing
      on the point.
    review_status: pending
    reviews: []
  - id: alignment_criterion
    statement: >-
      The entry reads an honest triage system as one whose actual allocation follows its stated
      criterion of medical need and survivability, not status or wealth.
    claim_ids:
    - larrey_priority
    - emanuel_no_wealth
    - ethics_max_benefit
    targets:
    - property:alignment
    mapping_kind: interpretive_synthesis
    argument: >-
      Larrey says he ordered treatment by the gravity of wounds without regard to rank. Emanuel
      et al. reject wealth as a criterion and warn that priority must not be abused for the wealthy,
      the famous or the powerful. The entry reads a gap between the stated criterion and actual
      allocation as a failure of alignment.
    limits: >-
      Larrey describes one battle and says he cared for the Guard first, ordering by severity
      within it. Emanuel et al. state a consensus among allocation proposals, not how allocation
      worked in practice. Neither source frames a gap between stated criterion and practice as
      misalignment; that reading is this project's.
    review_status: pending
    reviews: []
---

# Triage

**Source**: Dominique Jean Larrey, *Memoires de chirurgie militaire et campagnes*, 1812; Emanuel et al., *NEJM* 382, 2020
**Institution**: Napoleonic Imperial Guard; University of Pennsylvania

## Finding

Triage allocates medical resources when demand exceeds supply. Originated in Napoleonic military medicine: Larrey treated the most gravely wounded first, without regard to rank or distinction. Modern systems (Manchester Triage, Emergency Severity Index) formalize this into 5-level scales. In pandemic rationing, the leading ethical value is to maximize benefits from limited resources, within a framework of several values. During COVID-19, ventilator allocation protocols forced explicit decisions about who would receive life-sustaining treatment.

## Pattern Mapping

**Proportion** -- Triage is proportion under constraint. When resources are scarce, care is allocated based on need and likelihood of benefit. Treating a patient who will die regardless, at the cost of not treating one who could survive, is disproportionate -- action exceeds what the purpose requires.

**Humility** -- Triage requires accepting that not everyone can be saved. The physician's authority to treat is bounded by resources available. The allocation must reflect that boundary, not the physician's desire to help every individual.

**Alignment** -- An honest triage system aligns its stated criterion (medical need and survivability) with actual allocation. When status or wealth determine who receives care, stated criterion and actual allocation diverge.

## Connections

- [[Hippocratic Oath]] -- triage operationalizes the Oath's proportionality under scarcity
- [[Tragedy of the Commons]] -- resource allocation under scarcity; proportion as policy
- [[Palliative Care]] -- both: medicine recognizing its limits and acting within them
- [[Apoptosis]] -- both: structured removal that serves the larger system
- [[Lotka-Volterra Equations]] -- population-level proportion in resource-limited systems

## Status

Larrey (1812). Manchester Triage System: Mackway-Jones et al. (2006). COVID-19 triage: Emanuel et al., *NEJM* 382, 2020. The mapping to the five properties is this project's structural interpretation.

---

*The mapping to the five properties is this project's structural interpretation.*
