import test, { describe } from "node:test"
import assert from "node:assert"
import { highlightFragment } from "./highlight"

describe("highlightFragment (R3 — match on the original text, escape each fragment)", () => {
  test("does not split HTML entities when the query hits & or < >", () => {
    // R3 regression: escaping THEN matching wrapped a span inside "&amp;".
    assert.strictEqual(highlightFragment("A&B", "a"), `<span class="highlight">A</span>&amp;B`)
    assert.strictEqual(
      highlightFragment("<tag>", "t"),
      `&lt;<span class="highlight">t</span>ag&gt;`,
    )
  })

  test("neutralizes raw markup while highlighting (T05)", () => {
    const out = highlightFragment("<img onerror=x>", "img")
    assert.ok(!out.includes("<img"), "no live tag may survive")
    assert.strictEqual(out, `&lt;<span class="highlight">img</span> onerror=x&gt;`)
  })

  test("matches regex-metacharacter queries literally (T04)", () => {
    assert.strictEqual(highlightFragment("C++", "C++"), `<span class="highlight">C++</span>`)
    assert.doesNotThrow(() => highlightFragment("(note)", "("))
  })

  test("escapes non-matching text and returns it unwrapped", () => {
    assert.strictEqual(highlightFragment("A&B", "zzz"), "A&amp;B")
  })
})
