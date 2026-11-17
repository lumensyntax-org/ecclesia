---
domain: medicine
properties: [alignment, non_fabrication, honesty]
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
    Not reached: the full text of Ledley & Lusted (Science 130, 1959). The Science page returned
    403 and JSTOR returned a browser challenge, so only the PubMed record was read (citation and
    descriptive title, no abstract, no affiliation); whether the paper itself frames diagnosis
    as iterative Bayesian updating is unchecked. Bliss, William Osler: A Life in Medicine (1999):
    only a library catalog record was read; the book is lending-restricted and search inside returned
    403, so whether it sources the Osler saying is unchecked. Kahneman (2011): only the publisher's
    page and its excerpt of the Introduction. Croskerry (2003): abstract only. The Institution
    line's 'NIH' for Ledley & Lusted was not checked against any source. Merriam-Webster (403)
    and the Perseus web interface (cookie wall) were not reached; the Greek meaning is checked
    against the Perseus TEI file of the Liddell-Scott-Jones lexicon. Pattern Mapping and Connections
    were not checked; they are interpretation.
  review_status: partial
  reviews: []
  sources:
  - id: ledley_lusted_1959
    citation: >-
      Ledley RS, Lusted LB. Reasoning foundations of medical diagnosis; symbolic logic, probability,
      and value theory aid our understanding of how physicians reason. Science 130(3366):9-21,
      1959.
    source_kind: academic_article
    origin: external
    url: https://doi.org/10.1126/science.130.3366.9
    academic_review:
      status: not_documented
      note: This record does not document a peer-review process.
  - id: croskerry_2003
    citation: >-
      Croskerry P. The importance of cognitive errors in diagnosis and strategies to minimize
      them. Academic Medicine 78(8):775-780, 2003.
    source_kind: academic_article
    origin: external
    url: https://doi.org/10.1097/00001888-200308000-00003
    academic_review:
      status: not_documented
      note: This record does not document a peer-review process.
  - id: nci_dictionary
    citation: 'National Cancer Institute. NCI Dictionary of Cancer Terms: diagnosis.'
    source_kind: institutional_document
    origin: external
    url: https://www.cancer.gov/publications/dictionaries/cancer-terms/def/diagnosis
    academic_review:
      status: not_applicable
      note: Glossary of a federal health agency, not a journal article.
  - id: lsj
    citation: >-
      Liddell HG, Scott R. A Greek-English Lexicon, revised and augmented throughout by Sir Henry
      Stuart Jones with the assistance of Roderick McKenzie. Oxford: Clarendon Press, 1940. Perseus
      Digital Library machine-readable TEI edition, file grc.lsj.perseus-eng4.xml.
    source_kind: scholarly_book
    origin: external
    url: >-
      https://github.com/PerseusDL/lexica/blob/master/CTS_XML_TEI/perseus/pdllex/grc/lsj/grc.lsj.perseus-eng4.xml
    academic_review:
      status: not_documented
      note: This record does not document a peer-review process.
  - id: nasem_2015
    citation: >-
      National Academies of Sciences, Engineering, and Medicine. Improving Diagnosis in Health
      Care, Chapter 2: The Diagnostic Process. Washington, DC: The National Academies Press, 2015.
      doi:10.17226/21794.
    source_kind: institutional_document
    origin: external
    url: https://doi.org/10.17226/21794
    academic_review:
      status: not_applicable
      note: >-
        Consensus report of the National Academies, an institutional document, not a journal article.
  - id: kahneman_2011
    citation: >-
      Kahneman D. Thinking, Fast and Slow. Farrar, Straus and Giroux, 2011. Publisher's book page.
    source_kind: other
    kind_note: >-
      Publisher's page for the book (Macmillan, imprint Farrar, Straus and Giroux), which reproduces
      an excerpt of the book's Introduction. The rest of the book was not opened.
    origin: external
    url: https://us.macmillan.com/books/9780374275631/thinkingfastandslow
    academic_review:
      status: not_documented
      note: This record does not document a peer-review process.
  - id: bliss_1999_catalog
    citation: >-
      Bliss M. William Osler: A Life in Medicine. Oxford; New York: Oxford University Press, 1999.
      Internet Archive catalog record.
    source_kind: other
    kind_note: >-
      Library catalog record for the book. The book's text was not opened: it is lending-restricted
      and search inside returned 403.
    origin: external
    url: https://archive.org/details/williamosler00mich
    academic_review:
      status: not_applicable
      note: Library catalog record, not a journal article.
  - id: elpern_2021
    citation: Elpern DJ. Musings on Osler misquoted. The Pharos, Summer 2021, pp. 24-27.
    source_kind: other
    kind_note: >-
      Essay in The Pharos (Alpha Omega Alpha) reporting the author's own inquiry into the provenance
      of sayings attributed to Osler. It is not a source for Osler's own writings. Text saved
      as a reading-order pdftotext extraction of the fetched PDF.
    origin: external
    url: https://www.alphaomegaalpha.org/wp-content/uploads/2021/08/2021_Summer_Elpern.pdf
    academic_review:
      status: not_documented
      note: This record does not document a peer-review process.
  claims:
  - id: diagnosis_definition
    text: Diagnosis is the process of identifying a disease from its signs and symptoms.
    claim_kind: historical_textual
    supports:
    - source_id: nci_dictionary
      locator:
        kind: other
        value: Dictionary entry 'diagnosis', definition
      support: direct
      note: 'The NCI definition is broader: a disease, condition, or injury.'
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://webapis.cancer.gov/glossary/v1/Terms/Cancer.gov/Patient/en/diagnosis
        accessed: '2026-11-17'
        quote: The process of identifying a disease, condition, or injury from its signs and symptoms.
        claim_digest: sha256:a527bd9018b78c84dd72ba1dd5c53fbd124d9f69d769a97155d3e5bd52614bca
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: greek_meaning
    text: The Greek verb diagignōskein means to distinguish or to discern.
    claim_kind: historical_textual
    supports:
    - source_id: lsj
      locator:
        kind: other
        value: LSJ s.v. διαγιγνώσκω (Beta Code diagignw/skw), and s.v. διάγνωσις
      support: direct
      note: >-
        The text is in Beta Code. The lexicon also records the noun διάγνωσις used of medical
        diagnosis; it does not itself trace the English word.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://raw.githubusercontent.com/PerseusDL/lexica/master/CTS_XML_TEI/perseus/pdllex/grc/lsj/grc.lsj.perseus-eng4.xml
        accessed: '2026-11-17'
        quote: >-
          diagignw/skw , Ion. and later Att. dia-gi_nw/skw , fut. -gnw/somai D. 50.1 :— know one
          from the other, distinguish, discern
        claim_digest: sha256:6b831700865f2a1385c30bf66bfe0a202363122549a5bc2835713f39a3b77a0d
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://raw.githubusercontent.com/PerseusDL/lexica/master/CTS_XML_TEI/perseus/pdllex/grc/lsj/grc.lsj.perseus-eng4.xml
        accessed: '2026-11-17'
        quote: of medical diagnosis, d. poiei=sqai Hp. VC 10
        claim_digest: sha256:6b831700865f2a1385c30bf66bfe0a202363122549a5bc2835713f39a3b77a0d
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: clinical_method
    text: >-
      Diagnosis gathers information through the history, the physical examination and investigations,
      and works with a differential diagnosis.
    claim_kind: empirical
    supports:
    - source_id: nasem_2015
      locator:
        kind: section
        value: Chapter 2, overview of the diagnostic process
      support: partial
      note: >-
        The report lists four information-gathering activities, the fourth being referral or consultation,
        and says the information can be obtained in different orders. It supports the components,
        not a fixed sequence.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://nap.nationalacademies.org/read/21794/chapter/4
        accessed: '2026-11-17'
        quote: >-
          The committee identified four types of information-gathering activities in the diagnostic
          process: taking a clinical history and interview; performing a physical exam; obtaining
          diagnostic testing; and sending a patient for referrals or consultations.
        claim_digest: sha256:f49d51ea486b66f1b1e21d0013632eeef9da70345ea25e070e49787ec4af4a94
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://nap.nationalacademies.org/read/21794/chapter/4
        accessed: '2026-11-17'
        quote: >-
          The working diagnosis may be either a list of potential diagnoses (a differential diagnosis)
          or a single potential diagnosis.
        claim_digest: sha256:f49d51ea486b66f1b1e21d0013632eeef9da70345ea25e070e49787ec4af4a94
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://nap.nationalacademies.org/read/21794/chapter/4
        accessed: '2026-11-17'
        quote: diagnostic information can be obtained in different orders
        claim_digest: sha256:f49d51ea486b66f1b1e21d0013632eeef9da70345ea25e070e49787ec4af4a94
      review_status: partial
    - source_id: nci_dictionary
      locator:
        kind: other
        value: Dictionary entry 'diagnosis', second sentence
      support: partial
      note: Names history, examination and tests; says nothing about a differential diagnosis.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://webapis.cancer.gov/glossary/v1/Terms/Cancer.gov/Patient/en/diagnosis
        accessed: '2026-11-17'
        quote: >-
          A health history, physical exam, and tests, such as blood tests, imaging tests, and
          biopsies, may be used to help make a diagnosis.
        claim_digest: sha256:f49d51ea486b66f1b1e21d0013632eeef9da70345ea25e070e49787ec4af4a94
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: bayesian_updating
    text: >-
      In the Bayesian framing, diagnosis proceeds by revising the probability of each diagnosis
      under consideration as new findings and test results come in.
    claim_kind: empirical
    supports:
    - source_id: nasem_2015
      locator:
        kind: section
        value: Chapter 2, overview and the section 'Probabilistic (Bayesian) Reasoning'
      support: direct
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://nap.nationalacademies.org/read/21794/chapter/4
        accessed: '2026-11-17'
        quote: >-
          The continuous process of information gathering, integration, and interpretation involves
          hypothesis generation and updating prior probabilities as more information is learned.
        claim_digest: sha256:54f224076f7a0109913492a9036a9652c6b6ad99149d9f2523063b3a2b07f263
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://nap.nationalacademies.org/read/21794/chapter/4
        accessed: '2026-11-17'
        quote: >-
          Using Bayesian reasoning and formally revising probabilities of the various diseases
          under consideration helps clinicians avoid these errors.
        claim_digest: sha256:54f224076f7a0109913492a9036a9652c6b6ad99149d9f2523063b3a2b07f263
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: ledley_lusted_framework
    text: >-
      Ledley and Lusted, 'Reasoning Foundations of Medical Diagnosis' (Science 130, 1959), set
      out the probabilistic (Bayesian) framework for diagnosis.
    claim_kind: historical_textual
    supports:
    - source_id: ledley_lusted_1959
      locator:
        kind: other
        value: PubMed record 13668531, citation and title
      support: partial
      note: >-
        The record confirms the citation and that the paper treats probability, with symbolic
        logic and value theory, as aiding the understanding of how physicians reason. 'Bayes'
        and iterative updating do not appear in it. The full text was blocked (Science 403, JSTOR
        browser challenge), so the paper's own framing is unchecked.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=13668531,1749340&rettype=abstract&retmode=text
        accessed: '2026-11-17'
        quote: Science. 1959 Jul 3;130(3366):9-21.
        claim_digest: sha256:c6fdb8690b4679a42a6d8adeb571c850e9d1847ca0b2a143b5ea643cf91a2ed4
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=13668531,1749340&rettype=abstract&retmode=text
        accessed: '2026-11-17'
        quote: >-
          Reasoning foundations of medical diagnosis; symbolic logic, probability, and value theory
          aid our understanding of how physicians reason.
        claim_digest: sha256:c6fdb8690b4679a42a6d8adeb571c850e9d1847ca0b2a143b5ea643cf91a2ed4
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: croskerry_cognitive_errors
    text: >-
      Croskerry (Academic Medicine 78, 2003), at Dalhousie University, described cognitive errors
      and biases in diagnosis and strategies to reduce them.
    claim_kind: historical_textual
    supports:
    - source_id: croskerry_2003
      locator:
        kind: section
        value: 'PubMed record 12915363: citation, author affiliation and abstract'
      support: direct
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=12915363&rettype=abstract&retmode=text
        accessed: '2026-11-17'
        quote: Acad Med. 2003 Aug;78(8):775-80.
        claim_digest: sha256:0f22db9b9c8edfe59e64427e1aff8b3588c71da858ed470e509817dd24dde10e
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=12915363&rettype=abstract&retmode=text
        accessed: '2026-11-17'
        quote: >-
          Department of Emergency Medicine, Dalhousie University Faculty of Medicine, Halifax,
          Nova Scotia, Canada.
        claim_digest: sha256:0f22db9b9c8edfe59e64427e1aff8b3588c71da858ed470e509817dd24dde10e
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=12915363&rettype=abstract&retmode=text
        accessed: '2026-11-17'
        quote: >-
          A critical subset of diagnostic errors arises through cognitive errors, especially those
          associated with failures in perception, failed heuristics, and biases
        claim_digest: sha256:0f22db9b9c8edfe59e64427e1aff8b3588c71da858ed470e509817dd24dde10e
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=12915363&rettype=abstract&retmode=text
        accessed: '2026-11-17'
        quote: >-
          the author lists these and describes a number of strategies for reducing them ("cognitive
          debiasing")
        claim_digest: sha256:0f22db9b9c8edfe59e64427e1aff8b3588c71da858ed470e509817dd24dde10e
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: kahneman_biases
    text: Kahneman's Thinking, Fast and Slow (2011) deals with cognitive biases.
    claim_kind: historical_textual
    supports:
    - source_id: kahneman_2011
      locator:
        kind: other
        value: 'Publisher''s page: book details and the excerpt of the Introduction'
      support: direct
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://us.macmillan.com/books/9780374275631/thinkingfastandslow
        accessed: '2026-11-17'
        quote: Much of the discussion of this book is about biases of intuition.
        claim_digest: sha256:53957fced28b70f6c89a96a670d45e1ff6e727f511c237dd62f8f01844723149
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://us.macmillan.com/books/9780374275631/thinkingfastandslow
        accessed: '2026-11-17'
        quote: On Sale 10/25/2011
        claim_digest: sha256:53957fced28b70f6c89a96a670d45e1ff6e727f511c237dd62f8f01844723149
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: osler_saying
    text: >-
      The saying 'the great physician treats the patient who has the disease' is attributed to
      William Osler, but its primary source is obscure.
    claim_kind: historical_textual
    supports:
    - source_id: elpern_2021
      locator:
        kind: page
        value: pp. 25-26
      support: direct
      note: >-
        Elpern reports the attribution as unsourced and asks whether it is apocryphal; he does
        not show that Osler did not say it.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://www.alphaomegaalpha.org/wp-content/uploads/2021/08/2021_Summer_Elpern.pdf
        accessed: '2026-11-17'
        quote: >-
          Another quote ascribed to Osler for which the primary source is obscure is, “The good
          physician treats the
        claim_digest: sha256:4d68d7d8964856df14c54e5698c59f505415254d52fef720ef7fe0874c062b44
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://www.alphaomegaalpha.org/wp-content/uploads/2021/08/2021_Summer_Elpern.pdf
        accessed: '2026-11-17'
        quote: >-
          disease; the great physician treats the patient who has the disease.” Is it Osler or
          is it apocryphal?
        claim_digest: sha256:4d68d7d8964856df14c54e5698c59f505415254d52fef720ef7fe0874c062b44
      review_status: partial
    - source_id: bliss_1999_catalog
      locator: null
      support: unassessed
      note: >-
        The entry's Status section cites Bliss (1999) for Osler. The book was not opened (lending-restricted,
        search inside 403), so whether it gives a source for this saying is unchecked.
      reviews: []
      review_status: pending
    origin: source_summary
    reviews: []
    review_status: partial
  - id: bliss_biography
    text: 'Michael Bliss''s biography William Osler: A Life in Medicine was published in 1999.'
    claim_kind: historical_textual
    supports:
    - source_id: bliss_1999_catalog
      locator:
        kind: other
        value: Catalog record fields title, creator, publisher, date
      support: direct
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://archive.org/metadata/williamosler00mich/metadata
        accessed: '2026-11-17'
        quote: '"title":"William Osler : a life in medicine","creator":"Bliss, Michael"'
        claim_digest: sha256:7b6878ef0e79efdc00c3a759d4d17e2f132d50db4074ca97eb9b229d276e23db
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://archive.org/metadata/williamosler00mich/metadata
        accessed: '2026-11-17'
        quote: '"publisher":"Oxford ; New York : Oxford University Press","date":"1999"'
        claim_digest: sha256:7b6878ef0e79efdc00c3a759d4d17e2f132d50db4074ca97eb9b229d276e23db
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: institution_nih
    text: Ledley and Lusted's 1959 work is associated with the NIH.
    claim_kind: historical_textual
    supports:
    - source_id: ledley_lusted_1959
      locator: null
      support: unassessed
      note: >-
        The PubMed record of the 1959 paper gives no affiliation, and the paper itself was blocked.
        No opened source states an affiliation for either author in 1959.
      reviews: []
      review_status: pending
    origin: source_summary
    reviews: []
    review_status: pending
  mappings:
  - id: alignment_label
    statement: >-
      The entry reads a correct diagnosis as the alignment of a disease label with what is happening
      in the body, and misdiagnosis as the failure of that alignment.
    claim_ids:
    - diagnosis_definition
    - clinical_method
    targets:
    - property:alignment
    mapping_kind: interpretive_synthesis
    argument: >-
      A diagnosis names the disease identified from signs, symptoms and investigations, and the
      physician acts on that name. The entry reads a mismatch between the name given and the condition
      present as a failure of alignment between stated purpose and action.
    limits: >-
      The sources define diagnosis and describe how information is gathered. They do not frame
      diagnosis as alignment between a name and reality, and none of them states that treatment
      follows the name rather than the condition. That framing is this project's.
    review_status: pending
    reviews: []
  - id: non_fabrication_bias
    statement: >-
      The entry reads cognitive biases in diagnosis as producing a pattern that the evidence does
      not support.
    claim_ids:
    - croskerry_cognitive_errors
    - kahneman_biases
    targets:
    - property:non_fabrication
    mapping_kind: interpretive_synthesis
    argument: >-
      Croskerry describes diagnostic errors that arise from failed heuristics and biases, and
      Kahneman's book is largely about biases of intuition. The entry reads a diagnosis reached
      this way as structure generated where the evidence has none.
    limits: >-
      The readable Croskerry abstract does not name anchoring, premature closure or availability
      bias, and Kahneman's book was checked only for its subject. The sources call these errors
      and biases, not fabrication; reading them as fabrication is this project's interpretation.
    review_status: pending
    reviews: []
  - id: honesty_updating
    statement: >-
      The entry reads Bayesian revision of diagnostic probabilities as a demand for honest updating,
      and holding a diagnosis against contradicting results as dishonesty in the diagnostic process.
    claim_ids:
    - bayesian_updating
    - ledley_lusted_framework
    targets:
    - property:honesty
    mapping_kind: interpretive_synthesis
    argument: >-
      The National Academies describe diagnosis as updating probabilities as information is learned
      and formally revising the probabilities of the diseases under consideration. The entry reads
      a failure to revise as a mismatch between what is claimed and what is known.
    limits: >-
      The sources present Bayesian revision as a method that helps avoid cognitive bias, not as
      a matter of honesty. Calling persistence in a diagnosis dishonesty ascribes an intent the
      sources do not; that is this project's normative framing. Ledley and Lusted's paper was
      not read beyond its PubMed record.
    review_status: pending
    reviews: []
