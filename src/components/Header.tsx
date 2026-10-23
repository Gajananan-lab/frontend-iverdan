import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

const UiverseCtaButton: React.FC<{
  label: string;
  onClick: () => void;
  className?: string;
  showIcon?: boolean;
}> = ({ label, onClick, className = '', showIcon = true }) => (
  <button
    type="button"
    onClick={onClick}
    className={`uiverse-btn group ${className}`}
  >
    <span className="fold" aria-hidden="true" />
    <span className="inner font-['Sora']">
      <span>{label}</span>
      {showIcon && (
        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 shrink-0" />
      )}
    </span>
  </button>
);

export const Header: React.FC<HeaderProps> = ({ activeSection, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'features', label: 'Features' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'demo', label: 'Demo' },
    { id: 'team', label: 'Team' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      onNavigate(id);
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transform-gpu transition-all duration-300 ${
        scrolled
          ? 'bg-[#0B1020]/90 backdrop-blur-md shadow-lg shadow-black/25 py-3 sm:py-3.5'
          : 'bg-transparent py-4 sm:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 flex items-center justify-between">
        {/* Left: Brand Logo from public/Logo Iverdan.svg */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('hero');
          }}
          className="flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5425B8] rounded-xl py-1"
          aria-label="Iverdan Home"
        >
          <img
            src="/Logo Iverdan.svg"
            alt="Iverdan"
            className="h-8 sm:h-9 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
            decoding="async"
          />
        </a>

        {/* Right: Floating Theme Capsule Nav Pill with Active & Hover Pill Animations */}
        <div className="hidden lg:flex items-center gap-3.5 xl:gap-4">
          {/* 1. Theme Obsidian Nav Capsule Pill with Sliding Pill Indicators */}
          <nav
            className="bg-[#0B1020]/95 rounded-full p-1.5 shadow-2xl shadow-black/40 flex items-center gap-1 border border-white/10"
            aria-label="Main Navigation"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.id);
                  }}
                  className={`relative px-4 py-2 text-xs xl:text-[13px] font-semibold font-['Sora'] rounded-full transition-all duration-150 z-10 select-none flex items-center justify-center ${
                    isActive
                      ? 'text-white font-bold'
                      : 'text-neutral-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {/* Active Pill Animation - Animated Double-Colored Gradient (#5425B8 Purple & #F23BF1 Magenta) */}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      className="absolute inset-0 rounded-full overflow-hidden shadow-[0_0_18px_rgba(84,37,184,0.45)] -z-10"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    >
                      <div className="w-full h-full rounded-full bg-gradient-to-r from-[#5425B8] via-[#7928CA] to-[#F23BF1]" />
                      <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/20 via-transparent to-black/20 pointer-events-none" />
                    </motion.div>
                  )}

                  <span className="relative z-10">{item.label}</span>
                </a>
              );
            })}
          </nav>

          {/* 2. Separate Action CTA Button with Uiverse Animated Theme Glow */}
          <UiverseCtaButton
            label="Iverdan Lab"
            onClick={() => handleNavClick('contact')}
            className="px-5 py-2.5 text-xs xl:text-[13px]"
          />
        </div>

        {/* Mobile / Tablet View (< lg): Hamburger Menu */}
        <div className="flex items-center lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            className="p-2.5 rounded-full bg-[#0B1020]/90 text-white hover:bg-[#5425B8] transition-colors shadow-lg border border-white/10"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
          </button>
        </div>
      </div>

      {/* Responsive Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden mx-4 sm:mx-8 mt-3 rounded-2xl bg-[#0B1020]/98 backdrop-blur-xl p-5 shadow-2xl text-white border border-white/10"
          >
            <nav className="flex flex-col space-y-2 mb-4" aria-label="Mobile Navigation">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                if (isActive) {
                  return (
                    <div
                      key={item.id}
                      className="relative overflow-hidden rounded-xl shadow-[0_0_15px_rgba(84,37,184,0.4)]"
                    >
                      <div className="w-full h-full bg-gradient-to-r from-[#5425B8] via-[#7928CA] to-[#F23BF1] px-4 py-2.5 rounded-xl text-white font-bold flex items-center justify-between text-xs font-['Sora']">
                        <span>{item.label}</span>
                        <ArrowRight className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  );
                }

                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.id);
                    }}
                    className="px-4 py-2.5 rounded-xl text-xs font-semibold tracking-wide text-neutral-300 hover:bg-white/10 hover:text-white transition-colors flex items-center justify-between font-['Sora']"
                  >
                    <span>{item.label}</span>
                    <ArrowRight className="w-4 h-4 text-neutral-400" />
                  </a>
                );
              })}
            </nav>
            <UiverseCtaButton
              label="Iverdan Lab"
              onClick={() => handleNavClick('contact')}
              className="w-full py-3 px-4 text-xs [--round:0.75rem]"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;



