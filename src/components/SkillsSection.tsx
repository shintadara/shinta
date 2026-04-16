"use client";

import { motion } from "framer-motion";
import { Code, Palette, Cpu, Sparkles, Star, Moon, Feather, PenTool } from "lucide-react";

const skillCategories = [
  {
    title: "The Art of Interface",
    subtitle: "Frontend Aesthetics",
    icon: Palette,
    color: "#FFB6C1", // Soft Pink
    skills: [
      { name: "React / Next.js", level: 92 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Framer Motion", level: 88 },
    ],
  },
  {
    title: "Visual Narrative",
    subtitle: "Design & Creative",
    icon: PenTool,
    color: "#E6E6FA", // Soft Lavender
    skills: [
      { name: "UI/UX Design", level: 90 },
      { name: "Figma Mastery", level: 85 },
      { name: "Brand Identity", level: 82 },
    ],
  },
  {
    title: "The Digital Engine",
    subtitle: "System Architecture",
    icon: Cpu,
    color: "#87CEEB", // Sky Blue
    skills: [
      { name: "TypeScript", level: 85 },
      { name: "Node.js / APIs", level: 78 },
      { name: "Database Design", level: 80 },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="relative py-32 bg-[#001226] overflow-hidden font-serif">
      
      {/* BACKGROUND DECOR: FLOWING LIGHT */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-[-10%] w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full" />
        <div className="absolute top-0 right-[-5%] w-[400px] h-[400px] bg-pink-500/5 blur-[100px] rounded-full" />
      </div>

      <div className="container relative z-10 px-6 mx-auto max-w-7xl">
        
        {/* HEADER SECTION: ELEGANT & MINIMALIST */}
        <div className="flex flex-col items-center mb-24 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 px-6 py-2 bg-white/5 border border-white/10 rounded-full mb-6"
          >
            <Sparkles size={14} className="text-pink-300" />
            <span className="text-[10px] font-sans font-bold text-pink-200 uppercase tracking-[0.4em]">Craftsmanship Portfolio</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-light text-white leading-tight">
            Curated <span className="italic font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-200 via-white to-blue-200">Proficiencies</span>
          </h2>
        </div>

        {/* SKILLS GRID: GLASS CARDS WITH ORGANIC FEEL */}
        <div className="grid lg:grid-cols-3 gap-10">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15 }}
              className="relative group"
            >
              {/* Card Container */}
              <div className="relative z-10 bg-white/[0.03] backdrop-blur-2xl border border-white/10 p-10 rounded-[3rem] h-full transition-all duration-700 group-hover:bg-white/[0.05] group-hover:border-white/20 shadow-2xl overflow-hidden">
                
                {/* Decorative corner glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl rounded-full -mr-16 -mt-16" />

                {/* Category Icon & Title */}
                <div className="relative z-10 flex flex-col items-center text-center mb-12">
                  <div 
                    className="p-5 rounded-full mb-6 border-2 border-dashed transition-transform duration-700 group-hover:rotate-[360deg]"
                    style={{ borderColor: `${category.color}40`, backgroundColor: `${category.color}08` }}
                  >
                    <category.icon size={32} style={{ color: category.color }} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-light text-white tracking-wide mb-2">
                    {category.title}
                  </h3>
                  <p className="text-[10px] font-sans font-bold text-slate-500 uppercase tracking-[0.3em]">
                    {category.subtitle}
                  </p>
                </div>

                {/* Skill Bars: Minimalist & Soft */}
                <div className="space-y-10 relative z-10">
                  {category.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="group/skill">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-xs font-sans font-bold text-slate-400 uppercase tracking-widest group-hover/skill:text-white transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-xs italic text-pink-200/50">
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className="h-[2px] w-full bg-white/5 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 2, ease: "circOut" }}
                          className="h-full relative"
                          style={{ backgroundColor: category.color }}
                        >
                          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_10px_#fff]" />
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Floating Decoration */}
                <div className="absolute bottom-8 right-10 opacity-10 group-hover:opacity-30 transition-opacity">
                  <Star size={40} className="text-white" />
                </div>
              </div>

              {/* Background Aura */}
              <div 
                className="absolute inset-0 blur-[80px] opacity-0 group-hover:opacity-10 transition-opacity duration-700 rounded-full"
                style={{ backgroundColor: category.color }}
              />
            </motion.div>
          ))}
        </div>

        {/* BOTTOM PHILOSOPHY LINE */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-24 flex flex-col items-center text-center space-y-8"
        >
          <div className="h-[1px] w-32 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          
          <div className="flex items-center gap-8">
            <Feather size={20} className="text-pink-300 opacity-50" />
            <p className="max-w-xl text-slate-400 text-sm leading-relaxed italic font-light">
              "Every skill is a thread in the tapestry of digital creation. I don't just write code; I weave experiences that resonate with the human spirit."
            </p>
            <Moon size={20} className="text-blue-300 opacity-50" />
          </div>

          <div className="flex gap-4 pt-4">
             <div className="px-5 py-1.5 bg-white/5 border border-white/10 rounded-full text-[9px] font-sans font-bold text-white/40 uppercase tracking-[0.3em]">
               Precision Based
             </div>
             <div className="px-5 py-1.5 bg-white/5 border border-white/10 rounded-full text-[9px] font-sans font-bold text-white/40 uppercase tracking-[0.3em]">
               Elegance Driven
             </div>
          </div>
        </motion.div>
      </div>

      {/* BACKGROUND TEXT WATERMARK */}
      <div className="absolute -bottom-10 left-10 text-[12rem] font-light text-white/[0.01] pointer-events-none select-none uppercase tracking-tighter">
        Mastery
      </div>
    </section>
  );
}