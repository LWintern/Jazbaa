import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@/components/ui/breadcrumb"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Jazbaa() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4">
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
          <TabsTrigger 
            value="vip" 
            className="data-[state=active]:bg-transparent data-[state=active]:text-white text-gray-400 h-12"
          >
            VIP Challenge
          </TabsTrigger>
          <TabsTrigger 
            value="creator" 
            className="relative data-[state=active]:bg-transparent data-[state=active]:text-white text-gray-400 h-12"
          >
            Creator Challenge
            {/* Glow effect for active state */}
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
  )
}

