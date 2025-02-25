"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const services = [
  { title: "Information Technology Services", link: "/services/it_services" },
  { title: "Manpower Services", link: "/services/mp_services" },
  { title: "Data Management Services", link: "/services/dm_services" },
  { title: "e-Governance Services", link: "/services/eg_services" },
  { title: "Banking & Financial Services", link: "/services/bf_services" },
];

export default function ServiceSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const visibleItems = 3;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + services.length) % services.length
    );
  };

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(nextSlide, 2500); // Adjusted speed for better readability
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  return (
    <div className="relative w-full flex items-center justify-center py-4 bg-gray-100">
      {/* Left Arrow */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#27699D] hover:text-black hidden sm:block"
        onClick={prevSlide}
      >
        <FaChevronLeft size={24} />
      </button>

      {/* Sliding Text */}
      <div className="flex justify-center items-center space-x-6 sm:space-x-10 overflow-hidden w-full max-w-screen-lg">
        {services
          .slice(currentIndex, currentIndex + visibleItems)
          .concat(
            services.slice(0, Math.max(0, currentIndex + visibleItems - services.length))
          )
          .map((service, index) => (
            <Link
              key={index}
              href={service.link}
              className="text-[#27699D] hover:underline cursor-pointer text-sm sm:text-lg transition"
              onMouseEnter={() => setIsPaused(true)} // Stop auto-slide on hover
              onMouseLeave={() => setIsPaused(false)} // Resume auto-slide on mouse leave
            >
              {service.title}
            </Link>
          ))}
      </div>

      {/* Right Arrow */}
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#27699D] hover:text-black hidden sm:block"
        onClick={nextSlide}
      >
        <FaChevronRight size={24} />
      </button>
    </div>
  );
}
