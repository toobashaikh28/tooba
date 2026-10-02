import Section from './Section.jsx';
import { education, experience, sectionTitles } from '../data/content.js';

export default function Experience() {
  return (
    <Section id="experience" title={sectionTitles.experience} tint>
      <div className="exp">
        <ol className="timeline">
          {experience.map((e) => (
            <li key={e.role} className="timeline__item">
              <div className="timeline__head">
                <h3 className="h3">{e.role}</h3>
                <p className="timeline__dates">{e.dates}</p>
              </div>
              <p className="timeline__org">{e.org}</p>
              <ul className="timeline__points">
                {e.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
            </li>
          ))}
        </ol>

        <div className="edu">
          <h3 className="h3">{education.degree}</h3>
          <p className="timeline__org">{education.school}</p>
          <p className="timeline__dates">{education.dates}</p>
          <p className="edu__details">{education.details}</p>
        </div>
      </div>
    </Section>
  );
}
