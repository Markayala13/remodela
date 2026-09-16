'use client'

import { Phone } from 'lucide-react'
import { motion } from 'framer-motion'
import { site } from '@/lib/site-config'

/** Persistent bottom call-now bar on mobile. */
export function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-silver/40 lg:hidden shadow-[0_-4px_20px_rgba(0,0,0,0.5)]">
      <a
        href={site.phoneHref}
        className="relative flex w-full min-h-[44px] items-center justify-center gap-2.5 bg-orange px-4 py-3.5 font-display text-base font-semibold uppercase tracking-[0.08em] text-charcoal active:bg-orange-dark overflow-hidden"
      >
        <motion.div
          className="absolute left-0 top-0 bottom-0 w-1.5 bg-charcoal/30"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 6.5, ease: 'easeInOut' }}
        />
        <Phone className="h-4 w-4" strokeWidth={2.5} aria-hidden />
        {site.ctas.mobileBar}
      </a>
    </div>
  )
}
