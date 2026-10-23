import React from 'react';
import { motion } from 'motion/react';
interface StepItem {
  stepCode: string;
  title: string;
  subtitle: string;
  description: string;
  gradientId: string;
  color: string;
  cx: number;
  cy: number;
  iconSrc: string;
}

interface DecorativeHexagon {
  id: string;
  title: string;
  cx: number;
  cy: number;
  r: number;
  iconSrc: string;
  color: string;
}

export const HowItWorks: React.FC = () => {
  // Helper to generate SVG points for a regular pointy-top hexagon
  const getHexagonPoints = (cx: number, cy: number, r: number): string => {
    const w = r * Math.sqrt(3);
    const p1 = `${cx},${cy - r}`;
    const p2 = `${cx + w / 2},${cy - r / 2}`;
    const p3 = `${cx + w / 2},${cy + r / 2}`;
    const p4 = `${cx},${cy + r}`;
    const p5 = `${cx - w / 2},${cy + r / 2}`;
    const p6 = `${cx - w / 2},${cy - r / 2}`;
    return `${p1} ${p2} ${p3} ${p4} ${p5} ${p6}`;
  };

  // Main 5 Steps: R=120px, dx=226px, dy=112px
  // Mathematically verified: uniform 18.15px clean gap between all adjacent cards (NO overlap)
  // Symmetrically centered inside 1200px viewBox (center step at cx=600px)
  const steps: StepItem[] = [
    {
      stepCode: '01',
      title: 'Connect Sources',
      subtitle: 'Data Ingestion',
      description:
        'Connect disparate general ledgers, bank feeds, and billing data into a unified Chart of Accounts.',
      gradientId: 'hexGrad1',
      color: '#341174', // Deep Royal Purple
      cx: 148,
      cy: 265, // Lower
      iconSrc: '/Connect Sources.svg',
    },
    {
      stepCode: '02',
      title: 'Build Baselines',
      subtitle: 'Baseline Budgets',
      description:
        'Establish operating baseline budgets, operational headcount ramps, and rolling 12-to-36 month projections.',
      gradientId: 'hexGrad2',
      color: '#5425B8', // Royal Brand Purple
      cx: 374,
      cy: 153, // Higher
      iconSrc: '/Build Baselines.svg',
    },
    {
      stepCode: '03',
      title: 'Model Scenarios',
      subtitle: 'Scenario Modeling',
      description:
        'Fork baseline plans in seconds to stress-test your business against volatile assumptions and runway.',
      gradientId: 'hexGrad3',
      color: '#6D28D9', // Electric Violet
      cx: 600,
      cy: 265, // Lower
      iconSrc: '/Model Scenarios.svg',
    },
    {
      stepCode: '04',
      title: 'Reconcile & Audit',
      subtitle: 'Variance Audit',
      description:
        'Continuously reconcile actual financial performance against budget with automated audit trails.',
      gradientId: 'hexGrad4',
      color: '#7C3AED', // Radiant Purple
      cx: 826,
      cy: 153, // Higher
      iconSrc: '/Reconcile & Audit.svg',
    },
    {
      stepCode: '05',
      title: 'Distribute Decks',
      subtitle: 'Executive Decks',
      description:
        'Distribute audit-compliant board decks, variance summaries, and interactive stakeholder models.',
      gradientId: 'hexGrad5',
      color: '#9333EA', // Theme Purple-Magenta
      cx: 1052,
      cy: 265, // Lower
      iconSrc: '/Distribute Decks.svg',
    },
  ];

  // Secondary white hexagons with theme icons, perfectly aligned with vertical 32px gap
  const decorativeHexagons: DecorativeHexagon[] = [
    {
      id: 'connect-sources',
      title: 'Connect Sources',
      cx: 148,
      cy: 65,
      r: 48,
      iconSrc: '/Connect Sources.svg',
      color: '#431A9E',
    },
    {
      id: 'build-baselines',
      title: 'Build Baselines',
      cx: 374,
      cy: 353,
      r: 48,
      iconSrc: '/Build Baselines.svg',
      color: '#5425B8',
    },
    {
      id: 'model-scenarios',
      title: 'Model Scenarios',
      cx: 600,
      cy: 65,
      r: 48,
      iconSrc: '/Model Scenarios.svg',
      color: '#6D28D9',
    },
    {
      id: 'reconcile-audit',
      title: 'Reconcile & Audit',
      cx: 826,
      cy: 353,
      r: 48,
      iconSrc: '/Reconcile & Audit.svg',
      color: '#7C3AED',
    },
    {
      id: 'distribute-decks',
      title: 'Distribute Decks',
      cx: 1052,
      cy: 65,
      r: 48,
      iconSrc: '/Distribute Decks.svg',
      color: '#9333EA',
    },
  ];

  // Vertical guide connectors between decorative icons and step cards
  const connectorLines = [
    { x1: 148, y1: 113, x2: 148, y2: 145 },
    { x1: 374, y1: 273, x2: 374, y2: 305 },
    { x1: 600, y1: 113, x2: 600, y2: 145 },
    { x1: 826, y1: 273, x2: 826, y2: 305 },
    { x1: 1052, y1: 113, x2: 1052, y2: 145 },
  ];

  // Balanced background accent hexagons
  const backgroundAccents = [
    { cx: 25, cy: 170, r: 24 },
    { cx: 1175, cy: 360, r: 24 },
  ];

  return (
    <section className="py-10 sm:py-12 md:py-16 bg-[#EFEFEF] relative overflow-hidden" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-8 sm:mb-12"
        >
          {/* Section Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-neutral-200 shadow-xs mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#5425B8]" />
            <span className="text-[11px] sm:text-xs font-medium tracking-widest uppercase text-neutral-700 font-['Sora']">
              Structured Planning Methodology
            </span>
          </div>

          {/* Section Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-neutral-900 tracking-tight font-['Sora'] leading-tight mb-3">
            How It Works
          </h2>

          {/* Section Subtitle */}
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal font-sans">
            A disciplined five-stage progression from raw ledger ingestion to board-ready strategic models.
          </p>
        </motion.div>

        {/* =========================================================================
            DESKTOP / TABLET VIEW: Crisp 18px Gaps, Tactile Elevation, Flow Connector
           ========================================================================= */}
        <div className="hidden md:block w-full max-w-6xl xl:max-w-7xl mx-auto">
          <svg
            viewBox="0 0 1200 420"
            className="w-full h-auto overflow-visible select-none"
            aria-label="5-stage interlocking hexagonal process flow"
          >
            <defs>
              {/* Refined Multi-Layer Shadow for Main Hexagons */}
              <filter id="hexCardShadow" x="-30%" y="-30%" width="160%" height="160%">
                <feDropShadow dx="0" dy="12" stdDeviation="12" floodColor="#250854" floodOpacity="0.18" />
                <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="#0B0314" floodOpacity="0.12" />
              </filter>

              {/* Refined Shadow for Small Decorative Hexagons */}
              <filter id="smallHexShadow" x="-35%" y="-35%" width="170%" height="170%">
                <feDropShadow dx="0" dy="5" stdDeviation="6" floodColor="#2E0854" floodOpacity="0.09" />
                <feDropShadow dx="0" dy="1" stdDeviation="2" floodColor="#000000" floodOpacity="0.04" />
              </filter>

              {/* Glassmorphic Top Highlight Rim Stroke */}
              <linearGradient id="hexStrokeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.45" />
                <stop offset="45%" stopColor="#FFFFFF" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.05" />
              </linearGradient>

              {/* Subtle Gradient Wave Connector Track */}
              <linearGradient id="flowLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#431A9E" />
                <stop offset="25%" stopColor="#5425B8" />
                <stop offset="50%" stopColor="#6D28D9" />
                <stop offset="75%" stopColor="#7C3AED" />
                <stop offset="100%" stopColor="#9333EA" />
              </linearGradient>

              {/* Theme Color Gradients (Curated Royal to Magenta-Purple Progression) */}
              <linearGradient id="hexGrad1" x1="15%" y1="0%" x2="85%" y2="100%">
                <stop offset="0%" stopColor="#481CA8" />
                <stop offset="100%" stopColor="#250854" />
              </linearGradient>

              <linearGradient id="hexGrad2" x1="15%" y1="0%" x2="85%" y2="100%">
                <stop offset="0%" stopColor="#622CCF" />
                <stop offset="100%" stopColor="#3C138E" />
              </linearGradient>

              <linearGradient id="hexGrad3" x1="15%" y1="0%" x2="85%" y2="100%">
                <stop offset="0%" stopColor="#7C3AED" />
                <stop offset="100%" stopColor="#4E16A1" />
              </linearGradient>

              <linearGradient id="hexGrad4" x1="15%" y1="0%" x2="85%" y2="100%">
                <stop offset="0%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#5B1DB8" />
              </linearGradient>

              <linearGradient id="hexGrad5" x1="15%" y1="0%" x2="85%" y2="100%">
                <stop offset="0%" stopColor="#9E3BED" />
                <stop offset="100%" stopColor="#6D28D9" />
              </linearGradient>
            </defs>

            {/* 1. Subtle Outer Accent Hexagons */}
            {backgroundAccents.map((bg, idx) => (
              <polygon
                key={`bg-accent-${idx}`}
                points={getHexagonPoints(bg.cx, bg.cy, bg.r)}
                fill="#FFFFFF"
                stroke="#D1D5DB"
                strokeWidth={1.5}
                opacity={0.65}
              />
            ))}

            {/* 2. Process Flow Wave Connector Track (Behind Main Cards) */}
            <path
              d="M 148,265 C 230,265 290,153 374,153 C 460,153 515,265 600,265 C 685,265 740,153 826,153 C 910,153 970,265 1052,265"
              fill="none"
              stroke="url(#flowLineGrad)"
              strokeWidth={2.5}
              strokeDasharray="6 6"
              opacity={0.4}
            />

            {/* 3. Vertical Connector Lines to Decorative Icons */}
            {connectorLines.map((line, idx) => (
              <line
                key={`connector-line-${idx}`}
                x1={line.x1}
                y1={line.y1}
                x2={line.x2}
                y2={line.y2}
                stroke="#8B5CF6"
                strokeWidth={1.5}
                strokeDasharray="3 3"
                opacity={0.45}
              />
            ))}

            {/* 4. Smaller Decorative Hexagons with Theme Icons */}
            {decorativeHexagons.map((dec) => {
              return (
                <g key={`dec-hex-${dec.id}`} filter="url(#smallHexShadow)">
                  {/* White Hexagon Body */}
                  <polygon
                    points={getHexagonPoints(dec.cx, dec.cy, dec.r)}
                    fill="#FFFFFF"
                    stroke="#E2E8F0"
                    strokeWidth={1.5}
                  />

                  {/* Subtle Inner Accent Ring */}
                  <polygon
                    points={getHexagonPoints(dec.cx, dec.cy, dec.r - 2.5)}
                    fill="none"
                    stroke="rgba(84, 37, 184, 0.08)"
                    strokeWidth={1}
                  />

                  {/* Centered Theme Icon */}
                  <foreignObject
                    x={dec.cx - 30}
                    y={dec.cy - 30}
                    width={60}
                    height={60}
                    className="pointer-events-none"
                  >
                    <div 
                      className="w-full h-full flex items-center justify-center p-0.5"
                    >
                      <img
                        src={dec.iconSrc}
                        alt={dec.title}
                        className="w-12 h-12 object-contain select-none pointer-events-none"
                      />
                    </div>
                  </foreignObject>
                </g>
              );
            })}

            {/* 5. The 5 Main Hexagons: Guaranteed ~18px Gaps (NO Overlap), Enhanced Glassmorphic Bevel */}
            {steps.map((step) => {
              const r = 120;

              return (
                <g key={`main-hex-${step.stepCode}`} filter="url(#hexCardShadow)">
                  {/* Hexagon Body */}
                  <polygon
                    points={getHexagonPoints(step.cx, step.cy, r)}
                    fill={`url(#${step.gradientId})`}
                    stroke="url(#hexStrokeGrad)"
                    strokeWidth={1.5}
                  />

                  {/* Subtle Inner Inset Bevel Ring */}
                  <polygon
                    points={getHexagonPoints(step.cx, step.cy, r - 3)}
                    fill="none"
                    stroke="rgba(255, 255, 255, 0.12)"
                    strokeWidth={1}
                  />

                  {/* Centered Step Content */}
                  <foreignObject
                    x={step.cx - 82}
                    y={step.cy - 86}
                    width={164}
                    height={172}
                    className="overflow-visible pointer-events-none"
                  >
                    <div className="w-full h-full flex flex-col items-center justify-center text-center px-1.5 select-none text-white">
                      {/* Step Subtitle / Label */}
                      <span className="text-[9.5px] font-medium tracking-[0.22em] uppercase text-white/80 font-['Sora'] mb-0.5">
                        STEP
                      </span>

                      {/* Prominent Step Number */}
                      <span className="text-[28px] sm:text-[32px] font-bold tracking-tight font-['Sora'] text-white leading-none mb-1.5 drop-shadow-xs">
                        {step.stepCode}
                      </span>

                      {/* Step Title */}
                      <h3 className="text-[13px] sm:text-[14px] font-semibold tracking-tight font-['Sora'] text-white leading-tight mb-1.5 px-1">
                        {step.title}
                      </h3>

                      {/* Full Step Description */}
                      <p className="text-[10px] sm:text-[10.5px] text-white/85 font-sans leading-relaxed font-normal max-w-[145px]">
                        {step.description}
                      </p>
                    </div>
                  </foreignObject>
                </g>
              );
            })}
          </svg>
        </div>

        {/* =========================================================================
            MOBILE VIEW: Vertically Stacked Hexagonal Step Cards (< 768px)
           ========================================================================= */}
        <div className="block md:hidden relative py-2 max-w-md sm:max-w-xl mx-auto">
          {/* Vertical Connecting Track Line in Theme Purple */}
          <div className="absolute left-7 sm:left-8 top-6 bottom-6 w-0.5 bg-gradient-to-b from-[#341174] via-[#6D28D9] to-[#9333EA] opacity-35 z-0" />

          <div className="relative z-10 flex flex-col space-y-4 sm:space-y-5">
            {steps.map((step) => {
              return (
                <div key={step.stepCode} className="relative flex items-start gap-3.5 sm:gap-5">
                  {/* Hexagonal Step Number Badge */}
                  <div
                    className="w-14 h-14 sm:w-16 sm:h-16 shrink-0 relative flex items-center justify-center shadow-md text-white select-none"
                    style={{
                      clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                      backgroundColor: step.color,
                    }}
                  >
                    <div className="flex flex-col items-center justify-center">
                      <span className="text-[8.5px] sm:text-[9.5px] uppercase tracking-wider text-white/80 font-['Sora'] leading-none">
                        STEP
                      </span>
                      <span className="text-base sm:text-lg font-bold text-white font-['Sora'] leading-tight">
                        {step.stepCode}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="flex-1 bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-neutral-200/90 shadow-xs relative">
                    <div className="flex items-center justify-between mb-1.5">
                      <h3 className="text-sm sm:text-base font-semibold text-neutral-900 font-['Sora'] tracking-tight">
                        {step.title}
                      </h3>
                      <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#5425B8]/10 flex items-center justify-center shrink-0 p-2 sm:p-2.5">
                        <img
                          src={step.iconSrc}
                          alt={step.title}
                          className="w-7 h-7 sm:w-8.5 sm:h-8.5 object-contain select-none pointer-events-none"
                        />
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-neutral-600 font-sans leading-relaxed font-normal">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default React.memo(HowItWorks);

