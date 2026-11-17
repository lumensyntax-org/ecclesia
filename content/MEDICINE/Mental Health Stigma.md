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
    Not reached: the full text of Corrigan, American Psychologist 59 (2004), which is behind the
    APA paywall, so only its PubMed record was read; whether that article itself sets out public,
    self and structural stigma is unchecked, and the three levels are checked against Rüsch, Angermeyer
    and Corrigan (2005) and Corrigan, Markowitz and Watson (2004) instead. The texts of Goffman
    (1963) and Bayer (1981) were not opened: both Internet Archive copies are lending-restricted,
    so only catalogue records were read, and for Bayer only the record of the 1987 Princeton reprint,
    which states the 1981 Basic Books original. The 1973 DSM decision is checked against Drescher
    (2015), not against Bayer or APA records. The entry does not identify 'Drevets et al., 1998'
    or 'Cannon et al., 2002'; the PubMed records of the four 1998 mood-disorder papers with Drevets
    as an author and the five 2002 schizophrenia papers with a Cannon as first author were read
    (abstracts only), and none of the Drevets abstracts mentions the hippocampus and none of the
    Cannon abstracts places brain differences before onset. The historical extent in 'throughout
    much of history' was not checked against any historical source. The Status sentence saying
    the K-A Gap framing is the project's interpretation is not a factual claim and is not listed.
    The WHO report, the Rüsch review and the Penn Almanac are long PDFs whose layout extraction
    interleaves columns; their saved texts (who_wmhr_2022_ro.txt, rusch_2005_ro.txt, penn_almanac_1968_ro.txt)
    are reading-order pdftotext extractions of the fetched PDFs with the same whitespace normalisation.
  review_status: partial
  reviews: []
  sources:
  - id: goffman_1963_catalog
    citation: >-
      Internet Archive catalogue record for Goffman E. Stigma; notes on the management of spoiled
      identity. Englewood Cliffs, N.J.: Prentice-Hall, 1963 (item stigmanotesonman0000goff).
    source_kind: other
    kind_note: >-
      Library catalogue record of an access-restricted lending copy. Only the bibliographic record
      was read, not the book.
    origin: external
    url: https://archive.org/details/stigmanotesonman0000goff
    academic_review:
      status: not_applicable
      note: Library catalogue record, not a scholarly text.
  - id: bayer_catalog
    citation: >-
      Internet Archive catalogue record for Bayer R. Homosexuality and American psychiatry: the
      politics of diagnosis. Princeton, N.J.: Princeton University Press, 1987 reprint (item homosexualityame00bayerich).
    source_kind: other
    kind_note: >-
      Library catalogue record of an access-restricted lending copy of the 1987 reprint. Only
      the bibliographic record was read, not the book.
    origin: external
    url: https://archive.org/details/homosexualityame00bayerich
    academic_review:
      status: not_applicable
      note: Library catalogue record, not a scholarly text.
  - id: corrigan_2004
    citation: >-
      Corrigan P. How stigma interferes with mental health care. Am Psychol 59(7):614-625, 2004.
      doi:10.1037/0003-066X.59.7.614.
    source_kind: academic_article
    origin: external
    url: https://doi.org/10.1037/0003-066X.59.7.614
    academic_review:
      status: not_documented
      note: This record does not document a peer-review process.
  - id: corrigan_2004_structural
    citation: >-
      Corrigan PW, Markowitz FE, Watson AC. Structural levels of mental illness stigma and discrimination.
      Schizophr Bull 30(3):481-491, 2004. doi:10.1093/oxfordjournals.schbul.a007096.
    source_kind: academic_article
    origin: external
    url: https://doi.org/10.1093/oxfordjournals.schbul.a007096
    academic_review:
      status: not_documented
      note: This record does not document a peer-review process.
  - id: rusch_2005
    citation: >-
      Rüsch N, Angermeyer MC, Corrigan PW. Mental illness stigma: concepts, consequences, and
      initiatives to reduce stigma. European Psychiatry 20:529-539, 2005. doi:10.1016/j.eurpsy.2005.04.004.
    source_kind: academic_article
    origin: external
    url: https://doi.org/10.1016/j.eurpsy.2005.04.004
    academic_review:
      status: not_documented
      note: This record does not document a peer-review process.
  - id: who_wmhr_2022
    citation: >-
      World Health Organization. World mental health report: transforming mental health for all.
      Geneva: WHO, 2022. ISBN 978-92-4-004933-8.
    source_kind: institutional_document
    origin: external
    url: >-
      https://iris.who.int/server/api/core/bitstreams/40e5a13a-fe50-4efa-b56d-6e8cf00d5bfa/content
    academic_review:
      status: not_applicable
      note: Publication of an international health agency, not a journal article.
  - id: who_policy_brief_2017
    citation: >-
      World Health Organization. Helping people with severe mental disorders live longer and healthier
      lives: policy brief. Geneva: WHO, 2017 (WHO/MSD/MER/17.7).
    source_kind: institutional_document
    origin: external
    url: >-
      https://cdn.who.int/media/docs/default-source/severe-mental-disorders/who-msd-mer-17-7-eng.pdf
    academic_review:
      status: not_applicable
      note: Publication of an international health agency, not a journal article.
  - id: drescher_2015
    citation: >-
      Drescher J. Out of DSM: Depathologizing Homosexuality. Behav Sci (Basel) 5(4):565-575, 2015.
      doi:10.3390/bs5040565.
    source_kind: academic_article
    origin: external
    url: https://doi.org/10.3390/bs5040565
    academic_review:
      status: not_documented
      note: This record does not document a peer-review process.
  - id: penn_almanac_1968
    citation: >-
      University of Pennsylvania Almanac, Volume 14, Number 6, March 1968: 'Erving Goffman Named
      Franklin Professor'.
    source_kind: institutional_document
    origin: external
    url: https://almanac.upenn.edu/archive/v14pdf/n06/031668.pdf
    academic_review:
      status: not_applicable
      note: University news bulletin, not a journal article.
  - id: drevets_1998
    citation: >-
      Drevets WC, Ongür D, Price JL. Neuroimaging abnormalities in the subgenual prefrontal cortex:
      implications for the pathophysiology of familial mood disorders. Mol Psychiatry 3(3):220-226,
      1998. doi:10.1038/sj.mp.4000370.
    source_kind: academic_article
    origin: external
    url: https://doi.org/10.1038/sj.mp.4000370
    academic_review:
      status: not_documented
      note: This record does not document a peer-review process.
  - id: ongur_1998
    citation: >-
      Ongür D, Drevets WC, Price JL. Glial reduction in the subgenual prefrontal cortex in mood
      disorders. Proc Natl Acad Sci U S A 95(22):13290-13295, 1998. doi:10.1073/pnas.95.22.13290.
    source_kind: academic_article
    origin: external
    url: https://doi.org/10.1073/pnas.95.22.13290
    academic_review:
      status: not_documented
      note: This record does not document a peer-review process.
  - id: cannon_2002_agp
    citation: >-
      Cannon TD, van Erp TG, Rosso IM, Huttunen M, Lönnqvist J, Pirkola T, Salonen O, Valanne
      L, Poutanen VP, Standertskjöld-Nordenstam CG. Fetal hypoxia and structural brain abnormalities
      in schizophrenic patients, their siblings, and controls. Arch Gen Psychiatry 59(1):35-41,
      2002. doi:10.1001/archpsyc.59.1.35.
    source_kind: academic_article
    origin: external
    url: https://doi.org/10.1001/archpsyc.59.1.35
    academic_review:
      status: not_documented
      note: This record does not document a peer-review process.
  - id: cannon_2002_pnas
    citation: >-
      Cannon TD, Thompson PM, van Erp TG, Toga AW, Poutanen VP, Huttunen M, Lonnqvist J, Standerskjold-Nordenstam
      CG, Narr KL, Khaledy M, Zoumalan CI, Dail R, Kaprio J. Cortex mapping reveals regionally
      specific patterns of genetic and disease-specific gray-matter deficits in twins discordant
      for schizophrenia. Proc Natl Acad Sci U S A 99(5):3228-3233, 2002. doi:10.1073/pnas.052023499.
    source_kind: academic_article
    origin: external
    url: https://doi.org/10.1073/pnas.052023499
    academic_review:
      status: not_documented
      note: This record does not document a peer-review process.
  claims:
  - id: goffman_book
    text: >-
      Erving Goffman's Stigma: Notes on the Management of Spoiled Identity was published in 1963.
    claim_kind: historical_textual
    supports:
    - source_id: goffman_1963_catalog
      locator:
        kind: other
        value: Catalogue record fields title, creator, date, publisher
      support: direct
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://archive.org/metadata/stigmanotesonman0000goff/metadata
        accessed: '2026-11-17'
        quote: '"creator":"Goffman, Erving","date":"1963"'
        claim_digest: sha256:4ea959580e0150aee73b55ad141d5806bf33f41a717576e56b2d95c7963f7078
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://archive.org/metadata/stigmanotesonman0000goff/metadata
        accessed: '2026-11-17'
        quote: '"title":"Stigma; notes on the management of spoiled identity"'
        claim_digest: sha256:4ea959580e0150aee73b55ad141d5806bf33f41a717576e56b2d95c7963f7078
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://archive.org/metadata/stigmanotesonman0000goff/metadata
        accessed: '2026-11-17'
        quote: '"publisher":"Englewood Cliffs, N.J., Prentice-Hall"'
        claim_digest: sha256:4ea959580e0150aee73b55ad141d5806bf33f41a717576e56b2d95c7963f7078
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: corrigan_article
    text: >-
      Corrigan's article 'How stigma interferes with mental health care' appeared in American
      Psychologist, volume 59, in 2004.
    claim_kind: historical_textual
    supports:
    - source_id: corrigan_2004
      locator:
        kind: other
        value: PubMed record 15491256, citation and title
      support: direct
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=15491256&rettype=abstract&retmode=text
        accessed: '2026-11-17'
        quote: Am Psychol. 2004 Oct;59(7):614-625.
        claim_digest: sha256:a773b9ed66426ce836cf34ff531fa9efcf38df91ce23a0942307fbc65610fede
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=15491256&rettype=abstract&retmode=text
        accessed: '2026-11-17'
        quote: How stigma interferes with mental health care. Corrigan P(1).
        claim_digest: sha256:a773b9ed66426ce836cf34ff531fa9efcf38df91ce23a0942307fbc65610fede
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: institution_goffman
    text: >-
      When Stigma was published in 1963 Goffman taught at the University of California, Berkeley;
      he was named a professor at the University of Pennsylvania in 1968.
    claim_kind: historical_textual
    supports:
    - source_id: penn_almanac_1968
      locator:
        kind: page
        value: pp. 1-2, notice 'Erving Goffman Named Franklin Professor'
      support: direct
      note: >-
        This is the corrected statement. The entry's Institution line gave the University of Pennsylvania,
        which Goffman joined only after this 1968 appointment, five years after the book.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://almanac.upenn.edu/archive/v14pdf/n06/031668.pdf
        accessed: '2026-11-17'
        quote: Volume 14, Number 6 March, 1968
        claim_digest: sha256:4b49d668d0923ed4ed8896114d5733ee92d36fffa21634c8fb28a15e1890809c
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://almanac.upenn.edu/archive/v14pdf/n06/031668.pdf
        accessed: '2026-11-17'
        quote: >-
          Dr. Erving Goffman, professor of sociology at the University of California at Berkeley,
          has been named Benjamin Franklin Professor of Anthropology and Sociology at the University
          of Pennsylvania.
        claim_digest: sha256:4b49d668d0923ed4ed8896114d5733ee92d36fffa21634c8fb28a15e1890809c
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://almanac.upenn.edu/archive/v14pdf/n06/031668.pdf
        accessed: '2026-11-17'
        quote: >-
          Dr. Goffman has taught at the University of California since 1958, while rising in rank
          from assistant professor to professor.
        claim_digest: sha256:4b49d668d0923ed4ed8896114d5733ee92d36fffa21634c8fb28a15e1890809c
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: institution_corrigan
    text: >-
      The 2004 American Psychologist article gives Corrigan's affiliation as the University of
      Chicago.
    claim_kind: historical_textual
    supports:
    - source_id: corrigan_2004
      locator:
        kind: other
        value: PubMed record 15491256, author information
      support: direct
      note: >-
        This is the corrected statement. The entry's Institution line gave the Illinois Institute
        of Technology.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=15491256&rettype=abstract&retmode=text
        accessed: '2026-11-17'
        quote: 'Author information: (1)University of Chicago.'
        claim_digest: sha256:34e13858db1e4bdfd2922ef209ff0fdff38c90fd49e7823ef18e12fbdb60c0e9
      review_status: partial
    - source_id: rusch_2005
      locator:
        kind: page
        value: p. 529, author affiliations
      support: partial
      note: >-
        A review received in December 2004 gives Corrigan's affiliation as the Illinois Institute
        of Technology. It shows the Institution line named his later affiliation, not the one
        on the cited article.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://resolve.cambridge.org/core/services/aop-cambridge-core/content/view/3AE7283F0F35980994B4BD71E92C3C08/S0924933800066943a.pdf/mental-illness-stigma-concepts-consequences-and-initiatives-to-reduce-stigma.pdf
        accessed: '2026-11-17'
        quote: >-
          Joint Center for Psychiatric Rehabilitation at Illinois Institute of Technology, and
          Chicago Consortium for Stigma Research
        claim_digest: sha256:34e13858db1e4bdfd2922ef209ff0fdff38c90fd49e7823ef18e12fbdb60c0e9
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://resolve.cambridge.org/core/services/aop-cambridge-core/content/view/3AE7283F0F35980994B4BD71E92C3C08/S0924933800066943a.pdf/mental-illness-stigma-concepts-consequences-and-initiatives-to-reduce-stigma.pdf
        accessed: '2026-11-17'
        quote: Received 10 December 2004
        claim_digest: sha256:34e13858db1e4bdfd2922ef209ff0fdff38c90fd49e7823ef18e12fbdb60c0e9
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: moral_failure
    text: Mental illness has been treated as moral failure throughout much of history.
    claim_kind: historical_textual
    supports:
    - source_id: who_wmhr_2022
      locator:
        kind: section
        value: Section on stigma (p. 67 of the report)
      support: partial
      note: >-
        The WHO describes present-day views in many communities. It says nothing about how widespread
        such views have been across history.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://iris.who.int/server/api/core/bitstreams/40e5a13a-fe50-4efa-b56d-6e8cf00d5bfa/content
        accessed: '2026-11-17'
        quote: >-
          In many communities, mental health conditions are not considered to be health issues,
          but are seen as a weakness of character, a punishment for immoral behaviour or the result
          of illicit drug taking or supernatural forces.
        claim_digest: sha256:f40219823634cd01eac67cedb008f2635a967e19c419ef83e1e5f2b869f5e932
      review_status: partial
    - source_id: rusch_2005
      locator:
        kind: section
        value: Section on the concept of stigma, and Table 1
      support: partial
      note: >-
        The review lists character weakness among public stereotypes and says that moral, psychosocial
        or medical descriptions vary over time. It does not say that moral framing has prevailed
        through much of history.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://resolve.cambridge.org/core/services/aop-cambridge-core/content/view/3AE7283F0F35980994B4BD71E92C3C08/S0924933800066943a.pdf/mental-illness-stigma-concepts-consequences-and-initiatives-to-reduce-stigma.pdf
        accessed: '2026-11-17'
        quote: >-
          Stereotype: Negative belief about a group such as Incompetence Character weakness Dangerousness
        claim_digest: sha256:f40219823634cd01eac67cedb008f2635a967e19c419ef83e1e5f2b869f5e932
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://resolve.cambridge.org/core/services/aop-cambridge-core/content/view/3AE7283F0F35980994B4BD71E92C3C08/S0924933800066943a.pdf/mental-illness-stigma-concepts-consequences-and-initiatives-to-reduce-stigma.pdf
        accessed: '2026-11-17'
        quote: >-
          whether they are described in moral, psychosocial or medical terms is influenced by
          societal discourse and usually varies over time
        claim_digest: sha256:f40219823634cd01eac67cedb008f2635a967e19c419ef83e1e5f2b869f5e932
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: dsm_1973
    text: >-
      In 1973 the American Psychiatric Association removed the diagnosis 'homosexuality' from
      the second edition of its Diagnostic and Statistical Manual.
    claim_kind: historical_textual
    supports:
    - source_id: drescher_2015
      locator:
        kind: section
        value: Abstract; the section on the 1973 decision; the section on DSM-III
      support: direct
      note: >-
        The decision did not end every related diagnosis: DSM-II put Sexual Orientation Disturbance
        in its place, and ego-dystonic homosexuality stayed in DSM-III until DSM-III-R in 1987.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://pmc.ncbi.nlm.nih.gov/articles/PMC4695779/
        accessed: '2026-11-17'
        quote: >-
          In 1973, the American Psychiatric Association (APA) removed the diagnosis of “homosexuality”
          from the second edition of its Diagnostic and Statistical Manual (DSM).
        claim_digest: sha256:5928614cf59706dcc6575c072fe9249d4632aa9fabe1eb97c879d239d074d13b
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://pmc.ncbi.nlm.nih.gov/articles/PMC4695779/
        accessed: '2026-11-17'
        quote: >-
          in December 1973, APA’s Board of Trustees (BOT) voted to remove homosexuality from the
          DSM.
        claim_digest: sha256:5928614cf59706dcc6575c072fe9249d4632aa9fabe1eb97c879d239d074d13b
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://pmc.ncbi.nlm.nih.gov/articles/PMC4695779/
        accessed: '2026-11-17'
        quote: >-
          For in “homosexuality’s” place, the DSM-II contained a new diagnosis: Sexual Orientation
          Disturbance (SOD).
        claim_digest: sha256:5928614cf59706dcc6575c072fe9249d4632aa9fabe1eb97c879d239d074d13b
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://pmc.ncbi.nlm.nih.gov/articles/PMC4695779/
        accessed: '2026-11-17'
        quote: ego-dystonic homosexuality was removed from the next revision, DSM-III-R, in 1987
        claim_digest: sha256:5928614cf59706dcc6575c072fe9249d4632aa9fabe1eb97c879d239d074d13b
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: bayer_book
    text: Ronald Bayer's Homosexuality and American Psychiatry was first published in 1981.
    claim_kind: historical_textual
    supports:
    - source_id: bayer_catalog
      locator:
        kind: other
        value: Catalogue record fields title, creator, description
      support: direct
      note: The record is for the 1987 Princeton reprint; it states the 1981 Basic Books original.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://archive.org/metadata/homosexualityame00bayerich/metadata
        accessed: '2026-11-17'
        quote: >-
          "title":"Homosexuality and American psychiatry : the politics of diagnosis","creator":"Bayer,
          Ronald"
        claim_digest: sha256:378cabdc533e423ec2ec005b4743b53e96bd9ea300c6572e9660bea8c683d05a
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://archive.org/metadata/homosexualityame00bayerich/metadata
        accessed: '2026-11-17'
        quote: 'Reprint. Originally published: New York : Basic Books, c1981'
        claim_digest: sha256:378cabdc533e423ec2ec005b4743b53e96bd9ea300c6572e9660bea8c683d05a
      review_status: partial
    - source_id: drescher_2015
      locator:
        kind: other
        value: Reference 1
      support: direct
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://pmc.ncbi.nlm.nih.gov/articles/PMC4695779/
        accessed: '2026-11-17'
        quote: >-
          Bayer R. Homosexuality and American Psychiatry: The Politics of Diagnosis. Basic Books;
          New York, NY, USA: 1981.
        claim_digest: sha256:378cabdc533e423ec2ec005b4743b53e96bd9ea300c6572e9660bea8c683d05a
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: who_mortality_gap
    text: >-
      The WHO reports that people with severe mental health conditions die on average 10 to 20
      years earlier than the general population.
    claim_kind: empirical
    supports:
    - source_id: who_wmhr_2022
      locator:
        kind: section
        value: Section 3.1.2 Mortality; Chapter 4 summary; title page
      support: direct
      note: >-
        This is the corrected statement. The entry said 10-25 years; the 2022 report cited in
        the Status section gives 10 to 20 years.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://iris.who.int/server/api/core/bitstreams/40e5a13a-fe50-4efa-b56d-6e8cf00d5bfa/content
        accessed: '2026-11-17'
        quote: >-
          People with severe mental health conditions – including schizophrenia and bipolar disorder
          – die on average 10 to 20 years earlier than the general population (115).
        claim_digest: sha256:98fac7788115aac32dcb44cd935d1655546ea6c2097fdc245572af25f85dae0f
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://iris.who.int/server/api/core/bitstreams/40e5a13a-fe50-4efa-b56d-6e8cf00d5bfa/content
        accessed: '2026-11-17'
        quote: © World Health Organization 2022
        claim_digest: sha256:98fac7788115aac32dcb44cd935d1655546ea6c2097fdc245572af25f85dae0f
      review_status: partial
    - source_id: who_policy_brief_2017
      locator:
        kind: page
        value: p. 1, key facts
      support: direct
      note: The 2017 WHO policy brief gives the same range, not 10-25 years.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://cdn.who.int/media/docs/default-source/severe-mental-disorders/who-msd-mer-17-7-eng.pdf
        accessed: '2026-11-17'
        quote: >-
          People with severe mental disorders die on average 10-20 years earlier than the general
          population.
        claim_digest: sha256:98fac7788115aac32dcb44cd935d1655546ea6c2097fdc245572af25f85dae0f
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: physical_causes
    text: Most of these early deaths are from preventable or untreated physical conditions.
    claim_kind: empirical
    supports:
    - source_id: who_wmhr_2022
      locator:
        kind: section
        value: Section 3.1.2 Mortality; Chapter 4 summary
      support: direct
      note: >-
        The WHO's words are 'preventable diseases' and 'unrecognized and untreated physical health
        conditions'; the entry's word is 'treatable'.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://iris.who.int/server/api/core/bitstreams/40e5a13a-fe50-4efa-b56d-6e8cf00d5bfa/content
        accessed: '2026-11-17'
        quote: >-
          Most of these deaths are due to preventable diseases, especially cardiovascular disease,
          respiratory disease and infection, which are more common in people with mental health
          conditions.
        claim_digest: sha256:87c8472d9793b9bfb2a1de07086be9b776ee793011861c55c65846b801957e0b
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://iris.who.int/server/api/core/bitstreams/40e5a13a-fe50-4efa-b56d-6e8cf00d5bfa/content
        accessed: '2026-11-17'
        quote: >-
          People living with severe mental health conditions die 10–20 years earlier than the
          general population, most often through unrecognized and untreated physical health conditions.
        claim_digest: sha256:87c8472d9793b9bfb2a1de07086be9b776ee793011861c55c65846b801957e0b
      review_status: partial
    - source_id: who_policy_brief_2017
      locator:
        kind: page
        value: p. 1, key facts
      support: direct
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://cdn.who.int/media/docs/default-source/severe-mental-disorders/who-msd-mer-17-7-eng.pdf
        accessed: '2026-11-17'
        quote: >-
          Most deaths are due to preventable physical diseases, especially cardiovascular disease,
          respiratory disease and infections.
        claim_digest: sha256:87c8472d9793b9bfb2a1de07086be9b776ee793011861c55c65846b801957e0b
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: mortality_factors
    text: >-
      The WHO counts stigma and discrimination among several contributing factors in the premature
      mortality of people with severe mental disorders.
    claim_kind: empirical
    supports:
    - source_id: who_policy_brief_2017
      locator:
        kind: page
        value: p. 2, 'Why do people with severe mental disorders die early?'
      support: direct
      note: >-
        This is the corrected statement. The entry said the gap was driven by discrimination in
        healthcare access. The brief lists stigma and discrimination as one social factor beside
        individual factors (severity, inactivity, diet, substance use) and health-system factors
        (policies, financing, information systems, fragmented services).
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://cdn.who.int/media/docs/default-source/severe-mental-disorders/who-msd-mer-17-7-eng.pdf
        accessed: '2026-11-17'
        quote: Why do people with severe mental disorders die early?
        claim_digest: sha256:0a5fa542ec9c54e29702e9cf57bfc1a325293eae9957f97f8f1bc4a556391693
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://cdn.who.int/media/docs/default-source/severe-mental-disorders/who-msd-mer-17-7-eng.pdf
        accessed: '2026-11-17'
        quote: Fragmented and poor quality services SOCIAL FACTORS • Stigma and discrimination
        claim_digest: sha256:0a5fa542ec9c54e29702e9cf57bfc1a325293eae9957f97f8f1bc4a556391693
      review_status: partial
    - source_id: who_wmhr_2022
      locator:
        kind: section
        value: Section 3.1.2 Mortality
      support: partial
      note: >-
        The report's mortality section names medication side effects, exposure to risk factors,
        neglect of physical health in fragmented services and diagnostic overshadowing. It does
        not name stigma or discrimination there.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://iris.who.int/server/api/core/bitstreams/40e5a13a-fe50-4efa-b56d-6e8cf00d5bfa/content
        accessed: '2026-11-17'
        quote: >-
          Side effects of medications for severe mental health conditions can have a role in premature
          mortality
        claim_digest: sha256:0a5fa542ec9c54e29702e9cf57bfc1a325293eae9957f97f8f1bc4a556391693
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://iris.who.int/server/api/core/bitstreams/40e5a13a-fe50-4efa-b56d-6e8cf00d5bfa/content
        accessed: '2026-11-17'
        quote: >-
          once a person is channelled into a mental health service, their physical health too
          often gets neglected
        claim_digest: sha256:0a5fa542ec9c54e29702e9cf57bfc1a325293eae9957f97f8f1bc4a556391693
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://iris.who.int/server/api/core/bitstreams/40e5a13a-fe50-4efa-b56d-6e8cf00d5bfa/content
        accessed: '2026-11-17'
        quote: >-
          the signs and symptoms of physical illness are often misattributed to a concurrent mental
          health condition in what is known as “diagnostic overshadowing”
        claim_digest: sha256:0a5fa542ec9c54e29702e9cf57bfc1a325293eae9957f97f8f1bc4a556391693
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: stigma_levels
    text: >-
      Mental illness stigma is described at a public level (reactions and discrimination by others),
      a self level (stigmatizing attitudes turned against oneself) and a structural level (institutional
      policies that restrict opportunities).
    claim_kind: empirical
    supports:
    - source_id: rusch_2005
      locator:
        kind: section
        value: Abstract; sections on public stigma, self-stigma and consequences of stigma
      support: direct
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://resolve.cambridge.org/core/services/aop-cambridge-core/content/view/3AE7283F0F35980994B4BD71E92C3C08/S0924933800066943a.pdf/mental-illness-stigma-concepts-consequences-and-initiatives-to-reduce-stigma.pdf
        accessed: '2026-11-17'
        quote: >-
          Persons with mental illness frequently encounter public stigma and may suffer from self-stigma.
        claim_digest: sha256:fa4296b52f6dbe96132824b46d9914041619d78281b972a111c66a0a496c1256
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://resolve.cambridge.org/core/services/aop-cambridge-core/content/view/3AE7283F0F35980994B4BD71E92C3C08/S0924933800066943a.pdf/mental-illness-stigma-concepts-consequences-and-initiatives-to-reduce-stigma.pdf
        accessed: '2026-11-17'
        quote: >-
          Self-stigma refers to the reactions of individuals who belong to a stigmatized group
          and turn the stigmatizing attitudes against themselves
        claim_digest: sha256:fa4296b52f6dbe96132824b46d9914041619d78281b972a111c66a0a496c1256
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://resolve.cambridge.org/core/services/aop-cambridge-core/content/view/3AE7283F0F35980994B4BD71E92C3C08/S0924933800066943a.pdf/mental-illness-stigma-concepts-consequences-and-initiatives-to-reduce-stigma.pdf
        accessed: '2026-11-17'
        quote: >-
          Second, structural discrimination includes private and public institutions that intentionally
          or unintentionally restrict opportunities of persons with mental illness
        claim_digest: sha256:fa4296b52f6dbe96132824b46d9914041619d78281b972a111c66a0a496c1256
      review_status: partial
    - source_id: corrigan_2004_structural
      locator:
        kind: section
        value: Abstract
      support: direct
      note: Supports the structural level only.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=15631241&rettype=abstract&retmode=text
        accessed: '2026-11-17'
        quote: >-
          Structural, or institutional, discrimination includes the policies of private and governmental
          institutions that intentionally restrict the opportunities of people with mental illness.
        claim_digest: sha256:fa4296b52f6dbe96132824b46d9914041619d78281b972a111c66a0a496c1256
      review_status: partial
    - source_id: corrigan_2004
      locator:
        kind: section
        value: Abstract
      support: partial
      note: >-
        The abstract of the article the entry cites names two harms of stigma, to self-esteem
        and to social opportunities. It does not set out the three levels; the full text was not
        reached.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=15491256&rettype=abstract&retmode=text
        accessed: '2026-11-17'
        quote: >-
          Stigma yields 2 kinds of harm that may impede treatment participation: It diminishes
          self-esteem and robs people of social opportunities.
        claim_digest: sha256:fa4296b52f6dbe96132824b46d9914041619d78281b972a111c66a0a496c1256
      review_status: partial
    - source_id: who_wmhr_2022
      locator:
        kind: section
        value: Section on stigma (p. 67 of the report)
      support: partial
      note: Supports the self level only.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://iris.who.int/server/api/core/bitstreams/40e5a13a-fe50-4efa-b56d-6e8cf00d5bfa/content
        accessed: '2026-11-17'
        quote: >-
          In some cases, they can internalize negative messages and stereotypes and apply them
          to themselves in what is known as self-stigma.
        claim_digest: sha256:fa4296b52f6dbe96132824b46d9914041619d78281b972a111c66a0a496c1256
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: neuro_correlates
    text: >-
      Measurable neurobiological correlates of mood disorders have been reported, though the 1998
      work cited describes their neurobiology as little known.
    claim_kind: empirical
    supports:
    - source_id: ongur_1998
      locator:
        kind: section
        value: Abstract
      support: direct
      note: >-
        This is the corrected statement. The entry said 'the neurobiological substrate is known'.
        This paper, with Drevets as co-author, reports a measured correlate and says little is
        known about the neurobiology of mood disorders. The schizophrenia abstracts likewise say
        the relation of brain changes to their causes remains to be established (see schizophrenia_structure).
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=9789081&rettype=abstract&retmode=text
        accessed: '2026-11-17'
        quote: >-
          Mood disorders are among the most common neuropsychiatric illnesses, yet little is known
          about their neurobiology.
        claim_digest: sha256:5035ff860f2bc8074cbc48e79423d758ddec91272a9987c931dc78cc8216afb7
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=9789081&rettype=abstract&retmode=text
        accessed: '2026-11-17'
        quote: >-
          Consistent with neuroimaging findings, cortical volume was reduced in area sg24 in subjects
          with familial mood disorders.
        claim_digest: sha256:5035ff860f2bc8074cbc48e79423d758ddec91272a9987c931dc78cc8216afb7
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: depression_sgpfc
    text: >-
      Drevets et al. (1998) report reduced grey matter volume of the subgenual prefrontal cortex
      in major depressive disorder and bipolar disorder.
    claim_kind: empirical
    supports:
    - source_id: drevets_1998
      locator:
        kind: section
        value: Abstract
      support: direct
      note: >-
        This is the corrected statement. The entry attributed hippocampal changes to Drevets et
        al. (1998). The paper is about the subgenual prefrontal cortex, and none of the four 1998
        mood-disorder abstracts with Drevets as an author mentions the hippocampus. Whether hippocampal
        changes occur in depression was not checked against any other source.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=9672897&rettype=abstract&retmode=text
        accessed: '2026-11-17'
        quote: >-
          Neuroimaging abnormalities in the subgenual prefrontal cortex: implications for the
          pathophysiology of familial mood disorders.
        claim_digest: sha256:ca314ff82409cbbc4d12d3ea8d3b793dc3db5109dcbb4dee926d94fcf5311273
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=9672897&rettype=abstract&retmode=text
        accessed: '2026-11-17'
        quote: >-
          we demonstrated that the mean grey matter volume of this cortex is abnormally reduced
          in subjects with major depressive disorder (MDD) and bipolar disorder, irrespective
          of their treatment status or current mood state
        claim_digest: sha256:ca314ff82409cbbc4d12d3ea8d3b793dc3db5109dcbb4dee926d94fcf5311273
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: schizophrenia_structure
    text: Cannon et al. (2002) report structural brain differences in schizophrenia.
    claim_kind: empirical
    supports:
    - source_id: cannon_2002_agp
      locator:
        kind: section
        value: Abstract, background and conclusions
      support: direct
      note: >-
        This is the corrected statement. The entry said the differences are detectable before
        onset. The study compares patients, their non-psychotic siblings and controls; it does
        not measure anyone before onset. None of the 2002 schizophrenia abstracts with a Cannon
        as first author places brain differences before onset; the Dunedin birth-cohort paper
        (Cannon M et al., 2002) reports childhood developmental impairments, not brain structure.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=11779280&rettype=abstract&retmode=text
        accessed: '2026-11-17'
        quote: >-
          Cortical gray matter reductions and cerebrospinal fluid (CSF) increases are robust correlates
          of schizophrenia, but their relationships to obstetric and other etiologic risk factors
          remain to be established.
        claim_digest: sha256:23b5e07826e5c601a043be6761cf55ab63f0b07f74d38248e925217a4c2473c6
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=11779280&rettype=abstract&retmode=text
        accessed: '2026-11-17'
        quote: >-
          Fetal hypoxia is associated with greater structural brain abnormalities among schizophrenic
          patients and their nonschizophrenic siblings than among controls at low genetic risk
          for schizophrenia.
        claim_digest: sha256:23b5e07826e5c601a043be6761cf55ab63f0b07f74d38248e925217a4c2473c6
      review_status: partial
    - source_id: cannon_2002_pnas
      locator:
        kind: section
        value: Abstract
      support: direct
      note: >-
        Gray-matter deficits are reported in patients and, in part, in unaffected co-twins; this
        is a genetic-liability finding, not a finding before onset.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=11867725&rettype=abstract&retmode=text
        accessed: '2026-11-17'
        quote: >-
          Some unaffected first-degree relatives of schizophrenics also manifest cortical gray-matter
          deficits
        claim_digest: sha256:23b5e07826e5c601a043be6761cf55ab63f0b07f74d38248e925217a4c2473c6
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=11867725&rettype=abstract&retmode=text
        accessed: '2026-11-17'
        quote: >-
          A map encoding the average differences between schizophrenia patients and their unaffected
          MZ co-twins revealed deficits primarily in dorsolateral prefrontal cortex, superior
          temporal gyrus, and superior parietal lobule.
        claim_digest: sha256:23b5e07826e5c601a043be6761cf55ab63f0b07f74d38248e925217a4c2473c6
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  mappings:
  - id: alignment_ka_gap
    statement: >-
      The entry reads mental illness stigma as a knowledge-action gap: measurable neurobiological
      correlates are reported, while mental health conditions are still treated as weakness of
      character.
    claim_ids:
    - neuro_correlates
    - depression_sgpfc
    - schizophrenia_structure
    - moral_failure
    - stigma_levels
    targets:
    - property:alignment
    mapping_kind: interpretive_synthesis
    argument: >-
      The cited papers report brain differences in mood disorders and schizophrenia, and the WHO
      and Rüsch et al. report that mental health conditions are seen in many communities as a
      weakness of character. The entry reads the coexistence of the two as action contradicting
      knowledge.
    limits: >-
      The sources report correlates, not a known substrate: Ongür, Drevets and Price write that
      little is known about the neurobiology of mood disorders, and Cannon et al. that the causes
      of the brain changes remain to be established. The Pattern Mapping sentence 'We know mental
      illnesses are medical conditions with biological substrates' goes beyond them. No source
      frames stigma as a knowledge-action gap or shows that those who stigmatize know the biology.
      The framing is this project's.
    review_status: pending
    reviews: []
  - id: honesty_naming
    statement: >-
      The entry reads treating mental illness as moral weakness, rather than as illness, as a
      failure of honesty.
    claim_ids:
    - moral_failure
    - who_mortality_gap
    - mortality_factors
    targets:
    - property:honesty
    mapping_kind: interpretive_synthesis
    argument: >-
      The WHO reports that in many communities mental health conditions are not considered health
      issues, and it counts stigma and discrimination among the factors in the early deaths of
      people with severe mental disorders. The entry reads the refusal to name the condition as
      illness as a claim that does not match what is known.
    limits: >-
      No source calls stigma dishonest. Calling it dishonesty ascribes knowledge and intent to
      those who stigmatize, which no cited source establishes; the sources describe stereotypes,
      prejudice and discrimination. The WHO lists stigma as one factor among several in premature
      mortality, not as its driver.
    review_status: pending
    reviews: []
  - id: humility_authority
    statement: >-
      The entry reads stigmatizing judgments such as 'you should just snap out of it' as authority
      claimed over another person's inner experience.
    claim_ids:
    - stigma_levels
    - moral_failure
    targets:
    - property:humility
    mapping_kind: interpretive_synthesis
    argument: >-
      Public stigma, as Rüsch et al. describe it, includes stereotypes such as character weakness
      and the discrimination that follows from them. The entry reads such a judgment about another
      person's condition as authority exercised outside its legitimate scope.
    limits: >-
      The quoted phrase is the entry's, not a source's. The sources describe stereotypes, prejudice
      and discrimination; none frames them as a claim of authority over another's experience.
      Reading stigma as a violation of humility is this project's interpretation.
    review_status: pending
    reviews: []
