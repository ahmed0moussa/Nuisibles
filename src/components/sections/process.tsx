import React from 'react';
import { Phone, FileText, Zap, CircleCheckBig } from 'lucide-react';

const ProcessSection = () => {
  const steps = [
    {
      icon: <Phone className="w-7 h-7 sm:w-[28px] sm:h-[28px] text-white" />,
      title: "Contactez-nous",
      description: "Appelez-nous pour décrire votre problème et obtenir des conseils immédiats"
    },
    {
      icon: <FileText className="w-7 h-7 sm:w-[28px] sm:h-[28px] text-white" />,
      title: "Devis Personnalisé",
      description: "Recevez un devis gratuit adapté à votre situation en 30 minutes"
    },
    {
      icon: <Zap className="w-7 h-7 sm:w-[28px] sm:h-[28px] text-white" />,
      title: "Intervention en 24h",
      description: "Nos techniciens certifiés interviennent rapidement chez vous"
    },
    {
      icon: <CircleCheckBig className="w-7 h-7 sm:w-[28px] sm:h-[28px] text-white" />,
      title: "Suivi et Garantie",
      description: "Contrôle post-traitement et garantie satisfait ou remboursé"
    }
  ];

  return (
    <section className="px-[16px] py-[40px] sm:py-16 bg-[#16a34a] overflow-hidden">
      <div className="max-w-[1152px] mx-auto w-full">
        {/* Header content */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-[24px] sm:text-[30px] font-bold text-white mb-2 leading-[1.2]">
            Notre Processus d'Intervention
          </h2>
          <p className="text-[14px] sm:text-[16px] text-white/90 font-normal">
            Une méthode éprouvée en 4 étapes
          </p>
        </div>

        {/* Steps Grid */}
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-4 items-stretch justify-center">
          {steps.map((step, index) => (
            <div key={index} className="text-center flex-1 transition-transform hover:scale-105 duration-300">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 border border-white/10 shrink-0">
                {step.icon}
              </div>
              <h3 className="text-[16px] sm:text-[18px] font-bold text-white mb-2 leading-[1.4]">
                {step.title}
              </h3>
              <p className="text-[12px] sm:text-[14px] text-white/80 leading-[1.6] max-w-[240px] mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
