"use client";

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@/components/ui/breadcrumb";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Jazbaa1 from "./Jazbaa1";
import Jazbaa2 from "./Jazbaa2";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Jazbaa() {
  const [activeTab, setActiveTab] = useState<'Inclusivity' | 'Sustainability'>('Inclusivity');

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
      <div>
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
            <TabsTrigger
              value="vip"
              className="data-[state=active]:bg-transparent data-[state=active]:text-white text-gray-400 h-12"
            >
              <Button onClick={() => setActiveTab('Inclusivity')}>Inclusivity</Button>
            </TabsTrigger>
            <TabsTrigger
              value="creator"
              className="relative data-[state=active]:bg-transparent data-[state=active]:text-white text-gray-400 h-12"
            >
              <Button onClick={() => setActiveTab('Sustainability')}>Sustainability</Button>
              <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/20 to-transparent blur-xl data-[state=inactive]:opacity-0 transition-opacity" />
            </TabsTrigger>
            <TabsTrigger
              value="dropshipping"
              className="data-[state=active]:bg-transparent data-[state=active]:text-white text-gray-400 h-12"
            >
              Dropshipping Challenge
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
   <div>
    
    {activeTab === 'Inclusivity' ? <Jazbaa1 /> : <Jazbaa2 />}
   
   </div>
   </div>
   
  );
}
