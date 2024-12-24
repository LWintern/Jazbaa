'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Twitter, Music, ChevronDown, ChevronUp } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { useState } from 'react'

interface Invester {
  name: string
  title: string
  followers: string
  image: string
  socials: {
    facebook?: string
    instagram?: string
    twitter?: string
    tiktok?: string
  }
}

// 2023 Investers data
const Investers2023: Invester[] = [
  {
    name: "CASEY NEISTAT",
    title: "Creator",
    followers: "16.5M",
    image: "https://media.licdn.com/dms/image/v2/D5622AQHHLKlXknV6CQ/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1723471140031?e=1737590400&v=beta&t=shVKIoui7OgsHrlGCUkxolrYCH3l6F7HlYkG7b_emJs",
    socials: {
      facebook: "#",
      instagram: "#"
    }
  },
  {
    name: "PRAJAKTA KOLI",
    title: "India's Biggest Female Content Creator",
    followers: "15M",
    image: "https://media.licdn.com/dms/image/v2/D5622AQE43gQCzeFkmQ/feedshare-shrink_1280/feedshare-shrink_1280/0/1723471139424?e=1737590400&v=beta&t=fm223IchA7_K1KCSWl4jBy4sK0RnzSN7s3hcqcbAYbs",
    socials: {
      facebook: "#",
      instagram: "#"
    }
  },
  {
    name: "ERIKA KULBERG",
    title: "Attorney and personal finance expert",
    followers: "5M",
    image: "https://media.licdn.com/dms/image/v2/D5622AQGzIkGfb4Fa0A/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1727435963707?e=1737590400&v=beta&t=zaBwjeLqIOzamlh95Nlu_RPT8KocaSVCUYBFqWVeEvc",
    socials: {
      facebook: "#",
      instagram: "#",
      tiktok: "#"
    }
  },
  {
    name: "BRYAN JOHNSON",
    title: "The Man Who Ages Backwards",
    followers: "1.3M",
    image: "https://media.licdn.com/dms/image/v2/D5622AQFEp74BR-lxYg/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1727851357915?e=1737590400&v=beta&t=sY2seTzW_33CizutwJNUqaYcg9eQOa7ZbzgPWODxsqw",
    socials: {
      instagram: "#",
      twitter: "#"
    }
  },
  {
    name: "ARUN MAINI",
    title: "The guy behind Mrwhosetheboss YouTube Channel",
    followers: "16M",
    image: "https://media.licdn.com/dms/image/v2/D5622AQFEp74BR-lxYg/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1727851357915?e=1737590400&v=beta&t=sY2seTzW_33CizutwJNUqaYcg9eQOa7ZbzgPWODxsqw",
    socials: {
      facebook: "#",
      instagram: "#",
      twitter: "#"
    }
  },
  {
    name: "STEVEN HE",
    title: "Creator Behind The World's Biggest Meme",
    followers: "18M",
    image: "https://media.licdn.com/dms/image/v2/D5622AQG0xi-av0ySbg/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1727851349027?e=1737590400&v=beta&t=jcULrFJa8yGoXH9VXkAouLx8bA7gnlH7lrfkbq0zEIU",
    socials: {
      instagram: "#",
      tiktok: "#"
    }
  }
]

// 2025 Investors data
const investors2025: Invester[] = [
  {
    name: "MARK CUBAN",
    title: "Shark Tank Investor & Entrepreneur",
    followers: "8.7M",
    image: "https://media.licdn.com/dms/image/v2/D5622AQHHLKlXknV6CQ/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1723471140031?e=1737590400&v=beta&t=shVKIoui7OgsHrlGCUkxolrYCH3l6F7HlYkG7b_emJs",
    socials: {
      twitter: "#",
      instagram: "#"
    }
  },
  {
    name: "CATHIE WOOD",
    title: "CEO of ARK Invest",
    followers: "1.5M",
    image: "https://media.licdn.com/dms/image/v2/D5622AQE43gQCzeFkmQ/feedshare-shrink_1280/feedshare-shrink_1280/0/1723471139424?e=1737590400&v=beta&t=fm223IchA7_K1KCSWl4jBy4sK0RnzSN7s3hcqcbAYbs",
    socials: {
      twitter: "#",
      instagram: "#"
    }
  },
  {
    name: "CHAMATH PALIHAPITIYA",
    title: "Venture Capitalist",
    followers: "1.2M",
    image: "https://media.licdn.com/dms/image/v2/D5622AQGzIkGfb4Fa0A/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1727435963707?e=1737590400&v=beta&t=zaBwjeLqIOzamlh95Nlu_RPT8KocaSVCUYBFqWVeEvc",
    socials: {
      twitter: "#"
    }
  },
  {
    name: "KEVIN O'LEARY",
    title: "Shark Tank Investor",
    followers: "3.2M",
    image: "https://media.licdn.com/dms/image/v2/D5622AQFEp74BR-lxYg/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1727851357915?e=1737590400&v=beta&t=sY2seTzW_33CizutwJNUqaYcg9eQOa7ZbzgPWODxsqw",
    socials: {
      twitter: "#",
      instagram: "#"
    }
  },
  {
    name: "GARY VAYNERCHUK",
    title: "CEO of VaynerMedia",
    followers: "10M",
    image: "https://media.licdn.com/dms/image/v2/D5622AQG0xi-av0ySbg/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1727851349027?e=1737590400&v=beta&t=jcULrFJa8yGoXH9VXkAouLx8bA7gnlH7lrfkbq0zEIU",
    socials: {
      facebook: "#",
      instagram: "#",
      twitter: "#"
    }
  },
  {
    name: "CHRIS SACCA",
    title: "Early Investor in Twitter & Uber",
    followers: "1.8M",
    image: "https://media.licdn.com/dms/image/v2/D5622AQHHLKlXknV6CQ/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1723471140031?e=1737590400&v=beta&t=shVKIoui7OgsHrlGCUkxolrYCH3l6F7HlYkG7b_emJs",
    socials: {
      twitter: "#"
    }
  }
]


