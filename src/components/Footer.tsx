import React from 'react';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

// Custom brand-faithful SVG icons for requested social media platforms
const FacebookIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const YouTubeIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const XIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedInIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

const PinterestIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.522.535 6.622 0 11.99-5.373 11.99-11.997C23.975 5.367 18.64 0 12.017 0z"
    />
  </svg>
);

const MediumIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M2.846 6.887c.03-.295-.083-.586-.303-.784l-2.24-2.7v-.403h6.958l5.378 11.795 4.728-11.795h6.633v.403l-1.92 1.838c-.165.126-.247.333-.213.538v13.498c-.034.204.048.411.213.537l1.87 1.837v.403H16.89v-.403l1.948-1.888c.19-.19.19-.247.19-.537V8.587l-5.409 13.725h-.75L6.685 8.587v9.313c-.044.285.05.573.253.774l2.508 3.04v.404H2v-.404l2.508-3.04c.202-.2.29-.489.243-.774V6.887z" />
  </svg>
);

const F6SIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="140 160 520 480" fill="currentColor" className={className} aria-hidden="true">
    <polygon points="156.9,180.1 293.7,180.1 293.7,237.9 210.7,237.9 210.7,362.8 260.5,362.8 260.5,420.6 210.7,420.6 210.7,619.9 152.9,619.9 152.9,180.1" />
    <path d="m 372.4,237.9 v 124.9 h 68.5 c 16.6,0 31.1,14.5 31.1,31 v 194.7 c 0,16.7 -14.5,31.4 -31.1,31.4 h -95 c -16.6,0 -31.1,-14.3 -31.1,-30.6 V 212.3 c 0,-16.8 14.4,-32.2 30.3,-32.2 h 95.9 c 16.6,0 31.1,14.5 31.1,31 v 72.7 h -57.8 v -45.9 z m 0,182.7 v 141.5 h 41.9 V 420.6 Z" />
    <path d="m 647.1,283.7 h -57.8 v -45.8 h -41.9 v 124.9 l 69.1,0 c 16.4,0 30.5,19.7 30.5,35.8 v 189.7 c 0,16.8 -14.3,31.6 -30.5,31.6 h -92.9 c -16.3,0 -30.5,-14.4 -30.5,-30.7 v -110 l 54.3,-0.1 v 83 h 41.9 V 420.6 l -65.7,0 c -16.2,0 -30.5,-14.6 -30.5,-31.1 V 211.3 c 0,-16.6 14.3,-31.2 30.5,-31.2 h 92.9 c 16.3,0 30.5,14.6 30.5,31.2 z" />
  </svg>
);

const CrunchbaseIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.6 0H2.4A2.41 2.41 0 0 0 0 2.4v19.2A2.41 2.41 0 0 0 2.4 24h19.2a2.41 2.41 0 0 0 2.4-2.4V2.4A2.41 2.41 0 0 0 21.6 0M7.045 14.465A2.11 2.11 0 0 0 9.84 13.42h1.66a3.69 3.69 0 1 1 0-1.75H9.84a2.11 2.11 0 1 0-2.795 2.795m11.345.845a3.6 3.6 0 0 1-1.06.63a3.68 3.68 0 0 1-3.39-.38v.38h-1.51V5.37h1.5v4.11a3.74 3.74 0 0 1 1.8-.63H16a3.67 3.67 0 0 1 2.39 6.46m-.223-2.766a2.104 2.104 0 1 1-4.207 0a2.104 2.104 0 0 1 4.207 0"
    />
  </svg>
);

const socialLinks = [
  { name: 'Facebook', url: 'https://www.facebook.com/IverdanTech/', icon: FacebookIcon },
  { name: 'YouTube', url: ' https://www.youtube.com/@IverdanTech', icon: YouTubeIcon },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/company/iverdan-technologies/', icon: LinkedInIcon },
  { name: 'Pinterest', url: 'https://www.pinterest.com/IverdanTech/', icon: PinterestIcon },
  { name: 'Medium', url: 'ttps://medium.com/@IverdanTech', icon: MediumIcon },
  { name: 'F6S', url: 'https://www.f6s.com/company/iverdan', icon: F6SIcon },
  { name: 'Crunchbase', url: 'https://www.crunchbase.com/organization/iverdan', icon: CrunchbaseIcon },
];

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const platformLinks = [
    { label: 'Scenario Workspace', action: () => scrollToTop() },
    { label: 'Platform Features', action: () => onNavigate('features') },
    { label: 'How It Works', action: () => onNavigate('how-it-works') },
    { label: 'Pricing Tiers', action: () => onNavigate('pricing') },
    { label: 'Interactive Demo', action: () => onNavigate('demo') },
  ];

  const navigationLinks = [
    { label: 'About Platform', action: () => onNavigate('about') },
    { label: 'Leadership Team', action: () => onNavigate('team') },
    { label: 'Testimonials', action: () => onNavigate('testimonials') },
    { label: 'FAQ & Clarifications', action: () => onNavigate('faq') },
    { label: 'Contact & Offices', action: () => onNavigate('contact') },
  ];

  return (
    <footer className="bg-[#0B1020] text-neutral-400 text-sm border-t border-white/10 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-16">
          {/* Brand Info & Social Media (2 columns on large screen) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center">
              <img
                src="/Logo Iverdan.svg"
                alt="Iverdan"
                className="h-8 sm:h-9 w-auto object-contain"
              />
            </div>

            <p className="text-sm text-neutral-400 max-w-sm leading-relaxed font-normal">
              Financial Planning & Scenario Intelligence. Transform scattered actuals into structured budgets, dynamic forecasts, and defensible business scenarios.
            </p>

            {/* Social Media Links (Facebook, YouTube, X, LinkedIn, Pinterest, Medium, F6S, Crunchbase) */}
            <div className="pt-2">
              <div className="text-xs font-semibold uppercase tracking-wider text-white font-['Sora'] mb-3">
                Connect &amp; Follow
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow Iverdan on ${social.name}`}
                    title={social.name}
                    className="w-8.5 h-8.5 rounded-xl bg-white/5 hover:bg-[#5425B8] text-neutral-400 hover:text-white border border-white/10 hover:border-[#5425B8] flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:shadow-[#5425B8]/30 group cursor-pointer"
                  >
                    <social.icon className="w-4 h-4 fill-current transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Platform Quicklinks */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-['Sora'] mb-4">
              Platform
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {platformLinks.map((link) => (
                <li key={link.label}>
                  <button
                    type="button"
                    onClick={link.action}
                    className="hover:text-white transition-colors text-left cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Navigation Quicklinks */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-['Sora'] mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {navigationLinks.map((link) => (
                <li key={link.label}>
                  <button
                    type="button"
                    onClick={link.action}
                    className="hover:text-white transition-colors text-left cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            © 2026 Iverdan Technologies Inc. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
