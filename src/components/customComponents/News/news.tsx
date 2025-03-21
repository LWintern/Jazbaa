"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const newsData = [
  {
    title: "Futurense's Strategic Partnerships Are Shaping the Future of",
    description: "Lokmat Times",
    date: "28th March, 2023",
    image: "/assets/news1.png",
    logo: "/assets/cources/aws.jpg",
  },
  {
    title: "Futurense is Bridging IIT/IIM and Top US Universities for Master’s Pursuits",
    description: "Mid-Day",
    date: "15th April, 2023",
    image: "/assets/news2.png",
    logo: "/assets/news2.png",
  },
  {
    title: "Futurense & IIT Jodhpur launch India’s first tech-MBA",
    description: "The Statesman",
    date: "10th May, 2023",
    image: "/assets/news3.png",
    logo: "/assets/news3.png",
  },
  {
    title: "Futurense's Global Tech Initiative Transforming Careers",
    description: "Economic Times",
    date: "1st June, 2023",
    image: "/assets/news2.png",
    logo: "/assets/logos/economic.png",
  },
  {
    title: "AI & Data Science Bootcamp: A Game Changer by Futurense",
    description: "Hindustan Times",
    date: "15th July, 2023",
    image: "/assets/news2.png",
    logo: "/assets/logos/hindustan.png",
  },
  {
    title: "Futurense’s AI-Powered Upskilling Model Disrupts Ed-Tech",
    description: "Business Standard",
    date: "5th August, 2023",
    image: "/assets/news2.png",
    logo: "/assets/logos/business.png",
  },
  {
    title: "Bridging the Skill Gap: How Futurense is Reshaping Careers",
    description: "India Today",
    date: "20th September, 2023",
    image: "/assets/news3.png",
    logo: "/assets/logos/indiatoday.png",
  },
  {
    title: "Futurense Revolutionizing Tech Careers with Industry-Led Learning",
    description: "Times Now",
    date: "10th October, 2023",
    image: "/assets/news3.png",
    logo: "/assets/logos/timesnow.png",
  },
];

export default function NewsCarousel() {
  return (
    <div className="max-w-6xl mx-auto py-12 relative">
      <h1 className="text-3xl pb-8 text-center font-bold">
        Media <span className="text-red-500">Spotlight</span>
      </h1>

      {/* Custom Navigation Buttons */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
        <button className="swiper-button-prev-custom text-3xl text-blue-700 hover:text-white">
          ❮
        </button>
      </div>
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
        <button className="swiper-button-next-custom text-3xl text-blue-700 hover:text-white">
          ❯
        </button>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        autoplay={{ delay: 3000 }}
        pagination={{ el: ".swiper-pagination-custom", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        breakpoints={{
          320: { slidesPerView: 1 }, // Mobile
          768: { slidesPerView: 2 }, // Tablet
          1024: { slidesPerView: 3 }, // Desktop
        }}
        className="relative"
      >
        {newsData.map((news, index) => (
          <SwiperSlide key={index}>
            <div className="bg-black text-white rounded-lg overflow-hidden border border-gray-800 shadow-lg">
              {/* Image Section */}
              <div className="relative mx-4 my-4 h-40 rounded-lg border border-gray-800  bg-gray-100 ">
                <Image src={news.image} alt="News Image" layout="fill" objectFit="cover" className="transition-transform rounded-lg duration-300 hover:scale-105" />
              </div>

              {/* Content */}
              <div className="p-4">
                <h2 className="text-lg font-bold">{news.title}</h2>
                <p className="text-gray-400 text-sm mt-2">{news.description}</p>

                {/* Footer */}
                <div className="flex items-center justify-between mt-6">
                  <span className="text-xs text-gray-500">{news.date}</span>
                  <div className="text-sm text-red-500 cursor-pointer hover:text-red-400">
                    Learn more →
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination */}
      <div className="swiper-pagination-custom flex justify-center mt-6"></div>
    </div>
  );
}
