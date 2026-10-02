import Section from './Section.jsx';
import { education } from '../data/content.js';

export default function Education() {
  return (
    <Section id="education" title="Education" rail>
      <div className="education">
        <div className="timeline__head">
          <h3 className="h4">{education.degree}</h3>
          <p className="timeline__dates">{education.dates}</p>
        </div>
        <p className="timeline__org">{education.school}</p>
        <p className="education__details">{education.details.join(', ')}</p>

        <h3 className="h3-sub education__certs-title">Certifications</h3>
        <ul className="certs">
          {education.certifications.map((c) => (
            <li key={c.name}>
              <span>{c.name}</span>
              <span className="certs__issuer">{c.issuer}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
