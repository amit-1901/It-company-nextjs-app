import Image from "next/image";
import Link from "next/link";

const services = [
  {
    href: "/services/it_services",
    src: "/images/it_service.png",
    alt: "Information Technology Services",
    text: "Information Technology Services",
  },
  {
    href: "/services/mp_services",
    src: "/images/mp_service.png",
    alt: "Manpower Services",
    text: "Manpower Services",
  },
  {
    href: "/services/dm_services",
    src: "/images/dm_service.jpg",
    alt: "Data Management Services",
    text: "Data Management Services",
  },
  {
    href: "/services/eg_services",
    src: "/images/eg_service.jpg",
    alt: "e-Governance Services ",
    text: "e-Governance Services ",
  },
  {
    href: "/services/bf_services",
    src: "/images/bf_service.png",
    alt: "Banking & Financial Services",
    text: "Banking & Financial Services",
  },
];

export default function ServiceCardList() {
  return (
    <div className="w-full max-w-2xl flex justify-center mt-8 lg:mt-0">
      <div className="bg-white shadow-lg rounded-lg p-8 border w-full  min-h-[60vh] ">
        <h2 className="text-2xl text-black font-bold text-center my-2 whitespace-nowrap overflow-hidden text-ellipsis">
          Our Other Services
        </h2>
        <hr className="border-gray-700 w-full mx-auto my-6" />
        <ul className="space-y-4">
          {services.map((service, index) => (
            <li key={index} className="flex items-center space-x-4">
              <Image
                src={service.src}
                alt={service.alt}
                width={32}
                height={32}
                className="w-10 h-10"
              />
              {/* Wrapped text inside Link to make it clickable */}
              <Link
                href={service.href}
                className="whitespace-nowrap overflow-hidden text-ellipsis text-lg font-medium text-[#27699D] hover:underline"
              >
                {service.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
