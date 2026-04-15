"use client";

import { motion } from "framer-motion";
import { Shield, Zap, Cpu, ExternalLink, Fingerprint, Sparkles, Diamond, Heart } from "lucide-react";
import { useState, useRef } from "react";

const certificates = [
  {
    id: "CERT-01",
    title: "System Architect Elite",
    issuer: "Global Tech Alliance",
    level: "Supreme Distinction",
    icon: Shield,
    color: "#F4C2C2", // Rose Gold / Soft Pink
    top: "15%", left: "20%",
    desc: "Keahlian tinggi dalam menyusun struktur sistem yang kokoh namun tetap elegan."
  },
  {
    id: "CERT-02",
    title: "Frontend Prodigy",
    issuer: "Modern Web Academy",
    level: "Elite Excellence",
    icon: Zap,
    color: "#FFD700", // Soft Champagne Gold
    top: "45%", left: "65%",
    desc: "Sentuhan artistik dalam setiap baris kode untuk antarmuka yang mempesona."
  },
  {
    id: "CERT-03",
    title: "Fullstack Commander",
    issuer: "Code Masters Lab",
    level: "Master Artistry",
    icon: Cpu,
    color: "#10B981", // Soft Emerald
    top: "70%", left: "25%",
    desc: "Penguasaan menyeluruh dari logika inti hingga penyajian visual yang sempurna."
  }
];

export default function CertificatesSection() {
  const containerRef = useRef(null);
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section 
      id="certificates" 
      ref={containerRef}
      className="py-32 bg-[#000814] min-h-[110vh] overflow-hidden font-serif relative flex items-center justify-center"
    >
      {/* FEMININE NAVY AMBIANCE */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Soft Radial Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_#001d3d_0%,_transparent_70%)] opacity-40" />
        
        {/* Floating Silk Lines (Mengganti grid kaku) */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
          <motion.path
            d="M-100 300 Q 400 100 900 400 T 1600 200"
            fill="none"
            stroke="#F4C2C2"
            strokeWidth="1"
            animate={{ d: ["M-100 300 Q 400 100 900 400 T 1600 200", "M-100 350 Q 400 150 900 450 T 1600 250", "M-100 300 Q 400 100 900 400 T 1600 200"] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      </div>

      <div className="container relative z-10 px-6 mx-auto h-full">
        
        {/* CENTER TITLE - ELEGANT TYPOGRAPHY */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
           <motion.div 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             className="space-y-2"
           >
             <div className="flex justify-center items-center gap-3 opacity-40">
                <Sparkles size={14} className="text-[#F4C2C2]" />
                <span className="text-[11px] font-sans font-medium text-white uppercase tracking-[1.2em]">Exquisite</span>
             </div>
             <h2 className="text-9xl md:text-[12rem] font-light text-white/[0.03] leading-none uppercase tracking-widest italic">
                Archives
             </h2>
           </motion.div>
        </div>

        {/* THE GLOWING PEARLS (Interaksi Klik Dipertahankan) */}
        <div className="relative w-full h-[750px]">
          {certificates.map((cert, idx) => {
            const isHovered = hovered === idx;

            return (
              <motion.div
                key={cert.id}
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => setHovered(hovered === idx ? null : idx)}
                className="absolute group z-20"
                style={{ top: cert.top, left: cert.left }}
              >
                {/* THE "PEARL" POINT */}
                <div className="relative flex items-center justify-center">
                   <motion.div 
                     animate={{ 
                        scale: isHovered ? 1.4 : 1,
                        boxShadow: isHovered ? `0 0 30px ${cert.color}` : "0 0 10px rgba(255,255,255,0.2)"
                     }}
                     className="w-5 h-5 bg-white rounded-full z-20 cursor-pointer border-[3px] border-white/20"
                   />
                   
                   {/* SOFT AURA */}
                   <motion.div 
                     animate={{ scale: [1, 2.5], opacity: [0.2, 0] }}
                     transition={{ repeat: Infinity, duration: 3 }}
                     className="absolute inset-0 rounded-full bg-white"
                   />
                </div>

                {/* THE FEMININE ELEGANT CARD */}
                <motion.div
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={{ 
                    opacity: isHovered ? 1 : 0, 
                    y: isHovered ? -160 : 30,
                    scale: isHovered ? 1 : 0.95,
                    pointerEvents: isHovered ? "auto" : "none"
                  }}
                  className="absolute left-1/2 -translate-x-1/2 w-[300px] md:w-[380px]"
                >
                  <div className="bg-[#001d3d]/80 backdrop-blur-2xl border border-white/10 p-8 rounded-[2rem] shadow-2xl relative overflow-hidden">
                    
                    {/* Decorative Corner Ornament */}
                    <div className="absolute -top-4 -right-4 w-20 h-20 bg-white/5 rounded-full blur-2xl" />

                    <div className="relative z-10 text-center">
                      <div className="flex flex-col items-center mb-6">
                        <div 
                          className="p-4 rounded-full mb-4 transition-all duration-500"
                          style={{ backgroundColor: `${cert.color}15`, border: `1px solid ${cert.color}30` }}
                        >
                          <cert.icon size={24} style={{ color: cert.color }} strokeWidth={1.5} />
                        </div>
                        <span className="text-[10px] font-sans font-bold text-white/30 uppercase tracking-[0.4em]">{cert.id}</span>
                      </div>

                      <h3 className="text-2xl font-medium text-white mb-2 tracking-tight italic">
                        {cert.title}
                      </h3>
                      <p className="text-[10px] font-sans font-black uppercase tracking-widest mb-6" style={{ color: cert.color }}>
                        {cert.issuer}
                      </p>

                      <p className="text-slate-400 text-xs italic font-light leading-relaxed mb-8 px-4">
                        "{cert.desc}"
                      </p>

                      <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                        <div className="text-left">
                          <span className="text-[8px] font-sans font-bold text-white/20 uppercase tracking-widest block mb-1">Status</span>
                          <span className="text-sm font-medium italic text-white/80">{cert.level}</span>
                        </div>
                        
                        <motion.button 
                          whileHover={{ scale: 1.05 }}
                          className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white text-white hover:text-[#000814] border border-white/10 transition-all text-[9px] font-bold uppercase tracking-widest"
                        >
                           Verify <ExternalLink size={12} />
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* BOTTOM DECOR - LUXURY FINISH */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-10 opacity-30">
           <div className="h-[1px] w-20 bg-gradient-to-r from-transparent to-white/20" />
           <div className="flex items-center gap-4">
              <Diamond size={16} className="text-[#F4C2C2]" />
              <span className="text-[10px] font-sans font-medium text-white uppercase tracking-[0.6em]">Portfolio 2026</span>
              <Heart size={14} className="text-[#F4C2C2]" />
           </div>
           <div className="h-[1px] w-20 bg-gradient-to-l from-transparent to-white/20" />
        </div>
      </div>
    </section>
  );
}