"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, ExternalLink, Sparkles, Diamond, Heart, Loader2, ChevronRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mvzdzgnd", {
        method: "POST",
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        toast({ title: "MESSAGE ENCRYPTED!", description: "Your exquisiteness is received. Talk soon!", color: "#F4C2C2" });
        form.reset();
      } else {
        toast({ variant: "destructive", title: "SIGNAL FAILED!", description: "Failed to transmit the grace." });
      }
    } catch (error) {
      toast({ variant: "destructive", title: "VAR DECISION: ERROR", description: "Signal disturbance." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-40 bg-[#000a16] relative overflow-hidden font-serif">
      
      {/* 1. LUXURY AMBIANCE BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Soft Radial Glow Navy */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_#001d3d_0%,_transparent_70%)] opacity-50" />
        
        {/* Floating Silk Lines (Mengganti grid taktis) */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
          <motion.path
            d="M-100 300 Q 400 100 900 400 T 1600 200"
            fill="none"
            stroke="#F4C2C2"
            strokeWidth="1"
            animate={{ d: ["M-100 300 Q 400 100 900 400 T 1600 200", "M-100 350 Q 400 150 900 450 T 1600 250", "M-100 300 Q 400 100 900 400 T 1600 200"] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>

        {/* Floating Pearl Particles */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              y: [0, -100], 
              opacity: [0, 0.4, 0],
              scale: [0.5, 1, 0.5] 
            }}
            transition={{ 
              duration: Math.random() * 4 + 3, 
              repeat: Infinity, 
              delay: Math.random() * 2 
            }}
            className="absolute w-1.5 h-1.5 bg-white rounded-full blur-[1px]"
            style={{ 
              left: `${Math.random() * 100}%`, 
              top: `${Math.random() * 100}%` 
            }}
          />
        ))}
      </div>

      <div className="container px-6 mx-auto max-w-7xl relative z-10 flex flex-col items-center">
        
        {/* 2. EXQUISITE HEADER */}
        <div className="text-center mb-24 max-w-2xl">
          <div className="flex justify-center items-center gap-3 opacity-40 mb-4">
              <Sparkles size={14} className="text-[#F4C2C2]" />
              <span className="text-[11px] font-sans font-medium text-white uppercase tracking-[1.2em]">Exquisite</span>
              <Sparkles size={14} className="text-[#F4C2C2]" />
          </div>
          
          <h2 className="text-7xl md:text-9xl font-light text-white leading-none uppercase tracking-widest italic">
            Connection
          </h2>
          <p className="mt-6 text-slate-400 text-base italic leading-relaxed px-10">
            Let's create something beautiful together. Reach out and start our collaborative artistry.
          </p>
        </div>

        {/* 3. GRID CONTENT: INFO & FORM */}
        <div className="grid lg:grid-cols-12 gap-16 items-center w-full">
          
          {/* LEFT: IDENTITY DETAILS (Navy Glass) */}
          <div className="lg:col-span-5 space-y-8">
            {[
              { icon: Mail, label: 'Official Channel', value: 'shintadara42@gmail.com', border: 'border-[#001d3d]' },
              { icon: MapPin, label: 'Coordinates', value: 'Banda Aceh, Indonesia', border: 'border-[#F4C2C2]/10' },
            ].map((info, idx) => (
              <motion.div 
                whileHover={{ y: -5, backgroundColor: 'rgba(244,194,194,0.03)' }}
                key={idx} 
                className={`bg-[#001d3d]/50 backdrop-blur-xl border border-white/5 p-8 flex items-center gap-6 rounded-3xl transition-all duration-500`}
              >
                <div 
                  className="p-4 rounded-full border"
                  style={{ backgroundColor: `${idx % 2 === 0 ? '#F4C2C2' : '#FFD700'}10`, borderColor: `${idx % 2 === 0 ? '#F4C2C2' : '#FFD700'}30` }}
                >
                  <info.icon size={22} style={{ color: idx % 2 === 0 ? '#F4C2C2' : '#FFD700' }} />
                </div>
                <div>
                  <p className="text-[9px] font-sans font-medium uppercase text-slate-500 tracking-[0.4em] mb-1">{info.label}</p>
                  <p className="text-xl font-medium text-white italic tracking-tight">{info.value}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* RIGHT: TACTICAL FORM (Ubah ke Exquisite Glass) */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="relative p-[1px] bg-gradient-to-br from-[#F4C2C2]/20 via-[#FFD700]/10 to-transparent rounded-[3rem]"
            >
              <form 
                onSubmit={handleSubmit}
                className="relative bg-[#001d3d]/80 backdrop-blur-3xl p-12 md:p-16 border border-white/5 rounded-[3rem] overflow-hidden"
              >
                {/* 19 Backmask (Hapus, ganti ke inisial nama) */}
                <div className="absolute -bottom-10 -left-10 text-[18rem] font-light text-white/[0.02] italic leading-none select-none pointer-events-none tracking-tighter">
                  A
                </div>

                <div className="mb-14 flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-3">
                    <Heart size={20} className="text-[#F4C2C2] fill-[#F4C2C2]/20 animate-pulse" />
                    <h3 className="text-xl font-medium text-white tracking-tight italic">Exquisite Inquiry</h3>
                  </div>
                </div>

                <div className="space-y-12 relative z-10 text-left">
                  <div className="grid md:grid-cols-2 gap-10">
                    <div className="relative group">
                      <label className="text-[9px] font-sans font-bold text-[#F4C2C2] uppercase tracking-[0.3em] block mb-2 group-focus-within:text-white transition-colors">Tactician_Name</label>
                      <input name="name" type="text" required placeholder="YOUR FULL NAME..."
                        className="w-full bg-transparent border-b border-white/10 py-3 font-medium text-white italic focus:border-[#FFD700] outline-none transition-all placeholder:text-white/5" 
                      />
                    </div>
                    <div className="relative group">
                      <label className="text-[9px] font-sans font-bold text-[#FFD700] uppercase tracking-[0.3em] block mb-2 group-focus-within:text-white transition-colors">Return_Signal</label>
                      <input name="email" type="email" required placeholder="OFFICIAL EMAIL ADDRESS..."
                        className="w-full bg-transparent border-b border-white/10 py-3 font-medium text-white italic focus:border-[#FFD700] outline-none transition-all placeholder:text-white/5" 
                      />
                    </div>
                  </div>

                  <div className="relative group">
                    <label className="text-[9px] font-sans font-bold text-white uppercase tracking-[0.3em] block mb-2">Instructions</label>
                    <textarea name="message" rows={4} required placeholder="DESCRIBE THE ASSIST..."
                      className="w-full bg-transparent border-b border-white/10 py-3 font-medium text-white italic focus:border-[#FFD700] outline-none resize-none transition-all placeholder:text-white/5" 
                    />
                  </div>

                  {/* BUTTON: Rose Gold & Gold Shimmer */}
                  <motion.button 
                    type="submit" 
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    className="group relative w-full h-20 bg-white hover:bg-white/90 text-[#000814] font-serif font-medium uppercase italic tracking-[0.5em] transition-all flex items-center justify-center gap-4 overflow-hidden rounded-full shadow-[0_10px_30px_rgba(244,194,194,0.15)] border-2 border-white/5"
                  >
                    {isSubmitting ? <Loader2 className="animate-spin text-[#000814]" /> : (
                      <>
                        <span className="relative z-10">Transmitting_Grace</span>
                        <ChevronRight className="relative z-10 text-[#F4C2C2] group-hover:translate-x-2 transition-transform" />
                      </>
                    )}
                    
                    {/* Cahaya Berjalan (Shimmer) */}
                    <motion.div 
                      animate={{ left: ["-100%", "200%"] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute inset-0 w-20 bg-gradient-to-r from-transparent via-[#F4C2C2]/50 to-transparent -skew-x-12 pointer-events-none"
                    />
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>

        </div>

        {/* BOTTOM DECOR - LUXURY FINISH */}
        <div className="mt-28 flex flex-col items-center gap-6 opacity-30">
           <div className="flex items-center gap-4">
              <Diamond size={16} className="text-[#F4C2C2]" />
              <span className="text-[10px] font-sans font-medium text-white uppercase tracking-[0.8em]">Exquisite Connections 2026</span>
              <Diamond size={16} className="text-[#F4C2C2]" />
           </div>
        </div>
      </div>
    </section>
  );
}