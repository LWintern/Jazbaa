// components/SummitStats.tsx
import { Card } from "@/components/ui/card"
import { 
  Users, 
  Building2, 
  Globe, 
  BarChart3, 
  MessageSquare,
  User
} from "lucide-react"

const statsData = [
  {
    number: "270+",
    label: "SPEAKERS",
    icon: <User className="w-6 h-6" />
  },
  {
    number: "9000+",
    label: "ATTENDEES",
    icon: <Users className="w-6 h-6" />
  },
  {
    number: "1000+",
    label: "COMPANIES",
    icon: <Building2 className="w-6 h-6" />
  },
  {
    number: "120+",
    label: "NATIONALITIES",
    icon: <Globe className="w-6 h-6" />
  },
  {
    number: "500M+",
    label: "REACH",
    icon: <BarChart3 className="w-6 h-6" />
  },
  {
    number: "160+",
    label: "TALKS",
    icon: <MessageSquare className="w-6 h-6" />
  }
]

const JazbaaStats = () => {
  return (
    <div className="bg-gradient-to-b from-red-50 via-gray-50 to-red-50">
    <div className="max-w-6xl mx-auto px-4 py-16 ">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-16">
        JAZBAA EVENT IN STATS
      </h2>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {statsData.map((stat, index) => (
          <Card 
            key={index}
            className="relative p-8 bg-white rounded-xl shadow-sm 
                     transition-all duration-300 ease-in-out
                     hover:shadow-xl hover:-translate-y-1
                     group overflow-hidden"
          >
            {/* Background Decoration */}
            <div className="absolute -right-4 -top-4 w-24 h-24 
                          bg-blue-100 rounded-full opacity-0 
                          group-hover:opacity-20 
                          transition-all duration-300 ease-in-out
                          transform group-hover:scale-150" 
            />

            <div className="relative z-10 flex justify-between items-start">
              <div>
                <h3 className="text-4xl font-bold mb-2 
                             text-gray-900 group-hover:text-red-600 
                             transition-colors duration-300">
                  {stat.number}
                </h3>
                <p className="text-sm font-semibold text-gray-600 
                             tracking-wider group-hover:text-red-500
                             transition-colors duration-300">
                  {stat.label}
                </p>
              </div>
              
              <div className="text-gray-400 group-hover:text-red-500 
                             transform group-hover:scale-110 
                             transition-all duration-300">
                {stat.icon}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
    </div>
  )
}

export default JazbaaStats