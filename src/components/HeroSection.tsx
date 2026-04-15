"use client";

import { motion } from 'framer-motion';
import { Github, Instagram, Sparkles, Feather, Moon, Star, ArrowDown, ExternalLink } from 'lucide-react';

export default function HeroSection() {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const achievements = [
    { label: "Artistic Innovation", year: "2024" },
    { label: "Creative Leadership", year: "2023" },
    { label: "Design Excellence", year: "2023" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#001226] font-serif">
      
      {/* --- BACKGROUND DECOR (Abstract Shapes) --- */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-900/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-rose-900/10 blur-[100px] rounded-full" />
        
        {/* Decorative Lines/Ornaments */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')]" />
      </div>

      <div className="container relative z-10 px-6 mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* --- LEFT CONTENT: ELEGANT PANEL --- */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6"
          >
            <div className="relative group">
              {/* Gold Border Ornament Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600/30 via-white/20 to-yellow-600/30 rounded-[3rem] blur-sm" />
              
              <div className="relative p-10 md:p-14 bg-[#001c38]/60 backdrop-blur-3xl border border-white/10 rounded-[3rem] shadow-2xl overflow-hidden">
                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 p-4 opacity-40">
                  <Moon size={40} className="text-yellow-200/20" />
                </div>

                <div className="flex items-center gap-3 mb-10">
                  <div className="px-5 py-1.5 border border-yellow-500/40 rounded-full text-yellow-200/80 text-[10px] uppercase tracking-[0.3em] flex items-center gap-2">
                    <Star size={10} fill="currentColor" /> Creative Portfolio Excellence
                  </div>
                </div>

                <h1 className="text-6xl md:text-8xl text-white leading-none mb-4 font-light tracking-tight">
                  SHINTA <br />
                  <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-white to-yellow-500">
                    DARA
                  </span>
                </h1>
                
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-[1px] w-12 bg-yellow-500/50" />
                  <p className="text-yellow-200/70 uppercase tracking-[0.4em] text-xs italic">The Creative Muse</p>
                  <div className="h-[1px] w-12 bg-yellow-500/50" />
                </div>

                <p className="text-slate-300 text-lg leading-relaxed max-w-md mb-12 font-sans italic opacity-80">
                  "From a foundation of dedicated study and artistry,  Shinta Dara embodies a sophisticated and precise creative vision."
                </p>

                <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center">
                  <button 
                    onClick={scrollToAbout}
                    className="px-10 py-4 bg-gradient-to-b from-yellow-200 to-yellow-600 text-black font-bold uppercase tracking-widest rounded-full hover:scale-105 transition-all shadow-[0_0_20px_rgba(234,179,8,0.3)]"
                  >
                    Explore Profile
                  </button>
                  <div className="flex gap-6 text-white/50">
                    <a href="#" className="hover:text-yellow-400 transition-colors flex items-center gap-2 text-xs">
                      <Github size={16} /> Github
                    </a>
                    <a href="#" className="hover:text-yellow-400 transition-colors flex items-center gap-2 text-xs">
                      <Instagram size={16} /> Instagram
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* --- RIGHT CONTENT: MULTI-LAYERED ORGANIC SHAPES --- */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="lg:col-span-6 relative"
          >
            {/* The "Blob" Layered Backgrounds */}
            <div className="relative w-full max-w-md mx-auto aspect-square flex items-center justify-center">
              
              {/* Back Layer (Blurry Soft Shape) */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-[40% 60% 70% 30% / 40% 50% 60% 70%] animate-pulse blur-3xl" />
              
              {/* Middle Layer (Glass Shape with Border) */}
              <div className="absolute inset-4 border border-white/10 bg-white/5 backdrop-blur-sm rounded-[60% 40% 30% 70% / 60% 30% 70% 40%] rotate-12" />

              {/* Main Image Container (Organic Window) */}
              <div className="relative w-[85%] h-[85%] overflow-hidden rounded-[30% 70% 70% 30% / 30% 30% 70% 70%] border-2 border-yellow-500/30 shadow-2xl z-20">
                <img 
                  src="/profile.jpeg" 
                  alt="Creative Professional" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001226]/80 via-transparent to-transparent" />
              </div>

              {/* Achievement Badge Overlay */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -right-4 bottom-10 z-30 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl shadow-2xl max-w-[200px]"
              >
                <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-2">
                  <Sparkles size={14} className="text-yellow-400" />
                  <span className="text-[10px] font-bold text-white uppercase tracking-widest">Achievements</span>
                </div>
                <div className="space-y-3">
                  {achievements.map((item, i) => (
                    <div key={i} className="flex justify-between items-center text-[9px] text-slate-300">
                      <span className="font-sans tracking-wide">{item.label}</span>
                      <span className="text-yellow-500/80">{item.year}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Floating Pearl/Orb elements */}
              <div className="absolute top-0 left-10 w-4 h-4 bg-white/40 rounded-full blur-[2px] z-30 animate-bounce" />
              <div className="absolute bottom-20 -left-5 w-8 h-8 bg-yellow-500/20 rounded-full blur-[4px] z-10" />
            </div>
          </motion.div>

        </div>
      </div>

      {/* FOOTER SCROLL INDICATOR */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="text-[9px] font-medium text-white/30 uppercase tracking-[0.6em] rotate-180 [writing-mode:vertical-lr]">Scroll</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-[1px] h-12 bg-gradient-to-b from-yellow-500/50 to-transparent"
        />
      </div>
    </section>
  );
}