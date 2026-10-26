
import { useState } from "react";
import SectionTitle from "../components/SectionTitle";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting Pawora! We will get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <main className="min-h-screen bg-[#faf9f6] px-5 py-16 md:px-10">
      <SectionTitle
        eyebrow="GET IN TOUCH"
        title="We would love to hear from you."
        description="Have a question about your pet's care? Send us a message."
        centered
      />

      <div className="mx-auto mt-12 grid max-w-6xl gap-10 md:grid-cols-2">
        <div className="rounded-3xl bg-[#e9eee7] p-8 md:p-10">
          <h2 className="text-2xl font-semibold text-[#30483a]">
            Let's talk about your pet
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            Whether you need grooming, boarding, veterinary care, or
            at-home assistance, we're here to help you find the right care.
          </p>

          <div className="mt-8 space-y-5 text-gray-700">
            <p>
              <strong className="block text-[#30483a]">Email</strong>
              hello@pawora.com
            </p>
            <p>
              <strong className="block text-[#30483a]">Phone</strong>
              +91 98765 43210
            </p>
            <p>
              <strong className="block text-[#30483a]">Working Hours</strong>
              Monday – Saturday, 9 AM – 6 PM
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5 rounded-3xl border border-gray-200 bg-white p-8 md:p-10"
        >
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Your Name
            </label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
              className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[#758b70]"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
              className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[#758b70]"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="Enter your phone number"
              className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[#758b70]"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Your Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              placeholder="How can we help you and your pet?"
              className="w-full resize-y rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[#758b70]"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-[#30483a] px-6 py-3.5 font-medium text-white transition hover:bg-[#24372c]"
          >
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}

export default Contact;
