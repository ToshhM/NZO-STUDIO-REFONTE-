
import React from 'react';

interface ConceptsVirtuelsPageProps {
  onContactClick?: () => void;
}

const ConceptsVirtuelsPage: React.FC<ConceptsVirtuelsPageProps> = ({ onContactClick }) => {
  const clients = [
    "L'ORÉAL", "LA POSTE", "VILLE DE LEVALLOIS", "LIDL", "MERCURE HOTELS", "MUTEX", "NESCAFÉ",
    "L'ORÉAL", "LA POSTE", "VILLE DE LEVALLOIS", "LIDL", "MERCURE HOTELS", "MUTEX", "NESCAFÉ"
  ];

  const partenaires = [
    "CGBB", "Coachd'affaires", "DUPLEX", "FDVISUAL",
    "CGBB", "Coachd'affaires", "DUPLEX", "FDVISUAL"
  ];

  return (
    <div className="animate-in fade-in duration-1000 bg-white selection:bg-pink-600 selection:text-white">
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

      {/* SECTION 1: HERO */}
      <section className="relative h-[80vh] w-full overflow-hidden flex items-center justify-center text-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1920&q=80" 
            className="w-full h-full object-cover opacity-80" 
            alt="Virtual Event Crowd"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 px-6 max-w-5xl">
          <span className="text-white font-bold text-sm tracking-[0.4em] uppercase mb-4 block">
            N'zo Production
          </span>
          <h1 className="text-4xl md:text-7xl font-black text-white uppercase leading-tight mb-8 drop-shadow-lg">
            Du distanciel <br/>
            <span className="italic">comme si vous y étiez</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light">
            Créez de l'engagement, boostez vos équipes, même à distance
          </p>
          <button 
            onClick={onContactClick}
            className="border-2 border-white px-10 py-3 text-white font-bold hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest text-sm active:scale-95"
          >
            Faire un devis
          </button>
        </div>
      </section>

      {/* SECTION 2: ANIMATIONS ET ÉVÉNEMENTS FULL DIGITAL (VIDEO REPLACE IMAGE) */}
      <section className="py-24 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-2">
              <h2 className="text-4xl md:text-6xl font-black text-black leading-none uppercase">
                Animations et<br/>événements full<br/>digital
              </h2>
              <div className="w-24 h-2 bg-pink-600"></div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-800">
                Des animations virtuelles 100% immersives et interactives
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Puisque la crise sanitaire oblige vos collaborateurs à rester chez eux, chez <strong className="text-black">OKEM N'zo Prod</strong> nous avons adapté nos plus belles animations au contexte. Nous vous proposons <strong className="text-pink-600 font-bold">des team-buildings, des jeux et des challenges intra- et inter-entreprises</strong> 100% fun et anti-COVID. Ce n'est pas le moment de céder à la morosité ambiante !
              </p>
              <p className="text-gray-600 leading-relaxed">
                Vous pourrez organiser ces animations soit en tant qu'<strong className="text-black">événement à part entière</strong>, soit en complément d'un événement hybride, pour apporter une touche ludique et détendre votre public qui doit se concentrer deux fois plus qu'en présentiel derrière leur écran. Nos jeux sont <strong className="text-black">entièrement personnalisables</strong> avec vos questions et peuvent à la fois <strong className="text-black font-black uppercase">être source de distraction</strong> et d'apprentissage.
              </p>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-pink-600/10 rounded-xl transform -rotate-2 group-hover:rotate-0 transition-transform duration-500"></div>
            <div className="relative overflow-hidden rounded-lg shadow-2xl aspect-video bg-black">
              {/* VIDEO EMBEDDED HERE */}
              <iframe
                src="https://player.vimeo.com/video/462594473?autoplay=0&loop=1&background=0&muted=0&color=db2777"
                className="absolute inset-0 w-full h-full border-0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="Animations Full Digital"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: EVENEMENTS HYBRIDES */}
      <section className="py-24 px-6 md:px-16 lg:px-24 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative group">
            <div className="absolute inset-0 bg-pink-600 rounded-lg transform translate-x-4 translate-y-4 -z-10 group-hover:translate-x-6 group-hover:translate-y-6 transition-all duration-500"></div>
            <img 
              src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1000&q=80" 
              className="w-full h-auto rounded-lg shadow-xl"
              alt="Hybrid Event Setup"
            />
          </div>

          <div className="order-1 lg:order-2 space-y-8">
            <div className="space-y-2">
              <h2 className="text-4xl md:text-6xl font-black text-black leading-none uppercase">
                Evenements<br/>hybrides
              </h2>
              <div className="w-24 h-2 bg-pink-600"></div>
            </div>
            
            <div className="space-y-6">
              <p className="text-gray-800 font-medium text-lg leading-relaxed italic">
                Prolongez votre événement : atteignez un public plus large avec des activités <span className="text-pink-600 font-black underline decoration-2 underline-offset-4">avant et après</span> l'événement pour poursuivre la conversation au-delà de votre événement.
              </p>
              
              <ol className="space-y-6 text-gray-600 list-decimal pl-5">
                <li className="pl-2">
                  <strong className="text-black">Enregistrez et exploitez le contenu de la session :</strong> repoussez les limites de votre agenda événementiel et intégrez les parties de l'événement dans votre mix de contenu.
                </li>
                <li className="pl-2">
                  <strong className="text-black">Créez une expérience fluide pour les participants :</strong> offrez une expérience qui permet aux participants de le suivre sur n'importe quel appareil avec une expérience Web et une application combinées.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: COMMENT RENDRE CES EXPÉRIENCES... */}
      <section className="py-32 px-6 md:px-16 lg:px-24 relative overflow-hidden text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1920&q=80" 
            className="w-full h-full object-cover brightness-[0.2]" 
            alt="Background Crowd"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black to-black/60"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-black uppercase leading-tight drop-shadow-lg">
              Comment rendre ces expériences<br/>événementielles hybrides mémorables et<br/>mesurables ?
            </h2>
            <div className="w-32 h-1.5 bg-pink-600"></div>
          </div>

          <div className="space-y-8 text-lg text-gray-300 font-light leading-relaxed">
            <p>
              Nous vous proposons <strong className="text-white font-bold">d'orchestrer</strong> vos <strong className="text-pink-500 font-black italic">événements virtuels en live</strong> streaming, qui est une solution professionnelle avec plusieurs caméras motorisées, accompagné d'un <strong className="text-white font-black uppercase tracking-widest underline decoration-pink-600 decoration-4 underline-offset-8">réalisateur vidéo</strong> pour dynamiser l'intégration de vos slides et la captation d'images live.
            </p>
            
            <p>
              La diffusion est disponible à partir de la plateforme de votre choix : <strong className="text-white">Vimeo, Zoom, Sims, Facebook live, YouTube live, etc.</strong>
            </p>

            <p>
              Vous pouvez également mettre en place une <strong className="text-white font-bold">stratégie digitale</strong> pendant votre live, géré par <strong className="text-white font-bold uppercase italic">un modérateur</strong>, ce qui permet de ponctuer une interaction sous forme de questions et réponses.
            </p>

            <div className="mt-16 p-8 border-l-8 border-pink-600 bg-white/5 backdrop-blur-sm">
              <p className="text-xl md:text-3xl text-white font-black italic leading-tight">
                Force est de constater que le live streaming devient une solution incontournable de la communication !
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: ILS NOUS ONT FAIT CONFIANCE (LES CARROUSELS) */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-20 text-center md:text-left">
          <div className="inline-block relative">
            <h2 className="text-4xl md:text-5xl font-black uppercase text-black italic leading-none">
              Ils nous ont fait <span className="text-pink-600">Confiance</span>
            </h2>
            <div className="mt-4 h-2 w-full bg-pink-600/20"></div>
            <div className="mt-[-8px] h-2 w-24 bg-pink-600"></div>
          </div>
          <p className="mt-6 text-gray-500 font-medium tracking-widest uppercase text-sm">Plus de 15 ans d'expertise au service des plus grands</p>
        </div>

        {/* Carousel Clients */}
        <div className="relative flex overflow-x-hidden border-y border-gray-100 py-16 bg-gray-50/50">
          <div className="animate-scroll flex whitespace-nowrap items-center">
            {clients.map((client, i) => (
              <div key={i} className="mx-16 text-3xl md:text-5xl font-black text-black/10 hover:text-pink-600 transition-all duration-500 cursor-default uppercase italic tracking-tighter">
                {client}
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-32 mb-20 text-center md:text-left">
          <div className="inline-block relative">
            <h2 className="text-4xl md:text-5xl font-black uppercase text-black italic leading-none">
              Nos <span className="text-pink-600">Partenaires</span>
            </h2>
            <div className="mt-4 h-2 w-full bg-pink-600/20"></div>
            <div className="mt-[-8px] h-2 w-24 bg-pink-600"></div>
          </div>
          <p className="mt-6 text-gray-500 font-medium tracking-widest uppercase text-sm">Des collaborations technologiques de pointe</p>
        </div>

        {/* Carousel Partenaires */}
        <div className="relative flex overflow-x-hidden border-y border-gray-100 py-16">
          <div className="animate-scroll-fast flex whitespace-nowrap items-center">
            {partenaires.map((partenaire, i) => (
              <div key={i} className="mx-20 text-2xl md:text-4xl font-black text-black/20 hover:text-black transition-all duration-500 cursor-default uppercase tracking-[0.2em]">
                {partenaire}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL SECTION */}
      <section className="py-24 bg-black text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-pink-600 via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h3 className="text-3xl md:text-5xl font-black uppercase mb-4 italic">Un projet virtuel ?</h3>
          <p className="text-gray-400 mb-12 text-lg">Donnez une nouvelle dimension à votre communication digitale.</p>
          <button 
            onClick={onContactClick}
            className="bg-pink-600 text-white px-16 py-5 rounded-full font-black uppercase tracking-[0.2em] hover:bg-pink-700 hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_rgba(219,39,119,0.4)]"
          >
            Contactez l'équipe
          </button>
        </div>
      </section>
    </div>
  );
};

export default ConceptsVirtuelsPage;
