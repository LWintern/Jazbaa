import EventBanner from '@/components/customComponents/EventBanner'
import Footer from '@/components/customComponents/Footer'
import Footer2 from '@/components/customComponents/Footer2'
import Hero from '@/components/customComponents/Hero'
import InvestersGrid from '@/components/customComponents/Investers'
import Navbar from '@/components/customComponents/Navbar'
import RecapPreviousYear from '@/components/customComponents/RecapPreviousYear'
import WhatIsSummer from "@/components/customComponents/WhatIsSummer"
import GalleryIndex from '@/components/customComponents/gallery/GalleryIndex'
import About from '@/components/customComponents/about/About'
import Jazbaa from '@/components/customComponents/jazbaa/Jazbaa'
import InitiativesSection from '@/components/customComponents/Initiatives'
import JazbaaStats from '@/components/customComponents/JazbaaStats'
import IndustryExpertSpeech from '@/components/customComponents/IndustryExpertSpeech'
import { JazbaaTimeline } from '@/components/customComponents/JazbaaTimeLine/jazbaaTimeLine'
import { StartupsGallery } from '@/components/customComponents/StartupsGallery'
import { ManBehindJazbaa } from '@/components/customComponents/ManBehindJazbaa'
export default function Home() {
  return (
   <>
<div className='w-full h-full mx-auto'>
  <Navbar />
  <Hero />
  <StartupsGallery />
  <ManBehindJazbaa />
  {/* <ThreeDCardDemo /> */}
    <WhatIsSummer />
    <InvestersGrid />
    <EventBanner />
    <RecapPreviousYear />
    <InitiativesSection />
    <JazbaaStats />
    <IndustryExpertSpeech />
    
  <h1>Taking jazbaa to national level</h1>
  <h1>show photos with VIP</h1>
  <h1>Man Behind Jazbaa</h1>  
  {/* <h1>Jazbaa 1.0/2.0 (card with numbers)</h1> */}
  <Jazbaa></Jazbaa>
  <h1>what is the box for jazbaa 3.0 (card with info graphics)</h1>
  <h1>50+ startup up to be  show in jazbaa 3.0 (card of every startup )</h1>
  
  <h1>Insta frame photos</h1>
  <GalleryIndex/>
  {/* <h1>Event Gallery</h1> */}
  {/* <h1>About Linux world</h1> */}
  <About></About>
  <JazbaaTimeline></JazbaaTimeline>
  
  
  
  <h1 className='font-bold'>Pre jazbaa process (block format like insta post format )</h1>
  <h1 className='font-bold'>BrainStormings (meetings glimpse)</h1>
  </div>
  <Footer2 />
  <Footer />
   </>
  )
}
