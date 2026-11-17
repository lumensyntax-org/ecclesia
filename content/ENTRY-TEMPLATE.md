---
title: Entry template
---

# Entry template

New entries use the source-and-locator model. The frontmatter carries an `ecclesia:` block; the gate (`npm run content:check`) validates it. Root `strength` and `status` labels are retired and are rejected by the gate.

## Frontmatter

```yaml
domain: medicine
properties: [proportion, humility]
ecclesia:
  schema_version: 1
  entry_kind: source_analysis # or normative_proposal, interpretive_synthesis, person_profile
  coverage: partial # or complete
  coverage_notes: What has not been inventoried or located yet.
  review_status: pending
  reviews: []
  sources:
    - id: short_id
      citation: "Author(s), title, venue, year"
      source_kind: academic_article
      origin: external
      url: https://doi.org/...
      academic_review:
        status: not_documented
        note: This record does not document a peer-review process.
  claims:
    - id: claim_id
      text: One factual sentence the entry relies on.
      claim_kind: empirical
      origin: source_summary
      supports:
        - source_id: short_id
          locator:
            kind: page
            value: "p. 816"
          support: unassessed
          review_status: pending
          reviews: []
      review_status: pending
      reviews: []
  mappings:
    - id: mapping_id
      statement: How the claims are read through a property.
      claim_ids: [claim_id]
      targets: ["property:proportion"]
      mapping_kind: functional_analogy
      argument: Why the reading holds.
      limits: Where the reading stops holding.
      review_status: pending
      reviews: []
```

## Recording a check

A support may say `direct`, `partial` or `contradicts` only when it carries a locator record: proof that someone opened the primary source and found the passage.

```yaml
supports:
  - source_id: short_id
    locator:
      kind: page
      value: "p. 816"
    support: direct
    review_status: partial
    reviews:
      - reviewer: "session 2026-11-18"
        reviewer_kind: ai_session # or human
        date: 2026-11-18
        scope: locator
        result: passage found
        method: opened_primary_source
        source_url: https://doi.org/...
        accessed: 2026-11-18
        quote: "A short literal sentence from the source."
        claim_digest: sha256:... # npm run content:digest -- "content/DOMAIN/Entry.md"
```

- The digest binds the record to the claim's wording. If the claim is edited, the gate rejects the support until the passage is checked again.
- A record by an AI session allows `review_status: partial` at most. `reviewed` needs a human record.
- The quote stays short (300 characters at most): enough for a reader to find it, not a copy of the source.

## Rules

- **Locators are read, never recalled.** Open the primary source and record where the passage is. If the source cannot be reached, leave the support `unassessed` and say so in `coverage_notes`.
- **Analogy is declared.** When the subject asserts nothing (a physical law, an enzyme, a geological process), the mapping is `functional_analogy` or `conceptual_analogy`, and `limits` says where it stops.
- **No overall rating.** An entry has no global strength. Each claim and each mapping carries its own state.
- **Corrections are public.** An entry that is corrected, narrowed, relabelled or retracted gets a row in [[CORRECTIONS]].
- **A retracted entry keeps its address.** Add `retraction: {date, reason, commit}` inside the `ecclesia:` block and a `retracted` row in [[CORRECTIONS]]. The page shows a notice, and the entry leaves the count and the export.

## Body

```markdown
# Entry Title

**Source**: Author(s), Year

## Finding

What the source establishes. Keep fact apart from hypothesis.

## Pattern Mapping

**Property** -- How the finding is read through this property, and where the reading stops.

## Connections

- [[Other Entry]] -- what links them

## Status

What is established by the source, what is this project's interpretation, and any known criticism or replication problem.
```
