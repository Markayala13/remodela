'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'
import { MediaPlaceholder } from '@/components/media-placeholder'
import { MobileHeroMedia } from '@/components/mobile-hero-media'
import { MaskLine } from '@/components/reveal'
import { PrimaryCta, CallCta } from '@/components/cta-buttons'
import { site } from '@/lib/site-config'

const EASE = [0.22, 1, 0.36, 1] as const

export function Hero() {
  // Animations always play (owner preference), regardless of the device's
  // reduce-motion / battery-saver setting.
  const reduce = false

  return (
    <section
      id="top"
      className="relative min-h-[100svh] overflow-hidden border-b border-border pt-20 lg:pt-28"
    >
      {/* blueprint background */}
      <div className="absolute inset-0 blueprint-grid opacity-60" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            'radial-gradient(120% 90% at 15% 0%, rgba(255,121,0,0.10), transparent 55%)',
        }}
      />

      <div className="relative mx-auto grid max-w-[1400px] grid-cols-1 gap-6 px-5 min-[390px]:px-[22px] min-[430px]:px-6 pb-12 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:px-10 lg:pb-24">
        
        {/* =======================================================
            MOBILE HERO (under 768px): Clear hierarchy & breathing room
            ======================================================= */}
        <div className="flex flex-col justify-center pt-2 pb-6 lg:hidden">
          {/* Eyebrow Label */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: EASE, delay: 0.1 }}
            className="mb-6 flex items-center gap-3"
          >
            <span className="h-2 w-2 bg-orange shrink-0" aria-hidden />
            <span className="font-display text-xs uppercase tracking-[0.26em] text-silver font-medium">
              {site.company} / {site.established}
            </span>
          </motion.div>

          {/* Headline block with 3px vertical orange mark */}
          <div className="flex items-stretch gap-4">
            <motion.div
              initial={reduce ? false : { opacity: 0, scaleY: 0 }}
              animate={{ opacity: 1, scaleY: 1 }}
              transition={{ duration: 0.45, ease: EASE, delay: 0.2 }}
              style={{ transformOrigin: 'top' }}
              className="w-[3px] h-[108px] bg-orange shrink-0 rounded-[1px] my-auto"
              aria-hidden
            />
            <div className="flex flex-col justify-center">
              <motion.span
                initial={reduce ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: EASE, delay: 0.25 }}
                className="block font-display font-bold uppercase text-cold-white whitespace-nowrap"
                style={{
                  fontSize: 'clamp(48px, 14vw, 64px)',
                  lineHeight: '0.90',
                  letterSpacing: '-0.025em',
                }}
              >
                Built Right.
              </motion.span>
              <motion.span
                initial={reduce ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: EASE, delay: 0.35 }}
                className="block font-display font-bold uppercase text-orange whitespace-nowrap"
                style={{
                  fontSize: 'clamp(48px, 14vw, 64px)',
                  lineHeight: '0.90',
                  letterSpacing: '-0.025em',
                }}
              >
                Built To Last.
              </motion.span>
            </div>
          </div>

          {/* Featured project media (mobile only) */}
          <MobileHeroMedia />

          {/* Supporting Copy */}
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: EASE, delay: 0.48 }}
            className="mt-7 max-w-[34ch] text-pretty text-[17px] leading-[1.55] text-cold-white"
          >
            Premium home remodeling and construction for homeowners who expect
            quality work, reliable service, and results they are proud to come
            home to.
          </motion.p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col">
            {/* Primary CTA */}
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: EASE, delay: 0.6 }}
            >
              <a
                href="#contact"
                className="group relative flex h-14 w-full items-center justify-between rounded-[3px] bg-orange px-6 font-display text-base font-semibold uppercase tracking-[0.1em] text-charcoal transition-colors hover:bg-orange-dark active:translate-y-px"
              >
                <span>{site.ctas.primary}</span>
                <ArrowRight
                  className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1"
                  strokeWidth={2.5}
                  aria-hidden
                />
              </a>
            </motion.div>

            {/* Secondary Call CTA */}
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: EASE, delay: 0.7 }}
              className="mt-3"
            >
              <a
                href={site.phoneHref}
                className="group flex h-14 w-full items-center justify-center gap-3 rounded-[3px] border border-silver/40 bg-[#0d0e10] px-6 font-display text-base font-medium uppercase tracking-[0.1em] text-cold-white transition-colors hover:border-silver hover:bg-charcoal-3 active:translate-y-px"
              >
                <Phone className="h-4 w-4 text-orange" strokeWidth={2.25} aria-hidden />
                <span>{site.ctas.secondary}</span>
              </a>
            </motion.div>
          </div>

          {/* Service List */}
          <motion.div
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.8 }}
            className="mt-9 border-t border-silver/20 pt-5"
          >
            <div className="flex flex-wrap items-center gap-x-2.5 gap-y-2 font-display text-[11px] uppercase tracking-[0.2em] text-silver font-medium">
              {['Kitchens', 'Bathrooms', 'Decks', 'Flooring', 'Roofing'].map(
                (s, i) => (
                  <span key={s} className="flex items-center gap-2.5">
                    {i > 0 && <span className="text-orange font-bold">/</span>}
                    {s}
                  </span>
                ),
              )}
            </div>
          </motion.div>
        </div>

        {/* =======================================================
            DESKTOP HERO (lg:block / lg:grid): 100% UNTOUCHED
            ======================================================= */}
        <div className="hidden flex-col justify-center lg:flex lg:col-span-7 lg:pr-6">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="mb-6 flex items-center gap-3"
          >
            <span className="h-2 w-2 animate-pulse bg-orange" aria-hidden />
            <span className="font-display text-xs uppercase tracking-[0.28em] text-silver">
              {site.company} / {site.established}
            </span>
          </motion.div>

          <h1 className="font-display text-[clamp(3.9rem,13vw,10.5rem)] font-bold uppercase leading-[0.8] tracking-[-0.035em] text-cold-white">
            <MaskLine delay={0.15}>Built Right.</MaskLine>
            <MaskLine delay={0.3} className="text-orange">
              Built To Last.
            </MaskLine>
          </h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.6 }}
            className="mt-7 max-w-xl text-pretty text-base leading-relaxed text-silver-light sm:text-lg"
          >
            Premium home remodeling and construction for homeowners who expect
            quality work, reliable service, and results they are proud to come
            home to.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.8 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <PrimaryCta />
            <CallCta />
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-12 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-border pt-5 font-display text-xs uppercase tracking-[0.2em] text-silver-dark"
          >
            {['Kitchens', 'Bathrooms', 'Decks', 'Flooring', 'Roofing'].map(
              (s, i) => (
                <span key={s} className="flex items-center gap-3">
                  {i > 0 && <span className="text-orange">/</span>}
                  {s}
                </span>
              ),
            )}
          </motion.div>
        </div>

        {/* Right: media (Desktop only, 100% UNTOUCHED) */}
        <div className="relative hidden lg:block lg:col-span-5">
          {/* vertical location label */}
          <span
            className="absolute -left-2 top-0 z-10 hidden font-display text-[11px] uppercase tracking-[0.3em] text-orange lg:block"
            style={{ writingMode: 'vertical-rl' }}
          >
            {site.serviceArea}
          </span>

          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: EASE, delay: 0.3 }}
            className="relative lg:pl-8"
          >
            <div className="relative">
              <MediaPlaceholder
                label="Replace with premium completed kitchen remodel photo or 10–15 second cinematic project video"
                tag="HERO / 01"
                code="16:22"
                className="aspect-[4/5] w-full sm:aspect-[16/12] lg:aspect-[4/5.4]"
                src="/img/hero.png"
                alt="Premium completed kitchen remodel — white cabinetry, marble island, hardwood floors"
                priority
                sizes="(min-width: 1024px) 40vw, 100vw"
                objectPosition="center"
              />

              {/* live marker */}
              <div className="absolute -bottom-4 left-4 flex items-center gap-2.5 border-2 border-orange bg-charcoal px-3 py-2">
                <span className="h-2 w-2 animate-pulse bg-orange" aria-hidden />
                <span className="font-display text-[11px] uppercase tracking-[0.22em] text-cold-white">
                  Now Booking Estimates
                </span>
              </div>

              {/* spec label */}
              <div className="absolute -right-2 top-6 hidden border border-border bg-charcoal px-3 py-1.5 lg:block">
                <span className="font-display text-[10px] uppercase tracking-[0.2em] text-silver">
                  Built For The Way You Live
                </span>
              </div>
            </div>

            <div className="mt-10 flex items-center justify-between border border-border bg-charcoal-2 px-3 py-2 lg:ml-8">
              <span className="font-display text-[10px] uppercase tracking-[0.25em] text-silver-dark">
                {site.established}
              </span>
              <span className="font-display text-[10px] uppercase tracking-[0.25em] text-silver-dark">
                {site.bbb}
              </span>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
