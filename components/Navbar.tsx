
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onSearch: (query: string) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSearch, activeTab, setActiveTab }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Bloquer le scroll quand le menu mobile est ouvert
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const menuItems = [
    'ACCUEIL', 
    'ÉVÉNEMENTIEL', 
    'NOS CONCEPTS VIRTUELS', 
    'FORMATION', 
    'AUDIOVISUEL', 
    'NZOMEDIA', 
    'MARIAGES', 
    'CONTACT'
  ];

  const handleItemClick = (item: string) => {
    if (item === 'AUDIOVISUEL') {
      window.open('https://www.nzo-studio.fr/', '_blank');
      return;
    }
    if (item === 'NZOMEDIA') {
      window.open('https://www.youtube.com/@nzoliveclub2825', '_blank');
      return;
    }
    setActiveTab(item);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 px-4 md:px-6 py-2 ${isScrolled || isMobileMenuOpen ? 'bg-black shadow-2xl py-3' : 'bg-gradient-to-b from-black/80 to-transparent'}`}>
      <div className="max-w-[1920px] mx-auto flex items-center justify-between">
        
        {/* Left: Logo Section */}
        <div 
          className="flex items-center shrink-0 group cursor-pointer"
          onClick={() => {
            setActiveTab('ACCUEIL');
            setIsMobileMenuOpen(false);
          }}
        >
          <div className="flex flex-col leading-[0.8]">
            <span className="text-white font-black text-4xl md:text-5xl italic tracking-tighter group-hover:text-pink-500 transition-colors">OKEM</span>
            <div className="bg-white px-1.5 py-0.5 mt-0.5 group-hover:bg-pink-600 transition-colors">
              <span className="text-black group-hover:text-white font-black text-[11px] md:text-[12px] tracking-[0.2em] uppercase transition-colors">N'zo Prod</span>
            </div>
          </div>
        </div>

        {/* Center: Navigation Links - Visible on Desktop only */}
        <ul className="hidden lg:flex items-center space-x-4 xl:space-x-8 mx-4">
          {menuItems.map((item) => (
            <li 
              key={item}
              onClick={() => handleItemClick(item)}
              className={`relative cursor-pointer text-[12px] xl:text-[13px] font-black tracking-widest transition-all duration-300 hover:text-pink-500 whitespace-nowrap uppercase
                ${activeTab === item ? 'text-white' : 'text-gray-400'}`}
            >
              {item}
              {activeTab === item && (
                <div className="absolute -bottom-2 left-0 w-full h-[3px] bg-pink-600 shadow-[0_0_15px_rgba(219,39,119,0.8)] animate-in fade-in slide-in-from-bottom-1"></div>
              )}
            </li>
          ))}
        </ul>

        {/* Right: Social & Mobile Toggle */}
        <div className="flex items-center space-x-4">
          <div className="hidden sm:grid grid-cols-2 gap-[2px] overflow-hidden rounded-[2px] shadow-xl shrink-0 border border-white/5">
            <a href="https://www.linkedin.com/in/nzo-okem/" target="_blank" rel="noopener noreferrer" className="w-7 h-7 bg-[#0077b5] flex items-center justify-center hover:brightness-125 transition-all">
              <i className="fab fa-linkedin-in text-white text-[10px]"></i>
            </a>
            <a href="https://www.youtube.com/@nzoliveclub2825" target="_blank" rel="noopener noreferrer" className="w-7 h-7 bg-[#ff0000] flex items-center justify-center hover:brightness-125 transition-all">
              <i className="fab fa-youtube text-white text-[10px]"></i>
            </a>
            <a href="https://www.facebook.com/nzo.okem/?locale=fr_FR" target="_blank" rel="noopener noreferrer" className="w-7 h-7 bg-[#3b5998] flex items-center justify-center hover:brightness-125 transition-all">
              <i className="fab fa-facebook-f text-white text-[10px]"></i>
            </a>
            <a href="https://www.instagram.com/okemnzoprod/" target="_blank" rel="noopener noreferrer" className="w-7 h-7 bg-[#262626] flex items-center justify-center hover:brightness-125 transition-all">
              <i className="fab fa-instagram text-white text-[10px]"></i>
            </a>
          </div>

          {/* Burger button */}
          <button 
            className="lg:hidden text-white text-2xl p-2 hover:bg-white/10 rounded-md transition-all duration-300 relative z-[60]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 w-full h-screen bg-black z-50 animate-in slide-in-from-right duration-300 overflow-hidden">
          {/* Background Image for Mobile Menu */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1000&q=80" 
              className="w-full h-full object-cover opacity-20 scale-110 blur-[2px]" 
              alt="Menu Background"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-pink-900/20"></div>
          </div>

          <div className="relative z-10 flex flex-col h-full pt-24 pb-12 px-8 overflow-y-auto">
            <ul className="space-y-4">
              {menuItems.map((item, index) => (
                <li 
                  key={item}
                  onClick={() => handleItemClick(item)}
                  className={`text-3xl font-black tracking-tighter uppercase transition-all duration-300 transform animate-in slide-in-from-right
                    ${activeTab === item ? 'text-pink-600 translate-x-4' : 'text-white hover:text-pink-500 hover:translate-x-2'}`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item}
                  {activeTab === item && <span className="ml-3 text-pink-600 inline-block">_</span>}
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-12 border-t border-white/10">
              <p className="text-gray-500 text-xs uppercase tracking-[0.3em] font-bold mb-6">Suivez-nous</p>
              <div className="flex space-x-6">
                <a href="https://www.linkedin.com/in/nzo-okem/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin-in text-2xl text-white hover:text-pink-600 transition-colors"></i>
                </a>
                <a href="https://www.youtube.com/@nzoliveclub2825" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-youtube text-2xl text-white hover:text-pink-600 transition-colors"></i>
                </a>
                <a href="https://www.instagram.com/okemnzoprod/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram text-2xl text-white hover:text-pink-600 transition-colors"></i>
                </a>
                <a href="https://www.facebook.com/nzo.okem/?locale=fr_FR" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook-f text-2xl text-white hover:text-pink-600 transition-colors"></i>
                </a>
              </div>
              <div className="mt-12">
                <div className="flex flex-col leading-[0.8]">
                  <span className="text-white/20 font-black text-6xl italic tracking-tighter">OKEM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
