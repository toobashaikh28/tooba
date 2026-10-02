import RouteGraph from './mockups/RouteGraph.jsx';
import TechList from './TechList.jsx';

export default function ProjectCompact({ project }) {
  return (
    <article className="compact" aria-labelledby={`${project.id}-name`}>
      <div className="compact__visual"><RouteGraph /></div>
      <div className="compact__text">
        <h3 id={`${project.id}-name`} className="h3 project__name">{project.name}</h3>
        <p className="project__tagline">{project.tagline}</p>
        <p className="compact__body">{project.built}</p>
        {project.award && <p className="award">{project.award}</p>}
        <TechList items={project.stack} />
      </div>
    </article>
  );
}
