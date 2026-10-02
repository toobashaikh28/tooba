import BrowserFrame from './mockups/BrowserFrame.jsx';
import EduEventMock from './mockups/EduEventMock.jsx';
import SmartInvestMock from './mockups/SmartInvestMock.jsx';
import SplitlyMock from './mockups/SplitlyMock.jsx';
import TechList from './TechList.jsx';
import Button from './Button.jsx';

const mocks = { eduevent: EduEventMock, smartinvest: SmartInvestMock, splitly: SplitlyMock };

export default function ProjectFeatured({ project }) {
  const Mock = mocks[project.mock];
  const [primary, ...others] = project.links;

  return (
    <article className="project" aria-labelledby={`${project.id}-name`}>
      <div className="project__visual">
        <BrowserFrame host={project.host}>
          {project.screenshot ? (
            <img className="project__shot" src={project.screenshot} alt={`Screenshot of ${project.name}`} loading="lazy" />
          ) : (
            <div aria-hidden="true"><Mock /></div>
          )}
        </BrowserFrame>
      </div>

      <div className="project__text">
        <h3 id={`${project.id}-name`} className="h3 project__name">{project.name}</h3>
        <p className="project__tagline">{project.tagline}</p>

        <dl className="project__facts">
          <div><dt>The problem</dt><dd>{project.problem}</dd></div>
          <div><dt>What I built</dt><dd>{project.built}</dd></div>
          <div><dt>My role</dt><dd>{project.role}</dd></div>
        </dl>

        <ul className="project__highlights">
          {project.highlights.map((h) => <li key={h}>{h}</li>)}
        </ul>

        <TechList items={project.stack} />

        <div className="project__links">
          {primary && <Button href={primary.url}>{primary.label}<span className="visually-hidden"> (opens in a new tab)</span></Button>}
          {others.map((l) => (
            <Button key={l.url} href={l.url} variant="secondary">{l.label}<span className="visually-hidden"> (opens in a new tab)</span></Button>
          ))}
        </div>
      </div>
    </article>
  );
}
