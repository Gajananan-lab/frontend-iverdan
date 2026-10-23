import React from 'react';
import { motion } from 'motion/react';
import {
  ArrowDown,
  ArrowRight,
  BarChart3,
  BrainCircuit,
  ChartNoAxesCombined,
  Check,
  CircleDollarSign,
  FileSearch,
  GitBranch,
  LockKeyhole,
  Network,
  PanelsTopLeft,
  ShieldCheck,
  Sparkles,
  Workflow,
} from 'lucide-react';
import Header from './Header.tsx';
import Footer from './Footer.tsx';

const LIVE_PRODUCT_URL = 'http://central.iverdan.lk';

const reveal = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
};

const outcomeCards = [
  {
    icon: ChartNoAxesCombined,
    title: 'See the shape of what’s next',
    body: 'Bring plans and performance together to understand where revenue, costs, and runway are heading before the next review.',
  },
  {
    icon: GitBranch,
    title: 'Explore more than one path',
    body: 'Compare a considered baseline with the choices in front of you. Change the assumptions, see what moves, and keep the alternatives clear.',
  },
  {
    icon: BrainCircuit,
    title: 'Give every number a story',
    body: 'Turn material variances into clear explanations that connect the movement to its drivers and give leaders a useful next question.',
  },
];

const capabilities = [
  {
    icon: BarChart3,
    label: '01 / LOOK AHEAD',
    title: 'Forecasting & analytics',
    body: 'Build a more connected view of revenue, spend, and cash. Track the measures that matter to the plan, from retention and acquisition payback to operating costs and runway.',
    detail: 'Understand the drivers behind the forecast, not just the total.',
  },
  {
    icon: GitBranch,
    label: '02 / TEST THE CHOICE',
    title: 'Scenario builder',
    body: 'Create alternate versions of a plan and change the assumptions that shape them. See how hiring, growth, pricing, or investment choices can affect the wider business.',
    detail: 'Keep a trusted baseline while exploring what could change.',
  },
  {
    icon: Sparkles,
    label: '03 / MAKE SENSE OF CHANGE',
    title: 'AI-assisted insights',
    body: 'Surface notable movements and driver relationships in context, so finance teams can focus attention where the plan and actual performance begin to diverge.',
    detail: 'Move from a signal to a better-informed conversation.',
  },
  {
    icon: FileSearch,
    label: '04 / EXPLAIN THE VARIANCE',
    title: 'AI variance narrator',
    body: 'Shape variance analysis into plain-language commentary for operating reviews and executive updates. Keep the explanation connected to the metrics and assumptions behind it.',
    detail: 'Make board-ready communication easier to prepare and review.',
  },
];

const workflow = [
  { number: '01', title: 'Bring the picture together', body: 'Connect financial and operating information to create a useful view of actual performance.' },
  { number: '02', title: 'Set a baseline', body: 'Establish budgets, forecasts, and the assumptions your team is using to plan.' },
  { number: '03', title: 'Model the alternatives', body: 'Adjust key drivers, compare scenarios, and understand the effects across the business.' },
  { number: '04', title: 'Explain and share', body: 'Reconcile results, capture the reason for changes, and prepare a clear view for stakeholders.' },
];

const foundations = [
  { name: 'NVIDIA RAPIDS', tools: 'cuDF · cuML', purpose: 'Selected for accelerated data preparation, analytics, and modeling.' },
  { name: 'NVIDIA NeMo', tools: 'Language & reasoning', purpose: 'Selected to support finance-aware insight and variance narratives.' },
  { name: 'NVIDIA NIM', tools: 'Inference services', purpose: 'Selected as a deployment path for private cloud or on-premise environments.' },
];

