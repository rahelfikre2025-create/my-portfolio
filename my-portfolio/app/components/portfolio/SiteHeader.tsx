'use client'

import { useState } from 'react'
import { Icon } from './Icon'

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  return <header className="topbar">
    <div className="nav-inner">
      <a className="brand" href="#home" aria-label="Rachel Fikre home">
        <span className="brand-mark">RF</span>
        <span className="brand-copy"><b>Rachel Fikre</b><small>Full-Stack Developer</small></span>
      </a>
      <nav className={menuOpen ? 'open' : ''} aria-label="Main navigation">
        {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map(item =>
          <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>
        )}
      </nav>
      <a className="gradient-button nav-cta" href="#contact">Let's Talk <Icon name="arrow" size={16} /></a>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Open menu">
        <Icon name={menuOpen ? 'close' : 'menu'} size={22} />
      </button>
    </div>
  </header>
}
