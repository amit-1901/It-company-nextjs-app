import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function ServiceCards() {
  const blogs = [
    {
      title: "Information Technology Services",
      description:
        "We specialize in innovative solutions for digital transformation, offering consulting, design, engineering, operations, and emerging technologies. Our expertise spans electronics system design and manufacturing (ESDM), ensuring cutting-edge technology services.",
      image: "/images/it_service.png",
      link: "/services/it_services",
    },
    {
      title: "Manpower Services",
      description:
        "“Frontech” enhances workforce productivity with tailored human resource services, including staffing solutions, recruitment, labor law compliance, and skill training. We serve businesses across industries, ensuring a skilled and efficient workforce.",
      image: "/images/mp_service.png",
      link: "/services/mp_services",
    },
    {
      title: "Data Management Services",
      description:
        "We provide efficient document scanning, storage, and retrieval solutions, reducing human errors and increasing accuracy. Our services help businesses transition to a paperless office with secure, fast, and cost-effective data management.",
      image: "/images/dm_service.jpg",
      link: "/services/dm_services",
    },
    {
      title: "e-Governance Services",
      description:
        "We facilitate Aadhaar enrollment, PAN card applications, and Ayushman Bharat e-card services. Our goal is to simplify government processes through technology, ensuring accessibility and efficiency for citizens across India.",
      image: "/images/eg_service.jpg",
      link: "/services/eg_services",
    },
    {
      title: "Banking & Financial Services",
      description:
        "We drive financial inclusion with kiosk banking, Aadhaar-based services, and digital financial solutions. Our secure platform empowers underserved communities with access to essential financial products and banking services.",
      image: "/images/bf_service.png",
      link: "/services/bf_services",
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
      <h6 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Our Services
      </h6>
      <hr className="border-gray-700 w-full mx-auto my-4" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="border border-gray-400 bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h2 className="text-gray-900 font-bold text-xl mb-2 hover:text-indigo-600 cursor-pointer">
                {blog.title}
              </h2>
              <p className="text-gray-700 text-sm">{blog.description}</p>
              {/* Individual Learn More Button */}
              <Link href={blog.link}>
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
