
import {
  ArrowRight,
  Scissors,
  Stethoscope,
  Syringe,
  House,
  HeartPulse,
  Sparkles,
  CalendarCheck,
  Clock,
  ShieldCheck,
  Heart,
  CheckCircle2,
} from 'lucide-react'
import { Link } from 'react-router-dom'

import Button from '../components/Button'
import SectionTitle from '../components/SectionTitle'

const services = [
  {
    icon: Scissors,
    title: 'Pet Grooming',
    description:
      'Keep your pet fresh, clean and comfortable with grooming and coat-care services.',
    features: [
      'Bathing and brushing',
      'Coat and hygiene care',
      'Nail and paw care enquiries',
    ],
    image:
      'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=900&q=85',
  },
  {
    icon: Stethoscope,
    title: 'Veterinary Consultation',
    description:
      'Explore veterinary consultation options for your pet’s health and wellbeing.',
    features: [
      'General health consultation',
      'Wellness checkup enquiries',
      'Guidance on next steps',
    ],
    image:
      'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&w=900&q=85',
  },
  {
    icon: Syringe,
    title: 'Vaccination Support',
    description:
      'Enquire about vaccination appointments and routine preventive-care needs.',
    features: [
      'Vaccination appointment enquiries',
      'Routine care planning',
      'Veterinary guidance',
    ],
    image:
      'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=900&q=85',
  },
  {
    icon: House,
    title: 'Pet Boarding',
    description:
      'Explore suitable care arrangements for your pet when you are away.',
    features: [
      'Boarding availability enquiries',
      'Care routine discussions',
      'Stay requirements',
    ],
    image:
      'https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?auto=format&fit=crop&w=900&q=85',
  },
  {
    icon: Heart,
    title: 'At-Home Pet Care',
    description:
      'Discover convenient care options designed around your pet and home routine.',
    features: [
      'At-home care enquiries',
      'Routine and care needs',
      'Service availability checks',
    ],
    image:
      'https://images.unsplash.com/photo-1551717743-49959800b1f6?auto=format&fit=crop&w=900&q=85',
  },
  {
    icon: HeartPulse,
    title: 'Pet Wellness',
    description:
      'Explore everyday wellness support to help you make informed care decisions.',
    features: [
      'General wellness enquiries',
      'Preventive-care planning',
      'Routine care guidance',
    ],
    image:
      'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=900&q=85',
  },
  {
    icon: Sparkles,
    title: 'Dental & Hygiene Care',
    description:
      'Ask about dental hygiene and grooming-related care options for your pet.',
    features: [
      'Dental-care enquiries',
      'Hygiene recommendations',
      'Professional care referrals',
    ],
    image:
      'https://images.unsplash.com/photo-1581888227599-779811939961?auto=format&fit=crop&w=900&q=85',
  },
]

const benefits = [
  {
    icon: Heart,
    title: 'Compassionate approach',
    description:
      'Thoughtful service options centred around your pet’s comfort.',
  },
  {
    icon: ShieldCheck,
    title: 'Clear communication',
    description:
      'Understand service details and availability before booking.',
  },
  {
    icon: Clock,
    title: 'Convenient enquiries',
    description:
      'Tell us what your pet needs and ask about the next available appointment.',
  },
]

const steps = [
  {
    number: '01',
    title: 'Choose a service',
    description: 'Explore the care options available for your pet.',
  },
  {
    number: '02',
    title: 'Send an enquiry',
    description: 'Share your pet’s needs and preferred appointment details.',
  },
  {
    number: '03',
    title: 'Confirm your booking',
    description: 'Check availability and confirm the service arrangements.',
  },
]

