'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Instagram, Youtube, Play } from 'lucide-react'
import Image from 'next/image'
import { motion } from "framer-motion";

const images = [
  "/assets/HeroImages/hero1.png",
  "/assets/HeroImages/hero2.png",
  "/assets/HeroImages/hero3.png",
];

const words = ["JAZBAA", "INVESTOR"];

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const speed = 180;

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    let timeout: string | number | NodeJS.Timeout | undefined;
    const currentWord = words[wordIndex];

    if (!isDeleting) {
      if (displayedText.length < currentWord.length) {
        timeout = setTimeout(() => {
          setDisplayedText(currentWord.slice(0, displayedText.length + 1));
        }, speed);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 1000);
      }
    } else {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(currentWord.slice(0, displayedText.length - 1));
        }, speed);
      } else {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, wordIndex]);

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
                className="object-cover object-center brightness-50"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 md:px-12 lg:px-8">
        <div className="text-center">
          <h1 className="mb-2 text-4xl md:text-6xl lg:text-8xl font-bold text-white">
            LEARN BUSINESS BY
          </h1>
          <h2 className="text-3xl md:text-6xl lg:text-8xl font-bold text-yellow-400 flex justify-center">
            DOING &nbsp;
            <motion.span
              className="inline-block"
              key={displayedText}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {displayedText}
            </motion.span>
          </h2>

          {/* Register Now Button */}
          <div className="mt-6 md:mt-8 flex justify-center">
            <Button
              variant="outline"
              className="group flex font-bold tracking-tight items-center gap-2 bg-transparent text-white hover:bg-black/50 rounded-full px-6 md:px-8 py-3 md:py-4 text-lg md:text-xl border-2 border-teal-400"
            >
              REGISTER NOW
            </Button>
          </div>
        </div>

        {/* Bottom Buttons and Logos */}
        <div className="absolute bottom-12 left-4 right-4 flex flex-col md:flex-row justify-between px-4 md:px-6 gap-4 md:gap-0">
          <div className="flex flex-col md:flex-row gap-4">
            <Button
              variant="outline"
              className="group flex items-center gap-2 bg-black/30 text-white hover:bg-black/50 text-sm md:text-base px-4 py-2"
            >
              <Youtube className="h-4 w-4" />
              YouTube
            </Button>
            <Button
              variant="outline"
              className="group flex items-center gap-2 bg-black/30 text-white hover:bg-black/50 text-sm md:text-base px-4 py-2"
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
              width={40}
              height={40}
            />
            <Image
              src="/assets/LW-white.png"
              alt="AACSB Member"
              width={40}
              height={40}
            />
          </div>
        </div>
      </div>
    </div>
  );
}