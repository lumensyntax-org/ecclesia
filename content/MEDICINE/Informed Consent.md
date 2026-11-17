---
domain: medicine
properties: [honesty, humility, alignment]
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
    Not reached: the text of Faden & Beauchamp (1986). Only a library catalogue record was read,
    so nothing in the entry is checked against the book. The HHS page for the Belmont Report returned
    HTTP 403, so the report was read from an archived 2019 copy of that official page (Wayback
    Machine). The NIH page reprinting the Nuremberg Code also returned HTTP 403. The Code was
    instead read in the Library of Congress scan of the official volume, whose OCR text has no
    printed page numbers. The printed pages 181-182 given below are inferred from the table of
    contents: Judgment p. 171 = PDF p. 176, an offset of 5 that also holds for the headings at
    pp. 172, 173 and 180. Schloendorff was read in the Caselaw Access Project's OCR digitization,
    not from page images. Cardozo's title in 1914 ('Justice') was not checked; the opinion gives
    only 'Cardozo, J.'. The entry cites no source for its definition of informed consent. For
    that sentence this migration added AMA Code of Medical Ethics Opinion 2.1.1, one national
    association's ethics code, and did not record the opinion's adoption or revision date. Pattern
    Mapping and Connections were not checked.
  review_status: partial
  reviews: []
  sources:
  - id: schloendorff_1914
    citation: >-
      Schloendorff v. Society of the New York Hospital, 211 N.Y. 125 (1914). Opinion by Cardozo,
      J. Text of the official New York Reports as digitized by the Caselaw Access Project (Harvard
      Law School Library).
    source_kind: other
    kind_note: >-
      Court opinion in the official state reporter, read as the Caselaw Access Project's OCR digitization;
      page breaks are marked in the text (*126 to *131).
    origin: external
    url: https://static.case.law/ny/211/html/0125-01.html
    academic_review:
      status: not_applicable
      note: Court opinion and its digitized record, not a journal article.
  - id: cap_schloendorff_record
    citation: >-
      Caselaw Access Project. Case record for Schloendorff v. Society of the New York Hospital,
      211 N.Y. 125 (JSON metadata and text).
    source_kind: dataset
    origin: external
    url: https://static.case.law/ny/211/cases/0125-01.json
    academic_review:
      status: not_applicable
      note: Court opinion and its digitized record, not a journal article.
  - id: twc_vol2
    citation: >-
      Trials of War Criminals before the Nuernberg Military Tribunals under Control Council Law
      No. 10, Volume II (The Medical Case, continued). Washington, D.C.: U.S. Government Printing
      Office. Library of Congress digitized copy.
    source_kind: institutional_document
    origin: external
    url: >-
      https://tile.loc.gov/storage-services/service/ll/llmlp/2011525364_NT_war-criminals_Vol-II/2011525364_NT_war-criminals_Vol-II.pdf
    academic_review:
      status: not_applicable
      note: Official government record of a military tribunal, not a journal article.
  - id: belmont_1979
    citation: >-
      National Commission for the Protection of Human Subjects of Biomedical and Behavioral Research.
      The Belmont Report: Ethical Principles and Guidelines for the Protection of Human Subjects
      of Research. April 18, 1979. As published by the HHS Office for Human Research Protections.
    source_kind: institutional_document
    origin: external
    url: >-
      https://www.hhs.gov/ohrp/regulations-and-policy/belmont-report/read-the-belmont-report/index.html
    academic_review:
      status: not_applicable
      note: Report of a federal commission published by the U.S. government, not a journal article.
  - id: ama_211
    citation: American Medical Association. Code of Medical Ethics, Opinion 2.1.1, Informed Consent.
    source_kind: institutional_document
    origin: external
    url: https://code-medical-ethics.ama-assn.org/ethics-opinions/informed-consent
    academic_review:
      status: not_applicable
      note: Ethics code of a professional association, not a journal article.
  - id: faden_record
    citation: >-
      Wellcome Collection catalogue record for Faden RR, Beauchamp TL, in collaboration with King
      NMP. A History and Theory of Informed Consent. New York: Oxford University Press, 1986.
    source_kind: other
    kind_note: Library catalogue record. Only the bibliographic record was read, not the book.
    origin: external
    url: https://wellcomecollection.org/works/drqvqhwp
    academic_review:
      status: not_applicable
      note: Library catalogue record, not a scholarly text.
  claims:
  - id: schloendorff_case
    text: >-
      Schloendorff v. Society of the New York Hospital, reported at 211 N.Y. 125, was decided
      by the New York Court of Appeals on April 14, 1914.
    claim_kind: historical_textual
    supports:
    - source_id: cap_schloendorff_record
      locator:
        kind: other
        value: Case metadata fields decision_date, citations and court
      support: direct
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://static.case.law/ny/211/cases/0125-01.json
        accessed: '2026-11-17'
        quote: '"decision_date": "1914-04-14"'
        claim_digest: sha256:6b218e1b46876c1d7e3b8775cca41a17ed4192994974e6cb69cf82a1b29298b2
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://static.case.law/ny/211/cases/0125-01.json
        accessed: '2026-11-17'
        quote: '"cite": "211 N.Y. 125"'
        claim_digest: sha256:6b218e1b46876c1d7e3b8775cca41a17ed4192994974e6cb69cf82a1b29298b2
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://static.case.law/ny/211/cases/0125-01.json
        accessed: '2026-11-17'
        quote: '"name": "New York Court of Appeals"'
        claim_digest: sha256:6b218e1b46876c1d7e3b8775cca41a17ed4192994974e6cb69cf82a1b29298b2
      review_status: partial
    - source_id: schloendorff_1914
      locator:
        kind: page
        value: Head matter, 211 N.Y. at 126
      support: direct
      note: Gives the dates only; the court and citation come from the case record.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://static.case.law/ny/211/html/0125-01.html
        accessed: '2026-11-17'
        quote: Argued March 11, 1914; decided April 14, 1914.
        claim_digest: sha256:6b218e1b46876c1d7e3b8775cca41a17ed4192994974e6cb69cf82a1b29298b2
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: cardozo_quote
    text: >-
      In the opinion written by Cardozo, the court stated that every person of adult years and
      sound mind has a right to determine what shall be done with his own body, and that a surgeon
      who operates without the patient's consent commits an assault.
    claim_kind: historical_textual
    supports:
    - source_id: schloendorff_1914
      locator:
        kind: page
        value: >-
          211 N.Y. at 127 (opinion heading), 129 (the quoted sentence, between the *129 and *130
          markers) and 130 (the assault clause)
      support: direct
      note: >-
        The sentence the entry quotes matches the opinion word for word. The statement concerns
        an operation done without consent, which the court calls trespass; it says nothing about
        disclosing risks or alternatives. The case was decided for the hospital ('Judgment affirmed.').
        The title 'Justice' is not checked; the opinion gives 'Cardozo, J.'.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://static.case.law/ny/211/html/0125-01.html
        accessed: '2026-11-17'
        quote: Cardozo, J. In the year 1771
        claim_digest: sha256:606ad390f8fe6dc64dcce5a5c61d2f1b4684ec0acd85347b192ea6f26fa612d3
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://static.case.law/ny/211/html/0125-01.html
        accessed: '2026-11-17'
        quote: >-
          Every human being of adult years and sound mind has a right to determine what shall
          be done with his own body
        claim_digest: sha256:606ad390f8fe6dc64dcce5a5c61d2f1b4684ec0acd85347b192ea6f26fa612d3
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://static.case.law/ny/211/html/0125-01.html
        accessed: '2026-11-17'
        quote: commits an assault, for which he is liable in damages
        claim_digest: sha256:606ad390f8fe6dc64dcce5a5c61d2f1b4684ec0acd85347b192ea6f26fa612d3
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: consent_elements
    text: >-
      Informed consent involves telling the person the nature and purpose of a proposed intervention,
      its risks and benefits and the alternatives, and obtaining the person's voluntary agreement
      before it proceeds.
    claim_kind: normative
    supports:
    - source_id: ama_211
      locator:
        kind: section
        value: Opinion 2.1.1, opening paragraphs and the list of physician duties
      support: partial
      note: >-
        Covers treatment, but it is one national association's ethics code, added by this migration
        (the entry cites no source for this sentence). It says 'all options, including forgoing
        treatment' rather than 'alternatives', does not say the information must be 'adequate',
        and its statement that consent is fundamental in law is not itself a legal source.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://code-medical-ethics.ama-assn.org/ethics-opinions/informed-consent
        accessed: '2026-11-17'
        quote: Informed consent to medical treatment is fundamental in both ethics and law.
        claim_digest: sha256:e05b1aa9d2d829dfef6b0940327f98cec51e3244b78ce8475f9cd56b1d580414
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://code-medical-ethics.ama-assn.org/ethics-opinions/informed-consent
        accessed: '2026-11-17'
        quote: >-
          The process of informed consent occurs when communication between a patient and physician
          results in the patient’s authorization or agreement to undergo a specific medical intervention.
        claim_digest: sha256:e05b1aa9d2d829dfef6b0940327f98cec51e3244b78ce8475f9cd56b1d580414
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://code-medical-ethics.ama-assn.org/ethics-opinions/informed-consent
        accessed: '2026-11-17'
        quote: >-
          the nature and purpose of recommended interventions; the burdens, risks, and expected
          benefits of all options, including forgoing treatment
        claim_digest: sha256:e05b1aa9d2d829dfef6b0940327f98cec51e3244b78ce8475f9cd56b1d580414
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://code-medical-ethics.ama-assn.org/ethics-opinions/informed-consent
        accessed: '2026-11-17'
        quote: make an independent, voluntary decision
        claim_digest: sha256:e05b1aa9d2d829dfef6b0940327f98cec51e3244b78ce8475f9cd56b1d580414
      review_status: partial
    - source_id: belmont_1979
      locator:
        kind: section
        value: Part C, 1. Informed Consent (Information; Voluntariness)
      support: partial
      note: >-
        Lists the same elements, including voluntariness, but for consent to research, not to
        treatment. The report itself separates research from the practice of therapy.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://web.archive.org/web/20191210055114id_/https://www.hhs.gov/ohrp/regulations-and-policy/belmont-report/read-the-belmont-report/index.html
        accessed: '2026-11-17'
        quote: >-
          the consent process can be analyzed as containing three elements: information, comprehension
          and voluntariness
        claim_digest: sha256:e05b1aa9d2d829dfef6b0940327f98cec51e3244b78ce8475f9cd56b1d580414
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://web.archive.org/web/20191210055114id_/https://www.hhs.gov/ohrp/regulations-and-policy/belmont-report/read-the-belmont-report/index.html
        accessed: '2026-11-17'
        quote: >-
          the research procedure, their purposes, risks and anticipated benefits, alternative
          procedures (where therapy is involved)
        claim_digest: sha256:e05b1aa9d2d829dfef6b0940327f98cec51e3244b78ce8475f9cd56b1d580414
      review_status: partial
    - source_id: schloendorff_1914
      locator:
        kind: page
        value: 211 N.Y. at 129-130
      support: partial
      note: >-
        Supports only that the patient's consent is legally required before an operation. It says
        nothing about what information must be disclosed.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://static.case.law/ny/211/html/0125-01.html
        accessed: '2026-11-17'
        quote: who performs an operation without his patient’s consent
        claim_digest: sha256:e05b1aa9d2d829dfef6b0940327f98cec51e3244b78ce8475f9cd56b1d580414
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: nuremberg_tribunal
    text: >-
      The Nuremberg Code is part of the judgment of United States Military Tribunal I, established
      by the U.S. Military Government for Germany, in the case of the United States against Karl
      Brandt et al., in which sentences were imposed on 20 August 1947; this tribunal is distinct
      from the International Military Tribunal.
    claim_kind: historical_textual
    supports:
    - source_id: twc_vol2
      locator:
        kind: section
        value: >-
          XII. Judgment, opening (PDF p. 176, printed p. 171); XIII. Petitions, the Military Governor's
          order on the sentence of Karl Brandt; the confirmation for Poppendick
      support: direct
      note: >-
        The judgment in this volume carries no date of its own. The date comes from the Military
        Governor's order confirming the sentence. The record treats the International Military
        Tribunal as a separate court whose earlier judgment declared organizations criminal.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://tile.loc.gov/storage-services/service/ll/llmlp/2011525364_NT_war-criminals_Vol-II/2011525364_NT_war-criminals_Vol-II.pdf
        accessed: '2026-11-17'
        quote: >-
          Military Tribunal I was established on 25 October 1946 under General Orders No. 68 issued
          by command of the United States Military Government for Germany.
        claim_digest: sha256:fe7cdaa1143cf117f9dd6d93e134170e12a1637760aa50f7ee3b92a02788233d
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://tile.loc.gov/storage-services/service/ll/llmlp/2011525364_NT_war-criminals_Vol-II/2011525364_NT_war-criminals_Vol-II.pdf
        accessed: '2026-11-17'
        quote: >-
          In the case of the United States of America against Karl Brandt et alii, tried by United
          States Military Tribunal I, Case No. 1, Nuernberg, Germany, the defendant, Karl Brandt,
          on 20 August 1947, was sentenced by the Tribunal to death by hanging.
        claim_digest: sha256:fe7cdaa1143cf117f9dd6d93e134170e12a1637760aa50f7ee3b92a02788233d
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://tile.loc.gov/storage-services/service/ll/llmlp/2011525364_NT_war-criminals_Vol-II/2011525364_NT_war-criminals_Vol-II.pdf
        accessed: '2026-11-17'
        quote: >-
          of membership in an organization declared criminal by the International Military Tribunal
        claim_digest: sha256:fe7cdaa1143cf117f9dd6d93e134170e12a1637760aa50f7ee3b92a02788233d
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: nuremberg_context
    text: >-
      The tribunal that set out the Code was trying doctors and others for criminal medical experiments
      carried out on a large scale in Nazi Germany and the occupied countries.
    claim_kind: historical_textual
    supports:
    - source_id: twc_vol2
      locator:
        kind: section
        value: >-
          XII. Judgment, 'The Proof as to War Crimes and Crimes Against Humanity' (PDF p. 186,
          printed p. 181 inferred)
      support: direct
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://tile.loc.gov/storage-services/service/ll/llmlp/2011525364_NT_war-criminals_Vol-II/2011525364_NT_war-criminals_Vol-II.pdf
        accessed: '2026-11-17'
        quote: criminal medical experiments on non-German nationals
        claim_digest: sha256:90673dbd87d81ba087d97ceb1b030d5d9d84a3e8b42d3a53b90ebc8ff44bed18
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://tile.loc.gov/storage-services/service/ll/llmlp/2011525364_NT_war-criminals_Vol-II/2011525364_NT_war-criminals_Vol-II.pdf
        accessed: '2026-11-17'
        quote: were carried out on a large scale in Germany and the occupied countries
        claim_digest: sha256:90673dbd87d81ba087d97ceb1b030d5d9d84a3e8b42d3a53b90ebc8ff44bed18
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://tile.loc.gov/storage-services/service/ll/llmlp/2011525364_NT_war-criminals_Vol-II/2011525364_NT_war-criminals_Vol-II.pdf
        accessed: '2026-11-17'
        quote: >-
          These experiments were not the isolated and casual acts of individual doctors and scientists
          working solely on their own responsibility
        claim_digest: sha256:90673dbd87d81ba087d97ceb1b030d5d9d84a3e8b42d3a53b90ebc8ff44bed18
      review_status: partial
    - source_id: belmont_1979
      locator:
        kind: section
        value: Ethical Principles & Guidelines for Research Involving Human Subjects (introduction)
      support: direct
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://web.archive.org/web/20191210055114id_/https://www.hhs.gov/ohrp/regulations-and-policy/belmont-report/read-the-belmont-report/index.html
        accessed: '2026-11-17'
        quote: >-
          the Nuremberg code was drafted as a set of standards for judging physicians and scientists
          who had conducted biomedical experiments on concentration camp prisoners
        claim_digest: sha256:90673dbd87d81ba087d97ceb1b030d5d9d84a3e8b42d3a53b90ebc8ff44bed18
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: nuremberg_consent
    text: >-
      The first of the Code's ten principles states that the voluntary consent of the human subject
      is absolutely essential.
    claim_kind: historical_textual
    supports:
    - source_id: twc_vol2
      locator:
        kind: section
        value: >-
          XII. Judgment, 'Permissible Medical Experiments' (PDF pp. 186-187, printed pp. 181-182
          inferred)
      support: direct
      note: >-
        The entry's 'absolute prerequisite' paraphrases 'absolutely essential'. The Code concerns
        experiments on human beings, not treatment.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://tile.loc.gov/storage-services/service/ll/llmlp/2011525364_NT_war-criminals_Vol-II/2011525364_NT_war-criminals_Vol-II.pdf
        accessed: '2026-11-17'
        quote: 1. The voluntary consent of the human subject is absolutely essential.
        claim_digest: sha256:4e395f9cfa5b1499b3b06189b573627784e5e6adf7f84e3281d64101c9d2f2a0
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://tile.loc.gov/storage-services/service/ll/llmlp/2011525364_NT_war-criminals_Vol-II/2011525364_NT_war-criminals_Vol-II.pdf
        accessed: '2026-11-17'
        quote: Of the ten principles which have been enumerated
        claim_digest: sha256:4e395f9cfa5b1499b3b06189b573627784e5e6adf7f84e3281d64101c9d2f2a0
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: belmont_issuer_date
    text: >-
      The Belmont Report was issued by the National Commission for the Protection of Human Subjects
      of Biomedical and Behavioral Research and is dated April 18, 1979.
    claim_kind: historical_textual
    supports:
    - source_id: belmont_1979
      locator:
        kind: section
        value: Heading and notice block
      support: direct
      note: >-
        It was published as a notice of the report for public comment. The entry shortens the
        Commission's name.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://web.archive.org/web/20191210055114id_/https://www.hhs.gov/ohrp/regulations-and-policy/belmont-report/read-the-belmont-report/index.html
        accessed: '2026-11-17'
        quote: >-
          The National Commission for the Protection of Human Subjects of Biomedical and Behavioral
          Research April 18, 1979
        claim_digest: sha256:745b9ceef863450f449981c69b67b7e7ca08b8d5d4be25a3410b02a29959ff5e
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://web.archive.org/web/20191210055114id_/https://www.hhs.gov/ohrp/regulations-and-policy/belmont-report/read-the-belmont-report/index.html
        accessed: '2026-11-17'
        quote: 'ACTION: Notice of Report for Public Comment.'
        claim_digest: sha256:745b9ceef863450f449981c69b67b7e7ca08b8d5d4be25a3410b02a29959ff5e
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: belmont_principles
    text: >-
      The Belmont Report sets out three basic ethical principles for research involving human
      subjects: respect for persons, beneficence and justice.
    claim_kind: historical_textual
    supports:
    - source_id: belmont_1979
      locator:
        kind: section
        value: Summary and Part B, Basic Ethical Principles
      support: direct
      note: >-
        The report describes itself as a summary of principles, not as a code or regulation. Its
        own text uses 'codified' for the 1971 guidelines that became federal regulations.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://web.archive.org/web/20191210055114id_/https://www.hhs.gov/ohrp/regulations-and-policy/belmont-report/read-the-belmont-report/index.html
        accessed: '2026-11-17'
        quote: >-
          The Belmont Report attempts to summarize the basic ethical principles identified by
          the Commission in the course of its deliberations.
        claim_digest: sha256:50132bdcd74c5d0b783433c93c8d5a0b2bc3bb1f02f62535ab2bb652e66b98c2
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://web.archive.org/web/20191210055114id_/https://www.hhs.gov/ohrp/regulations-and-policy/belmont-report/read-the-belmont-report/index.html
        accessed: '2026-11-17'
        quote: the principles of respect of persons, beneficence and justice
        claim_digest: sha256:50132bdcd74c5d0b783433c93c8d5a0b2bc3bb1f02f62535ab2bb652e66b98c2
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: belmont_consent_respect
    text: >-
      The Belmont Report presents informed consent as the requirement through which the principle
      of respect for persons is applied.
    claim_kind: historical_textual
    supports:
    - source_id: belmont_1979
      locator:
        kind: section
        value: Part C, Applications, 1. Informed Consent
      support: direct
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://web.archive.org/web/20191210055114id_/https://www.hhs.gov/ohrp/regulations-and-policy/belmont-report/read-the-belmont-report/index.html
        accessed: '2026-11-17'
        quote: >-
          Applications of the general principles to the conduct of research leads to consideration
          of the following requirements: informed consent, risk/benefit assessment, and the selection
          of subjects of research.
        claim_digest: sha256:98b28e33ebf74f2370fd6bc1aa668d789ed6423f0e3c84b9ddcfffe07ad62ba2
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://web.archive.org/web/20191210055114id_/https://www.hhs.gov/ohrp/regulations-and-policy/belmont-report/read-the-belmont-report/index.html
        accessed: '2026-11-17'
        quote: >-
          Respect for persons requires that subjects, to the degree that they are capable, be
          given the opportunity to choose what shall or shall not happen to them. This opportunity
          is provided when adequate standards for informed consent are satisfied.
        claim_digest: sha256:98b28e33ebf74f2370fd6bc1aa668d789ed6423f0e3c84b9ddcfffe07ad62ba2
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: faden_beauchamp
    text: >-
      Ruth R. Faden and Tom L. Beauchamp, in collaboration with Nancy M. P. King, published A
      History and Theory of Informed Consent (New York: Oxford University Press, 1986).
    claim_kind: historical_textual
    supports:
    - source_id: faden_record
      locator:
        kind: other
        value: 'Catalogue record: title statement and publication line'
      support: direct
      note: >-
        This is a catalogue record only. The book was not read, and nothing in the entry is checked
        against its contents.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://wellcomecollection.org/works/drqvqhwp
        accessed: '2026-11-17'
        quote: >-
          A history and theory of informed consent / Ruth R. Faden, Tom L. Beauchamp ; in collaboration
          with Nancy M.P. King.
        claim_digest: sha256:aa4be53f3d6299fbcf898f227332958ad78bbbba2db1b0cb63b2c38cac6549d5
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://wellcomecollection.org/works/drqvqhwp
        accessed: '2026-11-17'
        quote: 'New York : Oxford University Press, 1986.'
        claim_digest: sha256:aa4be53f3d6299fbcf898f227332958ad78bbbba2db1b0cb63b2c38cac6549d5
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  mappings:
  - id: honesty_disclosure
    statement: >-
      The entry reads the duty to disclose the nature, risks, benefits and alternatives of an
      intervention as a requirement that what the physician tells the patient match what the physician
      knows.
    claim_ids:
    - consent_elements
    - belmont_consent_respect
    targets:
    - property:honesty
    mapping_kind: interpretive_synthesis
    argument: >-
      The AMA opinion lists what the physician must tell the patient, and the Belmont Report lists
      what research subjects must be told. The entry reads leaving out a material risk as a gap
      between what is known and what is said.
    limits: >-
      The sources state disclosure duties. None frames them as honesty, and none says that withholding
      a risk is dishonesty. Nuremberg and Belmont concern research, which Belmont separates from
      the practice of therapy. For treatment, only the AMA opinion speaks to disclosure; it was
      added in this migration and is one national association's ethics code. Schloendorff concerns
      consent to an operation, not disclosure. The Honesty paragraph also invokes non-fabrication
      ('fabricating reassurance'). The frontmatter does not list that property, so no mapping
      is made for it.
    review_status: pending
    reviews: []
  - id: humility_scope
    statement: >-
      The entry reads the patient's right to decide as a limit on the physician's authority, whatever
      the physician's expertise.
    claim_ids:
    - cardozo_quote
    - belmont_consent_respect
    - consent_elements
    targets:
    - property:humility
    mapping_kind: interpretive_synthesis
    argument: >-
      Cardozo's statement gives the decision about the body to the person and treats an operation
      without consent as an assault. In Belmont, respect for persons requires that subjects choose
      what shall or shall not happen to them.
    limits: >-
      No cited source speaks of paternalism or of the scope of a physician's authority in those
      terms. Cardozo's statement belongs to the reasoning of a case decided for the hospital,
      and it concerns an operation done without consent, not a duty to disclose. Belmont concerns
      research subjects, not patients. Reading paternalism as authority beyond its legitimate
      scope is this project's interpretation.
    review_status: pending
    reviews: []
  - id: alignment_purpose
    statement: >-
      The entry reads informed consent as tying the physician's stated purpose, serving the patient,
      to how treatment proceeds, by making the patient's choice the condition for acting.
    claim_ids:
    - consent_elements
    - cardozo_quote
    targets:
    - property:alignment
    mapping_kind: interpretive_synthesis
    argument: >-
      In the AMA opinion, the consent process ends in the patient's authorization of a specific
      intervention. In Schloendorff, consent is what makes an operation lawful rather than an
      assault.
    limits: >-
      No cited source describes consent as aligning a stated purpose with an action. The entry
      assumes, and the sources do not establish, that the physician's stated purpose is the patient's
      interest. The AMA opinion is one association's ethics code, added in this migration, not
      law. Schloendorff addresses consent to an operation only.
    review_status: pending
    reviews: []
