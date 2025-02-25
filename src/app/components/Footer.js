import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-200 p-6">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
        {/* Quick Links */}
        <div>
          <h2 className="text-lg text-[#27699D] font-bold">Quick Links</h2>
          <ul className="mt-2 text-black space-y-2">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/about" className="hover:underline">About</Link></li>
            <li><Link href="/services" className="hover:underline">Services</Link></li>
            <li><Link href="/career" className="hover:underline">Career</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact Us</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-lg text-[#27699D] font-bold">Services</h2>
          <ul className="mt-2 text-black space-y-2">
            <li><Link href="/services/it_services" className="hover:underline">IT Services</Link></li>
            <li><Link href="/services/mp_services" className="hover:underline">Manpower Services</Link></li>
            <li><Link href="/services/dm_services" className="hover:underline">Data Management</Link></li>
            <li><Link href="/services/eg_services" className="hover:underline">e-Governance</Link></li>
            <li><Link href="/services/bf_services" className="hover:underline">Banking & Financial</Link></li>
          </ul>
        </div>

        {/* Enquiry */}
        <div>
          <h2 className="text-lg text-[#27699D] font-bold">Enquiry</h2>
          <ul className="mt-2 text-black space-y-2">
            <li><Link href="/contact" className="hover:underline">Enquiry Form</Link></li>
            <li><Link href="/contact" className="hover:underline">WhatsApp Connect</Link></li>
            <li><Link href="/contact" className="hover:underline">FAQ</Link></li>
            <li><Link href="/contact" className="hover:underline">Review</Link></li>
          </ul>
        </div>

        {/* Contact Us with mailto, tel, and Google Maps */}
        <div>
          <h2 className="text-lg text-[#27699D] font-bold">Contact Us</h2>
          <p className="mt-2">
            📍 <Link 
              href="https://www.google.com/maps/search/?api=1&query=1st+Floor,+Mukut+City+Center,+CP-13,+1/A,+Munshi+Pulia+Indira+Nagar,+Lucknow,+Uttar+Pradesh-226016"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-black"
            >
              1st Floor, Mukut City Center, CP-13, 1/A, Munshi Pulia Indira Nagar, Lucknow, UP-226016
            </Link>
          </p>
          <p>
            📞 <Link href="tel:+919956322210" className="hover:underline text-black">+91-9956322210</Link>
          </p>
          <p>
            📧 <Link href="mailto:info@frontech.in" className="hover:underline text-black">info@frontech.in</Link>
          </p>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="text-center mt-6 border-t border-gray-700 pt-4 flex flex-col md:flex-row items-center justify-center gap-3">
        <p>© 2025 Frontech Services Pvt. Ltd. All rights reserved.</p>
        <ul className="flex flex-wrap gap-3 text-sm">
          <li>
            <Link
              href="/term_and_condition"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Terms of Services
            </Link>
          </li>
          <span className="hidden md:inline text-gray-400">||</span>
          <li>
            <Link
              href="/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Privacy Policy
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
