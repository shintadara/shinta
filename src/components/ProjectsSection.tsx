"use client";

import { motion, AnimatePresence } from 'framer-motion';
// Menggunakan InfinityIcon agar tidak bentrok dengan global property
import { Github, ExternalLink, Sparkles, Zap, Globe, Search, BarChart2, Smartphone, Infinity as InfinityIcon, Award, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const projects = [
  {
    id: "01",
    title: "NEO•STADIUM",
    titleHolo: "STADIUM",
    role: "Lead Architect",
    description: "Sinergi Next.js 14 yang eksplosif. Arsitektur modular yang dirancang untuk kecepatan transaksi mutlak, sehalus sutra.",
    links: { github: "#", demo: "#" },
    image: "/projek.jpg",
    icon: Globe,
    color: "#38BDF8"
  },
  {
    id: "02",
    title: "VISUAL•AI SCOUT",
    titleHolo: "SCOUT AI",
    role: "Creative Director",
    description: "Mendefinisikan ulang persepsi visual. Platform AI yang menganalisis ribuan gambar dalam hitungan detik bagi fotografer profesional.",
    links: { github: "#", demo: "#" },
    image: "/projek2.jpg",
    icon: Search,
    color: "#F472B6"
  },
  {
    id: "03",
    title: "TACTICAL DB V2",
    titleHolo: "TACTICAL",
    role: "System Analyst",
    description: "Komando data real-time bertenaga WebSocket. Visualisasi dinamis memberikan wawasan instan dengan akurasi absolut.",
    links: { github: "#", demo: "#" },
    image: "/projek3.jpg",
    icon: BarChart2,
    color: "#A855F7"
  }
];

export default function ProjectsSection() {
  const [selected, setSelected] = useState(0);

  return (
    <section id="projects" className="relative py-32 bg-[#001226] min-h-screen overflow-hidden font-serif">
      
      {/* DECORATIVE BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(56,189,248,0.05),transparent_50%)]" />

      <div className="container relative z-10 px-6 mx-auto max-w-7xl">
        
        {/* --- HEADER --- */}
        <div className="max-w-3xl text-left relative mb-20">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="flex items-center gap-3 mb-6">
            <Sparkles size={16} className="text-pink-300" />
            <span className="text-[11px] font-sans font-black text-pink-200 uppercase tracking-[0.5em]">The Exhibit</span>
          </motion.div>
          <h2 className="text-6xl md:text-8xl font-light text-white leading-none relative z-10">
            Technical <br />
            <span className="italic font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-200 via-white to-blue-200">Poetry</span>
          </h2>
        </div>

        {/* --- MAIN EXHIBIT GRID --- */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* LEFT: CONTENT & INTEGRATED NAV */}
          <div className="lg:col-span-6 order-2 lg:order-1 space-y-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={selected}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5 }}
                className="space-y-8 text-left"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                     <Award size={18} className="text-pink-300" />
                     <span className="text-[10px] font-sans font-black text-pink-200 uppercase tracking-[0.4em]">{projects[selected].role}</span>
                  </div>
                  <h4 className="text-5xl md:text-6xl font-light text-white tracking-tighter leading-tight">
                    {projects[selected].title}
                  </h4>
                </div>

                <p className="text-slate-400 text-xl leading-relaxed italic font-light border-l-2 border-pink-300/30 pl-8">
                  "{projects[selected].description}"
                </p>

                {/* PROJECT ACTIONS */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <a href={projects[selected].links.demo} className="bg-white text-[#001226] px-8 py-4 rounded-full font-sans font-black uppercase text-[10px] tracking-widest hover:bg-pink-200 transition-all flex items-center gap-2">
                    <Zap size={14} fill="currentColor" /> Launch Experience
                  </a>
                  <a href={projects[selected].links.github} className="bg-white/5 border border-white/10 text-white px-8 py-4 rounded-full font-sans font-bold uppercase text-[10px] tracking-widest hover:bg-white/10 transition-all flex items-center gap-2">
                    <Github size={14} /> Repository
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* --- INTEGRATED NAVIGATION (Sekarang Dekat dengan Konten) --- */}
            <div className="pt-12 border-t border-white/5">
              <p className="text-[9px] font-sans font-black text-slate-500 uppercase tracking-[0.3em] mb-6 text-left">Switch Masterpiece</p>
              <div className="flex flex-wrap gap-4">
                {projects.map((project, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelected(idx)}
                    className={`group relative flex items-center gap-4 p-4 rounded-2xl border transition-all duration-500 ${
                      selected === idx 
                        ? 'bg-white/5 border-white/20 w-48' 
                        : 'bg-transparent border-white/5 w-14 overflow-hidden'
                    }`}
                  >
                    <div 
                      className="min-w-[24px] flex justify-center transition-colors"
                      style={{ color: selected === idx ? project.color : '#475569' }}
                    >
                      {(() => { const Icon = project.icon; return <Icon size={20} />; })()}
                    </div>
                    
                    {selected === idx && (
                      <motion.span 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-[10px] font-sans font-black text-white uppercase tracking-widest whitespace-nowrap"
                      >
                        {project.id} — View
                      </motion.span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: THE VISUAL SANCTUARY */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative group">
              {/* Background Holo Text */}
              <div className="absolute -top-10 -right-10 text-[12rem] font-black text-white/[0.02] pointer-events-none select-none uppercase tracking-tighter z-0">
                {projects[selected].id}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={selected}
                  initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 1.1, rotate: -2 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="relative z-10 aspect-[4/5] md:aspect-video lg:aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl"
                >
                  <img 
                    src={projects[selected].image} 
                    className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
                    alt={projects[selected].title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#001226] via-transparent to-transparent opacity-80" />
                  
                  {/* Floating Indicator */}
                  <div className="absolute bottom-8 left-8 flex items-center gap-4">
                     <div className="w-12 h-[1px] bg-pink-300" />
                     <span className="text-[10px] font-sans font-black text-white uppercase tracking-[0.4em]">Project Gallery</span>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Glowing Orb */}
              <div 
                className="absolute -bottom-10 -right-10 w-64 h-64 blur-[120px] opacity-20 rounded-full transition-colors duration-1000"
                style={{ backgroundColor: projects[selected].color }}
              />
            </div>
          </div>

        </div>

        {/* --- FOOTER --- */}
        <div className="mt-32 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 opacity-30">
           <div className="flex items-center gap-4">
              <InfinityIcon size={18} className="text-pink-300" />
              <span className="text-[9px] font-sans font-black text-white uppercase tracking-[0.3em]">Grace. Precision. Intent.</span>
           </div>
           <p className="text-[9px] font-sans font-medium text-slate-500 uppercase tracking-[0.2em]">
             © {new Date().getFullYear()} — The Exhibit Collective
           </p>
        </div>
      </div>
    </section>
  );
}