import { Button  } from "@/components/ui/button";
import { Card, CardContent  } from "@/components/ui/card";
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface EventCard {
  title: string;
  location: string;
  image: string;
}

const events: EventCard[] = [
  {
    title: "Summer 2023",
    location: "Jaipur",
    image: "https://media.licdn.com/dms/image/v2/D5622AQFEp74BR-lxYg/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1727851357915?e=1737590400&v=beta&t=sY2seTzW_33CizutwJNUqaYcg9eQOa7ZbzgPWODxsqw",
  },
  {
    title: "Summer 2022",
    location: "Jaipur",
    image: "https://media.licdn.com/dms/image/v2/D5622AQG0xi-av0ySbg/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1727851349027?e=1737590400&v=beta&t=jcULrFJa8yGoXH9VXkAouLx8bA7gnlH7lrfkbq0zEIU",
  },
  {
    title: "Summer 2021",
    location: "Jaipur",
    image: "https://media.licdn.com/dms/image/v2/D5622AQGzIkGfb4Fa0A/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1727435963707?e=1737590400&v=beta&t=zaBwjeLqIOzamlh95Nlu_RPT8KocaSVCUYBFqWVeEvc",
  },
  {
    title: "Summer 2020",
    location: "Jaipur",
    image: "https://media.licdn.com/dms/image/v2/D5622AQE43gQCzeFkmQ/feedshare-shrink_1280/feedshare-shrink_1280/0/1723471139424?e=1737590400&v=beta&t=fm223IchA7_K1KCSWl4jBy4sK0RnzSN7s3hcqcbAYbs",
  },
  {
    title: "Summer 2019",
    location: "Jaipur",
    image: "https://media.licdn.com/dms/image/v2/D5622AQHHLKlXknV6CQ/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1723471140031?e=1737590400&v=beta&t=shVKIoui7OgsHrlGCUkxolrYCH3l6F7HlYkG7b_emJs",
  },
];

export default function RecapPreviousYear() {
  return (
    <div className="">
      <div className="container mx-auto max-w-5xl px-4 py-12 space-y-8">
        {/* Main Video Section */}
        <div className="relative rounded-3xl overflow-hidden">
          <video 
            className="w-full aspect-[16/8] object-cover"
            poster="/placeholder.svg?height=600&width=1200"
            autoPlay
            loop
            muted
          >
            <source src="https://res.cloudinary.com/dmbxrhtoj/video/upload/v1732112346/Square_Root_Of_PI_π_2022_-_Knowledge_Oneness_rlx7zq.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {/* Video Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent p-8 flex flex-col justify-between">
            <div className="space-y-2">
              <h1 className="md:text-6xl lg:text-6xl text-xl font-bold text-white">
                2024
                <br />
                RECAP
                <br />
                VIDEO
              </h1>
            </div>
            <p className="text-white text-sm lg:text-xl  md:text-xl">We have incredible Investers coming</p>
          </div>
          
          {/* Play Button */}
          <Button 
            size="icon" 
            className="absolute top-4 right-4 w-16 h-16 rounded-full bg-red-500 hover:bg-red-600"
          >
            <Play className="h-8 w-8 text-white" />
          </Button>
        </div>

        {/* Event Cards Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {events.map((event, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/3 lg:basis-1/3">
                <Card className="relative overflow-hidden rounded-xl">
                  <CardContent className="p-0">
                    <div className="relative aspect-square">
                      <img
                        src={event.image}
                        alt={`${event.title} ${event.location}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                        <h3 className="text-white text-2xl font-bold">{event.title}</h3>
                        <p className="text-red-400 text-xl font-semibold">{event.location}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute top-1/2 -translate-y-1/2 md:-left-8 left-3 bg-white hover:bg-white md:border-4 border-red-400 text-[#ff0000] flex items-center justify-center md:w-14 md:h-14 rounded-full">
            <ChevronLeft className="md:h-5 md:w-5 lg:w-5 lg:h-5 h-2 w-2" />
          </CarouselPrevious>
          <CarouselNext className="absolute top-1/2 -translate-y-1/2 md:-right-8 right-3 bg-white hover:bg-white md:border-4 border-red-400 text-[#ff0000] flex items-center justify-center md:w-14 md:h-14 rounded-full">
            <ChevronRight className="h-5 w-5" />
          </CarouselNext>
        </Carousel>
      </div>
    </div>
  );
}
