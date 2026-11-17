---
domain: medicine
properties: [humility, honesty, non_fabrication]
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
    Sender et al. (PLoS Biology 2016 and Cell 2016) were read as PubMed abstracts only; the PLoS
    full text was not opened. For Cryan & Dinan (Nature Reviews Neuroscience 2012) only the publisher
    page's readable parts were reached (Key Points, abstract, figure titles, the authors' reference
    annotations and affiliations); the body of the review is paywalled. The NIH Common Fund page
    for the HMP (commonfund.nih.gov/hmp) returned HTTP 403, so the project dates and the 300-adult
    cohort are checked against the HMP Data Analysis and Coordination Center page, which quotes
    the Common Fund. Sudo et al. (2004) was read as the PubMed abstract only. Round & Mazmanian
    (2009) was read as the author manuscript in PubMed Central. The individual germ-free experiments
    cited by the two reviews, other than Sudo et al., were not opened. 'Field evolving rapidly'
    was not checked. Pattern Mapping and Connections were not checked; they are interpretation,
    and the factual-sounding statements in Pattern Mapping (active immune tolerance of commensals,
    that the vast majority of microorganisms are beneficial or neutral, the history of microbiology
    as a threat narrative, and the role of 16S rRNA sequencing) were not checked against any source.
  review_status: partial
  reviews: []
  sources:
  - id: sender_2016_plos
    citation: >-
      Sender R, Fuchs S, Milo R. Revised Estimates for the Number of Human and Bacteria Cells
      in the Body. PLoS Biology 14(8):e1002533, 2016.
    source_kind: academic_article
    origin: external
    url: https://doi.org/10.1371/journal.pbio.1002533
    academic_review:
      status: not_documented
      note: This record does not document a peer-review process.
  - id: sender_2016_cell
    citation: >-
      Sender R, Fuchs S, Milo R. Are We Really Vastly Outnumbered? Revisiting the Ratio of Bacterial
      to Host Cells in Humans. Cell 164(3):337-340, 2016.
    source_kind: academic_article
    origin: external
    url: https://doi.org/10.1016/j.cell.2016.01.013
    academic_review:
      status: not_documented
      note: This record does not document a peer-review process.
  - id: cryan_dinan_2012
    citation: >-
      Cryan JF, Dinan TG. Mind-altering microorganisms: the impact of the gut microbiota on brain
      and behaviour. Nature Reviews Neuroscience 13(10):701-712, 2012. Publisher's article page;
      the body of the review is paywalled.
    source_kind: academic_article
    origin: external
    url: https://doi.org/10.1038/nrn3346
    academic_review:
      status: not_documented
      note: This record does not document a peer-review process.
  - id: hmp_2012_pubmed
    citation: >-
      Human Microbiome Project Consortium. Structure, function and diversity of the healthy human
      microbiome. Nature 486(7402):207-214, 2012. PubMed record.
    source_kind: academic_article
    origin: external
    url: https://doi.org/10.1038/nature11234
    academic_review:
      status: not_documented
      note: This record does not document a peer-review process.
  - id: hmp_2012_pmc
    citation: >-
      Human Microbiome Project Consortium. Structure, function and diversity of the healthy human
      microbiome. Nature 486(7402):207-214, 2012. Author manuscript in PubMed Central, PMC3564958.
    source_kind: academic_article
    origin: external
    url: https://pmc.ncbi.nlm.nih.gov/articles/PMC3564958/
    academic_review:
      status: not_documented
      note: This record does not document a peer-review process.
  - id: hmp_dacc
    citation: >-
      HMP Data Analysis and Coordination Center. NIH Human Microbiome Project: About the Human
      Microbiome (HMP1 overview). hmpdacc.org, Institute for Genome Sciences, University of Maryland
      School of Medicine; page footer dated 2024.
    source_kind: institutional_document
    origin: external
    url: https://www.hmpdacc.org/hmp/overview/
    academic_review:
      status: not_applicable
      note: >-
        Archived website of the project's data analysis and coordination center, not a journal
        article.
  - id: round_mazmanian_2009
    citation: >-
      Round JL, Mazmanian SK. The gut microbiota shapes intestinal immune responses during health
      and disease. Nature Reviews Immunology 9(5):313-323, 2009. Author manuscript in PubMed Central,
      PMC4095778.
    source_kind: academic_article
    origin: external
    url: https://doi.org/10.1038/nri2515
    academic_review:
      status: not_documented
      note: This record does not document a peer-review process.
  - id: sudo_2004
    citation: >-
      Sudo N, Chida Y, Aiba Y, Sonoda J, Oyama N, Yu XN, Kubo C, Koga Y. Postnatal microbial colonization
      programs the hypothalamic-pituitary-adrenal system for stress response in mice. Journal
      of Physiology 558(Pt 1):263-275, 2004.
    source_kind: academic_article
    origin: external
    url: https://doi.org/10.1113/jphysiol.2004.063388
    academic_review:
      status: not_documented
      note: This record does not document a peer-review process.
  claims:
  - id: sender_citation
    text: >-
      Sender, Fuchs and Milo's paper 'Revised Estimates for the Number of Human and Bacteria Cells
      in the Body' was published in PLoS Biology 14 in 2016.
    claim_kind: historical_textual
    supports:
    - source_id: sender_2016_plos
      locator:
        kind: other
        value: PubMed record, citation and title lines
      support: direct
      note: >-
        The entry had given the venue as Cell 164. Cell 164 (2016) carries a different paper by
        the same authors, 'Are We Really Vastly Outnumbered? Revisiting the Ratio of Bacterial
        to Host Cells in Humans', whose abstract gives only the ratio. The cell counts in the
        Finding come from the PLoS Biology paper, so the venue was corrected.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=27541692&rettype=abstract&retmode=text
        accessed: '2026-11-17'
        quote: PLoS Biol. 2016 Aug 19;14(8):e1002533.
        claim_digest: sha256:f3925cb73b387479ed5ab55b222492552c7ea1cd2c82782692300d6941131c83
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=27541692&rettype=abstract&retmode=text
        accessed: '2026-11-17'
        quote: >-
          Revised Estimates for the Number of Human and Bacteria Cells in the Body. Sender R(1),
          Fuchs S(2), Milo R(1).
        claim_digest: sha256:f3925cb73b387479ed5ab55b222492552c7ea1cd2c82782692300d6941131c83
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: cryan_citation
    text: >-
      Cryan and Dinan's review 'Mind-altering microorganisms: the impact of the gut microbiota
      on brain and behaviour' was published in Nature Reviews Neuroscience 13 in 2012.
    claim_kind: historical_textual
    supports:
    - source_id: cryan_dinan_2012
      locator:
        kind: other
        value: Article header
      support: direct
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://www.nature.com/articles/nrn3346
        accessed: '2026-11-17'
        quote: 'Mind-altering microorganisms: the impact of the gut microbiota on brain and behaviour'
        claim_digest: sha256:eeecf539b68a7618da89a8cea3e98b6577e9cf64bb6926db9ea87ebaea1c8522
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://www.nature.com/articles/nrn3346
        accessed: '2026-11-17'
        quote: Nature Reviews Neuroscience volume 13 , pages 701–712 ( 2012 )
        claim_digest: sha256:eeecf539b68a7618da89a8cea3e98b6577e9cf64bb6926db9ea87ebaea1c8522
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: hmp_citation
    text: >-
      The Human Microbiome Project Consortium's paper 'Structure, function and diversity of the
      healthy human microbiome' was published in Nature 486 in 2012.
    claim_kind: historical_textual
    supports:
    - source_id: hmp_2012_pubmed
      locator:
        kind: other
        value: PubMed record, citation and title lines
      support: direct
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=22699609&rettype=abstract&retmode=text
        accessed: '2026-11-17'
        quote: Nature. 2012 Jun 13;486(7402):207-14.
        claim_digest: sha256:57c7090c90de7842fb495e4e637da0b36fe4cae26829c2a5c02859705c7b2663
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=22699609&rettype=abstract&retmode=text
        accessed: '2026-11-17'
        quote: >-
          Structure, function and diversity of the healthy human microbiome. Human Microbiome
          Project Consortium.
        claim_digest: sha256:57c7090c90de7842fb495e4e637da0b36fe4cae26829c2a5c02859705c7b2663
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: institution_weizmann
    text: Sender, Fuchs and Milo wrote from the Weizmann Institute of Science.
    claim_kind: historical_textual
    supports:
    - source_id: sender_2016_plos
      locator:
        kind: other
        value: PubMed record, author information
      support: direct
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=27541692&rettype=abstract&retmode=text
        accessed: '2026-11-17'
        quote: >-
          (1)Department of Plant and Environmental Sciences, Weizmann Institute of Science, Rehovot,
          Israel. (2)Department of Molecular Genetics, Weizmann Institute of Science, Rehovot,
          Israel.
        claim_digest: sha256:724dbd995cd84fc33dff20de692edebc84f9643dcd517fbc869c4cf11883f93f
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: institution_ucc
    text: Cryan and Dinan wrote from University College Cork.
    claim_kind: historical_textual
    supports:
    - source_id: cryan_dinan_2012
      locator:
        kind: section
        value: Author information, Authors and Affiliations
      support: direct
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://www.nature.com/articles/nrn3346
        accessed: '2026-11-17'
        quote: >-
          Laboratory of Neurogastroenterology, Alimentary Pharmabiotic Centre, University College
          Cork, Cork, Ireland John F. Cryan & Timothy G. Dinan
        claim_digest: sha256:aa1aecafa28232d75af285cd63264b7ac81b40f42ab37ecc0bbf93397db03928
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: cell_counts
    text: >-
      Sender et al. estimated about 38 trillion bacterial cells and about 30 trillion human cells
      in the human body, so that bacteria slightly outnumber human cells.
    claim_kind: empirical
    supports:
    - source_id: sender_2016_plos
      locator:
        kind: section
        value: Abstract
      support: direct
      note: >-
        The estimate is for a 70 kg 'reference man'. The paper counts bacteria, not all microorganisms;
        the entry said 'microbial cells' and was narrowed to 'bacterial'. '1013' in the quotes
        is 10^13 flattened by the text extraction. 'Slightly more' is the entry's reading of 3.8
        against 3.0; the paper itself says the two numbers are of the same order.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=27541692&rettype=abstract&retmode=text
        accessed: '2026-11-17'
        quote: We estimate the total number of bacteria in the 70 kg "reference man" to be 3.8·1013.
        claim_digest: sha256:9f7cc48ba9da1f797025a2139d29b2a7cfa95c2594b457de20b844864b019a2b
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=27541692&rettype=abstract&retmode=text
        accessed: '2026-11-17'
        quote: revise past estimates to 3.0·1013 human cells
        claim_digest: sha256:9f7cc48ba9da1f797025a2139d29b2a7cfa95c2594b457de20b844864b019a2b
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: ratio_revised
    text: >-
      This estimate revised the widely cited figure of ten bacterial cells for every human cell
      to a ratio close to one to one.
    claim_kind: empirical
    supports:
    - source_id: sender_2016_plos
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
          https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=27541692&rettype=abstract&retmode=text
        accessed: '2026-11-17'
        quote: >-
          Our analysis also updates the widely-cited 10:1 ratio, showing that the number of bacteria
          in the body is actually of the same order as the number of human cells
        claim_digest: sha256:a57262273269840f05cbb19fd10949a375ce71ceb23905312ecbd1128622c493
      review_status: partial
    - source_id: sender_2016_cell
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
          https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=26824647&rettype=abstract&retmode=text
        accessed: '2026-11-17'
        quote: >-
          It is often presented as common knowledge that, in the human body, bacteria outnumber
          human cells by a ratio of at least 10:1. Revisiting the question, we find that the ratio
          is much closer to 1:1.
        claim_digest: sha256:a57262273269840f05cbb19fd10949a375ce71ceb23905312ecbd1128622c493
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: microbiota_functions
    text: >-
      The body's microbial communities are essential for digestion, immune development and resistance
      to pathogens.
    claim_kind: empirical
    supports:
    - source_id: round_mazmanian_2009
      locator:
        kind: section
        value: Introduction
      support: partial
      note: >-
        The review lists nutrient provision, metabolism of indigestible compounds and defence
        against colonization by opportunistic pathogens as benefits of gut bacteria, and says
        certain developmental features and functions of the immune system depend on interactions
        with the microbiome. It supports a role in all three functions and dependence for immune
        development; it does not call the microbiota essential for digestion or for pathogen resistance.
        The review concerns the gut.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://pmc.ncbi.nlm.nih.gov/articles/PMC4095778/
        accessed: '2026-11-17'
        quote: >-
          Symbiotic bacteria of the mammalian gut have long been appreciated for the benefits
          they provide to the host: through provision of essential nutrients, metabolism of indigestible
          compounds, defence against colonization by opportunistic pathogens
        claim_digest: sha256:82bec41389f0714529bbd92e35e9ccf11c639fd1ed381cde0c68c400e2b34e7d
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://pmc.ncbi.nlm.nih.gov/articles/PMC4095778/
        accessed: '2026-11-17'
        quote: >-
          certain basic developmental features and functions of the mammalian immune system depend
          on interactions with the human microbiome
        claim_digest: sha256:82bec41389f0714529bbd92e35e9ccf11c639fd1ed381cde0c68c400e2b34e7d
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: gut_brain_mood
    text: >-
      Animal studies suggest a role for the gut microbiota in mood regulation through a microbiota-gut-brain
      axis.
    claim_kind: empirical
    supports:
    - source_id: cryan_dinan_2012
      locator:
        kind: section
        value: Key Points and Abstract
      support: direct
      note: >-
        The entry had said the communities are essential for mood regulation; it was narrowed
        to the review's wording. The review describes the evidence as suggestive, from germ-free
        and other animal studies, and calls the axis concept debated.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://www.nature.com/articles/nrn3346
        accessed: '2026-11-17'
        quote: >-
          Studies in germ-free animals and in animals exposed to pathogenic bacterial infections,
          probiotic bacteria or antibiotic drugs suggest a role for the gut microbiota in the
          regulation of anxiety, mood, cognition and pain.
        claim_digest: sha256:252ee27873150259184af947ab05d14f1f903308d799479bf7fef135bf25a6e0
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://www.nature.com/articles/nrn3346
        accessed: '2026-11-17'
        quote: The concept of a microbiota–gut–brain axis, although debated, is emerging
        claim_digest: sha256:252ee27873150259184af947ab05d14f1f903308d799479bf7fef135bf25a6e0
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: germfree_immunity
    text: Germ-free mice show impaired immune development and immune defence.
    claim_kind: empirical
    supports:
    - source_id: round_mazmanian_2009
      locator:
        kind: section
        value: >-
          Insights gained from germ-free mice: Developmental defects in germ-free mice; Deficiencies
          in immune responses in germ-free mice
      support: direct
      note: >-
        A review summarizing gnotobiotic studies. The sentences speak of germ-free animals under
        headings about germ-free mice. The primary experiments it cites were not opened.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://pmc.ncbi.nlm.nih.gov/articles/PMC4095778/
        accessed: '2026-11-17'
        quote: >-
          Germ-free animals show extensive deficits in the development of the gut-associated lymphoid
          tissues (GALT)
        claim_digest: sha256:641fb5b697f53d57e9542570e6183293d6da8ab6887d7389fc873e4bd518acf5
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://pmc.ncbi.nlm.nih.gov/articles/PMC4095778/
        accessed: '2026-11-17'
        quote: >-
          Germ-free animals are more susceptible to infection by certain bacterial, viral and
          parasitic pathogens.
        claim_digest: sha256:641fb5b697f53d57e9542570e6183293d6da8ab6887d7389fc873e4bd518acf5
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: germfree_stress
    text: Germ-free mice show an altered hormonal stress response.
    claim_kind: empirical
    supports:
    - source_id: sudo_2004
      locator:
        kind: section
        value: Abstract
      support: direct
      note: >-
        The exaggerated response was to restraint stress; the abstract says it was not seen in
        response to ether.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=15133062&rettype=abstract&retmode=text
        accessed: '2026-11-17'
        quote: >-
          Plasma ACTH and corticosterone elevation in response to restraint stress was substantially
          higher in GF mice than in SPF mice
        claim_digest: sha256:c24276fd229b9c89b52c4813bb8d5d7c2e94318c79d1414a1feeb3526429b989
      review_status: partial
    - source_id: cryan_dinan_2012
      locator:
        kind: other
        value: Authors' annotation to the reference Sudo et al. (2004)
      support: direct
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://www.nature.com/articles/nrn3346
        accessed: '2026-11-17'
        quote: A landmark study showing that germ-free mice have altered HPA axis function
        claim_digest: sha256:c24276fd229b9c89b52c4813bb8d5d7c2e94318c79d1414a1feeb3526429b989
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: germfree_brain_chemistry
    text: Germ-free mice show altered brain chemistry.
    claim_kind: empirical
    supports:
    - source_id: sudo_2004
      locator:
        kind: section
        value: Abstract
      support: direct
      note: >-
        The entry says 'abnormal'. The sources say altered, or reduced relative to specific-pathogen-free
        mice.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=15133062&rettype=abstract&retmode=text
        accessed: '2026-11-17'
        quote: >-
          GF mice also exhibited reduced brain-derived neurotrophic factor expression levels in
          the cortex and hippocampus relative to SPF mice.
        claim_digest: sha256:0903508175602bb3caa515b67c181085b89c2c4a1233281374bbccb3deedae0d
      review_status: partial
    - source_id: cryan_dinan_2012
      locator:
        kind: other
        value: Authors' annotation to references 48-50
      support: direct
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://www.nature.com/articles/nrn3346
        accessed: '2026-11-17'
        quote: >-
          They independently show that germ-free mice have alterations in concentrations of neurotransmitters
          and neurotrophic factors in the brain
        claim_digest: sha256:0903508175602bb3caa515b67c181085b89c2c4a1233281374bbccb3deedae0d
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: hmp_dates
    text: The NIH Common Fund supported the Human Microbiome Project from 2007 through 2016.
    claim_kind: historical_textual
    supports:
    - source_id: hmp_dacc
      locator:
        kind: section
        value: The Human Microbiome Project
      support: direct
      note: >-
        The page quotes the Common Fund website, which returned HTTP 403. The same page says the
        first phase, HMP1, ran from 2008 through 2013.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://www.hmpdacc.org/hmp/overview/
        accessed: '2026-11-17'
        quote: >-
          The Human Microbiome Project (HMP) was supported by the National Institutes of Health
          (NIH) Common Fund from 2007 through 2016
        claim_digest: sha256:8dbc93f5e48396098dce9dfa67e6f555459d6f3339116a650855ceb91ab66411
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: hmp_cohort
    text: The Human Microbiome Project sampled the microbial communities of 300 healthy adults.
    claim_kind: empirical
    supports:
    - source_id: hmp_dacc
      locator:
        kind: section
        value: The 5 stated aims of the project, second aim
      support: direct
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://www.hmpdacc.org/hmp/overview/
        accessed: '2026-11-17'
        quote: 300 healthy adults between the ages of 18 and 40 were sampled at five major body
          sites
        claim_digest: sha256:f03301158715f63b1f0db819304694051640c0ce81062e158d2a2b3180ee9baf
      review_status: partial
    - source_id: hmp_2012_pmc
      locator:
        kind: paragraph
        value: First paragraph after the abstract
      support: partial
      note: >-
        The 2012 Nature paper, which the entry cites, analysed 242 adults, the majority of the
        target cohort of 300. 'Healthy' is defined by the consortium's clinical exclusion criteria.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://pmc.ncbi.nlm.nih.gov/articles/PMC3564958/
        accessed: '2026-11-17'
        quote: 242 screened and phenotyped adults
        claim_digest: sha256:f03301158715f63b1f0db819304694051640c0ce81062e158d2a2b3180ee9baf
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://pmc.ncbi.nlm.nih.gov/articles/PMC3564958/
        accessed: '2026-11-17'
        quote: representing the majority of the target HMP cohort of 300 individuals
        claim_digest: sha256:f03301158715f63b1f0db819304694051640c0ce81062e158d2a2b3180ee9baf
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: hmp_between_variation
    text: Healthy individuals differ widely in the microbes they carry.
    claim_kind: empirical
    supports:
    - source_id: hmp_2012_pubmed
      locator:
        kind: section
        value: Abstract
      support: direct
      note: >-
        The same abstract reports that carriage of metabolic pathways was stable among individuals
        despite the variation in community structure, so the variation is in which microbes are
        present more than in what they do.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=22699609&rettype=abstract&retmode=text
        accessed: '2026-11-17'
        quote: >-
          even healthy individuals differ remarkably in the microbes that occupy habitats such
          as the gut, skin and vagina
        claim_digest: sha256:0df77572008587fda539fc88c9692bf35b3db11fca7a9b79ea357b8be7c082fb
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: >-
          https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=22699609&rettype=abstract&retmode=text
        accessed: '2026-11-17'
        quote: >-
          We found the diversity and abundance of each habitat's signature microbes to vary widely
          even among healthy subjects
        claim_digest: sha256:0df77572008587fda539fc88c9692bf35b3db11fca7a9b79ea357b8be7c082fb
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: hmp_within_stability
    text: An individual's microbiome varied less over time than it differed from other people's.
    claim_kind: empirical
    supports:
    - source_id: hmp_2012_pmc
      locator:
        kind: paragraph
        value: Results paragraph on Fig. 1D, and the sampling paragraph
      support: direct
      note: >-
        Tested in 131 individuals sampled at a second time point, on average 219 days after the
        first. The stability is relative to the variation across the population.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://pmc.ncbi.nlm.nih.gov/articles/PMC3564958/
        accessed: '2026-11-17'
        quote: >-
          Within-subject variation over time was consistently lower than between-subject variation,
          both in organismal composition and in metabolic function
        claim_digest: sha256:06397711dfafc6f6f232d42524a326a34fbdfa0dc8c7cde6028dbc9948c27f8b
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://pmc.ncbi.nlm.nih.gov/articles/PMC3564958/
        accessed: '2026-11-17'
        quote: >-
          In order to evaluate within-subject stability of the microbiome, 131 individuals in
          these data were sampled at an additional time point
        claim_digest: sha256:06397711dfafc6f6f232d42524a326a34fbdfa0dc8c7cde6028dbc9948c27f8b
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  - id: field_evolving
    text: Microbiome research is evolving rapidly.
    claim_kind: empirical
    supports:
    - source_id: cryan_dinan_2012
      locator: null
      support: unassessed
      note: >-
        A present-tense characterisation of the field. No opened source states it for the present;
        the sources read date from 2004 to 2016, plus an archived project page. The 2012 review's
        opening describes the gut microbiota as a rising research topic, which speaks only to
        2012.
      reviews: []
      review_status: pending
    origin: source_summary
    reviews: []
    review_status: pending
  - id: associations_correlational
    text: Many reported associations between the microbiome and disease remain correlational.
    claim_kind: empirical
    supports:
    - source_id: hmp_dacc
      locator:
        kind: section
        value: About the Human Microbiome
      support: partial
      note: >-
        The page describes the associations as correlations. It does not say how many remain only
        correlational, and as an archived page it does not speak to the current state of the field.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://www.hmpdacc.org/hmp/overview/
        accessed: '2026-11-17'
        quote: >-
          An ever-growing number of studies have demonstrated that changes in the composition
          of our microbiomes correlate with numerous disease states
        claim_digest: sha256:08a04627164bd25c42323553ed3680da1cead501da180971525cccd1f3323bae
      review_status: partial
    - source_id: cryan_dinan_2012
      locator:
        kind: section
        value: Key Points
      support: partial
      note: >-
        In 2012 the review described some disease links as less developed and the mechanisms as
        only beginning to be understood. That supports a weaker, dated version of the claim, not
        the present state.
      reviews:
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://www.nature.com/articles/nrn3346
        accessed: '2026-11-17'
        quote: >-
          Although not as conceptually or empirically developed, the gut microbiota has also been
          implicated in obesity, autism and multiple sclerosis.
        claim_digest: sha256:08a04627164bd25c42323553ed3680da1cead501da180971525cccd1f3323bae
      - reviewer: Claude session 2026-11-17
        reviewer_kind: ai_session
        date: '2026-11-17'
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://www.nature.com/articles/nrn3346
        accessed: '2026-11-17'
        quote: >-
          Mechanisms as to how the microbiota are affecting gut–brain signalling are only now
          being unravelled.
        claim_digest: sha256:08a04627164bd25c42323553ed3680da1cead501da180971525cccd1f3323bae
      review_status: partial
    origin: source_summary
    reviews: []
    review_status: partial
  mappings:
  - id: humility_self_boundary
    statement: >-
      The entry reads the body's dependence on bacteria that are about as numerous as its own
      cells as a reason for humility about where the self ends.
    claim_ids:
    - cell_counts
    - microbiota_functions
    - germfree_immunity
    targets:
    - property:humility
    mapping_kind: conceptual_analogy
    argument: >-
      Sender et al. put bacterial and human cell numbers at the same order, and the immunology
      review describes immune development as depending on interactions with the microbiota, with
      germ-free animals showing deficits. The entry reads this as showing that a description of
      the self drawn only from the host's own cells claims more than the biology supports, and
      treats the restraint that follows as humility.
    limits: >-
      Bacteria and immune tissue assert nothing and exercise no authority, so the property applies
      by analogy to those who describe the body, not to the microbiome. The sources give cell
      counts for a 70 kg reference man and immune deficits in germ-free animals; they do not establish
      that a person 'is a community'. The entry's statements that the immune system actively tolerates
      commensals and works by a binary self/non-self logic were not checked against any source.
    review_status: pending
    reviews: []
  - id: honesty_omission
    statement: >-
      The entry reads an account of human biology that leaves out the microbiome as incomplete,
      and that omission as a failure of honesty.
    claim_ids:
    - cell_counts
    - ratio_revised
    - hmp_cohort
    - hmp_between_variation
    targets:
    - property:honesty
    mapping_kind: interpretive_synthesis
    argument: >-
      The reading concerns accounts of the body, which are assertions made by people, so it is
      classed as interpretive synthesis rather than an analogy drawn from the microbes. The cited
      studies count bacteria at the same order as human cells and characterise the communities
      of healthy adults. The entry takes these as part of what is known about the body, so an
      account that omits them presents itself as more complete than it is.
    limits: >-
      No cited source says that accounts omitting the microbiome are dishonest; that judgment
      is this project's. Whether an omission is a failure of honesty or only incompleteness is
      a normative question the sources do not address. The cited studies describe the microbiome.
      They make no claim about how textbooks or other accounts present the body.
    review_status: pending
    reviews: []
  - id: non_fabrication_threat_narrative
    statement: >-
      The entry reads the earlier view of microorganisms as primarily threats as a narrative that
      went beyond the evidence, corrected once culture-independent sequencing made whole communities
      visible.
    claim_ids:
    - microbiota_functions
    - hmp_cohort
    - hmp_between_variation
    targets:
    - property:non_fabrication
    mapping_kind: interpretive_synthesis
    argument: >-
      The reading concerns what microbiologists asserted, so it is about people making claims.
      The HMP characterised the microbial communities of healthy adults, and the immunology review
      describes benefits of gut bacteria to the host. The entry takes these as showing that an
      account centred on threats left out most of the community.
    limits: >-
      No cited source says that early microbiology fabricated anything or described microorganisms
      as primarily threats; that history was not checked. The entry's statement that the vast
      majority of microorganisms are beneficial or neutral was not checked, and the HMP paper
      itself reports opportunistic 'pathogens' as near-ubiquitous in the healthy microbiome, so
      the beneficial/harmful division is not clean. The HMP did use 16S rRNA gene sequencing,
      but the claim that such methods first made the full community visible was not checked.
    review_status: pending
    reviews: []
