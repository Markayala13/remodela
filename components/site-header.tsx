'use client'

import { useEffect, useState } from 'react'
import { Menu, Phone, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { nav, site } from '@/lib/site-config'

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-border bg-charcoal/95 py-2.5 backdrop-blur'
          : 'border-b border-transparent bg-transparent py-4'
      }`}
    >
      {scrolled && (
        <span className="absolute inset-x-0 bottom-0 h-px metal-hairline" aria-hidden />
      )}
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-4 sm:px-6 lg:px-10">
        {/* Logo */}
        <a href="#top" className="flex flex-col leading-none">
          <span className="font-display text-lg font-semibold uppercase tracking-[0.04em] text-cold-white sm:text-xl">
            DC <span className="text-orange">General Contractor</span>
            <span className="hidden sm:inline"> LLC</span>
          </span>
          <span className="mt-0.5 font-display text-[10px] uppercase tracking-[0.35em] text-silver-dark">
            {site.established}
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative font-display text-sm uppercase tracking-[0.14em] text-silver-light transition-colors hover:text-cold-white"
            >
              {item.label}
              <span className="absolute -bottom-1.5 left-0 h-0.5 w-0 bg-orange transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={site.phoneHref}
            className="font-display text-sm uppercase tracking-[0.12em] text-silver-light transition-colors hover:text-cold-white"
          >
            {site.phoneDisplay}
          </a>
          <a
            href="#contact"
            className="bg-orange px-5 py-2.5 font-display text-sm font-semibold uppercase tracking-[0.1em] text-charcoal transition-colors hover:bg-orange-dark"
          >
            {site.ctas.header}
          </a>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={site.phoneHref}
            aria-label={`Call ${site.phoneDisplay}`}
            className="flex h-10 w-10 items-center justify-center border border-border text-orange"
          >
            <Phone className="h-4 w-4" strokeWidth={2.25} />
          </a>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="flex h-10 w-10 items-center justify-center border border-border text-cold-white"
          >
            <Menu className="h-5 w-5" strokeWidth={2} />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex flex-col bg-charcoal lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="blueprint-grid absolute inset-0 opacity-40" aria-hidden />
            <div className="relative flex items-center justify-between border-b border-border px-4 py-4">
              <span className="font-display text-lg font-semibold uppercase tracking-[0.04em] text-cold-white">
                DC <span className="text-orange">General Contractor</span>
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="flex h-10 w-10 items-center justify-center border border-border text-cold-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav
              className="relative flex flex-1 flex-col justify-center gap-1 px-5"
              aria-label="Mobile"
            >
              {nav.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * i + 0.1, duration: 0.4 }}
                  className="flex items-baseline gap-4 border-b border-border py-4"
                >
                  <span className="font-display text-xs text-orange">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-display text-3xl uppercase tracking-[0.02em] text-cold-white">
                    {item.label}
                  </span>
                </motion.a>
              ))}
            </nav>
            <div className="relative border-t border-border p-5">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="flex w-full items-center justify-center bg-orange px-6 py-4 font-display text-base font-semibold uppercase tracking-[0.1em] text-charcoal"
              >
                {site.ctas.header}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
