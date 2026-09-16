'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Reveal } from '@/components/reveal'
import { processSteps } from '@/lib/site-config'

const EASE = [0.22, 1, 0.36, 1] as const

export function ProcessSection() {
  const reduce = useReducedMotion()

  return (
    <section id="process" className="relative border-b border-border py-20 lg:py-28">
      <div className="absolute inset-0 blueprint-grid opacity-40" aria-hidden />
      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div className="mb-14 grid grid-cols-1 items-end gap-6 lg:mb-20 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <Reveal className="mb-4 flex items-center gap-3">
              <span className="font-display text-xs uppercase tracking-[0.28em] text-orange">
                [ 04 ] Process
              </span>
              <span className="h-px w-16 bg-silver-dark" />
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-display text-[clamp(2.5rem,7vw,5.5rem)] font-bold uppercase leading-[0.9] text-cold-white">
                Clear Process.
                <br />
                No <span className="text-orange">Guesswork.</span>
              </h2>
            </Reveal>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* drawing line */}
          <div className="absolute left-0 top-0 hidden h-0.5 w-full bg-border lg:block" aria-hidden>
            <motion.div
              className="h-full bg-orange"
              initial={reduce ? { scaleX: 1 } : { scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: EASE }}
              style={{ transformOrigin: 'left' }}
            />
          </div>

          <ol className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-6">
            {processSteps.map((step, i) => (
              <motion.li
                key={step.number}
                className="relative lg:pt-10 lg:pr-6"
                initial={reduce ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, ease: EASE, delay: 0.15 * i }}
              >
                {/* node */}
                <span className="absolute left-0 top-0 hidden h-3 w-3 -translate-y-[calc(50%+0px)] bg-orange lg:block" aria-hidden />
                <div className="flex items-baseline gap-4 lg:block">
                  <span className="font-display text-6xl font-bold leading-none text-charcoal-3 [-webkit-text-stroke:1px_var(--color-orange)] lg:text-7xl">
                    {step.number}
                  </span>
                  <h3 className="mt-0 font-display text-xl font-semibold uppercase tracking-tight text-cold-white lg:mt-5">
                    {step.title}
                  </h3>
                </div>
                <p className="mt-3 max-w-xs text-pretty text-sm leading-relaxed text-silver-light">
                  {step.description}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
