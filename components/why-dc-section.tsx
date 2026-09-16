'use client'

import { Check } from 'lucide-react'
import { MediaPlaceholder } from '@/components/media-placeholder'
import { Reveal } from '@/components/reveal'
import { site } from '@/lib/site-config'

const proof = [
  'Quality Work',
  'Reliable Service',
  'Customer Satisfaction',
  'Built for real homes and real life',
]

export function WhyDcSection() {
  return (
    <section id="about" className="relative border-b border-border py-20 lg:py-28">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-10">
        {/* Left media */}
        <div className="lg:col-span-6">
          <Reveal>
            <MediaPlaceholder
              label="Replace with contractor / team on-site or detailed finished project video"
              tag="ABOUT / TEAM"
              code="ON-SITE"
              className="aspect-[4/5] w-full lg:aspect-[4/4.6]"
              src="/img/contratista.png"
              alt="DC General Contractor on-site measuring a kitchen renovation"
              sizes="(min-width: 1024px) 45vw, 100vw"
              objectPosition="center"
            />
          </Reveal>
        </div>

        {/* Right content */}
        <div className="flex flex-col justify-center lg:col-span-6">
          <Reveal className="mb-4 flex items-center gap-3">
            <span className="font-display text-xs uppercase tracking-[0.28em] text-orange">
              [ 05 ] Why DC
            </span>
            <span className="h-px w-16 bg-silver-dark" />
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display text-[clamp(2.5rem,6.5vw,5rem)] font-bold uppercase leading-[0.9] text-cold-white">
              The Details
              <br />
              Are The <span className="text-orange">Difference.</span>
            </h2>
          </Reveal>

          <ul className="mt-10 divide-y divide-border border-y border-border">
            {proof.map((item, i) => (
              <Reveal as="li" key={item} delay={0.05 * i}>
                <div className="flex items-center gap-4 py-4">
                  <Check className="h-5 w-5 shrink-0 text-orange" strokeWidth={2.5} aria-hidden />
                  <span className="font-display text-lg uppercase tracking-wide text-cold-white sm:text-xl">
                    {item}
                  </span>
                </div>
              </Reveal>
            ))}
          </ul>

          {/* BBB text badge */}
          <Reveal delay={0.1}>
            <div className="mt-8 inline-flex items-center gap-3 border border-silver-dark bg-charcoal-2 px-4 py-3">
              <span className="metal-text font-display text-xl font-bold uppercase tracking-tight">
                BBB
              </span>
              <span className="h-8 w-px bg-silver-dark" />
              <span className="font-display text-xs uppercase leading-tight tracking-[0.15em] text-silver-light">
                {site.bbb}
                <span className="mt-0.5 block text-[10px] text-silver-dark">
                  * Replace with authorized BBB badge asset if available.
                </span>
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
