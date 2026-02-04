
import React, { useRef, useState } from 'react';
import { Category, Video } from '../types';
import VideoCard from './VideoCard';

interface VideoRowProps {
  category: Category;
  onVideoSelect: (video: Video) => void;
}

const VideoRow: React.FC<VideoRowProps> = ({ category, onVideoSelect }) => {
  const rowRef = useRef<HTMLDivElement>(null);
  const [isMoved, setIsMoved] = useState(false);

  const handleClick = (direction: 'left' | 'right') => {
    setIsMoved(true);
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-2 md:space-y-4 px-4 md:px-12 my-8">
      <h2 className="text-lg md:text-2xl font-semibold text-[#e5e5e5] flex items-baseline gap-2">
        {category.title}
        {category.subtitle && <span className="text-sm text-gray-400 font-normal">| {category.subtitle}</span>}
      </h2>
      
      <div className="group relative">
        <button 
          className={`absolute top-0 bottom-0 left-0 z-40 m-auto h-full w-12 cursor-pointer bg-black/30 opacity-0 transition group-hover:opacity-100 hover:scale-125 hover:bg-black/60 ${!isMoved && 'hidden'}`}
          onClick={() => handleClick('left')}
        >
          <i className="fas fa-chevron-left text-2xl"></i>
        </button>
        
        <div 
          ref={rowRef}
          className="flex items-start space-x-2 md:space-x-4 overflow-x-scroll scrollbar-hide py-4 px-2 -mx-2"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {category.videos.map((video) => (
            <VideoCard key={video.id} video={video} onClick={onVideoSelect} />
          ))}
        </div>
        
        <button 
          className="absolute top-0 bottom-0 right-0 z-40 m-auto h-full w-12 cursor-pointer bg-black/30 opacity-0 transition group-hover:opacity-100 hover:scale-125 hover:bg-black/60"
          onClick={() => handleClick('right')}
        >
          <i className="fas fa-chevron-right text-2xl"></i>
        </button>
      </div>
    </div>
  );
};

export default VideoRow;
