import { Card, CardContent } from "@/components/ui/card"
import { Facebook, Instagram, Twitter, Music } from 'lucide-react'
import { Badge } from "@/components/ui/badge"

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

const speakers: Invester[] = [
  {
    name: "CASEY NEISTAT",
    title: "Creator",
    followers: "16.5M",
    image: "/placeholder.svg?height=400&width=400",
    socials: {
      facebook: "#",
      instagram: "#"
    }
  },
  {
    name: "PRAJAKTA KOLI",
    title: "India's Biggest Female Content Creator",
    followers: "15M",
    image: "/placeholder.svg?height=400&width=400",
    socials: {
      facebook: "#",
      instagram: "#"
    }
  },
  {
    name: "ERIKA KULBERG",
    title: "Attorney and personal finance expert",
    followers: "5M",
    image: "/placeholder.svg?height=400&width=400",
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
    image: "/placeholder.svg?height=400&width=400",
    socials: {
      instagram: "#",
      twitter: "#"
    }
  },
  {
    name: "ARUN MAINI",
    title: "The guy behind Mrwhosetheboss YouTube Channel",
    followers: "16M",
    image: "/placeholder.svg?height=400&width=400",
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
    image: "/placeholder.svg?height=400&width=400",
    socials: {
      instagram: "#",
      tiktok: "#"
    }
  }
  ,
  {
    name: "ARUN MAINI",
    title: "The guy behind Mrwhosetheboss YouTube Channel",
    followers: "16M",
    image: "/placeholder.svg?height=400&width=400",
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
    image: "/placeholder.svg?height=400&width=400",
    socials: {
      instagram: "#",
      tiktok: "#"
    }
  }
]

export default function InvestersGrid() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-4">
        SUMMER PROGRAM 2023 SPEAKERS
      </h1>
      <h2 className="text-2xl md:text-xl text-gray-500 text-center mb-12">
        THE WORLD'S BIGGEST CONTENT CREATORS
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-6  lg:grid-cols-6 gap-6">
        {speakers.map((speaker) => (
          <Card key={speaker.name} className="overflow-hidden h-1/3 w-full border-2 rounded-xl h-full hover:bg-black hover:text-white   ">
            <CardContent className="p-0">
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-purple-300 to-orange-200 w-full rounded-xl h-32 ">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-full object-cover "
                  />
                </div>
              </div>
              <div className="p-2 space-y-2">
                <h3 className="text-md font-bold ">{speaker.name}</h3>
                <p className="text-gray-600 min-h-[3rem] text-xs ">{speaker.title}</p>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="bg-sky-100 text-sky-600 text-xs">
                    Speaker
                  </Badge>
                  <span className="text-gray-600 font-medium text-xs">{speaker.followers}</span>
                </div>
                <div className="flex gap-3">
                  {speaker.socials.facebook && (
                    <Facebook className="w-3 h-3 text-gray-600" />
                  )}
                  {speaker.socials.instagram && (
                    <Instagram className="w-3 h-3 text-gray-600" />
                  )}
                  {speaker.socials.twitter && (
                    <Twitter className="w-3 h-3 text-gray-600" />
                  )}
                  {speaker.socials.tiktok && (
                    <Music className="w-3 h-3 text-gray-600" />
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

