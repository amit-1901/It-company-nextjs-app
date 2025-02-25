'use client';
import React, { useState } from "react";

export default function Career() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    caddress: "",
    profile: "",
    resume: "",
    quali: "",
    year_of_comp: "",
    clg: "",
    city: ""
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};

    // Name Validation
    const nameRegex = /^[a-zA-Z][a-zA-Z\s'-]{2,49}$/;
    if (!nameRegex.test(formData.name.trim())) {
      newErrors.name = "Enter a valid name (3-50 characters, only letters, spaces, hyphens, or apostrophes).";
    }

    // Email Validation
    const emailRegex = /^[a-zA-Z0-9._%+-]{1,64}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Enter a valid email address.";
    }

    // Contact Number Validation (10-digit numeric)
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(formData.contact.trim())) {
      newErrors.contact = "Enter a valid 10-digit phone number.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear error message when user starts typing again
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        contact: "",
        caddress: "",
        profile: "",
        resume: "",
        quali: "",
        year_of_comp: "",
        clg: "",
        city: ""
      });
    }, 3000);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 py-12">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-3xl w-full">
        <h4 className="text-3xl font-bold text-center mb-6 text-[#27699D]">Work With Us</h4>
        <p className="text-gray-600 text-center mb-6">
          “At <span className="font-bold italic text-[#27699D]"> “Frontech”  </span>  we are creative and innovative people, our philosophy is not to follow the pack but to stand out from the rest.”
        </p>
        <p className="text-gray-600 mb-4">
          We believe in talent, working to establish and build a wide variety of ventures. To enable these products to happen, we need to contain costs in the startup phases. We reward those who drive profitable productivity with profit share, and potentially opportunities for company equity.
        </p>
        <p className="text-gray-600 mb-4">
          We are always looking for talented people who want to apply knowledge or exciting experience in the mobile Messaging market.
        </p>

        <h5 className="text-xl font-semibold mb-4">Fill in information to apply</h5>
        {submitted && (
          <div className="bg-[#27699D] text-white text-center p-3 mb-4 rounded">
            Your Application has been sent successfully!
          </div>
        )}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="First Name *" className="border p-2 rounded w-full" required />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>
            <div>
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="E-mail Id *" className="border p-2 rounded w-full" required />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
            <div>
              <input type="text" name="contact" value={formData.contact} onChange={handleChange} placeholder="Contact Number *" className="border p-2 rounded w-full" required />
              {errors.contact && <p className="text-red-500 text-sm">{errors.contact}</p>}
            </div>
            <input type="text" name="caddress" value={formData.caddress} onChange={handleChange} placeholder="Current City, Address *" className="border p-2 rounded w-full" required />
          </div>
          <h5 className="text-lg font-semibold mt-4">Profile</h5>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <select name="profile" value={formData.profile} onChange={handleChange} className="border p-2 rounded w-full" required>
              <option value="">Select Profile</option>
              <option value="sales_consultant">Sales Consultant</option>
              <option value="bd_int">Business Development Executive (Intern)</option>
              <option value="sales_exe">Sales Executive</option>
              <option value="dev">Software Developer (Experienced)</option>
              <option value="dev_int">Software Developer (Intern)</option>
            </select>
            <input type="file" name="resume" onChange={handleChange} placeholder="Resume" className="border p-2 rounded w-full" required />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" name="quali" value={formData.quali} onChange={handleChange} placeholder="Highest Qualification" className="border p-2 rounded w-full" required />
            <input type="text" name="year_of_comp" value={formData.year_of_comp} onChange={handleChange} placeholder="Year of Completion (MM-YYYY)" className="border p-2 rounded w-full" required />
            <input type="text" name="clg" value={formData.clg} onChange={handleChange} placeholder="College" className="border p-2 rounded w-full" required />
            <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="City" className="border p-2 rounded w-full" required />
          </div>
          <button type="submit" className="bg-[#27699D] text-white py-2 px-4 rounded w-full hover:bg-black transition">Submit</button>
        </form>
      </div>
    </div>
  );
};
