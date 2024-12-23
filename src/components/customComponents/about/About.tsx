"use client"

import { useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Card, CardContent } from "@/components/ui/card"
import { Play } from 'lucide-react'
import VisionMission from "./VissionAndMission"
import InNews from "./InTheNews"

export default function About() {
  const [videoOpen, setVideoOpen] = useState(false)

  return (
    <>
      <div className="min-h-full bg-gray-100 text-black p-4 sm:p-6">
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
            <div 
              className="relative cursor-pointer group w-full"
              onClick={() => setVideoOpen(true)}
            >
              <div className="relative overflow-hidden rounded-2xl aspect-video md:aspect-auto md:h-[300px]">
                <img
                  src="/assets/mentor-with-VIPS/techie2.png"
                  alt="Masters' Union Video Thumbnail"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-orange-500/80 mix-blend-multiply" />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 sm:p-4 group-hover:scale-110 transition">
                    <Play className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                </div>

                {/* Text Overlay */}
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6">
                  <p className="text-white text-lg sm:text-xl font-light mb-1 sm:mb-2">Linux World In</p>
                  <div className="flex items-center gap-1 sm:gap-2 text-3xl sm:text-4xl font-bold">
                    <span className="text-[#ff0000]">3</span>
                    <span className="text-[#ff0000]">Minutes</span>
                  </div>
                </div>
              </div>
  <div className="min-h-full bg-black text-white p-6">
      <div className="max-w-6xl mx-auto">
        {/* Main Heading */}
        <div className="mb-12">
          <h1 className="text-1xl md:text-3xl font-bold leading-tight">
            About
            <div className="relative">
              Linux World
              <div className="absolute -bottom-2 left-0 w-32 h-1 bg-cyan-400"></div>
            </div>

            {/* Right Column - Goal Card and Description */}
            <div className="flex flex-col gap-6 sm:gap-8">
              {/* Goal Cards */}
              <div className="flex flex-col sm:flex-row gap-4 sm:justify-end">
                <Card className="w-full sm:w-64 bg-zinc-900/30 border border-yellow-500/20 rounded-3xl backdrop-blur">
                  <CardContent className="p-4 sm:p-6">
                    <h2 className="text-xl sm:text-2xl font-bold mb-2">
                      Goal <span className="text-[#ff0000]">2024</span>
                    </h2>
                    <p className="text-gray-800 text-sm sm:text-base">
                      Reach Global Top 10 Ranking
                    </p>
                  </CardContent>
                </Card>
                <Card className="w-full sm:w-64 bg-zinc-900/30 border border-yellow-500/20 rounded-3xl backdrop-blur">
                  <CardContent className="p-4 sm:p-6">
                    <h2 className="text-xl sm:text-2xl font-bold mb-2">
                      Goal <span className="text-[#ff0000]">2024</span>
                    </h2>
                    <p className="text-gray-800 text-sm sm:text-base">
                      Reach Global Top 10 Ranking
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-md text-black">
                At Masters' Union, we believe in Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                At, odit? sit amet consectetur adipisicing elit. Quo deserunt pariatur omnis. Lorem ipsum dolor sit amet, 
                consectetur adipisicing elit. Velit molestiae rerum deserunt, quo nulla, consequatur aliquid learning 
                business by doing business Through collaboration of industry experts and academic leaders, we aim to 
                revolutionise business education with a tech-centric and industry-driven approach.
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

          {/* Right Column - Goal Card and Description */}
          <div className="flex flex-col gap-8">
            {/* Goal Card */}
            <div className="flex justify-end">
              <Card className="w-64 bg-zinc-900/30 border border-yellow-500/20 rounded-3xl backdrop-blur">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-2">
                    Goal <span className="text-yellow-500">2024</span>
                  </h2>
                  <p className="text-gray-400">
                    Reach Global Top 10 Ranking
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Description */}
            <p className="text-md text-gray-300">
              At Masters' Union, we believe in <span className="text-white font-medium">learning business by doing business</span>. Through collaboration of industry experts and academic leaders, we aim to revolutionise business education with a tech-centric and industry-driven approach.
            </p>
          </div>
        </div>
      </div>
      <VisionMission />
      <InNews />
    </>
  )
}