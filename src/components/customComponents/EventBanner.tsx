// import React from 'react';

// export default function AdaptationBanner() {
//   return (
//     <div className="flex items-center justify-center p-6 bg-black">
//       <div className="flex items-center max-w-5xl w-full space-x-8">
//         {/* Text Section */}
//         <div className="w-1/2 pr-8">
//           <p className="text-5xl font-bold text-white leading-tight">
//             Embrace change early, and you
//             <br />
//             become the architect of the new
//             <br />
//             world, not just a resident of it.
//           </p>
//           <p className="text-4xl font-bold text-white mt-4 relative">
//             Your time to 
//             <span className="text-red-500 ml-2">adapt is NOW</span>
//             <span className="absolute -bottom-2 left-0 w-32 border-b-4 border-red-500"></span>
//           </p>
//         </div>

//         {/* Graph Section */}
//         <div className="w-1/2">
//           <svg viewBox="0 0 600 400" className="w-full">
//             <text x="50" y="50" fill="white" fontSize="20" fontWeight="bold">Adoption Curve</text>
            
//             {/* Curve */}
//             <path 
//               d="M100,300 Q300,100 500,300" 
//               fill="none" 
//               stroke="white" 
//               strokeWidth="3"
//             />

//             {/* Color Bands */}
//             <rect x="100" y="280" width="80" height="20" fill="#5CFF5C" />
//             <rect x="180" y="280" width="120" height="20" fill="#13C6F3" />
//             <rect x="300" y="280" width="120" height="20" fill="#FFFF5C" />
//             <rect x="420" y="280" width="120" height="20" fill="#FF5C5C" />
//             <rect x="540" y="280" width="60" height="20" fill="#9C27B0" />

//             {/* Percentage Labels */}
//             <text x="140" y="295" fill="black" fontSize="12" textAnchor="middle">2.5%</text>
//             <text x="240" y="295" fill="black" fontSize="12" textAnchor="middle">13.5%</text>
//             <text x="360" y="295" fill="black" fontSize="12" textAnchor="middle">34%</text>
//             <text x="480" y="295" fill="black" fontSize="12" textAnchor="middle">34%</text>
//             <text x="570" y="295" fill="black" fontSize="12" textAnchor="middle">16%</text>

//             {/* Labels */}
//             <text x="110" y="330" fill="white" fontSize="12">Innovators</text>
//             <text x="220" y="330" fill="white" fontSize="12">Early Adopters</text>
//             <text x="340" y="330" fill="white" fontSize="12">Early Majority</text>
//             <text x="460" y="330" fill="white" fontSize="12">Late Majority</text>
//             <text x="540" y="330" fill="white" fontSize="12">Skeptics</text>
//           </svg>
//         </div>
//       </div>
//     </div>
//   );
// }


import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function EventBanner() {
  return (
    <div className="p-6 bg-gradient-to-b from-red-50 via-gray-50 to-red-50">
      <div className="relative overflow-hidden max-w-5xl mx-auto rounded-3xl bg-black">
        {/* Container for image and content */}
        <div className="flex flex-col md:flex-row items-center relative w-full md:h-[300px]">
          {/* Full width image container */}
          <div className="w-full md:w-1/2 h-[200px] md:h-[300px] relative">
            <img
              className="absolute inset-0 object-cover w-full h-full opacity-80 rounded-t-3xl md:rounded-none md:rounded-l-3xl"
              src="https://cdn.prod.website-files.com/63d3b7e8aa21f4cead659fa8/65963fefecd164b7052f4d57_ticket-cta-img.png"
              alt="Excited audience at event"
            />
          </div>

          {/* Content overlay positioned on the right */}
          <div className="w-full md:w-1/2 h-full flex items-center justify-center p-8 md:p-12">
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-2xl lg:text-3xl font-bold text-white space-y-2 mb-8">
                <span>THIS IS</span>
                <span className="text-red-400"> THE INITIATIVE</span>
                <span> THAT</span>
                <br />
                <span> TOOK</span>
                <span className="text-red-400"> CHANGED THOUSANDS LIFE</span>
                <br />
                <span>FOREVER</span>
              </h2>
              <Button
                size="lg"
                className="bg-[#ff0000] hover:bg-[#ff0000] text-sm px-4 py-4 rounded-full transition-all duration-300"
              >
                REGISTER NOW <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
