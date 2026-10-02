export default function TechList({ items }) {
  return (
    <ul className="tech" aria-label="Technologies used">
      {items.map((t) => <li key={t}>{t}</li>)}
    </ul>
  );
}
