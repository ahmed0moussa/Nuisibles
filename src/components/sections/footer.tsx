"use client";

import React from 'react';
import Image from 'next/image';
import { Facebook, Phone, Mail, MapPin, Linkedin, Instagram, Twitter, Bug, Crosshair } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'Dératisation', href: '#' },
    { name: 'Désinsectisation', href: '#' },
    { name: 'Punaises de lit', href: '#' },
    { name: 'Cafards & Blattes', href: '#' },
    { name: 'Désinfection', href: '#' },
  ];

  const informations = [
    { name: 'À propos de nous', href: '#' },
    { name: 'Nos certifications', href: '#' },
    { name: 'Zone d\'intervention', href: '#' },
    { name: 'Blog et conseils', href: '#' },
    { name: 'FAQ', href: '#' },
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: '#', label: 'Facebook' },
    { icon: <Twitter className="w-5 h-5 text-white" />, href: '#', label: 'Twitter' },
    { icon: <Instagram className="w-5 h-5" />, href: '#', label: 'Instagram' },
    { icon: <Linkedin className="w-5 h-5" />, href: '#', label: 'LinkedIn' },
    { icon: <Facebook className="w-5 h-5" />, href: '#', label: 'Social' },
  ];

  return (
    <footer className="bg-[#0f172a] text-white pt-16 pb-8 px-4 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
            {/* Company Column */}
            <div className="flex flex-col gap-6">
                <a href="/" className="flex items-center gap-3 group">
                  <div className="flex items-center justify-center w-10 h-10 bg-[#16a34a] rounded-lg shadow-inner relative group">
                    <Bug className="text-white/40" size={18} />
                    <Crosshair className="text-white absolute inset-0 m-auto" size={26} strokeWidth={2.5} />
                  </div>
                    <div className="flex flex-col">
                      <span className="text-white font-extrabold text-xl tracking-tight uppercase leading-none">
                        Attrape <span className="text-[#16a34a]">Nuisibles</span>
                      </span>
                      <span className="text-white/70 text-[10px] font-bold tracking-[0.2em] uppercase leading-none mt-1">
                        Expert en dératisation
                      </span>
                    </div>
                </a>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Votre expert en lutte contre les nuisibles. Solutions professionnelles et écologiques depuis 2010.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/5"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-lg font-bold mb-6">Services</h3>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-gray-400 hover:text-green-500 text-sm transition-colors"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Informations Column */}
          <div>
            <h3 className="text-lg font-bold mb-6">Informations</h3>
            <ul className="space-y-4">
              {informations.map((info) => (
                <li key={info.name}>
                  <a
                    href={info.href}
                    className="text-gray-400 hover:text-green-500 text-sm transition-colors"
                  >
                    {info.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact</h3>
            <ul className="space-y-5">
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <a href="tel:0781767460" className="text-gray-400 hover:text-white text-sm transition-colors">
                    07 81 76 74 60
                  </a>
                </li>
<li className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <a href="mailto:attrapenuisibles@gmail.com" className="text-gray-400 hover:text-white text-sm transition-colors">
                      attrapenuisibles@gmail.com
                    </a>
                  </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  123 Avenue de la République<br />
                  75011 Paris, France
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
            <p>© {currentYear} ATTRAPE NUISIBLES. Tous droits réservés.</p>
            <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-white transition-colors">Politique de confidentialité</a>
            <a href="#" className="hover:text-white transition-colors">CGV</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
