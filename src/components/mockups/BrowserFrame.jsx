/** Decorative browser window used to frame the project illustrations. */
export default function BrowserFrame({ host, children }) {
  return (
    <div className="frame">
      <div className="frame__bar">
        <span className="frame__dots" aria-hidden="true"><i /><i /><i /></span>
        <span className="frame__url" aria-hidden="true">{host}</span>
      </div>
      <div className="frame__screen">{children}</div>
    </div>
  );
}
