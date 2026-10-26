
import { useState } from "react";
import SectionTitle from "../components/SectionTitle";

function BookAppointment() {
  const [formData, setFormData] = useState({
    ownerName: "",
    petName: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    notes: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      "Thank you! Your appointment request has been submitted successfully."
    );

    setFormData({
      ownerName: "",
      petName: "",
      phone: "",
      service: "",
      date: "",
      time: "",
      notes: "",
    });
  };

  const today = new Date().toLocaleDateString("en-CA");

  return (
    <main className="min-h-screen bg-[#faf9f6] px-5 py-16 md:px-10">
      <SectionTitle
        eyebrow="BOOK AN APPOINTMENT"
        title="Your pet's care starts here."
        description="Tell us a little about your pet and choose the service you need."
        centered
      />

      <form
        onSubmit={handleSubmit}
        className="mx-auto mt-12 max-w-3xl space-y-6 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-10"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Pet Parent Name *
            </label>
            <input
              name="ownerName"
              value={formData.ownerName}
              onChange={handleChange}
              required
              placeholder="Enter your name"
              className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[#758b70]"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Pet Name *
            </label>
            <input
              name="petName"
              value={formData.petName}
              onChange={handleChange}
              required
              placeholder="Enter your pet's name"
              className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[#758b70]"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              pattern="[0-9+\-\s()]{10,20}"
              placeholder="+91 98765 43210"
              className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[#758b70]"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Select Service *
            </label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none focus:border-[#758b70]"
            >
              <option value="">Choose a service</option>
              <option value="Pet Grooming">Pet Grooming</option>
              <option value="Veterinary Care">Veterinary Care</option>
              <option value="Pet Boarding">Pet Boarding</option>
              <option value="At-Home Care">At-Home Care</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Preferred Date *
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              min={today}
              required
              className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[#758b70]"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Preferred Time *
            </label>
            <select
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none focus:border-[#758b70]"
            >
              <option value="">Choose a time</option>
              <option value="09:00 AM">09:00 AM</option>
              <option value="11:00 AM">11:00 AM</option>
              <option value="01:00 PM">01:00 PM</option>
              <option value="03:00 PM">03:00 PM</option>
              <option value="05:00 PM">05:00 PM</option>
            </select>
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Additional Details
          </label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            rows="4"
            placeholder="Pet breed, age, or any special requirements..."
            className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[#758b70]"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-xl bg-[#30483a] px-6 py-4 font-semibold text-white transition hover:bg-[#24372c]"
        >
          Request Appointment
        </button>

        <p className="text-center text-xs text-gray-500">
          Your selected date and time are preferences, not a confirmed booking.
        </p>
      </form>
    </main>
  );
}

export default BookAppointment;