---

# Mental Health Stigma

**Source**: Goffman, *Stigma: Notes on the Management of Spoiled Identity*, 1963; Corrigan, *American Psychologist* 59, 2004
**Institution**: University of California, Berkeley; University of Chicago

## Finding

Mental illness has been treated as moral failure throughout much of history. The DSM removed homosexuality from its disorders list only in 1973. The WHO reports that people with severe mental illness die 10-20 years earlier than the general population, largely from treatable physical conditions -- a mortality gap to which stigma and discrimination contribute among other factors. Stigma operates at multiple levels: public (social discrimination), self (internalized shame), and structural (policies disadvantaging the mentally ill). Neurobiological correlates have been measured: depression involves measurable changes in the subgenual prefrontal cortex (Drevets et al., 1998), schizophrenia involves structural brain differences (Cannon et al., 2002).

## Pattern Mapping

**Knowledge-Action Gap** -- The central structural feature. We know mental illnesses are medical conditions with biological substrates. Society acts as though they are character failures. The knowledge exists; the action contradicts it.

**Honesty** -- Stigma is sustained by the refusal to name mental illness as illness. When a society knows the biology and still treats the condition as moral weakness, it is not ignorant -- it is dishonest.

**Humility** violated -- Stigma claims authority over another person's inner experience. "You should just snap out of it" exercises authority over a domain (another's neurochemistry) where no such authority is legitimate.

## Connections

- [[Mental Illness as Pattern Violation]] -- the Shadow companion: medical reality beneath the stigma
- [[Systemic Racism]] -- both: K-A Gaps embedded in institutions
- [[Gaslighting]] -- stigma gaslights the mentally ill: "your suffering is your fault"
- [[Diagnosis]] -- stigma distorts diagnosis by attaching moral weight to medical categories
- [[Informed Consent]] -- stigma undermines the mentally ill person's capacity to be treated as an autonomous agent

## Status

Goffman (1963). Bayer, *Homosexuality and American Psychiatry* (1981). WHO mortality gap (2022). Corrigan (2004). The K-A Gap framing is this project's structural interpretation.

---

*The mapping to the five properties is this project's structural interpretation.*
