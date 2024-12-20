"use client"

import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"

export default function WhatIsSummer() {
  return (
    <div className=" bg-[#FCFAF7] relative overflow-hidden">
      <div className="container mx-3/4 px-4 py-12  max-w-4xl">
        <div className="grid lg:grid-cols-[1.2fr,1fr] gap-8 items-center">
          {/* Left Column - Video Section */}
          <div className="relative w-[70%] aspect-[12/8]  ml-20 rounded-3xl overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/your_video_id"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400/40 to-orange-300/40 pointer-events-none" />
          </div>

          {/* Right Column - Content Section */}
          <div className="space-y-2 z-10">
            <h1 className="text-3xl font-black leading-tight tracking-tight">
              WHAT IS
              <br />
              SUMMER PROGRAM?
            </h1>

            <p className="text-md">Summer Programis the ultimate place to</p>

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
  className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none"
  style={{ width: "30%", height: "100%" }} // Adjust width and height here
>
  <img
    src="https://cdn.prod.website-files.com/63d3b7e8aa21f4cead659fa8/65997b3c8b0931a1a3ff8169_about-image-2.png"
    alt="People enjoying the summit"
    className="w-full h-full object-cover object-left"
  />
</div>


      {/* Black Overlay */}
      <div className="absolute top-0 left-0 w-1/4 h-full bg-gradient-to-r from-black to-transparent opacity-10" />
    </div>
  );
}
