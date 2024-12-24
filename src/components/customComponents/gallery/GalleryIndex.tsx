import React from "react";
import Gallery from "./Gallery1";
import Gallery2 from "./Gallery2";
import Gallery3 from "./Gallery3";
import Gallery4 from "./Gallery4";
const GalleryIndex = ()=>{

    return (
        <div className="bg-gradient-to-b from-red-50 via-gray-50 to-red-50">
            <div className="md:p-8  p-0 space-y-4  max-w-6xl mx-auto ">
                <div className="text-3xl font-bold mt-12">Top <span className="text-[#ff0000]">Investers</span></div>
                <Gallery></Gallery>
                <Gallery2></Gallery2>
                <Gallery3></Gallery3>
                <Gallery4></Gallery4>
            </div>
        </div>
    )
}

export default GalleryIndex;