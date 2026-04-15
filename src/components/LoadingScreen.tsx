"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react"; // Import icon bintang

export default function LoadingScreen({ onFinish }: { onFinish: () => void }) {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + 1));
    }, 30); 

    const timeout = setTimeout(() => {
      setVisible(false);
      setTimeout(onFinish, 1000);
    }, 4500);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [onFinish]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 1.1,
            filter: "blur(20px)",
            transition: { duration: 1, ease: [0.7, 0, 0.3, 1] } 
          }}
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#000814] overflow-hidden"
        >
          {/* 1. BACKGROUND DYNAMIC MESH */}
          <div className="absolute inset-0">
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                x: [0, 50, 0],
                y: [0, 30, 0],
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_#001d3d_0%,_transparent_60%)] opacity-60 blur-[120px]"
            />
          </div>

          {/* 2. THE CELESTIAL CORE */}
          <div className="relative flex items-center justify-center">
            
            {/* Animasi Ring Mutiara */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: [0, 0.2, 0], 
                  scale: [0.8, 1.5, 2],
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  delay: i * 1.3,
                  ease: "easeOut" 
                }}
                className="absolute border border-[#F4C2C2] rounded-full"
                style={{ width: '400px', height: '400px' }}
              />
            ))}

            {/* Orbiting Particles */}
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: i * 0.2 }}
                className="absolute w-[500px] h-[500px]"
              >
                <motion.div 
                  animate={{ 
                    y: [0, -20, 0],
                    opacity: [0.2, 0.8, 0.2] 
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="w-1.5 h-1.5 bg-[#FFD700] rounded-full shadow-[0_0_15px_#FFD700]"
                />
              </motion.div>
            ))}

            {/* 3. CENTER STAR LOGO WITH LIQUID REVEAL */}
            <div className="relative z-10 flex items-center justify-center">
              <motion.div
                initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
                animate={{ clipPath: `inset(${100 - progress}% 0% 0% 0%)` }}
                className="relative"
              >
                {/* Icon Bintang Utama */}
                <Star 
                  size={220} 
                  strokeWidth={0.5} 
                  className="text-[#F4C2C2] drop-shadow-[0_0_50px_rgba(244,194,194,0.4)] fill-[#F4C2C2]/10" 
                />
              </motion.div>
              
              {/* Overlay Glass Reflection di atas Bintang */}
              <motion.div 
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 pointer-events-none"
              />
            </div>
          </div>

          {/* 4. LUXURY HUD & PROGRESS */}
          <div className="absolute bottom-24 flex flex-col items-center w-full max-w-sm px-10">
            
            <div className="flex items-center gap-4 mb-6">
              <motion.div 
                animate={{ width: ["0px", "40px", "0px"] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="h-[1px] bg-[#F4C2C2]"
              />
              <span className="text-[10px] font-sans font-black text-white/40 tracking-[0.8em] uppercase">
                {progress < 100 ? "Harmonizing" : "Perfected"}
              </span>
              <motion.div 
                animate={{ width: ["0px", "40px", "0px"] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="h-[1px] bg-[#F4C2C2]"
              />
            </div>

            <div className="relative w-full h-[2px] bg-white/5 overflow-hidden rounded-full">
              <motion.div 
                initial={{ x: "-100%" }}
                animate={{ x: `${progress - 100}%` }}
                transition={{ type: "spring", damping: 20 }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-[#F4C2C2] to-[#FFD700]"
              />
            </div>

            <div className="mt-4 flex justify-between w-full">
              <span className="text-[8px] font-bold text-[#F4C2C2]/50 tracking-widest uppercase">Est. 2026</span>
              <span className="text-xl font-serif italic text-white/80">{progress}%</span>
              <span className="text-[8px] font-bold text-[#FFD700]/50 tracking-widest uppercase">Aura v.2</span>
            </div>
          </div>

          {/* Luxury Corner Marks */}
          <div className="absolute top-10 left-10 opacity-20 border-l border-t border-[#F4C2C2] w-20 h-20 rounded-tl-3xl" />
          <div className="absolute bottom-10 right-10 opacity-20 border-r border-b border-[#F4C2C2] w-20 h-20 rounded-br-3xl" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}