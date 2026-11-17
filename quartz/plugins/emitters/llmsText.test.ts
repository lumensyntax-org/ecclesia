import test, { describe } from "node:test"
import assert from "node:assert"
import { isEntrySlug, domainOf, buildLlmsIndex, buildLlmsFull } from "./llmsText"

describe("isEntrySlug (R4 — slug-based classification, not title substring)", () => {
  test("excludes indexes, sub-indexes, template, meta, and root", () => {
    assert.ok(!isEntrySlug("SPIRIT/00-Index"))
    assert.ok(!isEntrySlug("EARTH/00-Index-Influence"))
    assert.ok(!isEntrySlug("EARTH/00-Index-Scale"))
    assert.ok(!isEntrySlug("ENTRY-TEMPLATE"))
    assert.ok(!isEntrySlug("META-PATTERNS"))
    assert.ok(!isEntrySlug("CORRECTIONS"))
    assert.ok(!isEntrySlug("index"))
  })

  test("includes real entries, even ones whose title contains 'template' (R4)", () => {
    assert.ok(isEntrySlug("SPIRIT/The-Chalice-Test"))
    assert.ok(isEntrySlug("FORMAL-LANGUAGE/Template-Matching"))
    assert.ok(isEntrySlug("BODY/DNA-Template-Strand"))
  })
})

describe("domainOf", () => {
  test("is the first slug segment", () => {
    assert.strictEqual(domainOf("SPIRIT/The-Chalice-Test"), "SPIRIT")
    assert.strictEqual(domainOf("FORMAL-LANGUAGE/Template-Matching"), "FORMAL-LANGUAGE")
  })
})

describe("buildLlmsIndex / buildLlmsFull", () => {
  const entries = [
    {
      slug: "SPIRIT/The-Chalice-Test",
      title: "The Chalice Test",
      domain: "SPIRIT",
      sourcing: "sourcing: source-and-locator model, 1 of 2 sourced claims checked",
      record: "--- Sources and checks ---\nSources:\n- Aquinas",
      text: "Body one.",
    },
    {
      slug: "BODY/Apoptosis",
      title: "Apoptosis",
      domain: "BODY",
      text: "Body two.",
    },
  ]

  test("index reports the entry count and groups by domain", () => {
    const out = buildLlmsIndex(entries, "ecclesia.lumensyntax.com", "2026-09-15")
    assert.match(out, /lists 2 entries across 2 domains/)
    assert.match(out, /### SPIRIT/)
    assert.match(out, /- The Chalice Test/)
  })

  test("full text carries the real per-entry URL, sourcing note, and body", () => {
    const out = buildLlmsFull(entries, "ecclesia.lumensyntax.com", "2026-09-15")
    assert.match(out, /https:\/\/ecclesia\.lumensyntax\.com\/SPIRIT\/The-Chalice-Test/)
    assert.match(out, /The-Chalice-Test {2}\[sourcing: source-and-locator model, 1 of 2 sourced/)
    assert.match(out, /Body one\.\n\n--- Sources and checks ---\nSources:\n- Aquinas/)
    assert.match(out, /BODY\/Apoptosis {2}\[sourcing: legacy entry, sources not yet checked/)
    assert.match(out, /Body one\./)
  })

  test("the retired strength/status labels are never exported", () => {
    const out =
      buildLlmsFull(entries, "ecclesia.lumensyntax.com", "2026-09-15") +
      buildLlmsIndex(entries, "ecclesia.lumensyntax.com", "2026-09-15")
    assert.doesNotMatch(out, /strength: (STRONG|MODERATE|WEAK)/)
    assert.doesNotMatch(out, /status: /)
    assert.doesNotMatch(out, /peer_reviewed/)
  })

  test("a retracted entry is listed but leaves the corpus and the counts", () => {
    const withRetracted = [
      ...entries,
      { slug: "BODY/Gone", title: "Gone", domain: "BODY", retracted: true, text: "Withdrawn." },
    ]
    const index = buildLlmsIndex(withRetracted, "ecclesia.lumensyntax.com", "2026-09-15")
    assert.match(index, /lists 2 entries across 2 domains/)
    assert.match(
      index,
      /## Retracted[\s\S]*- Gone — https:\/\/ecclesia\.lumensyntax\.com\/BODY\/Gone/,
    )
    const full = buildLlmsFull(withRetracted, "ecclesia.lumensyntax.com", "2026-09-15")
    assert.match(full, /Entries: 2 across 2 domains/)
    assert.match(full, /1 retracted entry is not included/)
    assert.doesNotMatch(full, /Withdrawn\./)
  })

  test("the index links the corrections log", () => {
    const out = buildLlmsIndex(entries, "ecclesia.lumensyntax.com", "2026-09-15")
    assert.match(out, /\/CORRECTIONS\)/)
  })

  test("decodes one layer of Quartz's HTML escaping in the exported body (N1)", () => {
    const escaped = [
      {
        slug: "BODY/X",
        title: "X",
        domain: "BODY",
        text: "Jones &amp; Baylin, &lt;tag&gt;, and &amp;lt; literal.",
      },
    ]
    const out = buildLlmsFull(escaped, "ecclesia.lumensyntax.com", "2026-09-16")
    assert.match(out, /Jones & Baylin, <tag>, and &lt; literal\./)
  })
})
