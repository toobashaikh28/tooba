import Button from './Button.jsx';
import ProjectPreview from './ProjectPreview.jsx';
import TechList from './TechList.jsx';

const SHOWN = 2; // highlights visible by default

export default function ProjectCard({ project }) {
  const { id, name, summary, problem, role, highlights, stack, live, github } = project;
  const extra = highlights.slice(SHOWN);
  const hasDetails = Boolean(problem || role || extra.length);

  return (
    <article className="project" aria-labelledby={`${id}-name`}>
      <ProjectPreview project={project} />

      <div className="project__body">
        <h3 id={`${id}-name`} className="h3">{name}</h3>
        <p className="project__summary">{summary}</p>

        <ul className="project__points">
          {highlights.slice(0, SHOWN).map((h) => <li key={h}>{h}</li>)}
        </ul>

        <TechList items={stack} />

        {hasDetails && (
          <details className="project__details">
            <summary>More details</summary>
            <dl>
              {problem && <div><dt>The problem</dt><dd>{problem}</dd></div>}
              {role && <div><dt>My role</dt><dd>{role}</dd></div>}
              {extra.length > 0 && (
                <div>
                  <dt>More highlights</dt>
                  <dd><ul>{extra.map((h) => <li key={h}>{h}</li>)}</ul></dd>
                </div>
              )}
            </dl>
          </details>
        )}

        {(live || github) && (
          <div className="project__links">
            {live && <Button href={live} size="sm">Live Demo</Button>}
            {github && <Button href={github} variant="outline" size="sm">GitHub</Button>}
          </div>
        )}
      </div>
    </article>
  );
}
