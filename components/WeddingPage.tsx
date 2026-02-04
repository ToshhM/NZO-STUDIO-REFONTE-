
import React, { useRef, useState } from 'react';
import { CATEGORIES } from '../constants';
import { Video } from '../types';
import VideoRow from './VideoRow';

interface WeddingPageProps {
  onVideoSelect: (video: Video) => void;
  onContactClick?: () => void;
}

const WeddingPage: React.FC<WeddingPageProps> = ({ onVideoSelect, onContactClick }) => {
  const weddingCategory = CATEGORIES.find(c => c.id === 'nzo-wedding');
  const scrollRef = useRef<HTMLDivElement>(null);

  // Liste exhaustive des 10 moments illustrés par vos photos
  const galleryImages = [
    { url: "/assets/PHOTOS-DE-MARIAGE-.png", title: "L'Art du Baiser" },
    { url: "/assets/PHOTOS-DE-MARIAGE-4.png", title: "La Réception" },
    { url: "/assets/PHOTOS-DE-MARIAGE-6-1.png", title: "La Cérémonie Laïque" },
    { url: "/assets/PHOTOS-DE-MARIAGE-7.png", title: "L'Engagement" },
    { url: "/assets/PHOTOS-DE-MARIAGE-10.png", title: "Le Bouquet" },
    { url: "/assets/PHOTOS-DE-MARIAGE-11.png", title: "L'Arche de l'Union" },
    { url: "/assets/PHOTOS-DE-MARIAGE-12.png", title: "Fumigènes & Joie" },
    { url: "/assets/PHOTOS-DE-MARIAGE-13-1.png", title: "Mise en Scène" },
    { url: "/assets/PHOTOS-DE-MARIAGE-14.png", title: "Le Rire & L'Émotion" },
    { url: "/assets/PHOTOS-DE-MARIAGE-15.png", title: "Les Témoins" },
    { url: "/assets/PHOTOS-DE-MARIAGE-18.png", title: "L'Union Parfaite" },
    { url: "/assets/Pasted-Graphic-9.png", title: "Moments Magiques" }
  ];

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="animate-in fade-in duration-1000 bg-white selection:bg-pink-600 selection:text-white">
      {/* SECTION 1: HERO RESTAURÉE */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center text-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1920&q=80"
            className="w-full h-full object-cover brightness-[0.6]"
            alt="Wedding Veil Kiss"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-white"></div>
        </div>

        <div className="relative z-10 px-6 max-w-5xl">
          <span className="text-white font-bold text-sm tracking-[0.5em] uppercase mb-6 block animate-in slide-in-from-top duration-1000">
            N'zo Wedding Planner
          </span>
          <h1 className="text-5xl md:text-8xl font-black text-white uppercase leading-none mb-8 drop-shadow-2xl italic tracking-tighter">
            L'art de célébrer <br/>
            <span className="text-pink-600 drop-shadow-none">votre union</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto font-light drop-shadow-lg italic">
            Confiez-nous le fil rouge du plus beau jour de votre vie !
          </p>
          <button
            onClick={onContactClick}
            className="bg-pink-600 text-white px-12 py-4 rounded-full font-black uppercase tracking-widest hover:bg-black transition-all shadow-2xl hover:scale-105 active:scale-95"
          >
            Réserver votre date
          </button>
        </div>
      </section>

      {/* SECTION 2: TABS / PILLARS */}
      <section className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 text-center">
          <div className="py-12 border-b md:border-b-0 md:border-r border-gray-200 hover:bg-white transition-colors cursor-default group">
            <span className="text-2xl mb-4 block">🎊</span>
            <h3 className="text-gray-500 font-black uppercase tracking-widest text-sm group-hover:text-pink-600 transition-colors">La Cérémonie</h3>
          </div>
          <div className="py-12 border-b md:border-b-0 md:border-r border-gray-200 bg-white shadow-inner">
            <span className="text-2xl mb-4 block">💑</span>
            <h3 className="text-black font-black uppercase tracking-widest text-sm">Votre Histoire</h3>
          </div>
          <div className="py-12 hover:bg-white transition-colors cursor-default group">
            <span className="text-2xl mb-4 block">💍</span>
            <h3 className="text-gray-500 font-black uppercase tracking-widest text-sm group-hover:text-pink-600 transition-colors">Heureux Mariages</h3>
          </div>
        </div>
      </section>

      {/* SECTION 3: TEXTUAL CONTENT */}
      <section className="py-24 px-6 md:px-16 lg:px-24 max-w-5xl mx-auto">
        <div className="space-y-12">
          <div className="relative mb-16">
            <div className="absolute -left-12 -top-12 w-64 h-64 bg-pink-50 rounded-full -z-10 blur-3xl opacity-50"></div>
            <img
              src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80"
              className="w-full max-w-3xl mx-auto rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              alt="Cérémonie illustration"
            />
          </div>

          <div className="space-y-8 text-gray-600 leading-relaxed text-lg font-light">
            <p>
              <strong className="text-black font-bold">Cérémonies laïques, religieuses</strong> (mais à votre manière), remariage, ou renouvellement de vos voeux, <strong className="text-pink-600 font-bold">je me charge</strong> de vous proposer ou de créer avec vous <strong className="text-black italic">le texte de votre cérémonie d’engagement</strong>, de mettre en scène votre cérémonie et de vous proposer la décoration, la sonorisation (micros, musique, DJ), la vidéo et la photo. Avec, bien entendu, tout ce que vous pourriez avoir comme souhaits.
            </p>

            <p>
              <strong className="text-black font-black uppercase tracking-tighter">Chers futurs mariés</strong>, que vous soyez croyants ou non, que vous soyez traditionnels, funky ou excentriques, je <strong className="text-black font-bold">m’adapte à vous</strong>. Parce que, ce que vous m’offrez ce jour là, c’est de vous unir dans l’ amour au milieu de votre famille et de vos proches… et je dois vous avouer qu’à chaque fois, je suis saisi et je me dis :
            </p>

            <div className="mt-16 text-center">
              <p className="text-2xl md:text-3xl font-black text-black uppercase italic tracking-tight leading-tight">
                « Mais quelle chance et quel honneur d’être officiant de mariage ! »
              </p>
              <div className="w-16 h-1 bg-pink-600 mx-auto mt-6"></div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: CARROUSEL COMPLET (10 IMAGES) */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-16 flex justify-between items-end">
          <div className="space-y-2">
            <h2 className="text-4xl md:text-5xl font-black uppercase text-black italic leading-none">Instants <span className="text-pink-600">Magiques</span></h2>
            <p className="text-gray-400 font-medium tracking-widest uppercase text-xs">Un aperçu de nos plus belles célébrations</p>
          </div>
          <div className="flex space-x-4">
            <button onClick={() => handleScroll('left')} className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-pink-600 hover:border-pink-600 hover:text-white transition-all shadow-sm">
              <i className="fas fa-chevron-left text-sm"></i>
            </button>
            <button onClick={() => handleScroll('right')} className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-pink-600 hover:border-pink-600 hover:text-white transition-all shadow-sm">
              <i className="fas fa-chevron-right text-sm"></i>
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto scrollbar-hide px-6 md:px-16 pb-12 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {galleryImages.map((img, i) => (
            <div key={i} className="flex-shrink-0 w-80 md:w-96 group snap-start">
              <div className="relative aspect-[3/4] overflow-hidden rounded-3xl shadow-xl transition-all duration-500 group-hover:shadow-pink-600/20 group-hover:-translate-y-2">
                <img src={img.url} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={img.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <span className="text-white font-black uppercase tracking-widest text-sm">{img.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: SHOWCASE VIDÉO (STYLE NETFLIX) */}
      {weddingCategory && (
        <section className="py-32 bg-[#0a0a0a] text-white">
          <div className="px-6 md:px-16 lg:px-24 mb-16 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-6">
              <div className="hidden md:block h-[1px] w-20 bg-pink-600"></div>
              <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter">Réalisations <span className="text-pink-600">Wedding</span></h2>
            </div>
          </div>

          <VideoRow
            category={weddingCategory}
            onVideoSelect={onVideoSelect}
          />
        </section>
      )}

      {/* SECTION 6: FINAL CTA */}
      <section className="py-32 bg-white flex flex-col items-center justify-center text-center px-6 border-t border-gray-100">
        <div className="space-y-8 max-w-3xl">
          <h2 className="text-4xl md:text-6xl font-black uppercase text-black tracking-tighter leading-none italic">
            Prêts à écrire <br/>
            votre <span className="text-pink-600 underline decoration-2 underline-offset-8">propre histoire</span> ?
          </h2>
          <p className="text-gray-400 text-lg md:text-xl font-light">
            Rencontons-nous pour donner vie à vos rêves les plus fous.
          </p>
          <div className="pt-8">
            <button
              onClick={onContactClick}
              className="bg-black text-white px-16 py-5 rounded-full font-black uppercase tracking-[0.2em] hover:bg-pink-600 transition-all shadow-xl hover:scale-105 active:scale-95"
            >
              Contactez N'zo Okem
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WeddingPage;
