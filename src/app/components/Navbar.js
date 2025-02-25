"use client";
import Image from "next/image";
import { useState } from "react";
import { FaChevronDown, FaBars } from "react-icons/fa";
import Link from "next/link";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white p-4 text-[#27699D] shadow-lg h-20 items-center">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo1.png"
            alt="Frontech Logo"
            width={160} 
            height={90} 
            priority
            loading="eager"
            className="object-contain max-h-[80px]" // Added max-h to control height inside navbar
          />
        </Link>

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FaBars size={24} />
        </button>
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } md:flex md:space-x-8 absolute md:relative top-16 md:top-0 left-0 right-0 bg-white md:bg-transparent p-4 md:p-0 flex-col md:flex-row space-y-3 md:space-y-0`}
        >
          <Link href="/" className="block py-2 px-4 md:px-0">
            Home
          </Link>
          <Link href="/about" className="block py-2 px-4 md:px-0">About</Link>          
          <div className="relative block py-2 px-4 md:px-0">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="focus:outline-none flex items-center"
            >
              Services <FaChevronDown className="ml-1" />
            </button>
            {dropdownOpen && (
              <div className="absolute text-[15px] text-[#27699D] text-opacity-90 bg-white mt-2 py-2 rounded shadow-lg flex flex-col w-max left-1/2 transform -translate-x-1/2">
                <a
                  href="/services/it_services"
                  className="block px-4 py-2 whitespace-nowrap"
                >
                  Information Technology Services
                </a>
                <a
                  href="/services/mp_services"
                  className="block px-4 py-2 whitespace-nowrap"
                >
                  Manpower Services
                </a>
                <a
                  href="/services/dm_services"
                  className="block px-4 py-2 whitespace-nowrap"
                >
                  Data Management Services
                </a>
                <a
                  href="/services/eg_services"
                  className="block px-4 py-2 whitespace-nowrap"
                >
                  e-Governance Services
                </a>
                <a
                  href="/services/bf_services"
                  className="block px-4 py-2 whitespace-nowrap"
                >
                  Banking & Financial Services
                </a>
              </div>
            )}
          </div>
          <Link href="/career" className="block py-2 px-4 md:px-0">
            Career
          </Link>
          <Link href="/contact" className="block py-2 px-4 md:px-0">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
