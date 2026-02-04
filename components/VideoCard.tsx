
import React, { useState, useEffect } from 'react';
import { Video } from '../types';

interface VideoCardProps {
  video: Video;
  onClick: (video: Video) => void;
}

const VideoCard: React.FC<VideoCardProps> = ({ video, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [thumbnailUrl, setThumbnailUrl] = useState<string>('');
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchThumbnail = async () => {
      // Si une thumbnail est déjà fournie manuellement dans constants.ts
      if (video.thumbnail) {
        setThumbnailUrl(video.thumbnail);
        return;
      }

      if (video.platform === 'youtube') {
        setThumbnailUrl(`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`);
      } else if (video.platform === 'vimeo') {
        try {
          const cleanId = video.id.split('?')[0];
          const vimeoUrl = video.hash 
            ? `https://vimeo.com/${cleanId}/${video.hash}`
            : `https://vimeo.com/${cleanId}`;
            
          const response = await fetch(`https://vimeo.com/api/oembed.json?url=${encodeURIComponent(vimeoUrl)}&width=640`);
          
          if (!response.ok) throw new Error("API Response Error");
          
          const contentType = response.headers.get("content-type");
          if (contentType && contentType.includes("application/json")) {
            const data = await response.json();
            if (data && data.thumbnail_url) {
              setThumbnailUrl(data.thumbnail_url);
              setHasError(false);
              return;
            }
          }
          throw new Error("Invalid JSON or no thumbnail");
        } catch (error) {
          console.warn(`Vimeo API Error for video ${video.id}, using fallback visual.`);
          setHasError(true);
          // On ne met pas de thumbnail, le rendu affichera le fallback CSS
        }
      }
    };

    fetchThumbnail();
  }, [video]);

  return (
    <div 
      className="relative flex-shrink-0 w-40 sm:w-48 md:w-64 lg:w-72 transition-all duration-300 cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onClick(video)}
    >
      <div className={`overflow-hidden rounded-md transition-all duration-300 shadow-lg ${isHovered ? 'scale-110 -translate-y-4 z-20' : 'z-0'}`}>
        <div className="relative aspect-video bg-[#181818]">
          {thumbnailUrl && !hasError ? (
            <img 
              src={thumbnailUrl} 
              alt={video.title} 
              className="w-full h-full object-cover"
              loading="lazy"
              onError={() => setHasError(true)}
            />
          ) : (
            /* Fallback visuel élégant si l'image ne charge pas */
            <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-gray-800 to-black p-4 text-center">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-2">
                <i className="fas fa-play text-white/40 text-xl"></i>
              </div>
              <span className="text-[10px] uppercase tracking-widest text-white/30 font-bold">N'zo Prod</span>
              {!isHovered && (
                <span className="absolute bottom-2 left-2 right-2 text-[8px] text-white/20 truncate font-medium">
                  {video.title}
                </span>
              )}
            </div>
          )}
          
          {isHovered && (
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <i className="fas fa-play text-white text-3xl opacity-80 group-hover:scale-110 transition-transform"></i>
            </div>
          )}
        </div>
        
        {isHovered && (
          <div className="bg-[#181818] p-4 rounded-b-md shadow-2xl animate-in fade-in zoom-in duration-200">
            <div className="flex space-x-2 mb-3">
              <button className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-200 transition-colors">
                <i className="fas fa-play text-[10px] ml-0.5"></i>
              </button>
              <button className="w-8 h-8 rounded-full border-2 border-gray-500 text-white flex items-center justify-center hover:border-white transition-colors">
                <i className="fas fa-plus text-[10px]"></i>
              </button>
              <button className="ml-auto w-8 h-8 rounded-full border-2 border-gray-500 text-white flex items-center justify-center hover:border-white transition-colors">
                <i className="fas fa-chevron-down text-[10px]"></i>
              </button>
            </div>
            <h3 className="text-xs md:text-sm font-bold truncate">{video.title}</h3>
            <div className="flex items-center space-x-2 mt-2">
              <span className="text-green-500 text-[10px] font-bold">Qualité HD</span>
              <span className="border border-gray-600 px-1 text-[8px] text-gray-400 uppercase">{video.platform}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoCard;
