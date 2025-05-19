import Image from "next/image";
import React from "react";
import Testimonials from "../components/Testimonials";

const MissionVision = () => {
  return (
    <section className="relative bg-white w-full overflow-hidden flex justify-center items-center text-center">
      <div className="container mx-auto px-4 ">
        <div className="flex flex-wrap items-center justify-center text-center">
          {/* Vision Section */}
          <div className="w-full md:w-[30%] flex flex-col items-center text-center">            
            <h2 className="text-2xl font-bold text-[#27699D] mb-2">
              Our VisioN
            </h2>
            <p className="text-gray-600">
              To be a unique and quality service provider in the sectors we
              serve, with focused, cost-effective, and business-driven processes
              that provide long-term value to our customers.
            </p>
          </div>

          {/* Icon Section */}
          <div className="w-full md:w-[36%] px-4 flex justify-center items-center">            
            <img
              src="./images/vm.png"
              className="w-46 h-46 rounded-full object-cover"
              alt="Mission and Vision"
            />
          </div>

          {/* Mission Section */}
          <div className="w-full md:w-[30%] flex flex-col items-center text-center">            
            <h2 className="text-2xl font-bold mb-2 text-[#27699D]">
              Our Mission
            </h2>
            <p className="text-gray-600">
            <span className="font-bold italic text-[#27699D]"> “Frontech” </span> seeks to provide solutions & services to become a
              customer-centric organization with a focus on building trust
              through our unmatched standards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutUs = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16 py-4 bg-white min-h-[80vh]">
      {/* Left Side - Text Content */}
      <div className="lg:w-1/2 w-full text-center lg:text-left">
        <hr className="border-gray-700 w-full mx-auto my-4" />
        <h2 className="text-3xl font-bold text-[#27699D] mb-2">About Us</h2>
        <hr className="border-gray-700 w-full mx-auto my-4" />
        <p className="text-gray-700 mt-4">
          M/s {" "}
          <span className="font-bold italic text-[#27699D]">
          Frontech Services Private Limited is a Startup Company (“Frontech”) 
          </span>{" "} is a private-owned company incorporated under the
          Companies Act, 2013 on 20 December 2022 vide CIN-U72900UP2022PTC175353
          “Frontechs” headquarter at {" "} <span className="font-bold text-black" >Lucknow, Uttar
          Pradesh, India. </span>{" "}
        </p>
        <p className="text-gray-700 mt-3">
          “Frontech” engaged individually and jointly in the entire business and
          strongly positioned in the various fields of <span className="font-bold"> Information Technology,
          Manpower Services, e-Governance Services, Financial Services, Data
          Management Services (DMS) Including IT Infrastructure, Networking &
          Communications, Building Management System,</span> and Consulting both the
          inbound and outbound projects are handled and managed with a
          systematic, objective, holistic, and rationalistic approach. 
        </p>
        <p className="text-gray-700 mt-3">
          The Company drives digital transformation by capitalizing on modern
          core technology, harnessing  <span className="font-bold italic"> artificial intelligence, and automating
          business operations </span> to help clients grow and thrive in the digital
          age. Having created an unrivaled platform by achieving the milestones,
        </p>
        <p className="text-gray-700 mt-3">
          The Directors of the Company have enriched experience of handling and
          successfully implementing the given projects. <span className="font-bold italic text-[#27699D]"> “Frontech” </span> is committed
          to customer satisfaction at its highest level and to the Digital India
          initiative of the government.
        </p>
      </div>

      {/* Right Side - Image */}
      <div className="lg:w-1/2 w-full flex flex-col items-center justify-center mt-8 lg:mt-0">
        <Image
          alt="Frontech Logo"
          loading="lazy"
          width={300} // Increased width for better clarity
          height={300} // Increased height for better clarity
          className="h-[300px] w-[300px] rounded-lg" // Changed size & shape to a square
          src="/images/about.jpg"
        />
        <h3 className="pt-4 pb-2 text-2xl leading-8 font-bold tracking-tight text-gray-900">
          Frontech Services Pvt. Ltd.
        </h3>
        <div className="text-gray-500 dark:text-gray-400">
          IT Services & Solutions
        </div>
        <div className="text-gray-500 dark:text-gray-400">Lucknow, India</div>
      </div>
    </section>
  );
};

export default function About() {
  return (
    <div>
      <AboutUs />
      <MissionVision />
      <Testimonials />
      <div className="h-12"></div>
    </div>
  );
}
