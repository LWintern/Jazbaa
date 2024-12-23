'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function VisionMission() {
  const [activeTab, setActiveTab] = useState<'Present' | 'Future'>('Present')

  return (
    <div className={`max-w-full mx-auto p-6 ${activeTab==='Present' ? 'bg-gray-100' : 'bg-black'}`}>
      {/* Tab Toggle */}
      <div className='max-w-6xl mx-auto'>
        <div className="inline-flex rounded-full p-1 bg-gradient-to-r from-[#5CD4CC] via-[#FFD66B] to-[#FF9051]">
          <button
            onClick={() => setActiveTab('Present')}
            className={`px-8 py-2 rounded-full text-sm font-medium transition-all ${
              activeTab === 'Present'
                ? 'bg-white shadow-sm'
                : 'text-white hover:bg-white/10'
            }`}
          >
            Present
          </button>
          <button
            onClick={() => setActiveTab('Future')}
            className={`px-8 py-2 rounded-full text-sm font-medium transition-all ${
              activeTab === 'Future'
                ? 'bg-white shadow-sm'
                : 'text-white hover:bg-white/10'
            }`}
          >
            Future
          </button>
        </div>

        {/* Content */}
        <div className="mt-8">
          {activeTab === 'Present' ? (
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              {/* Left side with images */}
              <div className="space-y-6">
                <div className="relative h-[200px] md:h-[250px] w-full">
                  <Image
                    src="/assets/event-gallery/event-gallery-1.jpg"
                    alt="Education Model"
                    fill
                    className="rounded-lg object-cover"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative h-[100px] md:h-[120px]">
                    <Image
                      src="/assets/event-gallery/event-gallery-1.jpg"
                      alt="Additional Image 1"
                      fill
                      className="rounded-lg object-cover"
                    />
                  </div>
                  <div className="relative h-[100px] md:h-[120px]">
                    <Image
                      src="/assets/event-gallery/event-gallery-1.jpg"
                      alt="Additional Image 2"
                      fill
                      className="rounded-lg object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Right side content */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <h2 className="text-2xl leading-tight">
                    Transforming Engineers into the Technology Creators by developing an entrepreneurial mindset and inculating technical competencies to innovate and produce products accepted globally
                  </h2>
                  <p className="text-gray-600">"Why" Linux World Exists</p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-2">
                    <span className="text-xl font-light text-gray-400">+</span>
                    <p className="text-gray-600">
                      The age-old education model is built on memorization, conformity & indoctrination
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-xl font-light text-gray-400">+</span>
                    <p className="text-gray-600">
                      Transforming Engineers into the Technology Creators by developing an entrepreneurial mindset and inculating technical competencies to innovate and produce products accepted globally
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              {/* Left side with images */}
              <div className="space-y-6">
                <div className="relative h-[200px] md:h-[250px] w-full">
                  <Image
                    src="/assets/event-gallery/event-gallery-2.jpg"
                    alt="Education Model"
                    fill
                    className="rounded-lg object-cover"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative h-[100px] md:h-[120px]">
                    <Image
                      src="/assets/event-gallery/event-gallery-2.jpg"
                      alt="Additional Image 1"
                      fill
                      className="rounded-lg object-cover"
                    />
                  </div>
                  <div className="relative h-[100px] md:h-[120px]">
                    <Image
                      src="/assets/event-gallery/event-gallery-2.jpg"
                      alt="Additional Image 2"
                      fill
                      className="rounded-lg object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Right side content */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <h2 className="text-2xl text-white leading-tight">
                    To build visionaries from Engineering Students and major contributions towards the technological growth of our nation. Soon Indians to be known as{' '}
                    <span className="font-white">"Creators in the Technology Space"</span>
                  </h2>
                  <p className="text-white">"Why" Linux World Exists</p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-2">
                    <span className="text-xl font-light text-white">+</span>
                    <p className="text-white">
                      To build visionaries from Engineering Students and major contributions towards the technological growth of our nation. Soon Indians to be known as
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-xl font-light text-white">+</span>
                    <p className="text-white">
                      To build visionaries from Engineering Students and major contributions towards the technological growth of our nation. Soon Indians to be known as
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}