---
domain: medicine
properties: [honesty, non_fabrication, alignment]
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
    The text of Snow (1855) was read from the Wellcome Collection's per-page ALTO OCR of its digitised
    copy (b28985266), assembled page by page from the IIIF manifest; the plain-text exports at
    the Internet Archive and Wellcome skipped pp. 1-59 and were not used. OCR keeps line-break
    hyphens and some misreadings, and quotes reproduce them literally. Not reached: the full text
    of Hill (1965). The PMC PDF sits behind a proof-of-work check, Europe PMC, SAGE and SciELO
    returned 403, Project MUSE required verification, and the WHO Bulletin reprint (2005) held
    in WHO IRIS is an image-only facsimile with no text layer; so the nine-item list, its order,
    and whether Hill called the items criteria or rules are unchecked. Also not reached: Johnson,
    The Ghost Map (2006), and the Institution line (Hill's affiliation with the London School
    of Hygiene and Tropical Medicine). The contemporary reception of Snow's argument (whether
    miasma theory was overturned) was not checked against any source of the period.
  review_status: partial
  reviews: []
  sources:
  - id: snow_1855
    citation: >-
      Snow J. On the Mode of Communication of Cholera. Second edition, much enlarged. London:
      John Churchill, 1855. Wellcome Collection digitised copy b28985266.
    source_kind: scholarly_book
    origin: external
    url: https://wellcomecollection.org/works/uqa27qrt
    academic_review:
      status: not_documented
      note: This record does not document a peer-review process.
  - id: wellcome_record_snow
    citation: >-
      Wellcome Collection. Catalogue metadata for On the mode of communication of cholera / by
      John Snow (b28985266), IIIF manifest.
    source_kind: institutional_document
    origin: external
    url: https://iiif.wellcomecollection.org/presentation/v2/b28985266
    academic_review:
      status: not_applicable
      note: Library or repository catalogue record, not a journal article.
  - id: hill_1965
    citation: >-
      Hill AB. The environment and disease: association or causation? Proceedings of the Royal
      Society of Medicine 58(5):295-300, 1965. PubMed record PMID 14283879.
    source_kind: academic_article
    origin: external
    url: https://doi.org/10.1177/003591576505800503
    academic_review:
      status: not_documented
      note: This record does not document a peer-review process.
  - id: iris_hill_reprint
    citation: >-
      WHO IRIS. Repository record for the 2005 Bulletin of the World Health Organization reprint
      of Hill, The environment and disease: association or causation? (handle 10665/269509).
    source_kind: institutional_document
    origin: external
    url: https://iris.who.int/handle/10665/269509
    academic_review:
      status: not_applicable
      note: Library or repository catalogue record, not a journal article.
  - id: nobel_koch
    citation: Robert Koch - Biographical. NobelPrize.org (Nobel Prize in Physiology or Medicine
      1905).
    source_kind: institutional_document
    origin: external
    url: https://www.nobelprize.org/prizes/medicine/1905/koch/biographical/
    academic_review:
      status: not_applicable
      note: Institutional biography page, not a journal article.
  - id: johnson_2006
    citation: Johnson, The Ghost Map (2006), as named in the entry's Status section. Not opened.
    source_kind: other
    kind_note: >-
      Book named in the entry; no record of it was opened, so its author's full name, publisher
      and date are unchecked.
    origin: external
    academic_review:
      status: not_documented
      note: This record does not document a peer-review process.
  claims:
  - id: snow_book
    text: >-
      John Snow's On the Mode of Communication of Cholera was published in London in 1855 as a
      second, enlarged edition of a work first issued in 1849.
    claim_kind: historical_textual
    supports:
    - source_id: wellcome_record_snow
      locator:
        kind: other
        value: Catalogue metadata, Publication/creation field
      support: direct
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://iiif.wellcomecollection.org/presentation/v2/b28985266
        accessed: '2026-11-17'
        quote: 'London : John Churchill, 1855.'
        claim_digest: sha256:c367c21dd94e0d0b1852e3b5d3923b9308ef53af13250697a6831f844b0ef09f
      review_status: partial
    - source_id: snow_1855
      locator:
        kind: section
        value: Preface to the second edition
      support: direct
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://api.wellcomecollection.org/text/v1/b28985266
        accessed: '2026-11-17'
        quote: >-
          PREFACE TO THE SECOND EDITION. The first edition of this work, which was published in
          August 1849, was only a slender pamphlet.
        claim_digest: sha256:c367c21dd94e0d0b1852e3b5d3923b9308ef53af13250697a6831f844b0ef09f
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: hill_paper
    text: >-
      Austin Bradford Hill published The Environment and Disease: Association or Causation? in
      the Proceedings of the Royal Society of Medicine, volume 58, in 1965.
    claim_kind: historical_textual
    supports:
    - source_id: hill_1965
      locator:
        kind: other
        value: PubMed citation record
      support: direct
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=14283879&rettype=abstract&retmode=text
        accessed: '2026-11-17'
        quote: Proc R Soc Med. 1965 May;58(5):295-300.
        claim_digest: sha256:4efbc3e38e18e5f3f336de11fcea6f0627aa47a855cc3705106fe0e6ce38f11c
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=14283879&rettype=abstract&retmode=text
        accessed: '2026-11-17'
        quote: 'THE ENVIRONMENT AND DISEASE: ASSOCIATION OR CAUSATION? HILL AB.'
        claim_digest: sha256:4efbc3e38e18e5f3f336de11fcea6f0627aa47a855cc3705106fe0e6ce38f11c
      review_status: partial
    - source_id: iris_hill_reprint
      locator:
        kind: other
        value: Repository metadata, dc.contributor.author
      support: partial
      note: Record of the 2005 reprint; it supports only the author's full name.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://iris.who.int/server/api/core/items/d24d04be-0c23-4223-be97-37a4501cf76c
        accessed: '2026-11-17'
        quote: Hill, Austin Bradford
        claim_digest: sha256:4efbc3e38e18e5f3f336de11fcea6f0627aa47a855cc3705106fe0e6ce38f11c
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: snow_map
    text: >-
      Snow mapped the cholera deaths of the 1854 outbreak in the Broad Street area of Soho, London.
    claim_kind: historical_textual
    supports:
    - source_id: snow_1855
      locator:
        kind: page
        value: List of maps (front matter, Map 1) and p. 39
      support: partial
      note: >-
        The map and its date are stated. Snow names the area as Broad Street, Golden Square, and
        the sub-districts he searched were Golden Square, Berwick Street and St Ann's, Soho; he
        does not call the whole area Soho.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://api.wellcomecollection.org/text/v1/b28985266
        accessed: '2026-11-17'
        quote: >-
          Showing the deaths from cholera in Broad Street, Golden Square, and the neighbourhood,
          from 19th August to 30th Septem- ber 1854.
        claim_digest: sha256:0ae9d30be09ef9bb4b46d67e988c611f90acacbcec37cd78184032988e75b0fd
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://api.wellcomecollection.org/text/v1/b28985266
        accessed: '2026-11-17'
        quote: >-
          A black mark or bar for each death is placed in the situation of the house in which
          the fatal attack took place.
        claim_digest: sha256:0ae9d30be09ef9bb4b46d67e988c611f90acacbcec37cd78184032988e75b0fd
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://api.wellcomecollection.org/text/v1/b28985266
        accessed: '2026-11-17'
        quote: in the sub- districts of Golden Square, Berwick Street, and St. Ann’s, Soho
        claim_digest: sha256:0ae9d30be09ef9bb4b46d67e988c611f90acacbcec37cd78184032988e75b0fd
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: pump_identified
    text: Snow identified the water of the Broad Street pump as the source of the outbreak.
    claim_kind: historical_textual
    supports:
    - source_id: snow_1855
      locator:
        kind: page
        value: p. 40
      support: direct
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://api.wellcomecollection.org/text/v1/b28985266
        accessed: '2026-11-17'
        quote: >-
          there had been no particular outbreak or increase of cholera, in this part of London,
          except among the persons who were in the habit of drinking the water of the above-mentioned
          pump-well.
        claim_digest: sha256:10337d8eae53c59f4f51dd49dcfd633eefb0b133e4dd112f299af56f68e27f54
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: plotting_demonstrated
    text: >-
      By plotting the cases geographically, Snow demonstrated that cholera was transmitted through
      water.
    claim_kind: historical_textual
    supports:
    - source_id: snow_1855
      locator:
        kind: page
        value: p. 39
      support: partial
      note: >-
        Snow reports finding the deaths clustered near the pump, but his stated method was a list
        of registered deaths followed by house-by-house inquiry into who drank the pump water;
        the map, covering deaths to 30 September, presents the result in the book after the handle
        was removed on 8 September. That this demonstrated waterborne transmission is Snow's argument;
        the source does not establish that it was accepted as a demonstration.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://api.wellcomecollection.org/text/v1/b28985266
        accessed: '2026-11-17'
        quote: >-
          I made inquiry, in detail, respecting the eighty-three deaths registered as having taken
          place during the last three days of the week.
        claim_digest: sha256:f15fdba430e5186f4da2ee412c4ba24f7e69e250bfa2ce3b47ecbb3ff17ba866
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://api.wellcomecollection.org/text/v1/b28985266
        accessed: '2026-11-17'
        quote: >-
          On proceeding to the spot, I found that nearly all the deaths had taken place within
          a short distance of the pump.
        claim_digest: sha256:f15fdba430e5186f4da2ee412c4ba24f7e69e250bfa2ce3b47ecbb3ff17ba866
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: miasma_overturned
    text: Snow's work overturned the miasma (bad air) theory of cholera.
    claim_kind: historical_textual
    supports:
    - source_id: snow_1855
      locator:
        kind: page
        value: Contents, and p. 55 (close of the Golden Square section)
      support: partial
      note: >-
        The book shows that Snow argued against effluvia as the cause, including sewer effluvia
        in the Broad Street outbreak. It cannot show that the theory was overturned, and no source
        on how Snow's contemporaries received the argument was opened.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://api.wellcomecollection.org/text/v1/b28985266
        accessed: '2026-11-17'
        quote: Cholera not communicated by means of effluvia
        claim_digest: sha256:a13977f3ffad15ce27753d44629fa31ae7d7d951b886aa0b6e3cb54cb4a69720
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://api.wellcomecollection.org/text/v1/b28985266
        accessed: '2026-11-17'
        quote: >-
          With regard to effluvia from the sewers passing into the streets and houses, that is
          a fault common to most parts of London and other towns.
        claim_digest: sha256:a13977f3ffad15ce27753d44629fa31ae7d7d951b886aa0b6e3cb54cb4a69720
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://api.wellcomecollection.org/text/v1/b28985266
        accessed: '2026-11-17'
        quote: >-
          Saffron Hill and other locali- ties, which suffer much more from ill odours, have been
          very lightly visited by cholera.
        claim_digest: sha256:a13977f3ffad15ce27753d44629fa31ae7d7d951b886aa0b6e3cb54cb4a69720
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: koch_year
    text: Koch identified Vibrio cholerae in 1884.
    claim_kind: historical_textual
    supports:
    - source_id: nobel_koch
      locator:
        kind: paragraph
        value: Paragraph on the German Cholera Commission
      support: contradicts
      note: >-
        The biography supports that Koch discovered the cholera vibrio, but on the year it differs:
        it places the discovery on the mission to Egypt that began in 1883 and does not give 1884.
        No source giving 1884 was opened. The year was left unchanged in the prose.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://www.nobelprize.org/prizes/medicine/1905/koch/biographical/
        accessed: '2026-11-17'
        quote: >-
          he was sent, in 1883, to Egypt as Leader of the German Cholera Commission, to investigate
          an outbreak of cholera in that country. Here he discovered the vibrio that causes cholera
        claim_digest: sha256:f4954302e6c3e15cee6708bda801938243d5c334faeba47b679e89a8ad3766d7
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: snow_koch_interval
    text: >-
      Snow's 1854 investigation came about three decades before Koch identified the cholera vibrio.
    claim_kind: historical_textual
    supports:
    - source_id: snow_1855
      locator:
        kind: page
        value: List of maps (front matter, Map 1)
      support: partial
      note: Supplies the 1854 date of the outbreak; the interval needs the Koch date as well.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://api.wellcomecollection.org/text/v1/b28985266
        accessed: '2026-11-17'
        quote: >-
          Showing the deaths from cholera in Broad Street, Golden Square, and the neighbourhood,
          from 19th August to 30th Septem- ber 1854.
        claim_digest: sha256:e624a6eff482413eeddc790b3c540758198070b5698f9f4af81ade10dd62eb40
      review_status: partial
    - source_id: nobel_koch
      locator:
        kind: paragraph
        value: Paragraph on the German Cholera Commission
      support: partial
      note: >-
        Supplies the 1883 date of the mission on which Koch discovered the vibrio. Together with
        1854 this gives 29 years; with the entry's 1884 it gives 30. The entry's earlier wording,
        'a decade before', was wrong on either date.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://www.nobelprize.org/prizes/medicine/1905/koch/biographical/
        accessed: '2026-11-17'
        quote: he was sent, in 1883, to Egypt as Leader of the German Cholera Commission
        claim_digest: sha256:e624a6eff482413eeddc790b3c540758198070b5698f9f4af81ade10dd62eb40
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: snow_agent_unknown
    text: Snow did not know what agent in the water caused cholera.
    claim_kind: historical_textual
    supports:
    - source_id: snow_1855
      locator:
        kind: page
        value: p. 15 and p. 52
      support: partial
      note: >-
        Snow had not identified the agent, and microscopy of the pump water found nothing he could
        name. But he did hold a definite hypothesis: a self-reproducing morbid matter, probably
        cellular, too small to be seen. 'Did not know' is right only in the sense that he had
        not identified it.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://api.wellcomecollection.org/text/v1/b28985266
        accessed: '2026-11-17'
        quote: >-
          must necessarily have some sort of structure, most likely that of a cell. It is no objection
          to this view that the structure of the cholera poison cannot be recognised by the microscope
        claim_digest: sha256:c9fa1b8ed391a35aa49db87fde06cd783b6097e8ffdb3d383c404084a1a4e2d6
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://api.wellcomecollection.org/text/v1/b28985266
        accessed: '2026-11-17'
        quote: >-
          Dr. Hassall, who was good enough to examine some of this water with the microscope,
          informed me that these par- ticles had no organised structure
        claim_digest: sha256:c9fa1b8ed391a35aa49db87fde06cd783b6097e8ffdb3d383c404084a1a4e2d6
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: pump_handle
    text: Snow persuaded the local authorities to remove the handle of the Broad Street pump.
    claim_kind: historical_textual
    supports:
    - source_id: snow_1855
      locator:
        kind: page
        value: p. 40
      support: direct
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://api.wellcomecollection.org/text/v1/b28985266
        accessed: '2026-11-17'
        quote: I had an interview with the Board of Guardians of St. James’s parish
        claim_digest: sha256:070ae6b2278ce0233228213620b6fbd9bda30e8b268abde22c8b3742ec761344
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://api.wellcomecollection.org/text/v1/b28985266
        accessed: '2026-11-17'
        quote: In consequence of what I said, the handle of the pump was removed on the following
          day.
        claim_digest: sha256:070ae6b2278ce0233228213620b6fbd9bda30e8b268abde22c8b3742ec761344
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: outbreak_declining
    text: >-
      The outbreak was already declining before the pump handle was removed, and it went on to
      subside.
    claim_kind: historical_textual
    supports:
    - source_id: snow_1855
      locator:
        kind: page
        value: p. 51
      support: direct
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://api.wellcomecollection.org/text/v1/b28985266
        accessed: '2026-11-17'
        quote: >-
          A glance at the above table will show that the fresh attacks continued to become less
          numerous every day.
        claim_digest: sha256:eac94b68b00b428dc14bd167f5a17ffca325932171bfee5b296cacf40e1c5843
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://api.wellcomecollection.org/text/v1/b28985266
        accessed: '2026-11-17'
        quote: there were never more than four attacks on one day
        claim_digest: sha256:eac94b68b00b428dc14bd167f5a17ffca325932171bfee5b296cacf40e1c5843
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://api.wellcomecollection.org/text/v1/b28985266
        accessed: '2026-11-17'
        quote: >-
          the attacks had so far diminished before the use of the water was stopped, that it is
          impossible to decide whether the well
        claim_digest: sha256:eac94b68b00b428dc14bd167f5a17ffca325932171bfee5b296cacf40e1c5843
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: hill_nine
    text: >-
      In 1965 Hill set out nine criteria for judging causation: strength, consistency, specificity,
      temporality, biological gradient, plausibility, coherence, experiment and analogy.
    claim_kind: historical_textual
    supports:
    - source_id: hill_1965
      locator: null
      support: unassessed
      note: >-
        The PubMed record has no abstract, and no readable full text was reached (see coverage
        notes). The nine items, their order, and whether Hill presented them as criteria or rules
        are unchecked.
      reviews: []
      review_status: pending
    origin: source_summary
    reviews: []
    review_status: pending
  - id: hill_formalized
    text: Hill's list formalized the logic of causal inference that Snow's investigation used.
    claim_kind: historical_textual
    origin: project_proposal
    supports: []
    reviews: []
    review_status: pending
  - id: ghost_map
    text: Johnson's book The Ghost Map was published in 2006.
    claim_kind: historical_textual
    supports:
    - source_id: johnson_2006
      locator: null
      support: unassessed
      note: No record of the book was opened; author, title and year are as given in the entry.
      reviews: []
      review_status: pending
    origin: source_summary
    reviews: []
    review_status: pending
  mappings:
  - id: honesty_evidence
    statement: >-
      The entry reads Snow's investigation as honesty: he followed the evidence of who drank the
      pump water against the explanation then held by respected physicians.
    claim_ids:
    - pump_identified
    - plotting_demonstrated
    - miasma_overturned
    targets:
    - property:honesty
    mapping_kind: interpretive_synthesis
    argument: >-
      Snow reports his inquiry into the registered deaths, finds them near the pump and among
      those who drank its water, and argues against effluvia as the cause. The entry reads this
      as a claim made to match what was observed.
    limits: >-
      Snow's book records his own method and argument; it does not establish that his reasoning
      was free of bias, that miasma theory was the consensus he opposed, or how his contemporaries
      received the argument. Calling his conduct honesty is this project's reading.
    review_status: pending
    reviews: []
  - id: non_fabrication_cause
    statement: >-
      The entry reads miasma theory as a cause asserted where none was found, and Snow's account
      as replacing it with an observed pattern.
    claim_ids:
    - miasma_overturned
    - snow_agent_unknown
    targets:
    - property:non_fabrication
    mapping_kind: interpretive_synthesis
    argument: >-
      Snow reports that he did not attribute the outbreak to effluvia and that the agent in the
      water could not be seen; he named a hypothesis and the evidence for it without claiming
      to have found the agent.
    limits: >-
      No cited source calls miasma theory a fabrication, and the entry itself grants it was a
      sincere explanation. Snow also asserted a definite hypothesis (a self-reproducing, probably
      cellular agent) beyond what he observed. The sources do not establish that miasma theory
      was invented to fill silence; that framing is this project's.
    review_status: pending
    reviews: []
  - id: alignment_causal_tests
    statement: >-
      The entry reads Hill's list of considerations as tests of alignment between a causal claim
      and the evidence for it.
    claim_ids:
    - hill_nine
    - hill_formalized
    targets:
    - property:alignment
    mapping_kind: conceptual_analogy
    argument: >-
      Items such as temporality and biological gradient ask whether an asserted cause stands in
      the relation to the observed effect that the assertion requires; the entry treats that as
      alignment between claim and reality.
    limits: >-
      Hill's full text was not reached, so the list, its wording and whether Hill offered the
      items as criteria at all are unchecked. Nothing cited links Hill's list to Snow or to the
      project's property of alignment; the link is this project's interpretation.
    review_status: pending
    reviews: []
