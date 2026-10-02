const items = ['Java', 'Spring Boot', 'React', 'Node.js', 'MongoDB', 'Python', 'Docker', 'RAG', 'Tailwind CSS', 'JWT', 'REST APIs', 'MySQL', 'Git', 'Tableau'];

export default function Ticker() {
  return (
    <div className="ticker" aria-label={`Technologies: ${items.join(', ')}`} role="group">
      <div className="ticker__track" aria-hidden="true">
        {[0, 1].map((n) => (
          <ul key={n} className="ticker__row">
            {items.map((t) => <li key={t}>{t}</li>)}
          </ul>
        ))}
      </div>
    </div>
  );
}
