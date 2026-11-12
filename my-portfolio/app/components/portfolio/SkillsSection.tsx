import { skillGroups } from './portfolio-data'
import { SectionHeading } from './SectionHeading'

export function SkillsSection() {
  return <section className="skills section" id="skills">
    <SectionHeading title="Technical Skills" text="Technologies I work with and what I’m currently learning." />
    <div className="skill-grid">
      {skillGroups.map(group => <article className="skill-card" key={group.name}>
        <h3><span>{group.icon}</span>{group.name}</h3>
        <ul>{group.items.map(item => <li key={item}><i />{item}</li>)}</ul>
        <small>{group.status}</small>
      </article>)}
    </div>
  </section>
}
