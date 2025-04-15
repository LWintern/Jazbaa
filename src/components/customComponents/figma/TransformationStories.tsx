// ImageGallery.tsx
import React from 'react';
import { Card } from '@/components/ui/card';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface StoryCard {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
}

const stories: StoryCard[] = [
  {
    id: 1,
    imageUrl: '/images/investor1.jpg',
    title: 'Top-Notch angel investors',
    description: 'Top-Notch angel investors from various cities namely mumbai, banglore, hyderabad and grugram were present at jazbaa 1.0&2.0'
  },
  {
    id: 2,
    imageUrl: '/images/investor2.jpg',
    title: 'Top-Notch angel investors',
    description: 'Top-Notch angel investors from various cities namely mumbai, banglore, hyderabad and grugram were present at jazbaa 1.0&2.0'
  },
  {
    id: 3,
    imageUrl: '/images/investor3.jpg',
    title: 'Top-Notch angel investors',
    description: 'Top-Notch angel investors from various cities namely mumbai, banglore, hyderabad and grugram were present at jazbaa 1.0&2.0'
  },
];

const TransformationStories: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-gray-800 text-3xl font-bold mb-4">Transformation stories</h1>
        <p className="text-gray-600 mb-8">Discover how our investors are making a difference</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story) => (
            <StoryCardComponent 
              key={story.id} 
              story={story} 
              overlayPosition={story.id === 2 ? 'top' : 'bottom'}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

interface StoryCardComponentProps {
  story: StoryCard;
  overlayPosition: 'top' | 'bottom';
}

const StoryCardComponent: React.FC<StoryCardComponentProps> = ({ story, overlayPosition }) => {
  const overlayStyles = {
    top: {
      initial: 'absolute top-0 left-0 right-0 bg-white/95 backdrop-blur-sm p-6 transform -translate-y-full',
      hover: 'group-hover:translate-y-0',
      chevron: 'top-4',
      chevronIcon: ChevronUp
    },
    bottom: {
      initial: 'absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm p-6 transform translate-y-full',
      hover: 'group-hover:translate-y-0',
      chevron: 'bottom-4',
      chevronIcon: ChevronDown
    }
  };

  const styles = overlayStyles[overlayPosition];
  const ChevronIcon = styles.chevronIcon;

  return (
    <Card className="bg-white rounded-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 border border-gray-100">
      <div className="relative">
        {/* Image */}
        <img
          src={story.imageUrl}
          alt={story.title}
          className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/10 group-hover:opacity-100 opacity-0 transition-opacity duration-300" />
        
        {/* Content Overlay */}
        <div className={`${styles.initial} ${styles.hover} transition-transform duration-300 border-t border-gray-100`}>
          <h3 className="text-gray-800 text-xl font-semibold mb-3">{story.title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{story.description}</p>
        </div>

        {/* Chevron Icon */}
        <div className={`absolute ${styles.chevron} left-1/2 -translate-x-1/2 group-hover:opacity-0 transition-opacity duration-300`}>
          <ChevronIcon className="w-6 h-6 text-gray-800 animate-bounce" />
        </div>
      </div>
    </Card>
  );
};

export default TransformationStories;