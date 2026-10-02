const items = [
  { name: 'Margherita pizza', who: ['A', 'B'] },
  { name: 'Caesar salad', who: ['B'] },
  { name: 'Iced tea', who: ['A', 'B', 'C'] },
];

export default function SplitlyMock() {
  return (
    <div className="mock mock--split">
      <div className="mock__head">
        <p className="mock__label">Dinner, Friday</p>
        <span className="chip">Scanned from receipt</span>
      </div>
      <ul className="split__items">
        {items.map((it) => (
          <li key={it.name}>
            <span>{it.name}</span>
            <span className="split__who">
              {it.who.map((w) => <i key={w}>{w}</i>)}
            </span>
          </li>
        ))}
        <li className="split__tax"><span>Tax, shared in proportion</span><span className="sk" style={{ width: 36 }} /></li>
      </ul>
      <div className="split__settle">
        <p className="mock__label">Settle up</p>
        <p><i>B</i> pays <i>A</i></p>
        <p><i>C</i> pays <i>A</i></p>
      </div>
    </div>
  );
}
