'use client'

import type { FormEvent } from 'react'
import { useRef, useState } from 'react'

type IconName = 'arrow' | 'github' | 'linkedin' | 'download' | 'menu' | 'close' | 'code' | 'mail'

function Icon({ name, size = 18 }: { name: IconName; size?: number }) {
  const path = {
    arrow: <path d="M5 12h14m-5-5 5 5-5 5" />,
    download: <path d="M12 3v12m-5-5 5 5 5-5M5 21h14" />,
    menu: <path d="M4 6h16M4 12h16M4 18h16" />,
    close: <path d="M6 6l12 12M18 6 6 18" />,
    code: <path d="m8 9-4 3 4 3m8-6 4 3-4 3m-2-10-4 14" />,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
    github: <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7A5.4 5.4 0 0 0 19.4 4 5 5 0 0 0 19.3.5S18.2.1 15 1.8a13.4 13.4 0 0 0-7 0C4.8.1 3.7.5 3.7.5A5 5 0 0 0 3.6 4a5.4 5.4 0 0 0-1.4 3.7c0 5.3 3.5 6.5 6.8 6.9A4.8 4.8 0 0 0 8 18v4M8 19c-3 .9-3-1.5-4-2" />,
    linkedin: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" /><path d="M2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></>,
  }[name]
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{path}</svg>
}

