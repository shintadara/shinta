"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Sparkles, Moon, Star, Palette, Cpu, PenTool, Zap, Globe, ChevronsUpDown } from "lucide-react";

// 1. Data Definisi Skill (Tanpa posisi grid, posisi diatur oleh state)
const initialSkillGroups = [
  {
    id: 1,
    category: "Aesthetic",
    title: "Visual Alchemy",
    icon: Palette,
    // Penjelasan yang jauh lebih panjang dan mendalam
    desc: "Sinergi antara seni visual dan kode. Saya tidak hanya membangun antarmuka, saya menciptakan pengalaman yang memiliki 'jiwa'. Fokus pada keindahan yang intuitif, di mana setiap elemen visual memiliki tujuan fungsional. Dari pemilihan palet warna yang memengaruhi psikologi pengguna hingga transisi mikro yang memperhalus interaksi, semuanya dirancang untuk menciptakan harmoni digital yang memanjakan mata dan memudahkan pengguna.",
    skills: ["Framer Motion", "Tailwind CSS", "UI/UX Design", "Motion Graphics", "Three.js (Basic)"],
    color: "rgba(255, 182, 193, 0.2)" // Soft Pink
  },
  {
    id: 2,
    category: "Logic",
    title: "Core Engine",
    icon: Cpu,
    // Penjelasan yang jauh lebih panjang dan mendalam
    desc: "Arsitektur sistem yang kokoh adalah fondasi dari setiap inovasi digital yang sukses. Saya mengarsiteki logika backend dan frontend dengan prinsip skalabilitas, keamanan, dan performa tinggi sebagai prioritas utama. Menggunakan stack modern untuk membangun API yang efisien, mengelola state aplikasi yang kompleks, dan memastikan aliran data yang lancar. Setiap baris kode disusun dengan ketelitian tinggi untuk menjamin stabilitas sistem dalam jangka panjang dan kemudahan pemeliharaan.",
    skills: ["Next.js", "TypeScript", "Node.js", "RESTful APIs", "Database Design"],
    color: "rgba(135, 206, 235, 0.2)" // Sky Blue
  },
  {
    id: 3,
    category: "Vision",
    title: "Brand Story",
    icon: Star,
    // Penjelasan yang jauh lebih panjang dan mendalam
    desc: "Identitas digital melampaui sekadar logo; itu adalah narasi tentang siapa Anda dan nilai yang Anda bawa. Saya membantu mendefinisikan dan menerjemahkan visi merek Anda ke dalam bahasa visual yang konsisten dan berdampak di seluruh platform digital. Melalui riset mendalam dan desain konseptual, saya menciptakan strategi visual yang tidak hanya membedakan Anda dari kompetitor, tetapi juga membangun koneksi emosional yang kuat dengan audiens target Anda, memastikan pesan merek Anda tersampaikan dengan kejelasan dan keanggunan.",
    skills: ["Figma Mastery", "Brand Strategy", "Vector Art", "Typography", "Color Theory"],
    color: "rgba(255, 215, 0, 0.15)" // Gold
  }
];

