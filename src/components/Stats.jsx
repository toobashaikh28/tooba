const stats = [
  { value: '3.79', label: 'CGPA out of 4.0' },
  { value: '3', label: 'Platforms deployed' },
  { value: '30+', label: 'Events organized' },
  { value: '25+', label: 'REST endpoints in Splitly' },
  { value: '50+', label: 'IEEE branch members' },
];

export default function Stats() {
  return (
    <section className="stats" aria-label="Numbers at a glance">
      <dl className="container stats__grid">
        {stats.map((s) => (
          <div key={s.label} className="stats__item">
            <dt>{s.label}</dt>
            <dd>{s.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
