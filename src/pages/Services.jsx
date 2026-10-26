
import SectionTitle from "../components/SectionTitle";
import ServiceCard from "../components/ServiceCard";

function Services() {
  const services = [
    {
      title: "Pet Grooming",
      description:
        "Keep your pet clean, comfortable, and looking their best with gentle grooming care.",
      image:
        "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Veterinary Care",
      description:
        "Support your pet's health with attentive care and help from veterinary professionals.",
      image:
        "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Pet Boarding",
      description:
        "Give your furry friend a comfortable place to stay while you are away.",
      image:
        "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "At-Home Care",
      description:
        "Enjoy convenient pet care in the comfort and familiarity of your home.",
      image:
        "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <main className="bg-[#faf9f6] min-h-screen px-5 py-16 md:px-10">
      <SectionTitle
        eyebrow="OUR SERVICES"
        title="Care for every kind of paw"
        description="Thoughtful pet care services designed to keep your companions happy, healthy, and loved."
        centered
      />

      <div className="mx-auto mt-12 grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            title={service.title}
            description={service.description}
            image={service.image}
            href="/book-appointment"
          />
        ))}
      </div>
    </main>
  );
}

export default Services;
