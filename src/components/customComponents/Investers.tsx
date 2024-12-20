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
  ,
  {
    name: "ARUN MAINI",
    title: "The guy behind Mrwhosetheboss YouTube Channel",
    followers: "16M",
    image: "https://media.licdn.com/dms/image/v2/D5622AQGzIkGfb4Fa0A/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1727435963707?e=1737590400&v=beta&t=zaBwjeLqIOzamlh95Nlu_RPT8KocaSVCUYBFqWVeEvc",
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
    image: "https://media.licdn.com/dms/image/v2/D5622AQE43gQCzeFkmQ/feedshare-shrink_1280/feedshare-shrink_1280/0/1723471139424?e=1737590400&v=beta&t=fm223IchA7_K1KCSWl4jBy4sK0RnzSN7s3hcqcbAYbs",
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
          <Card key={speaker.name} className="overflow-hidden h-1/3 w-full border-2 rounded-xl h-full hover:bg-red-100 hover:text-white   ">
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

