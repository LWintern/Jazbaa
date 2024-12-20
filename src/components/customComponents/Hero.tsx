'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Instagram, Youtube, Play } from 'lucide-react'
import Image from 'next/image'

// Use absolute paths for images in the public folder
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
    }, 5000) // 5 seconds per slide
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
      <div className="absolute inset-0 flex flex-col justify-center px-4 md:px-12 lg:px-8">
        <div className="max-w-4xl">
          <h1 className="mb-2 text-4xl font-bold text-white md:text-6xl lg:text-5xl">
            Learn
            <br />
            Business By
            <br />
            <span className="relative">
              Doing{' '}
              <span className="relative">
                Business
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="20"
                  viewBox="0 0 200 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 15C50 5 150 5 199 15"
                    stroke="#3B82F6"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </span>
          </h1>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button
              variant="outline"
              className="group flex items-center gap-2 bg-black/30 text-white hover:bg-black/50 rounded-3xl p-6"
            >
              <Instagram className="h-4 w-4" />
              Connect With Us on Instagram
            </Button>
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
        </div>

        {/* Accreditation Logos */}
        <div className="absolute bottom-6 right-6 flex items-center gap-4">
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
  )
}
