import { Icon } from './Icon'
import { developmentProcess } from './portfolio-data'
import { SectionHeading } from './SectionHeading'

export function ProcessSection() {
  return <section className="process section">
    <SectionHeading title="My Development Process" text="A simple, focused approach to building great software." />
    <div className="process-row">
      {developmentProcess.map((step, index) => <article key={step[0]}>
        <div className="process-icon"><Icon name="code" size={18} /></div>
        {index < 4 && <span className="connector">→</span>}
        <b>{step[0]}</b><h3>{step[1]}</h3><p>{step[2]}</p>
      </article>)}
    </div>
  </section>
}
