import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/ecclesia.scss"
import { isEntrySlug } from "../util/entries"
import { buildEcclesiaView, checkSummary, CHECK_EXPLANATION } from "../util/ecclesiaView"

// Shows a migrated entry's sources, claims, locators and mapping limits under its body.
// Before this component the `ecclesia:` block was visible only in the repository, so a
// reader of the site could not check anything.
export default (() => {
  const EcclesiaRecord: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
    if (!fileData.slug || !isEntrySlug(fileData.slug)) return null
    const view = buildEcclesiaView(fileData.frontmatter?.ecclesia)
    if (!view) return null
    return (
      <section class="ecclesia-record">
        <h2 id="sources-and-checks">Sources and checks</h2>
        <p>{checkSummary(view)}</p>
        {view.checkedClaims > 0 && <p class="ecclesia-fine">{CHECK_EXPLANATION}</p>}

        {view.sources.length > 0 && (
          <>
            <h3>Sources</h3>
            <ul>
              {view.sources.map((s) => (
                <li>
                  {s.url ? (
                    <a href={s.url} class="external" rel="noopener">
                      {s.citation}
                    </a>
                  ) : (
                    s.citation
                  )}
                  <span class="ecclesia-fine">
                    {" "}
                    ({[s.kind, s.academicReview].filter(Boolean).join("; ")})
                  </span>
                </li>
              ))}
            </ul>
          </>
        )}

        {view.claims.length > 0 && (
          <>
            <h3>Claims</h3>
            <ol>
              {view.claims.map((c) => (
                <li>
                  <p>
                    {c.text} <span class="ecclesia-tag">{c.origin}</span>
                  </p>
                  {c.supports.length > 0 && (
                    <ul>
                      {c.supports.map((s) => (
                        <li>
                          <span class={s.checked ? "ecclesia-state checked" : "ecclesia-state"}>
                            {s.label}
                          </span>
                          . {s.citation}
                          {s.locator && `, ${s.locator}`}
                          {s.checks.map((k) => (
                            <blockquote>
                              <p>{k.quote}</p>
                              <p class="ecclesia-fine">
                                Checked {k.accessed} by {k.by} at{" "}
                                <a href={k.url} class="external" rel="noopener">
                                  the source
                                </a>
                                .
                              </p>
                            </blockquote>
                          ))}
                          {s.note && <p class="ecclesia-fine">{s.note}</p>}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ol>
          </>
        )}

        {view.mappings.length > 0 && (
          <>
            <h3>Mappings</h3>
            <p class="ecclesia-fine">These are this project's interpretation, not findings.</p>
            <ul>
              {view.mappings.map((m) => (
                <li>
                  <p>
                    {m.statement} <span class="ecclesia-tag">{m.kind}</span>
                  </p>
                  <p class="ecclesia-fine">Limits: {m.limits}</p>
                </li>
              ))}
            </ul>
          </>
        )}

        {view.coverage === "partial" && view.coverageNotes && (
          <p class="ecclesia-fine">Not yet covered: {view.coverageNotes}</p>
        )}
      </section>
    )
  }

  EcclesiaRecord.css = style
  return EcclesiaRecord
}) satisfies QuartzComponentConstructor
