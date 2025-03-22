// "use client";
// import Image from "next/image";
// import React, { useEffect, useId, useRef, useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { useOutsideClick } from "@/hooks/use-outside-click";

// export function StartupsGallery() {
//   const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
//     null
//   );
//   const ref = useRef<HTMLDivElement>(null);
//   const id = useId();

//   useEffect(() => {
//     function onKeyDown(event: KeyboardEvent) {
//       if (event.key === "Escape") {
//         setActive(false);
//       }
//     }

//     if (active && typeof active === "object") {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//     }

//     window.addEventListener("keydown", onKeyDown);
//     return () => window.removeEventListener("keydown", onKeyDown);
//   }, [active]);

//   useOutsideClick(ref, () => setActive(null));

//   return (
//     <div className="py-8 bg-gradient-to-b from-red-50 via-gray-50 to-red-50">
//       <h1 className="text-3xl font-bold text-center my-12">50+ STARTUPS TO BE SHOWCASED @ <span className="text-[#ff0000]">JABAA 3.0</span></h1>
//       <AnimatePresence>
//         {active && typeof active === "object" && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black/20 h-full w-full z-10"
//           />
//         )}
//       </AnimatePresence>
//       <AnimatePresence>
//         {active && typeof active === "object" ? (
//           <div className="fixed inset-0 grid place-items-center z-[100]">
//             <motion.button
//               key={`button-${active.title}-${id}`}
//               layout
//               initial={{
//                 opacity: 0,
//               }}
//               animate={{
//                 opacity: 1,
//               }}
//               exit={{
//                 opacity: 0,
//                 transition: {
//                   duration: 0.05,
//                 },
//               }}
//               className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
//               onClick={() => setActive(null)}
//             >
//               <CloseIcon />
//             </motion.button>
//             <motion.div
//               layoutId={`card-${active.title}-${id}`}
//               ref={ref}
//               className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
//             >
//               <motion.div layoutId={`image-${active.title}-${id}`}>
//                 <Image
//                   priority
//                   width={120}
//                   height={120}
//                   src={active.afterSrc} // Use the "after" image here
//                   alt={active.title}
//                   className="w-full h-80 lg:h-60 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
//                 />
//               </motion.div>

//               <div>
//                 <div className="flex justify-between items-start p-4">
//                   <div className="">
//                     <motion.h3
//                       layoutId={`title-${active.title}-${id}`}
//                       className="font-bold text-neutral-700 dark:text-neutral-200"
//                     >
//                       {active.title}
//                     </motion.h3>
//                     <motion.p
//                       layoutId={`description-${active.description}-${id}`}
//                       className="text-neutral-600 dark:text-neutral-400"
//                     >
//                       {active.description}
//                     </motion.p>
//                   </div>

//                   <motion.a
//                     layoutId={`button-${active.title}-${id}`}
//                     href={active.ctaLink}
//                     target="_blank"
//                     className="px-4 py-3 text-sm rounded-full font-bold bg-red-500 text-white"
//                   >
//                     {active.ctaText}
//                   </motion.a>
//                 </div>
//                 <div className="pt-4 relative px-4">
//                   <motion.div
//                     layout
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                     className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
//                   >
//                     {typeof active.content === "function"
//                       ? active.content()
//                       : active.content}
//                   </motion.div>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         ) : null}
//       </AnimatePresence>
//       <ul className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
//         {cards.map((card, index) => (
//           <motion.div
//             layoutId={`card-${card.title}-${id}`}
//             key={`card-${card.title}-${id}`}
//             onClick={() => setActive(card)}
//             className="p-4 flex flex-col justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
//           >
//             <div className="flex gap-4 flex-col items-center">
//               <motion.div layoutId={`image-${card.title}-${id}`}>
//               <Image
//   width={100}
//   height={100}
//   src={card.src}
//   alt={card.title}
//   className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-lg object-cover object-top"
// />
//               </motion.div>
//               <div className="text-center">
//                 <motion.h3
//                   layoutId={`title-${card.title}-${id}`}
//                   className="font-medium text-neutral-800  dark:text-neutral-200"
//                 >
//                   {card.title}
//                 </motion.h3>
//                 <motion.p
//                   layoutId={`description-${card.description}-${id}`}
//                   className="text-neutral-600 dark:text-neutral-400"
//                 >
//                   {card.description}
//                 </motion.p>
//               </div>
//             </div>
//             <motion.button
//               layoutId={`button-${card.title}-${id}`}
//               className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-red-500 hover:text-white text-black mt-4"
//             >
//               {card.ctaText}
//             </motion.button>
//           </motion.div>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export const CloseIcon = () => {
//   return (
//     <motion.svg
//       initial={{
//         opacity: 0,
//       }}
//       animate={{
//         opacity: 1,
//       }}
//       exit={{
//         opacity: 0,
//         transition: {
//           duration: 0.05,
//         },
//       }}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       className="h-4 w-4 text-black"
//     >
//       <path stroke="none" d="M0 0h24v24H0z" fill="none" />
//       <path d="M18 6l-12 12" />
//       <path d="M6 6l12 12" />
//     </motion.svg>
//   );
// };

