import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink, Github, MessageCircle, Dna, BarChart3 } from 'lucide-react';
import { portfolio } from '../data/portfolio.js';

const projectIcons = { chat: MessageCircle, protein: Dna, analytics: BarChart3 };

function ProjectArtwork({ project }) {
  const Icon = projectIcons[project.visual] || ExternalLink;
  return (
    // VISUAL PLACEHOLDER: replace this CSS artwork with a real screenshot by adding imageUrl to a project in portfolio.js.
    <div className={`project-art project-art-${project.accent}`}>
      <div className="art-window-bar"><span /><span /><span /><small>{project.name}</small></div>
      <div className={`art-illustration art-illustration-${project.visual}`}>
        <div className="art-orb art-orb-one" /><div className="art-orb art-orb-two" />
        <div className="art-ui-card art-ui-card-one" /><div className="art-ui-card art-ui-card-two" />
        <div className="art-central-icon"><Icon size={38} strokeWidth={1.5} /></div>
        {project.visual === 'analytics' && <div className="fake-bars">{[35, 60, 44, 80, 52, 95, 68, 76, 49].map((height, i) => <i key={i} style={{ height: `${height}%` }} />)}</div>}
        {project.visual === 'protein' && <div className="molecule-dots">{Array.from({ length: 13 }, (_, i) => <i key={i} style={{ left: `${10 + ((i * 23) % 80)}%`, top: `${15 + ((i * 31) % 68)}%` }} />)}</div>}
      </div>
      <span className="art-open"><ExternalLink size={15} /></span>
    </div>
  );
}

export default function Projects() {
  return (
    // PROJECTS SECTION: edit each item under projects in portfolio.js. Add accurate demo and repository URLs.
    <section id="projects" className="content-panel section-anchor projects-panel">
      <div className="section-heading">
        <div><p className="eyebrow">SELECTED WORK</p><h2>Some Things <span>I’ve Built</span></h2></div>
        <p className="heading-description">A few projects that show how I learn, solve problems, and turn ideas into working software.</p>
      </div>
      <div className="project-grid">
        {portfolio.projects.map((project, index) => (
          <motion.article className="project-card" key={project.name} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }}>
            <ProjectArtwork project={project} />
            <div className="project-body">
              <div className="project-meta"><span>{project.type}</span><span className="project-status">{project.status}</span></div>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="project-stack">{project.stack.map((tech) => <span key={tech}>{tech}</span>)}</div>
              <div className="project-actions">
                {project.demoUrl ? <a className="button button-primary button-small" href={project.demoUrl} target="_blank" rel="noreferrer">Live Demo <ArrowUpRight size={14} /></a> : <span className="button button-muted button-small" title="Add a demo URL in portfolio.js">Demo coming soon</span>}
                {project.sourceUrl ? <a className="button button-outline button-small" href={project.sourceUrl} target="_blank" rel="noreferrer"><Github size={15} /> Source</a> : <span className="button button-muted button-small">Repository soon</span>}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
