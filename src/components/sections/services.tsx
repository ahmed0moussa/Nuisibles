import React from 'react';
import Image from 'next/image';
import { Check } from 'lucide-react';

const services = [
  {
    title: "Dératisation",
    description: "Élimination complète des rats et souris avec des méthodes professionnelles et sécurisées.",
    image: "/images/deratisation.png",
    features: [
      "Inspection complète",
      "Appâts sécurisés",
      "Pièges professionnels",
      "Suivi post-intervention"
    ]
  },
  {
    title: "Punaises de Lit",
    description: "Éradication totale des punaises de lit grâce à des traitements thermiques et chimiques ciblés.",
    image: "/images/punaises-de-lit.png",
    features: [
      "Détection canine",
      "Traitement thermique",
      "Pulvérisation pro",
      "Garantie résultat"
    ]
  },
  {
    title: "Cafards & Blattes",
    description: "Traitement radical contre les cafards avec des produits professionnels longue durée.",
    image: "/images/cafards-blattes.png",
    features: [
      "Gel anti-cafards",
      "Traitements ciblés",
      "Zones infestées",
      "Prévention"
    ]
  },
  {
    title: "Guêpes & Frelons",
    description: "Destruction sécurisée des nids de guêpes et frelons avec équipement professionnel.",
    image: "/images/guepes-frelons.png",
    features: [
      "Destruction nids",
      "Équipement sécurisé",
      "Intervention rapide",
      "Protection totale"
    ]
  },
  {
    title: "Désinfection",
    description: "Nettoyage et désinfection professionnelle des espaces pour éliminer germes et bactéries.",
    image: "/images/desinfection.png",
    features: [
      "Surfaces complètes",
      "Virucides certifiés",
      "Antibactérien",
      "Protocole sanitaire"
    ]
  }
];

export default function Services() {
  return (
    <section className="px-4 py-12 sm:py-16 bg-[#f9fafb]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-[30px] font-bold text-[#111827] mb-2 leading-[1.2]">
            Nos Services Professionnels
          </h2>
          <p className="text-sm sm:text-base text-[#4b5563] max-w-2xl mx-auto">
            Des solutions efficaces et garanties pour éradiquer toutes les infestations
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full border border-gray-100"
            >
              {/* Card Image */}
              <div className="relative h-32 w-full">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                />
              </div>

              {/* Card Content */}
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-base sm:text-[18px] font-bold text-[#111827] mb-2 leading-[1.4]">
                  {service.title}
                </h3>
                <p className="text-[13px] leading-[1.5] text-[#4b5563] mb-4">
                  {service.description}
                </p>

                {/* Feature List */}
                <ul className="space-y-2 mb-6 flex-grow">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-2">
                      <Check className="w-[14px] h-[14px] text-[#16a34a] flex-shrink-0 mt-1" strokeWidth={3} />
                      <span className="text-[13px] text-[#111827] leading-tight">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                  {/* CTA Button */}
                  <a 
                    href="tel:0781767460" 
                    className="w-full bg-[#16a34a] text-white py-2 rounded-lg hover:bg-[#15803d] transition-colors text-center font-semibold text-sm shadow-sm"
                  >
                    Nous appeler
                  </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
