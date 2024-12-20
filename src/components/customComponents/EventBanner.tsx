import { Button } from "@/components/ui/button"
import {ArrowRight} from "lucide-react"

export default function EventBanner(){
    return (
        <div className="relative overflow-hidden max-w-6xl mx-auto rounded-3xl bg-black" >
            {/* Full width image container */}
            <div className="relative w-full">
                <img className="object-cover w-full h-[300px] md:h-[400px] opacity-80" src="https://cdn.prod.website-files.com/63d3b7e8aa21f4cead659fa8/65963fefecd164b7052f4d57_ticket-cta-img.png" alt="Exited audience at event" />
            {/* Content overlay positioned on the right */}

            <div className="absolute top-0 right-0 w-full md:w-1/2 h-full flex items-center justify-center p-6 md:p-12"></div>
            
            </div>
        </div>
    )
}