import Image from "next/image"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface NewsItem {
  source: string
  imageUrl: string
  alt: string
}

const newsItems: NewsItem[] = [
  {
    source: "PR Newswire",
    imageUrl: "/assets/news1.png",
    alt: "PR Newswire article about Masters' Union placement report"
  },
  {
    source: "millennium post",
    imageUrl: "/assets/news2.png",
    alt: "Millennium Post article about future skills"
  },
  {
    source: "CIO Today",
    imageUrl: "/assets/news3.png",
    alt: "CIO Today article about Intersect 3.0"
  },
  {
    source: "BW BUSINESSWORLD",
    imageUrl: "/placeholder.svg?height=400&width=600",
    alt: "Business World article about PwC India partnership"
  },
  {
    source: "The Economic Times",
    imageUrl: "/placeholder.svg?height=400&width=600",
    alt: "Economic Times article about MBA cohort"
  },
  {
    source: "Business India",
    imageUrl: "/placeholder.svg?height=400&width=600",
    alt: "Business India article about future careers"
  }
]

export default function InNews() {
  return (
    <div className="bg-gray-100 py-12  p-6 md:p-8 lg:p-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
         
          <h2 className="text-black text-2xl md:text-3xl font-bold">
            In the <span className="text-[#ff0000]"> News</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
          {newsItems.map((item, index) => (
            <Card key={index} className="bg-gray-200 hover:bg-gray-200 transition-colors mx-auto overflow-hidden w-[90%]">
              <CardHeader className="p-4 border-b-2 border-[#ff0000]">
                <div className="font-semibold  text-zinc-800">
                  {item.source}
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={item.imageUrl}
                    alt={item.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

