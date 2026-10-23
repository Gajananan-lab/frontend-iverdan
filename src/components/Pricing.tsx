import React from 'react';
import { motion } from 'motion/react';
import { Check, ArrowRight } from 'lucide-react';

interface PricingProps {
  onSelectTier: (tierName: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectTier }) => {
  const tiers = [
    {
      name: 'Basic Package',
      price: '$69',
      period: '/ month',
      inquiryType: 'Product Demo',
      features: [
        '1 Active financial master model',
        'Up to 3 parallel scenario branches',
        '12-month rolling forecast horizon',
        'Standard Chart of Accounts mapping',
        'Automated monthly actuals import',
        'Standard variance & burn reporting',
        '2 team editor seats included',
      ],
    },
    {
      name: 'Professional Package',
      price: '$199',
      period: '/ month',
      inquiryType: 'Scenario Advisory',
      features: [
        'Unlimited financial models & sub-plans',
        'Up to 15 parallel scenario branches',
        '36-month rolling forecast horizon',
        'Departmental rollups & cost centers',
        'AI-Assisted variance narratives',
        'Driver sensitivity & churn curve modeling',
        '10 team editor seats included',
      ],
    },
    {
      name: 'Startup Package',
      price: 'Contact',
      period: '',
      inquiryType: 'Enterprise Deployment',
      features: [
        'Unlimited scenario branches & models',
        'Multi-entity consolidation & FX currencies',
        'Custom ERP & data warehouse pipelines',
        'Deterministic simulation engine at scale',
        'Cell-level audit lineage & SOC-2 compliance',
        'Dedicated Financial Modeling Architect',
        '99.9% uptime SLA & priority support',
      ],
    },
  ];

  return (
    <section className="py-10 md:py-14 bg-[#EFEFEF]" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Animated Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1 rounded-full bg-white border border-neutral-200/90 shadow-xs mb-3.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#5425B8]" />
            <span className="text-[11px] sm:text-xs font-medium tracking-widest uppercase text-neutral-700 font-['Sora']">
              Platform Tiers
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-neutral-900 tracking-tight font-['Sora'] leading-tight mb-4">
            Transparent planning solutions for every stage
          </h2>

          <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-normal">
            Whether you are formalizing your first rolling budget or orchestrating multi-entity scenarios across dozens of business units, Iverdan provides deterministic rigor without hidden fees.
          </p>
        </motion.div>

        {/* 3 Pricing Cards matching Reference Image Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch pt-2">
          {tiers.map((tier, index) => {
            const isLast = index === tiers.length - 1;
            return (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                whileHover={{ y: -6 }}
                className={`relative flex flex-col group transition-all duration-300 ${
                  isLast ? 'md:col-span-2 md:max-w-md md:w-full md:mx-auto lg:col-span-1 lg:max-w-none' : ''
                }`}
              >
                {/* Top Purple Header Banner */}
                <div className="bg-[#5425B8] rounded-2xl sm:rounded-3xl px-6 sm:px-8 pt-8 pb-16 sm:pt-10 sm:pb-20 text-white shadow-sm">
                  <h3 className="text-sm sm:text-base font-semibold text-white/95 font-['Sora'] tracking-wide mb-2.5">
                    {tier.name}
                  </h3>
                  <div className="flex items-baseline gap-2 font-['Sora']">
                    <span className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-white leading-none">
                      {tier.price}
                    </span>
                    {tier.period && (
                      <span className="text-sm sm:text-base text-white/85 font-medium ml-0.5">
                        {tier.period}
                      </span>
                    )}
                  </div>
                </div>

                {/* White Body Card Overlapping the Purple Banner */}
                <div className="relative -mt-8 sm:-mt-10 mx-2.5 sm:mx-3 bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-md border border-neutral-200/80 flex-1 flex flex-col justify-between z-10 group-hover:shadow-xl transition-shadow duration-300">

                  {/* Features Checklist with Green Checkmarks */}
                  <div className="space-y-3.5 mb-8">
                    {tier.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-3 text-xs sm:text-sm text-neutral-600 font-sans">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 stroke-[2.5]" />
                        <span className="leading-tight">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Expanding Circle Curved Theme CTA Button */}
                  <button
                    type="button"
                    onClick={() => onSelectTier(tier.inquiryType)}
                    className="about-uiverse-btn curved group w-full"
                  >
                    <span>Select Now</span>
                    <ArrowRight className="w-4 h-4 shrink-0" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default React.memo(Pricing);
