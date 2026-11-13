'use client'

import { useId, useState } from 'react'
import { experience } from './portfolio-data'
import { SectionHeading } from './SectionHeading'

function ExperienceCard({ item }: { item: (typeof experience)[number] }) {
  const [expanded, setExpanded] = useState(false)
  const detailsId = useId()

  return <article className="experience-entry">
    <div className="experience-year"><span>{item.date}</span><i /></div>
    <div className="experience-card">
      <small className="experience-type">{item.category}</small>
      <h3>{item.title}</h3>
      <p className="experience-organization">{item.organization}</p>
      <p>{item.summary}</p>
      <button className="experience-details-toggle" type="button" aria-expanded={expanded} aria-controls={detailsId} onClick={() => setExpanded(value => !value)}>
        {expanded ? 'Hide details' : 'Show details'}
      </button>
      <div className={`experience-details${expanded ? ' is-open' : ''}`} id={detailsId} aria-hidden={!expanded} inert={!expanded}>
        <div className="experience-details-inner">
          <ul>{item.details.map(detail => <li key={detail}>{detail}</li>)}</ul>
        </div>
      </div>
    </div>
  </article>
}

export function ExperienceSection() {
  return <section className="experience section" id="experience">
    <SectionHeading title="Experience & Learning Journey" text="Education, professional training, and software development experience." />
    <div className="experience-list">
      {experience.map((item, index) => <ExperienceCard item={item} key={`${item.category}-${index}`} />)}
    </div>
  </section>
}
