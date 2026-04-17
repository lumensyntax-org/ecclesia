---
domain: construction
properties: [proportion, alignment, honesty]
strength: STRONG
status: peer_reviewed
---

# Feedback Control

**Source**: Nicolas Minorsky, 1922; Norbert Wiener, *Cybernetics*, 1948; Hendrik Bode, 1945

## Finding

A feedback control system measures the difference between a desired state and an actual state, and applies corrective action proportional to the error. The PID controller uses three terms: P (proportional to current error), I (proportional to accumulated error), D (proportional to rate of change). Failure modes are structural: overshoot (too much correction), undershoot (too little), instability (corrections amplify error). Wiener's insight: this structure -- measurement, comparison, correction -- is universal: thermostats, cruise control, biological homeostasis, economic policy.

## Pattern Mapping

**Proportion** -- The PID controller is proportion incarnate. The P term: correct in proportion to error. The I term: correct for accumulated drift. The D term: correct in proportion to rate of change. Every term is a proportionality relationship. Overshoot and undershoot are proportion failures.

**Alignment** -- The entire purpose is alignment: making actual state match desired state. The gap between desired and actual IS the error signal.

**Honesty** -- The sensor must honestly report current state. A temperature sensor reading 20C when the room is 30C causes the controller to heat an already warm room. Sensor honesty is prerequisite to control system function.

## Connections

- [[Safety Factors in Structural Engineering]] -- both calibrate response proportionally
- [[Le Chatelier's Principle]] -- chemical equilibrium feedback is the same structure (-> [[Meta-Pattern 09]])
- [[Autoimmune Disease]] -- immune regulation is a feedback system; autoimmunity is when it malfunctions
- [[Addiction]] -- addiction is a hijacked feedback loop: reward system oscillating between excess and deficit
- [[The Arms Race]] -- arms races are positive feedback loops without proportional control

## Status

Control theory is established engineering (Astrom and Murray, *Feedback Systems*, 2008). Minorsky (1922). Wiener's *Cybernetics* (1948) is foundational. The characterization as proportion engineering is this project's interpretation, though P-proportionality is definitional.

---

*The mapping to the five properties is this project's structural interpretation.*
