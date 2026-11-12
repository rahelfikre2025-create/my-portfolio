import { Icon } from './Icon'

export function HeroSection() {
  return <section className="hero" id="home">
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
          <a href="https://github.com/rahelfikre2025-create" aria-label="GitHub" target="_blank" rel="noreferrer"><Icon name="github" /></a>
          <a href="https://www.linkedin.com/in/rahel-fikre-coque127" aria-label="LinkedIn" target="_blank" rel="noreferrer"><Icon name="linkedin" /></a>
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
}
