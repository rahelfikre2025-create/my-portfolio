'use client'

import { useEffect } from 'react'

const revealSelectors = [
  '.technology-list',
  '.section-heading',
  '.about-layout',
  '.about-highlights',
  '.skill-card',
  '.project-slider-controls',
  '.project-viewport',
  '.view-all',
  '.process-row article',
  '.experience-entry',
  '.contact-layout',
  '.contact-footer',
]

export function ScrollReveal() {
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>(revealSelectors.join(','))
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    if (!('IntersectionObserver' in window)) {
      targets.forEach(target => target.classList.add('is-visible'))
      document.documentElement.classList.add('motion-ready')
      return
    }

    targets.forEach((target, index) => {
      target.dataset.reveal = ''
      const siblingIndex = target.parentElement ? Array.from(target.parentElement.children).indexOf(target) : index
      target.style.setProperty('--reveal-delay', `${Math.min(siblingIndex, 4) * 70}ms`)
    })

    document.documentElement.classList.add('motion-ready')

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      })
    }, { threshold: 0.12, rootMargin: '0px 0px -32px 0px' })

    targets.forEach(target => observer.observe(target))

    return () => {
      observer.disconnect()
      targets.forEach(target => {
        delete target.dataset.reveal
        target.classList.remove('is-visible')
        target.style.removeProperty('--reveal-delay')
      })
      document.documentElement.classList.remove('motion-ready')
    }
  }, [])

  return null
}
