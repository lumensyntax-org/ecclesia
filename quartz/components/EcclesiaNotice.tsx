import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/ecclesia.scss"
import { isEntrySlug } from "../util/entries"
import { buildEcclesiaView, LEGACY_NOTE } from "../util/ecclesiaView"
import { resolveRelative, FullSlug } from "../util/path"

// The line a reader sees before the body: a retraction notice, or the plain statement that
// a legacy entry has not been checked yet. Migrated entries say nothing here; their record
// is under the body.
export default (() => {
  const EcclesiaNotice: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
    if (!fileData.slug || !isEntrySlug(fileData.slug)) return null
    const corrections = resolveRelative(fileData.slug, "CORRECTIONS" as FullSlug)
    const view = buildEcclesiaView(fileData.frontmatter?.ecclesia)
    if (view?.retraction) {
      return (
        <div class="ecclesia-notice retracted" role="note">
          <p>
            <strong>Retracted on {view.retraction.date}.</strong> {view.retraction.reason}
          </p>
          <p class="ecclesia-fine">
            The text below is kept for the record and is no longer asserted. See the{" "}
            <a href={corrections} class="internal">
              corrections log
            </a>{" "}
            (commit <code>{view.retraction.commit}</code>).
          </p>
        </div>
      )
    }
    if (view) return null
    return (
      <p class="ecclesia-notice legacy" role="note">
        {LEGACY_NOTE}
      </p>
    )
  }

  EcclesiaNotice.css = style
  return EcclesiaNotice
}) satisfies QuartzComponentConstructor