export default function SkillsSection() {
  // 2. State untuk melacak urutan item. Item pertama (index 0) selalu yang BESAR.
  const [skillGroups, setSkillGroups] = useState(initialSkillGroups);

  // 3. Fungsi untuk Menukar Posisi
  const handleSwap = (clickedId: number) => {
    setSkillGroups((prevGroups) => {
      const clickedIndex = prevGroups.findIndex((group) => group.id === clickedId);
      
      // Jika yang diklik sudah di posisi besar (index 0), tidak perlu tukar.
      if (clickedIndex === 0) return prevGroups;

      const newGroups = [...prevGroups];
      // Tukar item di index 0 (besar) dengan item yang diklik
      [newGroups[0], newGroups[clickedIndex]] = [newGroups[clickedIndex], newGroups[0]];
      
      return newGroups;
    });
  };

  return (
    <section id="skills" className="relative py-40 bg-[#001226] overflow-hidden font-serif">
      
      {/* --- ELEGANT AMBIENT LIGHTING (Sama seperti sebelumnya) --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-pink-600/10 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container relative z-10 px-6 mx-auto max-w-7xl">
        
        {/* --- HEADER: VERTICAL & FLOATING (Sama seperti sebelumnya) --- */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} className="flex items-center gap-3 mb-6">
              <Moon size={16} className="text-pink-300" />
              <span className="text-[10px] font-sans font-bold text-pink-200 uppercase tracking-[0.5em]">The Craftsmanship</span>
            </motion.div>
            <h2 className="text-6xl md:text-8xl font-light text-white leading-none">
              Technical <br />
              <span className="italic font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-200 via-white to-blue-200">Poetry</span>
            </h2>
          </div>
          <div className="hidden lg:block h-[1px] flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent mx-10 mb-6" />
          <p className="text-slate-500 font-sans text-xs uppercase tracking-[0.3em] lg:w-48 leading-loose text-center lg:text-left">
            Synthesizing logic and beauty into a singular experience.
          </p>
        </div>

        {/* --- DYNAMIC SWAPPING BENTO GRID --- */}
        {/* Menggunakan AnimatePresence untuk animasi penukaran yang halus */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:auto-rows-[minmax(300px,auto)]">
          <AnimatePresence initial={false}>
            {skillGroups.map((group, i) => {
              const isLarge = i === 0; // Item pertama adalah yang BESAR

              return (
                <motion.div
                  key={group.id} // Sangat penting untuk Framer Motion melacak item
                  layoutId={`card-${group.id}`} // Ajaib: Menghubungkan elemen untuk animasi pertukaran
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  // 4. Logika Grid Dinamis
                  className={`relative group overflow-hidden rounded-[3.5rem] border border-white/10 bg-white/[0.02] backdrop-blur-3xl transition-all duration-700 hover:border-white/20 flex flex-col justify-between
                    ${isLarge 
                      ? "lg:col-span-8 lg:row-span-2 p-16 cursor-default" // Gaya untuk yang BESAR
                      : "lg:col-span-4 lg:row-span-1 p-10 cursor-pointer hover:bg-white/[0.05]" // Gaya untuk yang KECIL (bisa diklik)
                    }`}
                  onClick={() => !isLarge && handleSwap(group.id)} // Hanya tukar jika yang kecil diklik
                >
                  {/*Animated Background Aura (Hanya muncul saat hover) */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"
                    style={{ background: `radial-gradient(circle at center, ${group.color}, transparent 70%)` }}
                  />

                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-10">
                      <div className="p-4 rounded-3xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-500">
                        <group.icon size={isLarge ? 32 : 24} className="text-white opacity-80" strokeWidth={1.5} />
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-[10px] font-sans font-black text-white/20 uppercase tracking-[0.4em] group-hover:text-pink-300 transition-colors">
                          {group.category}
                        </span>
                        {/* Ikon Indikator bahwa kartu kecil bisa ditukar */}
                        {!isLarge && (
                          <ChevronsUpDown size={16} className="text-white/10 group-hover:text-pink-300 animate-pulse" />
                        )}
                      </div>
                    </div>

                    <h3 className={`${isLarge ? "text-4xl md:text-5xl" : "text-3xl"} font-light text-white mb-4 transition-all`}>{group.title}</h3>
                    
                    {/* 5. Penjelasan Panjang: Muncul penuh jika Besar, dipotong jika Kecil */}
                    <p className={`text-slate-400 italic font-light leading-relaxed transition-all 
                      ${isLarge ? "text-base max-w-3xl mb-12" : "text-sm mb-8 line-clamp-3 group-hover:line-clamp-none"}`}>
                      "{group.desc}"
                    </p>
                  </div>

                  {/* Unique Skill Tags Cloud (Sama seperti sebelumnya) */}
                  <div className="relative z-10 flex flex-wrap gap-3 mt-auto">
                    {group.skills.map((skill, skIdx) => (
                      <span 
                        key={skIdx} 
                        className="px-5 py-2 rounded-full border border-white/5 bg-white/[0.03] text-[10px] font-sans font-bold text-white/40 uppercase tracking-widest group-hover:border-pink-300/30 group-hover:text-white transition-all"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Decorative Corner Element (Sama seperti sebelumnya) */}
                  <div className="absolute -bottom-10 -right-10 opacity-5 group-hover:opacity-20 transition-all duration-700 group-hover:-rotate-12">
                    <Globe size={isLarge ? 220 : 150} strokeWidth={0.5} />
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* --- THE FLOATING SUMMARY CARD (Sama seperti sebelumnya) --- */}
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} className="mt-16 p-1 bg-gradient-to-r from-pink-300/20 via-white/10 to-blue-300/20 rounded-[3rem]">
          <div className="bg-[#001226] rounded-[2.9rem] p-12 flex flex-col md:flex-row items-center gap-12 justify-between">
             <div className="flex items-center gap-8">
                <div className="relative">
                  <div className="w-24 h-24 rounded-full border-2 border-dashed border-pink-300/30 animate-[spin_10s_linear_infinite]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Zap size={32} className="text-pink-300" fill="currentColor" />
                  </div>
                </div>
                <div>
                  <h4 className="text-white text-xl font-light tracking-widest uppercase">The Performance Pulse</h4>
                  <p className="text-slate-500 text-xs mt-2 italic font-light">Optimized for serenity and speed.</p>
                </div>
             </div>
             <div className="flex gap-16">
                {[{ l: "Precision", v: "100%" }, { l: "Empathy", v: "Deep" }, { l: "Vision", v: "Global" }].map((stat, i) => (
                  <div key={i} className="text-center">
                    <p className="text-[9px] font-sans font-bold text-slate-500 uppercase tracking-widest mb-2">{stat.l}</p>
                    <p className="text-xl text-white font-light">{stat.v}</p>
                  </div>
                ))}
             </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}