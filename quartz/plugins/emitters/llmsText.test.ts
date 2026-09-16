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
      strength: "STRONG",
      status: "established_scholarship",
      text: "Body one.",
    },
    {
      slug: "BODY/Apoptosis",
      title: "Apoptosis",
      domain: "BODY",
      strength: "MODERATE",
      status: "textbook",
      text: "Body two.",
    },
  ]

  test("index reports the entry count and groups by domain", () => {
    const out = buildLlmsIndex(entries, "ecclesia.lumensyntax.com", "2026-09-15")
    assert.match(out, /lists 2 entries across 2 domains/)
    assert.match(out, /### SPIRIT/)
    assert.match(out, /- The Chalice Test/)
  })

  test("full text carries the real per-entry URL, metadata, and body", () => {
    const out = buildLlmsFull(entries, "ecclesia.lumensyntax.com", "2026-09-15")
    assert.match(out, /https:\/\/ecclesia\.lumensyntax\.com\/SPIRIT\/The-Chalice-Test/)
    assert.match(out, /status: established_scholarship/)
    assert.match(out, /Body one\./)
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
