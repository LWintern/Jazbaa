import { Play } from 'lucide-react'

export default function Jazbaa3() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header Section */}
      <div className="mb-8">
        <span className="text-sm font-medium text-muted-foreground tracking-wider">+ PROMOTING ENTREPRENEURSHIP</span>
        <h1 className="text-4xl font-bold mt-4 mb-6">Masters' Union Innovation Lab</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Navigate your startup journey with personalised advice and resources from industry experts, available on our unique platform.
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Left Column - Features */}
        <div className="space-y-12">
          <div className="flex gap-6">
            <div className="w-12 h-12 rounded-full border flex items-center justify-center flex-shrink-0">
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Startup Support</h3>
              <p className="text-muted-foreground">
                Offering comprehensive startup support, including tailored resources and strategic guidance to help entrepreneurs refine their business models.
              </p>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="w-12 h-12 rounded-full border flex items-center justify-center flex-shrink-0">
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Funding Support</h3>
              <p className="text-muted-foreground">
                Facilitating access to essential funding through our network of investors, ensuring startups receive the capital needed to turn their vision into reality.
              </p>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="w-12 h-12 rounded-full border flex items-center justify-center flex-shrink-0">
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Expert Mentorship and Guidance</h3>
              <p className="text-muted-foreground">
                Connecting entrepreneurs with seasoned mentors who provide valuable insights, strategic advice, and industry-specific guidance to scaling a startup.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - Video Section */}
        <div className="relative rounded-xl overflow-hidden">
          <img
            src="/placeholder.svg?height=600&width=800"
            alt="Startup team members"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col items-center justify-end pb-12">
            <button className="bg-white rounded-full p-4 mb-6 hover:scale-110 transition-transform">
              <Play className="w-6 h-6 text-black" />
            </button>
            <h2 className="text-4xl font-bold text-white text-center">
              Hands-on Experience to
              <br />
              <span className="text-cyan-400">Build</span> a <span className="text-amber-400">Startup</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  )
}

