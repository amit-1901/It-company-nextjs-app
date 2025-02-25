"use client";

import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaUserCircle } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Jon Doe",
    role: "DESIGNER",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vehicula sapien eget justo tincidunt, In scelerisque semper elit non pellentesque.",
  },
  {
    id: 2,
    name: "Jane Doe",
    role: "DEVELOPER",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam venenatis erat at erat eleifend, ac auctor orci tincidunt. Pellentesque vehicula sapien eget justo tincidunt, sit amet cursus turpis dapibus.",
  },
  {
    id: 3,
    name: "Mira Doe",
    role: "DEVELOPER",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula, neque sit amet gravida congue, enim justo dapibus orci, ac tincidunt felis felis nec libero.",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="w-full flex flex-col items-center justify-center p-6 mt-12 mb-12">
      <h6 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Customers Testimonials
      </h6>
      <hr className="relative border-gray-700 w-full mx-auto my-4" />

      <div className="relative w-full max-w-3xl mx-auto text-center p-6 bg-white rounded-lg shadow-lg flex flex-col items-center md:px-10">
        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#27699D] hover:text-black transition-all"
          onClick={prevTestimonial}
        >
          <FaChevronLeft size={24} />
        </button>

        <p className="w-[90%] text-lg md:text-xl text-gray-800 font-medium text-center">
          "{testimonials[currentIndex].review}"
        </p>

        <div className="mt-6 flex flex-col items-center sm:flex-row sm:items-center">
          <FaUserCircle size={48} className="text-gray-500" />
          <div className="sm:ml-4 text-center sm:text-left">
            <span className="block font-medium text-[#27699D] text-base">
              {testimonials[currentIndex].name}
            </span>
            <span className="block text-gray-500 text-sm">
              {testimonials[currentIndex].role}
            </span>
          </div>
        </div>

        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#27699D] hover:text-black transition-all"
          onClick={nextTestimonial}
        >
          <FaChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}
