import React from 'react';
import { Shield, Zap, CircleCheckBig, Users, Phone } from 'lucide-react';
import Image from "next/image";

const WhyChooseUs = () => {
  const benefits = [
    {
      title: "Techniciens Certifiés",
      description: "Nos experts sont formés et certifiés Certibiocide par le ministère de la Transition écologique.",
      icon: <Shield className="text-white w-5 h-5" />,
    },
    {
      title: "Intervention Rapide",
      description: "Disponibles 24h/24 et 7j/7, nous intervenons sous 24h pour toutes vos urgences.",
      icon: <Zap className="text-white w-5 h-5" />,
    },
    {
      title: "Garantie Résultat",
      description: "Nous garantissons l'efficacité de nos interventions avec un suivi personnalisé.",
      icon: <CircleCheckBig className="text-white w-5 h-5" />,
    },
    {
      title: "Clients Satisfaits",
      description: "Plus de 5000 clients nous font confiance chaque année pour protéger leur habitat.",
      icon: <Users className="text-white w-5 h-5" />,
    },
  ];

  return (
    <section className="relative px-4 py-12 sm:py-16 overflow-hidden min-h-[500px]">
      {/* Background with Image and Dark Gradient Overlays */}
      <div className="absolute inset-0 z-0">
          {/* Desktop Image */}
          <Image
            src="/images/why-choose-us-desktop.png"
            alt="Technicien ATTRAPES NUISIBLES en intervention"
            fill
            priority
            className="hidden md:block object-cover"
          />

          {/* Mobile Image */}
          <Image
            src="/images/why-choose-us.png"
            alt="Technicien ATTRAPES NUISIBLES en intervention"
            fill
            className="block md:hidden object-cover"
          />
        {/* Multi-layered gradient overlay to match the high-level design and screenshots */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/75 to-black/60"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Section Heading */}
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-white mb-4 leading-tight">
            Pourquoi Choisir ATTRAPES NUISIBLES ?
          </h2>
          
          <p className="text-[14px] sm:text-[18px] text-gray-200 mb-8 leading-relaxed max-w-2xl">
            Depuis plus de 10 ans, ATTRAPES NUISIBLES est votre partenaire de confiance pour l'éradication de tous types de nuisibles en Île-de-France.
          </p>

          {/* Benefit Blocks Grid/List */}
          <div className="space-y-6 mb-10">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4">
                {/* Icon Badge */}
                <div className="w-10 h-10 bg-[#16a34a] rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                  {benefit.icon}
                </div>
                
                <div>
                  <h3 className="text-[16px] sm:text-[18px] font-bold text-white mb-1 leading-tight">
                    {benefit.title}
                  </h3>
                  <p className="text-[13px] sm:text-[14px] text-gray-300 max-w-lg leading-snug">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <a 
            href="tel:0781767460" 
            className="inline-flex items-center gap-2 bg-[#16a34a] text-white px-6 py-3 rounded-lg font-bold text-[16px] hover:bg-[#15803d] transition-all transform hover:scale-105 shadow-lg active:scale-95"
          >
            <Phone className="w-5 h-5 fill-current" />
            Contactez-nous
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;