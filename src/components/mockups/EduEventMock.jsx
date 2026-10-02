export default function EduEventMock() {
  return (
    <div className="mock mock--edu">
      <div className="mock__main">
        <div className="mock__tabs"><b>Quiz</b><span>Events</span><span>Teams</span></div>
        <div className="sk sk--title" />
        <div className="sk sk--line" />
        <div className="sk sk--line sk--short" />
        <ul className="mock__options">
          <li><i /><span className="sk" /></li>
          <li className="is-picked"><i /><span className="sk" /></li>
          <li><i /><span className="sk" /></li>
          <li><i /><span className="sk" /></li>
        </ul>
      </div>
      <div className="mock__side">
        <p className="mock__label">Proctoring</p>
        <svg viewBox="0 0 120 90" className="cam" role="presentation">
          <rect x="0" y="0" width="120" height="90" rx="6" className="cam__bg" />
          <ellipse cx="60" cy="42" rx="20" ry="25" className="cam__face" />
          <circle cx="52" cy="38" r="2.6" className="cam__eye" />
          <circle cx="68" cy="38" r="2.6" className="cam__eye" />
          <path d="M40 17h-8a4 4 0 0 0-4 4v8M80 17h8a4 4 0 0 1 4 4v8M40 73h-8a4 4 0 0 1-4-4v-8M80 73h8a4 4 0 0 0 4-4v-8" className="cam__corners" />
        </svg>
        <p className="mock__status"><i /> Face detected</p>
      </div>
    </div>
  );
}
