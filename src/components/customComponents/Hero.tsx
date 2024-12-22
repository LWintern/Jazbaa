


'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Instagram, Youtube, Play } from 'lucide-react'
import { Cover } from "@/components/ui/cover";
import Image from 'next/image'

const images = [
  "/assets/HeroImages/hero1.png",
  "/assets/HeroImages/hero2.png",
  "/assets/HeroImages/hero3.png",
]

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Carousel */}
      <div className="h-full w-full">
        <div className="relative h-full w-full">
          {images.map((src, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === activeIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                fill
                priority
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center',
                  filter: 'brightness(50%)',
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Content Overlay */}
      <div className="absolute mx-auto max-w-7xl inset-0 flex flex-col justify-center px-4 md:px-12 lg:px-8">
        <div className="max-w-4xl">
          <h1 className="mb-2 text-4xl font-bold text-white md:text-6xl lg:text-5xl">
            Learn
            <br />
            Business By
            <br />
            <span className="relative">
              Doing{' '}
              
              <span className="text-4xl md:text-3xl lg:text-4xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
                <Cover>JAZBAA </Cover></span>
               <span >
               
              </span>
            </span>
          </h1>

          {/* Instagram Button */}
          <div className="mt-8">
            <Button
              variant="outline"
              className="group flex items-center gap-2 bg-black/30 text-white hover:bg-black/50 rounded-3xl p-6"
            >
              <Instagram className="h-4 w-4" />
              Connect With Us on Instagram
            </Button>
          </div>
        </div>

        {/* Bottom Buttons and Logos */}
        <div className="absolute bottom-24 left-4 right-0 flex justify-between px-6">
          <div className="flex gap-4">
            <Button
              variant="outline"
              className="group flex items-center gap-2 bg-black/30 text-white hover:bg-black/50"
            >
              <Youtube className="h-4 w-4" />
              YouTube
            </Button>
            <Button
              variant="outline"
              className="group flex items-center gap-2 bg-black/30 text-white hover:bg-black/50"
            >
              <Play className="h-4 w-4" />
              Watch The Intro Video
            </Button>
          </div>

          {/* Accreditation Logos */}
          <div className="flex items-center gap-4">
            <Image
              src="/assets/hash13whitelogo.png"
              alt="hash13logo"
              width={48}
              height={48}
            />
            <Image
              src="/assets/LW-white.png"
              alt="AACSB Member"
              width={48}
              height={48}
            />
          </div>
        </div>
      </div>
    </div>
  )
}