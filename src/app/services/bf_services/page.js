import ServiceCardList from "@/app/components/ServiceCardList";

export default function BFServices() {
  return (
    <>
      {/* Top Section - Title & Intro */}
      <div className="bg-white text-center lg:text-left px-6 lg:px-16 pt-12">
        <h1 className="text-4xl font-bold text-[#27699D]">
          Banking & Financial Services
        </h1>
        <div className="w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 mt-4"></div>
        <ul className="list-disc pl-6 mt-4 text-gray-700">
          <li>
            Emerging as a new paradigm for economic growth, Financial Inclusion has a clear impact on societal advancement and economic development.
          </li>
          <li>
            The integration of innovation and technology in the financial sector, combined with a commitment to Financial Inclusion, presents a unique opportunity to reach last-mile consumers with high-quality financial products and services.
          </li>
          <li>
            The scope of Financial Inclusion is to achieve inclusive growth by extending financial services to a previously unserved population.
          </li>
          <li>
            To unlock the nation's growth potential, Financial Inclusion, combined with digitization, helps meet the unmet financial needs of underserved sections of society.
          </li>
          <li>
            In order to drive Financial Inclusion efforts, “Frontech” is dedicated to harnessing the power of digitization by providing a unified platform for swift and secure financial services, ranging from Kiosk Banking to Aadhaar services.
          </li>
          <li>
            The integration of banking and financial services into the “Frontech” portfolio represents a promising step in improving access to a comprehensive suite of financial solutions for the unbanked and underserved population.
          </li>
        </ul>
      </div>

      {/* Centered ServiceCardList */}
      <div className="bg-white flex justify-center items-center my-12">
        <ServiceCardList />
      </div>
    </>
  );
}