---

# Microbiome

**Source**: Sender, Fuchs & Milo, "Revised Estimates for the Number of Human and Bacteria Cells in the Body," *PLoS Biology* 14, 2016; Cryan & Dinan, *Nature Reviews Neuroscience* 13, 2012
**Institution**: Weizmann Institute; University College Cork

## Finding

The human body hosts approximately 38 trillion bacterial cells -- slightly more than the ~30 trillion human cells (Sender et al., 2016, revising the older 10:1 estimate). These microorganisms form communities essential for digestion, immune development, and pathogen resistance, and animal studies suggest a role in mood regulation via the gut-brain axis. Germ-free mice show impaired immunity, altered stress responses, and abnormal brain chemistry. The Human Microbiome Project (NIH, 2007-2016) characterized microbial communities of 300 healthy adults: enormous variation between individuals, relative stability within.

## Pattern Mapping

**Humility** -- The microbiome demands humility about the boundaries of self. "You" are a community, not an individual. The immune system actively tolerates commensal microorganisms -- non-self by genetic definition but essential to self by function. The boundary between "you" and "not you" is far more porous than the immune system's binary logic suggests.

**Honesty** -- An honest account of human biology must include the microbiome. Describing the body as sterile and self-contained is incomplete -- not wrong in what it includes, but dishonest in what it omits.

**Non-fabrication** -- Early microbiology fabricated a narrative of microorganisms as primarily threats. The reality -- that the vast majority are beneficial or neutral -- was invisible until culture-independent methods (16S rRNA sequencing) made the full community visible.

## Connections

- [[Mycorrhizal Networks]] -- community as self; organism-ecosystem boundary
- [[Immune System and Clonal Selection]] -- the boundary that distinguishes self from non-self must accommodate the microbiome
- [[Homeostasis]] -- the microbiome participates in maintaining internal equilibrium
- [[Coral Reef Symbiosis]] -- both: mutualism as structural foundation, not exception
- [[Autocatalytic Sets]] -- collective function emerging from individual components

## Status

Sender et al. (2016). HMP Consortium, *Nature* 486, 2012. Cryan & Dinan (2012). Field evolving rapidly; many microbiome-disease associations remain correlational. The mapping to the five properties is this project's structural interpretation.

---

*The mapping to the five properties is this project's structural interpretation.*
