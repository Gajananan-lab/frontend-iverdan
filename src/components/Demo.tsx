import React, { useState, useId } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sliders, 
  Sparkles, 
  ShieldCheck, 
  TrendingUp, 
  BarChart3, 
  RefreshCw, 
  ArrowRight, 
  Lock, 
  CheckCircle2, 
  Calculator, 
  Layers, 
  FileSpreadsheet, 
  Cpu, 
  Check,
  Play,
  RotateCcw,
  Zap,
  Info
} from 'lucide-react';

export interface DemoProps {
  onRequestDemo?: () => void;
}

type DemoTab = 'simulator' | 'narrative' | 'lineage';

interface Preset {
  id: string;
  label: string;
  icon: typeof TrendingUp;
  headcount: number;
  cac: number;
  nrr: number;
  description: string;
}

export const Demo: React.FC<DemoProps> = ({ onRequestDemo }) => {
  const [activeTab, setActiveTab] = useState<DemoTab>('simulator');
  const [activePreset, setActivePreset] = useState<string>('baseline');
  
  // Interactive Simulation Controls
  const [headcount, setHeadcount] = useState<number>(8); // Additional hires
  const [cac, setCac] = useState<number>(1650); // Customer Acquisition Cost ($)
  const [nrr, setNrr] = useState<number>(114); // Net Revenue Retention (%)

  const baseCash = 2850000; // $2.85M starting cash
  const headcountInputId = useId();
  const cacInputId = useId();
  const nrrInputId = useId();

  const presets: Preset[] = [
    {
      id: 'baseline',
      label: 'Balanced Plan A',
      icon: TrendingUp,
      headcount: 8,
      cac: 1650,
      nrr: 114,
      description: 'Disciplined hiring & sustainable expansion.',
    },
    {
      id: 'growth',
      label: 'Growth Accelerator',
      icon: Zap,
      headcount: 18,
      cac: 2400,
      nrr: 125,
      description: 'Aggressive GTM ramp to capture enterprise market share.',
    },
    {
      id: 'lean',
      label: 'Defensive Preservation',
      icon: ShieldCheck,
      headcount: 3,
      cac: 1150,
      nrr: 108,
      description: 'Maximum cash runway protection for tightening markets.',
    },
  ];

  const applyPreset = (preset: Preset) => {
    setActivePreset(preset.id);
    setHeadcount(preset.headcount);
    setCac(preset.cac);
    setNrr(preset.nrr);
  };

  // Dynamic calculations based on user sliders
  const avgSalary = 14200; // $14.2k monthly fully loaded cost per hire
  const baselineARR = 3450000;
  
  // OpEx dynamics: base $320k + headcount additions + CAC marketing load
  const monthlyBaseOpEx = 320000 + ((headcount - 8) * avgSalary) + (((cac - 1650) / 100) * 3500);
  
  // Revenue dynamics: baseline ARR modulated by NRR and CAC acquisition efficiency
  const cacEfficiencyDelta = ((1650 - cac) / 100) * 32000;
  const nrrExpansion = baselineARR * ((nrr - 100) / 100);
  const projectedARR = Math.round(baselineARR + nrrExpansion + cacEfficiencyDelta);
  const monthlyRevenue = projectedARR / 12;

  // Monthly Net Burn = OpEx - Revenue
  const monthlyNetBurn = Math.round(monthlyBaseOpEx - monthlyRevenue);
  
  // Cash Runway in Months
  const runwayMonths = monthlyNetBurn <= 0 
    ? 36 
    : Math.min(36, Math.max(4, parseFloat((baseCash / monthlyNetBurn).toFixed(1))));

  const grossMargin = 78.6;
  const arrDeltaPercent = (((projectedARR - baselineARR) / baselineARR) * 100).toFixed(1);

  // 12-Month Projected Cash Trajectory
  // Baseline: Standard $117k/mo burn from starting $2.85M
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const trajectoryData = months.map((m, idx) => {
    const elapsed = idx + 1;
    const baseCashVal = Math.max(120000, Math.round(baseCash - (117250 * elapsed)));
    const simCash = Math.max(120000, Math.round(baseCash - (monthlyNetBurn * elapsed)));
    return {
      month: m,
      simCash,
      baseCash: baseCashVal,
    };
  });

  // Dynamic Chart Scale
  const maxCashInTrajectory = Math.max(baseCash, ...trajectoryData.map((d) => Math.max(d.simCash, d.baseCash)));
  const chartScaleMax = Math.round(maxCashInTrajectory * 1.08);

  return (
    <section className="py-12 md:py-16 bg-[#EFEFEF]" id="demo" aria-label="Interactive Product Demo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Animated Section Header matching Theme Badge & Title Typography */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-12"
        >
          {/* Theme Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 rounded-full bg-white border border-neutral-200/90 shadow-xs mb-3.5 max-w-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#5425B8] shrink-0" />
            <span className="text-[11px] sm:text-xs font-medium tracking-wider sm:tracking-widest uppercase text-neutral-700 font-['Sora'] truncate">
              Interactive Sandbox Demo
            </span>
          </div>

          {/* Theme Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-neutral-900 tracking-tight font-['Sora'] leading-tight mb-4">
            Test drive deterministic scenario modeling
          </h2>

          {/* Theme Subtitle */}
          <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-normal">
            Adjust strategic headcount ramps, customer acquisition efficiency, and net retention. Watch cash runway and dynamic board variance reconcile in real time.
          </p>
        </motion.div>

        {/* Demo Navigation Filter Tabs */}
        <div className="w-full flex justify-center mb-6 sm:mb-8 px-2 sm:px-0">
          <div className="w-full max-w-2xl flex items-center justify-between p-1 sm:p-1.5 rounded-2xl bg-white border border-neutral-200/80 shadow-xs gap-1 sm:gap-1.5 overflow-x-auto scrollbar-none">
            <button
              type="button"
              onClick={() => setActiveTab('simulator')}
              className={`flex-1 min-w-0 flex items-center justify-center gap-1 sm:gap-2 px-2 sm:px-4 md:px-5 py-2 sm:py-2.5 rounded-xl text-[11px] sm:text-xs md:text-sm font-semibold font-['Sora'] transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                activeTab === 'simulator'
                  ? 'bg-[#5425B8] text-white shadow-sm'
                  : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
              }`}
            >
              <Sliders className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              <span className="truncate">
                <span className="hidden md:inline">Live </span>Scenario Simulator
              </span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('narrative')}
              className={`flex-1 min-w-0 flex items-center justify-center gap-1 sm:gap-2 px-2 sm:px-4 md:px-5 py-2 sm:py-2.5 rounded-xl text-[11px] sm:text-xs md:text-sm font-semibold font-['Sora'] transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                activeTab === 'narrative'
                  ? 'bg-[#5425B8] text-white shadow-sm'
                  : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              <span className="truncate">
                AI Variance<span className="hidden md:inline"> Narrator</span>
              </span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('lineage')}
              className={`flex-1 min-w-0 flex items-center justify-center gap-1 sm:gap-2 px-2 sm:px-4 md:px-5 py-2 sm:py-2.5 rounded-xl text-[11px] sm:text-xs md:text-sm font-semibold font-['Sora'] transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                activeTab === 'lineage'
                  ? 'bg-[#5425B8] text-white shadow-sm'
                  : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              <span className="truncate">Audit Lineage</span>
            </button>
          </div>
        </div>

        {/* Main Application Window Frame */}
        <motion.div 
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl sm:rounded-3xl border border-neutral-200/90 shadow-xl overflow-hidden"
        >
          {/* Window Chrome Header Bar */}
          <div className="bg-[#0B1020] text-white px-3.5 sm:px-6 py-3 sm:py-3.5 flex items-center justify-between gap-2 sm:gap-3 border-b border-white/10">
            {/* Left: Window Dots & App Brand Tag */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#EF4444]/80 inline-block shrink-0" />
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#F59E0B]/80 inline-block shrink-0" />
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#10B981]/80 inline-block shrink-0" />
              </div>
              <div className="hidden sm:flex items-center gap-2 pl-2 border-l border-white/15 text-xs text-neutral-300 font-['Sora']">
                <span className="w-2 h-2 rounded-full bg-[#5425B8] animate-pulse" />
                <span>iverdan-core-engine://sandbox</span>
              </div>
            </div>

            {/* Center: Active Model Address Pill */}
            <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-neutral-300 text-xs font-mono">
              <Lock className="w-3.5 h-3.5 text-emerald-400" />
              <span>models/2026-operating-budget.ivm</span>
            </div>

            {/* Right: Status Pill */}
            <div className="flex items-center gap-2 shrink-0">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-[10px] sm:text-[11px] font-medium font-['Sora'] whitespace-nowrap shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                Deterministic v4.2
              </span>
            </div>
          </div>

          {/* Tab 1: Live Scenario Simulator */}
          {activeTab === 'simulator' && (
            <div className="p-4 sm:p-6 lg:p-8">
              {/* Presets Row */}
              <div className="mb-6 sm:mb-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3 mb-3.5">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-base sm:text-lg font-semibold text-neutral-900 font-['Sora']">
                        Scenario Branch Presets
                      </h3>
                      <span className="text-[10px] sm:text-xs font-medium px-2 py-0.5 rounded-full bg-[#5425B8]/10 text-[#5425B8] shrink-0 whitespace-nowrap">
                        3 Branches
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-neutral-500 mt-0.5">
                      Switch between pre-calculated strategic cases or fine-tune drivers below.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => applyPreset(presets[0])}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#5425B8] hover:text-[#431A9E] transition-colors self-start sm:self-auto cursor-pointer shrink-0 py-1"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    Reset to Baseline
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
                  {presets.map((preset) => {
                    const Icon = preset.icon;
                    const isSelected = activePreset === preset.id;
                    return (
                      <button
                        key={preset.id}
                        type="button"
                        onClick={() => applyPreset(preset)}
                        className={`text-left p-3 sm:p-3.5 md:p-4 rounded-xl border transition-all cursor-pointer flex flex-col justify-between h-full group ${
                          isSelected
                            ? 'bg-[#5425B8]/5 border-[#5425B8] ring-1 ring-[#5425B8] shadow-xs'
                            : 'bg-neutral-50 hover:bg-neutral-100/70 border-neutral-200'
                        }`}
                      >
                        <div>
                          <div className="flex items-start justify-between gap-1.5 mb-1.5">
                            <span className={`text-xs sm:text-xs md:text-sm font-semibold font-['Sora'] leading-snug ${isSelected ? 'text-[#5425B8]' : 'text-neutral-800'}`}>
                              {preset.label}
                            </span>
                            <Icon className={`w-4 h-4 shrink-0 mt-0.5 ${isSelected ? 'text-[#5425B8]' : 'text-neutral-400 group-hover:text-neutral-600'}`} />
                          </div>
                          <p className="text-[11px] sm:text-[11px] md:text-xs text-neutral-500 leading-snug">
                            {preset.description}
                          </p>
                        </div>

                        {/* Bottom Metric & Status Anchor */}
                        <div className="pt-2.5 mt-2.5 border-t border-neutral-200/60 flex items-center justify-between text-[10px] font-mono">
                          <span className={`flex items-center gap-1.5 font-medium ${isSelected ? 'text-[#5425B8]' : 'text-neutral-400'}`}>
                            <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-[#5425B8] animate-pulse' : 'bg-neutral-300'}`} />
                            {isSelected ? 'Active Branch' : 'Select Branch'}
                          </span>
                          <span className="text-neutral-400 font-sans text-[10px]">
                            {preset.id === 'baseline' ? '1.0x Base' : preset.id === 'growth' ? '+35% ARR' : '+18m Runway'}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 1. 4 Metric KPI Cards - Full Width Row */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
                {/* Card 1: Runway */}
                <div className="bg-neutral-50/90 rounded-2xl p-3.5 sm:p-5 border border-neutral-200 shadow-xs flex flex-col justify-between">
                  <div className="flex flex-wrap items-center justify-between gap-1 mb-2">
                    <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-neutral-500 font-semibold font-['Sora'] truncate">
                      Cash Runway
                    </span>
                    <span className={`text-[9px] sm:text-[10px] font-semibold px-2 py-0.5 rounded-full shrink-0 whitespace-nowrap ${
                      runwayMonths > 18 
                        ? 'bg-emerald-100 text-emerald-700' 
                        : runwayMonths > 12 
                        ? 'bg-amber-100 text-amber-700' 
                        : 'bg-rose-100 text-rose-700'
                    }`}>
                      {runwayMonths > 18 ? 'Strong' : runwayMonths > 12 ? 'Moderate' : 'Tight'}
                    </span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-neutral-900 font-['Sora'] leading-none">
                    {runwayMonths >= 36 ? '36+ mos' : `${runwayMonths} mos`}
                  </div>
                  <span className="text-[10px] sm:text-[11px] text-neutral-500 mt-2 font-mono truncate">
                    Deterministic burn limit
                  </span>
                </div>

                {/* Card 2: Projected ARR */}
                <div className="bg-neutral-50/90 rounded-2xl p-3.5 sm:p-5 border border-neutral-200 shadow-xs flex flex-col justify-between">
                  <div className="flex flex-wrap items-center justify-between gap-1 mb-2">
                    <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-neutral-500 font-semibold font-['Sora'] truncate">
                      Projected ARR
                    </span>
                    <span className="text-[9px] sm:text-[10px] font-semibold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full shrink-0 whitespace-nowrap">
                      +{arrDeltaPercent}%
                    </span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-[#5425B8] font-['Sora'] leading-none">
                    ${(projectedARR / 1000000).toFixed(2)}M
                  </div>
                  <span className="text-[10px] sm:text-[11px] text-neutral-500 mt-2 font-mono truncate">
                    Vs baseline $3.45M
                  </span>
                </div>

                {/* Card 3: Monthly Net Burn */}
                <div className="bg-neutral-50/90 rounded-2xl p-3.5 sm:p-5 border border-neutral-200 shadow-xs flex flex-col justify-between">
                  <div className="flex flex-wrap items-center justify-between gap-1 mb-2">
                    <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-neutral-500 font-semibold font-['Sora'] truncate">
                      Monthly Burn
                    </span>
                    <span className={`text-[9px] sm:text-[10px] font-semibold px-2 py-0.5 rounded-full shrink-0 whitespace-nowrap ${
                      monthlyNetBurn <= 0 ? 'bg-emerald-100 text-emerald-700' : 'bg-neutral-200 text-neutral-700'
                    }`}>
                      {monthlyNetBurn <= 0 ? 'Cash Flow +' : 'Net Outflow'}
                    </span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-neutral-900 font-['Sora'] leading-none">
                    {monthlyNetBurn <= 0 ? '+$' + Math.abs(Math.round(monthlyNetBurn / 1000)) + 'k' : '-$' + Math.round(monthlyNetBurn / 1000) + 'k'}
                  </div>
                  <span className="text-[10px] sm:text-[11px] text-neutral-500 mt-2 font-mono truncate">
                    OpEx - Forward Revenue
                  </span>
                </div>

                {/* Card 4: Gross Margin */}
                <div className="bg-neutral-50/90 rounded-2xl p-3.5 sm:p-5 border border-neutral-200 shadow-xs flex flex-col justify-between">
                  <div className="flex flex-wrap items-center justify-between gap-1 mb-2">
                    <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-neutral-500 font-semibold font-['Sora'] truncate">
                      Gross Margin
                    </span>
                    <span className="text-[9px] sm:text-[10px] font-semibold text-purple-700 bg-purple-100 px-2 py-0.5 rounded-full shrink-0 whitespace-nowrap">
                      Optimized
                    </span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-neutral-900 font-['Sora'] leading-none">
                    {grossMargin}%
                  </div>
                  <span className="text-[10px] sm:text-[11px] text-neutral-500 mt-2 font-mono truncate">
                    Deterministic COGS
                  </span>
                </div>
              </div>

              {/* 2. Two Side-by-Side Cards: Driver Controls & Trajectory Visualizer (Both at Exact Same Level & Equal Height) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
                
                {/* Left Card: Interactive Driver Sliders (5 cols) */}
                <div className="lg:col-span-5 bg-neutral-50/80 rounded-2xl p-5 sm:p-6 border border-neutral-200/90 shadow-xs flex flex-col justify-between h-full">
                  <div>
                    {/* Header */}
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-3.5 mb-5 border-b border-neutral-200">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#5425B8] shrink-0" />
                        <span className="text-xs font-bold uppercase tracking-wider text-neutral-800 font-['Sora']">
                          Simulation Driver Controls
                        </span>
                      </div>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-mono font-medium shrink-0 whitespace-nowrap">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                        Live Recalculation
                      </span>
                    </div>

                    {/* Sliders Container */}
                    <div className="space-y-6">
                      {/* Slider 1: Headcount */}
                      <div>
                        <div className="flex justify-between items-baseline mb-2">
                          <label htmlFor={headcountInputId} className="text-xs sm:text-sm font-medium text-neutral-800 font-['Sora'] flex items-center gap-1.5 cursor-pointer">
                            <span>New R&amp;D &amp; GTM Hires</span>
                          </label>
                          <span className="text-sm font-bold text-[#5425B8] font-['Sora']">
                            +{headcount} roles
                          </span>
                        </div>
                        <input
                          id={headcountInputId}
                          type="range"
                          min={2}
                          max={25}
                          step={1}
                          value={headcount}
                          onChange={(e) => {
                            setHeadcount(parseInt(e.target.value));
                            setActivePreset('custom');
                          }}
                          className="w-full accent-[#5425B8] cursor-pointer"
                        />
                        <div className="flex justify-between text-[11px] text-neutral-500 mt-1">
                          <span>2 roles (Lean)</span>
                          <span className="hidden sm:inline">Avg loaded: $14.2k/mo</span>
                          <span>25 roles (Aggressive)</span>
                        </div>
                      </div>

                      {/* Slider 2: CAC */}
                      <div>
                        <div className="flex justify-between items-baseline mb-2">
                          <label htmlFor={cacInputId} className="text-xs sm:text-sm font-medium text-neutral-800 font-['Sora'] flex items-center gap-1.5 cursor-pointer">
                            <span>Blended CAC</span>
                          </label>
                          <span className="text-sm font-bold text-[#5425B8] font-['Sora']">
                            ${cac.toLocaleString()}
                          </span>
                        </div>
                        <input
                          id={cacInputId}
                          type="range"
                          min={900}
                          max={3200}
                          step={50}
                          value={cac}
                          onChange={(e) => {
                            setCac(parseInt(e.target.value));
                            setActivePreset('custom');
                          }}
                          className="w-full accent-[#5425B8] cursor-pointer"
                        />
                        <div className="flex justify-between text-[11px] text-neutral-500 mt-1">
                          <span>$900 (High Organic)</span>
                          <span className="hidden sm:inline">Payback: {(cac / 180).toFixed(1)} mos</span>
                          <span>$3,200 (Outbound)</span>
                        </div>
                      </div>

                      {/* Slider 3: Net Revenue Retention */}
                      <div>
                        <div className="flex justify-between items-baseline mb-2">
                          <label htmlFor={nrrInputId} className="text-xs sm:text-sm font-medium text-neutral-800 font-['Sora'] flex items-center gap-1.5 cursor-pointer">
                            <span>Net Revenue Retention (NRR)</span>
                          </label>
                          <span className="text-sm font-bold text-[#5425B8] font-['Sora']">
                            {nrr}%
                          </span>
                        </div>
                        <input
                          id={nrrInputId}
                          type="range"
                          min={95}
                          max={135}
                          step={1}
                          value={nrr}
                          onChange={(e) => {
                            setNrr(parseInt(e.target.value));
                            setActivePreset('custom');
                          }}
                          className="w-full accent-[#5425B8] cursor-pointer"
                        />
                        <div className="flex justify-between text-[11px] text-neutral-500 mt-1">
                          <span>95% (Downside)</span>
                          <span className="hidden sm:inline">Median: 112%</span>
                          <span>135% (Enterprise)</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Driver summary card at bottom */}
                  <div className="pt-4 mt-6 border-t border-neutral-200">
                    <div className="p-3 bg-white rounded-xl border border-neutral-200/90 text-xs text-neutral-600 flex items-start gap-2.5">
                      <Info className="w-4 h-4 text-[#5425B8] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-neutral-800">Formula Lineage:</span> Operational drivers directly map to cash balance models without black-box approximations.
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Card: Cash Trajectory Graph Visualizer (7 cols) - Matches Left Card Height & Level */}
                <div className="lg:col-span-7 bg-[#0B1020] rounded-2xl p-5 sm:p-6 text-white border border-neutral-800 shadow-xl flex flex-col justify-between h-full">
                  <div>
                    {/* Visualizer Header */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-5 pb-3.5 border-b border-white/10">
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <h4 className="text-sm sm:text-base font-semibold font-['Sora'] text-white">
                            12-Month Projected Cash Trajectory
                          </h4>
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#5425B8]/30 border border-[#5425B8]/50 text-purple-300 text-[10px] font-mono shrink-0 whitespace-nowrap">
                            Deterministic
                          </span>
                        </div>
                        <p className="text-xs text-neutral-400 mt-0.5">
                          Dynamic simulation curve vs. baseline budget across 12-month rolling horizon.
                        </p>
                      </div>

                      {/* Header Legend */}
                      <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 text-xs font-mono">
                        <div className="flex items-center gap-1.5 bg-white/5 px-2.5 py-1 rounded-lg border border-white/5 shrink-0">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#5425B8] shrink-0" />
                          <span className="text-neutral-300 text-[10px] sm:text-[11px] whitespace-nowrap">Simulated Branch</span>
                        </div>
                        <div className="flex items-center gap-1.5 bg-white/5 px-2.5 py-1 rounded-lg border border-white/5 shrink-0">
                          <span className="w-3 h-0.5 border-t-2 border-dashed border-neutral-400 shrink-0" />
                          <span className="text-neutral-400 text-[10px] sm:text-[11px] whitespace-nowrap">Baseline Budget</span>
                        </div>
                      </div>
                    </div>

                    {/* Mobile Swipe Hint */}
                    <div className="sm:hidden flex items-center justify-between text-[11px] text-neutral-400 mb-2 px-1">
                      <span>Swipe to view all 12 months</span>
                      <span className="px-2 py-0.5 rounded-full bg-white/10 text-purple-300 font-mono text-[10px] shrink-0">12-Mo Timeline</span>
                    </div>

                    {/* Scrollable Chart Area for Mobile, Full-Width for Desktop */}
                    <div className="w-full overflow-x-auto pb-2 scrollbar-thin">
                      <div className="min-w-[480px] sm:min-w-0 w-full relative">
                        {/* Background Reference Grid Lines scaled to chartScaleMax */}
                        <div className="absolute inset-x-0 inset-y-0 flex flex-col justify-between pointer-events-none pb-7 opacity-25">
                          <div className="border-b border-dashed border-neutral-600 flex justify-end pr-1 text-[9px] font-mono text-neutral-400">
                            ${(chartScaleMax / 1000000).toFixed(1)}M
                          </div>
                          <div className="border-b border-dashed border-neutral-600 flex justify-end pr-1 text-[9px] font-mono text-neutral-400">
                            ${((chartScaleMax * 0.66) / 1000000).toFixed(1)}M
                          </div>
                          <div className="border-b border-dashed border-neutral-600 flex justify-end pr-1 text-[9px] font-mono text-neutral-400">
                            ${((chartScaleMax * 0.33) / 1000000).toFixed(1)}M
                          </div>
                        </div>

                        {/* Bar Chart Columns - Solid Clean Styling (No Hover Animations) */}
                        <div className="relative h-52 sm:h-60 flex items-end gap-1 sm:gap-2 pt-6 pb-2 border-b border-neutral-800">
                          {trajectoryData.map((data) => {
                            const simHeightPct = Math.max(12, Math.min(92, Math.round((data.simCash / chartScaleMax) * 100)));
                            const baseHeightPct = Math.max(12, Math.min(92, Math.round((data.baseCash / chartScaleMax) * 100)));

                            return (
                              <div 
                                key={data.month}
                                className="relative flex-1 flex flex-col items-center h-full justify-end py-1"
                              >
                                <div className="w-full flex items-end justify-center gap-1 sm:gap-1.5 h-full px-0.5">
                                  {/* Baseline bar */}
                                  <div 
                                    style={{ height: `${baseHeightPct}%` }}
                                    className="w-1.5 sm:w-2 bg-neutral-600/80 rounded-t-sm transition-all duration-300"
                                    title={`Baseline: $${(data.baseCash / 1000000).toFixed(2)}M`}
                                  />

                                  {/* Simulated bar */}
                                  <div 
                                    style={{ height: `${simHeightPct}%` }}
                                    className="w-3 sm:w-5 bg-[#5425B8] rounded-t-sm transition-all duration-300"
                                    title={`Simulated: $${(data.simCash / 1000000).toFixed(2)}M`}
                                  />
                                </div>

                                {/* Month label */}
                                <span className="text-[10px] sm:text-[11px] mt-2 font-mono text-neutral-400">
                                  {data.month}
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Visualizer Footer Note - Balances with Left Card Formula Lineage */}
                  <div className="pt-4 mt-6 border-t border-white/10 flex items-center justify-between text-xs text-neutral-400">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>Deterministic cash compilation</span>
                    </div>
                    <span className="font-mono text-[11px] text-neutral-500">12-Month Horizon</span>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* Tab 2: AI Variance Narrator */}
          {activeTab === 'narrative' && (
            <div className="p-4 sm:p-6 lg:p-8">
              <div className="max-w-4xl mx-auto space-y-6">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-neutral-900 font-['Sora'] mb-1">
                    Automated Executive Variance Briefing
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600">
                    Iverdan’s diagnostic intelligence automatically translates ledger variances into board-ready narrative explanations.
                  </p>
                </div>

                {/* AI Executive Summary Card */}
                <div className="bg-[#5425B8]/5 border border-[#5425B8]/20 rounded-2xl p-4 sm:p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2.5 mb-3">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className="w-7 h-7 rounded-lg bg-[#5425B8] flex items-center justify-center text-white shrink-0">
                        <Sparkles className="w-4 h-4" />
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-[#5425B8] font-['Sora'] leading-snug">
                        Executive Briefing: Q3 Plan vs. Actuals Variance
                      </span>
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-mono bg-white px-2.5 py-0.5 rounded-full border border-neutral-200 text-neutral-600 shrink-0 whitespace-nowrap self-start sm:self-auto">
                      Auto-Generated in 1.4s
                    </span>
                  </div>

                  <p className="text-sm sm:text-base text-neutral-800 leading-relaxed font-sans mb-4">
                    Operating EBITDA beat plan by <strong className="text-emerald-700">+$142,800 (+12.4%)</strong>. The primary positive driver was a 16% acceleration in Net Revenue Retention across mid-market accounts ($98K contribution). OpEx ran 2.1% below budget due to staggered engineering start dates, partially offset by an intentional $24K increase in high-intent search acquisition campaigns.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-[#5425B8]/15 text-xs">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span className="text-neutral-700">Formula-Verified Actuals</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span className="text-neutral-700">No Hallucinated Math</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span className="text-neutral-700">One-Click Board Slide Export</span>
                    </div>
                  </div>
                </div>

                {/* Breakdown Table Preview */}
                <div className="border border-neutral-200 rounded-xl overflow-hidden shadow-xs">
                  <div className="overflow-x-auto">
                    <div className="min-w-[480px]">
                      <div className="bg-neutral-100/80 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-neutral-700 font-['Sora'] flex justify-between">
                        <span>Department Account</span>
                        <span>Actual vs Budget</span>
                        <span>Status &amp; Driver</span>
                      </div>
                      <div className="divide-y divide-neutral-200 text-xs sm:text-sm">
                        <div className="p-3.5 sm:px-4 flex items-center justify-between">
                          <div>
                            <div className="font-semibold text-neutral-900 font-['Sora']">Enterprise SaaS ARR</div>
                            <div className="text-[11px] text-neutral-500">GL Account: 4010-00</div>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-emerald-600">+$98,400</div>
                            <div className="text-[11px] text-neutral-500">+8.6% favorable</div>
                          </div>
                          <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[10px] sm:text-[11px] font-medium shrink-0 whitespace-nowrap">
                            Expansion NRR
                          </span>
                        </div>

                        <div className="p-3.5 sm:px-4 flex items-center justify-between">
                          <div>
                            <div className="font-semibold text-neutral-900 font-['Sora']">R&amp;D Payroll &amp; Benefits</div>
                            <div className="text-[11px] text-neutral-500">GL Account: 6020-00</div>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-emerald-600">-$36,200</div>
                            <div className="text-[11px] text-neutral-500">-4.2% below budget</div>
                          </div>
                          <span className="px-2.5 py-1 rounded-full bg-blue-100 text-blue-800 text-[10px] sm:text-[11px] font-medium shrink-0 whitespace-nowrap">
                            Hire Timing
                          </span>
                        </div>

                        <div className="p-3.5 sm:px-4 flex items-center justify-between">
                          <div>
                            <div className="font-semibold text-neutral-900 font-['Sora']">Paid Performance Marketing</div>
                            <div className="text-[11px] text-neutral-500">GL Account: 6100-00</div>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-rose-600">+$24,100</div>
                            <div className="text-[11px] text-neutral-500">+11.0% over budget</div>
                          </div>
                          <span className="px-2.5 py-1 rounded-full bg-amber-100 text-amber-800 text-[10px] sm:text-[11px] font-medium shrink-0 whitespace-nowrap">
                            Strategic Shift
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: Audit Lineage */}
          {activeTab === 'lineage' && (
            <div className="p-4 sm:p-6 lg:p-8">
              <div className="max-w-4xl mx-auto space-y-6">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-neutral-900 font-['Sora'] mb-1">
                    Cell-Level Formula Governance &amp; Traceability
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600">
                    Unlike black-box AI tools, every number in Iverdan traces back to immutable formula dependencies and user audit signatures.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-5 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-3">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-700 font-['Sora']">
                      <Calculator className="w-4 h-4 text-[#5425B8]" />
                      <span>Mathematical Formula Tree</span>
                    </div>
                    <div className="bg-neutral-900 p-3.5 rounded-xl font-mono text-xs text-neutral-200 space-y-1.5 overflow-x-auto">
                      <div className="text-[#F23BF1]">Runway_Months =</div>
                      <div className="pl-4 text-emerald-400">Current_Cash_Balance /</div>
                      <div className="pl-4 text-neutral-300">MAX(10000, 3Mo_Rolling_Net_Burn)</div>
                      <div className="text-neutral-500 pt-1">// Verified 0 division guard</div>
                    </div>
                    <p className="text-xs text-neutral-600">
                      Direct deterministic compilation guaranteed under SOC-2 Type II standards.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-3">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-700 font-['Sora']">
                      <ShieldCheck className="w-4 h-4 text-[#5425B8]" />
                      <span>Immutable Revision Log</span>
                    </div>
                    <div className="space-y-2 text-xs">
                      <div className="p-2.5 rounded-lg bg-white border border-neutral-200 flex items-center justify-between gap-2">
                        <div className="min-w-0">
                          <span className="font-semibold text-neutral-900 block truncate">Branch &quot;Growth Ramp&quot; Created</span>
                          <div className="text-[10px] text-neutral-500 truncate">By Elena Rostova • 14 mins ago</div>
                        </div>
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-neutral-100 text-neutral-700 shrink-0 whitespace-nowrap">
                          v3.1.2
                        </span>
                      </div>

                      <div className="p-2.5 rounded-lg bg-white border border-neutral-200 flex items-center justify-between gap-2">
                        <div className="min-w-0">
                          <span className="font-semibold text-neutral-900 block truncate">Chart of Accounts Synced</span>
                          <div className="text-[10px] text-neutral-500 truncate">NetSuite ERP Pipeline • 2 hrs ago</div>
                        </div>
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-100 text-emerald-700 shrink-0 whitespace-nowrap">
                          Auto-Lock
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </motion.div>

        {/* Feature Highlights under Demo */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-4 bg-white rounded-xl border border-neutral-200/80 shadow-xs">
            <span className="block text-base sm:text-lg font-bold text-[#5425B8] font-['Sora']">&lt; 12ms</span>
            <span className="text-xs text-neutral-600 font-medium">Recalculation Latency</span>
          </div>
          <div className="p-4 bg-white rounded-xl border border-neutral-200/80 shadow-xs">
            <span className="block text-base sm:text-lg font-bold text-[#5425B8] font-['Sora']">100%</span>
            <span className="text-xs text-neutral-600 font-medium">Deterministic Lineage</span>
          </div>
          <div className="p-4 bg-white rounded-xl border border-neutral-200/80 shadow-xs">
            <span className="block text-base sm:text-lg font-bold text-[#5425B8] font-['Sora']">SOC-2</span>
            <span className="text-xs text-neutral-600 font-medium">Type II Certified Security</span>
          </div>
          <div className="p-4 bg-white rounded-xl border border-neutral-200/80 shadow-xs">
            <span className="block text-base sm:text-lg font-bold text-[#5425B8] font-['Sora']">0-Drift</span>
            <span className="text-xs text-neutral-600 font-medium">Automated Ledger Reconciliation</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default React.memo(Demo);
