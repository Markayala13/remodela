'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Minus, Plus } from 'lucide-react'
import { MediaPlaceholder } from '@/components/media-placeholder'
import { Reveal } from '@/components/reveal'
import { services } from '@/lib/site-config'

const EASE = [0.22, 1, 0.36, 1] as const

function SectionHead() {
  return (
    <div className="mb-12 grid grid-cols-1 gap-6 lg:mb-16 lg:grid-cols-12">
      <div className="lg:col-span-7">
        <Reveal className="mb-4 flex items-center gap-3">
          <span className="font-display text-xs uppercase tracking-[0.28em] text-orange">
            [ 02 ] Services
          </span>
          <span className="h-px w-16 bg-silver-dark" />
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display text-[clamp(2.5rem,7vw,5.5rem)] font-bold uppercase leading-[0.9] text-cold-white">
            One Team.
            <br />
            <span className="text-outline">Every Major</span> Upgrade.
          </h2>
        </Reveal>
      </div>
      <div className="flex items-end lg:col-span-5">
        <Reveal delay={0.1}>
          <p className="max-w-sm text-pretty leading-relaxed text-silver-light">
            From the room you use every day to the spaces that change how your
            home feels.
          </p>
        </Reveal>
      </div>
    </div>
  )
}

export function ServicesSection() {
  const [active, setActive] = useState(0)
  const [openMobile, setOpenMobile] = useState<number | null>(0)
  const current = services[active]

  return (
    <section
      id="services"
      className="relative border-b border-border py-20 lg:py-28"
    >
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <SectionHead />

        {/* Desktop / tablet interactive selector */}
        <div className="hidden gap-10 lg:grid lg:grid-cols-12">
          <ul className="lg:col-span-6">
            {services.map((s, i) => {
              const isActive = i === active
              return (
                <li key={s.id}>
                  <button
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    aria-pressed={isActive}
                    className="group relative flex w-full items-center gap-6 border-b border-border py-5 text-left"
                  >
                    <span
                      className={`font-display text-sm tabular-nums transition-colors ${
                        isActive ? 'text-orange' : 'text-silver-dark'
                      }`}
                    >
                      {s.number}
                    </span>
                    <span
                      className={`font-display text-4xl font-semibold uppercase tracking-tight transition-all duration-300 xl:text-5xl ${
                        isActive
                          ? 'translate-x-2 text-cold-white'
                          : 'text-silver-dark group-hover:text-silver-light'
                      }`}
                    >
                      {s.name}
                    </span>
                    <span
                      className={`ml-auto font-display text-[11px] uppercase tracking-[0.2em] transition-opacity ${
                        isActive ? 'text-silver opacity-100' : 'opacity-0'
                      }`}
                    >
                      {s.spec}
                    </span>
                    <span
                      className={`absolute -bottom-px left-0 h-0.5 bg-orange transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0'
                      }`}
                    />
                  </button>
                </li>
              )
            })}
          </ul>

          <div className="lg:col-span-6">
            <div className="sticky top-28">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: EASE }}
                >
                  <MediaPlaceholder
                    label={current.placeholder}
                    tag={`SRV / ${current.number}`}
                    code={current.spec}
                    className="aspect-[4/3] w-full"
                  />
                </motion.div>
              </AnimatePresence>
              <div className="mt-5 flex items-start justify-between gap-6 border-t border-border pt-5">
                <p className="max-w-md text-pretty leading-relaxed text-silver-light">
                  {current.description}
                </p>
                <span className="shrink-0 font-display text-5xl font-bold text-charcoal-3 [-webkit-text-stroke:1px_var(--color-silver-dark)]">
                  {current.number}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile accordion */}
        <ul className="lg:hidden">
          {services.map((s, i) => {
            const isOpen = openMobile === i
            return (
              <li key={s.id} className="border-b border-border">
                <button
                  type="button"
                  onClick={() => setOpenMobile(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center gap-4 py-5 text-left"
                >
                  <span
                    className={`font-display text-sm tabular-nums ${
                      isOpen ? 'text-orange' : 'text-silver-dark'
                    }`}
                  >
                    {s.number}
                  </span>
                  <span
                    className={`font-display text-3xl font-semibold uppercase ${
                      isOpen ? 'text-cold-white' : 'text-silver-light'
                    }`}
                  >
                    {s.name}
                  </span>
                  <span className="ml-auto text-orange">
                    {isOpen ? (
                      <Minus className="h-5 w-5" />
                    ) : (
                      <Plus className="h-5 w-5" />
                    )}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: EASE }}
                      className="overflow-hidden"
                    >
                      <div className="pb-6">
                        <MediaPlaceholder
                          label={s.placeholder}
                          tag={`SRV / ${s.number}`}
                          code={s.spec}
                          className="aspect-[4/3] w-full"
                        />
                        <p className="mt-4 text-pretty leading-relaxed text-silver-light">
                          {s.description}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
