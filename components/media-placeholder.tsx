import { ImageIcon } from 'lucide-react'
import type { ReactNode } from 'react'

type MediaPlaceholderProps = {
  /** Descriptive instruction shown to whoever replaces the media later. */
  label: string
  /** Small technical label (top-left), e.g. project id or spec. */
  tag?: string
  /** Optional corner id (top-right). */
  code?: string
  className?: string
  /** Show animated orange corner markers. */
  corners?: boolean
  children?: ReactNode
}

/**
 * Elegant, replaceable media area. This is intentionally NOT an image.
 * Swap the inner surface for a real <img>/<video> when project media exists.
 */
export function MediaPlaceholder({
  label,
  tag,
  code,
  className,
  corners = true,
  children,
}: MediaPlaceholderProps) {
  return (
    <div
      className={`group relative overflow-hidden border border-border metal-surface ${className ?? ''}`}
      role="img"
      aria-label={label}
    >
      {/* blueprint texture */}
      <div className="absolute inset-0 blueprint-grid-fine opacity-70" aria-hidden />

      {/* diagonal survey line */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        aria-hidden
        style={{
          backgroundImage:
            'repeating-linear-gradient(135deg, transparent 0 22px, rgba(211,215,217,0.5) 22px 23px)',
        }}
      />

      {/* technical labels */}
      {tag && (
        <span className="absolute left-3 top-3 z-10 font-display text-[11px] uppercase tracking-[0.2em] text-silver">
          {tag}
        </span>
      )}
      {code && (
        <span className="absolute right-3 top-3 z-10 font-display text-[11px] uppercase tracking-[0.2em] text-silver-dark">
          {code}
        </span>
      )}

      {/* center label */}
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-3 p-6 text-center">
        <ImageIcon className="h-6 w-6 text-silver-dark" strokeWidth={1.25} aria-hidden />
        <p className="max-w-xs text-pretty font-sans text-xs leading-relaxed text-silver">
          {label}
        </p>
        {children}
      </div>

      {/* orange corner markers */}
      {corners && (
        <>
          <span className="pointer-events-none absolute left-0 top-0 h-5 w-5 border-l-2 border-t-2 border-orange transition-all duration-500 group-hover:h-7 group-hover:w-7" />
          <span className="pointer-events-none absolute bottom-0 right-0 h-5 w-5 border-b-2 border-r-2 border-orange transition-all duration-500 group-hover:h-7 group-hover:w-7" />
        </>
      )}
    </div>
  )
}
