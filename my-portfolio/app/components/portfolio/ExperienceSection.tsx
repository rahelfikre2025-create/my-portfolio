import { experience } from './portfolio-data'
import { SectionHeading } from './SectionHeading'

export function ExperienceSection() {
  return <section className="experience section" id="experience">
    <SectionHeading title="Experience & Learning Journey" text="Education, professional training, and selected development work." />
    <div className="experience-list">
      {experience.map(item => <article className="experience-entry" key={item[1]}>
        <div className="experience-year"><span>{item[0]}</span><i /></div>
        <div className="experience-card">
          <small className="experience-type">{item[1]}</small>
          <h3>{item[2]}</h3>
          <p>{item[3]}</p>
        </div>
      </article>)}
    </div>
  </section>
}
