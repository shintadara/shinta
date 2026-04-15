"use client";

import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Heart, Star, Sparkles, Diamond } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/shintadara/shinta.git', label: 'GitHub' },
    { icon: Instagram, href: 'https://instagram.com/3nt0w', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="relative bg-[#000814] pt-32 pb-12 overflow-hidden border-t border-white/5">
      {/* 1. LUXURY WATERMARK (Inisial Nama) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none overflow-hidden">
        <div className="absolute -top-20 -right-20 text-[20rem] font-serif italic font-light leading-none tracking-tighter text-white">
          KM
        </div>
      </div>

      <div className="container relative z-10 px-8 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-16 mb-24">
          
          {/* BRANDING AREA */}
          <div className="text-center md:text-left flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 border border-[#F4C2C2]/30 rounded-full">
                <Star className="text-[#F4C2C2] fill-[#F4C2C2]/10" size={20} />
              </div>
              <h3 className="text-4xl font-serif italic font-light text-white tracking-widest">
                SHINTA <span className="text-[#F4C2C2] opacity-70">DARA</span>
              </h3>
            </div>
            <div className="flex items-center gap-3">
               <Sparkles size={12} className="text-[#FFD700] opacity-50" />
               <p className="text-slate-400 font-sans font-bold uppercase tracking-[0.6em] text-[9px]">
                 Digital Architect & Aesthetic Developer
               </p>
            </div>
          </div>

          {/* SOCIAL LINKS (Floating Glass Style) */}
          <div className="flex gap-6">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                whileHover={{ y: -8, scale: 1.1 }}
                className="w-14 h-14 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white hover:text-[#000814] hover:bg-[#F4C2C2] transition-all duration-500"
              >
                <social.icon size={20} strokeWidth={1.5} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* 2. BOTTOM SIGNATURE SECTION */}
        <div className="w-full pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Status Indicators */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <motion.div 
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1.5 h-1.5 bg-[#FFD700] rounded-full shadow-[0_0_8px_#FFD700]" 
              />
              <span className="text-[9px] font-sans font-black text-white/40 uppercase tracking-[0.4em]">Available for Mastery</span>
            </div>
            <div className="h-4 w-[1px] bg-white/10" />
            <div className="flex items-center gap-2">
              <Diamond size={12} className="text-[#F4C2C2]" />
              <span className="text-[9px] font-sans font-black text-slate-500 uppercase tracking-[0.4em]">Aura v.2026</span>
            </div>
          </div>

          {/* Copyright with Serif Style */}
          <div className="flex items-center gap-3 text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-slate-500">
            <span>© {currentYear}</span>
            <span className="w-8 h-[1px] bg-white/10" />
            <div className="flex items-center gap-2">
               <span>Curated by</span>
               <Heart size={10} className="text-[#F4C2C2] fill-[#F4C2C2]/20" />
               <span className="text-white italic font-serif lowercase tracking-normal text-sm">SHINTA</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}