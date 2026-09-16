'use client'

import { ArrowRight, Phone } from 'lucide-react'
import { site } from '@/lib/site-config'

/** Primary orange CTA — arrow slides on hover, scales on tap. */
export function PrimaryCta({
  label = site.ctas.primary,
  href = '#contact',
  className = '',
}: {
  label?: string
  href?: string
  className?: string
}) {
  return (
    <a
      href={href}
      className={`cta-lip group relative inline-flex items-center justify-center gap-3 overflow-hidden bg-orange px-8 py-4 font-display text-base font-semibold uppercase tracking-[0.1em] text-charcoal transition-colors duration-200 hover:bg-orange-dark active:translate-y-px ${className}`}
    >
      {label}
      <span className="relative h-5 w-5 overflow-hidden">
        <ArrowRight
          className="absolute inset-0 h-5 w-5 transition-transform duration-[350ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-6"
          strokeWidth={2.5}
          aria-hidden
        />
        <ArrowRight
          className="absolute inset-0 h-5 w-5 -translate-x-6 transition-transform duration-[350ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0"
          strokeWidth={2.5}
          aria-hidden
        />
      </span>
    </a>
  )
}

/** Secondary outlined "call" CTA. */
export function CallCta({
  label = site.ctas.secondary,
  className = '',
}: {
  label?: string
  className?: string
}) {
  return (
    <a
      href={site.phoneHref}
      className={`group inline-flex items-center justify-center gap-3 border-2 border-border-strong px-8 py-4 font-display text-base font-medium uppercase tracking-[0.1em] text-cold-white transition-colors duration-200 hover:border-orange hover:bg-charcoal-3 active:translate-y-px ${className}`}
    >
      <Phone className="h-4 w-4 text-orange" strokeWidth={2.25} aria-hidden />
      {label}
    </a>
  )
}
