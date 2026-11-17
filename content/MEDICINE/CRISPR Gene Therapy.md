---
domain: medicine
properties: [proportion, humility, alignment]
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
    Not reached: the full text of Cyranoski (Nature 566, 2019), which is behind a paywall, so
    the CCR5 target and the stated aim of HIV resistance are unchecked; the National Academies
    report Human Genome Editing (2017) named in the Status section; the Institution line. The
    claim about consent is checked only against a statement that lists ethical failures without
    naming consent.
  review_status: partial
  reviews: []
  sources:
  - id: jinek_2012
    citation: >-
      Jinek M, Chylinski K, Fonfara I, Hauer M, Doudna JA, Charpentier E. A programmable dual-RNA-guided
      DNA endonuclease in adaptive bacterial immunity. Science 337(6096):816-821, 2012.
    source_kind: academic_article
    origin: external
    url: https://doi.org/10.1126/science.1225829
    academic_review:
      status: not_documented
      note: This record does not document a peer-review process.
  - id: fda_release_2023
    citation: >-
      U.S. Food and Drug Administration. FDA Approves First Gene Therapies to Treat Patients with
      Sickle Cell Disease. News release, December 8, 2023.
    source_kind: institutional_document
    origin: external
    url: >-
      https://www.fda.gov/news-events/press-announcements/fda-approves-first-gene-therapies-treat-patients-sickle-cell-disease
    academic_review:
      status: not_applicable
      note: Regulatory or institutional document, not a journal article.
  - id: fda_letter_2024
    citation: >-
      U.S. Food and Drug Administration. BLA approval letter, STN BL 125785/0, exagamglogene autotemcel
      (Casgevy), January 16, 2024.
    source_kind: institutional_document
    origin: external
    url: https://www.fda.gov/media/175482/download?attachment
    academic_review:
      status: not_applicable
      note: Regulatory or institutional document, not a journal article.
  - id: summit_2018
    citation: >-
      Statement by the Organizing Committee of the Second International Summit on Human Genome
      Editing. National Academies, November 28, 2018.
    source_kind: institutional_document
    origin: external
    url: >-
      https://www.nationalacademies.org/news/statement-by-the-organizing-committee-of-the-second-international-summit-on-human-genome-editing
    academic_review:
      status: not_applicable
      note: Regulatory or institutional document, not a journal article.
  - id: nature_outcry_2018
    citation: >-
      Cyranoski D, Ledford H. Genome-edited baby claim provokes international outcry. Nature news,
      26 November 2018.
    source_kind: other
    kind_note: >-
      Journal news article, not a research paper. Only the opening is readable without a subscription.
    origin: external
    url: https://www.nature.com/articles/d41586-018-07545-0
    academic_review:
      status: not_documented
      note: This record does not document a peer-review process.
  - id: cyranoski_2019
    citation: >-
      Cyranoski D. The CRISPR-baby scandal: what's next for human gene-editing. Nature 566, 440-442,
      2019.
    source_kind: other
    kind_note: >-
      Journal news feature, not a research paper. Only the opening is readable without a subscription.
    origin: external
    url: https://www.nature.com/articles/d41586-019-00673-1
    academic_review:
      status: not_documented
      note: This record does not document a peer-review process.
  - id: nature_sentence_2020
    citation: >-
      Cyranoski D. What CRISPR-baby prison sentences mean for research. Nature 577, 154-155, 2020.
    source_kind: other
    kind_note: Journal news article, not a research paper.
    origin: external
    url: https://www.nature.com/articles/d41586-020-00001-y
    academic_review:
      status: not_documented
      note: This record does not document a peer-review process.
  - id: nobel_2020
    citation: The Nobel Prize in Chemistry 2020. NobelPrize.org.
    source_kind: institutional_document
    origin: external
    url: https://www.nobelprize.org/prizes/chemistry/2020/summary/
    academic_review:
      status: not_applicable
      note: Regulatory or institutional document, not a journal article.
  claims:
  - id: crispr_origin
    text: >-
      CRISPR-Cas systems give bacteria and archaea adaptive immunity, and the Cas9 system can
      be programmed with RNA to cut DNA at chosen sites.
    claim_kind: empirical
    supports:
    - source_id: jinek_2012
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
          https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=22745249&rettype=abstract&retmode=text
        accessed: '2026-11-17'
        quote: provide bacteria and archaea with adaptive immunity against viruses and plasmids
        claim_digest: sha256:9b0ad15202c26eef9d0e6be5bbbc79dc5a7d30dc382409d97487faf75b9dcd9a
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=22745249&rettype=abstract&retmode=text
        accessed: '2026-11-17'
        quote: highlights the potential to exploit the system for RNA-programmable genome editing
        claim_digest: sha256:9b0ad15202c26eef9d0e6be5bbbc79dc5a7d30dc382409d97487faf75b9dcd9a
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: fda_scd_approval
    text: >-
      The FDA approved Casgevy for sickle cell disease on December 8, 2023, as the first FDA-approved
      therapy using CRISPR/Cas9.
    claim_kind: empirical
    supports:
    - source_id: fda_release_2023
      locator:
        kind: paragraph
        value: Release date line and the paragraph describing Casgevy
      support: direct
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://www.fda.gov/news-events/press-announcements/fda-approves-first-gene-therapies-treat-patients-sickle-cell-disease
        accessed: '2026-11-17'
        quote: 'For Immediate Release: December 08, 2023'
        claim_digest: sha256:6c5e3be4d79a69352994bdf0794939f8cd5bbf80dbcbd70057337038697f4c67
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://www.fda.gov/news-events/press-announcements/fda-approves-first-gene-therapies-treat-patients-sickle-cell-disease
        accessed: '2026-11-17'
        quote: >-
          Casgevy is the first FDA-approved therapy utilizing CRISPR/Cas9, a type of genome editing
          technology.
        claim_digest: sha256:6c5e3be4d79a69352994bdf0794939f8cd5bbf80dbcbd70057337038697f4c67
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: fda_stem_cells
    text: >-
      Casgevy edits the patient's own blood stem cells, which then increase the production of
      fetal hemoglobin.
    claim_kind: empirical
    supports:
    - source_id: fda_release_2023
      locator:
        kind: paragraph
        value: Paragraph describing Casgevy
      support: direct
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://www.fda.gov/news-events/press-announcements/fda-approves-first-gene-therapies-treat-patients-sickle-cell-disease
        accessed: '2026-11-17'
        quote: >-
          Patients’ hematopoietic (blood) stem cells are modified by genome editing using CRISPR/Cas9
          technology.
        claim_digest: sha256:f921aadccad78206204cc064fba184f8b6f70879b5456f3ece7cb93e910f96b4
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://www.fda.gov/news-events/press-announcements/fda-approves-first-gene-therapies-treat-patients-sickle-cell-disease
        accessed: '2026-11-17'
        quote: >-
          increase the production of fetal hemoglobin (HbF), a type of hemoglobin that facilitates
          oxygen delivery
        claim_digest: sha256:f921aadccad78206204cc064fba184f8b6f70879b5456f3ece7cb93e910f96b4
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: fda_tdt_approval
    text: The FDA approved Casgevy for transfusion-dependent beta-thalassemia on January 16, 2024.
    claim_kind: empirical
    supports:
    - source_id: fda_letter_2024
      locator:
        kind: page
        value: p. 1
      support: direct
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://www.fda.gov/media/175482/download?attachment
        accessed: '2026-11-17'
        quote: BLA APPROVAL January 16, 2024
        claim_digest: sha256:589a27c9b3717269ebc8ab21104633791af1348f3136682d3508cf6beab23080
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://www.fda.gov/media/175482/download?attachment
        accessed: '2026-11-17'
        quote: >-
          Exagamglogene autotemcel is indicated for the treatment of patients aged 12 years and
          older with transfusion-dependent ß-thalassemia (TDT).
        claim_digest: sha256:589a27c9b3717269ebc8ab21104633791af1348f3136682d3508cf6beab23080
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: he_announcement
    text: In November 2018 He Jiankui announced the birth of twin girls with edited genomes.
    claim_kind: historical_textual
    supports:
    - source_id: cyranoski_2019
      locator:
        kind: paragraph
        value: Opening summary
      support: direct
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://www.nature.com/articles/d41586-019-00673-1
        accessed: '2026-11-17'
        quote: >-
          In the three months since He Jiankui announced the birth of twin girls with edited genomes
        claim_digest: sha256:99b5d99ccfb1a6a7f9cbe1b99c5a1be90e833683a0bd5120ed6f951cb3f50be3
      review_status: partial
    - source_id: nature_outcry_2018
      locator:
        kind: paragraph
        value: Opening summary, dated 26 November 2018
      support: direct
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://www.nature.com/articles/d41586-018-07545-0
        accessed: '2026-11-17'
        quote: >-
          A Chinese scientist claims to have helped make the world’s first genome-edited babies
          — twin girls, who were born this month.
        claim_digest: sha256:99b5d99ccfb1a6a7f9cbe1b99c5a1be90e833683a0bd5120ed6f951cb3f50be3
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: he_ccr5_target
    text: He Jiankui edited the CCR5 gene with the stated aim of HIV resistance.
    claim_kind: empirical
    supports:
    - source_id: cyranoski_2019
      locator: null
      support: unassessed
      note: >-
        The readable opening of the article does not mention CCR5 or HIV; the rest is behind a
        paywall and was not reached.
      reviews: []
      review_status: pending
    origin: source_summary
    reviews: []
    review_status: pending
  - id: he_ethical_failures
    text: The editing was done without adequate safety data, institutional oversight, or consent.
    claim_kind: historical_textual
    supports:
    - source_id: summit_2018
      locator:
        kind: section
        value: Report of Clinical Use of Germline Editing
      support: partial
      note: >-
        The statement lists an inadequate medical indication, a poor protocol, failed ethical
        standards and a lack of transparency. It does not name consent or safety data specifically.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://www.nationalacademies.org/news/statement-by-the-organizing-committee-of-the-second-international-summit-on-human-genome-editing
        accessed: '2026-11-17'
        quote: >-
          Its flaws include an inadequate medical indication, a poorly designed study protocol,
          a failure to meet ethical standards for protecting the welfare of research subjects,
          and a lack of transparency in the development, review, and conduct of the clinical procedures.
        claim_digest: sha256:405e7917f710e84ed66c304d30fbf9d8649b62560bd85f5b3aecddee1f3850ef
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: condemnation
    text: The scientific response was near-universal condemnation.
    claim_kind: historical_textual
    supports:
    - source_id: summit_2018
      locator:
        kind: section
        value: Report of Clinical Use of Germline Editing
      support: partial
      note: >-
        This is one committee's statement. It supports condemnation by that body, not the extent
        'near-universal'.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://www.nationalacademies.org/news/statement-by-the-organizing-committee-of-the-second-international-summit-on-human-genome-editing
        accessed: '2026-11-17'
        quote: the procedure was irresponsible and failed to conform with international norms
        claim_digest: sha256:2fc79c186ff2bffbfb624c7e8152a59620c4a14806511538b6e388b0048eeed0
      review_status: partial
    - source_id: nature_outcry_2018
      locator:
        kind: paragraph
        value: Opening summary
      support: partial
      note: A news report of the reaction. It describes it as worldwide, not as near-universal.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://www.nature.com/articles/d41586-018-07545-0
        accessed: '2026-11-17'
        quote: The announcement has provoked shock and outrage among scientists around the world.
        claim_digest: sha256:2fc79c186ff2bffbfb624c7e8152a59620c4a14806511538b6e388b0048eeed0
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: he_sentence
    text: >-
      A Chinese court sentenced He Jiankui to three years in prison for illegal medical practice.
    claim_kind: historical_textual
    supports:
    - source_id: nature_sentence_2020
      locator:
        kind: paragraph
        value: First paragraph
      support: direct
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://www.nature.com/articles/d41586-020-00001-y
        accessed: '2026-11-17'
        quote: >-
          A Chinese court has sentenced He Jiankui, the biophysicist who announced that he had
          created the world’s first gene-edited babies, to three years in prison for “illegal
          medical practice”
        claim_digest: sha256:101dc700c8f8009ea6423a684e46e18afe84ffa170be2e81e313f840367b8e74
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: germline_heritable
    text: >-
      Germline editing is heritable, and the summit's organizing committee held that clinical
      use of it remained irresponsible.
    claim_kind: historical_textual
    supports:
    - source_id: summit_2018
      locator:
        kind: section
        value: Opening and the section on clinical use
      support: direct
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://www.nationalacademies.org/news/statement-by-the-organizing-committee-of-the-second-international-summit-on-human-genome-editing
        accessed: '2026-11-17'
        quote: >-
          it would be irresponsible to proceed with any clinical use of heritable "germline" editing
          at that time
        claim_digest: sha256:d109f01a61523604c16519516b503792a95cc30b090a11e534b913eae174dc02
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://www.nationalacademies.org/news/statement-by-the-organizing-committee-of-the-second-international-summit-on-human-genome-editing
        accessed: '2026-11-17'
        quote: >-
          we continue to believe that proceeding with any clinical use of germline editing remains
          irresponsible at this time
        claim_digest: sha256:d109f01a61523604c16519516b503792a95cc30b090a11e534b913eae174dc02
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: nobel_2020
    text: >-
      Emmanuelle Charpentier and Jennifer Doudna received the 2020 Nobel Prize in Chemistry for
      a method of genome editing.
    claim_kind: historical_textual
    supports:
    - source_id: nobel_2020
      locator:
        kind: section
        value: Summary
      support: direct
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://www.nobelprize.org/prizes/chemistry/2020/summary/
        accessed: '2026-11-17'
        quote: >-
          The Nobel Prize in Chemistry 2020 was awarded jointly to Emmanuelle Charpentier and
          Jennifer A. Doudna "for the development of a method for genome editing"
        claim_digest: sha256:0d74af30be35f898e44e362208a65fcccc9bb48fece025227b2cd303f40f7990
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  mappings:
  - id: proportion_scope
    statement: >-
      Somatic editing acts on one patient, while germline editing acts on people who do not yet
      exist; the entry reads that difference in scope as a question of proportion.
    claim_ids:
    - fda_stem_cells
    - germline_heritable
    targets:
    - property:proportion
    mapping_kind: interpretive_synthesis
    argument: >-
      The approved therapy modifies one patient's cells, and the committee's objection is aimed
      at heritable use. The entry treats the reach of the action beyond the patient as what makes
      it disproportionate.
    limits: >-
      No cited source frames the difference as proportion. The statement that germline editing
      exceeds any person's or generation's authority to decide is this project's ethical position,
      and it is contested in bioethics.
    review_status: pending
    reviews: []
  - id: humility_authority
    statement: >-
      The entry reads He Jiankui's unilateral action as authority exercised beyond its legitimate
      scope.
    claim_ids:
    - he_ethical_failures
    - condemnation
    targets:
    - property:humility
    mapping_kind: interpretive_synthesis
    argument: >-
      The committee faulted the indication, the protocol, the ethical standards and the transparency
      of the procedure, which the entry reads as acting without the oversight the act required.
    limits: >-
      The entry says the condemnation was about the scope of authority claimed and not about the
      technology. The cited statement does not put it that way; that framing is this project's.
    review_status: pending
    reviews: []
  - id: alignment_consent
    statement: >-
      The entry reads somatic editing as aligned (the patient treated is the patient who benefits)
      and germline editing as misaligned, because those affected cannot consent.
    claim_ids:
    - fda_scd_approval
    - germline_heritable
    targets:
    - property:alignment
    mapping_kind: interpretive_synthesis
    argument: >-
      The purpose of an approved somatic therapy and its action fall on the same person. With
      heritable editing the action falls on people who had no part in the decision.
    limits: >-
      That future persons cannot consent is an argument from bioethics, not something the cited
      sources establish. The sources support the facts about approval and condemnation only.
    review_status: pending
    reviews: []
