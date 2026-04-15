"use client";

import { motion } from 'framer-motion';
import { Sparkles, Moon, Star, Palette, Feather, Eye, Quote, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function AboutSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const profileData = [
    {
      title: 'The Visionary',
      subtitle: 'Creative Alchemist',
      content: 'Memadukan estetika visual dengan logika pemrograman untuk menciptakan harmoni digital.',
      color: 'from-pink-300/20'
    },
    {
      title: 'The Craft',
      subtitle: 'Technological Grace',
      content: 'Menyusun baris kode Next.js dengan ketelitian tinggi, selembut sutra namun kokoh secara teknis.',
      color: 'from-blue-300/20'
    },
    {
      title: 'The Legacy',
      subtitle: 'Future Essence',
      content: 'Membangun pengalaman digital yang bermakna dan berkesan untuk masa depan.',
      color: 'from-yellow-300/20'
    },
  ];

  return (
    <section id="about" className="relative py-40 bg-[#001226] overflow-hidden font-serif">
      
      {/* --- BACKGROUND ELEMENTS --- */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-[10%] left-[-5%] w-[600px] h-[600px] bg-blue-900/30 blur-[150px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] bg-pink-900/20 blur-[130px] rounded-full" />
      </div>

      <div className="container relative z-10 px-6 mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          
          {/* --- LEFT SIDE: THE ARTISTIC PORTRAIT STACK --- */}
          <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-start">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative w-72 md:w-96 aspect-[3/4]"
            >
              {/* Decorative Back Frame */}
              <div className="absolute -inset-6 border border-white/5 rounded-[4rem] rotate-6" />
              <div className="absolute -inset-6 border border-pink-300/10 rounded-[4rem] -rotate-3" />
              
              {/* Main Image with Masking */}
              <div className="relative h-full w-full overflow-hidden rounded-[8rem] border-2 border-white/10 z-20 shadow-2xl bg-[#001c38]">
                <img 
                  src="/projek3.jpg" 
                  alt="Creative Muse" 
                  className="w-full h-full object-cover scale-110 grayscale hover:grayscale-0 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001226] via-transparent to-transparent opacity-80" />
              </div>

              {/* Floating Vertical Text */}
              <div className="absolute -right-12 top-20 rotate-90 origin-left">
                <span className="text-[10px] font-sans font-bold tracking-[1em] text-pink-300/40 uppercase whitespace-nowrap">
                  ESTHETIC • PRECISION • GRACE
                </span>
              </div>

              {/* Achievement Badge (Overlay) */}
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="absolute -bottom-10 -right-10 z-30 p-8 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl max-w-[200px]"
              >
                <Quote className="text-pink-300 mb-4 opacity-50" size={32} />
                <p className="text-xs text-slate-300 leading-relaxed italic">
                  "Desain bukan hanya tampilan, tapi bagaimana perasaan yang muncul saat berinteraksi."
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* --- RIGHT SIDE: ASYMMETRICAL CONTENT --- */}
          <div className="w-full lg:w-1/2 space-y-16">
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-[1px] bg-pink-300" />
                <span className="text-xs font-sans font-black tracking-[0.5em] text-pink-300 uppercase">Identity</span>
              </motion.div>
              
              <h2 className="text-6xl md:text-8xl font-light text-white leading-[0.9]">
                Behind the <br />
                <span className="italic font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-200 via-white to-blue-300">Curtain</span>
              </h2>
            </div>

            {/* Unique Grid Layout for Experience */}
            <div className="grid gap-12">
              {profileData.map((item, index) => (
                <motion.div 
                  key={index}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="relative group cursor-default"
                >
                  <div className={`absolute -inset-x-6 -inset-y-4 rounded-3xl transition-all duration-500 bg-gradient-to-r ${item.color} to-transparent opacity-0 ${hoveredIndex === index ? 'opacity-100' : ''}`} />
                  
                  <div className="relative z-10 flex gap-8 items-start">
                    <span className="text-4xl font-sans font-black text-white/5 group-hover:text-pink-300/20 transition-colors">
                      0{index + 1}
                    </span>
                    <div className="space-y-3">
                      <h3 className="text-sm font-sans font-bold tracking-[0.3em] text-pink-300/80 uppercase">
                        {item.subtitle}
                      </h3>
                      <h4 className="text-3xl font-light text-white tracking-wide">
                        {item.title}
                      </h4>
                      <p className="text-slate-400 text-lg leading-relaxed max-w-md group-hover:text-slate-200 transition-colors">
                        {item.content}
                      </p>
                    </div>
                    
                    <div className="ml-auto self-center opacity-0 group-hover:opacity-100 transition-all transform translate-x-4 group-hover:translate-x-0">
                      <ArrowRight className="text-pink-300" size={24} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom Signature Line */}
            <div className="pt-10 flex items-center gap-10">
               <div className="flex -space-x-4">
                  {[Sparkles, Moon, Star].map((Icon, i) => (
                    <div key={i} className="w-12 h-12 rounded-full bg-[#001c38] border border-white/10 flex items-center justify-center text-pink-200">
                      <Icon size={18} />
                    </div>
                  ))}
               </div>
               <p className="text-[10px] font-sans font-bold tracking-[0.4em] text-white/30 uppercase leading-loose">
                 Verified Creative <br /> Authentic Vision
               </p>
            </div>
          </div>

        </div>
      </div>

      {/* Decorative Text in Background */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -rotate-90 origin-left hidden xl:block">
        <span className="text-[12rem] font-black text-white/[0.01] uppercase tracking-tighter">
          ELEGANCE
        </span>
      </div>
    </section>
  );
}