export const ProductPage: React.FC = () => {
  const [activeSection, setActiveSection] = React.useState('product-hero');

  React.useEffect(() => {
    const sectionIds = ['product-hero', 'outcomes', 'capabilities', 'workflow', 'trust', 'ai-foundation', 'next-step'];
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    }, { rootMargin: '-20% 0px -55% 0px', threshold: 0.1 });

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  const handleFooterNavigation = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }
    window.location.href = `/#${id}`;
  };

  return (
    <div className="min-h-screen bg-[#EFEFEF] text-black flex flex-col font-sans selection:bg-[#F23BF1]/20">
      <Header activeSection={activeSection} onNavigate={handleFooterNavigation} productPage />
      <main className="flex-1 w-full" id="main-content">
        <section id="product-hero" className="relative min-h-[690px] lg:min-h-[780px] overflow-hidden bg-[#0B1020] text-white flex items-center">
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute -right-20 top-20 w-[34rem] h-[34rem] rounded-full bg-[#5425B8]/35 blur-[100px]" />
            <div className="absolute right-[12%] bottom-[-15rem] w-[30rem] h-[30rem] rounded-full bg-[#F23BF1]/15 blur-[100px]" />
            <div className="absolute inset-0 opacity-[0.13]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.18) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.18) 1px, transparent 1px)', backgroundSize: '68px 68px', maskImage: 'linear-gradient(to left, black, transparent 85%)' }} />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto w-full px-6 sm:px-10 lg:px-12 pt-36 pb-24 grid lg:grid-cols-[1.05fr_.95fr] items-center gap-12 lg:gap-16">
            <div className="max-w-2xl">
              <motion.div {...reveal} className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-white/15 bg-white/5 text-neutral-200 text-[10px] sm:text-xs tracking-[.16em] uppercase font-['Sora'] mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F23BF1] shadow-[0_0_12px_#F23BF1]" />
                Iverdan Labs · Financial planning intelligence
              </motion.div>
              <motion.h1 {...reveal} transition={{ ...reveal.transition, delay: 0.08 }} className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.5rem] leading-[1.08] tracking-tight font-bold font-['Sora']">
                Plan with clarity.<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#D7C7FF] to-[#F39BF0]">Move with confidence.</span>
              </motion.h1>
              <motion.p {...reveal} transition={{ ...reveal.transition, delay: 0.16 }} className="mt-6 max-w-xl text-sm sm:text-base lg:text-lg text-neutral-300 leading-relaxed">
                Iverdan Labs brings forecasts, scenarios, and performance into one considered workspace—so finance and leadership teams can see what is changing, understand why, and decide what comes next.
              </motion.p>
              <motion.div {...reveal} transition={{ ...reveal.transition, delay: 0.24 }} className="mt-8 flex flex-col sm:flex-row gap-3 items-start">
                <a href={LIVE_PRODUCT_URL} className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-[#5425B8] hover:bg-[#6533d1] text-white font-['Sora'] font-bold text-xs sm:text-sm tracking-wide transition-all hover:-translate-y-0.5 shadow-lg shadow-[#5425B8]/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white">
                  Open Iverdan Labs <ArrowRight className="w-4 h-4" />
                </a>
                <a href="#capabilities" className="inline-flex items-center gap-2 px-5 py-4 text-sm text-neutral-300 hover:text-white transition-colors">
                  Explore the product <ArrowDown className="w-4 h-4" />
                </a>
              </motion.div>
              <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-[11px] sm:text-xs text-neutral-400">
                <span className="inline-flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#B89BFF]" /> One connected planning view</span>
                <span className="inline-flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#B89BFF]" /> Scenarios built around your drivers</span>
              </div>
            </div>

            <motion.div initial={{ opacity: 0, x: 24, scale: 0.98 }} animate={{ opacity: 1, x: 0, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }} className="relative max-w-xl w-full mx-auto lg:ml-auto">
              <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-[#5425B8]/30 via-transparent to-[#F23BF1]/20 blur-xl" />
              <div className="relative rounded-3xl border border-white/15 bg-[#11182C]/90 p-4 sm:p-5 shadow-2xl shadow-black/40 backdrop-blur-xl">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2.5"><span className="w-2.5 h-2.5 rounded-full bg-[#F23BF1]" /><span className="text-xs font-semibold tracking-wide">Planning overview</span></div>
                  <span className="text-[10px] text-neutral-400 px-2.5 py-1 rounded-full border border-white/10">FY planning</span>
                </div>
                <div className="grid grid-cols-3 gap-2.5 sm:gap-3 py-4">
                  {[
                    { label: 'Revenue outlook', value: 'On plan', tint: 'text-emerald-300' },
                    { label: 'Operating spend', value: 'In review', tint: 'text-amber-200' },
                    { label: 'Runway view', value: 'Updated', tint: 'text-[#C6B2FF]' },
                  ].map((metric) => <div key={metric.label} className="rounded-xl bg-white/[0.045] border border-white/[0.07] px-3 py-3"><div className="text-[9px] sm:text-[10px] text-neutral-400 leading-snug">{metric.label}</div><div className={`mt-2 text-[11px] sm:text-xs font-semibold ${metric.tint}`}>{metric.value}</div></div>)}
                </div>
                <div className="rounded-2xl border border-white/10 bg-[#0B1020]/70 p-4 sm:p-5">
                  <div className="flex items-start justify-between gap-4"><div><p className="text-[10px] uppercase tracking-widest text-neutral-500">Scenario comparison</p><p className="mt-1 text-sm font-semibold">A clearer view of the choices</p></div><PanelsTopLeft className="w-4 h-4 text-[#B89BFF]" /></div>
                  <div className="mt-6 h-36 sm:h-44 flex items-end gap-2.5 border-b border-l border-white/10 px-2 relative">
                    {[35, 43, 39, 54, 57, 66, 63, 73, 78, 82, 91].map((height, index) => <div key={index} className="flex-1 rounded-t-sm bg-gradient-to-t from-[#5425B8]/60 to-[#A783FF]" style={{ height: `${height}%`, opacity: 0.45 + index * 0.045 }} />)}
                    <div className="absolute inset-x-0 top-[34%] border-t border-dashed border-[#F23BF1]/60" />
                    <div className="absolute right-0 top-[24%] rounded-md bg-[#F23BF1]/15 border border-[#F23BF1]/20 text-[9px] text-pink-100 px-2 py-1">Growth case</div>
                  </div>
                  <div className="flex justify-between mt-3 text-[9px] text-neutral-500"><span>Q1</span><span>Q2</span><span>Q3</span><span>Q4</span><span>Next year</span></div>
                </div>
                <div className="mt-3 rounded-xl bg-gradient-to-r from-[#5425B8]/20 to-[#F23BF1]/10 border border-white/10 p-3.5 flex gap-3 items-start"><Sparkles className="w-4 h-4 text-[#D7C7FF] shrink-0 mt-0.5" /><p className="text-[10px] sm:text-[11px] text-neutral-300 leading-relaxed"><span className="text-white font-semibold">Insight in context</span> · A change in customer retention shifts the revenue outlook. Review the assumptions behind this scenario.</p></div>
              </div>
              <div className="hidden sm:flex absolute -left-8 bottom-12 items-center gap-2 rounded-full bg-white text-neutral-800 px-3.5 py-2 shadow-lg text-[10px] font-semibold"><ShieldCheck className="w-3.5 h-3.5 text-[#5425B8]" /> Traceable decisions</div>
            </motion.div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 leading-none pointer-events-none" aria-hidden="true"><svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-10 sm:h-14 block"><path d="M0,42 C260,75 480,18 720,34 C980,51 1130,75 1320,43 C1380,32 1420,24 1440,22 L1440,85 L0,85 Z" fill="#EFEFEF" /></svg></div>
        </section>

        <section id="outcomes" className="py-16 sm:py-20 lg:py-24 bg-[#EFEFEF] scroll-mt-24">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <motion.div {...reveal} className="grid lg:grid-cols-[.9fr_1.1fr] gap-6 lg:gap-16 items-end mb-10 sm:mb-12">
              <div><div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-neutral-200 shadow-xs mb-4"><span className="w-1.5 h-1.5 rounded-full bg-[#5425B8]" /><span className="text-[10px] sm:text-xs tracking-widest uppercase text-neutral-700 font-['Sora']">A better planning rhythm</span></div><h2 className="text-3xl sm:text-4xl lg:text-[2.7rem] leading-tight font-normal tracking-tight font-['Sora']">Confidence comes from seeing the whole picture.</h2></div>
              <p className="max-w-2xl text-sm sm:text-base text-neutral-600 leading-relaxed lg:pb-1">Plans are most useful when they stay connected to what is happening in the business. Iverdan Labs helps teams bring the numbers, assumptions, and conversations together—so planning feels continuous, not like a once-a-quarter scramble.</p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-4 sm:gap-5">
              {outcomeCards.map((card, index) => <motion.article key={card.title} {...reveal} transition={{ ...reveal.transition, delay: index * 0.07 }} className={`rounded-2xl sm:rounded-3xl p-6 sm:p-7 min-h-[230px] border ${index === 1 ? 'bg-[#5425B8] text-white border-[#5425B8] shadow-lg shadow-[#5425B8]/15' : 'bg-white text-neutral-900 border-neutral-200/90 shadow-xs'}`}><div className={`w-11 h-11 rounded-xl flex items-center justify-center ${index === 1 ? 'bg-white/15' : 'bg-[#5425B8]/10 text-[#5425B8]'}`}><card.icon className={`w-5 h-5 ${index === 1 ? 'text-white' : ''}`} /></div><h3 className="mt-5 text-lg sm:text-xl font-semibold tracking-tight font-['Sora']">{card.title}</h3><p className={`mt-2.5 text-sm leading-relaxed ${index === 1 ? 'text-white/80' : 'text-neutral-600'}`}>{card.body}</p></motion.article>)}
            </div>
          </div>
        </section>

        <section id="capabilities" className="py-16 sm:py-20 lg:py-24 bg-white scroll-mt-24">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <motion.div {...reveal} className="max-w-3xl mb-10 sm:mb-12"><div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F5F1FF] border border-[#E9DFFF] mb-4"><span className="w-1.5 h-1.5 rounded-full bg-[#5425B8]" /><span className="text-[10px] sm:text-xs tracking-widest uppercase text-neutral-700 font-['Sora']">Made for the decisions behind the numbers</span></div><h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight leading-tight font-['Sora']">From the forecast to the <span className="text-[#5425B8]">reason behind it.</span></h2><p className="mt-4 text-sm sm:text-base text-neutral-600 leading-relaxed max-w-2xl">A set of connected capabilities helps finance teams move from planning and comparison to explanation and communication.</p></motion.div>
            <div className="grid md:grid-cols-2 gap-4 sm:gap-5">
              {capabilities.map((item, index) => <motion.article key={item.title} {...reveal} transition={{ ...reveal.transition, delay: (index % 2) * 0.08 }} className="group rounded-2xl sm:rounded-3xl border border-neutral-200 bg-[#FAFAFB] p-6 sm:p-8 hover:border-[#5425B8]/35 hover:shadow-lg hover:shadow-[#5425B8]/5 transition-all duration-300"><div className="flex justify-between items-start gap-5"><div className="w-12 h-12 rounded-2xl bg-[#5425B8] text-white flex items-center justify-center shadow-md shadow-[#5425B8]/20"><item.icon className="w-5 h-5" /></div><span className="text-[9px] sm:text-[10px] tracking-[.15em] text-neutral-400 font-semibold">{item.label}</span></div><h3 className="mt-6 text-xl sm:text-2xl font-semibold tracking-tight font-['Sora']">{item.title}</h3><p className="mt-3 text-sm text-neutral-600 leading-relaxed">{item.body}</p><div className="mt-5 pt-4 border-t border-neutral-200 text-xs sm:text-sm text-[#5425B8] font-medium flex items-center gap-2"><Check className="w-4 h-4 shrink-0" />{item.detail}</div></motion.article>)}
            </div>
            <motion.div {...reveal} className="mt-5 sm:mt-6 rounded-2xl sm:rounded-3xl bg-[#0B1020] p-6 sm:p-8 lg:p-10 text-white grid lg:grid-cols-[.72fr_1.28fr] gap-7 items-center overflow-hidden relative"><div className="absolute -right-12 -top-24 w-72 h-72 rounded-full bg-[#5425B8]/35 blur-3xl" /><div className="relative"><span className="text-[10px] uppercase tracking-[.18em] text-[#C6B2FF] font-semibold">The work fits together</span><h3 className="mt-3 text-2xl sm:text-3xl font-normal font-['Sora'] leading-snug">One view for the plan, the change, and the explanation.</h3></div><div className="relative grid sm:grid-cols-3 gap-3"><div className="rounded-xl border border-white/10 bg-white/[0.04] p-4"><CircleDollarSign className="w-5 h-5 text-[#C6B2FF]" /><p className="mt-3 text-xs font-semibold">Performance</p><p className="mt-1 text-[11px] text-neutral-400 leading-relaxed">Track the actuals that shape the outlook.</p></div><div className="rounded-xl border border-white/10 bg-white/[0.04] p-4"><Workflow className="w-5 h-5 text-[#D18AE7]" /><p className="mt-3 text-xs font-semibold">Assumptions</p><p className="mt-1 text-[11px] text-neutral-400 leading-relaxed">Connect choices to their business drivers.</p></div><div className="rounded-xl border border-white/10 bg-white/[0.04] p-4"><Sparkles className="w-5 h-5 text-[#F39BF0]" /><p className="mt-3 text-xs font-semibold">Narrative</p><p className="mt-1 text-[11px] text-neutral-400 leading-relaxed">Communicate what moved and what it means.</p></div></div></motion.div>
          </div>
        </section>

        <section id="workflow" className="py-16 sm:py-20 lg:py-24 bg-[#EFEFEF] scroll-mt-24">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <motion.div {...reveal} className="text-center max-w-3xl mx-auto mb-10 sm:mb-14"><div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-neutral-200 shadow-xs mb-4"><span className="w-1.5 h-1.5 rounded-full bg-[#5425B8]" /><span className="text-[10px] sm:text-xs tracking-widest uppercase text-neutral-700 font-['Sora']">A continuous planning cycle</span></div><h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight font-['Sora']">A clearer path from actuals to action.</h2><p className="mt-4 text-sm sm:text-base text-neutral-600 leading-relaxed">Keep the team moving through a practical rhythm: establish what is happening, decide what might happen, and communicate what to do next.</p></motion.div>
            <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              <div className="hidden lg:block absolute left-[9%] right-[9%] top-7 border-t border-dashed border-[#5425B8]/25" />
              {workflow.map((step, index) => <motion.article key={step.number} {...reveal} transition={{ ...reveal.transition, delay: index * 0.06 }} className="relative bg-white rounded-2xl border border-neutral-200 p-5 sm:p-6 shadow-xs"><div className="relative z-10 w-14 h-14 rounded-full bg-[#5425B8] text-white border-4 border-[#EFEFEF] flex items-center justify-center font-['Sora'] font-bold text-sm shadow-md shadow-[#5425B8]/20">{step.number}</div><h3 className="mt-5 text-base sm:text-lg font-semibold font-['Sora'] tracking-tight">{step.title}</h3><p className="mt-2 text-sm text-neutral-600 leading-relaxed">{step.body}</p></motion.article>)}
            </div>
            <motion.div {...reveal} className="mt-5 rounded-2xl bg-gradient-to-r from-[#5425B8] to-[#7028B8] text-white px-6 py-5 sm:px-8 sm:py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4"><div><p className="text-sm sm:text-base font-semibold font-['Sora']">Keep the conversation attached to the plan.</p><p className="mt-1 text-xs sm:text-sm text-white/75">Share context across finance, operations, and leadership as assumptions evolve.</p></div><Network className="w-7 h-7 text-white/75 shrink-0" /></motion.div>
          </div>
        </section>

        <section id="trust" className="py-16 sm:py-20 lg:py-24 bg-white scroll-mt-24">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 grid lg:grid-cols-[.9fr_1.1fr] gap-10 lg:gap-16 items-center">
            <motion.div {...reveal}><div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F5F1FF] border border-[#E9DFFF] mb-4"><span className="w-1.5 h-1.5 rounded-full bg-[#5425B8]" /><span className="text-[10px] sm:text-xs tracking-widest uppercase text-neutral-700 font-['Sora']">Built for careful decisions</span></div><h2 className="text-3xl sm:text-4xl lg:text-[2.8rem] font-normal tracking-tight leading-tight font-['Sora']">Trust the process behind every number.</h2><p className="mt-5 text-sm sm:text-base text-neutral-600 leading-relaxed">Financial planning is more valuable when people can follow how a figure changed, what assumption shaped it, and which version they are reviewing. Iverdan Labs is designed to keep the planning process visible and the conversation grounded in shared context.</p><a href={LIVE_PRODUCT_URL} className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#5425B8] hover:text-[#351179] transition-colors">Explore Iverdan Labs <ArrowRight className="w-4 h-4" /></a></motion.div>
            <motion.div {...reveal} transition={{ ...reveal.transition, delay: 0.12 }} className="rounded-3xl bg-[#0B1020] p-6 sm:p-8 lg:p-10 text-white relative overflow-hidden"><div className="absolute -right-20 -bottom-28 w-72 h-72 rounded-full bg-[#5425B8]/35 blur-3xl" /><div className="relative space-y-5"><div className="flex gap-4 items-start"><div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0"><ShieldCheck className="w-5 h-5 text-[#C6B2FF]" /></div><div><h3 className="font-semibold font-['Sora']">Traceable planning</h3><p className="mt-1.5 text-sm text-neutral-400 leading-relaxed">Keep assumptions, revisions, and the path from plan to outcome easier to review.</p></div></div><div className="h-px bg-white/10" /><div className="flex gap-4 items-start"><div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0"><LockKeyhole className="w-5 h-5 text-[#E7A8EF]" /></div><div><h3 className="font-semibold font-['Sora']">Deployment with privacy in mind</h3><p className="mt-1.5 text-sm text-neutral-400 leading-relaxed">The selected inference approach supports private cloud or on-premise deployment paths for sensitive financial information.</p></div></div><div className="h-px bg-white/10" /><div className="flex flex-wrap gap-2 text-[10px] text-neutral-300"><span className="rounded-full bg-white/[0.07] border border-white/10 px-3 py-1.5">Clear version context</span><span className="rounded-full bg-white/[0.07] border border-white/10 px-3 py-1.5">Reviewable assumptions</span><span className="rounded-full bg-white/[0.07] border border-white/10 px-3 py-1.5">Stakeholder-ready views</span></div></div></motion.div>
          </div>
        </section>

        <section id="ai-foundation" className="py-14 sm:py-16 bg-[#F6F4F9] scroll-mt-24">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <motion.div {...reveal} className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-7"><div><span className="text-[10px] uppercase tracking-[.17em] text-[#5425B8] font-semibold">Selected AI foundation</span><h2 className="mt-2 text-2xl sm:text-3xl font-normal tracking-tight font-['Sora']">Purposeful technology, in the background.</h2></div><p className="max-w-lg text-xs sm:text-sm text-neutral-600 leading-relaxed">A concise look at the NVIDIA SDKs selected to support Iverdan Labs’ data, reasoning, and deployment needs.</p></motion.div>
            <div className="grid md:grid-cols-3 gap-3 sm:gap-4">{foundations.map((item, index) => <motion.article key={item.name} {...reveal} transition={{ ...reveal.transition, delay: index * 0.06 }} className="rounded-2xl bg-white border border-neutral-200/90 p-5 sm:p-6"><div className="flex items-center justify-between gap-3"><h3 className="text-sm sm:text-base font-semibold font-['Sora']">{item.name}</h3><span className="text-[9px] text-neutral-500 bg-neutral-100 rounded-full px-2.5 py-1 whitespace-nowrap">{item.tools}</span></div><p className="mt-3 text-xs sm:text-sm text-neutral-600 leading-relaxed">{item.purpose}</p></motion.article>)}</div>
            <p className="mt-4 text-[10px] text-neutral-500">Technology selection describes the intended product foundation; availability may depend on product deployment.</p>
          </div>
        </section>

        <section id="next-step" className="py-16 sm:py-20 lg:py-24 bg-[#EFEFEF] scroll-mt-24">
          <motion.div {...reveal} className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12"><div className="relative overflow-hidden rounded-[1.75rem] sm:rounded-[2.5rem] bg-[#0B1020] px-6 py-12 sm:px-10 sm:py-14 lg:p-16 text-white text-center"><div className="absolute inset-0 pointer-events-none" aria-hidden="true"><div className="absolute left-1/2 -translate-x-1/2 -top-44 w-[35rem] h-[35rem] rounded-full bg-[#5425B8]/35 blur-[100px]" /><div className="absolute right-0 bottom-0 w-72 h-72 rounded-full bg-[#F23BF1]/15 blur-[90px]" /></div><div className="relative max-w-3xl mx-auto"><span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[.18em] text-[#D7C7FF] font-semibold"><span className="w-1.5 h-1.5 rounded-full bg-[#F23BF1]" /> Make your next plan more connected</span><h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl leading-tight font-normal tracking-tight font-['Sora']">Bring your next decision into focus.</h2><p className="mt-4 text-sm sm:text-base text-neutral-300 leading-relaxed max-w-2xl mx-auto">Explore a planning workspace designed to help your team understand the numbers, compare the paths, and communicate with confidence.</p><a href={LIVE_PRODUCT_URL} className="mt-8 inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-[#5425B8] hover:bg-[#6533d1] text-white font-['Sora'] font-bold text-xs sm:text-sm tracking-wide transition-all hover:-translate-y-0.5 shadow-lg shadow-[#5425B8]/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white">Open Iverdan Labs <ArrowRight className="w-4 h-4" /></a><p className="mt-4 text-[10px] text-neutral-500">Continue to the Iverdan Labs product workspace.</p></div></div></motion.div>
        </section>
      </main>
      <Footer onNavigate={handleFooterNavigation} />
    </div>
  );
};

export default ProductPage;
