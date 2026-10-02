/**
 * Shared section wrapper. Every section uses the same pattern: title above the content.
 * `tint` gives the section the quiet alternate background.
 */
export default function Section({ id, title, note, tint = false, children }) {
  return (
    <section id={id} className={`section${tint ? ' section--tint' : ''}`} aria-labelledby={`${id}-title`}>
      <div className="container">
        <header className="section__header">
          <h2 id={`${id}-title`} className="h2">{title}</h2>
          {note && <p className="section__note">{note}</p>}
        </header>
        {children}
      </div>
    </section>
  );
}
