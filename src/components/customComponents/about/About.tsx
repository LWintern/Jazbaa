"use client"

import { useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Card, CardContent } from "@/components/ui/card"
import { Play } from 'lucide-react'
import VisionMission from "./VissionAndMission"
import InNews from "./InTheNews"

// Card component to reduce repetition
const GoalCard = ({ year = "2024", text = "Reach Global Top 10 Ranking" }) => (
  <Card className="w-full sm:w-64 bg-zinc-900/30 border border-yellow-500/20 rounded-3xl backdrop-blur">
    <CardContent className="p-4 sm:p-6">
      <h2 className="text-xl sm:text-2xl font-bold mb-2">
        Goal <span className="text-[#ff0000]">{year}</span>
      </h2>
      <p className="text-gray-800 text-sm sm:text-base">{text}</p>
    </CardContent>
  </Card>
)

export default function About() {
  const [videoOpen, setVideoOpen] = useState(false)

  return (
    <div className="bg-gradient-to-b from-red-50 via-gray-50 to-red-50 py-8">
      <div className="min-h-full  text-black p-4 sm:p-6">
        <div className="max-w-6xl mx-auto">
          {/* Main Heading */}
          <div className="mb-8 sm:mb-12">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight">
              About
              <div className="relative inline-block">
                <span className="text-[#ff0000] ml-2">L</span>inux{" "}
                <span className="text-[#ff0000]">W</span>orld
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#ff0000]"></div>
              </div>
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start">
            {/* Left Column - Video Card */}
            <button 
              className="relative w-full text-left"
              onClick={() => setVideoOpen(true)}
            >
              <div className="relative overflow-hidden rounded-2xl aspect-video md:aspect-auto md:h-[300px] group">
                <img
                  src="/assets/mentor-with-VIPS/techie2.png"
                  alt="Linux World Video Preview"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-orange-500/80 mix-blend-multiply" />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 sm:p-4 group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                </div>

                {/* Text Overlay */}
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6">
                  <p className="text-white text-lg sm:text-xl font-light mb-1 sm:mb-2">
                    Linux World In
                  </p>
                  <div className="flex items-center gap-1 sm:gap-2 text-3xl sm:text-4xl font-bold">
                    <span className="text-[#ff0000]">3</span>
                    <span className="text-[#ff0000]">Minutes</span>
                  </div>
                </div>
              </div>
            </button>

            {/* Right Column - Goal Cards and Description */}
            <div className="flex flex-col gap-6 sm:gap-8">
              {/* Goal Cards */}
              <div className="flex flex-col sm:flex-row gap-4 sm:justify-end">
                <GoalCard />
                <GoalCard />
              </div>

              {/* Description */}
              <p className="text-sm sm:text-md text-black">
                At Masters' Union, we believe in learning business by doing business. 
                Through collaboration of industry experts and academic leaders, we aim 
                to revolutionise business education with a tech-centric and 
                industry-driven approach.
              </p>
            </div>
          </div>
        </div>

        {/* Video Dialog */}
        <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
          <DialogContent className="max-w-[90vw] md:max-w-4xl p-0 bg-black">
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src={videoOpen ? "https://www.youtube.com/embed/dQw4w9WgXcQ" : ""}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="border-0"
              />
            </div>
          </DialogContent>
        </Dialog>
      </div>
      
      <VisionMission />
      <InNews />
    </div>
  )
}