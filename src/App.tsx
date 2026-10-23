import React, { useState, useEffect, useCallback } from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import HowItWorks from './components/HowItWorks.tsx';
import Features from './components/Features.tsx';
import Pricing from './components/Pricing.tsx';
import Demo from './components/Demo.tsx';
import Testimonials from './components/Testimonials.tsx';
import FAQ from './components/FAQ.tsx';
import Team from './components/Team.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';
import CookieBanner from './components/CookieBanner.tsx';
import ProductPage from './components/ProductPage.tsx';

export default function App() {
  return window.location.pathname.replace(/\/$/, '') === '/product'
    ? <ProductPage />
    : <HomePage />;
}

function HomePage() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [inquiryType, setInquiryType] = useState<string>('Product Demo');

  // Track active section using a single performant IntersectionObserver
  useEffect(() => {
    const sectionIds = ['hero', 'about', 'how-it-works', 'features', 'pricing', 'demo', 'testimonials', 'faq', 'team', 'contact'];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -40% 0px',
        threshold: 0.1,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (window.scrollY < 80) {
            setActiveSection('hero');
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = useCallback((id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  }, []);

  const handleSelectPricingTier = useCallback((tierInquiryType: string) => {
    setInquiryType(tierInquiryType);
    scrollToSection('contact');
  }, [scrollToSection]);

  const handleJoinPartnerProgram = useCallback(() => {
    setInquiryType('Scenario Advisory');
    scrollToSection('contact');
  }, [scrollToSection]);

  return (
    <div className="min-h-screen bg-[#EFEFEF] text-[#000000] flex flex-col font-sans selection:bg-[#F23BF1]/20 selection:text-[#000000]">
      {/* 1. Sticky Header */}
      <Header
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />

      <main className="flex-1 w-full" id="main-content">
        {/* 2. Hero Section */}
        <Hero
          onExploreClick={() => scrollToSection('features')}
          onHowItWorksClick={() => scrollToSection('how-it-works')}
        />

        {/* 3. About Iverdan */}
        <About onLearnMore={() => scrollToSection('team')} />

        {/* 4. How It Works */}
        <HowItWorks />

        {/* 5. Features */}
        <Features />

        {/* 6. Pricing */}
        <Pricing onSelectTier={handleSelectPricingTier} />

        {/* 7. Interactive Sandbox Demo */}
        <Demo onRequestDemo={() => {
          setInquiryType('Product Demo');
          scrollToSection('contact');
        }} />

        {/* 8. Testimonials (Product Value & Assurance Section) */}
        <Testimonials onJoinPartnerProgram={handleJoinPartnerProgram} />

        {/* 8. FAQ Accordion */}
        <FAQ />

        {/* 9. Leadership & Core Team Section */}
        <Team onJoinTeam={() => {
          setInquiryType('Careers & Partnership');
          scrollToSection('contact');
        }} />

        {/* 10. Contact Form */}
        <Contact initialInquiryType={inquiryType} />
      </main>

      {/* 10. Footer */}
      <Footer onNavigate={scrollToSection} />

      {/* 11. Cookie Consent Banner */}
      <CookieBanner />
    </div>
  );
}
