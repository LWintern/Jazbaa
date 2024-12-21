'use client'

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PlayCircle, ChevronLeft, ChevronRight, X } from "lucide-react"
import { useRef, useState, useEffect } from 'react' // Added useEffect

interface CourseCard {
  title: string
  subtitle: string
  description: string
  image: string
  highlights: string[]
  videoUrl: string
}

const courseCards: CourseCard[] = [
  {
    title: "Learn Marketing From India's",
    subtitle: "Most Viral Brands",
    description: "Students master advertising by pitching campaigns to Aman Gupta and Tanmay Bhatt, receiving sharp, no-nonsense feedback.",
    image: "https://media.licdn.com/dms/image/v2/D5603AQHh66vZr9QxIA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1702715004665?e=1740009600&v=beta&t=6DZCrftxMaicL_s5X9bACvNq9u3tn4-KOLU7k4-0q-c",
    highlights: ["pitching campaigns to Aman Gupta", "Tanmay Bhatt"],
    videoUrl: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7237410573200633856"
  },
  {
    title: "Learn Marketing From India's",
    subtitle: "Most Viral Brands",
    description: "Students master advertising by pitching campaigns to Aman Gupta and Tanmay Bhatt, receiving sharp, no-nonsense feedback.",
    image: "https://media.licdn.com/dms/image/v2/D5603AQHh66vZr9QxIA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1702715004665?e=1740009600&v=beta&t=6DZCrftxMaicL_s5X9bACvNq9u3tn4-KOLU7k4-0q-c",
    highlights: ["pitching campaigns to Aman Gupta", "Tanmay Bhatt"],
    videoUrl: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7237410573200633856"
  },
  {
    title: "Learn Marketing From India's",
    subtitle: "Most Viral Brands",
    description: "Students master advertising by pitching campaigns to Aman Gupta and Tanmay Bhatt, receiving sharp, no-nonsense feedback.",
    image: "https://media.licdn.com/dms/image/v2/D5603AQHh66vZr9QxIA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1702715004665?e=1740009600&v=beta&t=6DZCrftxMaicL_s5X9bACvNq9u3tn4-KOLU7k4-0q-c",
    highlights: ["pitching campaigns to Aman Gupta", "Tanmay Bhatt"],
    videoUrl: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7237410573200633856"
  },
  {
    title: "Learn Marketing From India's",
    subtitle: "Most Viral Brands",
    description: "Students master advertising by pitching campaigns to Aman Gupta and Tanmay Bhatt, receiving sharp, no-nonsense feedback.",
    image: "https://media.licdn.com/dms/image/v2/D5603AQHh66vZr9QxIA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1702715004665?e=1740009600&v=beta&t=6DZCrftxMaicL_s5X9bACvNq9u3tn4-KOLU7k4-0q-c",
    highlights: ["pitching campaigns to Aman Gupta", "Tanmay Bhatt"],
    videoUrl: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7237410573200633856"
  },
  {
    title: "Learn Marketing From India's",
    subtitle: "Most Viral Brands",
    description: "Students master advertising by pitching campaigns to Aman Gupta and Tanmay Bhatt, receiving sharp, no-nonsense feedback.",
    image: "https://media.licdn.com/dms/image/v2/D5603AQHh66vZr9QxIA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1702715004665?e=1740009600&v=beta&t=6DZCrftxMaicL_s5X9bACvNq9u3tn4-KOLU7k4-0q-c",
    highlights: ["pitching campaigns to Aman Gupta", "Tanmay Bhatt"],
    videoUrl: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7237410573200633856"
  },
  {
    title: "Learn Marketing From India's",
    subtitle: "Most Viral Brands",
    description: "Students master advertising by pitching campaigns to Aman Gupta and Tanmay Bhatt, receiving sharp, no-nonsense feedback.",
    image: "https://media.licdn.com/dms/image/v2/D5603AQHh66vZr9QxIA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1702715004665?e=1740009600&v=beta&t=6DZCrftxMaicL_s5X9bACvNq9u3tn4-KOLU7k4-0q-c",
    highlights: ["pitching campaigns to Aman Gupta", "Tanmay Bhatt"],
    videoUrl: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7237410573200633856"
  },
  {
    title: "Learn Marketing From India's",
    subtitle: "Most Viral Brands",
    description: "Students master advertising by pitching campaigns to Aman Gupta and Tanmay Bhatt, receiving sharp, no-nonsense feedback.",
    image: "https://media.licdn.com/dms/image/v2/D5603AQHh66vZr9QxIA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1702715004665?e=1740009600&v=beta&t=6DZCrftxMaicL_s5X9bACvNq9u3tn4-KOLU7k4-0q-c",
    highlights: ["pitching campaigns to Aman Gupta", "Tanmay Bhatt"],
    videoUrl: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7237410573200633856"
  },
  {
    title: "Learn Marketing From India's",
    subtitle: "Most Viral Brands",
    description: "Students master advertising by pitching campaigns to Aman Gupta and Tanmay Bhatt, receiving sharp, no-nonsense feedback.",
    image: "https://media.licdn.com/dms/image/v2/D5603AQHh66vZr9QxIA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1702715004665?e=1740009600&v=beta&t=6DZCrftxMaicL_s5X9bACvNq9u3tn4-KOLU7k4-0q-c",
    highlights: ["pitching campaigns to Aman Gupta", "Tanmay Bhatt"],
    videoUrl: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7237410573200633856"
  },
  // ... other cards with videoUrl
]