---

# Informed Consent

**Source**: *Schloendorff v. Society of New York Hospital*, 211 N.Y. 125 (1914); Nuremberg Code (1947); Belmont Report (1979)
**Institution**: New York Court of Appeals; United States Military Tribunal I; National Commission for the Protection of Human Subjects

## Finding

The legal and ethical requirement that a patient must be given adequate information about a proposed treatment -- its nature, risks, benefits, and alternatives -- and must voluntarily agree before treatment proceeds. Justice Cardozo (1914): "Every human being of adult years and sound mind has a right to determine what shall be done with his own body." The Nuremberg Code, written after the Nazi medical experiments, established consent as the absolute prerequisite for human experimentation. The Belmont Report set out respect for persons, beneficence, and justice, with informed consent as the operational expression of respect.

## Pattern Mapping

**Honesty** -- Informed consent requires that the physician's communication matches what the physician knows. Withholding material risks is dishonesty. Fabricating reassurance where genuine risks exist is non-fabrication violated.

**Humility** -- The doctrine explicitly limits the physician's authority. Regardless of expertise, the decision belongs to the patient. Medical paternalism -- "doctor knows best" -- is the exercise of authority beyond legitimate scope.

**Alignment** -- Informed consent aligns the physician's stated purpose (serving the patient's interest) with the mechanism of treatment (the patient's autonomous choice).

## Connections

- [[Hippocratic Oath]] -- consent operationalizes the Oath's proportionality
- [[CRISPR Gene Therapy]] -- germline editing violates consent of future generations (He Jiankui case)
- Nuremberg Trials -- the Code emerged from the darkest violation of medical consent
- [[Evidence-Based Medicine]] -- both require that claims match evidence, not authority
- [[Gaslighting]] -- gaslighting destroys the capacity for informed consent by attacking self-trust

## Status

*Schloendorff* (1914). Nuremberg Code (1947). Belmont Report (1979). Faden & Beauchamp, *A History and Theory of Informed Consent* (1986). The mapping to the five properties is this project's structural interpretation.

---

*The mapping to the five properties is this project's structural interpretation.*
