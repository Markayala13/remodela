'use client'

import { Plus } from 'lucide-react'

const items = [
  'BBB Accredited Business',
  'Quality Work',
  'Reliable Service',
  'Customer Satisfaction',
  'Since 2017',
]

export function TrustMarquee() {
  // Duplicate the set so the track can loop seamlessly.
  const track = [...items, ...items, ...items]

  return (
    <section
      aria-label="Trust and accreditation"
      className="group relative overflow-hidden border-y border-border bg-orange py-4"
    >
      <div className="marquee-track flex w-max items-center whitespace-nowrap group-hover:[animation-play-state:paused]">
        {track.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="px-6 font-display text-lg font-semibold uppercase tracking-[0.12em] text-charcoal sm:text-xl">
              {item}
            </span>
            <Plus className="h-3.5 w-3.5 text-charcoal/70" strokeWidth={3} aria-hidden />
          </span>
        ))}
      </div>

      <style jsx>{`
        .marquee-track {
          animation: marquee 32s linear infinite;
        }
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-33.333%);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation: none;
          }
        }
      `}</style>
    </section>
  )
}
