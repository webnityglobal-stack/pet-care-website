import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Heart,
  ShieldCheck,
  Clock,
  Star,
  Stethoscope,
  Scissors,
  Bath,
  Bone,
  PawPrint,
  Sparkles,
  Phone,
  CalendarCheck,
  ShoppingBag,
} from "lucide-react";

import Button from "../components/Button";
import SectionTitle from "../components/SectionTitle";
import ServiceCard from "../components/ServiceCard";

const services = [
  {
    title: "Pet Grooming",
    description: "Keep your pet clean, fresh and looking their absolute best.",
    icon: Scissors,
    link: "/services",
     image:
      'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=900&q=85',
  },
  {
    title: "Veterinary Care",
    description: "Professional health support for your furry family members.",
    icon: Stethoscope,
    link: "/services",
     image:
      'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&w=900&q=85',
  },
  {
    title: "Bath & Hygiene",
    description: "Gentle bathing and hygiene care for happy, healthy pets.",
    icon: Bath,
    link: "/services",
    image:
      'https://images.unsplash.com/photo-1581888227599-779811939961?auto=format&fit=crop&w=900&q=85',
  },
  {
    title: "Food & Nutrition",
    description: "Thoughtfully selected nutrition for every stage of life.",
    icon: Bone,
    link: "/services",
   image:
      'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=900&q=85',
  },
];

const careCategories = [
  {
    title: "Food & Treats",
    description: "Everyday nutrition and tasty rewards.",
    icon: Bone,
  },
  {
    title: "Accessories",
    description: "Comfortable essentials for daily adventures.",
    icon: ShoppingBag,
  },
  {
    title: "Pharmacy",
    description: "Pet healthcare essentials and support.",
    icon: ShieldCheck,
  },
  {
    title: "Wellness",
    description: "Support your pet's everyday wellbeing.",
    icon: Heart,
  },
  {
    title: "Grooming",
    description: "Clean coats, healthy skin and happy pets.",
    icon: Scissors,
  },
  {
    title: "Apparel",
    description: "Comfortable styles for your little companions.",
    icon: Sparkles,
  },
];

const benefits = [
  "Pet-friendly and caring approach",
  "Services tailored to your pet",
  "Simple and convenient booking",
  "Comfort-first care experience",
  "Support for everyday pet needs",
  "One place for all-round pet care",
];

const steps = [
  {
    number: "01",
    title: "Choose a Service",
    description: "Explore our services and find the right care for your pet.",
  },
  {
    number: "02",
    title: "Book Your Visit",
    description: "Choose a convenient appointment and share your requirements.",
  },
  {
    number: "03",
    title: "Enjoy Better Care",
    description: "Let your pet enjoy a comfortable and caring experience.",
  },
];

const tips = [
  {
    category: "HEALTH",
    title: "Build a Healthy Routine",
    description:
      "Regular exercise, fresh water and routine health check-ups help support your pet's wellbeing.",
  },
  {
    category: "GROOMING",
    title: "Make Grooming Comfortable",
    description:
      "Gentle brushing and regular hygiene care can help your pet feel fresh and comfortable.",
  },
  {
    category: "NUTRITION",
    title: "Choose the Right Nutrition",
    description:
      "Select food according to your pet's age, size, activity and individual dietary needs.",
  },
];