---

# Diagnosis

**Source**: Ledley & Lusted, "Reasoning Foundations of Medical Diagnosis," *Science* 130, 1959; Croskerry, *Academic Medicine* 78, 2003
**Institution**: NIH; Dalhousie University

## Finding

Diagnosis is the process of identifying a disease from its signs and symptoms. The Greek *diagignoskein* -- "to distinguish, to discern." The clinical method: history, examination, differential diagnosis, investigation. The Bayesian framework (Ledley & Lusted, 1959) treats diagnosis as iterative probability updating -- each test result shifts the probability of each diagnosis on the differential. A saying attributed to William Osler, though its primary source is obscure: "the great physician treats the patient who has the disease" -- the distinction between label and person.

## Pattern Mapping

**Alignment** -- Correct diagnosis aligns the name (disease label) with reality (what is happening in the body). Misdiagnosis is alignment failure: the name points one way, the body harbors another. Treatment follows the name, not the reality.

**Non-fabrication** -- Fabricated diagnosis names a disease that is not there. Anchoring bias, premature closure, availability bias -- each generates structure where none exists. The physician "sees" a pattern that the evidence does not support.

**Honesty** -- The Bayesian framework demands honest updating. Confirming evidence raises probability; disconfirming evidence lowers it. Holding a diagnosis despite contradictory results is dishonesty in the diagnostic process.

## Connections

- [[Bayesian Inference]] -- diagnosis IS Bayesian inference applied to the body
- [[Evidence-Based Medicine]] -- EBM provides the evidence base for diagnostic probability
- [[Epidemiology]] -- population patterns inform individual diagnostic priors
- [[Medical Error]] -- misdiagnosis is the single largest category of diagnostic error
- [[Placebo Effect]] -- the diagnosis itself can trigger physiological responses (nocebo)

## Status

Ledley & Lusted (1959). Kahneman, *Thinking, Fast and Slow* (2011) on cognitive biases. Croskerry (2003) on cognitive errors in diagnosis. Osler: Bliss, *William Osler: A Life in Medicine* (1999). The mapping to the five properties is this project's structural interpretation.

---

*The mapping to the five properties is this project's structural interpretation.*
