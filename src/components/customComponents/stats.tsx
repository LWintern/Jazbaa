import React from 'react';

export default function JazbaaInvestorGrid() {
  const cardsContent = [
    {
      count: "65+",
      title: "Top - Notch angel investors",
      description:
        "Top - Notch angel investors from various cities namely Mumbai, Bangalore, Hyderabad and Gurugram were present at Jazbaa 1.0 & 2.0",
    },
    {
      count: "72+",
      title: "Startup founders",
      description:
        "Innovative startup founders from tech, healthcare, and fintech sectors participated actively in Jazbaa events",
    },
    {
      count: "30+",
      title: "Investment deals",
      description:
        "Successful investment deals were closed during the networking sessions at Jazbaa 3.0",
    },
    {
      count: "48+",
      title: "Venture capitalists",
      description:
        "Prominent venture capitalists from India and abroad attended to scout promising startups",
    },
    {
      count: "25+",
      title: "Industry mentors",
      description:
        "Experienced industry mentors provided guidance and feedback to participating startups",
    },
    {
      count: "80+",
      title: "Networking sessions",
      description:
        "Productive networking sessions facilitated meaningful connections between investors and founders",
    },
    {
      count: "40+",
      title: "Tech innovations",
      description:
        "Cutting-edge technological innovations were showcased during the pitch sessions",
    },
    {
      count: "55+",
      title: "Media partners",
      description:
        "Media partners covered the event providing visibility to startups and investors alike",
    },
  ];

  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row w-full bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Left Side */}
          <div className="w-full md:w-1/2 p-6">
            <h1 className="text-3xl font-bold mb-4 text-center">Jazbaa</h1>
            <div className="flex text-xl font-bold justify-center mb-6">
              <span className="pr-4">1.0</span>
              <span className="border-l border-gray-400 px-4">2.0</span>
              <span className="border-l border-gray-400 pl-4">3.0</span>
            </div>

            <div className="flex flex-col space-y-4">
              {[0, 1, 2, 3].map((index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg p-4 flex items-start shadow-sm"
                >
                  <div className="text-6xl font-bold text-red-600 mr-3">
                    {cardsContent[index].count}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">
                      {cardsContent[index].title}
                    </h3>
                    <p className="text-xs text-gray-600">
                      {cardsContent[index].description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block border-l border-red-500"></div>

          {/* Right Side */}
          <div className="w-full md:w-1/2 p-6">
            <h1 className="text-3xl font-bold mb-4 text-center">Jazbaa</h1>
            <div className="text-xl font-bold text-center mb-6">4.0</div>

            <div className="flex flex-col space-y-4">
              {[4, 5, 6, 7].map((index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg p-4 flex items-start shadow-sm"
                >
                  <div className="text-6xl font-bold text-red-600 mr-3">
                    {cardsContent[index].count}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">
                      {cardsContent[index].title}
                    </h3>
                    <p className="text-xs text-gray-600">
                      {cardsContent[index].description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
