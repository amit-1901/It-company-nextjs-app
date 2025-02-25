
import Link from "next/link";

export default function AboutHero() {
  return (
    <div className="about-info bg-gray-100 p-6 md:p-10 rounded-lg shadow-md">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">
        <span className="text-blue-600">About</span> Us
      </h2>
      <p className="text-gray-600 mb-3">
        M/s Frontech Services Private Limited is a Startup Company (“Frontech”)
        is a private-owned company incorporated under the Companies Act, 2013 on
        20 December 2022 vide CIN-U72900UP2022PTC175353 “Frontechs” headquarter
        at Lucknow, Uttar Pradesh, India.
      </p>
      <p className="text-gray-600 mb-4">
        The Company drives digital transformation by capitalizing on modern core
        technology, harnessing artificial intelligence, and automating business
        operations to help clients grow and thrive in the digital age. Having
        created an unrivaled platform by achieving the milestones
      </p>
      <div className="mt-4">
        <Link href="/about">
          <span className="inline-block bg-blue-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-blue-700 transition">
            Read More <i className="fa fa-chevron-right ml-2"></i>
          </span>
        </Link>
      </div>
    </div>
  );
}
