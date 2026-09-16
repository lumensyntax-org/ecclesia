import test, { describe } from "node:test"
import assert from "node:assert"
import { escapeRegExp, escapeHTML, decodeEntitiesOnce } from "./escape"

describe("decodeEntitiesOnce (N1 — recover plain text from Quartz's escaped file.data.text)", () => {
  test("decodes the common entities one layer", () => {
    assert.strictEqual(decodeEntitiesOnce("Jones &amp; Baylin"), "Jones & Baylin")
    assert.strictEqual(decodeEntitiesOnce("&lt;tag&gt;"), "<tag>")
    assert.strictEqual(decodeEntitiesOnce("say &quot;hi&quot;"), 'say "hi"')
  })

  test("decodes exactly ONE layer, so an author's literal entity survives", () => {
    // "&amp;lt;" is the escaped form of a literal "&lt;"; it must stay "&lt;", not "<".
    assert.strictEqual(decodeEntitiesOnce("&amp;lt;"), "&lt;")
  })
})

describe("escapeHTML (security contract the search XSS fix relies on)", () => {
  test("neutralizes an HTML tag with an event handler", () => {
    const out = escapeHTML(`<img src=x onerror="alert(1)">`)
    assert.ok(!out.includes("<img"), "must not leave a live tag")
    assert.match(out, /&lt;img/)
  })

  test("escapes all five sensitive characters", () => {
    assert.strictEqual(escapeHTML(`& < > " '`), "&amp; &lt; &gt; &quot; &#039;")
  })

  test("leaves ordinary text untouched", () => {
    assert.strictEqual(escapeHTML("Casgevy approval"), "Casgevy approval")
  })
})

describe("escapeRegExp", () => {
  test("lets a query with regex metacharacters compile without throwing", () => {
    // The search bug (T04): new RegExp("c++", "gi") throws "nothing to repeat".
    assert.doesNotThrow(() => new RegExp(escapeRegExp("C++"), "gi"))
    assert.doesNotThrow(() => new RegExp(escapeRegExp("("), "gi"))
    assert.doesNotThrow(() => new RegExp(escapeRegExp("[a"), "gi"))
  })

  test("matches the metacharacter text literally", () => {
    assert.match("a C++ tutorial", new RegExp(escapeRegExp("C++"), "i"))
    assert.match("a (note) here", new RegExp(escapeRegExp("(note)"), "i"))
    // '+' must be literal, not the "one or more" quantifier:
    assert.doesNotMatch("cccc", new RegExp(escapeRegExp("c++"), "i"))
  })

  test("escapes a literal backslash", () => {
    assert.match("a path\\to file", new RegExp(escapeRegExp("\\to"), "i"))
  })

  test("leaves plain text unchanged", () => {
    assert.strictEqual(escapeRegExp("hello world"), "hello world")
  })
})
