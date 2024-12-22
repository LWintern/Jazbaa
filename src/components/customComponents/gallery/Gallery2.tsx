"use client"

import { Card } from "@/components/ui/card"
import Image from "next/image"

export default function Gallery2() {
  return (
    <>
      <Card className="relative mx-auto overflow-hidden group/card transition-all duration-500 ease-out hover:bg-[#60C0ED]  bg-white h-[280px]">
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent opacity-0 group-hover/card:opacity-100 transition-all duration-500 z-10" />
            
            <div className="flex items-center h-full p-12 relative z-20">
              {/* Left side content */}
              <div className="w-1/3 relative z-30">
                <h1 className="text-5xl font-black leading-tight tracking-tight text-black group-hover/card:text-white transition-colors duration-500">
                  Build 
                  <br />
                  Your
                  <br />
                  Company
                </h1>
              </div>
      
              {/* Center image */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[280px] transform transition-all duration-500 ease-out opacity-0 group-hover/card:opacity-100 scale-90 group-hover/card:scale-100 z-20">
                <div className="relative w-full h-full transform group-hover/card:rotate-6 transition-transform duration-500">
                  <Image
                    src="/assets/mentor-with-VIPS/techie1.png"
                    alt="Content Creator"
                    fill
                    className="object-cover z-50 object-center rounded-lg shadow-xl"
                    priority
                  />
                </div>
              </div>
      
              {/* Right side content - Added transform and transition */}
              <div className="w-2/3 pl-8 relative z-1 transition-transform duration-500 ease-out transform group-hover/card:translate-x-28">
                <p className="text-lg leading-relaxed text-black group-hover/card:text-white transition-colors duration-500">
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

