"use client"
// components/MasonryGallery.tsx
import React, { useState } from 'react';
import Image from "next/legacy/image";
import { motion } from 'framer-motion';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

interface GalleryImage {
  id: number;
  url: string;
  gridSpan: string;
  aspectRatio: string;
  title?: string;
}

// Customized gallery images with specific grid spans and aspect ratios
const galleryImages: GalleryImage[] = [
  // First Row
  {
    id: 1,
    url: '/images/gallery/1.jpg',
    gridSpan: 'col-span-1',
    aspectRatio: 'aspect-[3/4]',
    title: 'Image 1'
  },
  {
    id: 2,
    url: '/images/gallery/2.jpg',
    gridSpan: 'col-span-2',
    aspectRatio: 'aspect-[16/9]',
    title: 'Image 2'
  },
  {
    id: 3,
    url: '/images/gallery/3.jpg',
    gridSpan: 'col-span-1',
    aspectRatio: 'aspect-square',
    title: 'Image 3'
  },
  {
    id: 4,
    url: '/images/gallery/4.jpg',
    gridSpan: 'col-span-2',
    aspectRatio: 'aspect-[16/9]',
    title: 'Image 4'
  },
  // Second Row
  {
    id: 5,
    url: '/images/gallery/5.jpg',
    gridSpan: 'col-span-2',
    aspectRatio: 'aspect-[16/9]',
    title: 'Image 5'
  },
  {
    id: 6,
    url: '/images/gallery/6.jpg',
    gridSpan: 'col-span-2',
    aspectRatio: 'aspect-[16/9]',
    title: 'Image 6'
  },
  {
    id: 7,
    url: '/images/gallery/7.jpg',
    gridSpan: 'col-span-2',
    aspectRatio: 'aspect-[16/9]',
    title: 'Image 7'
  },
];

const MasonryGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const handleImageClick = (imageId: number) => {
    setSelectedImage(imageId);
    setIsLightboxOpen(true);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.h1 
        className="text-3xl font-bold mb-8 text-gray-900"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Gallery
      </motion.h1>
      
      {/* Custom Grid Layout */}
      <div className="grid grid-cols-6 gap-4 md:gap-6">
        {galleryImages.map((image, index) => (
          <motion.div 
            key={image.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative overflow-hidden rounded-xl group cursor-pointer ${image.gridSpan} ${image.aspectRatio}`}
            onClick={() => handleImageClick(image.id)}
          >
            <div className="absolute inset-0">
              <Image
                src={image.url}
                alt={image.title || `Gallery image ${image.id}`}
                
                className="object-cover bg-red-100 transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={index < 4} // Load first 4 images immediately
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  className="text-white text-lg font-medium px-4 py-2 rounded-lg bg-black/50 backdrop-blur-sm"
                >
                  View Image
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      {isLightboxOpen && selectedImage !== null && (
        <Lightbox
          mainSrc={galleryImages[selectedImage - 1].url}
          nextSrc={galleryImages[(selectedImage) % galleryImages.length].url}
          prevSrc={galleryImages[(selectedImage - 2 + galleryImages.length) % galleryImages.length].url}
          onCloseRequest={() => setIsLightboxOpen(false)}
          onMovePrevRequest={() => 
            setSelectedImage((selectedImage - 2 + galleryImages.length) % galleryImages.length + 1)
          }
          onMoveNextRequest={() =>
            setSelectedImage(selectedImage % galleryImages.length + 1)
          }
        />
      )}
    </div>
  );
};

export default MasonryGallery;