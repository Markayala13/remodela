'use client'

import { useState, type FormEvent } from 'react'
import { Phone, MessageCircle, MapPin, Clock, Mail, Check } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { services, site } from '@/lib/site-config'

const fieldClass =
  'w-full border border-border bg-charcoal-2 px-4 py-3 font-sans text-sm text-cold-white outline-none transition-colors placeholder:text-silver-dark focus:border-orange'
const labelClass =
  'mb-2 block font-display text-[11px] uppercase tracking-[0.2em] text-silver'

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // NOTE: Front-end only. Wire this up to an email service or CRM
    // (e.g. Resend, Formspree, or an API route) to actually deliver leads.
    setSubmitted(true)
  }

  return (
    <section id="contact" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div className="mb-12 grid grid-cols-1 items-end gap-6 lg:mb-16 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <Reveal className="mb-4 flex items-center gap-3">
              <span className="font-display text-xs uppercase tracking-[0.28em] text-orange">
                [ 07 ] Contact
              </span>
              <span className="h-px w-16 bg-silver-dark" />
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-display text-[clamp(2.5rem,7vw,5.5rem)] font-bold uppercase leading-[0.9] text-cold-white">
                Start Your
                <br />
                <span className="text-orange">Free Estimate.</span>
              </h2>
            </Reveal>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Info column */}
          <div className="lg:col-span-5">
            <div className="border border-border">
              <div className="border-b border-border p-6">
                <span className="font-display text-2xl font-semibold uppercase text-cold-white">
                  {site.company}
                </span>
                <span className="mt-1 block font-display text-[11px] uppercase tracking-[0.3em] text-silver-dark">
                  {site.established}
                </span>
              </div>

              <a
                href={site.phoneHref}
                className="group flex items-center gap-4 border-b border-border p-6 transition-colors hover:bg-charcoal-2"
              >
                <Phone className="h-5 w-5 text-orange" strokeWidth={2} aria-hidden />
                <div>
                  <span className="block font-display text-[11px] uppercase tracking-[0.2em] text-silver-dark">
                    Call Today — Free Estimates
                  </span>
                  <span className="font-display text-2xl uppercase text-cold-white group-hover:text-orange">
                    {site.phoneDisplay}
                  </span>
                </div>
              </a>

              <a
                href={site.whatsappUrl}
                className="group flex items-center gap-4 border-b border-border p-6 transition-colors hover:bg-charcoal-2"
              >
                <MessageCircle className="h-5 w-5 text-orange" strokeWidth={2} aria-hidden />
                <div>
                  <span className="block font-display text-[11px] uppercase tracking-[0.2em] text-silver-dark">
                    WhatsApp — configure URL
                  </span>
                  <span className="font-display text-lg uppercase text-cold-white group-hover:text-orange">
                    Message Us
                  </span>
                </div>
              </a>

              <div className="grid grid-cols-1 divide-y divide-border sm:grid-cols-2 sm:divide-x sm:divide-y-0">
                <div className="flex items-start gap-3 p-6">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-orange" strokeWidth={2} aria-hidden />
                  <div>
                    <span className="block font-display text-[11px] uppercase tracking-[0.2em] text-silver-dark">
                      Service Area
                    </span>
                    <span className="text-sm text-silver-light">{site.serviceArea}</span>
                    <span className="mt-1 block text-xs text-silver-dark">{site.address}</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-6">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-orange" strokeWidth={2} aria-hidden />
                  <div>
                    <span className="block font-display text-[11px] uppercase tracking-[0.2em] text-silver-dark">
                      Hours
                    </span>
                    {site.hours.map((h) => (
                      <span key={h.day} className="block text-xs text-silver-light">
                        {h.day}: {h.time}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 border-t border-border p-6">
                <Mail className="h-5 w-5 shrink-0 text-orange" strokeWidth={2} aria-hidden />
                <span className="text-sm text-silver-light">{site.email}</span>
              </div>
            </div>
          </div>

          {/* Form column */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center border border-orange bg-charcoal-2 p-10 text-center">
                <Check className="h-10 w-10 text-orange" strokeWidth={2} aria-hidden />
                <h3 className="mt-4 font-display text-3xl font-semibold uppercase text-cold-white">
                  Request Received
                </h3>
                <p className="mt-2 max-w-sm text-pretty text-sm text-silver-light">
                  This form is a front-end demo. Connect it to an email service
                  or CRM to start receiving leads. For now, please call{' '}
                  <a href={site.phoneHref} className="text-orange">
                    {site.phoneDisplay}
                  </a>
                  .
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="border border-border p-6 lg:p-8">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className={labelClass}>
                      Name
                    </label>
                    <input id="name" name="name" required className={fieldClass} placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="phone" className={labelClass}>
                      Phone
                    </label>
                    <input id="phone" name="phone" type="tel" required className={fieldClass} placeholder="(000) 000-0000" />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="email" className={labelClass}>
                      Email
                    </label>
                    <input id="email" name="email" type="email" className={fieldClass} placeholder="you@email.com" />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="service" className={labelClass}>
                      Service Needed
                    </label>
                    <select id="service" name="service" className={fieldClass} defaultValue="">
                      <option value="" disabled>
                        Select a service
                      </option>
                      {services.map((s) => (
                        <option key={s.id} value={s.name}>
                          {s.name}
                        </option>
                      ))}
                      <option value="other">And More / Other</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="details" className={labelClass}>
                      Project Description
                    </label>
                    <textarea
                      id="details"
                      name="details"
                      rows={4}
                      className={`${fieldClass} resize-none`}
                      placeholder="Tell us what you want to improve…"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-6 flex w-full items-center justify-center gap-3 bg-orange px-6 py-4 font-display text-base font-semibold uppercase tracking-[0.08em] text-charcoal transition-colors hover:bg-orange-dark active:scale-[0.99] sm:w-auto"
                >
                  {site.ctas.primary}
                </button>

                <p className="mt-4 font-display text-[11px] uppercase tracking-[0.18em] text-silver-dark">
                  * Front-end only — configure email/CRM submission before launch.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
