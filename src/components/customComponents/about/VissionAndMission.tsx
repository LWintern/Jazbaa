'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function VisionMission() {
  const [activeTab, setActiveTab] = useState<'Present' | 'Future'>('Present')

  return (
    <div className={`max-w-full mx-auto p-6  ${activeTab==='Present' ? 'bg-white' : 'bg-black'}`}>
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
            <div className="space-y-4">
              <h2 className="text-3xl  leading-tight">
              Transforming Engineers into the Tech-
nology Creators by developing an entre-
preneurial mindset and inculating tech-
nical competencies to innovate and pro-
duce 
{' '}
                <span className="">products accepted globally</span>
              </h2>
              <p className="text-gray-600 font-bold">"Why" Linux World Exists</p>
            </div>
            <div className="space-y-6">
              <Image
                src="/assets/event-gallery/event-gallery-1.jpg"
                alt="Education Model"
                width={500}
                height={300}
                className="rounded-lg w-full"
              />
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
                  Transforming Engineers into the Tech-
nology Creators by developing an entre-
preneurial mindset and inculating tech-
nical competencies to innovate and pro-
duce products accepted globally
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
            <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-white leading-tight">

              To build visionaries from Engineering
Students and major contributions to-
wards the technological growth of our
nation. Soon Indians to be known as

                {' '}
                <span className="font-white">"Creators in the Technology Space"</span>
              </h2>
              <p className="text-white">"Why" Linux World Exists</p>
            </div>
            <div className="space-y-6">
              <Image
                src="/assets/event-gallery/event-gallery-2.jpg"
                alt="Education Model"
                width={500}
                height={300}
                className="rounded-lg w-full"
              />
              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <span className="text-xl font-light text-white">+</span>
                  <p className="text-white">
                  To build visionaries from Engineering
Students and major contributions to-
wards the technological growth of our
nation. Soon Indians to be known as
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-xl font-light text-white">+</span>
                  <p className="text-white">
                  To build visionaries from Engineering
Students and major contributions to-
wards the technological growth of our
nation. Soon Indians to be known as
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

