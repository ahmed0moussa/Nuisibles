"use client";

import React from 'react';
import { Phone, MapPin, Clock, Shield, CircleCheckBig, Facebook } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center pt-20">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7f8b8070-f00e-409f-820a-d09e25a47a08-plum-pickle-85886130-figma-site/assets/images/47ab460c4008fb0f357d7dfc9cfb7d7713826d2f-2.png" 
          alt="Professionnel en intervention anti-nuisibles" 
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay as per visual instructions and computed styles */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 px-4 py-8 sm:py-16 text-center w-full">
        <div className="max-w-3xl mx-auto">
          {/* Badge */}
          <a 
            href="tel:0781767460" 
            className="inline-block bg-[#16a34a] px-4 py-1.5 rounded-full mb-3 hover:bg-[#15803d] transition-colors cursor-pointer"
          >
            <span className="text-sm font-semibold text-white">Intervention 7j/7 24h/24</span>
          </a>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white leading-tight tracking-tight">
            Protection et Éradication Contre Les Nuisibles
          </h1>

          {/* Location Badge */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <MapPin size={18} className="text-[#4ade80] flex-shrink-0" />
            <span className="text-sm sm:text-base text-white font-medium">Paris et toute l&apos;Île-de-France</span>
          </div>

          {/* Highlights List */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mb-8">
            <div className="flex items-center gap-2 text-white">
              <Clock size={20} className="text-[#4ade80] flex-shrink-0" />
              <span className="text-sm sm:text-lg font-medium">Intervention rapide 24h/24 7j/7</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <Shield size={20} className="text-[#4ade80] flex-shrink-0" />
              <span className="text-sm sm:text-lg font-medium">Techniciens certifiés</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <CircleCheckBig size={20} className="text-[#4ade80] flex-shrink-0" />
              <span className="text-sm sm:text-lg font-medium">Résultats garantis</span>
            </div>
          </div>

            {/* Primary CTA */}
            <a 
              href="tel:0781767460" 
              className="inline-flex items-center gap-3 bg-[#16a34a] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#15803d] transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
            <Phone size={22} fill="white" />
            Urgent Appelez-nous
          </a>

          {/* Certification Logos */}
          <div className="flex items-center justify-center gap-2 mt-10">
            <img 
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7f8b8070-f00e-409f-820a-d09e25a47a08-plum-pickle-85886130-figma-site/assets/images/f88d97cae4d0b31a8e67ea7b3d2a8a601d5319c0-3.png" 
              alt="CERTIBIOCIDE Certification labels" 
              className="h-10 sm:h-16 w-auto opacity-95 brightness-110"
            />
          </div>
        </div>
      </div>

      {/* Style Overrides for specific UI elements per high-level design */}
      <style jsx global>{`
        .hero-overlay {
          background: linear-gradient(to bottom, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.45));
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
