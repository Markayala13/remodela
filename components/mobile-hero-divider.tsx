'use client'

import { motion } from 'framer-motion'

export function MobileHeroDivider() {
  const content = "QUALITY WORK / RELIABLE SERVICE / SINCE 2017"
  
  // We duplicate the text multiple times to ensure smooth infinite scrolling
  const repeatedContent = Array(4).fill(content)

  return (
    <div className="w-full bg-charcoal overflow-hidden border-b border-border py-2.5 lg:hidden flex">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: [0, -1035] }} // Approximating width to seamlessly loop. We can use a percentage if we structure it right.
        // A better approach for framer motion infinite scroll without calculating exact pixel width is to animate 0 to -50% and duplicate twice in a wrapper.
        style={{ width: 'fit-content' }}
      />
      <motion.div
        className="flex whitespace-nowrap font-display text-[11px] uppercase tracking-[0.25em] text-silver"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          duration: 20,
          ease: 'linear',
          repeat: Infinity,
        }}
        style={{ width: 'max-content' }}
      >
        <div className="flex shrink-0">
          {repeatedContent.map((text, i) => (
            <div key={i} className="flex items-center mx-4">
              <span className="text-orange mr-8 font-bold">•</span>
              <span className="mr-4">{text}</span>
            </div>
          ))}
        </div>
        <div className="flex shrink-0">
          {repeatedContent.map((text, i) => (
            <div key={i + 'b'} className="flex items-center mx-4">
              <span className="text-orange mr-8 font-bold">•</span>
              <span className="mr-4">{text}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
