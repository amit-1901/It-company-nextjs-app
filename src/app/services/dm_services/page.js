import ServiceCardList from "@/app/components/ServiceCardList";

export default function DMServices() {
  return (
    <>
      {/* Top Section - Title & Intro */}
      <div className="text-center lg:text-left px-6 lg:px-16 pt-12">
        <h1 className="text-4xl font-bold text-[#27699D]">
          Data Management Services
        </h1>
        <div className="w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 mt-4"></div>
        <ul className="list-disc pl-6 mt-4 text-gray-700">
          <li>
            We specialize in handling and managing document scanning projects with speed, reliability, and accuracy.
          </li>
          <li>
            With flexible time routines, optimized staffing levels, and cutting-edge technology, we ensure that the job is done efficiently, quickly, and within budget.
          </li>
          <li>
            We provide a comprehensive range of solutions for scanning all types of documents, including text, transparencies, x-rays, and more.
          </li>
          <li>
            Our experienced staff utilizes state-of-the-art equipment to ensure high-quality document processing.
          </li>
          <li>
            Experience seamless data retrieval with enhanced accuracy and minimal human error.
          </li>
          <li>
            Our services not only improve efficiency but also free up valuable storage space and staff time.
          </li>
          <li>
            Whether you need to process loan applications, financial records, real estate transactions, ISO documentation, legal papers, or correspondence, we provide tailored solutions to help you transition towards a paperless office.
          </li>
          <li>
            In some cases, we even offer overnight delivery for urgent needs.
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
