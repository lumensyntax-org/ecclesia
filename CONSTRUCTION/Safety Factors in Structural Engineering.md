---
domain: construction
properties: [humility, proportion, alignment]
strength: STRONG
status: peer_reviewed
---

# Safety Factors in Structural Engineering

**Source**: Stephen Timoshenko, *History of Strength of Materials*, 1953; Henry Petroski, *To Engineer Is Human*, 1985

## Finding

A safety factor is the ratio of a structure's maximum capacity to its expected load. A bridge designed for 10,000 kg with FoS of 3 withstands 30,000 kg. When safety factors are violated, consequences are catastrophic: the Tacoma Narrows Bridge (1940) failed from aeroelastic flutter the designers had not considered. The Hyatt Regency walkway (1981, 114 dead) failed because a construction change doubled the load on a critical connection, reducing the actual safety factor below 1.0. Both were alignment failures: actual capacity did not match designed capacity.

## Pattern Mapping

**Humility** -- The safety factor is humility quantified. It says: our calculations may be wrong, our materials may be imperfect, loads may exceed predictions. An engineer using FoS of 1.0 claims perfect knowledge -- that claim is fabrication.

**Proportion** -- The safety factor must be proportional to uncertainty. Well-understood static loads need lower factors than uncertain dynamic loads. Over-engineering (FoS of 10 where 2 suffices) wastes resources; under-engineering kills people.

**Alignment** -- Hyatt Regency: design documents said one thing, as-built structure did another. The alignment gap between drawing and reality was lethal.

## Connections

- [[Materials Science]] -- material limits define the boundaries safety factors must respect
- [[Redundancy in Aviation]] -- aviation safety factors and Swiss cheese model: distributed humility
- [[Feedback Control]] -- both calibrate response to measured conditions (-> [[Meta-Pattern 09]])
- [[Bayesian Inference]] -- safety factors encode prior uncertainty about loads and materials
- [[The Atomic Bomb]] -- both raise questions of proportion: action vs. consequence

## Status

Safety factor practice is standard structural engineering (Timoshenko, 1953; Hibbeler, *Structural Analysis*, 10th ed., 2017). Tacoma Narrows and Hyatt documented in Petroski (1985, 1994). The characterization as quantified humility is this project's interpretation.

---

*The mapping to the five properties is this project's structural interpretation.*
