'use client'

import { motion, useReducedMotion } from 'framer-motion'

export function MobileHeroMedia() {
  const reduce = useReducedMotion()

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, scale: 1.025 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.95 }}
      className="relative w-full aspect-[16/10] bg-gradient-to-b from-[#18191c] to-[#0d0e10] border border-[#383b42] overflow-hidden flex flex-col justify-between p-4 lg:hidden mt-6 mb-2 mx-auto max-w-[440px]"
    >
      {/* Subtle breathing animation container */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={
          reduce
            ? undefined
            : {
                scale: [1, 1.01, 1],
                opacity: [1, 0.98, 1],
              }
        }
        transition={{
          duration: 5,
          ease: 'easeInOut',
          repeat: Infinity,
        }}
      >
        {/* Blueprint background texture */}
        <div className="absolute inset-0 blueprint-grid opacity-25 mix-blend-overlay" aria-hidden />

        {/* Technical diagonal grid lines */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          aria-hidden
          style={{
            backgroundImage:
              'repeating-linear-gradient(135deg, transparent 0 20px, rgba(211,215,217,0.4) 20px 21px)',
          }}
        />

        {/* Massive subtle '01' outlined background number */}
        <div
          className="absolute -bottom-6 -right-2 text-[8rem] font-display font-bold leading-none select-none pointer-events-none tracking-tighter"
          aria-hidden
          style={{
            color: 'transparent',
            WebkitTextStroke: '1px rgba(255, 255, 255, 0.05)',
          }}
        >
          01
        </div>
      </motion.div>

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
      <div className="relative z-20 flex justify-between items-center w-full font-display text-[9px] uppercase tracking-[0.22em] text-silver font-semibold">
        <span className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 bg-orange animate-pulse" />
          FEATURED PROJECT / 01
        </span>
        <span className="text-right text-silver-dark font-mono">
          DCGC / RESIDENTIAL
        </span>
      </div>

      {/* Center framing hint */}
      <div className="relative z-20 flex-1 flex flex-col items-center justify-center pointer-events-none py-2">
        <div className="border border-silver/10 bg-charcoal/40 backdrop-blur-[2px] px-3 py-1.5 text-center">
          <span className="font-display text-[9px] uppercase tracking-[0.2em] text-silver-dark">
            [ PROJECT MEDIA FRAME ]
          </span>
        </div>
      </div>

      {/* Bottom Label */}
      <div className="relative z-20 flex justify-between items-end w-full">
        <span className="font-display text-[10px] uppercase tracking-[0.25em] text-orange font-medium">
          BUILT FOR REAL LIFE
        </span>
        <span className="font-mono text-[8px] text-silver-dark/60 tracking-wider">
          SPEC // 16:10
        </span>
      </div>
    </motion.div>
  )
}

