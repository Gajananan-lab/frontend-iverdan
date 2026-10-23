import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cookie, X, ShieldCheck } from 'lucide-react';

export interface CookieBannerProps {
  onAccept?: () => void;
  onDeny?: () => void;
  onClose?: () => void;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({
  onAccept,
  onDeny,
  onClose,
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    // Check if consent has already been given or dismissed
    const consent = localStorage.getItem('iverdan_cookie_consent');
    const sessionDismissed = sessionStorage.getItem('iverdan_cookie_dismissed');

    if (!consent && !sessionDismissed) {
      // Small timeout to allow page layout to render smoothly first
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('iverdan_cookie_consent', 'accepted');
    setIsVisible(false);
    onAccept?.();
  };

  const handleDeny = () => {
    localStorage.setItem('iverdan_cookie_consent', 'denied');
    setIsVisible(false);
    onDeny?.();
  };

  const handleClose = () => {
    sessionStorage.setItem('iverdan_cookie_dismissed', 'true');
    setIsVisible(false);
    onClose?.();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.aside
          role="region"
          aria-label="Cookie consent banner"
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 sm:max-w-[400px] z-50 bg-white/95 backdrop-blur-md rounded-2xl border border-neutral-200/90 shadow-2xl shadow-neutral-950/15 p-4 sm:p-4.5"
        >
          {/* Header row: Cookie Icon, Title, and Close Button */}
          <div className="flex items-start justify-between gap-3 mb-2.5">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-[#5425B8]/10 text-[#5425B8] flex items-center justify-center shrink-0">
                <Cookie className="w-4 h-4 text-[#5425B8]" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-neutral-900 font-['Sora'] leading-tight">
                  Cookie Preferences
                </h3>
                <span className="inline-flex items-center gap-1 text-[10px] text-neutral-500 font-medium">
                  <ShieldCheck className="w-3 h-3 text-emerald-600 shrink-0" />
                  <span>Privacy &amp; Compliance</span>
                </span>
              </div>
            </div>

            {/* Close Button */}
            <button
              type="button"
              onClick={handleClose}
              aria-label="Close cookie banner"
              className="p-1 -mr-1 -mt-1 text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 rounded-lg transition-colors cursor-pointer shrink-0"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Description */}
          <p className="text-xs text-neutral-600 leading-relaxed font-sans mb-3.5">
            We use essential cookies to keep our platform secure and analytical cookies to refine deterministic scenario modeling.
          </p>

          {/* Action Buttons: Deny & Accept */}
          <div className="flex items-center gap-2 pt-1">
            <button
              type="button"
              onClick={handleDeny}
              className="flex-1 py-2 px-3 rounded-xl border border-neutral-300 hover:border-neutral-400 bg-neutral-50 hover:bg-neutral-100/80 text-neutral-700 font-['Sora'] text-xs font-semibold transition-all cursor-pointer text-center"
            >
              Deny
            </button>

            <button
              type="button"
              onClick={handleAccept}
              className="flex-1 py-2 px-3 rounded-xl bg-[#5425B8] hover:bg-[#431A9E] text-white font-['Sora'] text-xs font-semibold transition-all shadow-xs hover:shadow-sm cursor-pointer text-center"
            >
              Accept
            </button>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};

export default React.memo(CookieBanner);
