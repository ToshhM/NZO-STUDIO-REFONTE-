
import React, { useState, useRef } from 'react';

const ContactPage: React.FC = () => {
  const formRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulation d'envoi vers nzo@nzo.fr
    console.log("Sending email to nzo@nzo.fr with data:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="animate-in fade-in duration-1000 bg-white selection:bg-pink-600 selection:text-white pb-24">
      {/* SECTION 1: HERO */}
      <section className="relative h-[60vh] w-full overflow-hidden flex items-center justify-center text-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80" 
            className="w-full h-full object-cover brightness-[0.3]" 
            alt="Office"
          />
        </div>

        <div className="relative z-10 px-6 max-w-5xl">
          <span className="text-white font-bold text-sm tracking-[0.4em] uppercase mb-4 block">
            N'zo Production
          </span>
          <h1 className="text-4xl md:text-7xl font-black text-white uppercase leading-tight mb-4">
            Agence événementielle paris
          </h1>
          <p className="text-lg text-white/80 font-light mb-10">Contactez-nous</p>
          <button 
            onClick={scrollToForm}
            className="border-2 border-white px-10 py-3 text-white font-bold hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest text-sm active:scale-95"
          >
            Faire un devis
          </button>
        </div>
      </section>

      {/* SECTION 2: CONTENT GRID */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          
          {/* LEFT: FORM */}
          <div className="space-y-12" ref={formRef}>
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-black text-black leading-none">Dites-nous tout !</h2>
              <div className="w-20 h-1.5 bg-pink-600"></div>
            </div>

            <p className="text-gray-600 leading-relaxed font-light text-lg">
              Chez <strong className="text-black">OKEM N'zo Prod</strong>, notre équipe événementielle assure une organisation sans faille des événements et des animations en distanciel comme en présentiel pour un portefeuille diversifié de clients. Une Question, une Suggestion ou une Demande de devis. Remplissez le formulaire ci-dessous.
            </p>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-gray-400">Prénom & Nom</label>
                <input 
                  type="text" 
                  required
                  placeholder="Votre prénom & nom"
                  className="w-full border-b-2 border-gray-200 py-3 px-1 focus:outline-none focus:border-pink-600 transition-colors text-black placeholder:text-gray-300"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-gray-400">Votre Email</label>
                <input 
                  type="email" 
                  required
                  placeholder="Email"
                  className="w-full border-b-2 border-gray-200 py-3 px-1 focus:outline-none focus:border-pink-600 transition-colors text-black placeholder:text-gray-300"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-gray-400">Message</label>
                <textarea 
                  required
                  rows={6}
                  placeholder="Message"
                  className="w-full border-2 border-gray-200 p-4 focus:outline-none focus:border-pink-600 transition-colors text-black placeholder:text-gray-300 rounded-md resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <div className="flex items-center space-x-6">
                <button 
                  type="submit"
                  className="bg-pink-600 text-white px-10 py-3 rounded-full font-black uppercase tracking-widest hover:bg-black transition-all shadow-xl shadow-pink-600/20 active:scale-95"
                >
                  Envoyer
                </button>
                {submitted && (
                  <span className="text-green-600 font-bold animate-in fade-in slide-in-from-left-2">
                    Message envoyé avec succès !
                  </span>
                )}
              </div>
            </form>
          </div>

          {/* RIGHT: INFO & MAP */}
          <div className="space-y-16">
            <div className="space-y-10">
              <div className="text-center md:text-left">
                <h3 className="text-4xl md:text-5xl font-light text-gray-400 uppercase tracking-tighter">INFO PRATIQUE</h3>
                <h4 className="text-4xl md:text-5xl font-black text-gray-500 uppercase tracking-tight">OKEM N'zo Prod</h4>
              </div>

              <div className="space-y-6 text-gray-600 font-medium">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center text-pink-600">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <p className="text-pink-600 font-black">5 Rue Bellanger 92300 Levallois-Perret</p>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center text-pink-600">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <a href="tel:+33625618439" className="hover:text-pink-600 transition-colors">
                    +33(0)6 25 61 84 39
                  </a>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center text-pink-600">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <a href="mailto:contact@nzo.fr" className="hover:text-pink-600 transition-colors">
                    contact@nzo.fr
                  </a>
                </div>
              </div>
            </div>

            <div className="relative w-full aspect-square md:aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2623.51860010078!2d2.28540411567538!3d48.88931297929053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66f9175d69115%3A0xc3f8e583c4f74d9e!2s5%20Rue%20Bellanger%2C%2092300%20Levallois-Perret!5e0!3m2!1sfr!2sfr!4v1614764832415!5m2!1sfr!2sfr" 
                className="absolute inset-0 w-full h-full border-0 grayscale contrast-125"
                allowFullScreen={true} 
                loading="lazy"
                title="Google Maps Location"
              ></iframe>
              <div className="absolute top-4 left-4 bg-white p-4 rounded-xl shadow-lg border border-gray-100 max-w-[200px]">
                <h5 className="font-black text-black text-sm mb-1 uppercase">5 Rue Bellanger</h5>
                <p className="text-[10px] text-gray-500 uppercase tracking-wider">92300 Levallois-Perret</p>
                <a href="https://maps.google.com" target="_blank" className="text-pink-600 text-[10px] font-black uppercase mt-2 block hover:underline">Agrandir le plan</a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default ContactPage;
