
import React, { useState } from 'react';

interface FormationPageProps {
  onContactClick?: () => void;
}

const FormationPage: React.FC<FormationPageProps> = ({ onContactClick }) => {
  const [activeTab, setActiveTab] = useState('positive');

  const competencies = [
    {
      icon: "fa-calendar-check",
      title: "Consulting et coaching en communication interne",
      desc: "Comprendre et accepter l'image reflétée, assumer totalement son statut de leader, apprendre à déléguer et manager ses équipes en se basant sur la confiance et la responsabilisation."
    },
    {
      icon: "fa-trophy",
      title: "Coaching en communication et cohésion des équipes",
      desc: "Apprendre à connaître ses collègues, mieux comprendre leur fonctionnement pour mieux faire passer des messages, utiliser l'intelligence collective pour résoudre des problèmes."
    },
    {
      icon: "fa-clapperboard",
      title: "Consulting, coaching et training médias",
      desc: "Se préparer aux interviews, parler face caméra, prise de parole en public mettre en cohérence les propos face à son auditoire. Aide à l'écriture des discours et coaching."
    },
    {
      icon: "fa-comments",
      title: "Consulting et coaching en communication externe",
      desc: "Se préparer aux interviews, parler face caméra, prise de parole en public. Aide à l'écriture des discours et coaching en image de marque."
    }
  ];

  return (
    <div className="animate-in fade-in duration-1000 bg-white selection:bg-pink-600 selection:text-white">
      {/* SECTION 1: HERO */}
      <section className="relative h-[70vh] w-full overflow-hidden flex items-center justify-center text-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1920&q=80" 
            className="w-full h-full object-cover brightness-[0.4]" 
            alt="Coaching Session"
          />
        </div>

        <div className="relative z-10 px-6 max-w-5xl">
          <span className="text-white font-bold text-sm tracking-[0.4em] uppercase mb-4 block">
            N'zo Production
          </span>
          <h1 className="text-4xl md:text-7xl font-black text-white uppercase leading-tight mb-8 drop-shadow-2xl">
            Agence de formation <br/>
            <span className="italic">et de coaching paris</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light italic">
            Faites de votre singularité une force !
          </p>
          <button 
            onClick={onContactClick}
            className="border-2 border-white px-10 py-3 text-white font-bold hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest text-sm active:scale-95"
          >
            Faire un devis
          </button>
        </div>
      </section>

      {/* SECTION 2: MEMOMETHODE INTRO */}
      <section className="py-24 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Col 1: Booster la performance */}
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-black uppercase leading-tight text-black">
                Booster la performance de vos équipes avec la memomethode
              </h2>
              <div className="w-20 h-1.5 bg-pink-600"></div>
            </div>

            <div className="flex justify-between items-start gap-4">
              {[
                { label: 'COHESION', icon: 'fa-hands-holding' },
                { label: 'MOTIVATION', icon: 'fa-lightbulb' },
                { label: 'PERFORMANCE', icon: 'fa-chart-line' }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center space-y-4 w-1/3">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-pink-600 flex items-center justify-center text-white text-2xl shadow-lg shadow-pink-600/20">
                    <i className={`fas ${item.icon}`}></i>
                  </div>
                  <span className="text-[10px] font-black tracking-widest uppercase text-gray-400">{item.label}</span>
                </div>
              ))}
            </div>

            <div className="space-y-6 text-gray-600 leading-relaxed text-sm md:text-base">
              <p>
                Ayant pour volonté et pour objectif d'aider les collaborateurs en les accompagnant dans leur recherche de performance, l'équipe de <strong className="text-black">Okem Consulting</strong> révèle l'intelligence collective et la motivation du groupe par le biais du jeu, de l'originalité, et de la créativité.
              </p>
              <p>
                A travers la « <strong className="text-pink-600 italic">mémométhode</strong> », proposée par N'zo Okem dans son livre « <strong className="text-black underline">Mémoire positive</strong> », découvrez en workshop comment rendre vos échanges plus efficaces à travers de nombreux « insights » simples à mettre en œuvre au quotidien.
              </p>
            </div>
          </div>

          {/* Col 2: Améliorer votre communication */}
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-black uppercase leading-tight text-black">
                Améliorer votre communication grâce à la memomethode
              </h2>
              <div className="w-20 h-1.5 bg-pink-600"></div>
            </div>

            <div className="flex justify-between items-start gap-4">
              {[
                { label: 'MEMOIRE', icon: 'fa-brain' },
                { label: 'BUSINESS', icon: 'fa-briefcase' },
                { label: 'CROISSANCE', icon: 'fa-seedling' }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center space-y-4 w-1/3">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-pink-600 flex items-center justify-center text-white text-2xl shadow-lg shadow-pink-600/20">
                    <i className={`fas ${item.icon}`}></i>
                  </div>
                  <span className="text-[10px] font-black tracking-widest uppercase text-gray-400">{item.label}</span>
                </div>
              ))}
            </div>

            <div className="space-y-6 text-gray-600 leading-relaxed text-sm md:text-base">
              <p className="font-medium text-gray-800 italic">
                Comment solliciter votre mémoire pour optimiser votre communication ?
              </p>
              <p>
                Vous souhaitez que l'on se <strong className="text-black">souvienne de votre entreprise</strong> ? Vous aimeriez <strong className="text-black">fidéliser</strong> vos anciens et <strong className="text-black">attirer de nouveaux clients</strong>, asseoir votre marque employeur de manière pérenne, attirer et <strong className="text-black">fidéliser des talents</strong> pour aller encore plus loin ?
              </p>
              <p>
                Découvrez, grâce à la <strong className="text-pink-600">mémométhode</strong> développée par <strong className="text-black">N'zo Okem</strong>, les enjeux business d'une bonne mémoire, ce qu'elle dit de vous et comment la cultiver dans vos affaires.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: VIDEO CALLOUT */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-6xl font-black text-black leading-[0.9] uppercase">
              La <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-400 to-orange-400">Mémoire</span> un atout pour développer votre business !
            </h2>
            <div className="space-y-6 text-gray-600">
              <p className="text-lg">
                Chefs d’entreprise, dirigeants, responsables des ressources humaines, encadrants et managers... vous tous qui souhaitez <strong className="text-black">optimiser vos résultats</strong>.
              </p>
              <button className="flex items-center space-x-4 group">
                <div className="w-12 h-12 rounded-full bg-pink-600 flex items-center justify-center text-white transition-transform group-hover:scale-110">
                  <i className="fas fa-play ml-1"></i>
                </div>
                <span className="font-black uppercase tracking-widest text-sm text-black group-hover:text-pink-600 transition-colors">Voir l'atelier en vidéo</span>
              </button>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video bg-black">
             <iframe
                src="https://player.vimeo.com/video/462594473?autoplay=0&loop=1&background=0&muted=0&color=db2777"
                className="absolute inset-0 w-full h-full border-0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="Atelier Memomethode"
              ></iframe>
          </div>
        </div>
      </section>

      {/* SECTION 4: DOMAINES DE COMPÉTENCE (BLACK SECTION) */}
      <section className="py-32 bg-black text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-pink-600/5 blur-[120px] rounded-full"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 space-y-4">
            <span className="text-pink-600 font-bold tracking-[0.3em] uppercase text-xs">Nos Services</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase italic">Nos domaines de compétence en Entreprise</h2>
            <button className="mt-8 bg-pink-600 text-white px-8 py-3 rounded-md font-bold text-sm uppercase tracking-widest hover:bg-pink-700 transition-all">
              Télécharger le programme de formation
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {competencies.map((comp, i) => (
              <div key={i} className="group bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all duration-500 flex flex-col justify-between">
                <div className="space-y-6">
                  <div className="w-12 h-12 rounded-xl bg-pink-600/20 flex items-center justify-center text-pink-600 text-2xl group-hover:scale-110 transition-transform">
                    <i className={`fas ${comp.icon}`}></i>
                  </div>
                  <h3 className="text-lg font-black uppercase leading-tight">{comp.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed font-light">{comp.desc}</p>
                </div>
                <div className="mt-8 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-pink-600 group-hover:bg-pink-600 transition-all">
                  <i className="fas fa-arrow-right text-xs"></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: HUMAN BRANDING & BOOK */}
      <section className="py-32 px-6 md:px-16 lg:px-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
          <div className="w-full lg:w-1/2 space-y-12">
            <h2 className="text-4xl md:text-5xl font-black uppercase leading-none text-black">
              Le Concept de Human Branding : <br/>
              <span className="text-gray-400">des Femmes et des Hommes qui marquent</span>
            </h2>

            {/* Tabs */}
            <div className="space-y-8">
              <div className="flex border-b border-gray-100">
                {[
                  { id: 'positive', label: 'La Mémoire Positive' },
                  { id: 'methode', label: 'La MEMOMETHODE' },
                  { id: 'human', label: 'Human Branding' }
                ].map((tab) => (
                  <button 
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`pb-4 px-4 text-[10px] md:text-xs font-black uppercase tracking-widest transition-all relative
                      ${activeTab === tab.id ? 'text-pink-600' : 'text-gray-400 hover:text-black'}`}
                  >
                    {tab.label}
                    {activeTab === tab.id && <div className="absolute bottom-0 left-0 w-full h-1 bg-pink-600"></div>}
                  </button>
                ))}
              </div>

              <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 min-h-[250px] animate-in slide-in-from-bottom-4">
                {activeTab === 'positive' && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-black">Un atout pour votre business</h3>
                    <p className="text-gray-600 leading-relaxed">
                      La Mémoire Positive est bien plus qu'une simple technique de mémorisation. C'est une méthode globale pensée pour fluidifier la communication et rendre les échanges plus efficaces. Basée sur la confiance en soi et l'acceptation de la différence, elle vous permet de tutoyer la performance avec bienveillance.
                    </p>
                  </div>
                )}
                {activeTab === 'methode' && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-black">Une pédagogie ludique</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Depuis 2016, Okem N'zo Prod apporte aux entreprises des réponses à leurs besoins sous forme d'activités ludiques, d'animations, mais aussi d'accompagnement, de formation et de coaching individuel. Okem Consulting est un collectif de Coachs spécialisés dans l'humain.
                    </p>
                  </div>
                )}
                {activeTab === 'human' && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-black">Inspirer la considération</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Imaginez l'impact sur un client si vous vous remémorez sa dernière discussion sans fiches ni tablette. Écouter l'autre, c'est lui donner de la considération. C'est la force du Human Branding : des femmes et des hant qui marquent et qui sont mémorables.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative">
            <div className="absolute -inset-10 bg-yellow-400/10 rounded-full blur-[100px] -z-10"></div>
            <div className="bg-yellow-400 p-8 md:p-16 rounded-3xl transform hover:rotate-2 transition-transform duration-700 shadow-2xl">
              <div className="bg-white p-4 md:p-8 rounded shadow-lg border-b-8 border-pink-600">
                <div className="flex flex-col items-center text-center space-y-6">
                  <h3 className="text-4xl md:text-6xl font-black text-black leading-none uppercase tracking-tighter">
                    MÉMOIRE<br/>POSITIVE
                  </h3>
                  <div className="w-full h-1 bg-black"></div>
                  <div className="flex items-center space-x-4">
                     <i className="fas fa-brain text-5xl text-cyan-400"></i>
                     <i className="fas fa-plus text-xl text-gray-300"></i>
                     <i className="fas fa-lightbulb text-5xl text-yellow-500"></i>
                  </div>
                  <p className="font-bold text-gray-800 uppercase tracking-widest text-sm">
                    Mettez votre mémoire au service de votre communication
                  </p>
                  <span className="text-xs font-black bg-black text-white px-4 py-1">N'ZO OKEM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-pink-600 text-white text-center">
        <h3 className="text-3xl md:text-5xl font-black uppercase mb-8 italic">Prêt à transformer vos équipes ?</h3>
        <button 
          onClick={onContactClick}
          className="bg-white text-pink-600 px-12 py-4 rounded-full font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all shadow-2xl transform hover:scale-105 active:scale-95"
        >
          Contactez N'zo Okem
        </button>
      </section>
    </div>
  );
};

export default FormationPage;
