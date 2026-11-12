'use client'

import type { FormEvent } from 'react'
import { useState } from 'react'
import { Icon } from './Icon'
import { SectionHeading } from './SectionHeading'

export function ContactSection() {
  const [emailPrepared, setEmailPrepared] = useState(false)

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!event.currentTarget.checkValidity()) return event.currentTarget.reportValidity()
    const formData = new FormData(event.currentTarget)
    const name = String(formData.get('name') ?? '')
    const email = String(formData.get('email') ?? '')
    const subject = String(formData.get('subject') ?? '')
    const message = String(formData.get('message') ?? '')
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`
    window.location.href = `mailto:rahelfikre2025@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setEmailPrepared(true)
  }

  return <section className="contact section" id="contact">
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
        {emailPrepared && <p className="success" aria-live="polite">Your email app should open with your message. If it doesn’t, email rahelfikre2025@gmail.com.</p>}
        <button className="gradient-button" type="submit">Send Message</button>
      </form>
      <div className="contact-doodle"><Icon name="mail" size={48} /><span>Let’s create<br />something amazing<br />together.</span><b>↙</b></div>
    </div>
    <div className="contact-footer"><a href="mailto:rahelfikre2025@gmail.com"><Icon name="mail" size={15} /> rahelfikre2025@gmail.com</a><a href="https://github.com/rahelfikre2025-create" target="_blank" rel="noreferrer"><Icon name="github" size={15} /> GitHub</a><a href="https://www.linkedin.com/in/rahel-fikre-coque127" target="_blank" rel="noreferrer"><Icon name="linkedin" size={15} /> LinkedIn</a></div>
  </section>
}
