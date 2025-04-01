"use client";

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { testimonialData, logoData } from './testimonialData';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function renderStars(rating: number): JSX.Element {
  return (
    <div className="flex">
      {Array.from({ length: 5 }, (_, index) => (
        <svg
          key={index}
          className={`w-5 h-5 ${
            index < rating ? 'text-yellow-400' : 'text-gray-500'
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.46a1 1 0 00-.364 1.118l1.287 3.974c.3.921-.755 1.688-1.54 1.118l-3.39-2.46a1 1 0 00-1.175 0l-3.39 2.46c-.784.57-1.838-.197-1.54-1.118l1.287-3.974a1 1 0 00-.364-1.118L2.174 9.4c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.974z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialSection(): JSX.Element {
  const [currentIndex, setCurrentIndex] = useState(0);
  const logoSliderRef = useRef<HTMLDivElement>(null);
  const testimonialSliderRef = useRef<HTMLDivElement>(null);

  // Logo Slider Animation
  useEffect(() => {
    const animateLogoSlider = () => {
      if (logoSliderRef.current) {
        const firstLogo = logoSliderRef.current.children[0] as HTMLElement;
        const width = firstLogo.offsetWidth;

        logoSliderRef.current.style.transition = 'transform 1s ease-in-out';
        logoSliderRef.current.style.transform = `translateX(-${width}px)`;

        setTimeout(() => {
          if (logoSliderRef.current) {
            logoSliderRef.current.style.transition = 'none';
            logoSliderRef.current.style.transform = 'translateX(0)';
            logoSliderRef.current.appendChild(firstLogo.cloneNode(true));
            logoSliderRef.current.removeChild(firstLogo);
          }
        }, 1000);
      }
    };

    const logoInterval = setInterval(animateLogoSlider, 3000);
    return () => clearInterval(logoInterval);
  }, []);

  // Testimonial Slider Auto-rotation
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        (prevIndex + 1) % testimonialData.length
      );
    }, 5000);

    return () => clearInterval(slideInterval);
  }, []);

  // Manual navigation handlers
  const handlePrevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonialData.length - 1 : prevIndex - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % testimonialData.length
    );
  };

  return (
    <div className="relative bg-black text-white py-12 px-4 rounded-lg overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70 z-0"></div>

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Trusted by section */}
        <div className="text-center mb-2">
          <p className="text-gray-300">Trusted by 60+ Fortune 500s</p>
        </div>

        {/* Headline */}
        <div className="text-center mb-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Futurense Understands The Importance Of Alliances
          </h1>
          <p className="text-xl text-gray-300 mb-2">
            Find the Perfect Tech Expert for Your Needs
          </p>
          <p className="text-xl font-semibold mb-6">in Just 48 Hours!</p>
        </div>
            {/* Logo carousel */}
            <div className="mb-12 overflow-hidden">
          <div
            ref={logoSliderRef}
            className="flex items-center gap-8 transition-transform"
            style={{
              width: logoData.length * 150 + 'px',
            }}
          >
            {logoData.map((logo, index) => (
              <div
                key={index}
                className="w-32 h-16 flex-shrink-0 flex items-center justify-center"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={120}
                  height={60}
                  className="object-contain max-h-full filter brightness-0 invert"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative overflow-hidden">
          <div 
            ref={testimonialSliderRef}
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {testimonialData.map((testimonial, index) => (
              <div 
                key={index} 
                className="w-full flex-shrink-0 px-4"
                style={{ flex: '0 0 100%' }}
              >
                <div className="bg-gray-800 rounded-lg p-8 max-w-3xl mx-auto">
                  <div className="flex mb-4">
                    {renderStars(testimonial.rating)}
                  </div>
                  
                  <p className="text-gray-300 mb-6 text-xl italic">"{testimonial.text}"</p>
                  
                  <div className="flex items-center">
                    <Image 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full mr-6"
                    />
                    <div>
                      <h3 className="font-bold text-xl">{testimonial.name}</h3>
                      <p className="text-sm text-gray-400">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
