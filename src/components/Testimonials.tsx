import React from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';

export interface TestimonialsProps {
  onJoinPartnerProgram?: () => void;
}

export const Testimonials: React.FC<TestimonialsProps> = () => {
  const testimonials = [
    {
      id: '1',
      author: 'Diana Rhodes',
      role: 'VP OF FP&A',
      company: 'CLOUDMETRICS',
      avatarImage: '/ELENA ROSTOVA.png',
      rating: 5,
      quote:
        'Being in high-growth SaaS, I have to admit Iverdan immediately solved our scenario modeling bottlenecks. It provided an intuitive planning experience tailored to our board expectations with complete mathematical rigor. Truly exceptional at what it does.',
    },
    {
      id: '2',
      author: 'William Blackstone',
      role: 'HEAD OF STRATEGIC FINANCE',
      company: 'NEXUS LOGISTICS',
      avatarImage: '/MARCUS VANCE.png',
      rating: 5,
      quote:
        'The governance and mathematical transparency are second to none. Most modern planning software hides drivers behind black-box ML that fails audit review. Iverdan gives our audit committee cell-level formula lineage and version confidence.',
    },
    {
      id: '3',
      author: 'Victoria Sterling',
      role: 'DIRECTOR OF OPERATIONS',
      company: 'SOLSTICE HEALTH',
      avatarImage: '/SARAH CHEN.png',
      rating: 5,
      quote:
        'We modeled three distinct macroeconomic contingencies last quarter. Having real-time visibility into how receivables delays impact cash runway gave our executive committee the confidence to optimize budgets four months before the market tightened.',
    },
    {
      id: '4',
      author: 'DAVID KAUFMAN',
      role: 'CHIEF FINANCIAL OFFICER',
      company: 'APEX MOBILITY',
      avatarImage: '/DAVID KAUFMAN.png',
      rating: 5,
      quote:
        'Switching to Iverdan cut our multi-entity consolidation and budget reconciliation cycle from three weeks to under two days. The platform gives our board unmatched clarity and trust in every revenue projection.',
    },
    {
      id: '5',
      author: 'PRIYA NAIR',
      role: 'HEAD OF CORPORATE DEVELOPMENT',
      company: 'SYNAPSE FINTECH',
      avatarImage: '/PRIYA NAIR.png',
      rating: 5,
      quote:
        'During our Series C due diligence, investors were stunned by the speed at which we ran dynamic M&A sensitivity analyses. Iverdan turns complex financial forecasting into an actionable competitive advantage.',
    },
    {
      id: '6',
      author: 'JULIAN REID',
      role: 'SENIOR DIRECTOR OF FP&A',
      company: 'HORIZON BIOHEALTH',
      avatarImage: '/JULIAN REID.png',
      rating: 5,
      quote:
        'Iverdan delivers the precision of code-based financial modeling with the agility modern executive teams demand. We’ve eliminated formula errors across 40+ departments with absolute governance.',
    },
  ];

  return (
    <section className="py-10 md:py-14 bg-[#EFEFEF]" id="testimonials" aria-label="Testimonials Section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Animated Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-10 mb-10 sm:mb-12"
        >
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1 rounded-full bg-white border border-neutral-200/90 shadow-xs mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#5425B8]" />
              <span className="text-[11px] sm:text-xs font-medium tracking-widest uppercase text-neutral-700 font-['Sora']">
                Client Reviews &amp; Testimonials
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-neutral-900 tracking-tight font-['Sora'] leading-tight">
              Trusted by strategic finance leaders
            </h2>
          </div>

          <div className="max-w-md lg:max-w-lg md:pb-1">
            <p className="text-sm sm:text-base md:text-md text-neutral-600 leading-relaxed font-sans font-normal">
              Hear how FP&amp;A teams, CFOs, and finance operators eliminate spreadsheet uncertainty and build board-level confidence with Iverdan.
            </p>
          </div>
        </motion.div>

        {/* Testimonials Grid with ample clearance for top-protruding avatars and ribbon banners */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-10 pt-8 sm:pt-10">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              whileHover={{ y: -6 }}
              className="relative bg-[#FFFFFF] rounded-2xl sm:rounded-3xl border border-neutral-200/90 p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group pt-24 sm:pt-28"
            >
              {/* ==================== Top-Left Ribbon Bookmark Banner ==================== */}
              <div className="absolute -left-3 top-0 z-20">
                <div className="bg-[#5425B8] text-white pl-4 sm:pl-5 pr-6 sm:pr-7 py-2.5 sm:py-3 rounded-tr-2xl shadow-md">
                  <span className="block font-['Sora'] font-extrabold text-xs sm:text-sm text-white tracking-wider uppercase leading-tight">
                    {item.author}
                  </span>
                  <span className="block text-[10px] sm:text-[11px] text-white/80 font-sans mt-0.5 lowercase tracking-wider">
                    review
                  </span>
                  <div className="flex items-center gap-1 mt-1.5">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
                {/* 3D Folded Ribbon Triangle Underneath */}
                <div className="w-0 h-0 border-t-[10px] border-t-[#2E0F66] border-l-[12px] border-l-transparent absolute left-0 -bottom-[10px]" />
              </div>

              {/* ==================== Top-Right Protruding Circular Avatar ==================== */}
              <div className="absolute -top-7 sm:-top-9 right-6 sm:right-8 w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-white shadow-xl overflow-hidden bg-neutral-100 z-20">
                <img
                  src={item.avatarImage}
                  alt={item.author}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>

              {/* ==================== Background Decorative Quote Mark ==================== */}
              <div className="absolute inset-0 rounded-2xl sm:rounded-3xl overflow-hidden pointer-events-none z-0">
                <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4">
                  <svg
                    className="w-14 h-14 sm:w-16 sm:h-16 text-[#5425B8]/10 select-none pointer-events-none"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
              </div>

              {/* ==================== Card Body Content (Positioned cleanly below banner with zero overlap) ==================== */}
              <div className="relative z-10">
                {/* Role & Company Header */}
                <div className="mb-3.5 text-left">
                  <h4 className="text-xs sm:text-sm font-bold text-[#5425B8] tracking-wider uppercase font-['Sora']">
                    {item.role}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-neutral-500 font-semibold tracking-wider uppercase mt-0.5 font-sans">
                    {item.company}
                  </p>
                </div>

                {/* Review Quote */}
                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-sans text-left font-normal">
                  "{item.quote}"
                </p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default React.memo(Testimonials);
