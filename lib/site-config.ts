/**
 * DC GENERAL CONTRACTOR LLC — central configuration.
 * Replace the placeholder values below with real business information.
 * Everything the site renders (contact info, services, projects, etc.)
 * is driven from this single file.
 */

export const site = {
  company: 'DC GENERAL CONTRACTOR LLC',
  companyShort: 'DC GENERAL CONTRACTOR',
  established: 'SINCE 2017',
  tagline: 'Home Remodeling & Construction',

  // --- Contact / CTA (configurable) ---
  phoneDisplay: '216-716-9196',
  phoneHref: 'tel:+12167169196',
  // Replace with the real WhatsApp number/link when confirmed.
  whatsappUrl: 'https://wa.me/12167169196',
  // Not confirmed yet — replace with a real address when available.
  email: 'REPLACE_WITH_EMAIL@example.com',
  address: 'Replace with business address',
  serviceArea: 'RESIDENTIAL REMODELING / OHIO', // configurable — location unconfirmed
  hours: [
    { day: 'Mon – Fri', time: 'Replace with hours' },
    { day: 'Saturday', time: 'Replace with hours' },
    { day: 'Sunday', time: 'Replace with hours' },
  ],

  // Text-only social placeholders — do not invent real profiles.
  socials: [
    { label: 'Instagram', url: '#' },
    { label: 'Facebook', url: '#' },
  ],

  ctas: {
    primary: 'GET A FREE ESTIMATE',
    secondary: 'CALL 216-716-9196',
    header: 'FREE ESTIMATE',
    mobileBar: 'FREE ESTIMATE — CALL NOW',
  },

  trust: ['Quality Work', 'Reliable Service', 'Customer Satisfaction'],
  bbb: 'BBB Accredited Business',
} as const

export const nav = [
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
] as const

export type Service = {
  id: string
  number: string
  name: string
  description: string
  spec: string
  placeholder: string
  /** Real local project photo (optional). */
  image?: string
  imageAlt?: string
}

export const services: Service[] = [
  {
    id: 'kitchens',
    number: '01',
    name: 'Kitchens',
    description:
      'Modern layouts, cabinetry, finishes, lighting, and functional upgrades.',
    spec: 'INT / MILLWORK',
    placeholder: 'Replace with completed kitchen project photo',
    image: '/img/kitchen%20renovation.png',
    imageAlt: 'Completed kitchen renovation with white cabinetry and marble island',
  },
  {
    id: 'bathrooms',
    number: '02',
    name: 'Bathrooms',
    description:
      'Clean, durable, comfortable bathroom renovations built for daily life.',
    spec: 'INT / WET AREA',
    placeholder: 'Replace with completed bathroom project photo',
    image: '/img/bathroom%20renovation.png',
    imageAlt: 'Completed bathroom renovation',
  },
  {
    id: 'drywall',
    number: '03',
    name: 'Drywall',
    description: 'Professional installation, repair, finishing, and clean walls.',
    spec: 'INT / SURFACE',
    placeholder: 'Replace with completed drywall project photo',
    image: '/img/drywall.png',
    imageAlt: 'Completed drywall installation with clean, finished walls',
  },
  {
    id: 'painting',
    number: '04',
    name: 'Painting',
    description: 'Interior and exterior finishes with sharp, lasting results.',
    spec: 'INT + EXT / FINISH',
    placeholder: 'Replace with completed painting project photo',
    image: '/img/painting.png',
    imageAlt: 'Freshly painted living room with accent wall finish',
  },
  {
    id: 'decks',
    number: '05',
    name: 'Decks',
    description:
      'Outdoor spaces built for comfort, durability, and entertaining.',
    spec: 'EXT / STRUCTURE',
    placeholder: 'Replace with deck construction project photo',
    image: '/img/protect%20decks.png',
    imageAlt: 'Completed exterior deck construction project',
  },
  {
    id: 'flooring',
    number: '06',
    name: 'Flooring',
    description: 'Flooring upgrades that transform the feel of your home.',
    spec: 'INT / SURFACE',
    placeholder: 'Replace with completed flooring project photo',
    image: '/img/floring.png',
    imageAlt: 'Completed flooring installation',
  },
  {
    id: 'roofing',
    number: '07',
    name: 'Roofing',
    description: 'Protective, dependable roofing work for your property.',
    spec: 'EXT / ENVELOPE',
    placeholder: 'Replace with completed roofing project photo',
    image: '/img/roofing.png',
    imageAlt: 'Completed roofing project on a residential home',
  },
  {
    id: 'basements',
    number: '08',
    name: 'Basements',
    description:
      'Better use of the space below with remodeling built around your needs.',
    spec: 'INT / BUILD-OUT',
    placeholder: 'Replace with completed basement project photo',
    image: '/img/basement%20remodel.png',
    imageAlt: 'Finished basement remodel with living area and built-in media wall',
  },
]

export type Project = {
  id: string
  index: string
  title: string
  type: string
  crop: 'wide' | 'tall' | 'offset'
  placeholder: string
  /** Real local project photo (optional). */
  image?: string
  imageAlt?: string
}

export const projects: Project[] = [
  {
    id: 'p1',
    index: 'PRJ-01',
    title: 'Kitchen Renovation',
    type: 'INTERIOR / KITCHEN',
    crop: 'wide',
    placeholder: 'Replace with real completed kitchen project photography.',
    image: '/img/kitchen%20renovation.png',
    imageAlt: 'Completed kitchen renovation with white cabinetry and marble island',
  },
  {
    id: 'p2',
    index: 'PRJ-02',
    title: 'Bathroom Renovation',
    type: 'INTERIOR / BATH',
    crop: 'tall',
    placeholder: 'Replace with real completed bathroom project photography.',
    image: '/img/bathroom%20renovation.png',
    imageAlt: 'Completed bathroom renovation',
  },
  {
    id: 'p3',
    index: 'PRJ-03',
    title: 'Deck & Exterior',
    type: 'EXTERIOR / DECK',
    crop: 'offset',
    placeholder: 'Replace with real completed deck / exterior project photography.',
    image: '/img/protect%20decks.png',
    imageAlt: 'Completed exterior deck construction project',
  },
]

export type Step = {
  number: string
  title: string
  description: string
}

export const processSteps: Step[] = [
  {
    number: '01',
    title: 'Tell Us Your Vision',
    description:
      'Tell us what needs to change, what you want to improve, and what you have in mind.',
  },
  {
    number: '02',
    title: 'Get Your Free Estimate',
    description: 'We review the project and help define the right next step.',
  },
  {
    number: '03',
    title: 'We Build With Care',
    description:
      'Our team completes the work with attention to quality and communication.',
  },
  {
    number: '04',
    title: 'Enjoy The Result',
    description:
      'You get a finished space built to work better and look better.',
  },
]
