---
domain: medicine
properties: [honesty, proportion, alignment, humility, non_fabrication]
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
    Checked against primary sources: the 2007 guilty pleas (U.S. Attorney's release and the court's
    opinion accepting the plea agreements), the 1980 letter itself, the 2020 DOJ release, the
    2023 CDC page and the House hearing record. Not reached: the content of Keefe's Empire of
    Pain. Only the publisher's catalogue page was opened, so no Finding claim was checked against
    the book. The current CDC page returned HTTP 403, so an archived copy of the 2023 version
    (last reviewed August 8, 2023) was used. The AlixPartners cash-transfers report filed in the
    Purdue bankruptcy (Doc 654-1) is attached to the House record, but its text layer is font-encoded
    and was not read. Its figures were taken only from the letter by David Sackler's counsel that
    restates them. Also not opened: Purdue's own promotional materials, the 2020 plea and settlement
    agreements (only the press release was read), an official copy of the 2007 Agreed Statement
    of Facts (it was read only as quoted in the court opinion and the U.S. Attorney's release),
    and an FDA record of the approval date. The claim that prescription restrictions drove people
    to heroin and fentanyl is unassessed. The Pattern Mapping's figures (prescriptions tripled
    1999-2011, enough to supply every American adult; sales representatives paid on volume) and
    the Institution line were not checked.
  review_status: partial
  reviews: []
  sources:
  - id: usao_2007
    citation: >-
      United States Attorney's Office, Western District of Virginia. The Purdue Frederick Company,
      Inc. and top executives plead guilty to misbranding OxyContin; will pay over $600 million.
      News release, May 10, 2007.
    source_kind: institutional_document
    origin: external
    url: http://www.usdoj.gov/usao/vaw/press_releases/purdue_frederick_10may2007.html
    academic_review:
      status: not_applicable
      note: Government press release or agency page, not a journal article.
  - id: vawd_2007
    citation: >-
      United States v. The Purdue Frederick Company, Inc., et al., Case No. 1:07CR00029, Opinion
      and Order (W.D. Va., Abingdon Division, Jones, C.J.), entered July 23, 2007.
    source_kind: institutional_document
    origin: external
    url: https://www.vawd.uscourts.gov/OPINIONS/JONES/107CR00029.PDF
    academic_review:
      status: not_applicable
      note: Court opinion, not a journal article.
  - id: vanzee_2009
    citation: >-
      Van Zee A. The promotion and marketing of OxyContin: commercial triumph, public health tragedy.
      Am J Public Health 99(2):221-227, 2009.
    source_kind: academic_article
    origin: external
    url: https://doi.org/10.2105/AJPH.2007.131714
    academic_review:
      status: not_documented
      note: This record does not document a peer-review process.
  - id: porter_jick_1980
    citation: >-
      Porter J, Jick H. Addiction rare in patients treated with narcotics. N Engl J Med 302(2):123,
      1980.
    source_kind: academic_article
    origin: external
    url: https://doi.org/10.1056/NEJM198001103020221
    academic_review:
      status: not_documented
      note: This record does not document a peer-review process.
  - id: leung_2017
    citation: >-
      Leung PTM, Macdonald EM, Stanbrook MB, Dhalla IA, Juurlink DN. A 1980 letter on the risk
      of opioid addiction. N Engl J Med 376(22):2194-2195, 2017.
    source_kind: academic_article
    origin: external
    url: https://doi.org/10.1056/NEJMc1700150
    academic_review:
      status: not_documented
      note: This record does not document a peer-review process.
  - id: cdc_2023
    citation: >-
      Centers for Disease Control and Prevention. Understanding the Opioid Overdose Epidemic.
      Web page, last reviewed August 8, 2023.
    source_kind: institutional_document
    origin: external
    url: https://www.cdc.gov/opioids/basics/epidemic.html
    academic_review:
      status: not_applicable
      note: Government press release or agency page, not a journal article.
  - id: doj_2020
    citation: >-
      U.S. Department of Justice, Office of Public Affairs. Justice Department Announces Global
      Resolution of Criminal and Civil Investigations with Opioid Manufacturer Purdue Pharma and
      Civil Settlement with Members of the Sackler Family. Press release 20-1136, October 21,
      2020.
    source_kind: institutional_document
    origin: external
    url: >-
      https://www.justice.gov/archives/opa/pr/justice-department-announces-global-resolution-criminal-and-civil-investigations-opioid
    academic_review:
      status: not_applicable
      note: Government press release or agency page, not a journal article.
  - id: house_2021
    citation: >-
      Letter from Roberto Finzi (Paul, Weiss), counsel for David Sackler, to Chairwoman Carolyn
      B. Maloney, House Committee on Oversight and Reform, February 1, 2021, answering a Question
      for the Record after the hearing of December 17, 2020. House hearing document HHRG-116-GO00-20201217-SD009.
    source_kind: other
    kind_note: >-
      A party's own submission to a congressional committee, published in the committee's hearing
      documents. It quotes the chair's question and restates figures from the AlixPartners report
      filed in the Purdue bankruptcy, which it attaches as Exhibit A.
    origin: external
    url: https://docs.house.gov/meetings/GO/GO00/20201217/111120/HHRG-116-GO00-20201217-SD009.pdf
    academic_review:
      status: not_applicable
      note: >-
        Letter submitted to a congressional committee and published in its hearing documents,
        not a journal article.
  - id: cicero_2014
    citation: >-
      Cicero TJ, Ellis MS, Surratt HL, Kurtz SP. The changing face of heroin use in the United
      States: a retrospective analysis of the past 50 years. JAMA Psychiatry 71(7):821-826, 2014.
    source_kind: academic_article
    origin: external
    url: https://doi.org/10.1001/jamapsychiatry.2014.366
    academic_review:
      status: not_documented
      note: This record does not document a peer-review process.
  - id: keefe_prh
    citation: >-
      Penguin Random House. Empire of Pain: The Secret History of the Sackler Dynasty, by Patrick
      Radden Keefe. Publisher's catalogue page.
    source_kind: institutional_document
    origin: external
    url: https://www.penguinrandomhouse.com/books/612861/empire-of-pain-by-patrick-radden-keefe/
    academic_review:
      status: not_applicable
      note: Publisher's catalogue page, cited only for the publication date.
  claims:
  - id: oxycontin_launch
    text: Purdue Pharma introduced OxyContin in 1996.
    claim_kind: historical_textual
    supports:
    - source_id: vanzee_2009
      locator:
        kind: paragraph
        value: Opening paragraph
      support: direct
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://pmc.ncbi.nlm.nih.gov/articles/PMC2622774/
        accessed: '2026-11-17'
        quote: >-
          When Purdue Pharma introduced OxyContin in 1996, it was aggressively marketed and highly
          promoted.
        claim_digest: sha256:2c2f6052285b58f3d762501f00b7b0ff08a61b254621e506d4319b54de76dfa3
      review_status: partial
    - source_id: vawd_2007
      locator:
        kind: page
        value: p. 2, quoting the Information
      support: partial
      note: >-
        The court record dates the charged marketing from about December 12, 1995, not from 1996.
        Whether 1995 marks FDA approval and 1996 the commercial launch was not checked against
        an FDA record.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://www.vawd.uscourts.gov/OPINIONS/JONES/107CR00029.PDF
        accessed: '2026-11-17'
        quote: >-
          [b]eginning on or about December 12, 1995, and continuing until on or about June 30,
          2001, certain PURDUE supervisors and employees, with the intent to defraud or mislead,
          marketed and promoted OxyContin
        claim_digest: sha256:2c2f6052285b58f3d762501f00b7b0ff08a61b254621e506d4319b54de76dfa3
      review_status: partial
    - source_id: leung_2017
      locator:
        kind: paragraph
        value: Results paragraph
      support: contradicts
      note: >-
        Leung et al. put the introduction of OxyContin in 1995, while Van Zee gives 1996. The
        prose was left as it is, because no opened source settles whether the two dates refer
        to approval or to launch.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://web.archive.org/web/20170603173019/http://www.nejm.org/doi/full/10.1056/NEJMc1700150
        accessed: '2026-11-17'
        quote: >-
          noted a sizable increase after the introduction of OxyContin (a long-acting formulation
          of oxycodone) in 1995
        claim_digest: sha256:2c2f6052285b58f3d762501f00b7b0ff08a61b254621e506d4319b54de76dfa3
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: low_risk_marketing
    text: >-
      Purdue marketed OxyContin as less addictive and less subject to abuse than other pain medications,
      and as carrying a very small risk of addiction, when no medical research supported these
      claims.
    claim_kind: historical_textual
    supports:
    - source_id: usao_2007
      locator:
        kind: paragraph
        value: Second paragraph
      support: direct
      note: >-
        The company that pleaded guilty was The Purdue Frederick Company, Inc., one of the related
        Purdue entities that market OxyContin, not Purdue Pharma L.P. itself.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://web.archive.org/web/20071227054040/http://www.usdoj.gov/usao/vaw/press_releases/purdue_frederick_10may2007.html
        accessed: '2026-11-17'
        quote: >-
          Purdue fraudulently marketed OxyContin by falsely claiming that OxyContin was less addictive,
          less subject to abuse, and less likely to cause withdrawal symptoms than other pain
          medications when there was no medical research to support these claims
        claim_digest: sha256:0357ba0506c58e4535bb3271bf5995d416b0647bbe1de518044db5ea9d385de1
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://web.archive.org/web/20071227054040/http://www.usdoj.gov/usao/vaw/press_releases/purdue_frederick_10may2007.html
        accessed: '2026-11-17'
        quote: >-
          The Purdue Frederick Company, Inc. and Purdue Pharma, L.P. are part of a worldwide group
          of related and associated entities engaged in the pharmaceutical business.
        claim_digest: sha256:0357ba0506c58e4535bb3271bf5995d416b0647bbe1de518044db5ea9d385de1
      review_status: partial
    - source_id: vanzee_2009
      locator:
        kind: section
        value: Misrepresenting the Risk of Addiction
      support: direct
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://pmc.ncbi.nlm.nih.gov/articles/PMC2622774/
        accessed: '2026-11-17'
        quote: Purdue claimed that the risk of addiction from OxyContin was extremely small.
        claim_digest: sha256:0357ba0506c58e4535bb3271bf5995d416b0647bbe1de518044db5ea9d385de1
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://pmc.ncbi.nlm.nih.gov/articles/PMC2622774/
        accessed: '2026-11-17'
        quote: >-
          Purdue trained its sales representatives to carry the message that the risk of addiction
          was “less than one percent.”
        claim_digest: sha256:0357ba0506c58e4535bb3271bf5995d416b0647bbe1de518044db5ea9d385de1
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: porter_jick_cited
    text: >-
      Purdue cited the 1980 Porter and Jick letter in NEJM, among other studies, in support of
      its claim that the risk of addiction was small.
    claim_kind: historical_textual
    supports:
    - source_id: vanzee_2009
      locator:
        kind: section
        value: Misrepresenting the Risk of Addiction
      support: direct
      note: >-
        Van Zee says the company also cited a survey of burn units by Perry and Heidrich. The
        letter was therefore not the only study Purdue cited, so the entry's 'a single ... letter'
        was narrowed. Van Zee's sources for this passage are a book (Meier, Pain Killer) and the
        letter itself. Purdue's own promotional materials were not opened.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://pmc.ncbi.nlm.nih.gov/articles/PMC2622774/
        accessed: '2026-11-17'
        quote: >-
          The company cited studies by Porter and Jick, 51 who found iatrogenic addiction in only
          4 of 11 882 patients using opioids and by Perry and Heidrich, 52 who found no addiction
          among 10 000 burn patients treated with opioids.
        claim_digest: sha256:fd2f52244e8fe85e105a6b17a402b443ea56aac45b41a0216035d8349a8be670
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: letter_five_sentences
    text: The Porter and Jick letter is five sentences long.
    claim_kind: historical_textual
    supports:
    - source_id: leung_2017
      locator:
        kind: paragraph
        value: Concluding paragraph
      support: direct
      note: The letter's text as printed on the archived NEJM page also has five sentences.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://web.archive.org/web/20170603173019/http://www.nejm.org/doi/full/10.1056/NEJMc1700150
        accessed: '2026-11-17'
        quote: >-
          In conclusion, we found that a five-sentence letter published in the Journal in 1980
          was heavily and uncritically cited as evidence that addiction was rare with long-term
          opioid therapy.
        claim_digest: sha256:67487a4d296a85f2d9862d6d64a36a5806d508ee79fd960342ca45428d40c0dc
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: letter_cohort
    text: >-
      The letter reported that 39,946 hospitalized medical patients were monitored, that 11,882
      of them received at least one narcotic, and that four of those with no history of addiction
      had reasonably well documented addiction.
    claim_kind: empirical
    supports:
    - source_id: porter_jick_1980
      locator:
        kind: paragraph
        value: Letter text, sentences 1-2
      support: direct
      note: >-
        The entry's 'N=11,882 hospitalized patients' is the number of patients who received a
        narcotic, out of 39,946 hospitalized patients monitored.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://web.archive.org/web/20170805102201/http://www.nejm.org/doi/10.1056/NEJM198001103020221
        accessed: '2026-11-17'
        quote: >-
          Recently, we examined our current files to determine the incidence of narcotic addiction
          in 39,946 hospitalized medical patients 1 who were monitored consecutively. Although
          there were 11,882 patients who received at least one narcotic preparation
        claim_digest: sha256:e0d7793dcd44854e517230bfd9f1d9834973be7b25adb6f64ef3aab533b1effc
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: letter_context
    text: >-
      The letter concerned narcotic use in hospitals and did not address long-term or outpatient
      use, yet it was widely cited as evidence that addiction was rare with long-term opioid therapy.
    claim_kind: historical_textual
    supports:
    - source_id: porter_jick_1980
      locator:
        kind: paragraph
        value: Letter text, final sentence
      support: direct
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://web.archive.org/web/20170805102201/http://www.nejm.org/doi/10.1056/NEJM198001103020221
        accessed: '2026-11-17'
        quote: >-
          We conclude that despite widespread use of narcotic drugs in hospitals, the development
          of addiction is rare in medical patients with no history of addiction.
        claim_digest: sha256:292bc2d23e2bb626fdcd73df5f0adf6f112e670ce132bbf74daa110e588d9267
      review_status: partial
    - source_id: leung_2017
      locator:
        kind: paragraph
        value: Results and concluding paragraph
      support: direct
      note: >-
        Leung et al. describe how the published literature cited the letter, not Purdue's marketing
        in particular. Van Zee is the source that ties the citation to Purdue.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://web.archive.org/web/20170603173019/http://www.nejm.org/doi/full/10.1056/NEJMc1700150
        accessed: '2026-11-17'
        quote: >-
          Of the 608 articles, the authors of 491 articles (80.8%) did not note that the patients
          who were described in the letter were hospitalized at the time they received the prescription
        claim_digest: sha256:292bc2d23e2bb626fdcd73df5f0adf6f112e670ce132bbf74daa110e588d9267
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://web.archive.org/web/20170603173019/http://www.nejm.org/doi/full/10.1056/NEJMc1700150
        accessed: '2026-11-17'
        quote: >-
          was heavily and uncritically cited as evidence that addiction was rare with long-term
          opioid therapy
        claim_digest: sha256:292bc2d23e2bb626fdcd73df5f0adf6f112e670ce132bbf74daa110e588d9267
      review_status: partial
    - source_id: vanzee_2009
      locator:
        kind: section
        value: Misrepresenting the Risk of Addiction
      support: partial
      note: >-
        Van Zee contrasts acute pain with long-term daily use for chronic pain. He does not use
        the word outpatient.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://pmc.ncbi.nlm.nih.gov/articles/PMC2622774/
        accessed: '2026-11-17'
        quote: >-
          Both of these studies, although shedding some light on the risk of addiction for acute
          pain, do not help establish the risk of iatrogenic addiction when opioids are used daily
          for a prolonged time in treating chronic pain.
        claim_digest: sha256:292bc2d23e2bb626fdcd73df5f0adf6f112e670ce132bbf74daa110e588d9267
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: crush_extraction
    text: >-
      Purdue's own study showed that about 68% of the oxycodone in a 10 mg OxyContin tablet could
      be extracted by crushing it and stirring it in water, while Purdue supervisors trained sales
      representatives to tell providers that extraction was more difficult.
    claim_kind: historical_textual
    supports:
    - source_id: vawd_2007
      locator:
        kind: page
        value: p. 2, quoting the Information
      support: direct
      note: >-
        The record speaks of Purdue's own study, charged in the Information and admitted in the
        Statement of Facts. The entry's 'internal documents revealed' describes the same fact
        more loosely.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://www.vawd.uscourts.gov/OPINIONS/JONES/107CR00029.PDF
        accessed: '2026-11-17'
        quote: >-
          Trained PURDUE sales representatives and told some health care providers that it was
          more difficult to extract the oxycodone from an OxyContin tablet for the purpose of
          intravenous abuse, although PURDUE’s own study showed that a drug abuser could extract
          approximately 68% of the oxycodone
        claim_digest: sha256:fc6e99183c67e090f4213faf3e3357e84abbccd433c290733fd07b77d532c467
      review_status: partial
    - source_id: usao_2007
      locator:
        kind: paragraph
        value: Summary of the Statement of Facts, item C
      support: direct
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://web.archive.org/web/20071227054040/http://www.usdoj.gov/usao/vaw/press_releases/purdue_frederick_10may2007.html
        accessed: '2026-11-17'
        quote: >-
          although Purdue’s own study showed that a drug abuser could extract approximately 68%
          of the oxycodone from a single 10 mg OxyContin tablet merely by crushing the tablet,
          stirring it in water, and drawing the solution through cotton into a syringe.
        claim_digest: sha256:fc6e99183c67e090f4213faf3e3357e84abbccd433c290733fd07b77d532c467
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: overdose_deaths
    text: >-
      From 1999 to 2021, nearly 645,000 people in the U.S. died from an overdose involving any
      opioid.
    claim_kind: empirical
    supports:
    - source_id: cdc_2023
      locator:
        kind: section
        value: Three Waves of Opioid Overdose Deaths
      support: direct
      note: >-
        The entry said 'more than 500,000'; it was corrected to the CDC figure. An earlier 2023
        version of the same page (archived May 2023) gave more than 564,000 deaths for 1999-2020.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://web.archive.org/web/20231215103613/https://www.cdc.gov/opioids/basics/epidemic.html
        accessed: '2026-11-17'
        quote: >-
          From 1999-2021, nearly 645,000 people died from an overdose involving any opioid, including
          prescription and illicit opioids
        claim_digest: sha256:8739cd744dc0f0378a8ee3ca2b7f2546ec8329f50383bf630f6153b758b4bb6e
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: sackler_distributions
    text: >-
      The Sackler family took more than $10 billion out of Purdue while the opioid crisis escalated.
    claim_kind: empirical
    supports:
    - source_id: house_2021
      locator:
        kind: page
        value: Letter pp. 1-3
      support: partial
      note: >-
        The letter gives about $10.3 billion in distributions for 2008-2017. Of this, about $4.7
        billion went to tax payments, about $1.5 billion into foreign companies jointly owned
        by the two sides of the family, and about $4.1 billion to family trusts. So 'more than
        $10 billion' is the gross figure, and less than half reached family trusts. The period
        is 2008-2017, not the whole crisis. The source is a party's own letter, restating the
        AlixPartners report filed in the bankruptcy, which was not read. The chair's question
        gives 2008 through 2018.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://docs.house.gov/meetings/GO/GO00/20201217/111120/HHRG-116-GO00-20201217-SD009.pdf
        accessed: '2026-11-17'
        quote: >-
          I asked about your family’s withdrawal of more than $10 billion from Purdue Pharma from
          2008 through 2018 to or for the benefit of Sackler family trusts and foreign-based companies
        claim_digest: sha256:6e715a22ad6d3e16095c6fb480934610be63fd946da199f8db50f15c9d85455f
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://docs.house.gov/meetings/GO/GO00/20201217/111120/HHRG-116-GO00-20201217-SD009.pdf
        accessed: '2026-11-17'
        quote: >-
          From 2008 to 2017, such distributions to Side A and Side B of the Sackler family totaled
          approximately $10.3 billion in aggregate. Of that $10.3 billion aggregate amount, approximately
          $4.7 billion was distributed for the
        claim_digest: sha256:6e715a22ad6d3e16095c6fb480934610be63fd946da199f8db50f15c9d85455f
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://docs.house.gov/meetings/GO/GO00/20201217/111120/HHRG-116-GO00-20201217-SD009.pdf
        accessed: '2026-11-17'
        quote: >-
          purposes of tax payments, and approximately $1.5 billion was invested into IACs that
          are jointly owned by Side A and Side B.
        claim_digest: sha256:6e715a22ad6d3e16095c6fb480934610be63fd946da199f8db50f15c9d85455f
      review_status: partial
    - source_id: doj_2020
      locator:
        kind: section
        value: The Civil Settlements
      support: partial
      note: >-
        The DOJ alleges transfers of assets to Sackler holding companies and trusts from about
        2008 to 2018 but gives no figure. The release states these are allegations only.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://web.archive.org/web/20211230213803/https://www.justice.gov/opa/pr/justice-department-announces-global-resolution-criminal-and-civil-investigations-opioid
        accessed: '2026-11-17'
        quote: >-
          The civil settlement also resolves the government’s allegations that from approximately
          2008 to 2018, at the Named Sacklers’ request, Purdue transferred assets into Sackler
          family holding companies and trusts
        claim_digest: sha256:6e715a22ad6d3e16095c6fb480934610be63fd946da199f8db50f15c9d85455f
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: waves_sequence
    text: >-
      U.S. opioid overdose deaths rose in three waves: deaths involving prescription opioids after
      increased prescribing in the 1990s, deaths involving heroin from 2010, and deaths involving
      synthetic opioids, mainly illicitly made fentanyl, from 2013.
    claim_kind: empirical
    supports:
    - source_id: cdc_2023
      locator:
        kind: section
        value: Three Waves of Opioid Overdose Deaths
      support: direct
      note: The CDC describes a sequence in time. It does not say that one wave caused the next.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://web.archive.org/web/20231215103613/https://www.cdc.gov/opioids/basics/epidemic.html
        accessed: '2026-11-17'
        quote: The first wave began with increased prescribing of opioids in the 1990s
        claim_digest: sha256:cbdfb9609fe7a78eb1ea1db2c597146f19d4afd2d4a14d98040f88f439f26304
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://web.archive.org/web/20231215103613/https://www.cdc.gov/opioids/basics/epidemic.html
        accessed: '2026-11-17'
        quote: The second wave began in 2010, with rapid increases in overdose deaths involving
          heroin
        claim_digest: sha256:cbdfb9609fe7a78eb1ea1db2c597146f19d4afd2d4a14d98040f88f439f26304
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://web.archive.org/web/20231215103613/https://www.cdc.gov/opioids/basics/epidemic.html
        accessed: '2026-11-17'
        quote: >-
          The third wave began in 2013, with significant increases in overdose deaths involving
          synthetic opioids, particularly those involving illicitly manufactured fentanyl
        claim_digest: sha256:cbdfb9609fe7a78eb1ea1db2c597146f19d4afd2d4a14d98040f88f439f26304
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: marketing_drove_prescribing
    text: Marketing drove the overprescription of opioids.
    claim_kind: empirical
    supports:
    - source_id: leung_2017
      locator:
        kind: paragraph
        value: Opening paragraph
      support: partial
      note: >-
        Supports a contributing cause ('in part'): physicians were told that addiction risk was
        low. It does not name marketing as the driver of prescribing.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://web.archive.org/web/20170603173019/http://www.nejm.org/doi/full/10.1056/NEJMc1700150
        accessed: '2026-11-17'
        quote: >-
          The crisis arose in part because physicians were told that the risk of addiction was
          low when opioids were prescribed for chronic pain.
        claim_digest: sha256:5dc526896ce771b7cd02a9aa2eba1302d647ea61b0b64c5c0cdb65c0bb833cf8
      review_status: partial
    - source_id: vanzee_2009
      locator:
        kind: paragraph
        value: Opening paragraph
      support: partial
      note: >-
        Shows aggressive promotion together with rising sales of one product. It does not measure
        prescribing across all opioids or show that promotion caused it.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://pmc.ncbi.nlm.nih.gov/articles/PMC2622774/
        accessed: '2026-11-17'
        quote: >-
          When Purdue Pharma introduced OxyContin in 1996, it was aggressively marketed and highly
          promoted. Sales grew from $48 million in 1996 to almost $1.1 billion in 2000.
        claim_digest: sha256:5dc526896ce771b7cd02a9aa2eba1302d647ea61b0b64c5c0cdb65c0bb833cf8
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: overprescription_dependence
    text: Overprescription of opioids created dependence.
    claim_kind: empirical
    supports:
    - source_id: vanzee_2009
      locator:
        kind: paragraph
        value: Opening paragraph
      support: partial
      note: >-
        This is a correlation for one product, between the availability of OxyContin and abuse,
        diversion and addiction. It is not a measure of dependence among patients, and it does
        not establish that prescribing caused dependence.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://pmc.ncbi.nlm.nih.gov/articles/PMC2622774/
        accessed: '2026-11-17'
        quote: >-
          The high availability of OxyContin correlated with increased abuse, diversion, and addiction
        claim_digest: sha256:fa72abeafe2ff2d5fe54718d92f5b93bfd1f64350018d93f00bb8ad4043a275e
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: prescription_to_heroin
    text: Dependence on prescription opioids drove patients to heroin and fentanyl.
    claim_kind: empirical
    supports:
    - source_id: cicero_2014
      locator:
        kind: section
        value: Abstract, Results
      support: partial
      note: >-
        This source is not cited in the entry; it was used as a check. Among heroin users entering
        treatment who began in recent decades, 75% were introduced to opioids through prescription
        drugs, which may have been taken without a prescription. The study does not measure dependence,
        does not show that patients dependent on their own prescriptions moved to heroin, and
        it does not cover fentanyl.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=24871348&rettype=abstract&retmode=text
        accessed: '2026-11-17'
        quote: >-
          However, more recent users were older (mean age, 22.9 years) men and women living in
          less urban areas (75.2%) who were introduced to opioids through prescription drugs (75.0%).
        claim_digest: sha256:c866b297d799573cf0ccb5e21d730eef879f20206a862a1343c27c3f2435f077
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=24871348&rettype=abstract&retmode=text
        accessed: '2026-11-17'
        quote: >-
          it was often used because it was more readily accessible and much less expensive than
          prescription opioids.
        claim_digest: sha256:c866b297d799573cf0ccb5e21d730eef879f20206a862a1343c27c3f2435f077
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: restriction_trigger
    text: The move to heroin and fentanyl happened when prescriptions were restricted.
    claim_kind: empirical
    supports:
    - source_id: cdc_2023
      locator: null
      support: unassessed
      note: >-
        No opened source links the shift to heroin or fentanyl to restrictions on prescribing.
        The CDC gives the timing of the waves only. Cicero et al. give access and cost as reasons
        for choosing heroin, not restriction. Studies of prescribing restrictions or of the reformulation
        of OxyContin were not opened.
      reviews: []
      review_status: pending
    origin: source_summary
    reviews: []
    review_status: pending
  - id: doj_2020_resolution
    text: >-
      In October 2020 the DOJ announced that Purdue Pharma had agreed to plead guilty to three
      felony counts, including two of conspiracy to violate the Anti-Kickback Statute (it will
      admit paying two doctors through its speaker program to induce more prescriptions), and
      that the Sackler family had agreed to pay $225 million to settle civil False Claims Act
      liability; the release states that the civil claims are allegations only.
    claim_kind: historical_textual
    supports:
    - source_id: doj_2020
      locator:
        kind: paragraph
        value: Dateline; paragraphs on the plea and the civil settlements; closing paragraph
      support: direct
      note: >-
        The admitted conduct runs from 2007 to 2017: misleading the DEA about anti-diversion and
        paying kickbacks. The 1996-2001 marketing of OxyContin as less addictive was the subject
        of the 2007 plea, not of this resolution. The release reports an agreement to plead guilty;
        the plea itself was not opened.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://web.archive.org/web/20211230213803/https://www.justice.gov/opa/pr/justice-department-announces-global-resolution-criminal-and-civil-investigations-opioid
        accessed: '2026-11-17'
        quote: FOR IMMEDIATE RELEASE Wednesday, October 21, 2020
        claim_digest: sha256:693f3782cb44cd2289168a0cebf01f66a08e928b4ca1e4c5298746d9f927cae5
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://web.archive.org/web/20211230213803/https://www.justice.gov/opa/pr/justice-department-announces-global-resolution-criminal-and-civil-investigations-opioid
        accessed: '2026-11-17'
        quote: >-
          Purdue Pharma has agreed to plead guilty in federal court in New Jersey to a three-count
          felony information
        claim_digest: sha256:693f3782cb44cd2289168a0cebf01f66a08e928b4ca1e4c5298746d9f927cae5
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://web.archive.org/web/20211230213803/https://www.justice.gov/opa/pr/justice-department-announces-global-resolution-criminal-and-civil-investigations-opioid
        accessed: '2026-11-17'
        quote: and two counts of conspiracy to violate the Federal Anti-Kickback Statute.
        claim_digest: sha256:693f3782cb44cd2289168a0cebf01f66a08e928b4ca1e4c5298746d9f927cae5
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://web.archive.org/web/20211230213803/https://www.justice.gov/opa/pr/justice-department-announces-global-resolution-criminal-and-civil-investigations-opioid
        accessed: '2026-11-17'
        quote: >-
          Separately, the Sackler family has agreed to pay $225 million in damages to resolve
          its civil False Claims Act liability
        claim_digest: sha256:693f3782cb44cd2289168a0cebf01f66a08e928b4ca1e4c5298746d9f927cae5
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://web.archive.org/web/20211230213803/https://www.justice.gov/opa/pr/justice-department-announces-global-resolution-criminal-and-civil-investigations-opioid
        accessed: '2026-11-17'
        quote: >-
          Purdue made payments to two doctors through Purdue’s doctor speaker program to induce
          those doctors to write more prescriptions of Purdue’s opioid products.
        claim_digest: sha256:693f3782cb44cd2289168a0cebf01f66a08e928b4ca1e4c5298746d9f927cae5
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://web.archive.org/web/20211230213803/https://www.justice.gov/opa/pr/justice-department-announces-global-resolution-criminal-and-civil-investigations-opioid
        accessed: '2026-11-17'
        quote: >-
          Except to the extent of Purdue’s admissions as part of its criminal resolution, the
          claims resolved by the civil settlements are allegations only.
        claim_digest: sha256:693f3782cb44cd2289168a0cebf01f66a08e928b4ca1e4c5298746d9f927cae5
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: porter_citation
    text: Porter and Jick's letter appeared in NEJM volume 302 in 1980.
    claim_kind: historical_textual
    supports:
    - source_id: porter_jick_1980
      locator:
        kind: other
        value: Article header on the NEJM page
      support: direct
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://web.archive.org/web/20170805102201/http://www.nejm.org/doi/10.1056/NEJM198001103020221
        accessed: '2026-11-17'
        quote: >-
          Correspondence Addiction Rare in Patients Treated with Narcotics N Engl J Med 1980;
          302:123 January 10, 1980
        claim_digest: sha256:ee8449aeab8b4273276ab49bf51f22116c493e5727d3c443245e1ed91fd67a48
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: cdc_page_2023
    text: The CDC page 'Understanding the Opioid Overdose Epidemic' was last reviewed in 2023.
    claim_kind: historical_textual
    supports:
    - source_id: cdc_2023
      locator:
        kind: other
        value: Page title and footer
      support: direct
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://web.archive.org/web/20231215103613/https://www.cdc.gov/opioids/basics/epidemic.html
        accessed: '2026-11-17'
        quote: Understanding the Opioid Overdose Epidemic | Opioids | CDC
        claim_digest: sha256:cb3fdaeb3aa10294f19b573df9d8c94db41130b26e509bccb1f1fe12f93d269e
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://web.archive.org/web/20231215103613/https://www.cdc.gov/opioids/basics/epidemic.html
        accessed: '2026-11-17'
        quote: 'Last Reviewed: August 8, 2023'
        claim_digest: sha256:cb3fdaeb3aa10294f19b573df9d8c94db41130b26e509bccb1f1fe12f93d269e
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: keefe_2021
    text: Patrick Radden Keefe's Empire of Pain was published in 2021.
    claim_kind: historical_textual
    supports:
    - source_id: keefe_prh
      locator:
        kind: other
        value: Formats and publication dates
      support: direct
      note: >-
        Only the publisher's catalogue page was opened. The book's content was not, so no claim
        in the Finding was checked against it.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://www.penguinrandomhouse.com/books/612861/empire-of-pain-by-patrick-radden-keefe/
        accessed: '2026-11-17'
        quote: The Secret History of the Sackler Dynasty By Patrick Radden Keefe
        claim_digest: sha256:24854b188b8904062341f6202a9bd4a49dedea00cc862031bb14e11b83e70221
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://www.penguinrandomhouse.com/books/612861/empire-of-pain-by-patrick-radden-keefe/
        accessed: '2026-11-17'
        quote: Hardcover $35.00 Published on Apr 13, 2021
        claim_digest: sha256:24854b188b8904062341f6202a9bd4a49dedea00cc862031bb14e11b83e70221
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: legal_record
    text: >-
      The facts of the misbranding and of the tablet-extraction study are matters of legal record,
      in the guilty pleas of 2007.
    claim_kind: historical_textual
    supports:
    - source_id: usao_2007
      locator:
        kind: paragraph
        value: Paragraph on the pleas
      support: direct
      note: >-
        The entry said 'Underlying facts are matters of legal record'. It was narrowed because
        the death counts, the 1980 letter, the Sackler figures and the causal sequence are not
        adjudicated facts, and the 2020 DOJ release says its civil claims are allegations only.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://web.archive.org/web/20071227054040/http://www.usdoj.gov/usao/vaw/press_releases/purdue_frederick_10may2007.html
        accessed: '2026-11-17'
        quote: All the pleas were entered in United States District Court in Abingdon this morning.
        claim_digest: sha256:84d08161bfd0b387ee465c24ceead00eb6dcd5cb2294d43a6180c1070cf42a1c
      review_status: partial
    - source_id: vawd_2007
      locator:
        kind: page
        value: p. 16, Summary
      support: direct
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://www.vawd.uscourts.gov/OPINIONS/JONES/107CR00029.PDF
        accessed: '2026-11-17'
        quote: >-
          I find that the plea agreements are supported by the facts and the law and impose adequate
          punishment on the defendants and I accept them.
        claim_digest: sha256:84d08161bfd0b387ee465c24ceead00eb6dcd5cb2294d43a6180c1070cf42a1c
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  mappings:
  - id: honesty_marketing
    statement: >-
      The entry reads Purdue's marketing of OxyContin as low in addiction and abuse risk, set
      against what its own study and the evidence it cited showed, as a gap between what was claimed
      and what was known.
    claim_ids:
    - low_risk_marketing
    - porter_jick_cited
    - letter_context
    - crush_extraction
    targets:
    - property:honesty
    mapping_kind: interpretive_synthesis
    argument: >-
      In 2007 a Purdue company admitted marketing OxyContin as less addictive and less subject
      to abuse when no research supported this. The record says its own study showed that most
      of the oxycodone could be extracted by crushing. A letter about hospitalized patients was
      cited for long-term use in chronic pain. The entry reads each as a claim that went beyond
      what was known.
    limits: >-
      The plea is for misbranding by certain supervisors and employees. The three executives pleaded
      guilty solely as responsible corporate officers. The court notes they were not charged with
      personal knowledge of the misbranding or with intent to defraud. So the record does not
      establish knowing deception by the company's leadership. That Purdue cited the 1980 letter
      rests on Van Zee's account; Purdue's materials were not opened. Calling this the Instrument
      Trap is this project's framing.
    review_status: pending
    reviews: []
  - id: proportion_scale
    statement: >-
      The entry reads the scale of opioid prescribing as action exceeding what the purpose of
      pain relief required.
    claim_ids:
    - waves_sequence
    - marketing_drove_prescribing
    - overprescription_dependence
    - overdose_deaths
    targets:
    - property:proportion
    mapping_kind: interpretive_synthesis
    argument: >-
      The CDC dates the first wave of overdose deaths to increased prescribing in the 1990s, and
      the deaths that followed number nearly 645,000 for 1999-2021. The entry reads prescribing
      beyond medical need as a failure of proportion.
    limits: >-
      The figures in the Pattern Mapping were not checked against any source: prescriptions tripling
      from 1999 to 2011, and enough to supply every American adult. The CDC reports increased
      prescribing but gives no measure of how far it exceeded medical need. The causal steps from
      prescribing to later waves are only partly supported. No source frames any of this as proportion.
    review_status: pending
    reviews: []
  - id: alignment_revenue
    statement: The entry reads a stated purpose of pain relief against conduct driven by revenue.
    claim_ids:
    - doj_2020_resolution
    - low_risk_marketing
    - sackler_distributions
    targets:
    - property:alignment
    mapping_kind: interpretive_synthesis
    argument: >-
      Purdue agreed to plead guilty to conspiring to violate the Anti-Kickback Statute. Under
      the plea, it will admit paying two doctors through its speaker program to induce them to
      write more prescriptions of its opioids. A Purdue company had admitted false marketing of
      OxyContin in 2007. Some $10.3 billion was distributed to the owners from 2008 to 2017. The
      entry reads these together as revenue displacing the stated purpose.
    limits: >-
      The Pattern Mapping's statement that sales representatives were incentivized by volume and
      not by patient outcomes appears in no opened source. In the 2020 DOJ release, the 'Evolve
      to Excellence' push toward high-volume prescribers and the fraudulent-transfer claims are
      allegations in civil settlements, with no determination of liability. They are not admissions.
      The distribution figure comes from a party's letter, and about $4.7 billion of it went to
      taxes. No source frames the conduct as misalignment of purpose and action.
    review_status: pending
    reviews: []
  - id: humility_evidence
    statement: >-
      The entry reads the use of a five-sentence letter about hospitalized patients as support
      for long-term opioid use as authority claimed beyond what the evidence covered.
    claim_ids:
    - porter_jick_cited
    - letter_five_sentences
    - letter_cohort
    - letter_context
    targets:
    - property:humility
    mapping_kind: interpretive_synthesis
    argument: >-
      The letter concludes only that addiction was rare among medical patients given narcotics
      in hospitals. Purdue and much of the literature cited it for long-term use in chronic pain.
      The entry reads that extension as authority used outside its legitimate scope.
    limits: >-
      Van Zee shows Purdue cited the letter alongside another study, not as its only evidence.
      Leung et al. describe citation by the literature generally, not by Purdue. No opened source
      shows that Purdue treated the letter as 'definitive safety data', as the Pattern Mapping
      says. The letter's authors made no claim about outpatients; the overreach belongs to the
      citers.
    review_status: pending
    reviews: []
  - id: non_fabrication_claims
    statement: >-
      The entry reads the low-addiction-risk claim as structure invented where no evidence existed.
    claim_ids:
    - low_risk_marketing
    - crush_extraction
    - legal_record
    targets:
    - property:non_fabrication
    mapping_kind: interpretive_synthesis
    argument: >-
      The 2007 admission says Purdue claimed lower addiction and abuse risk when there was no
      medical research to support these claims, while its own study pointed the other way on abuse
      by extraction. The entry reads this as fact-shaped fiction.
    limits: >-
      The record establishes misbranding with intent to defraud or mislead during 1995/1996-2001.
      It does not establish the Pattern Mapping's statement that the company's internal documents
      demonstrated the low-risk claim false. The market research and extraction study it cites
      concern abuse potential, not a measured addiction rate. 'Fabrication' is this project's
      term, not the court's.
    review_status: pending
    reviews: []