const skillGroups = [
  { name: 'Frontend', icon: '⚛', items: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Next.js', 'Responsive Design'], status: 'Used in Projects' },
  { name: 'Backend', icon: '⚙', items: ['Node.js', 'REST APIs', 'Authentication', 'Server-side Development'], status: 'Currently Learning' },
  { name: 'Database', icon: '◇', items: ['MongoDB', 'Database Fundamentals'], status: 'Currently Learning' },
  { name: 'Tools', icon: '⌁', items: ['Git', 'GitHub', 'VS Code', 'Figma', 'Deployment Platforms'], status: 'Used in Projects' },
  { name: 'Learning Next', icon: '→', items: ['TypeScript', 'Express.js', 'PostgreSQL', 'Docker'], status: 'Currently Learning' },
]

const projects = [
  {
    title: 'Addis Eats',
    category: 'Food Ordering Web Application',
    description: 'A food ordering platform featuring menu browsing, search and category filters, cart management, checkout, order workflows, and an administrative interface.',
    tags: ['React', 'Next.js', 'JavaScript', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1722612114194-91e93928baa7?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1200',
  },
  {
    title: 'Sheggar Wheels',
    category: 'Peer-to-Peer Car Rental Platform',
    description: 'A car rental application for Addis Ababa, allowing renters to explore vehicles, submit booking requests, and manage reservations through role-specific dashboards.',
    tags: ['Next.js', 'React', 'JavaScript', 'CSS', 'Local Storage'],
    image: 'https://images.unsplash.com/photo-1753792707171-162cc17211ca?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1200',
  },
]

function Logo() {
  return <a className="brand" href="#home" aria-label="Rachel Fikre home">
    <span className="brand-mark">RF</span>
    <span className="brand-copy"><b>Rachel Fikre</b><small>Full-Stack Developer</small></span>
  </a>
}

function SectionHeading({ title, text }: { title: string; text: string }) {
  return <header className="section-heading"><h2>{title}</h2><p>{text}</p></header>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [sent, setSent] = useState(false)
  const menuToggleRef = useRef<HTMLButtonElement>(null)

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!event.currentTarget.checkValidity()) return event.currentTarget.reportValidity()
    setSent(true)
    event.currentTarget.reset()
  }

  return <div className="app">
    <a className="skip-link" href="#main-content">Skip to content</a>
    <header className="topbar">
      <div className="nav-inner">
        <Logo />
        <nav
          id="primary-navigation"
          className={menuOpen ? 'open' : ''}
          aria-label="Main navigation"
          onKeyDown={(event) => {
            if (event.key === 'Escape') {
              setMenuOpen(false)
              menuToggleRef.current?.focus()
            }
          }}
        >
          {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map(item =>
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>
          )}
        </nav>
        <a className="gradient-button nav-cta" href="#contact">Let's Talk <Icon name="arrow" size={16} /></a>
        <button
          ref={menuToggleRef}
          className="menu-toggle"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-controls="primary-navigation"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          <Icon name={menuOpen ? 'close' : 'menu'} size={22} />
        </button>
      </div>
    </header>

    <main id="main-content">
      <section className="hero" id="home">
        <div className="hero-grid">
          <div className="hero-copy">
            <span className="availability"><i /> Open to Opportunities</span>
            <p className="hello">Hi, I’m <strong>Rachel Fikre</strong></p>
            <h1>Building Digital<br />Experiences That<br /><em>Make an Impact.</em></h1>
            <p className="hero-description">I’m a developer focused on creating modern, responsive, and reliable web applications with React, Next.js, and full-stack technologies.</p>
            <div className="hero-buttons">
              <a className="gradient-button" href="#projects">Explore My Projects <Icon name="arrow" size={17} /></a>
              <a className="outline-button" href="#contact">Let’s Connect</a>
            </div>
            <a className="download-link" href="#contact"><Icon name="download" size={17} /> Download CV</a>
            <div className="social-row">
              <a href="#contact" aria-label="GitHub"><Icon name="github" /></a>
              <a href="#contact" aria-label="LinkedIn"><Icon name="linkedin" /></a>
            </div>
          </div>
          <div className="hero-art">
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
            <img src="/neon-workspace.png" alt="Neon developer workspace with a laptop showing code" />
          </div>
        </div>
        <div className="technology-bar">
          <p>Technologies I Work With</p>
          <div className="technology-list">
            <span><b className="js">JS</b> JavaScript</span>
            <span><b className="react">⚛</b> React</span>
            <span><b className="next">N</b> Next.js</span>
            <span><b className="node">JS</b> Node.js</span>
          </div>
          <div className="hand-note">From Frontend<br />to Full Stack ↗</div>
        </div>
        <div className="scroll-down"><i /><span>Scroll Down</span><b>⌄</b></div>
      </section>

      <section className="about section" id="about">
        <div className="about-layout">
          <div className="about-visual">
            <img src="/neon-workspace.png" alt="Developer workspace" />
            <span>Code.<br />Build.<br />Improve.<br />Repeat.</span>
          </div>
          <div className="about-copy">
            <SectionHeading title="About Me" text="A quick introduction" />
            <p>I’m a software developer passionate about turning ideas into useful digital products. Through coursework and structured technical training, I’ve been developing my skills in frontend development, application architecture, and modern web technologies.</p>
            <p>I’m continuously learning to build complete, reliable applications and solve real-world problems through code.</p>
          </div>
          <div className="journey">
            <h3>My Journey</h3>
            {[
              ['2018', 'BSc in Computer Science', 'Magdala Amba University'],
              ['2026', 'IBT – QIYAS Advanced Digital Skills Training Program', 'Frontend Development'],
              ['2026', 'Hands-on Projects', 'Addis Eats, Sheggar Wheels'],
              ['Next', 'Backend Development', '& Full-Stack Engineering'],
            ].map(item => <article key={item[1]}><i /><div><small>{item[0]}</small><b>{item[1]}</b><span>{item[2]}</span></div></article>)}
          </div>
        </div>
        <div className="about-highlights">
          <span><b>⌘</b>Computer Science<br />graduate</span>
          <span><b>□</b>Hands-on web application<br />development experience</span>
          <span><b>↗</b>Growing toward<br />full-stack development</span>
        </div>
      </section>

      <section className="skills section" id="skills">
        <SectionHeading title="Technical Skills" text="Technologies I work with and what I’m currently learning." />
        <div className="skill-grid">
          {skillGroups.map(group => <article className="skill-card" key={group.name}>
            <h3><span>{group.icon}</span>{group.name}</h3>
            <ul>{group.items.map(item => <li key={item}><i />{item}</li>)}</ul>
            <small>{group.status}</small>
          </article>)}
        </div>
      </section>

      <section className="projects section" id="projects">
        <SectionHeading title="Featured Projects" text="Real projects. Real problems. Real solutions." />
        <div className="project-grid">
          {projects.map(project => <article className="project-card" key={project.title}>
            <div className="project-image"><img src={project.image} alt={`${project.title} preview`} /></div>
            <div className="project-body">
              <h3>{project.title}</h3><small>{project.category}</small>
              <p>{project.description}</p>
              <div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
              <div className="project-links"><a className="gradient-button" href="#contact">View Project</a><a className="outline-button" href="#contact">View Code</a></div>
            </div>
          </article>)}
        </div>
        <a className="gradient-button view-all" href="#contact">View All Projects</a>
      </section>

      <section className="process section">
        <SectionHeading title="My Development Process" text="A simple, focused approach to building great software." />
        <div className="process-row">
          {[
            ['01', 'Understand the Problem', 'Analyze requirements and define the goal.'],
            ['02', 'Plan the User Experience', 'Design a clear and intuitive flow.'],
            ['03', 'Build the Interface', 'Create responsive and accessible UI.'],
            ['04', 'Develop Application Logic', 'Implement features and integrate APIs.'],
            ['05', 'Test, Refine, and Deploy', 'Fix issues, improve performance, ship.'],
          ].map((step, index) => <article key={step[0]}>
            <div className="process-icon"><Icon name="code" size={18} /></div>
            {index < 4 && <span className="connector">→</span>}
            <b>{step[0]}</b><h3>{step[1]}</h3><p>{step[2]}</p>
          </article>)}
        </div>
      </section>

      <section className="experience section" id="experience">
        <SectionHeading title="Experience & Learning Journey" text="My education, training, and growth in tech." />
        <div className="experience-line">
          {[
            ['2018', 'BSc in Computer Science', 'Magdala Amba University', 'Graduated with CGPA 3.5'],
            ['2026', 'IBT – QIYAS Advanced Digital Skills Training Program', 'Full-Stack Software Development (6 months)', 'Addis Ababa, Ethiopia'],
            ['2026', 'Hands-on Frontend Development Projects', 'Addis Eats, Sheggar Wheels', 'React, Next.js, JavaScript, Tailwind CSS'],
            ['Next', 'Backend Development & Full-Stack Engineering', 'Node.js, MongoDB, APIs, and more...', ''],
          ].map(item => <article key={item[1]}><i /><small>{item[0]}</small><h3>{item[1]}</h3><b>{item[2]}</b><p>{item[3]}</p></article>)}
        </div>
      </section>

      <section className="contact section" id="contact">
        <div className="contact-layout">
          <div>
            <SectionHeading title="Contact" text="" />
            <h3>Have an Idea? Let’s Build Something Great.</h3>
            <p>I’m interested in opportunities to learn, collaborate, and build meaningful digital products.</p>
          </div>
          <form onSubmit={submit}>
            <div className="field-row">
              <label>Name *<input name="name" autoComplete="name" required placeholder="Your name" /></label>
              <label>Email *<input name="email" autoComplete="email" required type="email" placeholder="you@example.com" /></label>
            </div>
            <div className="field-row">
              <label>Subject *<input name="subject" required placeholder="Select a subject" /></label>
              <label>Message *<textarea name="message" required rows={4} placeholder="Your message..." /></label>
            </div>
            {sent && <p className="success">Message sent successfully.</p>}
            <button className="gradient-button" type="submit">Send Message</button>
          </form>
          <div className="contact-doodle"><Icon name="mail" size={48} /><span>Let’s create<br />something amazing<br />together.</span><b>↙</b></div>
        </div>
        <div className="contact-footer"><span><Icon name="mail" size={15} /> rachel.fikre@example.com</span><span><Icon name="github" size={15} /> GitHub</span><span><Icon name="linkedin" size={15} /> LinkedIn</span></div>
      </section>
    </main>
  </div>
}

export default App
