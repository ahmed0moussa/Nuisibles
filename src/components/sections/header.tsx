"use client";

import React from 'react';
import { Facebook, Phone, Bug, Crosshair } from 'lucide-react';

/**
 * Header component for ATTRAPENUISIBLES.
 * Features a transparent navigation bar with the company logo,
 * social media icons, and a call-to-action button.
 */
const Header = () => {
  return (
    <header className="bg-transparent absolute top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 sm:py-4 flex items-center justify-between gap-4">
          {/* Company Logo (Left) */}
          <div className="flex-shrink-0">
              <a href="/" className="flex items-center gap-3 group">
                <div className="flex items-center justify-center w-10 h-10 bg-[#16a34a] rounded-lg shadow-inner relative group">
                  <Bug className="text-white/40" size={18} />
                  <Crosshair className="text-white absolute inset-0 m-auto" size={26} strokeWidth={2.5} />
                </div>
                <div className="flex flex-col">
                    <span className="text-white font-extrabold text-xl sm:text-2xl tracking-tight uppercase leading-none">
                      Attrape <span className="text-[#16a34a]">Nuisibles</span>
                    </span>
                  <span className="text-white/70 text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase leading-none mt-1">
                    Expert en dératisation
                  </span>
                </div>
              </a>
          </div>

        {/* Right side actions */}
        <div className="flex items-center gap-4">
          {/* Social Icons (Desktop only) */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#"
              className="w-9 h-9 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-all border border-white/20"
              aria-label="Facebook"
            >
              <Facebook size={16} className="fill-current" />
            </a>
            <a
              href="#"
              className="w-9 h-9 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-all border border-white/20"
              aria-label="TikTok"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
              </svg>
            </a>
          </div>

          {/* CTA Button */}
          <a
            href="tel:0781767460"
            className="flex items-center gap-2 bg-[#16a34a] hover:bg-[#15803d] text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-bold text-sm sm:text-base transition-all shadow-lg hover:scale-105"
          >
            <Phone size={16} className="fill-white" />
            <span>Devis Gratuit</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
