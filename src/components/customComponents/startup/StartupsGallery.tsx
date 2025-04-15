
'use client';

import React from 'react';
import Image from "next/legacy/image";
import galleryData from './galleryData'; // Ensure it's correctly imported as an array

export default function StartupsGallery() {
  // Ensure galleryData is an array
  if (!Array.isArray(galleryData)) {
    console.error('galleryData is not an array:', galleryData);
    return null;
  }

  // Separate different types of cards
  const topStats = galleryData.filter(card => card.type === 'stat' && card.position === 'top');
  const images = galleryData.filter(card => card.type === 'image');
  const bottomStats = galleryData.filter(card => card.type === 'stat' && card.position === 'bottom');
  const testimonials = galleryData.filter(card => card.type === 'testimonial');

  // Determine the minimum number of pairs to prevent overflow
  const pairCount = Math.min(topStats.length, images.length, bottomStats.length, testimonials.length);
  
  // Create interleaved sequence of pairs and testimonials
  const displaySequence = [];
  for (let i = 0; i < pairCount; i++) {
    // Add a testimonial
    displaySequence.push({
      type: 'testimonial',
      data: testimonials[i]
    });
    
    // Add a stat-image pair
    displaySequence.push({
      type: 'pair',
      data: {
        topStat: topStats[i],
        image: images[i],
        bottomStat: bottomStats[i]
      }
    });
  }

  return (
    <div className="py-12 px-6 bg-white text-black overflow-hidden">
      <h1 className="text-4xl text-black font-bold text-center mb-8">50+ STARTUPS TO BE SHOWCASED @ JAZBAA</h1>
      <div className="relative flex w-full overflow-hidden">
        <div className="flex gap-6 min-w-max animate-scroll">

          {/* Combined sequence with duplicates for infinite scroll */}
          {[...displaySequence, ...displaySequence].map((item: any, index: number) => (
            <React.Fragment key={index}>
              {/* Testimonial Card */}
              {item.type === 'testimonial' && (
                <div 
                  className="flex flex-col items-center min-w-[250px] w-[250px] transition-transform"
                  style={{ transform: `translateY(${(index % 3) * 20}px)` }} // Uneven height effect
                >
                  <div className="bg-black rounded-xl shadow-lg p-4 w-full text-center flex flex-col overflow-hidden">
                    
                    {/* Image at the Top */}
                    {item.data?.image && (
                      <div className="relative w-full h-48 mb-4 rounded-lg">
                        <Image
                          src={typeof item.data.image === 'string' ? item.data.image : ''}
                          alt={'title' in item.data && item.data.title ? item.data.title : 'Testimonial Image'}
                          layout="fill"
                objectFit="cover"
                          className="object-cover"
                        />
                      </div>
                    )}
                    
                    {/* Text Content Below */}
                    <div className="px-2 text-white text-left">
                      <p className="text-sm leading-tight">
                      &quot;{item.data && 'content' in item.data && typeof item.data.content === 'string' ? item.data.content : ''}&quot;
                      </p>
                      {'name' in item.data && item.data.name && (
                        <p className="text-md font-bold mt-2 text-white">- {item.data.name}</p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Stat-Image Pair */}
              {item.type === 'pair' && (
                <div className="flex flex-col items-center min-w-[250px]">
                  
                  {/* Top Stat Card */}
                  <div className="bg-black rounded-xl shadow-lg p-4 mb-2 flex items-center gap-4 w-full text-center">
                    {item.data && 'topStat' in item.data && (
                      <>
                        <div className={`w-8 h-8 rounded-full ${item.data.topStat.color === 'blue' ? 'bg-blue-600' : 'bg-yellow-400'} flex items-center justify-center`}>
                          <span className="text-white font-bold">•</span>
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold">{item.data.topStat?.value}</h2>
                          <p className="text-xs text-gray-400">{item.data.topStat?.description}</p>
                        </div>
                      </>
                    )}
                  </div>
                  
                  {/* Image Card */}
                  <div className="bg-black rounded-xl overflow-hidden shadow-lg w-full">
                    <div className="relative h-48">
                      {item?.data?.image?.image && (
                        <Image
                          src={item?.data?.image?.image}
                          alt={item.data.image.title || 'Startup Image'}
                          layout="fill"
                objectFit="cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover"
                        />
                      )}
                    </div>
                    <div className="p-4">
                      <h2 className="text-2xl font-bold">{item.data.image?.title}</h2>
                    </div>
                  </div>
                  
                  {/* Bottom Stat Card */}
                  <div className="bg-black rounded-xl shadow-lg p-4 mt-2 flex items-center gap-4 w-full text-center">
                    {item.data && 'bottomStat' in item.data && (
                      <div className="flex items-center gap-4">
                        <div className={`w-8 h-8 rounded-full ${item.data.bottomStat.color === 'blue' ? 'bg-blue-600' : 'bg-yellow-400'} flex items-center justify-center`}>
                          <span className="text-white font-bold">•</span>
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold">{item.data.bottomStat?.value}</h2>
                          <p className="text-xs text-gray-400">{item.data.bottomStat?.description}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Style Block */}
      <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          display: flex;
          animation: scroll 15s linear infinite;
          white-space: nowrap;
        }
      `}</style>
    </div>
  );
}