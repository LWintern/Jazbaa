import { ArrowUpRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function Jazbaa2() {
  return (
    <section className="bg-[#111111] text-white min-h-full">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 px-6 py-16">
        {/* Left Column */}
        <div className="space-y-8">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full border border-[#B98D3B]/30">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L15 8L21 9L16.5 14L18 20L12 17L6 20L7.5 14L3 9L9 8L12 2Z" stroke="#B98D3B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-4xl font-semibold tracking-tight">Sustainability</h2>
            
            <p className="text-gray-400 text-lg leading-relaxed max-w-md">
              Discover sustainable excellence in our LEED Platinum building. Enjoy fresh air with MERV 14 filtration, abundant natural daylight, and experience optimised space for maximum productivity and comfort.
            </p>
          </div>

          <Button 
            variant="outline" 
            className="mt-8 bg-transparent text-[#B98D3B] border-[#B98D3B] hover:bg-[#B98D3B]/10 hover:text-[#B98D3B]"
          >
            See LEED Scorecard
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Right Column - Features Grid */}
        <div className="grid grid-cols-1 gap-8">
          <div className="space-y-6">
            <div className="flex items-start gap-6">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full border border-[#B98D3B]/30 shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#B98D3B" strokeWidth="2"/>
                  <path d="M12 6V12L16 14" stroke="#B98D3B" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="text-lg font-medium text-white">
                Proposed For LEED Platinum By US Green Building Council
              </h3>
            </div>

            <div className="h-px bg-gray-800 w-full" />
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-6">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full border border-[#B98D3B]/30 shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 12H7M17 12H21M12 3V7M12 17V21M5.6 5.6L8.4 8.4M15.6 15.6L18.4 18.4M18.4 5.6L15.6 8.4M8.4 15.6L5.6 18.4" stroke="#B98D3B" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="text-lg font-medium text-white">
                Daylight-Optimized Building Footprint
              </h3>
            </div>

            <div className="h-px bg-gray-800 w-full" />
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-6">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full border border-[#B98D3B]/30 shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#B98D3B" strokeWidth="2"/>
                  <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="#B98D3B" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="text-lg font-medium text-white">
                Equipped With MERV 14 Air Filtration Technology
              </h3>
            </div>

            <div className="h-px bg-gray-800 w-full" />
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-6">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full border border-[#B98D3B]/30 shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke="#B98D3B" strokeWidth="2"/>
                  <path d="M3 9H21M3 15H21M9 3V21M15 3V21" stroke="#B98D3B" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="text-lg font-medium text-white">
                Floor Plates Designed To Enable Maximum Space Utilisation
              </h3>
            </div>

            <div className="h-px bg-gray-800 w-full" />
          </div>
        </div>
      </div>
    </section>
  )
}

