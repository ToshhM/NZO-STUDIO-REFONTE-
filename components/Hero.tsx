
import React, { useState, useEffect } from 'react';
import { Video } from '../types';

interface HeroProps {
  video: Video;
  onPlay: (video: Video) => void;
}

const Hero: React.FC<HeroProps> = ({ video, onPlay }) => {
  const [heroThumbnail, setHeroThumbnail] = useState<string>('');
  const [showInfoModal, setShowInfoModal] = useState(false);

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

          <button
            onClick={() => setShowInfoModal(true)}
            className="flex items-center space-x-3 bg-gray-500/50 backdrop-blur-md text-white px-8 py-3 rounded-md font-bold hover:bg-gray-500/30 transition-all text-xl shadow-xl active:scale-95 border border-white/10"
          >
            <i className="fas fa-circle-info text-2xl"></i>
            <span>Plus d'infos</span>
          </button>
        </div>
      </div>

      {/* Rating Tag */}
      <div className="absolute right-0 bottom-40 md:bottom-64 bg-gray-800/60 border-l-4 border-gray-300 py-2 px-6 md:px-10 text-white backdrop-blur-sm animate-in fade-in duration-1000">
        <span className="font-bold tracking-wider text-sm md:text-base">Tout public</span>
      </div>

      {/* Info Modal */}
      {showInfoModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300"
          onClick={() => setShowInfoModal(false)}
        >
          <div
            className="relative bg-[#181818] rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-white/10 animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Image */}
            <div className="relative h-48 md:h-64 overflow-hidden rounded-t-2xl">
              <img
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80"
                alt="Nzo Prod Events"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-transparent"></div>
              <button
                onClick={() => setShowInfoModal(false)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
              >
                <i className="fas fa-times text-lg"></i>
              </button>
            </div>

            {/* Content */}
            <div className="p-8 md:p-12 space-y-6">
              <div className="space-y-2">
                <span className="text-pink-600 font-black text-sm uppercase tracking-widest">Bienvenue chez</span>
                <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">Nzo Prod</h2>
              </div>

              <p className="text-xl md:text-2xl text-pink-500 font-medium italic">
                Une Agence Événementielle B2B, à votre écoute.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed font-light">
                <strong className="text-white font-bold">Vos événements corporate mémorables, le sérieux sans se prendre au sérieux !</strong>
              </p>

              <p className="text-gray-400 leading-relaxed">
                Chez Nzo Prod, notre expertise s'étend également à la <strong className="text-white">production audiovisuelle</strong>, nous disposons d'un <strong className="text-white">studio photo ouvert au public</strong>, et nous réalisons de la <strong className="text-white">formation et du coaching en communication</strong> pour vous et vos collaborateurs.
              </p>

              <p className="text-gray-400 leading-relaxed">
                Que ce soit pour organiser des <strong className="text-pink-500">team buildings</strong>, des <strong className="text-pink-500">séminaires</strong>, des <strong className="text-pink-500">soirées de gala</strong>, des <strong className="text-pink-500">remises de prix</strong>, ou pour immortaliser vos moments forts en vidéo et réaliser des shootings photos professionnels, nous donnons vie à toutes vos idées avec créativité et professionnalisme, le tout dans une ambiance positive et légèrement décalée.
              </p>

              {/* Services Icons */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-white/10">
                <div className="flex flex-col items-center text-center space-y-2 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                  <i className="fas fa-calendar-star text-2xl text-pink-500"></i>
                  <span className="text-xs font-bold text-white uppercase tracking-wider">Événementiel</span>
                </div>
                <div className="flex flex-col items-center text-center space-y-2 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                  <i className="fas fa-video text-2xl text-pink-500"></i>
                  <span className="text-xs font-bold text-white uppercase tracking-wider">Audiovisuel</span>
                </div>
                <div className="flex flex-col items-center text-center space-y-2 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                  <i className="fas fa-camera text-2xl text-pink-500"></i>
                  <span className="text-xs font-bold text-white uppercase tracking-wider">Studio Photo</span>
                </div>
                <div className="flex flex-col items-center text-center space-y-2 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                  <i className="fas fa-chalkboard-teacher text-2xl text-pink-500"></i>
                  <span className="text-xs font-bold text-white uppercase tracking-wider">Formation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
