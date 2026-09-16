'use client'

import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { useEffect, useRef, useState, type ReactNode } from 'react'

const EASE = [0.22, 1, 0.36, 1] as const

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
  as?: 'div' | 'section' | 'li' | 'span'
}

/**
 * Fade + rise once in view — resiliently.
 * Uses IntersectionObserver plus a mount check and a safety timeout so the
 * content is NEVER left permanently invisible (a common whileInView failure
 * mode on mobile / fast scroll). Respects prefers-reduced-motion.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  as = 'div',
}: RevealProps) {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLElement | null>(null)
  const [shown, setShown] = useState(false)
  const MotionTag = motion[as]

  useEffect(() => {
    if (reduce) {
      setShown(true)
      return
    }
    const el = ref.current
    if (!el) return

    // Already at/near the viewport on mount → reveal right away.
    const nearViewport = () => {
      const r = el.getBoundingClientRect()
      return r.top < window.innerHeight * 0.92 && r.bottom > 0
    }
    if (nearViewport()) {
      setShown(true)
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShown(true)
          io.disconnect()
        }
      },
      { threshold: 0.12 },
    )
    io.observe(el)

    // Hard safety net: never stay hidden.
    const t = window.setTimeout(() => setShown(true), 2500)

    return () => {
      io.disconnect()
      window.clearTimeout(t)
    }
  }, [reduce])

  return (
    <MotionTag
      ref={ref as never}
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      animate={shown ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.7, ease: EASE, delay }}
    >
      {children}
    </MotionTag>
  )
}

/** A single line masked reveal — used for large headlines. */
export function MaskLine({
  children,
  className,
  delay = 0,
  play = true,
}: {
  children: ReactNode
  className?: string
  delay?: number
  play?: boolean
}) {
  const reduce = useReducedMotion()

  if (reduce) {
    return <span className={`block ${className ?? ''}`}>{children}</span>
  }

  return (
    <span className="block overflow-hidden">
      <motion.span
        className={`block ${className ?? ''}`}
        initial={{ y: '110%' }}
        animate={play ? { y: '0%' } : undefined}
        whileInView={play ? undefined : { y: '0%' }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: EASE, delay }}
      >
        {children}
      </motion.span>
    </span>
  )
}

export const revealStagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

export const revealItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
}
