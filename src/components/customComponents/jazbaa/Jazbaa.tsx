"use client";

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@/components/ui/breadcrumb";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Jazbaa1 from "./Jazbaa1";
import Jazbaa2 from "./Jazbaa2";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import JazbaaCard from "./JazbaaCard";
export default function Jazbaa() {
  const [activeTab, setActiveTab] = useState<string>('Learn');

  return (
    <div className={`w-full  mx-auto ${activeTab==="Present"?"bg-white":"bg-black"}bg-black px-4 sm:px-6 lg:px-8 space-y-6`}>
      <div className="max-w-6xl mx-auto">
        <Breadcrumb className="mb-6">
          <BreadcrumbItem>
            <BreadcrumbLink href="#" className="text-sm text-muted-foreground hover:text-foreground">
              FROM STUDENTS TO ENTREPRENEURS
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>

        <h1 className="text-2xl md:text-3xl font-bold mb-8">
          Journey of Student In <span className="text-[#ff0000]">Jazba</span>
        </h1>

        <Tabs defaultValue="creator" className="max-w-5xl mx-auto">
          <TabsList className="w-full h-44 md:h-14 bg-black rounded-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-1 gap-2">
           
              <Button onClick={() => setActiveTab('Learn')} className={activeTab === 'Learn' ? 'text-[#ff0000] bg-gray-200 hover:bg-gray-200' : 'text-white'}>Learn</Button>
          
           
              <Button onClick={() => setActiveTab('Build')} className={activeTab === 'Build' ? 'text-[#ff0000] bg-gray-200 hover:bg-gray-200' : 'text-white'}>Build</Button>
              <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/20 to-transparent blur-xl data-[state=inactive]:opacity-0 transition-opacity" />
         <Button onClick={() => setActiveTab('Present')} className={activeTab === 'Present' ? 'text-[#ff0000] bg-gray-200 hover:bg-gray-200' : 'text-white'}>
            
              Present
              </Button>
          </TabsList>
        </Tabs>
      </div>
   <div>
    
    <JazbaaCard activeTab={activeTab} />
   
   </div>
   </div>
   
  );
}
