import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-light flex flex-col items-center justify-center min-h-[50vh] text-center px-6 py-4 pt-2 md:pt-4 lg:pt-6">
      <div className="max-w-5xl w-full px-4 md:px-6 lg:px-8">
        <div className="py-1">

          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight mb-6">
            Welcome to{" "}
            <span className="text-[#27699D]">
              Frontech Services Private Limited
            </span>
          </h1>
          <span className="text-base sm:text-lg md:text-xl font-medium leading-tight max-w-[70%] mx-auto mb-2">
            Driving Digital Transformation with Innovative IT and e-Governance
            Solutions
          </span>

          <hr className="border-gray-700 w-full mx-auto my-4" />

          <p className="text-sm sm:text-base text-gray-700 mb-8">
            We provide IT services, Manpower solutions, Data Managment services, Banking & Financial Services and e-Governance
            services for private and government sectors.
          </p>
          <Link
            href="/services"
            className="bg-[#27699D] text-white hover:bg-black py-2 px-5 mt-4 rounded-full text-sm sm:text-base font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          >
            Explore Our Services
          </Link>
        </div>
      </div>
    </section>
  );
}
