'use client'

import { useRef, type PointerEvent } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'
import { MaskLine } from '@/components/reveal'
import { site } from '@/lib/site-config'

/** Magnetic primary button — subtle pull toward cursor, resets on leave. */
function MagneticButton() {
  const reduce = false
  const ref = useRef<HTMLAnchorElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 200, damping: 15 })
  const sy = useSpring(y, { stiffness: 200, damping: 15 })

  function onMove(e: PointerEvent<HTMLAnchorElement>) {
    if (reduce || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    x.set((e.clientX - (rect.left + rect.width / 2)) * 0.25)
    y.set((e.clientY - (rect.top + rect.height / 2)) * 0.35)
  }
  function reset() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.a
      ref={ref}
      href="#contact"
      onPointerMove={onMove}
      onPointerLeave={reset}
      style={{ x: sx, y: sy }}
      whileTap={{ scale: 0.97 }}
      className="group inline-flex items-center justify-center gap-3 bg-charcoal px-8 py-5 font-display text-lg font-semibold uppercase tracking-[0.08em] text-cold-white"
    >
      {site.ctas.primary}
      <ArrowRight
        className="h-5 w-5 text-orange transition-transform duration-300 group-hover:translate-x-2"
        strokeWidth={2.5}
        aria-hidden
      />
    </motion.a>
  )
}

export function EstimateCta() {
  return (
    <section className="relative overflow-hidden bg-orange py-20 text-charcoal lg:py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        aria-hidden
        style={{
          backgroundImage:
            'linear-gradient(to right, #0b0d0f 1px, transparent 1px), linear-gradient(to bottom, #0b0d0f 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
      />
      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <span className="font-display text-xs uppercase tracking-[0.28em] text-charcoal/70">
              [ 06 ] Free Estimate
            </span>
            <h2 className="mt-4 font-display text-[clamp(2.75rem,9vw,7rem)] font-bold uppercase leading-[0.85]">
              <MaskLine play={false}>Your Home</MaskLine>
              <MaskLine play={false} delay={0.12}>
                Deserves Better.
              </MaskLine>
            </h2>
            <p className="mt-6 max-w-lg text-pretty text-base leading-relaxed text-charcoal/80 sm:text-lg">
              Tell us what you want to improve. We will help you take the next
              step.
            </p>
          </div>

          <div className="flex flex-col gap-4 lg:col-span-4 lg:items-end">
            <MagneticButton />
            <a
              href={site.phoneHref}
              className="group inline-flex items-center justify-center gap-3 border-2 border-charcoal px-8 py-5 font-display text-lg font-semibold uppercase tracking-[0.08em] text-charcoal transition-colors hover:bg-charcoal hover:text-orange active:scale-[0.98]"
            >
              <Phone className="h-5 w-5" strokeWidth={2.5} aria-hidden />
              {site.ctas.secondary}
            </a>
          </div>
        </div>

        <p className="mt-12 border-t border-charcoal/20 pt-5 font-display text-xs uppercase tracking-[0.2em] text-charcoal/70">
          Free estimates. Project availability may vary.
        </p>
      </div>
    </section>
  )
}
