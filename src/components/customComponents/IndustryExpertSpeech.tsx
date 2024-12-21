'use client'

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PlayCircle, ChevronLeft, ChevronRight } from "lucide-react"
import { useRef, useState } from 'react'

interface CourseCard {
  title: string
  subtitle: string
  description: string
  image: string
  highlights: string[]
}

// Add more cards here if needed
const courseCards: CourseCard[] = [
  {
    title: "Learn Marketing From India's",
    subtitle: "Most Viral Brands",
    description: "Students master advertising by pitching campaigns to Aman Gupta and Tanmay Bhatt, receiving sharp, no-nonsense feedback.",
    image: "/marketing-class.jpg",
    highlights: ["pitching campaigns to Aman Gupta", "Tanmay Bhatt"]
  },
  {
    title: "Master Product Skills With",
    subtitle: "Microsoft's Leadership",
    description: "Aspiring PMs solve real-world challenges at tech giant's office, facing tough critiques on their ideas—and a shot at an internship.",
    image: "/microsoft-class.jpg",
    highlights: ["a shot at an internship"]
  },
  {
    title: "Learn Finance by Managing a",
    subtitle: "₹5 Crore Investment Fund",
    description: "Students learn by investing in diverse assets: Crypto, Equities, Debt, Real Estate, and of course, Startups. Real-world experience, real impact.",
    image: "/finance-class.jpg",
    highlights: ["Crypto, Equities, Debt, Real Estate", "Startups"]
  },
  // Adding a fourth card to demonstrate scrolling
  {
    title: "Digital Marketing Mastery",
    subtitle: "With Industry Leaders",
    description: "Learn advanced digital marketing strategies from industry experts and implement real campaigns with actual budgets.",
    image: "/digital-marketing.jpg",
    highlights: ["real campaigns", "actual budgets"]
  },
  // Adding a fifth card
  {
    title: "Entrepreneurship Workshop",
    subtitle: "Start-up Fundamentals",
    description: "Get hands-on experience in building a startup from scratch with guidance from successful founders and venture capitalists.",
    image: "/entrepreneurship.jpg",
    highlights: ["successful founders", "venture capitalists"]
  }
]

export default function IndustryExpertSpeech() {
  const carouselRef = useRef<HTMLDivElement>(null)
  const [showLeftScroll, setShowLeftScroll] = useState(false)
  const [showRightScroll, setShowRightScroll] = useState(true)

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 400
      const newScrollLeft = direction === 'left' 
        ? carouselRef.current.scrollLeft - scrollAmount
        : carouselRef.current.scrollLeft + scrollAmount
      
      carouselRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      })
    }
  }

  const handleScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current
      setShowLeftScroll(scrollLeft > 0)
      setShowRightScroll(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  return (
    <div className="bg-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-yellow-500">✦</span>
            <span className="text-gray-500 uppercase text-sm font-medium">HANDS-ON & INDUSTRY-DRIVEN</span>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Learn Business With Our Industry-Integrated Curriculum
            </h2>
            
            <div className="space-y-4">
              <p className="text-gray-600 flex items-center text-sm gap-2">
                <span className="text-yellow-500">✦</span>
                Courses taught in collaboration with  top brands like KPMG, Schbang, Cars24, etc.
              </p>
              <p className="text-gray-600 flex items-center text-sm gap-2">
                <span className="text-yellow-500">✦</span>
                Work on live projects, shadow CEOs, and even manage an investment fund
              </p>
            </div>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Left Scroll Button */}
          {showLeftScroll && (
            <button 
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 rounded-full p-2 shadow-lg hover:bg-white transition-all -ml-4"
            >
              <ChevronLeft className="h-6 w-6 text-gray-900" />
            </button>
          )}

          {/* Cards Container */}
          <div 
            ref={carouselRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto gap-6 scroll-smooth hide-scrollbar"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {courseCards.map((card, index) => (
              <Card 
                key={index} 
                className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 flex-shrink-0 w-full md:w-[calc(33.333%-1rem)]"
              >
                <div className="relative">
                  <div className="aspect-video relative">
                    <img 
                      src={card.image} 
                      alt={card.title}
                      className="w-full h-full object-cover rounded-t-lg"
                    />
                    <div className="absolute inset-0 bg-black/20 rounded-t-lg">
                      <Button 
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/90 hover:bg-white"
                        variant="secondary"
                        size="icon"
                      >
                        <PlayCircle className="h-8 w-8 text-gray-900" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{card.title}</h3>
                      <p className="text-yellow-600 font-medium">{card.subtitle}</p>
                    </div>
                    
                    <p className="text-gray-600">
                      {card.description.split(new RegExp(`(${card.highlights.join('|')})`)).map((part, i) => 
                        card.highlights.includes(part) 
                          ? <span key={i} className="text-gray-900 font-semibold">{part}</span>
                          : part
                      )}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Right Scroll Button */}
          {showRightScroll && (
            <button 
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 rounded-full p-2 shadow-lg hover:bg-white transition-all -mr-4"
            >
              <ChevronRight className="h-6 w-6 text-gray-900" />
            </button>
          )}
        </div>

        {/* Large "1" Background Number */}
        <div className="absolute right-0 top-0 text-gray-100 text-[20rem] font-bold opacity-20 pointer-events-none">
          1
        </div>
      </div>
    </div>
  );
}