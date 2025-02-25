import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function EgServiceCards() {
  const services = [
    {
      title: "Aadhar Services",
      description:
        "We provide seamless Aadhaar services, including fresh enrolments, updates, and corrections, ensuring efficiency and transparency across urban and rural centers.",
      image: "/images/as.png",
      link: "/services/eg_services/adhar_services",
    },
    {
      title: "PAN Card Services",
      description:
        "Our PAN card services simplify applications, updates, and instant PAN issuance, making the process hassle-free, efficient, and accessible nationwide.",
      image: "/images/ps.jpg",
      link: "/services/eg_services/pancard_services",
    },
    {
      title: "Ayushman Bharat Services",
      description:
        "We offer secure and cost-effective e-card printing under the PMJAY scheme, along with seamless online registration and validation for eligible beneficiaries.",
      image: "/images/ays.jpg",
      link: "/services/eg_services/ayushman_bharat_services",
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
      <h6 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Our e-Governance Services
      </h6>
      <hr className="border-gray-700 w-full mx-auto my-4" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="border border-gray-400 bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h2 className="text-gray-900 font-bold text-xl mb-2 hover:text-indigo-600 cursor-pointer">
                {service.title}
              </h2>
              <p className="text-gray-700 text-sm">{service.description}</p>
              {/* Individual Learn More Button */}
              <Link href={service.link}>
                <span className="inline-flex items-center bg-[#27699D] text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-black transition mt-4">
                  LEARN MORE
                  <FaArrowRight className="w-4 h-4 ml-2" />
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
