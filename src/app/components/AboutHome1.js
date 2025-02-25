import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function AboutHome1() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16 py-12 bg-white min-h-[80vh]">
      {/* Left Side - Text Content */}
      <div className="lg:w-1/2 w-full text-center lg:text-left">
        <p className="text-lg font-bold text-gray-800">Why Frontech</p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-snug mt-2">
          Your Partner for <br />
          Digital Transformation
        </h2>
        <p className="text-gray-700 mt-4">
          Founded on December 20, 2022,{" "}
          <span className="font-bold italic text-[#27699D]">
            Frontech Services Private Limited ("Frontech")
          </span>{" "}
          is a startup company incorporated under the Companies Act, 2013 (CIN:
          U72900UP2022PTC175353) with its headquarters in {" "} <span className="font-bold text-black" >Lucknow, Uttar
          Pradesh, India. </span>{" "}
        </p>
        <p className="text-gray-700 mt-3">
          The Company drives digital transformation by capitalizing on modern
          core technology, harnessing artificial intelligence, and automating
          business operations to help clients grow and thrive in the digital
          age. Having created an unrivaled platform by achieving the
          milestones...
        </p>
        <div className="mt-6">
          <Link href="/about">
            {/* Wrapped in inline-flex to keep text and icon on the same line */}
            <span className="inline-flex items-center bg-[#27699D] text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-black transition">
              LEARN MORE ABOUT US
              <FaArrowRight className="w-4 h-4 ml-2" />{" "}
            </span>
          </Link>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="lg:w-1/2 w-full flex justify-center mt-8 lg:mt-0">
        <Image
          src="/images/about.jpg"
          alt="About Frontech"
          width={500}
          height={500}
          className="w-full max-w-md lg:max-w-lg object-cover"
        />
      </div>
    </section>
  );
}