const faqs = [
  {
    question: "What services does Pawora offer?",
    answer:
      "Pawora brings together pet grooming, hygiene, wellness, nutrition and other pet-care services. Visit our Services page to explore the available options.",
  },
  {
    question: "How can I book an appointment?",
    answer:
      "Visit our appointment booking page, select the service you need and provide your details to request an appointment.",
  },
  {
    question: "Can I find pet products through Pawora?",
    answer:
      "Pawora's website can showcase categories such as food, treats, accessories, grooming essentials and wellness products, depending on which features are enabled in your project.",
  },
  {
    question: "How often should my pet be groomed?",
    answer:
      "Grooming frequency depends on your pet's breed, coat type, lifestyle and skin condition. Ask a qualified groomer or veterinarian for advice specific to your pet.",
  },
];

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#fffdf7] text-[#183d2b]">
      {/* HERO SECTION */}
      <section className="relative">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-8 sm:px-8 sm:py15 lg:grid-cols-2 lg:gap-14 lg:px-10 lg:py-10">
          <div className="relative z-10">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#dce9dc] bg-[#eff6eb] px-4 py-2 text-sm font-semibold text-[#346844]">
              <PawPrint size={17} />
              A little more love in every paw
            </div>

            <h1 className="max-w-2xl text-4xl font-extrabold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl">
              Happier Pets.
              <span className="mt-2 block text-[#6c9656]">
                Healthier Lives.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-[#68786a] sm:text-lg">
              Everything your furry family needs, all in one caring place.
              Discover thoughtful pet services, everyday essentials and
              wellness support designed around your pet.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/services"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#17773f] px-7 py-4 font-semibold !text-white shadow-md shadow-[#17773f]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#f6fffa] hover:!text-[#17773f] hover:shadow-lg hover:shadow-[#17773f]/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17773f] focus-visible:ring-offset-2"
              >
                Explore Services
                <ArrowRight
                  size={19}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/book-appointment"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#cbdacb] bg-white px-7 py-4 font-semibold text-[#f1f6f3] transition hover:bg-[#f0f6ed]"
              >
                <CalendarCheck size={19} />
                Book an Appointment
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#647568]">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-[#6c9656]" />
                Pet-first approach
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-[#6c9656]" />
                Convenient booking
              </span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -right-3 -top-3 h-24 w-24 rounded-full bg-[#e6efdc] sm:-right-5 sm:-top-5 sm:h-32 sm:w-32" />

            <div className="absolute -bottom-5 -left-5 h-24 w-24 rounded-full bg-[#f7e4c9] sm:h-32 sm:w-32" />

            <div className="relative overflow-hidden rounded-[2rem] border-[8px] border-white shadow-2xl shadow-[#244d35]/10 sm:rounded-[2.5rem]">
              <img
                src="/images/pawora-hero.png"
                alt="A happy pet enjoying caring attention"
                className="h-[340px] w-full object-cover sm:h-[460px]"
              />

              <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/70 bg-white/95 p-4 shadow-lg backdrop-blur sm:bottom-6 sm:left-6 sm:right-6 sm:p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#edf5e7] text-[#426e3c]">
                    <Heart size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-[#244d35]">
                      Care that feels like family
                    </p>
                    <p className="mt-1 text-sm text-[#718072]">
                      Little paws deserve lots of love.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-y border-[#e7eadf] bg-[#f5f7ee]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-5 px-5 py-7 sm:px-8 md:grid-cols-4 lg:px-10">
          {[
            { icon: Heart, title: "Care with Love" },
            { icon: ShieldCheck, title: "Pet-First Approach" },
            { icon: Clock, title: "Easy Scheduling" },
            { icon: PawPrint, title: "Every Paw Matters" },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="flex items-center justify-center gap-3 text-center sm:justify-start"
              >
                <Icon
                  size={24}
                  className="shrink-0 text-[#72965d]"
                />
                <span className="text-sm font-semibold text-[#31543a] sm:text-base">
                  {item.title}
                </span>
              </div>
            );
          })}
        </div>
      </section>

      {/* POPULAR SERVICES */}
      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-15 lg:px-8">
        <SectionTitle
          eyebrow="OUR SERVICES"
          title="Care for Every Kind of Paw"
          description="From everyday grooming to essential wellness support, explore services that help your companion feel their best."
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>

        <div className="mt-9 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 font-bold text-[#426e3c] transition hover:text-[#244d35]"
          >
            View All Services
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* WHY PAWORA */}
      <section className="bg-[#edf3e7]">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-10">
          <div className="overflow-hidden rounded-[2rem] shadow-xl shadow-[#244d35]/10">
            <img
              src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1100&q=85"
              alt="Dogs spending happy time together outdoors"
              loading="lazy"
              className="h-[300px] w-full object-cover sm:h-[420px]"
            />
          </div>

          <div>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#6b8e54]">
              WHY PAWORA
            </span>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
              Because Your Pet Deserves the Best Kind of Care
            </h2>

            <p className="mt-5 leading-8 text-[#68786a]">
              Pets are family. Pawora is designed to make caring for them
              simpler with a welcoming experience, helpful services and
              everyday essentials in one convenient place.
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <CheckCircle2
                    size={20}
                    className="mt-0.5 shrink-0 text-[#72965d]"
                  />
                  <span className="text-sm font-medium leading-6 text-[#31543a]">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Link
                to="/about"
                className="group inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#17773f] bg-[#17773f] px-6 py-3.5 font-semibold !text-white shadow-md shadow-[#17773f]/20 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-[#f6fffa] hover:!text-[#17773f] hover:shadow-lg hover:shadow-[#17773f]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17773f] focus-visible:ring-offset-2"
              >
                Get to Know Pawora
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CARE CATEGORIES */}
      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-20 lg:px-10">
        <SectionTitle
          eyebrow="EXPLORE PET CARE"
          title="Everything for Your Furry Friend"
          description="Explore the essentials that make everyday pet parenting easier, healthier and more joyful."
        />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {careCategories.map((category) => {
            const Icon = category.icon;

            return (
              <Link
                to="/services"
                key={category.title}
                className="group rounded-2xl border border-[#e7eadf] bg-white p-4 text-center transition duration-300 hover:-translate-y-1 hover:border-[#b8cdb0] hover:shadow-lg hover:shadow-[#244d35]/5 sm:p-5"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#edf4e7] text-[#527c46] transition group-hover:bg-[#244d35] group-hover:text-white">
                  <Icon size={25} />
                </div>

                <h3 className="mt-4 text-sm font-bold text-[#244d35] sm:text-base">
                  {category.title}
                </h3>

                <p className="mt-2 text-xs leading-5 text-[#7a877a] sm:text-sm">
                  {category.description}
                </p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-[#a48860] text-white">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-20 lg:px-10">
          <SectionTitle
            eyebrow="SIMPLE & CONVENIENT"
            title="Better Pet Care in Three Easy Steps"
            description="Getting started with Pawora is simple. Find the care you need and take the next step for your pet."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.number}
                className="rounded-3xl border border-white/15 bg-white/[0.25] p-6 sm:p-8"
              >
                <span className="text-4xl font-extrabold text-[#06b809]">
                  {step.number}
                </span>

                <h3 className="mt-5 text-xl font-bold">{step.title}</h3>

                <p className="mt-3 text-sm leading-7 text-white/75">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-9 text-center">
            <Link
              to="/book-appointment"
              className="inline-flex items-center gap-2 rounded-full bg-[#343a2c] px-7 py-4 font-bold text-[#244d35] transition hover:bg-white"
            >
              Get Started
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* CARE PROMISE */}
      <section className="border-y border-[#e7eadf] bg-[#f5f7ee]">
        <div className="mx-auto max-w-7xl px-5 py-14 text-center sm:px-8 sm:py-16 lg:px-10">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#e3edd9] text-[#527c46]">
            <Heart size={27} />
          </div>

          <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-extrabold leading-tight sm:text-4xl">
            Every Pet Is Unique. Their Care Should Be Too.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-8 text-[#68786a]">
            From playful puppies to senior companions, thoughtful care begins
            with understanding your pet's individual needs.
          </p>
        </div>
      </section>

      {/* PET CARE TIPS */}
      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-20 lg:px-10">
        <SectionTitle
          eyebrow="THE PAWORA JOURNAL"
          title="Little Tips for Happier Pets"
          description="Simple ideas to help you build healthier everyday habits for your furry companion."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {tips.map((tip, index) => (
            <article
              key={tip.title}
              className="overflow-hidden rounded-3xl border border-[#e7eadf] bg-white transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#244d35]/5"
            >
              <div className="flex h-36 items-center justify-center bg-[#edf4e7] sm:h-44">
                {index === 0 && (
                  <Heart size={52} strokeWidth={1.4} className="text-[#72965d]" />
                )}
                {index === 1 && (
                  <Scissors size={52} strokeWidth={1.4} className="text-[#72965d]" />
                )}
                {index === 2 && (
                  <Bone size={52} strokeWidth={1.4} className="text-[#72965d]" />
                )}
              </div>

              <div className="p-6">
                <span className="text-xs font-bold tracking-[0.18em] text-[#72965d]">
                  {tip.category}
                </span>

                <h3 className="mt-3 text-xl font-bold text-[#244d35]">
                  {tip.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#748074]">
                  {tip.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#f5f7ee]">
        <div className="mx-auto max-w-4xl px-5 py-10 sm:px-8 sm:py-20">
          <SectionTitle
            eyebrow="GOT QUESTIONS?"
            title="Frequently Asked Questions"
            description="Quick answers to common questions about Pawora and pet care."
          />

          <div className="mt-9 space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-[#e1e8db] bg-white p-5 open:border-[#b8cdb0] sm:p-6"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-[#244d35]">
                  {faq.question}
                  <span className="text-xl text-[#72965d] transition group-open:rotate-45">
                    +
                  </span>
                </summary>

                <p className="mt-4 pr-5 text-sm leading-7 text-[#718072]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-5 py-10 sm:px-8 sm:py-10 lg:px-10">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#dfead5] px-6 py-12 text-center sm:px-12 sm:py-16">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#527c46]">
            <PawPrint size={28} />
          </div>

          <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-extrabold leading-tight text-[#244d35] sm:text-4xl lg:text-5xl">
            Your Pet's Happy Journey Starts Here
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-[#647568]">
            Find the right care, explore everyday essentials and give your
            furry friend a little extra love with Pawora.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
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
              href="https://wa.me/?text=Hello%20Pawora%2C%20I%20would%20like%20to%20know%20more%20about%20your%20pet%20care%20services."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#b9cbb0] bg-white px-7 py-4 font-semibold text-[#244d35] transition hover:bg-[#f7faf4]"
            >
              <Phone size={19} />
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}