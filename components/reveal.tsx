'use client'

import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { useEffect, useRef, useState, type ReactNode } from 'react'

const EASE = [0.22, 1, 0.36, 1] as const

/**
 * Reliable "in view" trigger. Returns [ref, shown].
 * Reveals when the element enters the viewport, when it is already visible on
 * mount, and — as a hard safety net — after 2.5s no matter what, so content is
 * NEVER left permanently hidden (the common whileInView failure on mobile /
 * fast scroll). If the ref never attaches, it still reveals.
 */
export function useRevealInView<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) {
      setShown(true)
      return
    }
    const r = el.getBoundingClientRect()
    if (r.top < window.innerHeight * 0.92 && r.bottom > 0) {
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
    const t = window.setTimeout(() => setShown(true), 2500)
    return () => {
      io.disconnect()
      window.clearTimeout(t)
    }
  }, [])

  return [ref, shown] as const
}

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
  as?: 'div' | 'section' | 'li' | 'span'
}

/** Fade + rise once in view — resiliently. Respects prefers-reduced-motion. */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  as = 'div',
}: RevealProps) {
  const reduce = useReducedMotion()
  const [ref, shown] = useRevealInView<HTMLElement>()
  const MotionTag = motion[as]
  const visible = reduce || shown

  return (
    <MotionTag
      ref={ref as never}
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      animate={visible ? { opacity: 1, y: 0 } : undefined}
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
