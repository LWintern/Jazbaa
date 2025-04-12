// ImageGallery.tsx
import React from 'react';
import { Card } from '@/components/ui/card';
import { ChevronDown } from 'lucide-react';

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
    <div className="w-full min-h-screen bg-black p-6">
      <h1 className="text-gray-400 text-2xl mb-8">Transformation stories</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stories.map((story) => (
          <StoryCardComponent key={story.id} story={story} />
        ))}
      </div>
    </div>
  );
};

interface StoryCardComponentProps {
  story: StoryCard;
}

const StoryCardComponent: React.FC<StoryCardComponentProps> = ({ story }) => {
  return (
    <Card className="bg-transparent border-none overflow-hidden group">
      <div className="relative">
        <img
          src={story.imageUrl}
          alt={story.title}
          className="w-full h-[400px] object-cover rounded-lg"
        />
        
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="text-white text-xl font-semibold mb-2">{story.title}</h3>
          <p className="text-gray-300 text-sm">{story.description}</p>
        </div>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
          <ChevronDown className="w-6 h-6 text-white animate-bounce" />
        </div>
      </div>
    </Card>
  );
};

export default TransformationStories;