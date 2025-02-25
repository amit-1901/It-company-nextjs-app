import Image from "next/image";
import Link from "next/link";
import Hero from "./components/Hero";
// import AboutHero from "./components/AboutHome";
import AboutHome1 from "./components/AboutHome1";
import ServiceCards from "./components/ServiceCards";
import Testimonials from "./components/Testimonials";
import DepartmentCards from "./components/DepartmentCards";
import ServiceSlider from "./components/ServiceSlider";
// import Slidebar from "./components/Slidebar";

export default function Home() {
  return (
    <div className="text-center py-10">  
    <Hero/>    
    {/* <AboutHero/> */}
    <AboutHome1/>
    <ServiceCards/>
    <DepartmentCards/>
    <Testimonials/>
    {/* <Slidebar/> */}
    <ServiceSlider/>
      {/* <h1 className="text-4xl font-bold text-[#27699D]">Welcome to Frontech Services</h1>                */}
    </div>
  ); 
}