---

# CRISPR Gene Therapy

**Source**: Jinek, Chylinski, Fonfara, Hauer, Doudna & Charpentier, *Science* 337, 2012 (Doudna and Charpentier: Nobel Prize in Chemistry 2020); Cyranoski, *Nature* 566, 2019 (He Jiankui)
**Institution**: UC Berkeley; University of Vienna; Southern University of Science and Technology, Shenzhen

## Finding

CRISPR-Cas9, adapted from bacterial immune defense, enables programmable gene editing. The FDA approved Casgevy for sickle cell disease in December 2023 and for transfusion-dependent beta-thalassemia in January 2024 -- the first FDA-approved therapy using CRISPR/Cas9, editing patients' hematopoietic stem cells to increase the production of fetal hemoglobin. The technology also applies to germline cells, altering future generations' DNA. In 2018, He Jiankui created the first gene-edited babies, editing CCR5 for HIV resistance without adequate safety data, institutional oversight, or the children's consent. Near-universal scientific condemnation followed. He was sentenced to three years in prison.

## Pattern Mapping

**Proportion** -- The ultimate proportion question. Somatic editing (one patient's cells) is proportional: action serves purpose without exceeding it. Germline editing extends beyond the patient, beyond the physician, beyond the current generation. The scope of action exceeds any single person's or generation's authority to decide.

**Humility** -- He Jiankui acted unilaterally, without adequate data, without oversight, without consent of those whose genomes he altered. The scientific condemnation was not about the technology but about the scope of authority claimed.

**Alignment** -- Somatic editing: purpose (cure this patient) and action (edit this patient's cells) are aligned. Germline editing: purpose (eliminate disease) and action (alter future humans without consent) are misaligned -- the beneficiary cannot consent.

## Connections

- [[DNA Error Correction]] -- CRISPR edits the code that error correction protects
- [[Apoptosis]] -- both: mechanisms that maintain genetic integrity, now subject to intervention
- [[Informed Consent]] -- germline editing is the ultimate informed consent violation
- [[CRISPR]] (LIFE domain) -- the bacterial origin: immune memory that became therapeutic tool
- [[SHADOW/The Atomic Bomb|Atomic Bomb]] -- both: scientific capability that raises the ultimate proportion question

## Status

Jinek et al. (2012); Doudna and Charpentier received the Nobel Prize in Chemistry in 2020. Casgevy: FDA December 2023 (sickle cell disease) and January 2024 (beta-thalassemia). He Jiankui: Cyranoski (2019); sentenced 2019. National Academies, *Human Genome Editing* (2017). Ethical status of germline editing is genuinely contested (MYSTERY_EXPLORATION). The mapping to the five properties is this project's structural interpretation.

---

*The mapping to the five properties is this project's structural interpretation.*
