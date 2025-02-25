// 'use client';

// import React from 'react';
// // import OwlCarousel from 'react-owl-carousel';
// import dynamic from "next/dynamic";
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';

// const OwlCarousel = dynamic(() => import("react-owl-carousel2"), {
//     ssr: false,
//   });

// const websites = [
//   { link: 'https://www.google.co.in/', img: '/serv.png' },
//   { link: 'https://www.microsoft.com/en-in/', img: '/serv.png' },
//   { link: 'https://www.microsoft.com/en-in/', img: '/serv.png' },
 
// ];

// export default function Slidebar() {
//   return (
//     <section className="bg-white py-8">
//       <div className="container mx-auto px-4">
//         <h2 className="text-2xl font-bold text-center mb-6">Important Websites</h2>
//         <OwlCarousel
//           className="owl-theme"
//           loop
//           margin={15}
//           nav
//           dots
//           responsive={{
//             0: { items: 2 },
//             600: { items: 3 },
//             1000: { items: 5 },
//           }}
//         >
//           {websites.map((site, index) => (
//             <div key={index} className="p-2">
//               <a href={site.link} target="_blank" rel="noopener noreferrer">
//                 <img
//                   src={site.img}
//                   alt={`Website ${index + 1}`}
//                   className="w-full h-32 object-contain mx-auto rounded-lg shadow-lg hover:shadow-xl transition duration-300"
//                 />
//               </a>
//             </div>
//           ))}
//         </OwlCarousel>
//       </div>
//     </section>
//   );
// };


