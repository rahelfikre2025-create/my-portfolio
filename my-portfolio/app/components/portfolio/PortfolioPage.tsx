import { AboutSection } from './AboutSection'
import { ContactSection } from './ContactSection'
import { ExperienceSection } from './ExperienceSection'
import { HeroSection } from './HeroSection'
import { ProcessSection } from './ProcessSection'
import { ProjectsSection } from './ProjectsSection'
import { ScrollReveal } from './ScrollReveal'
import { SiteHeader } from './SiteHeader'
import { SkillsSection } from './SkillsSection'

export function PortfolioPage() {
  return <div className="app">
    <ScrollReveal />
    <SiteHeader />
    <main>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ProcessSection />
      <ExperienceSection />
      <ContactSection />
    </main>
  </div>
}