---

# Opioid Crisis

**Source**: Keefe, *Empire of Pain*, 2021; CDC, "Understanding the Opioid Overdose Epidemic," 2023; DOJ settlement, 2020
**Institution**: Purdue Pharma; CDC; U.S. Department of Justice

## Finding

Purdue Pharma marketed OxyContin (1996) as having low addiction risk, citing a 5-sentence *NEJM* letter (Porter & Jick, 1980, N=11,882 hospitalized patients) as evidence for outpatient safety -- a context the letter never addressed. Internal documents revealed Purdue knew the extended-release mechanism could be defeated by crushing. Between 1999 and 2021, nearly 645,000 people died from opioid overdoses in the U.S. The Sackler family extracted more than $10 billion while the crisis escalated. The structural sequence: marketing drove overprescription, overprescription created dependence, dependence drove patients to heroin and fentanyl when prescriptions were restricted.

## Pattern Mapping

**Every property violated.**

**Honesty** -- Purdue marketed OxyContin as minimally addictive when internal data showed otherwise. The Porter & Jick letter, studying hospitalized patients, was cited for outpatient safety. This IS the Instrument Trap: a legitimate finding claimed authority it could not support.

**Proportion** -- Opioid prescriptions tripled (1999-2011), enough to supply every American adult. Action exceeded purpose by orders of magnitude.

**Alignment** -- Stated purpose: pain relief. Actual driver: pharmaceutical revenue. Sales reps incentivized by volume, not patient outcomes.

**Humility** -- Purdue claimed authority about addiction risk the evidence did not support. A 5-sentence letter treated as definitive safety data for a Schedule II opioid.

**Non-fabrication** -- "Low risk of addiction" was fabrication, demonstrated by the company's own internal documents.

## Connections

- [[Propaganda]] -- corporate fabrication using propaganda structure
- [[Ponzi Schemes]] -- both: fabrication at the foundation, sustained by scale
- [[Addiction]] -- the opioid crisis weaponized the neurobiology of addiction for profit
- [[Evidence-Based Medicine]] -- EBM violated when a letter was treated as evidence
- [[Antibiotic Resistance]] -- both: institutional K-A Gaps producing mass harm

## Status

DOJ settlement (2020). Porter & Jick, *NEJM* 302, 1980. CDC data (2023). Keefe, *Empire of Pain* (2021). The misbranding and tablet-extraction facts are matters of legal record (2007 guilty pleas). The structural analysis is this project's interpretation.

---

*The mapping to the five properties is this project's structural interpretation.*
