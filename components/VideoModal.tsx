
import React from 'react';
import { Video } from '../types';

interface VideoModalProps {
  video: Video | null;
  onClose: () => void;
}

const VideoModal: React.FC<VideoModalProps> = ({ video, onClose }) => {
  if (!video) return null;

  const getEmbedUrl = (v: Video) => {
    if (v.platform === 'vimeo') {
      // Nettoyage de l'ID s'il contient des paramètres ?
      const cleanId = v.id.split('?')[0];
      const hashParam = v.hash ? `?h=${v.hash}` : '';
      const separator = hashParam ? '&' : '?';
      
      // On ajoute l'autoplay et les réglages de couleur
      return `https://player.vimeo.com/video/${cleanId}${hashParam}${separator}autoplay=1&color=e50914&title=0&byline=0&portrait=0&dnt=1`;
    } else {
      return `https://www.youtube.com/embed/${v.id}?autoplay=1&rel=0&modestbranding=1`;
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 md:p-8 animate-in fade-in duration-300">
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-3xl hover:text-gray-300 z-[110] bg-black/50 w-12 h-12 rounded-full flex items-center justify-center"
      >
        <i className="fas fa-times"></i>
      </button>
      
      <div className="relative w-full max-w-5xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
        <iframe
          src={getEmbedUrl(video)}
          className="absolute inset-0 w-full h-full border-0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title={video.title}
        ></iframe>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-full max-w-5xl px-4 flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-bold mb-2 drop-shadow-lg">{video.title}</h2>
          <div className="flex items-center space-x-4 text-gray-300">
            <span className="border border-gray-400 px-1 text-xs font-bold">HD</span>
            <span className="text-sm font-medium">N'zo Prod Original</span>
          </div>
        </div>
        <div className="hidden md:block">
           <img src="https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=64&q=80" className="w-12 h-12 rounded border border-white/20 object-cover" alt="Production logo" />
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
