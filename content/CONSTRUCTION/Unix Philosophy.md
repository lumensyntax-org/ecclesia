---
domain: construction
properties: [proportion, humility, alignment]
strength: STRONG
status: peer_reviewed
---

# Unix Philosophy

**Source**: Doug McIlroy, Bell System Technical Journal, 1978; Ken Thompson & Dennis Ritchie, Bell Labs, 1969-1973

## Finding

The Unix philosophy: (1) Write programs that do one thing and do it well. (2) Write programs to work together. (3) Write programs to handle text streams, because that is a universal interface. Small, composable tools (`grep`, `sort`, `awk`, `sed`, `wc`, `cut`) connected by pipes. Each tool has a narrow scope, a clear interface (stdin/stdout), and no knowledge of what comes before or after it in the pipeline. The philosophy influenced everything from the GNU project to microservices architecture to functional programming.

## Pattern Mapping

**Proportion** -- "Do one thing and do it well" is proportion as a design commandment. `grep` searches. It does not sort, format, or compile. Adding those features would violate proportion -- action exceeding stated purpose.

**Humility** -- Each tool operates within its scope and makes no claims about what lies outside. `sort` does not know whether its input is names or temperatures. The humility of ignorance about context is what makes the tool universally composable.

**Alignment** -- The man page for each tool states what it does. The tool does that. Alignment between documentation and behavior.

## Connections

- [[Abstraction Layers]] -- each Unix tool is an abstraction layer with bounded scope
- [[Feedback Control]] -- both embody proportion: response matched to purpose
- [[Spectroscopy]] -- each atom does one thing (emits its spectrum); each Unix tool does one thing
- [[Group Theory and Symmetry]] -- composability in Unix parallels group composition in algebra
- [[Le Chatelier's Principle]] -- partial, bounded response to input (-> [[Meta-Pattern 09]])

## Status

McIlroy (BSTJ, 1978). History in Kernighan, *Unix: A History and a Memoir* (2019). The characterization as proportion and humility is this project's structural interpretation.

---

*The mapping to the five properties is this project's structural interpretation.*
