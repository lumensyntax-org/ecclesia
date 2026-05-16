# SCOPE — What the Ecclesia includes and excludes

The Ecclesia is a cross-domain catalogue of established findings mapped to the structural pattern named in the [README](./README.md): alignment, proportion, honesty, humility, non-fabrication. Each entry documents a finding from physics, biology, chemistry, theology, philosophy, or another domain, cites its established external source, and identifies how the pattern appears in that finding.

This document records what is included, what is permanently excluded, and the criteria by which the distinction is made.

## Inclusion criteria

An entry is eligible for inclusion if it meets all of the following:

1. **External established source.** The finding is documented in a peer-reviewed scientific publication, recognized scholarly work, canonical text, or comparable established reference. The source is verifiable independently of this project.
2. **Established vs. interpreted is marked.** The entry distinguishes what the source establishes from what is interpreted by this project. The interpretive layer is a structural reading; the underlying source is the authority.
3. **Demonstrable mapping.** At least one of the five properties is shown in the entry, with explicit reasoning. The mapping is not asserted; it is shown from what the source contains.
4. **Cross-domain connection.** The entry connects via wikilinks to at least one other Ecclesia entry, ideally in a different domain.
5. **Five-property test passed.** The entry itself respects the pattern in its own form — does not overclaim, does not fabricate, does not impose authority beyond what its source establishes.

## Permanent exclusion — Gap #7

The companion empirical work on language models — published as *The Instrument Trap* (Zenodo DOI [10.5281/zenodo.19634358](https://doi.org/10.5281/zenodo.19634358)) — is **not catalogued** as Ecclesia entries. The single reference to this work appears in the index as a companion citation; it does not appear as evidence within entries, as authority for cross-domain claims, or as a domain of its own.

**This exclusion is permanent, not provisional.** The Ecclesia is the catalogue of pattern across established external knowledge; the project's own research is one of the things the pattern can be tested against, not one of the pattern's instances. Maintaining this distinction is structural.

Concretely:

- Entries may not cite research, models, datasets, benchmarks, or empirical findings produced by this project as evidence for cross-domain structural claims
- Entries may not present the project's three-layer architecture, probe results, training methods, or related artifacts as paradigmatic cases of the pattern
- Entries may reference *The Instrument Trap* by DOI when the textual context warrants (e.g., a meta-discussion of the project's scope), but not as authority for the structural reading

The companion work enters the world through peer-reviewed publication, not through self-cataloguing. The Ecclesia documents the pattern in places that are not itself.

### Why this is permanent

The original sanitization at launch (April 2026) framed Gap #7 as awaiting peer review of related papers. On reflection, the more honest framing is structural:

1. **The Ecclesia's credibility depends on its distance from the project.** Cross-checking against the pattern requires the catalogue to be drawn from sources the project did not produce. Self-cataloguing collapses the cross-check.
2. **The project's own thesis prohibits it.** *The Instrument Trap* documents the failure mode in which an instrument claims the authority of what passes through it. Cataloguing the project's findings as authoritative cases of the pattern would commit precisely that failure at the level of the catalogue.
3. **Peer review changes status as science, not status as Ecclesia content.** A paper that passes peer review is established within its field. That does not make it suitable as Ecclesia content; the Ecclesia is a catalogue of cross-domain pattern, not a recognition list of validated science. The two artifacts have different purposes.
4. **Operating from the larger reality, not arguing for it.** The pattern documented in *Reframe Over Refute* applies here: the project demonstrates the pattern most credibly by operating from it (in how the catalogue is built) rather than by inserting itself into the catalogue as evidence of itself.

## What was excluded at launch and why

The sanitization of April 2026 excluded four entries from the source vault that were structurally about the project rather than about external findings:

- `BUILDERS/Jordan Peterson.md` — framed as intellectual continuation rather than as analysis of his external work
- `MEDICINE/CAR-T Cell Therapy.md` — used the therapy as paradigm for the project's three-layer architecture
- `MIND/fMRI Epistemic Probes.md` — presented project-internal probe results as neuroscientific evidence
- `MIND/Maps of Meaning as Structural Pattern.md` — synthesized Peterson's framework with the project's framing

These entries remain permanently excluded under the policy stated above. They may be reconsidered only if they can be rewritten entirely as treatments of the external source material (Peterson's clinical psychology work, CAR-T therapy as established medicine, fMRI methodology in mainstream neuroscience, *Maps of Meaning* as a 1999 monograph), with the project as neither subject nor authority. That would be different entries with the same titles, not edits of the existing files.

Additionally, the `LUMENSYNTAX-EDU/` folder in the source vault is excluded permanently as product planning material rather than catalogue content.

## Sanitization process for contributions

When a contributor submits content (via pull request or other channel):

1. **Check for project-as-authority.** Entries may cite this project's research only as background context (with DOI link), never as cross-domain evidence. References that frame project artifacts as authoritative instances of the pattern must be rewritten or removed.
2. **Check for legacy vocabulary.** "Cathedral" (the pre-launch internal codename) is renamed to "Ecclesia." Other legacy terms are similarly normalized.
3. **Check for project-internal paths.** References to filesystem paths, internal experiment IDs, training run identifiers, or other artifacts that only exist inside the project's workspace must be removed.
4. **Run the five-property test.** The entry must respect the pattern in its own form — no overclaim, no fabrication, no imposition.
5. **Verify cross-domain connection.** At least one wikilink to an entry in a different domain.

Entries that cannot pass all five checks are not merged.

## Why this scope is structural, not bureaucratic

These criteria are not procedural hygiene applied to satisfy abstract standards. They are the operational form of the project's central claim: *the instrument must not claim the authority of what passes through it.*

The Ecclesia is an instrument for documenting the pattern. If the instrument begins to catalogue itself, it has become the thing the pattern warns against. Maintaining the distance — between the project that documents and the catalogue of established findings — is the discipline by which the catalogue remains useful.

The five properties applied to the catalogue itself:

- **Alignment** — the catalogue's stated purpose (document pattern in established external findings) matches its practice (entries cite external sources, project is referenced but not catalogued)
- **Proportion** — the response to the question "is the project also evidence of the pattern?" is the project's peer-reviewed papers, not Ecclesia entries; the channel matches the kind of evidence
- **Honesty** — the gap is named; the reasoning is explicit; the reader sees what is excluded and why
- **Humility** — the project does not include itself as authority within the artefact it produced
- **Non-fabrication** — no entry is generated by claim of project authority; every entry's authority is the external source it cites

---

*The Ecclesia documents the pattern in places that are not itself. That is the discipline by which it remains a catalogue rather than a monument.*
