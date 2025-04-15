// components/GoogleNewsSection.tsx
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/legacy/image"



// First, let's create the data structure
const initiativesData = [
    {
      id: 1,
      title: "Jazbaa: Transforming an ignored youth to an Entrepreur",
      description: "This year was critical for the startup ecosystem. Major innovations across the globe, impacting over half the world's population, underscore the importance of entrepreneurship...",
      images: {
        main: "https://media.licdn.com/dms/image/v2/D5622AQG0xi-av0ySbg/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1727851349027?e=1737590400&v=beta&t=jcULrFJa8yGoXH9VXkAouLx8bA7gnlH7lrfkbq0zEIU",
        secondary: [
          "https://media.licdn.com/dms/image/v2/D5622AQFEp74BR-lxYg/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1727851357915?e=1737590400&v=beta&t=sY2seTzW_33CizutwJNUqaYcg9eQOa7ZbzgPWODxsqw",
          "https://media.licdn.com/dms/image/v2/D5622AQGzIkGfb4Fa0A/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1727435963707?e=1737590400&v=beta&t=zaBwjeLqIOzamlh95Nlu_RPT8KocaSVCUYBFqWVeEvc"
        ]
      }
    },
    {
      id: 2,
      title: "#13 Learn To Lead: Raising the bar of Technical Education",
      description: "Comprehensive technical workshops covering cutting-edge technologies, cloud computing, and artificial intelligence, designed to enhance practical skills...",
      images: {
        main: "https://media.licdn.com/dms/image/v2/D5622AQG0xi-av0ySbg/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1727851349027?e=1737590400&v=beta&t=jcULrFJa8yGoXH9VXkAouLx8bA7gnlH7lrfkbq0zEIU",
        secondary: [
          "https://media.licdn.com/dms/image/v2/D5622AQFEp74BR-lxYg/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1727851357915?e=1737590400&v=beta&t=sY2seTzW_33CizutwJNUqaYcg9eQOa7ZbzgPWODxsqw",
          "https://media.licdn.com/dms/image/v2/D5622AQGzIkGfb4Fa0A/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1727435963707?e=1737590400&v=beta&t=zaBwjeLqIOzamlh95Nlu_RPT8KocaSVCUYBFqWVeEvc"
        ]
      }
    },
    {
      id: 3,
      title: "IIEC: Empowering Youth Through Free Education",
      description: "State-of-the-art laboratory facilities enabling students to experiment with emerging technologies and develop innovative solutions...",
      images: {
        main: "https://media.licdn.com/dms/image/v2/D5622AQG0xi-av0ySbg/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1727851349027?e=1737590400&v=beta&t=jcULrFJa8yGoXH9VXkAouLx8bA7gnlH7lrfkbq0zEIU",
        secondary: [
          "https://media.licdn.com/dms/image/v2/D5622AQFEp74BR-lxYg/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1727851357915?e=1737590400&v=beta&t=sY2seTzW_33CizutwJNUqaYcg9eQOa7ZbzgPWODxsqw",
          "https://media.licdn.com/dms/image/v2/D5622AQGzIkGfb4Fa0A/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1727435963707?e=1737590400&v=beta&t=zaBwjeLqIOzamlh95Nlu_RPT8KocaSVCUYBFqWVeEvc"
        ]
      }
    },
    {
      id: 4,
      title: "ARTH: The School of Technologies",
      description: "Building bridges between academia and industry through mentorship programs, internships, and collaborative projects...",
      images: {
        main: "https://media.licdn.com/dms/image/v2/D5622AQG0xi-av0ySbg/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1727851349027?e=1737590400&v=beta&t=jcULrFJa8yGoXH9VXkAouLx8bA7gnlH7lrfkbq0zEIU",
        secondary: [
          "https://media.licdn.com/dms/image/v2/D5622AQFEp74BR-lxYg/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1727851357915?e=1737590400&v=beta&t=sY2seTzW_33CizutwJNUqaYcg9eQOa7ZbzgPWODxsqw",
          "https://media.licdn.com/dms/image/v2/D5622AQGzIkGfb4Fa0A/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1727435963707?e=1737590400&v=beta&t=zaBwjeLqIOzamlh95Nlu_RPT8KocaSVCUYBFqWVeEvc"
        ]
      }
    },
    {
      id: 5,
      title: "The Creator: The One And Only Research Based Summer Program ",
      description: "Fostering innovation through dedicated research programs, focusing on solving real-world problems using technology...",
      images: {
        main: "https://media.licdn.com/dms/image/v2/D5622AQG0xi-av0ySbg/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1727851349027?e=1737590400&v=beta&t=jcULrFJa8yGoXH9VXkAouLx8bA7gnlH7lrfkbq0zEIU",
        secondary: [
          "https://media.licdn.com/dms/image/v2/D5622AQFEp74BR-lxYg/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1727851357915?e=1737590400&v=beta&t=sY2seTzW_33CizutwJNUqaYcg9eQOa7ZbzgPWODxsqw",
          "https://media.licdn.com/dms/image/v2/D5622AQGzIkGfb4Fa0A/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1727435963707?e=1737590400&v=beta&t=zaBwjeLqIOzamlh95Nlu_RPT8KocaSVCUYBFqWVeEvc"
        ]
      }
    },
    {
        id: 5,
        title: "INIT: Talent Meets Industry's Expectaions ",
        description: "Fostering innovation through dedicated research programs, focusing on solving real-world problems using technology...",
        images: {
          main: "https://media.licdn.com/dms/image/v2/D5622AQG0xi-av0ySbg/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1727851349027?e=1737590400&v=beta&t=jcULrFJa8yGoXH9VXkAouLx8bA7gnlH7lrfkbq0zEIU",
          secondary: [
            "https://media.licdn.com/dms/image/v2/D5622AQFEp74BR-lxYg/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1727851357915?e=1737590400&v=beta&t=sY2seTzW_33CizutwJNUqaYcg9eQOa7ZbzgPWODxsqw",
            "https://media.licdn.com/dms/image/v2/D5622AQGzIkGfb4Fa0A/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1727435963707?e=1737590400&v=beta&t=zaBwjeLqIOzamlh95Nlu_RPT8KocaSVCUYBFqWVeEvc"
          ]
        }
      }
  ];
  
  // Modified Component
  const InitiativesSection = () => {
    return (
      <div className="bg-gradient-to-b from-red-50 via-gray-50 to-red-50">
      <div className="max-w-6xl mx-auto px-4 py-8 ">
        {/* Header */}
      
        
        <div className="text-3xl pb-8 font-bold text-center ">
          Our <span className="text-[#ff0000]">Initiatives</span>
          <p className="text-gray-600 text-sm font-semibold pt-4">
            Empowering the next generation through technology education and innovation
          </p>
        </div>
  
        {/* Initiatives List */}
        <div className="space-y-16">
          {initiativesData.map((initiative, index) => (
            <div 
              key={initiative.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 bg-red-50 rounded-xl p-4  ${
                index % 2 === 0 ? '' : 'lg:flex-row-reverse  '
              }`}
            >
              {/* Images Section */}
              <div className={`space-y-4 ${index % 2 === 1 ? 'lg:order-2 ' : ''}`}>
                <div className="relative h-[120px] w-full rounded-lg overflow-hidden ">
                  <Image
                    src={initiative.images.main}
                    alt={`${initiative.title} Main Image`}
                    layout="fill"
                objectFit="cover"
                    className="object-cover"
                  />
                </div>
  
                <div className="grid grid-cols-2 gap-4 ">
                  {initiative.images.secondary.map((img, imgIndex) => (
                    <div key={imgIndex} className="relative h-[120px] rounded-lg overflow-hidden ">
                      <Image
                        src={img}
                        alt={`${initiative.title} Secondary Image ${imgIndex + 1}`}
                        layout="fill"
                objectFit="cover"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
  
              {/* Content Section */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <h1 className="text-3xl font-bold tracking-tight">
                  {initiative.title}
                </h1>
                
                <p className="text-lg text-gray-600">
                  {initiative.description}
                </p>
  
                <Button 
                  variant="link" 
                  className="text-blue-600 hover:text-blue-800 p-0"
                >
                  READ MORE →
                </Button>
              </div>
            </div>




  

          ))}
        </div>
      </div>
      </div>
    )
  }
  
  export default InitiativesSection