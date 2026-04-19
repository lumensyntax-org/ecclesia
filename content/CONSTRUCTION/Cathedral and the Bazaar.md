---
domain: construction
properties: [honesty, humility, alignment, non_fabrication]
strength: MODERATE
status: peer_reviewed
---

# Cathedral and the Bazaar

**Source**: Eric S. Raymond, "The Cathedral and the Bazaar," 1997 (expanded 1999)

## Finding

Raymond contrasted two development models: the cathedral (small team, controlled releases, code visible only at release) and the bazaar (open development, frequent releases, "given enough eyeballs, all bugs are shallow"). The essay influenced Netscape's decision to open-source its browser (1998, leading to Mozilla/Firefox). The irony for this taxonomy: our Cathedral is named after the closed model, yet it is structurally a bazaar -- open research, public repository, claims subject to verification by all. Most successful projects combine elements of both: a core team providing architectural vision with open contribution on implementation.

## Pattern Mapping

**Honesty** -- The bazaar model's core claim is that transparency produces quality. Code anyone can read cannot hide defects. Many readers means many opportunities for alignment gaps to be detected.

**Humility** -- The cathedral concentrates authority; the bazaar distributes it. Neither is inherently superior: cryptographic protocols benefit from concentrated review; operating systems benefit from distributed contribution. Scope determines which model fits.

**Alignment** -- The bazaar works when there is a clear, shared goal. Linux succeeded because Torvalds maintained architectural vision while accepting contributions from thousands.

**Non-fabrication** -- The cathedral fabricates simplicity: users see polish, not the messy process. The bazaar exposes the process and trusts that honest mess produces better results than fabricated polish.

## Connections

- [[Open Source]] -- the bazaar model is the organizational principle of open source
- [[Distributed Systems and Consensus]] -- bazaar development is distributed consensus on code
- [[Propaganda]] -- propaganda is the anti-bazaar: closed production of messaging (-> [[Meta-Pattern 06]])
- [[Just War Theory]] -- both frameworks apply structural principles to complex collective action
- [[Langlands Program]] -- both reveal unity beneath apparent diversity of approach

## Status

Raymond at catb.org (O'Reilly, 1999). Brooks, *The Mythical Man-Month* (1975). Netscape/Mozilla documented in *Open Sources* (O'Reilly, 1999). The characterization in terms of the five properties is this project's structural interpretation.

---

*The mapping to the five properties is this project's structural interpretation.*
