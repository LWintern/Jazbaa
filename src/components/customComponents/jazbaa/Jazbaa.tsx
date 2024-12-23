"use client"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@/components/ui/breadcrumb"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Jazbaa1 from "./Jazbaa1"
import Jazbaa2 from "./Jazbaa2"
import { useState } from "react"
import { Button } from "@/components/ui/button"
export default function Jazbaa() {
  const [activeTab, setActiveTab] = useState<'Inclusivity' | 'Sustainability'>('Inclusivity')
  return (
    <div className="w-full max-w-6xl mx-auto px-4 space-y-2">
        <div>
      <Breadcrumb className="mb-6">
        <BreadcrumbItem>
          <BreadcrumbLink href="#" className="text-sm text-muted-foreground hover:text-foreground">
            FROM STUDENTS TO ENTREPRENEURS
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <h1 className="text-4xl font-bold mb-8">
        Explore Innovative Business Ideas
      </h1>

      <Tabs defaultValue="creator" className="w-full">
        <TabsList className="w-full h-14 bg-black rounded-lg grid grid-cols-3 p-1">
          
            <Button onClick={() => setActiveTab('Inclusivity')} className={activeTab === 'Inclusivity' ? 'text-[#ff0000]' : 'text-white'}>Inclusivity</Button>
            
          
       
            <Button onClick={() => setActiveTab('Sustainability')} className={activeTab === 'Sustainability' ? 'text-[#ff0000]' : 'text-white'}>Sustainability</Button>
            {/* Creator Challenge */}
            {/* Glow effect for active state */}
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/20 to-transparent blur-xl data-[state=inactive]:opacity-0 transition-opacity" />
         
        
            Dropshipping Challenge
          
        </TabsList>
      </Tabs>
      </div>
      <div>
        {activeTab === 'Inclusivity' ?(<Jazbaa1 /> ) :(<Jazbaa2 />)}
        {/* {activeTab === 'Sustainability' && <Jazbaa2 />} */}
      {/* <Jazbaa1 />
      <Jazbaa2 /> */}
      </div>
    </div>
  )
}

