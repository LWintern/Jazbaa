

"use client"

import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"

export default function WhatIsSummer() {
  return (
    <div className="bg-gradient-to-b from-red-50 via-gray-50 to-red-50 relative overflow-hidden "> {/* Added min-height for reference */}
      <div className="container mx-auto   py-12 max-w-6xl">
        <div className="grid lg:grid-cols-[1.8fr,2fr]  items-center  sm:ml-28">
          {/* Left Column - Video Section */}
          <div className="relative md:w-[80%] aspect-[12/8]   md:rounded-3xl lg:rounded-3xl overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dqIsmWjbtfQ?si=JRgPBQsu4PIvUMpy/"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <div className="absolute inset-0 " />
          </div>

          {/* Right Column - Content Section */}
          <div className="space-y-2 z-10 md:px-0 px-4 md:pt-4 pt-4 ">
            <h1 className="text-3xl font-black leading-tight tracking-tight">
              WHAT IS
              <br />
              JAZBAA EVENT?
            </h1>

            <p className="text-md text-gray-400">JAZBAA Event is the ultimate place to</p>

            <div className="space-y-4">
              <div className="text-md font-bold">1. FIND YOUR NEXT BUSINESS PARTNER</div>
              <div className="text-md font-bold">2. COLLAB WITH THE BIGGEST CREATORS</div>
              <div className="text-md font-bold">3. MAKE AT LEAST 10 FRIENDS</div>
              <div className="text-md font-bold">4. EDUCATE YOURSELF</div>
              <div className="text-md font-bold">5. AND HAVE LOTS OF FUN WITH LIKE-MINDED PEOPLE</div>
            </div>

            <p className="text-md text-gray-800 max-w-xl">
              Experts will take the stage and present their knowledge, experiences, and strategies only for you to be the next biggest creator in your country.
            </p>

            <Button
              className="bg-[#ff0000] hover:bg-[#ff0000] hover:shadow-md hover:shadow-black text-white rounded-full px-8 text-lg font-semibold h-auto"
            >
              REGISTER NOW
              <svg
                className="ml-2 h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>

      {/* Right Side Image */}
      <div
        className="absolute right-0 bottom-0 pointer-events-none"
        style={{
          width: "cover",
          height: "60%",
        }}
      >
        <img
          src="https://cdn.prod.website-files.com/63d3b7e8aa21f4cead659fa8/65997b3c8b0931a1a3ff8169_about-image-2.png"
          alt="People enjoying the summit"
          className="w-full h-full object-contain object-bottom"
        />
      </div>

      {/* Black Overlay */}
      <div className="absolute top-0 left-0 w-1/4 h-full bg-gradient-to-r from-red-50 to-transparent opacity-10" />
    </div>
  );
}