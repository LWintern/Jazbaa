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
import { Glimps } from '@/components/customComponents/Glimpse/glimpse'
import { WithVIP } from '@/components/customComponents/WithVIP/WithVip'
import { StartupsGallery } from '@/components/customComponents/StartupsGallery'
import ManBehindJazbaa from '@/components/customComponents/ManBehindJazbaa'
export default function Home() {
  return (
   <>

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
    <Glimps />
    <WithVIP />
  
 
  <Jazbaa></Jazbaa>
  
  <GalleryIndex/>
  {/* <h1>Event Gallery</h1> */}
  {/* <h1>About Linux world</h1> */}
  <About></About>
  <JazbaaTimeline></JazbaaTimeline>
  
  
  
  
  <Footer2 />
  <Footer />
   </>
  )
}
