import {
  Heart,
  ShieldCheck,
  PawPrint,
  Sparkles,
  Target,
  Eye,
  CheckCircle2,
  ArrowRight,
  Clock,
  Users,
} from "lucide-react";

import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";

function About() {
  const values = [
    {
      icon: Heart,
      title: "Care with Love",
      description:
        "We believe every pet deserves patience, kindness, comfort, and personal attention.",
    },
    {
      icon: ShieldCheck,
      title: "Safety First",
      description:
        "Your pet's comfort and wellbeing guide the way we approach pet care.",
    },
    {
      icon: Sparkles,
      title: "Quality Care",
      description:
        "We aim to make everyday pet care easier, more convenient, and more enjoyable.",
    },
    {
      icon: Users,
      title: "Pet Parent Support",
      description:
        "We want pet parents to feel informed and supported throughout their pet-care journey.",
    },
  ];

  const highlights = [
    "A caring approach to every pet",
    "Convenient pet-care solutions",
    "Services designed around pet needs",
    "A welcoming experience for pet parents",
  ];

  const steps = [
    {
      number: "01",
      title: "Understand",
      description:
        "We recognise that every pet has different needs, habits, and preferences.",
    },
    {
      number: "02",
      title: "Care",
      description:
        "We focus on comfort, thoughtful attention, and a positive care experience.",
    },
    {
      number: "03",
      title: "Support",
      description:
        "We help pet parents explore suitable services and everyday care options.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#faf9f6] text-[#30483a]">

      {/* HERO SECTION */}
      <section className="px-5 pb-7 pt-8 md:px-10 md:pb-9 md:pt-10">
        <div className="mx-auto max-w-6xl">
          <SectionTitle
            eyebrow="ABOUT PAWORA"
            title="Every pet deserves love, care, and comfort."
            description="At Pawora, we believe pets are family. Our goal is to make quality pet care simple, comfortable, and accessible for every pet parent."
            centered
          />
        </div>
      </section>

      {/* ABOUT INTRODUCTION */}
      <section className="mx-auto grid max-w-6xl items-center gap-7 px-5 py-5 md:grid-cols-2 md:gap-10 md:px-10">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&w=1000&q=80"
            alt="A happy dog enjoying time outdoors"
            className="h-[270px] w-full rounded-3xl object-cover shadow-md md:h-[330px]"
          />

          <div className="absolute bottom-3 left-3 flex items-center gap-3 rounded-2xl bg-white p-3 shadow-lg md:bottom-5 md:left-5 md:p-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e8f0e5] text-[#527c46]">
              <Heart size={21} />
            </div>
            <div>
              <p className="text-sm font-bold">Pets Are Family</p>
              <p className="text-xs text-gray-500">
                Love in every little detail
              </p>
            </div>
          </div>
        </div>

        <div>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#73945f]">
            OUR STORY
          </span>

          <h2 className="mt-2 text-2xl font-bold leading-snug text-[#30483a] md:text-3xl">
            More than a service, a caring experience.
          </h2>

          <p className="mt-3 text-sm leading-7 text-gray-600 md:text-base">
            From grooming and boarding to at-home assistance, Pawora is
            designed to help pet parents find the care their companions need.
            We put comfort, kindness, and your pet's wellbeing first.
          </p>

          <p className="mt-3 text-sm leading-7 text-gray-600 md:text-base">
            Our vision is a happier, healthier life for every pet and greater
            peace of mind for every pet parent.
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {highlights.map((item) => (
              <div key={item} className="flex items-start gap-2">
                <CheckCircle2
                  size={18}
                  className="mt-0.5 shrink-0 text-[#73945f]"
                />
                <span className="text-sm text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR PURPOSE */}
      <section className="px-5 py-8 md:px-10 md:py-10">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2">
          <div className="rounded-3xl bg-[#e9f0e4] p-6 md:p-8">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#527c46]">
              <Target size={23} />
            </div>

            <h2 className="mt-4 text-xl font-bold md:text-2xl">
              Our Mission
            </h2>

            <p className="mt-3 text-sm leading-7 text-gray-600 md:text-base">
              To make pet care easier to explore and access by bringing
              helpful services, everyday essentials, and a caring experience
              together for pet parents.
            </p>
          </div>

          <div className="rounded-3xl bg-[#f5eadb] p-6 md:p-8">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#8b7049]">
              <Eye size={23} />
            </div>

            <h2 className="mt-4 text-xl font-bold md:text-2xl">
              Our Vision
            </h2>

            <p className="mt-3 text-sm leading-7 text-gray-600 md:text-base">
              To create a world where every pet receives love, attention,
              and thoughtful care, while every pet parent feels confident
              in their everyday care decisions.
            </p>
          </div>
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="px-5 py-8 md:px-10 md:py-10">
        <div className="mx-auto max-w-6xl">
          <SectionTitle
            eyebrow="WHAT MATTERS TO US"
            title="The Values Behind Pawora"
            description="The principles that shape the experience we want every pet and pet parent to have."
            centered
          />

          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="rounded-2xl border border-[#e7e9df] bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#e9f0e4] text-[#527c46]">
                    <Icon size={24} />
                  </div>

                  <h3 className="mt-4 text-lg font-bold">
                    {value.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="bg-[#30483a] px-5 py-9 text-white md:px-10 md:py-12">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#c4d9b5]">
              THE PAWORA APPROACH
            </span>

            <h2 className="mt-3 text-2xl font-bold md:text-3xl">
              Thoughtful Care, One Step at a Time
            </h2>

            <p className="mt-3 text-sm leading-7 text-white/75 md:text-base">
              We want every interaction to make pet care feel simpler,
              more welcoming, and more convenient.
            </p>
          </div>

          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-white/15 bg-white/[0.06] p-5"
              >
                <span className="text-3xl font-extrabold text-[#c4d9b5]">
                  {step.number}
                </span>

                <h3 className="mt-3 text-lg font-bold">
                  {step.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/75">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR PROMISE */}
      <section className="px-5 py-9 md:px-10 md:py-12">
        <div className="mx-auto flex max-w-5xl flex-col items-center rounded-3xl border border-[#e4e9dd] bg-white px-5 py-8 text-center md:px-10 md:py-10">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#e9f0e4] text-[#527c46]">
            <PawPrint size={28} />
          </div>

          <h2 className="mt-4 text-2xl font-bold md:text-3xl">
            A Little More Love in Every Paw
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-600 md:text-base">
            We believe the little things matter: a gentle approach, a
            comfortable experience, and care that respects every pet's
            individual needs.
          </p>

          <div className="mt-5 flex flex-wrap justify-center gap-3 text-sm font-medium text-[#527c46]">
            <span className="rounded-full bg-[#edf3e8] px-4 py-2">
              Kindness
            </span>
            <span className="rounded-full bg-[#edf3e8] px-4 py-2">
              Comfort
            </span>
            <span className="rounded-full bg-[#edf3e8] px-4 py-2">
              Wellbeing
            </span>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="px-5 pb-8 pt-2 md:px-10 md:pb-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-5 rounded-3xl bg-[#e9f0e4] p-6 md:flex-row md:p-8">
          <div>
            <h2 className="text-2xl font-bold">
              Ready to Explore Pawora?
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              Discover pet-care services designed with love and comfort in mind.
            </p>
          </div>

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

        </div>
      </section>

    </main>
  );
}

export default About;