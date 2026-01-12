"use client";

import React from "react";
import { Phone } from "lucide-react";

/**
 * StickyCTA Component
 * 
 * A pixel-perfect clone of the floating sticky CTA bar at the bottom of the screen.
 * Features:
 * - Green gradient background with glassmorphism (backdrop-blur)
 * - Pulse animations on indicators
 * - Responsive layout for mobile and desktop
 * - Direct phone linkage
 */
const StickyCTA = () => {
  return (
    <div className="fixed bottom-6 left-0 right-0 z-[100] px-4 pointer-events-none">
      <div className="max-w-2xl mx-auto pointer-events-auto">
          <a
            href="tel:0781767460"
            className="flex items-center justify-center gap-3 sm:gap-5 bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-600 text-white px-5 sm:px-8 py-2.5 sm:py-3.5 rounded-xl sm:rounded-3xl shadow-[0_15px_40px_rgba(0,0,0,0.3),0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.4),0_0_30px_rgba(34,197,94,0.4)] hover:scale-[1.02] transition-all duration-500 backdrop-blur-xl border border-white/20 relative overflow-hidden group"
            style={{
              fontSize: "14px",
            }}
          >
            {/* Subtle Shine Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shine" />

            {/* Animated Phone Icon Circle */}
            <div className="flex items-center justify-center w-8 h-8 sm:w-11 sm:h-11 bg-white/30 rounded-full backdrop-blur-md shadow-inner group-hover:scale-110 transition-transform duration-300">
              <Phone size={20} fill="currentColor" strokeWidth={0} className="text-white animate-bounce" />
            </div>

            {/* Text Content */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3">
              <div className="flex flex-col">
                <span className="text-[9px] sm:text-[10px] font-bold opacity-90 uppercase tracking-[0.15em]">
                  Urgence 24h/24
                </span>
                <span 
                  className="text-lg sm:text-2xl font-black tracking-tighter sm:tracking-normal leading-none sm:leading-tight"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  07 81 76 74 60
                </span>
              </div>
            </div>

            {/* Status Indicator (Desktop Only) */}
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-black/10 rounded-full backdrop-blur-md border border-white/10 shadow-inner">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400"></span>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider">Disponible</span>
            </div>
          </a>
      </div>
    </div>
  );
};

export default StickyCTA;