export default function Services() {
  return (
    <main className="bg-white text-[#292D28]">
      {/* SECTION 1: HERO */}
      <section className="px-4 pb-5 pt-4 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl bg-[#F1E9DC]">
          <img
            src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1800&q=85"
            alt="Dogs enjoying time together"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#F7F3EA]/95 via-[#F7F3EA]/85 to-[#F7F3EA]/20" />

          <div className="relative flex min-h-[300px] items-center px-5 py-9 sm:min-h-[350px] sm:px-9 lg:min-h-[390px] lg:px-14">
            <div className="max-w-xl">
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#536B55]">
                PAWORA · PET CARE SERVICES
              </p>

              <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                Better care for
                <br />
                your furry <span className="font-serif italic text-[#536B55]">family.</span>
              </h1>

              <p className="mt-4 max-w-md text-sm leading-6 text-[#555A50] sm:text-base">
                Explore pet grooming, veterinary care and everyday support
                designed around your pet’s needs.
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  to="/book-appointment"
                  className="group inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#17773f] bg-[#17773f] px-7 py-4 font-semibold !text-white shadow-md shadow-[#17773f]/20 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-[#f6fffa] hover:!text-[#17773f] hover:shadow-lg hover:shadow-[#17773f]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17773f] focus-visible:ring-offset-2"
                >
                  <CalendarCheck
                    size={19}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                  Book an Appointment
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

                <a
                  href="#all-services"
                  className="inline-flex items-center justify-center rounded-full border border-[#D9DFD3] bg-white/90 px-5 py-3 text-sm font-semibold text-[#292D28] transition hover:bg-white"
                >
                  Explore Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: ALL SERVICES */}
      <section
        id="all-services"
        className="scroll-mt-24 px-4 py-6 sm:px-6 lg:px-8 lg:py-8"
      >
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="OUR SERVICES"
            title="Care for every stage of life."
            description="Explore our range of pet-care options and find the right next step."
            centered
          />

          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon

              return (
                <article
                  key={service.title}
                  className="group overflow-hidden rounded-2xl border border-[#EAE5DB] bg-white transition duration-200 hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="relative h-44 overflow-hidden bg-[#F7F5EF]">
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                    />

                    <div className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#536B55] shadow-sm">
                      <Icon size={20} />
                    </div>
                  </div>

                  <div className="p-4 sm:p-5">
                    <h2 className="text-lg font-semibold">{service.title}</h2>

                    <p className="mt-2 text-sm leading-6 text-[#6C7066]">
                      {service.description}
                    </p>

                    <ul className="mt-3 space-y-2">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-xs leading-5 text-[#62675D]"
                        >
                          <CheckCircle2
                            size={15}
                            className="mt-0.5 shrink-0 text-[#536B55]"
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Link
                      to="/book-appointment"
                      className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#536B55] hover:text-[#405642]"
                    >
                      Enquire & Book
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* SECTION 3: WHY CHOOSE PAWORA */}
      <section className="px-4 py-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-2xl bg-[#F7F5EF] px-5 py-6 sm:px-8 lg:px-9">
          <SectionTitle
            eyebrow="THE PAWORA DIFFERENCE"
            title="Care that puts pets first."
            description="A simple, thoughtful way to explore care options for your companion."
            centered
          />

          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {benefits.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="flex items-start gap-3 rounded-xl border border-[#EAE5DB] bg-white p-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E8EADF] text-[#536B55]">
                  <Icon size={20} />
                </div>

                <div>
                  <h3 className="text-sm font-semibold">{title}</h3>
                  <p className="mt-1 text-xs leading-5 text-[#77776F]">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: HOW IT WORKS */}
      <section className="px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="SIMPLE BOOKING"
            title="Three steps to get started."
            description="Finding the right care for your pet should feel straightforward."
            centered
          />

          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.number}
                className="rounded-xl border border-[#EAE5DB] p-5"
              >
                <p className="text-2xl font-semibold text-[#C7D0C0]">
                  {step.number}
                </p>
                <h3 className="mt-3 text-base font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#77776F]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-4 flex justify-center">
            <Button
              href="/book-appointment"
              className="!bg-[#dfd8b9] !text-[#30483A] transition-all duration-300 hover:!bg-white hover:!text-[#17773F] hover:shadow-lg"
            >
              Start Your Enquiry
              <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 5: SERVICE ENQUIRY CTA */}
      <section className="px-4 pb-7 pt-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 rounded-2xl bg-[#536B55] px-5 py-7 text-white sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <div>
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/75">
              HERE FOR YOUR FURRY FAMILY
            </p>

            <h2 className="text-2xl font-semibold sm:text-3xl">
              Let’s find the right care.
            </h2>

            <p className="mt-2 max-w-xl text-sm leading-6 text-white/80">
              Tell us about your pet and the service you are looking for.
            </p>
          </div>

          <Button
            href="/book-appointment"
            variant="secondary"
            className="shrink-0 !bg-[#F6F4EC] !text-[#30483A] !border !border-[#F6F4EC] transition-all duration-300 hover:!bg-white hover:!text-[#17773F] hover:!border-white hover:shadow-lg"
          >
            <CalendarCheck size={16} className="mr-2" />
            Book an Appointment
          </Button>
        </div>
      </section>
    </main>
  )
}
