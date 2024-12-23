import React from "react";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const PreJazbaa = () => {
  // Step 1: Define the card data
  const cardData = [
    {
      src: "/assets/HeroImages/hero1.png",
      title: "Amazing Tailwindcss Grid Layout Examples",
      description:
        "Grids are cool, but Tailwindcss grids are cooler. In this article, we will learn how to create amazing Grid layouts with Tailwindcss grid and React.",
      date: "28th March, 2023",
    },
    {
      src: "/assets/HeroImages/hero2.png",
      title: "Mastering Flexbox with Tailwindcss",
      description:
        "Flexbox layouts simplified with Tailwindcss. Learn how to create responsive layouts using the power of Flexbox.",
      date: "15th April, 2023",
    },
    {
      src: "/assets/HeroImages/hero3.png",
      title: "Tailwindcss Typography Plugin Mastering ",
      description:
        "Grids are cool, but Tailwindcss grids are cooler. In this article, we will learn how to create amazing Grid layouts with Tailwindcss grid and React.",
      date: "10th May, 2023",
    },
  ];

  return (
    <>
      {/* Step 2: Render the cards dynamically */}
      <div className="max-w-6xl mx-auto py-12">
        <div className="w-full p-4 mx-auto">

        <h1 className="text-3xl pb-8 text-center font-bold ">Pre <span className="text-[#ff0000] ">Jazbaa</span> </h1>
        </div>
     
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        {cardData.map((card, index) => (
          <Card key={index} className="w-full max-w-md overflow-hidden">
            {/* Top Section */}
            <div className="relative bg-blue-600 p-0 h-[200px]">
              <img src={card.src} className="w-full h-full" alt={card.title} />
            </div>

            {/* Bottom Section */}
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-bold">{card.title}</h3>
              <p className="text-muted-foreground">{card.description}</p>
              <div className="flex items-center justify-between">
                <time className="text-sm text-muted-foreground">{card.date}</time>
                <Button variant="default" size="sm">
                  Read More
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
      </div>
    </>
  );
};

export default PreJazbaa;
