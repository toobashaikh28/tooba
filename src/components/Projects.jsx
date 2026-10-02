import Section from './Section.jsx';
import ProjectCard from './ProjectCard.jsx';
import { projects, sectionTitles } from '../data/content.js';

export default function Projects() {
  return (
    <Section id="projects" title={sectionTitles.projects} tint>
      <div className="projects">
        {projects.map((p) => <ProjectCard key={p.id} project={p} />)}
      </div>
    </Section>
  );
}