const VideoModal = ({ videoUrl, onClose }: { videoUrl: string; onClose: () => void }) => {
  // Add useEffect to handle ESC key
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [onClose])

  return (
    <div 
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
      onClick={onClose} // Close on backdrop click
    >
      <div 
        className="relative w-full max-w-4xl aspect-video bg-black rounded-lg"
        onClick={e => e.stopPropagation()} // Prevent closing when clicking the video
      >
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
        >
          <X className="h-8 w-8" />
        </button>
        <iframe
          src={`${videoUrl}?autoplay=1`}
          className="w-full h-full rounded-lg"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}

export default function IndustryExpertSpeech() {
  const carouselRef = useRef<HTMLDivElement>(null)
  const [showLeftScroll, setShowLeftScroll] = useState(false)
  const [showRightScroll, setShowRightScroll] = useState(true)
  const [activeVideo, setActiveVideo] = useState<string | null>(null)

  // Scroll function
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

  // Handle scroll function
  const handleScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current
      setShowLeftScroll(scrollLeft > 0)
      setShowRightScroll(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  // Add useEffect to check initial scroll buttons visibility
  useEffect(() => {
    handleScroll()
    // Add resize listener to handle scroll buttons visibility on window resize
    window.addEventListener('resize', handleScroll)
    return () => window.removeEventListener('resize', handleScroll)
  }, [])

  return (
    <div className="bg-white py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-yellow-500">✦</span>
            <span className="text-gray-500 uppercase text-sm font-medium">HANDS-ON & INDUSTRY-DRIVEN</span>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Testimonials of Investers and Visitors in the Jazbaa
            </h2>
            
            <div className="space-y-4">
              <p className="text-gray-600 flex items-center text-sm gap-2">
                <span className="text-yellow-500">✦</span>
                Courses taught in collaboration with top brands like KPMG, Schbang, Cars24, etc.
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
                className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 flex-shrink-0 w-full md:w-[calc(28.333%-1rem)]"
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
                        onClick={() => setActiveVideo(card.videoUrl)}
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

        {/* Video Modal */}
        {activeVideo && (
          <VideoModal
            videoUrl={activeVideo}
            onClose={() => setActiveVideo(null)}
          />
        )}
      </div>
    </div>
  )
}