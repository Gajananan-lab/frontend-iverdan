import React from 'react';
import { motion } from 'motion/react';

export interface TeamProps {
  onJoinTeam?: () => void;
}

interface TeamMember {
  id: string;
  name: string;
  role: string;
  isFounder?: boolean;
  image: string;
}

export const Team: React.FC<TeamProps> = () => {
  const teamMembers: TeamMember[] = [
    {
      id: 'yuhansi',
      name: 'Yuhansi Senanayake',
      role: 'Founder & Chief Executive Officer',
      isFounder: true,
      image: '/Yuhansi Senanayake.png',
    },
    {
      id: 'aris',
      name: 'Aris Thorne',
      role: 'Senior Web Developer',
      image: '/Dr. Aris Thorne.png',
    },
    {
      id: 'kavindi',
      name: 'Kavindi Perera',
      role: 'Head of Product',
      image: '/Kavindi Perera.png',
    },
    {
      id: 'liam',
      name: 'Liam Montgomery',
      role: 'Lead Software Engineer',
      image: '/Liam Montgomery.png',
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-[#EFEFEF] relative z-20" id="team" aria-label="Leadership & Team Section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Animated Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-10 mb-10 sm:mb-12"
        >
          <div className="max-w-xl">
            {/* Theme Section Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1 rounded-full bg-white border border-neutral-200/90 shadow-xs mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#5425B8]" />
              <span className="text-[11px] sm:text-xs font-medium tracking-widest uppercase text-neutral-700 font-['Sora']">
                Leadership &amp; Team
              </span>
            </div>

            {/* Title with solid text color (no gradient) */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-neutral-900 tracking-tight font-['Sora'] leading-tight">
              The minds behind deterministic planning
            </h2>
          </div>

          <div className="max-w-md lg:max-w-lg md:pb-1">
            <p className="text-sm sm:text-base md:text-md leading-relaxed font-sans font-normal">
              Built by seasoned FP&amp;A practitioners, distributed systems architects, and quantitative modelers passionate about eliminating spreadsheet risk.
            </p>
          </div>
        </motion.div>

        {/* Redesigned Minimalist Portrait Team Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className={`group bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-3.5 border transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#5425B8]/12 flex flex-col cursor-default ${
                member.isFounder
                  ? 'border-[#5425B8]/30 shadow-sm ring-1 ring-[#5425B8]/15'
                  : 'border-neutral-200/80 hover:border-[#5425B8]/40 shadow-xs'
              }`}
            >
              {/* Editorial Aspect-Ratio Portrait Container */}
              <div className="relative aspect-[4/5] rounded-xl sm:rounded-2xl overflow-hidden bg-neutral-100 mb-3.5">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Founder Pill Badge */}
                {member.isFounder && (
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#5425B8] text-white text-[10px] sm:text-[11px] font-bold font-['Sora'] tracking-wider uppercase shadow-md">
                      Founder &amp; CEO
                    </span>
                  </div>
                )}
              </div>

              {/* Clean Typography Block */}
              <div className="px-1.5 pb-1.5">
                <div className="flex items-center justify-between gap-1.5">
                  <h3 className="text-base sm:text-lg font-bold text-neutral-900 font-['Sora'] tracking-tight group-hover:text-[#5425B8] transition-colors truncate">
                    {member.name}
                  </h3>
                  {member.isFounder && (
                    <span className="w-2 h-2 rounded-full bg-[#5425B8] shrink-0" title="Founder" />
                  )}
                </div>
                <p className="text-xs sm:text-[13px] font-medium text-neutral-500 font-['Sora'] mt-1 truncate">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default React.memo(Team);
