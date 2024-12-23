import React from "react";
import Gallery from "./Gallery1";
import Gallery2 from "./Gallery2";
import Gallery3 from "./Gallery3";
import Gallery4 from "./Gallery4";
const GalleryIndex = ()=>{

    return (
        <>
            <div className="p-8  space-y-4  max-w-6xl mx-auto ">
                <Gallery></Gallery>
                <Gallery2></Gallery2>
                <Gallery3></Gallery3>
                <Gallery4></Gallery4>
            </div>
        </>
    )
}

export default GalleryIndex;