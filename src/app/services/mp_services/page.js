import ServiceCardList from "@/app/components/ServiceCardList";

export default function MPServices() {
  return (
    <>
      {/* Top Section - Title & Intro */}
      <div className="text-center lg:text-left px-6 lg:px-16 pt-12">
        <h1 className="text-4xl font-bold text-[#27699D]">Manpower Services</h1>
        <div className="w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 mt-4"></div>
        <ul className="list-disc pl-6 mt-4 text-gray-700">
          <li>
            "Frontech" is committed to helping organizations increase their productivity through effective human resource services.
          </li>
          <li>
            We cater to a broad range of industries, offering workforce solutions designed to enhance efficiency and performance.
          </li>
          <li>
            Our vision is to contribute to India's workforce by bridging the gap between businesses and skilled professionals.
          </li>
          <li>
            We provide end-to-end human resource solutions to meet the needs of businesses across industries.
          </li>
          <li>
            Our services cover employment, employability, and education, ensuring companies get the right talent while job seekers find opportunities that match their skills.
          </li>
          <li>
            Our employment services include temporary staffing solutions, permanent recruitment, and regulatory consultancy for labor law compliance.
          </li>
          <li>
            We also offer employability solutions such as retail learning, institutional training, and enterprise learning programs.
          </li>
          <li>
            Our process starts with understanding client needs, defining job profiles, and sourcing the right talent within a structured timeline and cost-effective framework.
          </li>
          <li>
            We focus on delivering high-quality workforce solutions tailored to business objectives.
          </li>
        </ul>
      </div>

      {/* Centered ServiceCardList */}
      <div className="flex justify-center items-center my-12">
        <ServiceCardList />
      </div>
    </>
  );
}
