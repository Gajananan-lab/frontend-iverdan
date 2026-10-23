import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Search, HelpCircle, ArrowRight } from 'lucide-react';

interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('q1');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const faqs: FAQItem[] = [
    {
      id: 'q1',
      category: 'General',
      question: 'What is Iverdan?',
      answer:
        'Iverdan is a modern Financial Planning & Scenario Intelligence platform designed for financial leaders, FP&A teams, and executives. It connects your historical general ledger actuals and operational data, enabling you to build rolling budgets, model parallel "what-if" business scenarios, and evaluate strategic decisions using clear, deterministic financial math.',
    },
    {
      id: 'q2',
      category: 'Scenarios',
      question: 'How does scenario planning work?',
      answer:
        'In Iverdan, you create isolated sandbox branches of your primary financial plan. Each branch inherits your current baseline data, but allows you to independently adjust operational assumptions—such as hiring ramps, revenue churn rates, pricing adjustments, or delayed receivables. The system recalculates your cash runway, burn rate, and margins in real-time, allowing you to compare alternative futures side-by-side without altering your official baseline.',
    },
    {
      id: 'q3',
      category: 'Forecasting',
      question: 'How are forecasts generated?',
      answer:
        'Forecasts are generated using driver-based financial modeling and deterministic formulas. You define the operational relationships that dictate your business (for example: Headcount × Fully Loaded Cost, or Marketing Spend × Blended CAC). Iverdan applies these rules forward across 12-to-36 month rolling horizons, continuously reconciling actuals at the close of every month so your forward outlook remains accurate.',
    },
    {
      id: 'q4',
      category: 'AI & Data',
      question: 'How are AI-assisted insights used?',
      answer:
        'We use language models strictly for diagnostic summarization, natural language anomaly detection, and automated narrative reporting. The AI analyzes calculated variance results to explain in clear English why numbers shifted (e.g., "Software engineering expenses rose 14% due to accelerated senior backend hires in Q2"). The AI never guesses financial arithmetic or creates black-box projections; all underlying calculations remain 100% deterministic.',
    },
    {
      id: 'q5',
      category: 'AI & Data',
      question: 'What financial data can be imported?',
      answer:
        'Iverdan supports importing Chart of Accounts, monthly trial balances, payroll registers, invoice schedules, and transaction-level actuals via standard CSV/Excel templates or direct API connections to common accounting systems. Our mapping engine automatically aligns your imported categories to your custom financial planning hierarchy.',
    },
    {
      id: 'q6',
      category: 'Security',
      question: 'How is financial information handled?',
      answer:
        'Your financial data is treated with institutional confidentiality. All information is encrypted both in transit (TLS 1.3) and at rest (AES-256). Customer data is isolated in segregated tenant environments, access is strictly governed through role-based access controls (RBAC), and your strategic business data is never sold, shared, or used to train third-party machine learning models.',
    },
    {
      id: 'q7',
      category: 'Forecasting',
      question: 'Are forecasts guaranteed?',
      answer:
        'No financial forecast is an absolute guarantee of future performance. Forward-looking projections represent mathematical estimations derived directly from your chosen assumptions, historical patterns, and operational variables. Iverdan’s primary purpose is to help you thoroughly stress-test assumptions and prepare for potential contingencies so you can make informed, resilient decisions under varying market conditions.',
    },
  ];

  const filteredFaqs = faqs.filter((f) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return f.question.toLowerCase().includes(q) || f.answer.toLowerCase().includes(q);
  });

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-10 md:py-14 bg-[#EFEFEF]" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Animated Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10"
        >
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1 rounded-full bg-white border border-neutral-200/90 shadow-xs mb-3.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#5425B8]" />
            <span className="text-[11px] sm:text-xs font-medium tracking-widest uppercase text-neutral-700 font-['Sora']">
              Answers &amp; Clarifications
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-neutral-900 tracking-tight font-['Sora'] leading-tight mb-4">
            Frequently Asked Questions
          </h2>

          <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-normal mb-8">
            Everything you need to know about our scenario modeling logic, security standards, and platform capabilities.
          </p>

          {/* Interactive Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions (e.g. scenarios, AI, security, data)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-neutral-300 bg-white text-xs sm:text-sm placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black transition-all shadow-xs"
            />
          </div>
        </motion.div>

        {/* Accordion List with Motion */}
        <div className="space-y-4">
          {filteredFaqs.length === 0 ? (
            <div className="bg-white rounded-2xl border border-neutral-300 p-8 text-center text-neutral-500 text-sm">
              No matching questions found for "{searchQuery}". Try searching for "scenarios", "forecasts", or "security".
            </div>
          ) : (
            filteredFaqs.map((faq, index) => {
              const isOpen = openId === faq.id;
              return (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                  className="bg-[#FFFFFF] rounded-2xl border border-neutral-300 transition-all duration-200 overflow-hidden shadow-xs hover:border-neutral-400"
                >
                  <h3>
                    <button
                      type="button"
                      onClick={() => toggleFAQ(faq.id)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${faq.id}`}
                      id={`faq-btn-${faq.id}`}
                      className="w-full text-left px-6 py-5 sm:px-7 sm:py-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#5425B8]"
                    >
                      <span className="text-base sm:text-lg font-bold text-[#000000] font-['Sora'] leading-snug">
                        {faq.question}
                      </span>
                      <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                          isOpen ? 'bg-neutral-200 text-black' : 'bg-neutral-100 text-neutral-600'
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </motion.span>
                    </button>
                  </h3>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-answer-${faq.id}`}
                        role="region"
                        aria-labelledby={`faq-btn-${faq.id}`}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 sm:px-7 sm:pb-7 text-sm sm:text-base text-neutral-700 leading-relaxed pt-1 border-t border-neutral-100 font-normal">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};

export default React.memo(FAQ);
