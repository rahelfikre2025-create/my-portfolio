'use client'

import { useState } from 'react'
import { projects } from './portfolio-data'
import { SectionHeading } from './SectionHeading'

export function ProjectsSection() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0)

  function moveProject(direction: -1 | 1) {
    setActiveProjectIndex((current) => Math.max(0, Math.min(projects.length - 1, current + direction)))
  }

  return <section className="projects section" id="projects">
    <div className="projects-header">
      <SectionHeading title="Featured Projects" text="Real projects. Real problems. Real solutions." />
      <div className="project-slider-controls" role="group" aria-label="Project slides">
        <button type="button" onClick={() => moveProject(-1)} aria-label="Previous project" disabled={activeProjectIndex === 0}>←</button>
        <span className="project-count" aria-live="polite">{activeProjectIndex + 1} / {projects.length}</span>
        <button type="button" onClick={() => moveProject(1)} aria-label="Next project" disabled={activeProjectIndex === projects.length - 1}>→</button>
      </div>
    </div>
    <div className="project-viewport" role="region" aria-roledescription="carousel" aria-label="Featured projects">
      <div className="project-track" style={{ transform: `translateX(-${activeProjectIndex * 100}%)` }}>
        {projects.map((project, index) => <article className="project-card" key={project.liveUrl} aria-roledescription="slide" aria-label={`${index + 1} of ${projects.length}: ${project.title}`} aria-hidden={activeProjectIndex !== index} inert={activeProjectIndex !== index}>
          <div className="project-image">
            <img src={project.image} alt={`${project.title} — ${project.category}`} />
          </div>
          <div className="project-body">
            <h3>{project.title}</h3><small>{project.category}</small>
            <p>{project.description}</p>
            <div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
            <div className="project-links"><a className="gradient-button" href={project.liveUrl} target="_blank" rel="noreferrer">View Project</a><a className="outline-button" href={project.codeUrl} target="_blank" rel="noreferrer">View Code</a></div>
          </div>
        </article>)}
      </div>
    </div>
    <a className="gradient-button view-all" href="https://github.com/rahelfikre2025-create" target="_blank" rel="noreferrer">View All Projects</a>
  </section>
}
