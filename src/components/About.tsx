import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export interface AboutProps {
  onLearnMore?: () => void;
}

export const About: React.FC<AboutProps> = ({ onLearnMore }) => {
  const handleMoreAboutClick = () => {
    if (onLearnMore) {
      onLearnMore();
    } else {
      const teamEl = document.getElementById('team');
      if (teamEl) {
        teamEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const featureCards = [
    {
      id: 'fund',
      iconSrc: '/Fund With Expert Strategies.svg',
      title: 'Fund With Expert Strategies',
      description: 'Real-time capital modeling, burn telemetry, and runway optimization.',
    },
    {
      id: 'revenue',
      iconSrc: '/Focusing On Revenue.svg',
      title: 'Focusing On Revenue',
      description: 'Predictive ARR forecasting, margin driver analysis, and automated sync.',
    },
    {
      id: 'scenario',
      iconSrc: '/Scenario-Driven Planning.svg',
      title: 'Scenario-Driven Planning',
      description: 'Multi-branch simulations, driver sensitivity testing, and variance analytics.',
    },
  ];

  return (
    <section className="py-8 sm:py-10 lg:py-12 bg-[#EFEFEF] -mt-1 sm:-mt-[2px] relative z-20 border-none outline-none" id="about" aria-label="About Section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Responsive Grid with equal height columns aligned at both top and bottom */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-6 xl:gap-8 items-stretch">
          
          {/* ==================== LEFT COLUMN: Headlines, Description, Feature Cards ==================== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-12 lg:col-span-5 flex flex-col justify-between h-full"
          >
            <div className="mb-4 lg:mb-5">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1 rounded-full bg-white border border-neutral-200/90 shadow-xs mb-3.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#5425B8]" />
                <span className="text-[11px] sm:text-xs font-medium tracking-widest uppercase text-neutral-700 font-['Sora']">
                  About Iverdan
                </span>
              </div>

              {/* Main Headline starting flush at top level */}
              <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] xl:text-[2.5rem] font-normal text-neutral-900 tracking-tight font-['Sora'] leading-[1.18] mb-3 sm:mb-4">
                Collaborate to Build <br className="hidden sm:inline" />
                The Innovative Tech <br className="hidden sm:inline" />
                Ecosystem
              </h2>

              {/* Subtitle / Paragraph */}
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-sans max-w-xl font-normal">
                Unify your cross-functional teams, real-time financial streams, and strategic models into a single collaborative workspace. Eliminate silos and build sustainable growth with complete clarity.
              </p>
            </div>

            {/* Three Stacked Feature Highlight Cards (aligned flush at bottom) */}
            <div className="space-y-2.5 sm:space-y-3 pt-1">
              {featureCards.map((card) => {
                return (
                  <motion.div
                    key={card.id}
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                    className="bg-white rounded-2xl p-3 sm:p-3.5 border border-neutral-200/90 shadow-xs hover:shadow-md hover:border-[#5425B8]/30 transition-all duration-300 flex items-center gap-3.5 group cursor-default"
                  >
                    <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#5425B8] flex items-center justify-center shrink-0 shadow-md shadow-[#5425B8]/25 p-2 sm:p-2">
                      <img
                        src={card.iconSrc}
                        alt={card.title}
                        className="w-full h-full object-contain select-none pointer-events-none"
                      />
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-[0.95rem] font-bold text-[#000000] font-['Sora'] leading-snug">
                        {card.title}
                      </h3>
                      <p className="text-xs text-neutral-500 font-sans mt-0.5 leading-normal">
                        {card.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* ==================== MIDDLE COLUMN: Full-Height Aligned Portrait Image ==================== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-6 lg:col-span-4 flex flex-col h-full"
          >
            <div className="relative w-full h-[360px] sm:h-[400px] md:h-full min-h-[360px] lg:min-h-0 rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-neutral-200/80 bg-neutral-100 group">
              <img
                src="/About 1.png"
                alt="Collaborative Tech Team"
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
              {/* Subtle Ambient Vignette */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none opacity-50" />
            </div>
          </motion.div>

          {/* ==================== RIGHT COLUMN: Collaboration Text & Bottom-Aligned Image ==================== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-6 lg:col-span-3 flex flex-col justify-between h-full"
          >
            {/* Top Text Content & Action Button (starts flush at top level) */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-[#000000] font-['Sora'] leading-snug mb-2">
                Collaboration Is the <br className="hidden lg:inline" />
                Key of Success
              </h3>

              <p className="text-xs text-neutral-600 leading-relaxed font-sans mb-3.5">
                Align departmental leaders and financial strategists around a single, transparent source of truth with verified metrics.
              </p>

              {/* Uiverse Expanding Circle Theme Button (Curved) */}
              <button
                type="button"
                onClick={handleMoreAboutClick}
                className="about-uiverse-btn curved group w-full sm:w-auto"
              >
                <span>More About Us</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>
            </div>

            {/* Bottom Secondary Image (fills to row bottom level) */}
            <div className="relative w-full flex-1 min-h-[175px] sm:min-h-[195px] lg:min-h-[200px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-md border border-neutral-200/80 bg-neutral-100 group mt-4 sm:mt-5">
              <img
                src="/About 2.png"
                alt="Iverdan Team"
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
              {/* Subtle ambient light */}
              <div className="absolute inset-0 bg-neutral-900/10 pointer-events-none" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default React.memo(About);