// const cards = [
//   {
//     description: "Select * from earth where person = 'like you'",
//     title: "Tech Date ",
//     src: "https://media.licdn.com/dms/image/v2/D4D0BAQG81NXig_IURA/company-logo_200_200/company-logo_200_200/0/1722780850157?e=1743033600&v=beta&t=R0QJk6MBMVJT_DPg13pEQPhPzHgQfctxY0Oyttqu964", // Before image
//     afterSrc: "https://media.licdn.com/dms/image/v2/D5622AQHraICZVtZyYg/feedshare-shrink_2048_1536/B56ZPlUL_ZGsAo-/0/1734719102414?e=1737590400&v=beta&t=UlAUruweaPdpl2DYDlUBR2U5zh_l8pCD4J2xQVealpA", // After image
//     ctaText: "View",
//     ctaLink: "https://ui.aceternity.com/templates",
//     content: () => {
//       return (
//         <p>
//           Lana Del Rey, an iconic American singer-songwriter, is celebrated for
//           her melancholic and cinematic music style. Born Elizabeth Woolridge
//           Grant in New York City, she has captivated audiences worldwide with
//           her haunting voice and introspective lyrics. 
//         </p>
//       );
//     },
//   },
//   {
//     description: "Whisper that guide your vision ",
//     title: "NET-R",
//     src: "https://media.licdn.com/dms/image/v2/D560BAQFmt7JKfk2Hyg/company-logo_200_200/company-logo_200_200/0/1722772282762?e=1743033600&v=beta&t=RS0veANmcmQeKs9mLGoJ3eOw4Ys3JR7H2Qp6O6xqH9E", // Before image
//     afterSrc: "https://media.licdn.com/dms/image/v2/D5622AQGHUYFbz-je1g/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1723373601586?e=1737590400&v=beta&t=JL9wG7qUrknAhcDIS0lPDqbsqvLbDYwshfy1TyNaUdM", // After image
//     ctaText: "View",
//     ctaLink: "https://www.linkedin.com/company/netr-a/",
//     content: () => {
//       return (
//         <p>
//           Babu Maan, a legendary Punjabi singer, is renowned for his soulful
//           voice and profound lyrics that resonate deeply with his audience. Born
//           in the village of Khant Maanpur in Punjab, India, he has become a
//           cultural icon in the Punjabi music industry. 
//         </p>
//       );
//     },
//   },

//   {
//     description: "",
//     title: "VISVASA",
//     src: "https://media.licdn.com/dms/image/v2/D560BAQHkecfUpwzNhQ/company-logo_200_200/company-logo_200_200/0/1722345386979?e=1743033600&v=beta&t=u_UUPGNhYDqyen1H-Bbt2VQeq5C4OM12iCaUYenJ2gA", // Before image
//     afterSrc: "https://assets.aceternity.com/demos/metallica-after.jpeg", // After image
//     ctaText: "View",
//     ctaLink: "https://ui.aceternity.com/templates",
//     content: () => {
//       return (
//         <p>
//           Metallica, an iconic American heavy metal band, is renowned for their
//           powerful sound and intense performances that resonate deeply with
//           their audience. Formed in Los Angeles, California, they have become a
//           cultural icon in the heavy metal music industry.
//         </p>
//       );
//     },
//   },
//   {
//     description: "TERRAFORM AUTOMATION",
//     title: "SKYOPS AI ",
//     src: "https://assets.aceternity.com/demos/led-zeppelin.jpeg", // Before image
//     afterSrc: "https://assets.aceternity.com/demos/led-zeppelin-after.jpeg", // After image
//     ctaText: "View",
//     ctaLink: "https://ui.aceternity.com/templates",
//     content: () => {
//       return (
//         <p>
//           Led Zeppelin, a legendary British rock band, is renowned for their
//           innovative sound and profound impact on the music industry. Formed in
//           London in 1968, they have become a cultural icon in the rock music
//           world.
//         </p>
//       );
//     },
//   },
//   {
//     description: "PARK YOUR CAR",
//     title: "CAR PARKING",
//     src: "https://assets.aceternity.com/demos/toh-phir-aao.jpeg", // Before image
//     afterSrc: "https://assets.aceternity.com/demos/toh-phir-aao-after.jpeg", // After image
//     ctaText: "View",
//     ctaLink: "https://ui.aceternity.com/templates",
//     content: () => {
//       return (
//         <p>
//           &quot;Aawarapan&quot;, a Bollywood movie starring Emraan Hashmi, is
//           renowned for its intense storyline and powerful performances. Directed
//           by Mohit Suri, the film has become a significant work in the Indian
//           film industry.
//         </p>
//       );
//     },
//   },
// ];
'use client';

