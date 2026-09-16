import { site } from '@/lib/site-config'

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border pb-24 pt-16 lg:pb-16">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <span className="font-display text-2xl font-semibold uppercase text-cold-white">
              DC <span className="text-orange">General Contractor</span> LLC
            </span>
            <p className="mt-3 max-w-md font-display text-sm uppercase tracking-[0.12em] text-silver">
              Quality Work. Reliable Service. Customer Satisfaction.
            </p>
          </div>

          <div className="lg:col-span-3">
            <span className="mb-4 block font-display text-[11px] uppercase tracking-[0.24em] text-silver-dark">
              Contact
            </span>
            <a
              href={site.phoneHref}
              className="block font-display text-xl uppercase text-cold-white transition-colors hover:text-orange"
            >
              {site.phoneDisplay}
            </a>
            <span className="mt-1 block text-sm text-silver">{site.serviceArea}</span>
          </div>

          <div className="lg:col-span-3">
            <span className="mb-4 block font-display text-[11px] uppercase tracking-[0.24em] text-silver-dark">
              Follow
            </span>
            <ul className="space-y-1">
              {site.socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.url}
                    className="text-sm text-silver-light transition-colors hover:text-orange"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-silver-dark">
            © {year} DC General Contractor LLC. {site.established}. All rights
            reserved.
          </p>
          <div className="flex items-center gap-5 font-display text-[11px] uppercase tracking-[0.18em] text-silver-dark">
            {/* Legal placeholders — replace with real pages when available. */}
            <span className="cursor-default">Privacy Policy</span>
            <span className="cursor-default">Terms</span>
          </div>
        </div>

        <p className="mt-6 font-display text-[11px] uppercase tracking-[0.2em] text-silver-dark">
          Website designed for DC General Contractor LLC.
        </p>
      </div>
    </footer>
  )
}
