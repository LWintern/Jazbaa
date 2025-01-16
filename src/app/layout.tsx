// import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
// import './globals.css'
// import { Analytics } from "@vercel/analytics/react"

// const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'Jazbaa The Startup Event',
//   description: 'Jazbaa The Startup event',
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>{children}</body>
//     </html>
//   )
// }




import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Toaster } from 'react-hot-toast'
import './globals.css'

// Initialize Inter font
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

// Metadata configuration
export const metadata: Metadata = {
  title: {
    default: 'Jazba - The Startup Event',
    template: '%s | Jazba'
  },
  description: 'Join Jazba - The premier startup event fostering innovation and entrepreneurship',
  keywords: ['Jazba', 'startup event', 'entrepreneurship', 'innovation', 'business competition'],
  authors: [{ name: 'Jazba Team' }],
  creator: 'Jazba',
  metadataBase: new URL('https://jazba-project.vercel.app'),
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://jazba-project.vercel.app',
    title: 'Jazba - The Startup Event',
    description: 'Join Jazba - The premier startup event fostering innovation and entrepreneurship',
    siteName: 'Jazba',
    images: [
      {
        url: 'https://jazba-project.vercel.app/og-image.jpg', // Add your OG image
        width: 1200,
        height: 630,
        alt: 'Jazba - The Startup Event',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jazba - The Startup Event',
    description: 'Join Jazba - The premier startup event fostering innovation and entrepreneurship',
    images: ['https://jazba-project.vercel.app/twitter-image.jpg'], // Add your Twitter card image
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Add if you have Google Search Console verification
  },
  alternates: {
    canonical: 'https://jazba-project.vercel.app',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        
        {/* PWA primary color */}
        <meta name="theme-color" content="#000000" />
        
        {/* iOS meta tags */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" content="Jazba" />
        
        {/* Windows meta tags */}
        <meta name="msapplication-TileColor" content="#000000" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {/* Skip to main content for accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:z-50 focus:bg-white focus:p-4"
        >
          Skip to main content
        </a>

        {/* Main content */}
        <main id="main-content" className="min-h-screen">
          {children}
        </main>

        {/* Toast notifications */}
        <Toaster 
          position="bottom-right"
          toastOptions={{
            duration: 5000,
            style: {
              background: '#333',
              color: '#fff',
            },
          }} 
        />

        {/* Analytics */}
        <Analytics />
        <SpeedInsights />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Event",
              "name": "Jazba - The Startup Event",
              "description": "Join Jazba - The premier startup event fostering innovation and entrepreneurship",
              "url": "https://jazba-project.vercel.app",
              "eventStatus": "https://schema.org/EventScheduled",
              "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
              "location": {
                "@type": "Place",
                "name": "Your Venue Name",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Your City",
                  "addressRegion": "Your State",
                  "addressCountry": "IN"
                }
              },
              "organizer": {
                "@type": "Organization",
                "name": "Jazba",
                "url": "https://jazba-project.vercel.app"
              }
            })
          }}
        />
      </body>
    </html>
  )
}

// Error handling
export function generateStaticParams() {
  return []
}

export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Something went wrong!</h1>
        <p className="mt-2 text-gray-600">{error.message}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          Try again
        </button>
      </div>
    </div>
  )
}