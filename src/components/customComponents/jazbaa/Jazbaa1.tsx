import { Star } from 'lucide-react';
import Image from "next/image";

export default function Jazbaa1() {
  return (
    <div className="bg-gray-200 text-black max-w-5xl rounded-xl mx-auto">
      <div className="container mx-auto md:px-8 px-0 py-12  ">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 text-gray-400 mb-4">
            <Star className="w-4 h-4" />
            <span className="text-sm uppercase tracking-wider">Initiatives for a better tomorrow</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight drop-shadow-lg">
            Our Inclusivity &<br />
            <span className="relative">
              Sustainability Goals
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-800/20 to-transparent blur-xl -z-10"></div>
            </span>
          </h1>
        </div>

        {/* Main Content Container */}
        <div className="relative rounded-2xl bg-gray-900/50 p-6 md:p-8 backdrop-blur-sm border border-gray-800">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            <div className="space-y-8 md:space-y-12">
              <div className="space-y-4">
                <h2 className="text-2xl md:text-4xl font-semibold">Inclusivity</h2>
                <p className="text-gray-100 leading-relaxed text-base md:text-lg">
                  At Masters' Union, we celebrate diversity with a strong representation of female
                  students and employees. Inclusivity is at the heart of our community, and we create a
                  supportive and dynamic learning environment for everyone.
                </p>
              </div>

              {/* Statistics */}
              <div className="grid grid-cols-2 gap-4 md:gap-8 pt-4 relative">
                {/* Vertical Divider */}
                <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gray-800"></div>
                
                <div>
                  <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6">Student</h3>
                  <div className="space-y-4 md:space-y-6">
                    <div>
                      <div className="text-4xl md:text-5xl font-bold tracking-tight">
                        61.3<span className="text-[#ff0000]">%</span>
                      </div>
                      <div className="text-gray-100 mt-1">Male</div>
                    </div>
                    <div>
                      <div className="text-4xl md:text-5xl font-bold tracking-tight">
                        38.7<span className="text-[#ff0000]">%</span>
                      </div>
                      <div className="text-gray-100 mt-1">Female</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6">Employee</h3>
                  <div className="space-y-4 md:space-y-6">
                    <div>
                      <div className="text-4xl md:text-5xl font-bold tracking-tight">
                        48<span className="text-[#ff0000]">%</span>
                      </div>
                      <div className="text-gray-100 mt-1">Male</div>
                    </div>
                    <div>
                      <div className="text-4xl md:text-5xl font-bold tracking-tight">
                        52<span className="text-[#ff0000]">%</span>
                      </div>
                      <div className="text-gray-100 mt-1">Female</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Section */}
            <div className="relative h-64 md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              {/* Striped Background Pattern */}
              <div className="absolute inset-0 bg-[length:60px_100%] bg-repeat-x"
                   style={{
                     backgroundImage: `repeating-linear-gradient(90deg, 
                       transparent 0px,
                       transparent 30px,
                       rgba(234, 179, 8, 0.1) 30px,
                       rgba(234, 179, 8, 0.1) 60px
                     )`
                   }}>
              </div>
              
              {/* Geometric Pattern Overlay */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-0 w-10 h-10 md:w-20 md:h-20 border-t-2 border-l-2 border-yellow-400/30"></div>
                <div className="absolute top-0 right-0 w-10 h-10 md:w-20 md:h-20 border-t-2 border-r-2 border-yellow-400/30"></div>
                <div className="absolute bottom-0 left-0 w-10 h-10 md:w-20 md:h-20 border-b-2 border-l-2 border-yellow-400/30"></div>
                <div className="absolute bottom-0 right-0 w-10 h-10 md:w-20 md:h-20 border-b-2 border-r-2 border-yellow-400/30"></div>
              </div>

              <Image
                src="/assets/event-gallery/event-gallery-4.jpg"
                alt="Diverse team members"
                fill
                className="object-cover rounded-3xl"
                style={{ objectPosition: '50% 15%' }}
              />

              {/* Header Text Overlay */}
              <div className="absolute top-8 left-0 right-0 text-center">
                <h3 className="text-2xl md:text-3xl font-bold tracking-[0.2em]" 
                    style={{ fontFamily: 'Courier New, monospace' }}>
                  {/* THERE IS NO TRY */}
                </h3>
              </div>

              {/* Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}