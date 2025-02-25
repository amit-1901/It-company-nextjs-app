'use client';
import { useState } from 'react';
import Testimonials from '../components/Testimonials';

const ContactCard = ({ title, info, link }) => (
  <a href={link} className="block p-4 shadow-lg rounded-lg bg-[#27699D] text-opacity-70 hover:bg-black transition-colors hover:scale-105">
    <h3 className="text-xl text-white font-bold mt-4">{title}</h3>
    <p className="text-white mt-2">{info}</p>
  </a>
);

const InputField = ({ label, id, type, value, onChange, error }) => (
  <div className="w-full">
    <label htmlFor={id} className="block text-gray-700 font-bold">{label}</label>
    <input
      type={type}
      id={id}
      value={value}
      onChange={onChange}
      className={`w-full mt-2 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 transition ${
        error ? 'border-red-500 focus:ring-red-500' : 'focus:ring-black'
      }`}
    />
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

const TextAreaField = ({ label, id, value, onChange, error }) => (
  <div className="w-full">
    <label htmlFor={id} className="block text-gray-700 font-bold">{label}</label>
    <textarea
      id={id}
      rows="5"
      value={value}
      onChange={onChange}
      className={`w-full mt-2 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 transition ${
        error ? 'border-red-500 focus:ring-red-500' : 'focus:ring-black'
      }`}
    ></textarea>
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    setErrors({ ...errors, [e.target.id]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    const nameRegex = /^[a-zA-Z][a-zA-Z\s'-]{2,49}$/;
    if (!nameRegex.test(formData.name.trim())) {
      newErrors.name = "Please enter a valid name (3-50 characters, only letters, spaces, hyphens, or apostrophes).";
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    alert(`Message Sent!\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
    setFormData({ name: '', email: '', message: '' });
    setErrors({ name: '', email: '', message: '' });
  };

  return (
    <div className="bg-white">
      <header className="text-black text-center mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <hr className="border-gray-700 w-full mx-auto my-6" />
      </header>

      <section className="text-center py-4 px-4">
        <h2 className="text-2xl font-bold">Get In Touch</h2>
        <p className="mt-4 text-gray-700 max-w-2xl mx-auto mb-8">
          We are here to help you. Reach out to us via any of the following methods.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-10">
          <ContactCard title="Whatsapp or Call Us" info="📞 +91-9956322210" link="tel:+919956322210" />
          <ContactCard title="Email Us" info="📧 info@frontech.in" link="mailto:info@frontech.in" />
          <ContactCard title="Visit Us" info="📍 1st Floor, Mukut City Center, CP-13, 1/A, Munshi Pulia Indira Nagar, Lucknow, Uttar Pradesh- 226016" link="https://www.google.com/maps/search/?api=1&query=1st+Floor,+Mukut+City+Center,+CP-13,+1/A,+Munshi+Pulia+Indira+Nagar,+Lucknow,+Uttar+Pradesh-226016" />
        </div>
      </section>

      <section className="bg-gray-100 py-12 px-4">
        <h2 className="text-2xl font-bold text-center">Enquiry Form</h2>
        <form className="max-w-2xl mx-auto mt-8 space-y-6" onSubmit={handleSubmit}>
          <InputField label="Name" id="name" type="text" value={formData.name} onChange={handleChange} error={errors.name} />
          <InputField label="Email" id="email" type="email" value={formData.email} onChange={handleChange} error={errors.email} />
          <TextAreaField label="Message" id="message" value={formData.message} onChange={handleChange} error={errors.message} />
          <button type="submit" className="w-full bg-[#27699D] text-white py-3 rounded-lg shadow-lg hover:bg-black transition-colors">
            Send Your Message
          </button>
        </form>
      </section>

      <Testimonials />
    </div>
  );
}
