'use client'

import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'

export function MobileHeroMedia() {
  const reduce = useReducedMotion()

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, scale: 1.025 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.55 }}
      className="relative w-full aspect-[16/11] bg-[#0d0e10] border border-[#383b42] overflow-hidden flex flex-col justify-between p-4 lg:hidden mt-7 mb-1 mx-auto max-w-[440px]"
    >
      {/* Real hero image */}
      <Image
        src="/img/hero.png"
        alt="Premium completed kitchen remodel — white cabinetry, marble island, hardwood floors"
        fill
        priority
        sizes="(max-width: 1024px) 100vw, 440px"
        className="object-cover"
        style={{ objectPosition: 'center 38%' }}
      />

      {/* subtle existing-style dark overlay keeps overlaid labels readable */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/15 to-charcoal/45"
        aria-hidden
      />

      {/* Slow orange scanning measurement line (10s interval) */}
      <motion.div
        className="absolute left-0 right-0 h-[1.5px] bg-orange/40 shadow-[0_0_8px_1px_rgba(255,121,0,0.3)] z-10 pointer-events-none"
        animate={
          reduce
            ? undefined
            : {
                top: ['0%', '100%', '0%'],
              }
        }
        transition={{
          duration: 10,
          ease: 'linear',
          repeat: Infinity,
        }}
      />

      {/* L-shaped corner markers (Orange) */}
      <div className="absolute top-0 left-0 w-3.5 h-3.5 border-t-2 border-l-2 border-orange z-20 pointer-events-none" />
      <div className="absolute top-0 right-0 w-3.5 h-3.5 border-t-2 border-r-2 border-orange z-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-3.5 h-3.5 border-b-2 border-l-2 border-orange z-20 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-3.5 h-3.5 border-b-2 border-r-2 border-orange z-20 pointer-events-none" />

      {/* Top Labels */}
      <div className="relative z-20 flex justify-between items-center w-full font-display text-[9px] uppercase tracking-[0.22em] text-cold-white font-semibold">
        <span className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 bg-orange animate-pulse" />
          FEATURED PROJECT / 01
        </span>
        <span className="text-right text-silver-light font-mono">
          DCGC / RESIDENTIAL
        </span>
      </div>

      {/* Bottom Label */}
      <div className="relative z-20 flex justify-between items-end w-full">
        <span className="font-display text-[10px] uppercase tracking-[0.25em] text-orange font-medium">
          BUILT FOR REAL LIFE
        </span>
        <span className="font-mono text-[8px] text-silver-light/70 tracking-wider">
          SPEC // 16:11
        </span>
      </div>
    </motion.div>
  )
}
