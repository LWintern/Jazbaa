'use client'

import { useState } from 'react'

export default function Footer() {
  const [hoveredWord, setHoveredWord] = useState<string | null>(null)

  return (
    <div className="bg-black min-h-screen max-w-7xl mx-auto p-4 flex items-center justify-start ">
      <div className="text-center">
        <h1 className=" text-[180px] leading-[0.85] font-bold tracking-tighter">
          <span 
            className={`text-transparent transition-all duration-300 ${
              hoveredWord === 'THE' 
                ? '[-webkit-text-stroke:4px_#ff0000]' 
                : '[-webkit-text-stroke:4px_#333333]'
            }`}
            onMouseEnter={() => setHoveredWord('THE')}
            onMouseLeave={() => setHoveredWord(null)}
          >
            THE&nbsp;
          </span> 
          <span 
            className={`transition-colors   duration-300 ${
              hoveredWord === 'CREATOR' ? 'text-[#ff0000]' : 'text-gray-700'
            }`}
            onMouseEnter={() => setHoveredWord('CREATOR')}
            onMouseLeave={() => setHoveredWord(null)}
            
          >
            CREATOR
          </span> <br />
          <span 
            className={`text-transparent transition-all duration-300 ${
              hoveredWord === 'GATHERING' 
                ? '[-webkit-text-stroke:4px_#ff0000]' 
                : '[-webkit-text-stroke:4px_#333333]'
            }`}
            onMouseEnter={() => setHoveredWord('GATHERING')}
            onMouseLeave={() => setHoveredWord(null)}
            style={{
                letterSpacing: '12px', // Adjust letter spacing for increased width
                padding: '0 20px', // Add padding to visually widen
              }}
          >
            GATHERING
          </span>
        </h1>
      </div>
    </div>
  )
}

