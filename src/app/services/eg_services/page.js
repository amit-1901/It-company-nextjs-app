
import ServiceCardList from "@/app/components/ServiceCardList";

function AdharServices() {
  return (
    <>
      {/* Top Section - Title & Intro */}
      <div className="text-center lg:text-left px-6 lg:px-16 pt-12">
        <h1 className="text-4xl font-bold text-[#27699D]">Aadhaar Services</h1>
        <div className="w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 mt-4"></div>
        <ul className="list-disc pl-6 mt-4 text-gray-700">
          <li>
            “Frontech” with extensive industry experience and substantial market standing in the
            e-Governance sector excels at providing Aadhaar services with transparency and proficiency.
          </li>
          <li>
            The Company is expanding by setting up Aadhaar Enrolment Centers in both rural and urban areas.
            “Frontech” has played a pivotal role in establishing Aadhaar Enrolment Centers across Pan India.
          </li>
          <li>
            “Frontech” is now associated with leading banks and state governments to deliver Aadhaar services efficiently
            through online systems rather than traditional bureaucratic processes.
          </li>
          <li>
            With extensive expertise, “Frontech” offers Aadhaar services that uphold high usability standards,
            including fresh enrolment, detail uploads, corrections, and updates in Aadhaar.
          </li>
        </ul>
      </div>
    </>
  );
}

function PanCardServices() {
  return (
    <>
      {/* Top Section - Title & Intro */}
      <div className="text-center lg:text-left px-6 lg:px-16 pt-12">
        <h1 className="text-4xl font-bold text-[#27699D]">PAN Card Services</h1>
        <div className="w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 mt-4"></div>
        <ul className="list-disc pl-6 mt-4 text-gray-700">
          <li>
            “Frontech” as the unified platform for delivering PAN Card services through digital channels.
          </li>
          <li>
            The Permanent Account Number (PAN) is a unique identification number allotted to each taxpayer in India.
          </li>
          <li>
            The Company simplifies Government operations by offering services such as fresh PAN applications,
            corrections, and instant PAN issuance at an affordable cost.
          </li>
        </ul>
      </div>
    </>
  );
}

function AyushmanBharatServices() {
  return (
    <>
      {/* Top Section - Title & Intro */}
      <div className="text-center lg:text-left px-6 lg:px-16 pt-12">
        <h1 className="text-4xl font-bold text-[#27699D]">Ayushman Bharat Services</h1>
        <div className="w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 mt-4"></div>
        <ul className="list-disc pl-6 mt-4 text-gray-700">
          <li>
            “Frontech” provides cost-effective and secure e-card printing solutions for the e-Ayushman Bharat Card under the PMJAY scheme.
          </li>
          <li>
            As a PMJAY Service Agent (PSA), we help cater to the financial needs of underprivileged sections of society.
          </li>
          <li>
            We facilitate online registration, validation, and quality control processes for the Beneficiary Identification System of PMJAY.
          </li>
        </ul>
      </div>
    </>
  );
}

export default function EGServices() {
  return (
    <div className="px-6 lg:px-16 pt-12">
      {/* Top Section - Title & Intro */}
      <div className="text-center lg:text-left">
        <h1 className="text-4xl font-bold text-[#27699D]">
          e-Governance Services
        </h1>
        <ul className="list-disc pl-6 mt-4 text-gray-700">
          <li>
            “Frontech” creates access points for delivering essential public e-Governance services with transparency and efficiency.
          </li>
          <li>
            Our extensive industry experience enables us to provide Aadhaar, PAN Card, and Ayushman Bharat services nationwide.
          </li>
        </ul>
      </div>

      {/* Services */}
      <AdharServices />
      <PanCardServices />
      <AyushmanBharatServices />

      {/* Centered ServiceCardList */}
      <div className="flex justify-center items-center my-12">
        <ServiceCardList />
      </div>
    </div>
  );
}
