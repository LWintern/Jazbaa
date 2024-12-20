import EventBanner from '@/components/customComponents/EventBanner'
import Footer from '@/components/customComponents/Footer'
import Hero from '@/components/customComponents/Hero'
import InvestersGrid from '@/components/customComponents/Investers'
import Navbar from '@/components/customComponents/Navbar'
import WhatIsSummer from "@/components/customComponents/WhatIsSummer"
import GalleryIndex from '@/components/customComponents/gallery/GalleryIndex'
import About from '@/components/customComponents/about/About'
export default function Home() {
  return (
   <>
<div className='w-full h-full space-x-4'>
  <Navbar />
  <Hero />
    <WhatIsSummer />
    <InvestersGrid />
    <EventBanner />
  <h1>Taking jazbaa to national level</h1>
  <h1>show photos with VIP</h1>
  <h1>Man Behind Jazbaa</h1>  
  <h1>Jazbaa 1.0/2.0 (card with numbers)</h1>
  <h1>what is the box for jazbaa 3.0 (card with info graphics)</h1>
  <h1>50+ startup up to be  show in jazbaa 3.0 (card of every startup )</h1>
  <h1>Investers (card of every investers)</h1>
  <h1>Insta frame photos</h1>
  <GalleryIndex/>
  {/* <h1>Event Gallery</h1> */}
  {/* <h1>About Linux world</h1> */}
  <About></About>
  <h1>Our Initiatives</h1>
  <h1>Footer</h1>
  <h1 className='font-bold'>New video testimonails section ( individual videos by investers)</h1>
  <h1 className='font-bold'>Pre jazbaa process (block format like insta post format )</h1>
  <h1 className='font-bold'>BrainStormings (meetings glimpse)</h1>
  </div>
  <Footer />
   </>
  )
}
