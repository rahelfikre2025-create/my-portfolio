import { journey } from './portfolio-data'
import { SectionHeading } from './SectionHeading'

export function AboutSection() {
  return <section className="about section" id="about">
    <div className="about-layout">
      <div className="about-visual">
        <img src="/neon-workspace.png" alt="Developer workspace" />
        <span>Code.<br />Build.<br />Improve.<br />Repeat.</span>
      </div>
      <div className="about-copy">
        <SectionHeading title="About Me" text="A quick introduction" />
        <p>I am a Junior Full-Stack Developer and Computer Science graduate with a strong interest in developing scalable, user-focused web applications and practical software solutions.</p>
        <p>My technical foundation includes HTML, CSS, JavaScript, React.js, Next.js, and Tailwind CSS, with a growing focus on backend development and database technologies. Through academic projects and professional software development training, I have gained practical experience in application development, problem-solving, and team collaboration.</p>
        <p>I am a detail-oriented, adaptable, and motivated developer committed to continuous learning and professional growth. I value writing maintainable code, understanding technical challenges, and applying technology to address real-world problems.</p>
        <p>My career objective is to develop into a highly skilled, internationally competitive software engineer while contributing to innovative projects and collaborating with diverse development teams.</p>
        <p>I am open to junior frontend and full-stack development opportunities, remote positions, and freelance collaborations.</p>
      </div>
      <div className="journey">
        <h3>My Journey</h3>
        {journey.map(item => <article key={item[1]}><i /><div><small>{item[0]}</small><b>{item[1]}</b><span>{item[2]}</span></div></article>)}
      </div>
    </div>
    <div className="about-highlights">
      <span><b>⌘</b>Computer Science<br />graduate</span>
      <span><b>□</b>Hands-on web application<br />development experience</span>
      <span><b>↗</b>Growing toward<br />full-stack development</span>
    </div>
  </section>
}