import React from 'react';
import Image from 'next/image';
import galleryData from './galleryData'; // Ensure it's correctly imported as an array

export default function StartupsGallery() {
  // Ensure galleryData is an array
  if (!Array.isArray(galleryData)) {
    console.error('galleryData is not an array:', galleryData);
    return null;
  }

  // Separate different types of cards
  const topStats = galleryData.filter(card => card.type === 'stat' && card.position === 'top');
  const images = galleryData.filter(card => card.type === 'image');
  const bottomStats = galleryData.filter(card => card.type === 'stat' && card.position === 'bottom');
  const testimonials = galleryData.filter(card => card.type === 'testimonial');

  // Determine the minimum number of pairs to prevent overflow
  const pairCount = Math.min(topStats.length, images.length, bottomStats.length);
  
  // Create pairs excluding testimonial cards
  const displayPairs = [];
  for (let i = 0; i < pairCount; i++) {
    displayPairs.push({
      topStat: topStats[i],
      image: images[i],
      bottomStat: bottomStats[i]
    });
  }

  return (
    <div className="py-12 px-6 bg-gradient-to-b from-purple-900 via-purple-950 to-purple-900 text-white overflow-hidden">
      <div className="relative flex w-full overflow-hidden">
        <div className="flex gap-6 min-w-max animate-scroll">

          {/* Normal Cards (Stats & Images) */}
          {[...displayPairs, ...displayPairs].map((pair, index) => (
            <div key={index} className="flex flex-col items-center min-w-[250px]">
              
              {/* Top Stat Card */}
              <div className="bg-black rounded-xl shadow-lg p-4 mb-2 flex items-center gap-4 w-full text-center">
                <div className={`w-8 h-8 rounded-full ${pair.topStat?.color === 'blue' ? 'bg-blue-600' : 'bg-yellow-400'} flex items-center justify-center`}>
                  <span className="text-white font-bold">•</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold">{pair.topStat?.value}</h2>
                  <p className="text-xs text-gray-400">{pair.topStat?.description}</p>
                </div>
              </div>
              
              {/* Image Card */}
              <div className="bg-black rounded-xl overflow-hidden shadow-lg w-full">
                <div className="relative h-48">
                  {pair.image?.image && (
                    <Image
                      src={pair.image?.image}
                      alt={pair.image.title || 'Startup Image'}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                    />
                  )}
                </div>
                <div className="p-4">
                  <h2 className="text-2xl font-bold">{pair.image?.title}</h2>
                </div>
              </div>
              
              {/* Bottom Stat Card */}
              <div className="bg-black rounded-xl shadow-lg p-4 mt-2 flex items-center gap-4 w-full text-center">
                <div className={`w-8 h-8 rounded-full ${pair.bottomStat?.color === 'blue' ? 'bg-blue-600' : 'bg-yellow-400'} flex items-center justify-center`}>
                  <span className="text-white font-bold">•</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold">{pair.bottomStat?.value}</h2>
                  <p className="text-xs text-gray-400">{pair.bottomStat?.description}</p>
                </div>
              </div>

            </div>
          ))}

          {/* 🔽 Separate Testimonial Cards - Moving in Carousel 🔽 */}
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div 
            key={index} 
            className="flex flex-col items-center min-w-[250px] w-[250px] transition-transform"
            style={{ transform: `translateY(${(index % 3) * 20}px)` }} // Uneven height effect
          >
            <div className="bg-black rounded-xl shadow-lg p-4 w-full text-center flex flex-col overflow-hidden">
              
              {/* Image at the Top */}
              {testimonial.image && (
                <div className="relative w-full h-48 mb-4 rounded-lg ">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.title || 'Testimonial Image'}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              
              {/* Text Content Below */}
              <div className="px-2 text-white text-left">
                <p className="text-sm leading-tight">
                  "{testimonial?.content}"
                </p>
                <p className="text-md font-bold mt-2 text-white">- {testimonial?.name}</p>
              </div>
            </div>
          </div>
          
          
          ))}
        </div>
      </div>

      {/* Style Block (Now Properly Placed) */}
      <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          display: flex;
          animation: scroll 15s linear infinite;
          white-space: nowrap;
        }
      `}</style>
    </div>
  );
}
