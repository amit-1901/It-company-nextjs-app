import ServiceCardList from "@/app/components/ServiceCardList";

export default function ITServices() {
  return (
    <>
      {/* Top Section - Title & Intro */}
      <div className="text-center lg:text-left px-6 lg:px-16 pt-12">
        <h1 className="text-4xl font-bold text-[#27699D]">
          Information Technology Services
        </h1>
        <div className="w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 mt-4"></div>
        <ul className="list-disc pl-6 mt-4 text-gray-700">
          <li>
            We are not just an ordinary technology services and consulting company; we are pioneers in building and designing innovative solutions to tackle the most intricate and demanding digital transformation needs of our esteemed clients.
          </li>
          <li>
            Our exceptional portfolio of capabilities encompasses a wide range of services, including top-notch consulting, cutting-edge design, meticulous engineering, seamless operations, and groundbreaking emerging technologies.
          </li>
          <li>
            As an end-to-end, fully integrated electronics manufacturing player, we possess unparalleled proficiency in electronics system design and manufacturing (ESDM) services.
          </li>
          <li>
            We go beyond being just an ordinary technology services and consulting company—we are pioneers in designing and building innovative solutions.
          </li>
          <li>
            Our focus is on addressing the most complex and demanding digital transformation needs of our valued clients.
          </li>
          <li>
            Our exceptional range of capabilities includes high-quality consulting, state-of-the-art design, precise engineering, seamless operational support, and the integration of groundbreaking emerging technologies.
          </li>
          <li>
            We offer fully integrated solutions, covering every aspect of technology services—from conceptualization and development to implementation and long-term support.
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
