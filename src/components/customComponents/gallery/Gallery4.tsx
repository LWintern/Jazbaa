"use client";

import { Card } from "@/components/ui/card";
import Image from "next/legacy/image";

export default function Gallery4() {
  return (
    <div className="relative p-4 md:p-4">
      <Card className="relative mx-auto group transition-all duration-500 ease-out hover:bg-gray-500 bg-white h-auto max-w-6xl md:h-[200px]">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 z-10" />

        <div className="flex flex-col md:flex-row items-center h-full p-6 md:p-12 relative z-20">
          {/* Left side content */}
          <div className="w-full md:w-1/3 relative z-30 mb-4 md:mb-0">
            <h1 className="text-2xl md:text-3xl font-black leading-tight tracking-tight text-black group-hover:text-white transition-colors duration-500">
              Make
              <br />
              10
              <br />
              Friends
            </h1>
          </div>

          {/* Center image - Small screens (always visible) */}
          <div className="relative w-full h-[200px] block md:hidden mb-4 transition-all duration-500 ease-out z-50">
            <div className="relative w-full h-full">
              <Image
                src="/assets/mentor-with-VIPS/techie1.png"
                alt="Content Creator"
                fill
                className="object-cover z-50 object-center rounded-lg shadow-xl"
                priority
              />
            </div>
          </div>

          {/* Center image - Medium and Large screens (visible on hover) */}
          <div className="hidden md:block relative w-auto h-[200px] mb-0 transition-all duration-500 ease-out z-50 opacity-0 group-hover:opacity-100">
            <div className="relative w-[300px] h-full transform group-hover:rotate-6 transition-transform duration-500">
              <Image
                src="/assets/mentor-with-VIPS/techie1.png"
                alt="Content Creator"
                fill
                className="object-cover z-50 object-center rounded-lg shadow-xl"
                priority
              />
            </div>
          </div>

          {/* Right side content */}
          <div className="w-full md:w-2/4 pl-0 md:pl-8 relative z-1 transition-transform duration-500 ease-out transform group-hover:translate-x-0 md:group-hover:translate-x-20">
            <p className="text-sm md:text-md leading-relaxed text-black group-hover:text-white transition-colors duration-500">
              Understand Your Audience • Content Strategy • Storytelling • Copy
              writing • Editing • Shooting • Community Building • Influencer
              Collaboration • Podcasting Skills • Creativity Techniques • Self
              Branding
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}