import Head from "next/head";

export default function LegalTerms() {
  const content = `
    The Company works in a legally compliant manner as it has registered itself under the business and
    economic laws as applicable in India such as Income-tax, GST, Start-up, MSME, EPF, ESI, Labour
    Department, Up Shop and Establishment, ISO 9001:2015/27001:2022 and CMMI Level 5 Certification, etc.

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
  `;

  return (
    <>
      <Head>
        <title>Legal Terms & Conditions</title>
      </Head>

      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-6">Terms of Services</h1>
        
        <div className="border-t border-gray-300 pt-4 text-gray-700 space-y-4">
          {content.split("\n").map((paragraph, index) => (
            <p key={index} className="leading-relaxed">{paragraph.trim()}</p>
          ))}
        </div>
      </div>
    </>
  );
}
