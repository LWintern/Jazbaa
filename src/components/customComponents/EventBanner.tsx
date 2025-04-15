


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
