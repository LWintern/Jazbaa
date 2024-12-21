"use client"

import { Card } from "@/components/ui/card"
import Image from "next/image"


export default function Gallery() {
  return (
    <>
  <Card className="relative overflow-hidden mx-auto group/card transition-all duration-500 ease-out hover:bg-black bg-white h-[280px]">
      <div className="flex items-center h-full p-12 relative z-10">
        {/* Left side - CREATE BETTER CONTENT */}
        <div className="w-1/3">
          <h1 className="text-5xl font-black leading-tight tracking-tight text-black group-hover/card:text-white">
            CREATE
            <br />
            BETTER
            <br />
            CONTENT
          </h1>
        </div>

        {/* Center image - Hidden by default, shown on hover */}
        <div className="absolute left-1/2 -translate-x-1/2 w-[400px] h-full flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-all duration-500">
          <div className="relative w-full h-[280px] transform rotate-2 transition-transform duration-500 scale-90 group-hover/card:scale-100">
            <Image
              src="/assets/mentor-with-VIPS/techie1.png"
              alt="Content Creator"
              fill
              className="object-cover object-center rounded-lg"
            />
          </div>
        </div>

        {/* Right side text */}
        <div className="w-2/3 pl-8">
          <p className="text-lg leading-relaxed text-black group-hover/card:text-white">
            Understand Your Audience • Content Strategy • Storytelling • Copy 
            writing • Editing • Shooting • Community Building • Influencer 
            Collaboration • Podcasting Skills • Creativity Techniques • Self 
            Branding
          </p>
        </div>
      </div>
    </Card>
    </>
  )
}

