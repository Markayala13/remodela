import Image from 'next/image'
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
  /**
   * When provided, a real image fills the media area (object-fit: cover) and
   * the text placeholder is hidden. Labels, corners and animation are kept.
   */
  src?: string
  /** Accessible description for the real image. */
  alt?: string
  /** Load eagerly (use for the hero / above-the-fold image only). */
  priority?: boolean
  /** Responsive sizes attribute for the real image. */
  sizes?: string
  /** CSS object-position for the real image (e.g. "center", "70% 40%"). */
  objectPosition?: string
}

/**
 * Elegant, replaceable media area. Without `src` it renders the blueprint
 * placeholder; with `src` it renders a real cover image while preserving the
 * technical labels, orange corner markers and reveal animation.
 */
export function MediaPlaceholder({
  label,
  tag,
  code,
  className,
  corners = true,
  children,
  src,
  alt,
  priority,
  sizes,
  objectPosition,
}: MediaPlaceholderProps) {
  const hasImage = Boolean(src)

  return (
    <div
      className={`group relative overflow-hidden border border-border metal-surface ${className ?? ''}`}
      role="img"
      aria-label={alt ?? label}
    >
      {hasImage ? (
        <>
          <Image
            src={src as string}
            alt={alt ?? ''}
            fill
            priority={priority}
            sizes={sizes ?? '100vw'}
            className="object-cover"
            style={objectPosition ? { objectPosition } : undefined}
          />
          {/* subtle existing-style dark overlay keeps overlaid labels readable */}
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-charcoal/25"
            aria-hidden
          />
        </>
      ) : (
        <>
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
        </>
      )}

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

      {/* center label — only when no real image is connected */}
      {hasImage ? (
        children
      ) : (
        <div className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-3 p-6 text-center">
          <ImageIcon className="h-6 w-6 text-silver-dark" strokeWidth={1.25} aria-hidden />
          <p className="max-w-xs text-pretty font-sans text-xs leading-relaxed text-silver">
            {label}
          </p>
          {children}
        </div>
      )}

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
