
import React from 'react';
import { CATEGORIES } from '../constants';
import { Video } from '../types';
import VideoRow from './VideoRow';

interface EvenementielPageProps {
  onVideoSelect: (video: Video) => void;
  onContactClick?: () => void;
}

const EvenementielPage: React.FC<EvenementielPageProps> = ({ onVideoSelect, onContactClick }) => {
  const eventCategories = CATEGORIES.filter(c => 
    ['nzo-show', 'nzo-time', 'nzo-insider', 'nzo-team', 'nzo-official'].includes(c.id)
  );

  const stats = [
    { title: "ACTIVATION", icon: "fa-rocket" },
    { title: "ANIMATION", icon: "fa-bullhorn" },
    { title: "FUN", icon: "fa-smile" }
  ];

  const clients = [
    "L'ORÉAL", "LA POSTE", "VILLE DE LEVALLOIS", "LIDL", "MERCURE HOTELS", "MUTEX", "NESCAFÉ",
    "L'ORÉAL", "LA POSTE", "VILLE DE LEVALLOIS", "LIDL", "MERCURE HOTELS", "MUTEX", "NESCAFÉ" // Doublé pour le loop
  ];

  const partenaires = [
    "CGBB", "Coachd'affaires", "DUPLEX", "FDVISUAL",
    "CGBB", "Coachd'affaires", "DUPLEX", "FDVISUAL" // Doublé pour le loop
  ];

  return (
    <div className="animate-in fade-in duration-1000 bg-[#0a0a0a]">
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
        .animate-scroll-fast {
          animation: scroll 20s linear infinite;
        }
      `}</style>
      
      {/* SECTION 1: HERO (DISTANCIEL) */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center text-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1920&q=80" 
            className="w-full h-full object-cover opacity-40" 
            alt="Corporate Event"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-[#0a0a0a]"></div>
        </div>

        <div className="relative z-10 px-6 max-w-5xl">
          <span className="text-white font-bold text-sm tracking-[0.4em] uppercase mb-4 block animate-in slide-in-from-top duration-700">
            N'zo Production
          </span>
          <h1 className="text-5xl md:text-8xl font-black text-white uppercase leading-tight mb-6 animate-in zoom-in duration-700 delay-100 italic">
            Du distanciel <br/>
            <span className="text-pink-600">comme si vous y étiez</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto animate-in fade-in duration-1000 delay-300">
            Créez de l'engagement, boostez vos équipes, même à distance.
          </p>
          <button 
            onClick={onContactClick}
            className="border-2 border-white px-12 py-4 text-white font-black hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest active:scale-95"
          >
            Faire un devis
          </button>
        </div>
      </section>

      {/* SECTION 2: ORGANISER & PRODUIRE */}
      <section className="py-32 px-6 md:px-16 lg:px-24 bg-white text-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <h2 className="text-3xl font-black uppercase tracking-tight border-b-4 border-pink-600 pb-4 inline-block">
              Organiser vos événements
            </h2>
            <div className="flex justify-between max-w-sm">
              {stats.map((s, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-pink-600 flex items-center justify-center mb-3 shadow-lg">
                    <i className={`fas ${s.icon} text-white text-xl`}></i>
                  </div>
                  <span className="text-[10px] font-black tracking-widest uppercase">{s.title}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-600 leading-relaxed text-lg">
              Chez <strong className="text-black">OKEM N'zo Prod</strong>, notre équipe événementielle assure une organisation sans faille des événements et des animations en distanciel comme en présentiel...
            </p>
          </div>

          <div className="space-y-12">
            <h2 className="text-3xl font-black uppercase tracking-tight border-b-4 border-pink-600 pb-4 inline-block">
              Produire vos événements
            </h2>
            <div className="flex justify-between max-w-sm">
              {stats.map((s, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-pink-600 flex items-center justify-center mb-3 shadow-lg">
                    <i className={`fas ${s.icon} text-white text-xl`}></i>
                  </div>
                  <span className="text-[10px] font-black tracking-widest uppercase">{s.title}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-600 leading-relaxed text-lg">
              Le Jour J, nous assurons le bon déroulement de l'événement à chaque étape, afin de vous garantir une expérience qui dépasse vos attentes...
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: NOTRE FONCTIONNEMENT */}
      <section className="py-32 px-6 md:px-16 lg:px-24 bg-[#050b15]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-black text-white uppercase italic mb-4">Notre Fonctionnement</h2>
            <div className="w-40 h-1.5 bg-pink-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#0a1120] p-10 rounded-2xl border border-white/5 hover:border-pink-600/50 transition-all group">
              <h3 className="text-pink-500 font-bold uppercase tracking-widest mb-8 flex items-center">
                <span className="w-8 h-8 rounded-full bg-pink-600/10 flex items-center justify-center mr-4">1</span>
                Conception
              </h3>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-start space-x-3"><i className="fas fa-circle text-[6px] mt-2 text-pink-600"></i> <span>Co-construction du cahier des charges</span></li>
                <li className="flex items-start space-x-3"><i className="fas fa-circle text-[6px] mt-2 text-pink-600"></i> <span>Storyboarding & Déroulé minuté</span></li>
                <li className="flex items-start space-x-3"><i className="fas fa-circle text-[6px] mt-2 text-pink-600"></i> <span>Scénographie & Script</span></li>
              </ul>
            </div>
            <div className="bg-[#0a1120] p-10 rounded-2xl border border-white/5 hover:border-pink-600/50 transition-all">
              <h3 className="text-pink-500 font-bold uppercase tracking-widest mb-8 flex items-center">
                <span className="w-8 h-8 rounded-full bg-pink-600/10 flex items-center justify-center mr-4">2</span>
                Gestion
              </h3>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-start space-x-3"><i className="fas fa-circle text-[6px] mt-2 text-pink-600"></i> <span>Installation du décor & transformation spectaculaire</span></li>
                <li className="flex items-start space-x-3"><i className="fas fa-circle text-[6px] mt-2 text-pink-600"></i> <span>Éclairage scénique, captation son & vidéo</span></li>
                <li className="flex items-start space-x-3"><i className="fas fa-circle text-[6px] mt-2 text-pink-600"></i> <span>Mise en scène & Animation</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: CARROUSELS DE LOGOS */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-16 text-center md:text-left">
          <h2 className="text-3xl font-black uppercase mb-2">Ils nous ont fait <span className="text-pink-600">Confiance</span></h2>
          <div className="h-1 w-20 bg-pink-600 hidden md:block"></div>
        </div>

        {/* Carousel Clients */}
        <div className="relative flex overflow-x-hidden border-y border-gray-100 py-12">
          <div className="animate-scroll flex whitespace-nowrap items-center">
            {clients.map((client, i) => (
              <div key={i} className="mx-12 text-2xl md:text-4xl font-black text-black/20 hover:text-pink-600 transition-all duration-300 cursor-default uppercase italic tracking-tighter">
                {client}
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-32 mb-16 text-center md:text-left">
          <h2 className="text-3xl font-black uppercase mb-2">Nos <span className="text-pink-600">Partenaires</span> d'entreprise</h2>
          <div className="h-1 w-20 bg-pink-600 hidden md:block"></div>
        </div>

        {/* Carousel Partenaires */}
        <div className="relative flex overflow-x-hidden border-y border-gray-100 py-12">
          <div className="animate-scroll-fast flex whitespace-nowrap items-center">
            {partenaires.map((partenaire, i) => (
              <div key={i} className="mx-16 text-xl md:text-3xl font-black text-black/30 hover:text-black transition-all duration-300 cursor-default uppercase tracking-widest">
                {partenaire}
              </div>
            ))}
          </div>
        </div>
      </section>

       {/* SECTION 5: SHOWCASE VIDÉO */}
       <section className="py-32 bg-[#0a0a0a]">
        <div className="px-6 md:px-16 lg:px-24 mb-16 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start space-x-6">
            <div className="hidden md:block h-[2px] w-20 bg-pink-600"></div>
            <h2 className="text-4xl md:text-5xl font-black uppercase italic">Réalisations <span className="text-pink-600">Events</span></h2>
          </div>
        </div>
        
        <div className="space-y-12">
          {eventCategories.map((category) => (
            <VideoRow 
              key={category.id} 
              category={category} 
              onVideoSelect={onVideoSelect} 
            />
          ))}
        </div>
      </section>

    </div>
  );
};

export default EvenementielPage;
