export default function SmartInvestMock() {
  return (
    <div className="mock mock--invest">
      <div className="mock__head">
        <div>
          <p className="mock__label">Net worth</p>
          <div className="sk sk--title" style={{ width: 110 }} />
        </div>
        <div className="mock__tabs"><b>1D</b><span>1W</span><span>1M</span></div>
      </div>
      <svg viewBox="0 0 360 140" className="chart" role="presentation" preserveAspectRatio="none">
        {[28, 70, 112].map((y) => <line key={y} x1="0" x2="360" y1={y} y2={y} className="chart__grid" />)}
        <path d="M0 110 L40 96 L80 104 L120 78 L160 84 L200 58 L240 66 L280 40 L320 46 L360 22 L360 140 L0 140 Z" className="chart__area" />
        <path d="M0 110 L40 96 L80 104 L120 78 L160 84 L200 58 L240 66 L280 40 L320 46 L360 22" className="chart__line" />
      </svg>
      <ul className="mock__rows">
        {[0, 1, 2].map((i) => (
          <li key={i}><span className="sk" style={{ width: `${34 - i * 6}%` }} /><span className="sk" style={{ width: '14%' }} /></li>
        ))}
      </ul>
    </div>
  );
}
