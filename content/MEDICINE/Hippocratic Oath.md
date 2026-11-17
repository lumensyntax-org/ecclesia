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
    Not reached: the text of Edelstein (1943). The Internet Archive copy is an access-restricted
    lending copy, so only its catalogue record was read; nothing in the entry is checked against
    Edelstein's translation or interpretation, and the statement that it is the standard treatment
    is unassessed. The sentence the entry quotes, 'I will abstain from all intentional wrong-doing
    and harm', was found in W. H. S. Jones's Loeb translation (first printed 1923), not in Edelstein.
    The wording 'I will not cut for stone' was not found in either translation opened (Jones;
    Michael North for the NLM). No source was opened on whether the Declaration of Geneva derives
    from the Oath. The Greek text was not checked word by word: the Jones copy is OCR of the 1957
    reprint and its Greek is garbled. Jones's statement that the date is unknown dates from 1923;
    later scholarship on the date and authorship was not surveyed.
  review_status: partial
  reviews: []
  sources:
  - id: jones_1923
    citation: >-
      Jones WHS, translator. Hippocrates, Vol. I, with an English translation. Loeb Classical
      Library. London: William Heinemann; Cambridge, MA: Harvard University Press. First printed
      1923; the copy read is the 1957 reprint (Internet Archive OCR text).
    source_kind: scholarly_book
    origin: external
    url: https://archive.org/details/hippocrates01hippuoft
    academic_review:
      status: not_documented
      note: This record does not document a peer-review process.
  - id: nlm_greek_medicine
    citation: >-
      National Library of Medicine, History of Medicine Division. Ancient Greek Medicine (web
      version of a 2008 display curated by Michael North), including 'Translation of the Hippocratic
      Oath', translated by Michael North, National Library of Medicine, 2002.
    source_kind: institutional_document
    origin: external
    url: https://www.nlm.nih.gov/hmd/topics/greek-medicine/index.html
    academic_review:
      status: not_applicable
      note: Institutional page of a national library, not a journal article.
  - id: smith_2005
    citation: >-
      Smith CM. Origin and uses of primum non nocere--above all, do no harm! J Clin Pharmacol
      45(4):371-377, 2005. doi:10.1177/0091270004273680.
    source_kind: academic_article
    origin: external
    url: https://doi.org/10.1177/0091270004273680
    academic_review:
      status: not_documented
      note: This record does not document a peer-review process.
  - id: wma_geneva
    citation: >-
      World Medical Association. WMA Declaration of Geneva (The Physician's Pledge). Adopted September
      1948; last amended by the 68th WMA General Assembly, Chicago, October 2017.
    source_kind: institutional_document
    origin: external
    url: https://www.wma.net/policies-post/wma-declaration-of-geneva/
    academic_review:
      status: not_applicable
      note: Policy document of a professional association, not a journal article.
  - id: edelstein_record
    citation: >-
      Internet Archive catalogue record for Edelstein L. The Hippocratic Oath: Text, Translation
      and Interpretation. Baltimore: The Johns Hopkins Press, 1943 (item hippocraticoatht0000edel).
    source_kind: other
    kind_note: >-
      Catalogue record of an access-restricted lending copy. Only the bibliographic record was
      read, not the book.
    origin: external
    url: https://archive.org/details/hippocraticoatht0000edel
    academic_review:
      status: not_applicable
      note: Library catalogue record, not a scholarly text.
  claims:
  - id: oath_attribution
    text: The Oath is attributed to Hippocrates of Cos, but its authorship and date are uncertain.
    claim_kind: historical_textual
    supports:
    - source_id: jones_1923
      locator:
        kind: section
        value: Introduction to The Oath, opening paragraphs
      support: partial
      note: >-
        Jones reports the ancient attribution (Erotian) and says the date is unknown. This is
        a 1923 assessment; later dating proposals, including Edelstein's, were not read.
        Authorship uncertainty is implied, not stated, in the quoted passages.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://archive.org/download/hippocrates01hippuoft/hippocrates01hippuoft_djvu.txt
        accessed: '2026-11-17'
        quote: In the first place, the Oath was admitted to be genuinely Hippocratic by Erotian.
        claim_digest: sha256:22e97cfbe289939dcfe7812ac598a74106df72d07d5886d4769f8f203079440c
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://archive.org/download/hippocrates01hippuoft/hippocrates01hippuoft_djvu.txt
        accessed: '2026-11-17'
        quote: What is the date of the Oath?
        claim_digest: sha256:22e97cfbe289939dcfe7812ac598a74106df72d07d5886d4769f8f203079440c
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://archive.org/download/hippocrates01hippuoft/hippocrates01hippuoft_djvu.txt
        accessed: '2026-11-17'
        quote: for certain he knows nothing
        claim_digest: sha256:22e97cfbe289939dcfe7812ac598a74106df72d07d5886d4769f8f203079440c
      review_status: partial
    - source_id: nlm_greek_medicine
      locator:
        kind: section
        value: 'Hippocrates: Rationality and Medicine'
      support: partial
      note: >-
        Speaks of the several men named Hippocrates and the several authors of the Hippocratic
        Corpus in general, not of the Oath's authorship specifically.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://www.nlm.nih.gov/hmd/topics/greek-medicine/index.html
        accessed: '2026-11-17'
        quote: >-
          Virtually nothing is known of the first physician named Hippocrates, but there are considered
          to have been several, all of them teachers at the famous medical school on the Mediterranean
          island of Cos.
        claim_digest: sha256:22e97cfbe289939dcfe7812ac598a74106df72d07d5886d4769f8f203079440c
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://www.nlm.nih.gov/hmd/topics/greek-medicine/index.html
        accessed: '2026-11-17'
        quote: >-
          There are assumed to be several authors, however, probably scattered over several centuries
        claim_digest: sha256:22e97cfbe289939dcfe7812ac598a74106df72d07d5886d4769f8f203079440c
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: institution_cos
    text: The Oath is associated with the Hippocratic medical school on Cos.
    claim_kind: historical_textual
    supports:
    - source_id: nlm_greek_medicine
      locator:
        kind: section
        value: The Oath
      support: partial
      note: >-
        The library links the Oath to the Asclepiads of Kos only tentatively ('may have'); it
        does not say the Oath was the school's document.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://www.nlm.nih.gov/hmd/topics/greek-medicine/index.html
        accessed: '2026-11-17'
        quote: >-
          the creation of the Oath may have marked the early stages of medical training to those
          outside the first families of Hippocratic medicine, the Asclepiads of Kos
        claim_digest: sha256:b83f85f4e52ec3db13af2db81beafd26256166c120a451b8e987a61d0f44aebc
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: edelstein_book
    text: >-
      Ludwig Edelstein's The Hippocratic Oath: Text, Translation and Interpretation was published
      by the Johns Hopkins Press in 1943.
    claim_kind: historical_textual
    supports:
    - source_id: edelstein_record
      locator:
        kind: other
        value: 'Item metadata: publication date, publisher, extent'
      support: direct
      note: Bibliographic record only; the book's text was not read.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://archive.org/details/hippocraticoatht0000edel
        accessed: '2026-11-17'
        quote: >-
          The Hippocratic oath, text, translation and interpretation by Edelstein, Ludwig, 1902-1965
          Publication date 1943
        claim_digest: sha256:984c46dc6101c2b2f220e5dd080b79e536ab7d7ecb216426e8797ebec3652f1c
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://archive.org/details/hippocraticoatht0000edel
        accessed: '2026-11-17'
        quote: Publisher Baltimore, The Johns Hopkins Press
        claim_digest: sha256:984c46dc6101c2b2f220e5dd080b79e536ab7d7ecb216426e8797ebec3652f1c
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: landmark
    text: The Oath is a landmark statement of medical ethics in the Western tradition.
    claim_kind: historical_textual
    supports:
    - source_id: jones_1923
      locator:
        kind: section
        value: Introduction to The Oath, first paragraph
      support: direct
      note: >-
        Supports 'landmark'. The earlier wording 'the oldest statement' is stated by no source
        opened and was narrowed in the body.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://archive.org/download/hippocrates01hippuoft/hippocrates01hippuoft_djvu.txt
        accessed: '2026-11-17'
        quote: Whatever its origin, it is a landmark in the ethics of medicine.
        claim_digest: sha256:6c3321c2ca6bf723c5e573d44109647d0c1ceef77d4c4f121d662f9ad9e305a0
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: primum_not_in_oath
    text: The phrase 'First, do no harm' (primum non nocere) does not appear in the Oath.
    claim_kind: historical_textual
    supports:
    - source_id: nlm_greek_medicine
      locator:
        kind: section
        value: The Oath
      support: direct
      note: >-
        The library states it of the Oath; the Greek text itself was not checked word by word
        in this review.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://www.nlm.nih.gov/hmd/topics/greek-medicine/index.html
        accessed: '2026-11-17'
        quote: >-
          It also does not explicitly contain the phrase, “First, do no harm,” which is commonly
          attributed to it.
        claim_digest: sha256:427907b53bb673b58965917961aff95aa64ddbaedcb7ee82175551e60cd171f6
      review_status: partial
    - source_id: smith_2005
      locator:
        kind: section
        value: Abstract
      support: partial
      note: >-
        The abstract concerns the Latin axiom and does not mention the Oath; it reports, hedged,
        that the author was neither Hippocrates nor Galen.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=15778417&rettype=abstract&retmode=text
        accessed: '2026-11-17'
        quote: It has been reported that the author was neither Hippocrates nor Galen.
        claim_digest: sha256:427907b53bb673b58965917961aff95aa64ddbaedcb7ee82175551e60cd171f6
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: smith_origin
    text: >-
      Smith's 2005 article in the Journal of Clinical Pharmacology (volume 45) traces primum non
      nocere in print to 1860, with an attribution to Thomas Sydenham.
    claim_kind: historical_textual
    supports:
    - source_id: smith_2005
      locator:
        kind: section
        value: Citation line and Abstract
      support: direct
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=15778417&rettype=abstract&retmode=text
        accessed: '2026-11-17'
        quote: J Clin Pharmacol. 2005 Apr;45(4):371-7.
        claim_digest: sha256:5917e1e6e5b59e1f6baa7f789648542641ab7049e0267501337eb0108fd9a3c3
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=15778417&rettype=abstract&retmode=text
        accessed: '2026-11-17'
        quote: >-
          Searches of writings back to the Middle Ages have uncovered the appearance of the axiom
          as expressed in English, coupled with its unique Latin, in 1860, with attribution to
          the English physician, Thomas Sydenham.
        claim_digest: sha256:5917e1e6e5b59e1f6baa7f789648542641ab7049e0267501337eb0108fd9a3c3
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: harm_clause
    text: >-
      The Oath contains pledges against harming patients, including the sentence, in W. H. S.
      Jones's translation, 'I will abstain from all intentional wrong-doing and harm'.
    claim_kind: historical_textual
    supports:
    - source_id: jones_1923
      locator:
        kind: section
        value: The Oath, translation (house-visit clause and regimen clause)
      support: direct
      note: >-
        The sentence the entry quotes is Jones's translation, not Edelstein's. It sits in the
        house-visit clause, which continues with abuse of bodies; the regimen clause is the closer
        parallel to 'do no harm'.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://archive.org/download/hippocrates01hippuoft/hippocrates01hippuoft_djvu.txt
        accessed: '2026-11-17'
        quote: >-
          Into whatsoever houses I enter, I will enter to help the sick, and I will abstain from
          all intentional wrong-doing and harm, especially from abusing the bodies of man or woman,
          bond or free.
        claim_digest: sha256:4e8507d43ed2041f06b224761ac8546c15f9bac792cfa76c91e31c2d55a136cd
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://archive.org/download/hippocrates01hippuoft/hippocrates01hippuoft_djvu.txt
        accessed: '2026-11-17'
        quote: never with a view to injury and wrong-doing
        claim_digest: sha256:4e8507d43ed2041f06b224761ac8546c15f9bac792cfa76c91e31c2d55a136cd
      review_status: partial
    - source_id: nlm_greek_medicine
      locator:
        kind: section
        value: Translation of the Hippocratic Oath (North, 2002), regimen clause
      support: direct
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://www.nlm.nih.gov/hmd/topics/greek-medicine/index.html
        accessed: '2026-11-17'
        quote: >-
          I will use those dietary regimens which will benefit my patients according to my greatest
          ability and judgement, and I will do no harm or injustice to them.
        claim_digest: sha256:4e8507d43ed2041f06b224761ac8546c15f9bac792cfa76c91e31c2d55a136cd
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: knife_clause
    text: >-
      The Oath includes a pledge not to use the knife, even on patients suffering from stone,
      and to leave that work to practitioners of the craft.
    claim_kind: historical_textual
    supports:
    - source_id: jones_1923
      locator:
        kind: section
        value: The Oath, translation, knife clause
      support: direct
      note: >-
        The entry's wording 'I will not cut for stone' is not in this translation. Jones's footnote
        to the Greek of this clause records emendations proposed by Littré and Reinhold for the
        word for stone sufferers, so the reading of the clause is disputed. Whether it bars all
        surgery or only cutting for stone is not settled by the text.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://archive.org/download/hippocrates01hippuoft/hippocrates01hippuoft_djvu.txt
        accessed: '2026-11-17'
        quote: >-
          I will not use the knife, not even, verily, on sufferers from stone, but I will give
          place to such as are craftsmen
        claim_digest: sha256:5f8bdd4c53f819b80efc97dec024f880535d7542a0d7c6f4b5f6a015fb2f7a7f
      review_status: partial
    - source_id: nlm_greek_medicine
      locator:
        kind: section
        value: Translation of the Hippocratic Oath (North, 2002), knife clause
      support: direct
      note: The entry's wording 'I will not cut for stone' is not in this translation either.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://www.nlm.nih.gov/hmd/topics/greek-medicine/index.html
        accessed: '2026-11-17'
        quote: >-
          I will not use the knife, even upon those suffering from stones, but I will leave this
          to those who are trained in this craft.
        claim_digest: sha256:5f8bdd4c53f819b80efc97dec024f880535d7542a0d7c6f4b5f6a015fb2f7a7f
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: knife_competence
    text: >-
      The surgical pledge reflects a recognition that some interventions exceed the physician's
      competence.
    claim_kind: historical_textual
    supports:
    - source_id: nlm_greek_medicine
      locator:
        kind: section
        value: Translation of the Hippocratic Oath (North, 2002), knife clause
      support: partial
      note: >-
        The text supports deferring the operation to those trained in it. It does not state the
        reason, and 'exceed the physician's competence' is the entry's reading.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://www.nlm.nih.gov/hmd/topics/greek-medicine/index.html
        accessed: '2026-11-17'
        quote: but I will leave this to those who are trained in this craft
        claim_digest: sha256:2632d56b8a5f649fd74b58cf394d721d73c0b038551fd4826aadea43ca334154
      review_status: partial
    - source_id: jones_1923
      locator:
        kind: section
        value: The Oath, translation, sentence before the knife clause
      support: partial
      note: >-
        The knife clause directly follows a pledge of purity and holiness, which leaves readings
        other than competence open. Edelstein's interpretation of the clause was not read.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://archive.org/download/hippocrates01hippuoft/hippocrates01hippuoft_djvu.txt
        accessed: '2026-11-17'
        quote: But I will keep pure and holy both my life and my art.
        claim_digest: sha256:2632d56b8a5f649fd74b58cf394d721d73c0b038551fd4826aadea43ca334154
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: geneva_dates
    text: >-
      The World Medical Association adopted the Declaration of Geneva in September 1948, and its
      current text was amended in October 2017.
    claim_kind: historical_textual
    supports:
    - source_id: wma_geneva
      locator:
        kind: section
        value: Adoption and amendment history
      support: direct
      note: >-
        The page also lists amendments in 1968, 1983 and 1994 and editorial revisions in 2005
        and 2006.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://www.wma.net/policies-post/wma-declaration-of-geneva/
        accessed: '2026-11-17'
        quote: >-
          Adopted by the 2 nd General Assembly of the World Medical Association, Geneva, Switzerland,
          September 1948
        claim_digest: sha256:6ae85ca02ae5e8b0356c1bfb1a87404c03108be2538f200d25aaa4879cb2971c
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://www.wma.net/policies-post/wma-declaration-of-geneva/
        accessed: '2026-11-17'
        quote: amended by the 68 th WMA General Assembly, Chicago, United States, October 2017
        claim_digest: sha256:6ae85ca02ae5e8b0356c1bfb1a87404c03108be2538f200d25aaa4879cb2971c
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: geneva_first
    text: >-
      The current Declaration of Geneva makes the health and well-being of the patient the physician's
      first consideration.
    claim_kind: historical_textual
    supports:
    - source_id: wma_geneva
      locator:
        kind: section
        value: The Physician's Pledge, second clause
      support: direct
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://www.wma.net/policies-post/wma-declaration-of-geneva/
        accessed: '2026-11-17'
        quote: THE HEALTH AND WELL-BEING OF MY PATIENT will be my first consideration;
        claim_digest: sha256:0ec64f303b0fb552082c89ef659b2f2cdefa7b923e099a997d878752bc306a03
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: geneva_bounded
    text: The Declaration of Geneva limits the physician's authority.
    claim_kind: historical_textual
    supports:
    - source_id: wma_geneva
      locator:
        kind: section
        value: The Physician's Pledge
      support: partial
      note: >-
        The pledge requires respect for the patient's autonomy and forbids using medical knowledge
        against human rights. 'The physician's authority as bounded' is the entry's summary of
        these, not the Declaration's wording.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://www.wma.net/policies-post/wma-declaration-of-geneva/
        accessed: '2026-11-17'
        quote: I WILL RESPECT the autonomy and dignity of my patient;
        claim_digest: sha256:e8d35d5f6a664c98e578fc988c7a4392d0c6fe5aa6c5e25120105b1be9aa094a
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://www.wma.net/policies-post/wma-declaration-of-geneva/
        accessed: '2026-11-17'
        quote: >-
          I WILL NOT USE my medical knowledge to violate human rights and civil liberties, even
          under threat;
        claim_digest: sha256:e8d35d5f6a664c98e578fc988c7a4392d0c6fe5aa6c5e25120105b1be9aa094a
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: geneva_retains
    text: The Declaration of Geneva continues the core of the Hippocratic Oath.
    claim_kind: historical_textual
    supports:
    - source_id: wma_geneva
      locator: null
      support: unassessed
      note: >-
        The Declaration's page does not mention the Hippocratic Oath (only a tag 'Oath'), and
        no source on the Declaration's derivation from the Oath was opened.
      reviews: []
      review_status: pending
    origin: source_summary
    reviews: []
    review_status: pending
  - id: edelstein_standard
    text: Edelstein's 1943 study is the standard scholarly treatment of the Oath.
    claim_kind: historical_textual
    supports:
    - source_id: edelstein_record
      locator: null
      support: unassessed
      note: >-
        A catalogue record cannot show standing in the field, and no survey of the scholarship
        was opened. The superlative 'the standard' is unverified.
      reviews: []
      review_status: pending
    origin: source_summary
    reviews: []
    review_status: pending
  mappings:
  - id: proportion_limits
    statement: >-
      The entry reads the Oath's limits on the physician's action, such as treatment only for
      the benefit of the sick and no use of the knife, as action held to what the patient's good
      requires.
    claim_ids:
    - harm_clause
    - knife_clause
    targets:
    - property:proportion
    mapping_kind: interpretive_synthesis
    argument: >-
      The Oath ties treatment to the benefit of the sick and lists acts the physician will not
      do. The entry reads these limits as keeping action from exceeding what the patient's well-being
      needs.
    limits: >-
      Neither translation opened states a principle of proportion or weighs action against need;
      the pledges are duties and prohibitions, not a rule of proportionality. The phrase about
      the physician becoming an instrument claiming the authority of the patient's body is this
      project's language, not the Oath's.
    review_status: pending
    reviews: []
  - id: humility_scope
    statement: >-
      The entry reads the knife clause as an admission of the limits of the physician's skill,
      and the modern Declaration as carrying that limit forward.
    claim_ids:
    - knife_clause
    - knife_competence
    - geneva_bounded
    targets:
    - property:humility
    mapping_kind: interpretive_synthesis
    argument: >-
      The physician pledges not to cut and to leave the operation to those trained in it, which
      the entry reads as authority kept within the physician's own competence.
    limits: >-
      The Oath states the pledge and the deferral, not the reason. Reading it as an admission
      of limited competence is one interpretation; the clause follows a pledge of purity that
      allows others, and Jones records proposed emendations of the clause. The 2017 Declaration
      of Geneva as opened contains no clause on referral, so the Pattern Mapping's statement that
      the modern version preserves this as a duty to refer is not supported by the cited Declaration.
    review_status: pending
    reviews: []
  - id: alignment_purpose
    statement: >-
      The entry reads the Oath as binding the physician's permitted actions to the purpose of
      healing.
    claim_ids:
    - harm_clause
    - geneva_first
    targets:
    - property:alignment
    mapping_kind: interpretive_synthesis
    argument: >-
      The Oath directs treatment and house visits to the benefit of the sick, and the Declaration
      of Geneva puts the patient's health first. The entry reads the prohibitions as the points
      where purpose and action would part.
    limits: >-
      The Oath also binds the physician to duties toward the teacher and the teacher's family,
      and limits instruction to sworn pupils; these are not healing actions. The text does not
      establish that every prohibited act is a case of purpose and action diverging. That reading
      is this project's.
    review_status: pending
    reviews: []
---

# Hippocratic Oath

**Source**: Attributed to Hippocrates of Cos (authorship and date uncertain); Edelstein, *The Hippocratic Oath: Text, Translation, and Interpretation*, 1943
**Institution**: School of Cos; World Medical Association (Declaration of Geneva, 1948/2017)

## Finding

A landmark statement of medical ethics in the Western tradition. The popular summary "First, do no harm" (*primum non nocere*) does not appear verbatim in the original Greek, but the Oath contains the principle: "I will abstain from all intentional wrong-doing and harm." Crucially, the Oath includes limits -- the physician pledges not to perform surgery ("I will not cut for stone"), recognizing that some interventions exceed the physician's competence. The modern Declaration of Geneva retains the core: the patient's health as first consideration, the physician's authority as bounded.

## Pattern Mapping

**Proportion** -- The Oath's deepest contribution is the recognition that the physician's power to act must not exceed what the patient's well-being requires. When action exceeds need, the physician becomes an instrument claiming the authority of the patient's body.

**Humility** -- The original surgical prohibition is an explicit admission of scope limits. The physician who recognizes what lies beyond their skill practices humility as medical ethics. The modern version preserves this as the duty to refer.

**Alignment** -- The Oath aligns the stated purpose of medicine (healing) with the permitted actions (only those that serve healing). Every prohibited action is one where purpose and action would diverge.

## Connections

- [[Ten Commandments]] -- codified boundary on authority, originating in an ethical tradition
- [[Informed Consent]] -- consent operationalizes the Oath's proportionality in the clinical encounter
- [[Palliative Care]] -- knowing when to stop treatment is the Oath's proportion carried to its limit
- [[Triage]] -- allocation under scarcity as proportionality formalized
- [[Just War Theory]] -- both: codified limits on the exercise of power (-> proportionality across domains)

## Status

Edelstein (1943) is the standard scholarly treatment of the Oath. *Primum non nocere* attribution: Smith, *Journal of Clinical Pharmacology* 45, 2005. Declaration of Geneva: WMA (1948, rev. 2017). The mapping to the five properties is this project's structural interpretation.

---

*The mapping to the five properties is this project's structural interpretation.*