const PersonCard = ({ person, type }: { person: Invester; type: 'investor' }) => (
  <Card className="overflow-hidden w-full border-2 rounded-xl hover:bg-red-100 hover:text-white transition-all duration-300 relative min-h-[280px]">
    <CardContent className="p-0 flex flex-col h-full">
      <div>
        <div className="aspect-square w-full rounded-xl h-32 bg-gradient-to-br from-blue-300 to-purple-200">
          <img
            src={person.image}
            alt={person.name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      {/* Main content */}
      <div className="p-2 flex-1">
        <h3 className="text-md font-bold">{person.name}</h3>
        <p className="text-gray-600 min-h-[3rem] text-xs">{person.title}</p>
      </div>

      {/* Bottom content */}
      <div className="p-2 border-t border-gray-100 mt-auto">
        <div className="flex items-center gap-2 mb-2">
          <Badge 
            variant="secondary" 
            className="bg-purple-100 text-purple-600 text-xs"
          >
            Investor
          </Badge>
          <span className="text-gray-600 font-medium text-xs">{person.followers}</span>
        </div>
        <div className="flex gap-3">
          {person.socials.facebook && (
            <Facebook className="w-3 h-3 text-gray-600" />
          )}
          {person.socials.instagram && (
            <Instagram className="w-3 h-3 text-gray-600" />
          )}
          {person.socials.twitter && (
            <Twitter className="w-3 h-3 text-gray-600" />
          )}
          {person.socials.tiktok && (
            <Music className="w-3 h-3 text-gray-600" />
          )}
        </div>
      </div>
    </CardContent>
  </Card>
)

// In the main component, update the section titles and mapping
export default function InvestersGrid() {
  const [showInvestors2025, setShowInvestors2025] = useState(false)

  return (
    <div className="relative pb-20 bg-gradient-to-b from-red-50 via-gray-50 to-red-50">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* 2023 Investors Section */}
        <div className="mb-20">
          <h1 className="text-2xl md:text-3xl font-bold text-center mb-4">
            SUMMER PROGRAM 2023 INVESTORS
          </h1>
          <h2 className="text-2xl md:text-xl text-gray-500 text-center mb-12">
            THE WORLD'S BIGGEST INVESTORS
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-6 gap-6">
            {investors2025.map((investor) => (
              <PersonCard key={investor.name} person={investor} type="investor" />
            ))}
          </div>
        </div>

        {/* 2025 Investors Section */}
        {showInvestors2025 && (
          <div className="mt-20 transition-all duration-300">
            <h1 className="text-2xl md:text-3xl font-bold text-center mb-4">
              THE 2025 INVESTORS
            </h1>
            <h2 className="text-2xl md:text-xl text-gray-500 text-center mb-12">
              MEET OUR UPCOMING INDUSTRY LEADERS
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-6 gap-6">
              {investors2025.map((investor) => (
                <PersonCard key={investor.name} person={investor} type="investor" />
              ))}
            </div>
          </div>
        )}

        {/* Toggle Button */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-8">
          <Button
            onClick={() => setShowInvestors2025(!showInvestors2025)}
            className="bg-black text-white hover:bg-gray-800 rounded-full px-6 py-2 flex items-center gap-2 transition-all duration-300"
          >
            {showInvestors2025 ? 'Hide 2025 Investors' : 'View 2025 Investors'}
            {showInvestors2025 ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </Button>
        </div>
      </div>
    </div>
  )
}