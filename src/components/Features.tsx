import React from 'react';
import { motion } from 'motion/react';

export interface FeaturesProps {
  onLearnMore?: (featureId: string) => void;
}

export const Features: React.FC<FeaturesProps> = () => {
  const featureList = [
    {
      id: 'financial-overview',
      title: 'Financial Overview',
      description:
        'A unified executive dashboard tracking cash balances, gross margins, EBITDA, burn multiple, and net working capital with automated variance flags.',
      iconSrc: '/Financial Overview.svg',
    },
    {
      id: 'budget-forecast',
      title: 'Budget & Forecasting',
      description:
        'Structure operational expense categories across departments with owner-level accountability and rolling 12-to-36 month forecast horizons.',
      iconSrc: '/Budget & Forecasting.svg',
    },
    {
      id: 'scenario-builder',
      title: 'Scenario Builder',
      description:
        'Create isolated sandbox branches to explore "what-if" strategic alternatives side-by-side without altering baseline figures.',
      iconSrc: '/Scenario Builder.svg',
    },
    {
      id: 'forecasting-analytics',
      title: 'Forecasting & Analytics',
      description:
        'Model future outcomes using deterministic operational drivers: customer acquisition costs, net revenue retention, and seasonal curves.',
      iconSrc: '/Forecasting & Analytics.svg',
    },
    {
      id: 'ai-assisted-insights',
      title: 'AI-Assisted Insights',
      description:
        'Synthesize multidimensional variance reports into board-ready narrative summaries explaining why actuals diverged from forecast assumptions.',
      iconSrc: '/AI-Assisted Insights.svg',
    },
    {
      id: 'governance-traceability',
      title: 'Governance & Traceability',
      description:
        'Enterprise-grade governance tracking cell-level revisions, assumption logs, and immutable version locks for audit and compliance.',
      iconSrc: '/Governance & Traceability.svg',
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-[#EFEFEF]" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Section Header: Title on Left, Description on Right */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-12 mb-10 sm:mb-12"
        >
          {/* Left Side: Badge + Reduced Title (font-normal, not bold) */}
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1 rounded-full bg-white border border-neutral-200/90 shadow-xs mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#5425B8]" />
              <span className="text-[11px] sm:text-xs font-normal tracking-widest uppercase text-neutral-700 font-['Sora']">
                Platform Capabilities
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-neutral-900 tracking-tight font-['Sora'] leading-snug">
              Comprehensive scenario intelligence, engineered for financial rigor.
            </h2>
          </div>

          {/* Right Side: Description */}
          <div className="max-w-md lg:pb-1">
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal font-sans">
              Every capability is designed to bridge the gap between static historical ledgers and forward-looking strategic agility with continuous auditability.
            </p>
          </div>
        </motion.div>

        {/* 6 Features Grid: Compact Balanced Height with Gently Curved Edges */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 items-stretch">
          {featureList.map((feature, index) => {
            const isFeatured = index === 1; // Card 2 is the featured card matching theme colors

            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`rounded-2xl p-6 sm:p-7 flex flex-col justify-start h-full transition-all duration-200 ${
                  isFeatured
                    ? 'bg-[#5425B8] text-white shadow-md'
                    : 'bg-white text-neutral-900 border border-neutral-200/90 shadow-xs hover:border-[#5425B8]/30'
                }`}
              >
                {/* Header Row: Title & Symmetrical Icon Badge */}
                <div className="flex items-start justify-between gap-3.5 sm:gap-4 mb-3.5">
                  <h3
                    className={`text-lg sm:text-xl font-normal font-['Sora'] tracking-tight leading-snug pt-1 ${
                      isFeatured ? 'text-white' : 'text-neutral-900'
                    }`}
                  >
                    {feature.title}
                  </h3>

                  <div
                    className={`w-16 h-16 sm:w-18 sm:h-18 rounded-full flex items-center justify-center shrink-0 p-1.5 sm:p-2 ${
                      isFeatured
                        ? 'bg-white shadow-xs'
                        : 'bg-[#5425B8]/10'
                    }`}
                  >
                    <img
                      src={feature.iconSrc}
                      alt={feature.title}
                      className="w-full h-full object-contain select-none pointer-events-none"
                    />
                  </div>
                </div>

                {/* Description */}
                <p
                  className={`text-sm leading-relaxed font-normal font-sans ${
                    isFeatured ? 'text-white/85' : 'text-neutral-600'
                  }`}
                >
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default React.memo(Features);
