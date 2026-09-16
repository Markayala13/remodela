'use client'

import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Reveal, useRevealInView } from '@/components/reveal'
import { projects } from '@/lib/site-config'

const EASE = [0.22, 1, 0.36, 1] as const

function ProjectPanel({
  project,
  className,
}: {
  project: (typeof projects)[number]
  className?: string
}) {
  const reduce = useReducedMotion()
  const [ref, shown] = useRevealInView<HTMLElement>()
  const visible = reduce || shown

  return (
    <motion.article
      ref={ref as never}
      className={`group relative flex h-full flex-col ${className ?? ''}`}
      initial={reduce ? false : { opacity: 0, clipPath: 'inset(12% 0 12% 0)' }}
      animate={visible ? { opacity: 1, clipPath: 'inset(0% 0 0% 0)' } : undefined}
      transition={{ duration: 0.9, ease: EASE }}
    >
      <div className="relative h-full overflow-hidden border border-border-strong">
        <div className="h-full transition-transform duration-700 ease-out group-hover:scale-[1.04]">
          <PlaceholderSurface
            label={project.placeholder}
            src={project.image}
            alt={project.imageAlt}
          />
        </div>

        {/* persistent caption — media carries the block, text rides on it */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent p-5 pt-16">
          <div>
            <h3 className="font-display text-2xl font-semibold uppercase leading-none text-cold-white sm:text-3xl">
              {project.title}
            </h3>
            <span className="mt-1.5 block font-display text-[11px] uppercase tracking-[0.22em] text-silver-light">
              {project.type}
            </span>
          </div>
          <span className="flex items-center gap-2 font-display text-sm uppercase tracking-[0.14em] text-orange opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            View
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </span>
        </div>

        {/* index tab */}
        <span className="absolute right-3 top-3 border border-orange bg-charcoal/80 px-2 py-1 font-display text-[11px] uppercase tracking-[0.22em] text-orange">
          {project.index}
        </span>
      </div>
    </motion.article>
  )
}

/** Inline placeholder surface (no icon-heavy chrome; big media feel). */
function PlaceholderSurface({
  label,
  src,
  alt,
}: {
  label: string
  src?: string
  alt?: string
}) {
  return (
    <div className="relative h-full w-full metal-surface">
      {src ? (
        <Image
          src={src}
          alt={alt ?? ''}
          fill
          loading="lazy"
          sizes="(min-width: 1024px) 66vw, 100vw"
          className="object-cover"
        />
      ) : (
        <>
          <div className="absolute inset-0 blueprint-grid-fine opacity-70" aria-hidden />
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.12]"
            aria-hidden
            style={{
              backgroundImage:
                'repeating-linear-gradient(135deg, transparent 0 24px, rgba(211,215,217,0.5) 24px 25px)',
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center p-6">
            <p className="max-w-xs text-pretty text-center text-xs leading-relaxed text-silver">
              {label}
            </p>
          </div>
        </>
      )}
      {/* animated orange corners */}
      <span className="absolute left-0 top-0 h-6 w-6 border-l-2 border-t-2 border-orange transition-all duration-500 group-hover:h-9 group-hover:w-9" />
      <span className="absolute bottom-0 right-0 h-6 w-6 border-b-2 border-r-2 border-orange transition-all duration-500 group-hover:h-9 group-hover:w-9" />
    </div>
  )
}

export function ProjectsSection() {
  const [wide, tall, offset] = projects

  return (
    <section id="projects" className="relative border-b border-border py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div className="mb-12 grid grid-cols-1 items-end gap-6 lg:mb-16 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <Reveal className="mb-4 flex items-center gap-3">
              <span className="font-display text-xs uppercase tracking-[0.28em] text-orange">
                [ 03 ] Projects
              </span>
              <span className="h-px w-16 bg-silver-dark" />
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-display text-[clamp(2.5rem,7vw,5.5rem)] font-bold uppercase leading-[0.9] text-cold-white">
                Work That Speaks
                <br />
                For <span className="text-orange">Itself.</span>
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-4">
            <Reveal delay={0.1}>
              <p className="max-w-sm text-pretty leading-relaxed text-silver-light">
                Scroll through the spaces we helped transform.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Asymmetric layout — media carries the section */}
        <div className="grid grid-cols-1 gap-5 lg:h-[1080px] lg:grid-cols-12 lg:grid-rows-2 lg:gap-6">
          <ProjectPanel
            project={wide}
            className="min-h-[440px] lg:col-span-8 lg:row-span-1 lg:min-h-0"
          />
          <ProjectPanel
            project={tall}
            className="min-h-[520px] lg:col-span-4 lg:col-start-9 lg:row-span-2 lg:min-h-0"
          />
          <ProjectPanel
            project={offset}
            className="min-h-[440px] lg:col-span-8 lg:col-start-1 lg:row-start-2 lg:min-h-0"
          />
        </div>

        <p className="mt-8 font-display text-[11px] uppercase tracking-[0.2em] text-silver-dark">
          * Replace with real completed project photography.
        </p>
      </div>
    </section>
  )
}
