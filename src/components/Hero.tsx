import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, X } from 'lucide-react';

export interface HeroProps {
  onExploreClick?: () => void;
  onHowItWorksClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreClick,
}) => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <section
      id="hero"
      aria-label="Hero Section"
      className="relative w-full min-h-[680px] lg:min-h-screen xl:min-h-screen flex flex-col justify-between overflow-hidden bg-[#0B1020]"
    >
      {/* 1. Full-Bleed Motion Background Image (Cleaned of all ghost/baked text & borders) */}
      <div className="absolute inset-0 z-0">
        <img
          src="/Hero.png"
          alt="Iverdan Scenario Planning"
          className="w-full h-full object-cover object-right md:object-center select-none pointer-events-none"
          decoding="async"
        />

        {/* Dark Left-to-Right Theme Vignette: ensures high-contrast readability on the left */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1020] via-[#0B1020]/90 via-45% to-transparent z-10" />

        {/* Top Floating Header Space Shade & Edge Vignettes */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1020]/80 via-transparent via-25% to-transparent z-10" />
        <div className="absolute inset-0 bg-[#0B1020]/20 z-10" />
      </div>

      {/* 2. Main Hero Content (Properly Spaced & Never Cut Off Below) */}
      <div className="relative z-20 w-full px-6 sm:px-12 lg:px-16 pt-28 sm:pt-32 md:pt-36 lg:pt-40 pb-20 sm:pb-24 lg:pb-28 flex-1 flex flex-col justify-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="max-w-2xl lg:max-w-3xl">

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.75rem] xl:text-[4.25rem] font-bold tracking-tight text-white leading-[1.08] font-['Sora'] drop-shadow-sm"
            >
              Meet Iverdan, the<br />
              scenario planning<br />
              tool. 
            </motion.h1>

            {/* Subtitle Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-xs sm:text-sm md:text-base text-neutral-300 font-normal leading-relaxed max-w-lg mt-5 mb-7 font-sans"
            >

              Turn scattered financial data into budgets, forecasts, and defined scenarios. Compare outcomes before decisions.

            </motion.p>

            {/* Solid Purple Curved Pill CTA Button: [ IVERDAN LAB ▶ ] */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="w-full sm:w-auto"
            >
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                type="button"
                onClick={() => setIsVideoModalOpen(true)}
                className="w-full sm:w-auto bg-[#5425B8] hover:bg-[#6533d1] text-white font-['Sora'] font-bold text-xs sm:text-[13px] tracking-widest uppercase px-8 py-4 rounded-full transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white flex items-center justify-center gap-2.5"
              >
                <span>Iverdan Lab</span>
                <Play className="w-3.5 h-3.5 fill-white text-white shrink-0" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* 3. Bottom Curved Wave Transition matching User Drawing (extended downwards to eliminate subpixel gap/border on sm devices) */}
      <div className="absolute -bottom-1 left-0 right-0 w-full leading-none z-20 pointer-events-none translate-y-[2px]">
        <svg
          viewBox="0 0 1440 95"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-12 sm:h-16 md:h-18 lg:h-20 block pointer-events-none"
        >
          <path
            d="M0,45 C240,75 420,25 680,36 C940,48 1100,80 1280,52 C1360,40 1410,25 1440,20 L1440,110 L0,110 Z"
            fill="#EFEFEF"
          />
        </svg>
      </div>

      {/* Video Intro Modal */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
            onClick={() => setIsVideoModalOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0B1020] rounded-2xl overflow-hidden shadow-2xl max-w-3xl w-full border border-neutral-700"
            >
              <div className="px-6 py-4 bg-neutral-900 border-b border-neutral-800 flex items-center justify-between text-white">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#5425B8]" />
                  <span className="font-['Sora'] font-bold text-sm">
                    Iverdan Platform Introduction
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setIsVideoModalOpen(false)}
                  className="p-1.5 rounded-lg hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 sm:p-8">
                <div className="aspect-video rounded-xl bg-gradient-to-br from-[#0B1020] to-[#1d2642] border border-neutral-800 p-6 flex flex-col justify-between text-white">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-[#44B1EF] font-bold">
                      Competitive Intelligence &amp; Modeling
                    </span>
                    <h3 className="text-2xl font-bold font-['Sora'] mt-2">
                      Deterministic Scenario Planning for High-Growth Ventures
                    </h3>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <span className="text-xs text-neutral-400">
                      Iverdan Intelligence Engine
                    </span>
                    <button
                      type="button"
                      onClick={() => {
                        setIsVideoModalOpen(false);
                        if (onExploreClick) onExploreClick();
                      }}
                      className="text-xs font-semibold px-4 py-2 rounded-lg bg-[#5425B8] text-white hover:bg-[#6533d1] transition-colors"
                    >
                      Explore Platform
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default React.memo(Hero);

