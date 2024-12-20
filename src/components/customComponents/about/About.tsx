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
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-6xl mx-auto">
        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-12">
        
        ABOUT LINUXWORLD
          <br />
          INFORMATICS PVT LTD
        </h1>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left Column - Video Card */}
          <div 
            className="relative cursor-pointer group"
            onClick={() => setVideoOpen(true)}
          >
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="/assets/mentor-with-VIPS/techie1.png"
                alt="Masters' Union Video Thumbnail"
                className="w-full object-cover"
              />
              <div className="absolute inset-0 bg-yellow-500/90 mix-blend-multiply" />
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 group-hover:scale-110 transition">
                  <Play className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Text Overlay */}
              <div className="absolute bottom-6 left-6">
                <p className="text-white text-xl mb-2">Masters' Union In</p>
                <div className="text-4xl font-bold">
                  <span className="text-cyan-400">3</span>{" "}
                  <span className="text-emerald-400">Minutes</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Goal Card and Description */}
          <div className="flex flex-col gap-8">
            {/* Goal Card */}
            <div className="flex justify-end">
              <Card className="w-64 bg-zinc-900/50 border-zinc-800 backdrop-blur">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-2">
                    Goal <span className="text-yellow-500">2030</span>
                  </h2>
                  <p className="text-gray-400">
                    Reach Global Top 10 Ranking
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Description */}
            <p className="text-white text-lg">
 
 #1 Awarded Best Summer Internship Award{" "}
              <span className="text-white">consecutively for the Last 3 Year</span>
              {/* . Through collaboration of industry experts and academic leaders, we aim to
              revolutionise business education with a tech-centric and industry-driven
              approach. */}
            </p>
          </div>
        </div>
      </div>

      {/* Video Dialog */}
      <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
        <DialogContent className="max-w-4xl p-0 bg-black">
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
    <VisionMission></VisionMission>
    <InNews></InNews>
    </>
  )
}

