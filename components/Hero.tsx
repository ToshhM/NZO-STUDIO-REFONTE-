
import React, { useState, useEffect } from 'react';
import { Video } from '../types';

interface HeroProps {
  video: Video;
  onPlay: (video: Video) => void;
}

const Hero: React.FC<HeroProps> = ({ video, onPlay }) => {
  const [heroThumbnail, setHeroThumbnail] = useState<string>('');

  useEffect(() => {
    const getHeroImage = async () => {
      if (video.platform === 'youtube') {
        setHeroThumbnail(`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`);
      } else if (video.platform === 'vimeo') {
        try {
          const cleanId = video.id.split('?')[0];
          const vimeoUrl = video.hash 
            ? `https://vimeo.com/${cleanId}/${video.hash}`
            : `https://vimeo.com/${cleanId}`;
            
          const response = await fetch(`https://vimeo.com/api/oembed.json?url=${encodeURIComponent(vimeoUrl)}&width=1920`);
          
          const contentType = response.headers.get("content-type");
          if (response.ok && contentType && contentType.includes("application/json")) {
            const data = await response.json();
            if (data && data.thumbnail_url) {
              setHeroThumbnail(data.thumbnail_url);
              return;
            }
          }
          throw new Error("Thumbnail fetch failed or not JSON");
        } catch (e) {
          console.warn("Hero image fetch failed, using fallback:", e);
          // Fallback image de haute qualité pour la bannière
          setHeroThumbnail("https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=1920&q=80");
        }
      }
    };
    getHeroImage();
  }, [video]);

  return (
    <div className="relative h-[75vh] md:h-[95vh] w-full overflow-hidden">
      {/* Background Image with optimized gradients */}
      <div className="absolute top-0 left-0 h-full w-full bg-black">
        {heroThumbnail && (
          <img 
            src={heroThumbnail} 
            alt="Featured Background" 
            className="w-full h-full object-cover animate-in fade-in duration-1000"
          />
        )}
        {/* Left-to-right gradient for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>
        {/* Bottom-to-top gradient: Much deeper to black at the bottom to transition into categories */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/60 to-transparent opacity-100"></div>
      </div>
      
      {/* Content Container */}
      <div className="relative z-10 flex flex-col justify-end h-full pb-24 px-4 md:pb-48 md:px-16 lg:px-24 w-full md:w-3/5 lg:w-1/2">
        {/* Tagline */}
        <div className="mb-6 animate-in slide-in-from-left duration-700">
          <span className="bg-red-600 text-white text-[11px] md:text-xs font-black px-2.5 py-1 rounded-sm uppercase tracking-[0.2em] shadow-lg">
            Nzo Prod
          </span>
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 uppercase leading-[0.9] tracking-tighter drop-shadow-2xl animate-in slide-in-from-left duration-700 delay-100">
          {video.title}
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl lg:text-2xl mb-10 text-gray-100 drop-shadow-lg max-w-xl leading-relaxed opacity-90 animate-in slide-in-from-left duration-700 delay-200">
          Découvrez l'univers de N'zo Prod à travers notre nouveau showreel. Une immersion totale dans nos productions audiovisuelles, nos événements de gala et nos projets créatifs.
        </p>
        
        {/* Call to Actions */}
        <div className="flex items-center space-x-4 animate-in slide-in-from-left duration-700 delay-300">
          <button 
            onClick={() => onPlay(video)}
            className="flex items-center space-x-3 bg-white text-black px-8 py-3 rounded-md font-bold hover:bg-white/80 transition-all text-xl shadow-xl active:scale-95"
          >
            <i className="fas fa-play text-2xl"></i>
            <span>Lecture</span>
          </button>
          
          <button className="flex items-center space-x-3 bg-gray-500/50 backdrop-blur-md text-white px-8 py-3 rounded-md font-bold hover:bg-gray-500/30 transition-all text-xl shadow-xl active:scale-95 border border-white/10">
            <i className="fas fa-circle-info text-2xl"></i>
            <span>Plus d'infos</span>
          </button>
        </div>
      </div>
      
      {/* Rating Tag */}
      <div className="absolute right-0 bottom-40 md:bottom-64 bg-gray-800/60 border-l-4 border-gray-300 py-2 px-6 md:px-10 text-white backdrop-blur-sm animate-in fade-in duration-1000">
        <span className="font-bold tracking-wider text-sm md:text-base">Tout public</span>
      </div>
    </div>
  );
};

export default Hero;
