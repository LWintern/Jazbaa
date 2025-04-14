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
import { JazbaaGallery} from '@/components/customComponents/WithVIP/WithVip'
import Startup from "@/components/customComponents/startup/StartupsGallery";

import Future from "@/components/customComponents/Future/future";
import Stats from "@/components/customComponents/stats";
import ManBehindJazbaa from '@/components/customComponents/ManBehindJazbaa'
import PreJazbaa from '@/components/customComponents/PreJazbaa/PreJazbaa'
import News from '@/components/customComponents/News/news'
import { TeamGrid } from '@/components/customComponents/figma/TakingJazbaaToNextLevel'
import TransformationStories from '@/components/customComponents/figma/TransformationStories'
import ProcessFlow from '@/components/customComponents/figma/ProcessFlow'
import JazbaaVersions from '@/components/customComponents/figma/JazbaaVersions'
import AboutLinuxWorld from '@/components/customComponents/figma/AboutLinuxWorld'



export default function Home() {
  return (
   <>

  <Navbar />
  {/* <TeamGrid /> */}
  {/* <TransformationStories /> */}
  {/* <ProcessFlow/> */}
  <AboutLinuxWorld ></AboutLinuxWorld>
  <JazbaaVersions />
  <Hero />
  <Startup />
  <Stats />
  <News/>
  <Future />
  <ManBehindJazbaa />
  {/* <ThreeCardDemo /> */}
    <WhatIsSummer />
    <InvestersGrid />
    <EventBanner />
    <RecapPreviousYear />
    <InitiativesSection />
    <JazbaaStats />
    <IndustryExpertSpeech />
    <Glimps />

    <JazbaaGallery/>
  
  {/* <h1>Insta frame photos</h1> */}
  <PreJazbaa></PreJazbaa>
 
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
