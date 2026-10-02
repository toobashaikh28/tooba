export default function TimelineItem({ role, org, dates, points }) {
  return (
    <li className="timeline__item">
      <div className="timeline__head">
        <h4 className="h4">{role}</h4>
        <p className="timeline__dates">{dates}</p>
      </div>
      <p className="timeline__org">{org}</p>
      <ul className="timeline__points">
        {points.map((p) => <li key={p}>{p}</li>)}
      </ul>
    </li>
  );
}
