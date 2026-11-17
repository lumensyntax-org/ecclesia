---
title: Corrections
---

# Corrections

This page lists every entry that has been corrected, narrowed, relabelled or retracted since publication. Each row names the commit that made the change, so the before and after can be read in the [repository history](https://github.com/lumensyntax-org/ecclesia/commits/main).

A catalogue that only shows what it still asserts cannot be checked. This log is the part that shows what did not hold.

## Kinds of change

- **corrected**: a statement was wrong against its source and was fixed.
- **narrowed**: a statement claimed more than its source supports and was scoped down.
- **relabelled**: metadata described the entry or its source inaccurately and was changed.
- **retracted**: the entry no longer stands. Its page stays at the same address with a notice.

## Entry log

| Date | Entry | Kind | What changed | Commit |
| --- | --- | --- | --- | --- |
| 2026-09-14 | [[SPIRIT/The Chalice Test]] | narrowed | The status label `peer_reviewed` read as if the entry had been peer reviewed; its sources are canonical texts and scholarship. A self-verdict section was reframed as disciplines that can be evaluated from outside. | `01217f0` |
| 2026-09-14 | [[SPIRIT/The First Light-Bearer]] | narrowed | "Structural identity" across domains became a homology scoped to mediators that can claim a source-position. The non-agentive cases (apoptosis, stellar nucleosynthesis) are now labelled as analogy. | `01217f0` |
| 2026-09-16 | [[SPIRIT/The Chalice Test]] | corrected | The entry over-read Aquinas. Summa Theologiae III q.64 treats sacramental intention as doing what the Church does, and holds that a wrongful ulterior motive does not invalidate; the entry had located validity in the minister's disposition. The three conditions are now stated as the project's own ethical proposal. | `6ba5016` |
| 2026-09-16 | [[SPIRIT/Magnifica Humanitas — Encyclical on Artificial Intelligence]] | relabelled | The source was labelled `peer_reviewed`. A papal encyclical is an institutional source, not a peer-reviewed one. | `6ba5016` |
| 2026-09-16 | [[SPIRIT/The Chalice Test]] | narrowed | The Finding opened with a universal "if and only if". It now describes a working discipline, and the overall strength rating was removed. | `ed1cecb` |
| 2026-09-28 | [[SHADOW/The Inverted Outlet]] | corrected | The entry called its central mechanism "established Catholic teaching"; the mechanism is the project's own synthesis. It also treated a refutation as confirmation and read accusation statistics as evidence of practice. All three were restated as proposals. | `7a48563` |

## Catalogue-wide changes

These changed many entries at once and are not counted per entry.

- **2026-06-02** (`915fabe`): removed text that framed the catalogue around its author, deleted a stale duplicate index, and reconciled the entry count the home page stated with the files actually present.
- **2026-06-05** (`e5ad996`): removed dangling meta-pattern references from 203 entries. The pages they pointed to never existed.
- **2026-11-17** (`2a8eade`): retired the root `strength` and `status` labels from every entry. `status: peer_reviewed` appeared on 251 entries and read as a statement about the entry, when it described the source at best. `strength: STRONG` appeared on 278 entries with no measured criterion. The old values are kept under `ecclesia_legacy` as a record and are no longer exported. The home page was reworded in the same change: it no longer says the five properties "give reality its coherence".

## What this log does not show

Most entries have not yet been checked against their primary sources. An entry that is absent from this page has not been verified; it has only not been examined yet.