---

# Epidemiology

**Source**: John Snow, *On the Mode of Communication of Cholera*, 1855; Austin Bradford Hill, *Proceedings of the Royal Society of Medicine* 58, 1965
**Institution**: London; London School of Hygiene and Tropical Medicine

## Finding

John Snow mapped cholera deaths in Soho during the 1854 London epidemic, identifying the Broad Street pump as the source. By plotting cases geographically, he demonstrated waterborne transmission, overturning miasma (bad air) theory -- about three decades before Koch identified *Vibrio cholerae* (1884). Snow did not know what was in the water; the pattern of clustering revealed the cause. He persuaded authorities to remove the pump handle; the outbreak, already declining, subsided. Hill's criteria for causation (1965) formalized the logic: strength, consistency, specificity, temporality, biological gradient, plausibility, coherence, experiment, analogy.

## Pattern Mapping

**Honesty** -- Snow let the data speak against established authority. Miasma theory was held by respected physicians. The map did not argue; it showed. Snow's honesty was following evidence against consensus.

**Non-fabrication** -- Miasma theory fabricated a cause (bad air) that did not exist. Not cynically -- it was the best available explanation -- but it was still structure that did not correspond to reality. Snow replaced fabricated cause with observed pattern.

**Alignment** -- Hill's criteria are alignment conditions for causal claims. Temporality: cause must precede effect. Biological gradient: more exposure, more disease. Consistency: the relationship holds across populations. Each criterion tests alignment between claim and reality.

## Connections

- [[FORMAL-LANGUAGE/Graph Theory and Networks|Graph Theory]] -- Snow's map IS a graph; disease clusters reveal network structure
- [[Vaccination]] -- herd immunity thresholds are epidemiological calculations
- [[Diagnosis]] -- population patterns inform individual diagnostic priors
- Scientific Method -- Hill's criteria formalize causal inference in observational science
- [[Opioid Crisis]] -- epidemiological data revealed the crisis pattern before institutions acted

## Status

Snow (1855). Johnson, *The Ghost Map* (2006). Hill (1965). The mapping to the five properties is this project's structural interpretation.

---

*The mapping to the five properties is this project's structural interpretation.*
