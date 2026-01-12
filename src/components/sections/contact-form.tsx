"use client";

import React from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const ContactFormSection = () => {
  return (
    <section className="px-4 py-12 sm:py-16 bg-[#1e293b] font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left Column: Contact Information */}
            <div className="text-white">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 leading-tight text-white">
                Besoin d'une Intervention Rapide ?
              </h2>
              <p className="text-sm sm:text-base text-white/90 mb-8 sm:mb-10 max-w-xl">
                Notre équipe est disponible 24h/24 et 7j/7 pour répondre à vos urgences. Devis gratuit en 30 minutes.
              </p>

              <div className="space-y-6 sm:space-y-8">
                {/* Phone contact */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-white/70 mb-1">Appelez-nous maintenant</p>
                      <a href="tel:0781767460" className="text-xl sm:text-2xl font-bold text-white hover:text-green-400 transition-colors">
                        07 81 76 74 60
                      </a>
                  </div>
                </div>

                {/* Email contact */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-white/70 mb-1">Écrivez-nous</p>
                    <a href="mailto:attrapenuisibles@gmail.com" className="text-base sm:text-lg font-bold text-white hover:text-green-400 transition-colors">
                      attrapenuisibles@gmail.com
                    </a>
                  </div>
                </div>

                {/* Intervention Zones */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="w-full">
                    <p className="text-xs sm:text-sm text-white/70 mb-1">Zone d'intervention</p>
                    <h3 className="text-base sm:text-lg font-bold text-white mb-3">
                      Île-de-France & régions limitrophes
                    </h3>
                    
                    {/* Departments Grid */}
                    <div className="bg-[#2d3a4f] rounded-xl p-4 sm:p-5 border border-slate-700/50">
                      <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-3">
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                          <span className="text-[11px] sm:text-xs text-white">Paris (75)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                          <span className="text-[11px] sm:text-xs text-white">Seine-et-Marne (77)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                          <span className="text-[11px] sm:text-xs text-white">Yvelines (78)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                          <span className="text-[11px] sm:text-xs text-white">Essonne (91)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                          <span className="text-[11px] sm:text-xs text-white">Hauts-de-Seine (92)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                          <span className="text-[11px] sm:text-xs text-white">Seine-Saint-Denis (93)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                          <span className="text-[11px] sm:text-xs text-white">Val-de-Marne (94)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                          <span className="text-[11px] sm:text-xs text-white">Val-d'Oise (95)</span>
                        </div>
                      </div>
                      <p className="text-[10px] sm:text-xs text-white/50 italic text-center border-t border-slate-600/50 pt-2">
                        Tous les départements d'Île-de-France couverts
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Lead Capture Form */}
            <div className="bg-[#2d3a4f] rounded-2xl p-6 sm:p-8 shadow-2xl border border-slate-700/50">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">
                Demande de Devis Gratuit
              </h2>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-white/90 mb-1.5">
                    Nom complet <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Jean Dupont"
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-600 bg-[#1e293b] text-white focus:outline-none focus:ring-2 focus:ring-green-600/20 focus:border-green-600 transition-all text-sm sm:text-base"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-white/90 mb-1.5">
                    Téléphone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="06 12 34 56 78"
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-600 bg-[#1e293b] text-white focus:outline-none focus:ring-2 focus:ring-green-600/20 focus:border-green-600 transition-all text-sm sm:text-base"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-white/90 mb-1.5">
                    E-mail <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="jean.dupont@email.com"
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-600 bg-[#1e293b] text-white focus:outline-none focus:ring-2 focus:ring-green-600/20 focus:border-green-600 transition-all text-sm sm:text-base"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-white/90 mb-1.5">
                    Type de nuisible <span className="text-red-500">*</span>
                  </label>
                  <select className="w-full px-4 py-2.5 rounded-lg border border-slate-600 bg-[#1e293b] text-white focus:outline-none focus:ring-2 focus:ring-green-600/20 focus:border-green-600 transition-all text-sm sm:text-base">
                    <option value="" className="bg-[#1e293b]">Sélectionnez...</option>
                    <option value="rats" className="bg-[#1e293b]">Dératisation (Rats/Souris)</option>
                    <option value="punaises" className="bg-[#1e293b]">Punaises de lit</option>
                    <option value="cafards" className="bg-[#1e293b]">Cafards & Blattes</option>
                    <option value="frelons" className="bg-[#1e293b]">Guêpes & Frelons</option>
                    <option value="desinfection" className="bg-[#1e293b]">Désinfection</option>
                    <option value="autre" className="bg-[#1e293b]">Autre</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-white/90 mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Décrivez votre problème..."
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-600 bg-[#1e293b] text-white focus:outline-none focus:ring-2 focus:ring-green-600/20 focus:border-green-600 transition-all text-sm sm:text-base resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3.5 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 text-base sm:text-lg mt-4"
                >
                  Envoyer ma demande
                </button>
              </form>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
