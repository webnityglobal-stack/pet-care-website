
import SectionTitle from "../components/SectionTitle";

function About() {
  return (
    <main className="min-h-screen bg-[#faf9f6] px-5 py-16 md:px-10">
      <SectionTitle
        eyebrow="ABOUT PAWORA"
        title="Every pet deserves love, care, and comfort."
        description="At Pawora, we believe pets are family. Our goal is to make quality pet care simple, comfortable, and accessible for every pet parent."
        centered
      />

      <section className="mx-auto mt-12 grid max-w-6xl items-center gap-10 md:grid-cols-2">
        <img
          src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&w=1000&q=80"
          alt="A happy dog enjoying time outdoors"
          className="h-[350px] w-full rounded-3xl object-cover"
        />

        <div>
          <h2 className="text-2xl font-semibold text-[#30483a] md:text-3xl">
            More than a service, a caring experience.
          </h2>

          <p className="mt-5 leading-8 text-gray-600">
            From grooming and boarding to at-home assistance, Pawora is
            designed to help pet parents find the care their companions need.
            We put comfort, kindness, and your pet's well-being first.
          </p>

          <p className="mt-4 leading-8 text-gray-600">
            Our vision is a happier, healthier life for every pet and greater
            peace of mind for every pet parent.
          </p>
        </div>
      </section>
    </main>
  );
}

export default About;
