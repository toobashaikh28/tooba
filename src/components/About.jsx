import Section from './Section.jsx';
import { about, sectionTitles } from '../data/content.js';

export default function About() {
  return (
    <Section id="about" title={sectionTitles.about}>
      <p className="about__intro">{about.intro}</p>
      <dl className="facts">
        {about.facts.map((f) => (
          <div key={f.label} className="facts__item">
            <dt>{f.label}</dt>
            <dd>{f.value}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
