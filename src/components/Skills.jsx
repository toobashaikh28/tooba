import Section from './Section.jsx';
import { coreSkills, sectionTitles, skills, skillsNote } from '../data/content.js';

export default function Skills() {
  return (
    <Section id="skills" title={sectionTitles.skills} note={skillsNote}>
      <div className="skills">
        {skills.map((s) => (
          <section key={s.group} className="skill-group" aria-labelledby={`skill-${s.group}`}>
            <h3 id={`skill-${s.group}`} className="skill-group__title">{s.group}</h3>
            <ul>
              {s.items.map((item) => (
                <li key={item} className={coreSkills.includes(item) ? 'chip--core' : undefined}>{item}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </Section>
  );
}
