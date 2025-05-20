import React from "react";
import ServiceCards from "../components/ServiceCards";

const serviceslist = [
  {
    title: "Information Technology Services",
    description: [
      "We are pioneers in building and designing innovative solutions to tackle digital transformation needs.",
      "Our portfolio includes consulting, design, engineering, operations, and emerging technologies.",
      "We specialize in electronics system design and manufacturing (ESDM) services."
    ]
  },
  {
    title: "Manpower Services",
    description: [
      "Helping organizations increase productivity through effective human resource services.",
      "Providing HR services across various industries in India.",
      "Services include staffing, recruitment, labor law compliance, learning, and training solutions."
    ]
  },
  {
    title: "Data Management Services",
    description: [
      "Handling and managing document scanning projects with speed, reliability, and accuracy.",
      "Utilizing the latest technology to enhance data retrieval and reduce human error.",
      "Ensuring fast and budget-friendly services for businesses."
    ]
  },  
  {
    title: "Banking & Financial Services",
    description: [
      "Leveraging technology to provide secure financial services.",
      "Offering Kiosk Banking, Aadhaar-linked services, and financial products for underserved populations.",
      "Bridging the gap between technology and financial accessibility."
    ]
  },
  {
    title: "e-Governance Services",
    description: [
      "Creating access points for essential public e-Governance services.",
      "Partnering with banks and governments to streamline digital solutions.",
      "Ensuring seamless identity management and financial inclusion."
    ],
    subservices: [
      {
        title: "Aadhaar Services",
        description: [
          "Expanding Aadhaar Enrollment Centers in rural and urban areas.",
          "Collaborating with banks and governments for Aadhaar services.",
          "Providing fresh enrollment, updates, and corrections."
        ]
      },
      {
        title: "PAN Card Services",
        description: [
          "Providing a unified platform for PAN card services.",
          "Services include fresh PAN applications, updates, and instant PAN services.",
          "Ensuring efficiency and convenience nationwide."
        ]
      },
      {
        title: "Ayushman Bharat Services",
        description: [
          "Offering secure and cost-effective e-card printing solutions under PMJAY.",
          "Facilitating online registration, validation, and beneficiary identification.",
          "Ensuring financial inclusion for underprivileged communities."
        ]
      }
    ]
  }
];

export default function Services() {
  return (
    <>
      <div className="bg-white max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-4xl text-black font-bold text-center mb-2">Explore Our Wide Range of Services</h2>
        <p className="text-lg text-center text-gray-600 mb-8">Through technology, we drive business transformation.</p>
        <hr className="border-gray-700 w-full mx-auto my-4"/>
        <div className="space-y-8">
          {serviceslist.map((service, index) => (
            <div key={index} className="w-full bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h2 className="text-2xl font-semibold text-[#27699D] mb-4">{service.title}</h2>
              <ul className="list-disc pl-6 text-gray-600">
                {service.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              {service.subservices && (
                <div className="mt-4">
                  {service.subservices.map((sub, subIndex) => (
                    <div key={subIndex} className="mt-4 border-t pt-4">
                      <h3 className="text-xl font-semibold text-gray-700">{sub.title}</h3>
                      <ul className="list-disc pl-6 text-gray-600">
                        {sub.description.map((point, j) => (
                          <li key={j}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <ServiceCards/>
    </>
  );
}
