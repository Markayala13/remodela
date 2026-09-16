import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { MobileHeroDivider } from '@/components/mobile-hero-divider'
import { TrustMarquee } from '@/components/trust-marquee'
import { ServicesSection } from '@/components/services-section'
import { ProjectsSection } from '@/components/projects-section'
import { ProcessSection } from '@/components/process-section'
import { WhyDcSection } from '@/components/why-dc-section'
import { EstimateCta } from '@/components/estimate-cta'
import { ContactSection } from '@/components/contact-section'
import { SiteFooter } from '@/components/site-footer'
import { MobileCtaBar } from '@/components/mobile-cta-bar'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <MobileHeroDivider />
        <TrustMarquee />
        <ServicesSection />
        <ProjectsSection />
        <ProcessSection />
        <WhyDcSection />
        <EstimateCta />
        <ContactSection />
      </main>
      <SiteFooter />
      <MobileCtaBar />
    </>
  )
}
