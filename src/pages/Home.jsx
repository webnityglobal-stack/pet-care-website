
import { ArrowRight, Heart, ShieldCheck, Clock } from 'lucide-react'
import { Link } from 'react-router-dom'

import Button from '../components/Button'
import SectionTitle from '../components/SectionTitle'
import ServiceCard from '../components/ServiceCard'

const services = [
  {
    title: 'Pet Grooming',
    description: 'Bathing, brushing and grooming for a fresh, comfortable pet.',
    image:
      'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=700&q=85',
    href: '/services',
  },
  {
    title: 'Veterinary Care',
    description: 'Explore veterinary care options for your pet’s wellbeing.',
    image:
      'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&w=700&q=85',
    href: '/services',
  },
  {
    title: 'Pet Boarding',
    description: 'Find suitable care options for your pet while you are away.',
    image:
      'https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?auto=format&fit=crop&w=700&q=85',
    href: '/services',
  },
  {
    title: 'At-Home Care',
    description: 'Discover convenient care options for pets at home.',
    image:
      'https://images.unsplash.com/photo-1551717743-49959800b1f6?auto=format&fit=crop&w=700&q=85',
    href: '/services',
  },
]

const benefits = [
  {
    icon: Heart,
    title: 'Care with kindness',
    description: 'Thoughtful choices for your furry family.',
  },
  {
    icon: ShieldCheck,
    title: 'Clear information',
    description: 'Understand services before you enquire.',
  },
  {
    icon: Clock,
    title: 'Easy enquiries',
    description: 'Tell us what kind of care you need.',
  },
]

export default function Home() {
  return (
    <main className="bg-white">
      {/* SECTION 1: HERO */}
      <section className="px-4 pb-5 pt-4 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl bg-[#F1E9DC]">
          <img
            src="/images/pawora-hero.png"
            alt="Dog and cat relaxing together in a cozy home"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#F7F3EA]/95 via-[#F7F3EA]/80 to-transparent" />

          <div className="relative flex min-h-[430px] items-center px-6 py-12 sm:min-h-[490px] sm:px-10 lg:min-h-[530px] lg:px-16">
            <div className="max-w-xl">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#536B55]">
                PAWORA · PET CARE & SERVICES
              </p>

              <h1 className="text-4xl font-semibold leading-[1.12] tracking-tight text-[#292D28] sm:text-5xl lg:text-6xl">
                Loving care
                <br />
                for every{' '}
                <span className="font-serif italic text-[#536B55]">
                  paw.
                </span>
              </h1>

              <p className="mt-5 max-w-md text-sm leading-6 text-[#555A50] sm:text-base sm:leading-7">
                From grooming to finding the right care, discover services
                that help you give your furry family the attention they deserve.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Button href="/services">
                  Explore Services
                  <ArrowRight size={16} className="ml-2" />
                </Button>

                <Button href="/book-appointment" variant="secondary">
                  Book an Appointment
                </Button>
              </div>

              <p className="mt-5 text-xs text-[#62675D]">
                Thoughtful care. Happier pets. Peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: SERVICES */}
      <section id="services" className="px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-5 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <SectionTitle
              eyebrow="WHAT YOUR PET NEEDS"
              title="Care for every kind of paw."
              description="Explore our range of pet-care services, all in one place."
            />

            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#536B55] hover:text-[#405642]"
            >
              Explore all services
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>

          <div className="mt-5 flex justify-center sm:hidden">
            <Button href="/services" variant="secondary">
              View All Services <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 3: WHY PAWORA */}
      <section className="px-4 py-5 sm:px-6 lg:px-8 lg:py-7">
        <div className="mx-auto max-w-7xl rounded-2xl bg-[#F7F5EF] px-5 py-7 sm:px-8 lg:px-10">
          <SectionTitle
            eyebrow="THE PAWORA DIFFERENCE"
            title="Care should feel simple."
            description="We make it easier to explore care options and take the next step for your pet."
            centered
          />

          <div className="mt-7 grid gap-4 sm:grid-cols-3">
            {benefits.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="flex items-start gap-3 rounded-xl border border-[#EAE5DB] bg-white p-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E8EADF] text-[#536B55]">
                  <Icon size={20} />
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-[#292D28]">
                    {title}
                  </h3>
                  <p className="mt-1 text-xs leading-5 text-[#77776F]">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: FINAL CTA */}
      <section className="px-4 pb-8 pt-5 sm:px-6 lg:px-8 lg:pb-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 rounded-2xl bg-[#536B55] px-6 py-8 text-white sm:flex-row sm:items-center sm:justify-between sm:px-9">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/75">
              LET'S CARE FOR THEM BETTER
            </p>

            <h2 className="text-2xl font-semibold sm:text-3xl">
              Your pet comes first.
            </h2>

            <p className="mt-2 max-w-xl text-sm leading-6 text-white/80">
              Tell us what kind of care you are looking for.
            </p>
          </div>

          <Button
            href="/book-appointment"
            variant="secondary"
            className="shrink-0"
          >
            Get Started <ArrowRight size={16} className="ml-2" />
          </Button>
        </div>
      </section>
    </main>
  )
}
