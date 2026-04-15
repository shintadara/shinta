"use client";

import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, Star, Sparkles, Diamond } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export default function Navbar({ isDark, toggleTheme }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-[1000] transition-all duration-700 ${isScrolled ? 'bg-[#000814]/80 backdrop-blur-2xl border-b border-[#F4C2C2]/10 py-3' : 'bg-transparent py-8'}`}>
      <div className="container px-8 mx-auto flex justify-between items-center">
        
        {/* LOGO AREA: Menggunakan Inisial & Star */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 group cursor-pointer"
          onClick={() => scrollToSection('#home')}
        >
          <div className="relative">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-1 border border-[#F4C2C2]/30 rounded-full blur-[2px]"
            />
            <div className="w-10 h-10 bg-white/5 backdrop-blur-md rounded-full flex items-center justify-center border border-white/10 group-hover:border-[#F4C2C2]/50 transition-all">
              <Star size={16} className="text-[#F4C2C2] fill-[#F4C2C2]/20" />
            </div>
          </div>
          <span className="text-lg font-serif italic font-light text-white tracking-[0.2em] uppercase">
            SHINTA<span className="text-[#F4C2C2] font-extralight opacity-80"> DARA</span>
          </span>
        </motion.div>

        {/* DESKTOP NAV: Ramping & High-End */}
        <div className="hidden lg:flex items-center gap-12">
          <div className="flex gap-10">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-white/50 hover:text-[#F4C2C2] transition-all relative group"
              >
                {item.label}
                <motion.span 
                  className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-[#F4C2C2] transition-all group-hover:w-full"
                />
              </button>
            ))}
          </div>
          
          <div className="h-6 w-[1px] bg-white/10 mx-2" />

          <button 
            onClick={toggleTheme}
            className="group relative p-2 overflow-hidden rounded-full border border-white/5 hover:border-[#F4C2C2]/30 transition-all"
          >
            <motion.div whileHover={{ rotate: 45 }}>
              {isDark ? <Sun size={18} className="text-[#FFD700]" /> : <Moon size={18} className="text-[#F4C2C2]" />}
            </motion.div>
          </button>
        </div>

        {/* MOBILE TRIGGER */}
        <div className="flex lg:hidden items-center gap-4">
          <button onClick={() => setIsMobileMenuOpen(true)} className="text-white/80 p-2">
            <Menu size={24} strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* MOBILE OVERLAY: Animasi Mewah */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-[#000814]/95 backdrop-blur-2xl z-[1000]"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 w-full max-w-sm bg-[#000d1a] z-[1001] border-l border-white/5 p-12 flex flex-col justify-center"
            >
              <div className="absolute top-12 right-12">
                <X className="text-[#F4C2C2] cursor-pointer" size={32} strokeWidth={1} onClick={() => setIsMobileMenuOpen(false)} />
              </div>

              <div className="flex flex-col gap-10">
                <div className="flex items-center gap-2 mb-4 opacity-30">
                  <Sparkles size={12} className="text-[#F4C2C2]" />
                  <span className="text-[9px] uppercase tracking-[1em] text-white">Navigation</span>
                </div>
                {navItems.map((item, i) => (
                  <motion.button
                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    onClick={() => scrollToSection(item.href)}
                    className="group text-5xl font-serif italic text-white/90 hover:text-[#F4C2C2] text-left transition-all"
                  >
                    <span className="text-[#F4C2C2]/20 text-xs font-sans not-italic mr-6 tracking-widest uppercase italic">0{i + 1}</span>
                    {item.label}
                  </motion.button>
                ))}
              </div>

              <div className="mt-24 pt-12 border-t border-white/5 flex items-center gap-4 opacity-40">
                <Diamond size={14} className="text-[#F4C2C2]" />
                <span className="text-[10px] tracking-[0.5em] text-white uppercase font-sans">Exquisite 2026</span>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}