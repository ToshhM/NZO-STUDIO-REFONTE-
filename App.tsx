
import React, { useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VideoRow from './components/VideoRow';
import VideoModal from './components/VideoModal';
import EvenementielPage from './components/EvenementielPage';
import ConceptsVirtuelsPage from './components/ConceptsVirtuelsPage';
import FormationPage from './components/FormationPage';
import ContactPage from './components/ContactPage';
import WeddingPage from './components/WeddingPage';
import { CATEGORIES } from './constants';
import { Video } from './types';

const App: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('ACCUEIL');

  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) return CATEGORIES;

    const lowerQuery = searchQuery.toLowerCase();
    return CATEGORIES.map(category => {
      const filteredVideos = category.videos.filter(video => 
        video.title.toLowerCase().includes(lowerQuery) || 
        (video.description && video.description.toLowerCase().includes(lowerQuery))
      );
      
      return {
        ...category,
        videos: filteredVideos
      };
    }).filter(category => category.videos.length > 0);
  }, [searchQuery]);

  const handleVideoSelect = (video: Video) => {
    setSelectedVideo(video);
  };

  const handleCloseModal = () => {
    setSelectedVideo(null);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query) setActiveTab('ACCUEIL'); // Switch to results view if searching
  };

  const handleContactRedirect = () => {
    setActiveTab('CONTACT');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderContent = () => {
    if (searchQuery) {
      return (
        <div className="pt-32 relative z-20 space-y-4 pb-20">
          <div className="px-4 md:px-12 mb-8">
            <h1 className="text-xl md:text-2xl text-gray-400">
              Résultats pour : <span className="text-pink-500 font-bold">"{searchQuery}"</span>
            </h1>
          </div>
          {filteredCategories.map((category) => (
            <VideoRow key={category.id} category={category} onVideoSelect={handleVideoSelect} />
          ))}
        </div>
      );
    }

    switch (activeTab) {
      case 'ÉVÉNEMENTIEL':
        return <EvenementielPage onVideoSelect={handleVideoSelect} onContactClick={handleContactRedirect} />;
      case 'NOS CONCEPTS VIRTUELS':
        return <ConceptsVirtuelsPage onContactClick={handleContactRedirect} />;
      case 'FORMATION':
        return <FormationPage onContactClick={handleContactRedirect} />;
      case 'MARIAGES':
        return <WeddingPage onVideoSelect={handleVideoSelect} onContactClick={handleContactRedirect} />;
      case 'CONTACT':
        return <ContactPage />;
      case 'ACCUEIL':
      default:
        return (
          <>
            <Hero video={CATEGORIES[0].videos[0]} onPlay={handleVideoSelect} />
            <div className="-mt-8 md:-mt-32 relative z-20 space-y-8 pb-20">
              {CATEGORIES.map((category) => (
                <VideoRow key={category.id} category={category} onVideoSelect={handleVideoSelect} />
              ))}
            </div>
          </>
        );
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-white selection:bg-pink-600">
      <Navbar 
        onSearch={handleSearch} 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
      />
      
      <main>
        {renderContent()}
      </main>

      <footer className="bg-black py-16 px-4 md:px-12 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div className="mb-8 md:mb-0">
               <div className="flex flex-col leading-[0.8] mb-4">
                <span className="text-white font-black text-3xl italic tracking-tighter">OKEM</span>
                <div className="bg-white px-1 py-0.5 mt-0.5 w-fit">
                  <span className="text-black font-black text-[10px] tracking-[0.2em] uppercase">N'zo Prod</span>
                </div>
              </div>
              <p className="text-gray-500 max-w-xs text-sm">
                Expert en communication par l'image et créateur d'événements d'exception depuis plus de 15 ans.
              </p>
            </div>
            <div className="flex space-x-6 text-2xl text-white/50">
              <a href="https://www.facebook.com/nzo.okem/?locale=fr_FR" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors">
                <i className="fab fa-facebook-f cursor-pointer"></i>
              </a>
              <a href="https://www.instagram.com/okemnzoprod/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors">
                <i className="fab fa-instagram cursor-pointer"></i>
              </a>
              <a href="https://www.linkedin.com/in/nzo-okem/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors">
                <i className="fab fa-linkedin-in cursor-pointer"></i>
              </a>
              <a href="https://www.youtube.com/@nzoliveclub2825" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors">
                <i className="fab fa-youtube cursor-pointer"></i>
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 text-gray-400 text-sm">
            <div className="space-y-2">
              <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Navigation</h4>
              <p className="hover:text-pink-500 cursor-pointer transition-colors" onClick={() => setActiveTab('ACCUEIL')}>Accueil</p>
              <p className="hover:text-pink-500 cursor-pointer transition-colors" onClick={() => setActiveTab('ÉVÉNEMENTIEL')}>Événementiel</p>
              <p className="hover:text-pink-500 cursor-pointer transition-colors" onClick={() => setActiveTab('NOS CONCEPTS VIRTUELS')}>Concepts Virtuels</p>
              <p className="hover:text-pink-500 cursor-pointer transition-colors" onClick={() => setActiveTab('FORMATION')}>Formation</p>
              <p className="hover:text-pink-500 cursor-pointer transition-colors" onClick={() => window.open('https://www.nzo-studio.fr/', '_blank')}>Audiovisuel</p>
              <p className="hover:text-pink-500 cursor-pointer transition-colors" onClick={() => window.open('https://www.youtube.com/@nzoliveclub2825', '_blank')}>NZOMEDIA</p>
              <p className="hover:text-pink-500 cursor-pointer transition-colors" onClick={() => setActiveTab('MARIAGES')}>Mariages</p>
              <p className="hover:text-pink-500 cursor-pointer transition-colors" onClick={() => setActiveTab('CONTACT')}>Contact</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Expertises</h4>
              <p className="hover:text-pink-500 cursor-pointer transition-colors">Soirées de Gala</p>
              <p className="hover:text-pink-500 cursor-pointer transition-colors">Team Building</p>
              <p className="hover:text-pink-500 cursor-pointer transition-colors">Captation Live</p>
              <p className="hover:text-pink-500 cursor-pointer transition-colors">Mariages</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Support</h4>
              <p className="hover:text-pink-500 cursor-pointer transition-colors">Contact</p>
              <p className="hover:text-pink-500 cursor-pointer transition-colors">FAQ</p>
              <p className="hover:text-pink-500 cursor-pointer transition-colors">Aide</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Légal</h4>
              <p className="hover:text-pink-500 cursor-pointer transition-colors">Mentions Légales</p>
              <p className="hover:text-pink-500 cursor-pointer transition-colors">Confidentialité</p>
              <p className="hover:text-pink-500 cursor-pointer transition-colors">CGV</p>
            </div>
          </div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-gray-600 text-center border-t border-white/5 pt-8">
            © 2024 N'zo Prod - Excellence Audiovisuelle & Événementielle
          </p>
        </div>
      </footer>

      {selectedVideo && (
        <VideoModal 
          video={selectedVideo} 
          onClose={handleCloseModal} 
        />
      )}
    </div>
  );
};

export default App;
