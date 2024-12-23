"use client";

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@/components/ui/breadcrumb";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Jazbaa1 from "./Jazbaa1";
import Jazbaa2 from "./Jazbaa2";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import JazbaaCard from "./JazbaaCard";
export default function Jazbaa() {
  const [activeTab, setActiveTab] = useState<string>('Inclusivity');

  return (
    <div className="w-full w-full mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
      <div className="max-w-6xl mx-auto">
        <Breadcrumb className="mb-6">
          <BreadcrumbItem>
            <BreadcrumbLink href="#" className="text-sm text-muted-foreground hover:text-foreground">
              FROM STUDENTS TO ENTREPRENEURS
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>

        <h1 className="text-3xl sm:text-4xl font-bold mb-8">
          Explore Innovative Business Ideas
        </h1>

        <Tabs defaultValue="creator" className="w-full">
          <TabsList className="w-full h-44 md:h-14 bg-black rounded-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-1 gap-2">
           
              <Button onClick={() => setActiveTab('Inclusivity')} className={activeTab === 'Inclusivity' ? 'text-[#ff0000]' : 'text-white'}>Inclusivity</Button>
          
           
              <Button onClick={() => setActiveTab('Sustainability')} className={activeTab === 'Sustainability' ? 'text-[#ff0000]' : 'text-white'}>Sustainability</Button>
              <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/20 to-transparent blur-xl data-[state=inactive]:opacity-0 transition-opacity" />
         <Button onClick={() => setActiveTab('Dropshipping Challenge')} className={activeTab === 'Dropshipping Challenge' ? 'text-[#ff0000]' : 'text-white'}>
            
              Dropshipping Challenge
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
