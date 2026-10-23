import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Building2, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  RefreshCcw,
  Landmark,
  ArrowRight,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

interface ContactProps {
  initialInquiryType?: string;
}

interface FormState {
  name: string;
  email: string;
  subject: string;
  comments: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  comments?: string;
}

export const Contact: React.FC<ContactProps> = () => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    comments: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverStatus, setServerStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [serverMessage, setServerMessage] = useState<string>('');

  // Active map location toggle
  const [activeLocation, setActiveLocation] = useState<'sl' | 'usa'>('sl');

  const locationDetails = {
    sl: {
      name: 'Sri Lanka Office',
      badge: 'SL HQ',
      address: 'No. 54, Kandy Road, Anuradhapura, Sri Lanka',
      phone: '+94 76 099 0227',
      phoneTel: '+94760990227',
      mapUrl: 'https://maps.google.com/maps?q=Kandy+Road,+Anuradhapura,+Sri+Lanka&hl=en&z=14&ie=UTF8&iwloc=&output=embed',
    },
    usa: {
      name: 'USA Office',
      badge: 'USA Office',
      address: '1999 Bryan Street, Dallas, TX 75201, USA',
      phone: '+1 214 125 0227',
      phoneTel: '+12141250227',
      mapUrl: 'https://maps.google.com/maps?q=1999+Bryan+Street,+Dallas,+TX+75201&hl=en&z=15&ie=UTF8&iwloc=&output=embed',
    },
  };

  const validateField = (name: keyof FormState, value: string): string | undefined => {
    switch (name) {
      case 'name':
        if (!value || value.trim().length < 2) {
          return 'Please provide your name (minimum 2 characters).';
        }
        return undefined;
      case 'email':
        if (!value) {
          return 'Email address is required.';
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value.trim())) {
          return 'Please enter a valid email address.';
        }
        return undefined;
      case 'subject':
        if (!value || value.trim().length < 2) {
          return 'Please enter a message subject.';
        }
        return undefined;
      case 'comments':
        if (!value || value.trim().length < 5) {
          return 'Please include your comments or questions (minimum 5 characters).';
        }
        return undefined;
      default:
        return undefined;
    }
  };

  const handleBlur = (field: keyof FormState) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const error = validateField(field, formData[field]);
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const handleChange = (field: keyof FormState, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      const error = validateField(field, value);
      setErrors((prev) => ({ ...prev, [field]: error }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const allTouched = {
      name: true,
      email: true,
      subject: true,
      comments: true,
    };
    setTouched(allTouched);

    const newErrors: FormErrors = {};
    (Object.keys(formData) as (keyof FormState)[]).forEach((key) => {
      const err = validateField(key, formData[key]);
      if (err) newErrors[key] = err;
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      const firstErrorKey = Object.keys(newErrors)[0];
      const element = document.getElementById(firstErrorKey);
      element?.focus();
      return;
    }

    setIsSubmitting(true);
    setServerStatus('idle');
    setServerMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.subject || 'Direct Client Inquiry',
          role: 'General Inquiry',
          inquiryType: formData.subject || 'Direct Message',
          message: formData.comments,
          submittedAt: new Date().toISOString(),
        }),
      });

      const data = await response.json().catch(() => null);

      if (response.ok && data?.ok) {
        setServerStatus('success');
        setServerMessage(
          data.message || 'Thank you! Your inquiry has been received. Our team will follow up within 1 business day.'
        );
      } else {
        setServerStatus('error');
        setServerMessage(
          data?.error || 'Unable to submit your message at this moment. Please try again.'
        );
      }
    } catch {
      setServerStatus('error');
      setServerMessage(
        'Network error: Failed to connect to the submission service. Please check your connection or email us directly.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      subject: '',
      comments: '',
    });
    setErrors({});
    setTouched({});
    setServerStatus('idle');
    setServerMessage('');
  };

  return (
    <section className="bg-[#EFEFEF] relative overflow-hidden" id="contact">
      {/* Upper Content Section in Theme Light Palette */}
      <div className="pt-10 sm:pt-14 md:pt-16 pb-8 sm:pb-10 lg:pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Badge, Title, Subtitle & Redesigned Contact Hub Cards */}
            <motion.div 
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-5 flex flex-col justify-start"
            >
              {/* Theme Section Badge */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1 rounded-full bg-white border border-neutral-200/90 shadow-xs mb-3.5 w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-[#5425B8]" />
                <span className="text-[11px] sm:text-xs font-medium tracking-widest uppercase text-neutral-700 font-['Sora']">
                  Connect with Iverdan
                </span>
              </div>

              {/* Theme Section Title */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-neutral-900 tracking-tight font-['Sora'] leading-tight mb-3">
                Get In Touch
              </h2>

              {/* Subtitle */}
              <p className="text-sm sm:text-base text-neutral-700 leading-relaxed font-sans font-normal mb-6 max-w-md">
                Have questions about our financial planning and scenario intelligence platform? Reach out to our advisory team for tailored guidance and solutions.
              </p>

              {/* Redesigned Contact Information Hub: Paired Offices & Communications */}
              <div className="space-y-3.5">
                {/* 1. Sri Lanka Office Hub Card */}
                <div 
                  onClick={() => setActiveLocation('sl')}
                  className={`p-4 rounded-2xl border transition-all duration-200 cursor-pointer ${
                    activeLocation === 'sl'
                      ? 'bg-white border-[#5425B8] shadow-md shadow-[#5425B8]/10 ring-1 ring-[#5425B8]'
                      : 'bg-white/90 hover:bg-white border-neutral-200/90 shadow-xs hover:border-[#5425B8]/40'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-[#5425B8]/10 text-[#5425B8] flex items-center justify-center shrink-0">
                        <Building2 className="w-4 h-4 stroke-[2]" />
                      </div>
                      <h3 className="text-sm font-semibold text-neutral-900 font-['Sora'] tracking-tight">
                        Sri Lanka Office
                      </h3>
                    </div>
                  </div>

                  <div className="space-y-1.5 pl-10">
                    <div className="flex items-start gap-2 text-xs text-neutral-600 font-sans leading-relaxed">
                      <MapPin className="w-3.5 h-3.5 text-[#5425B8] shrink-0 mt-0.5" />
                      <span>No. 54, Kandy Road, Anuradhapura, Sri Lanka</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#5425B8] font-sans">
                      <Phone className="w-3.5 h-3.5 shrink-0" />
                      <a href="tel:+94760990227" className="hover:underline">
                        +94 76 099 0227
                      </a>
                    </div>
                  </div>
                </div>

                {/* 2. USA Office Hub Card */}
                <div 
                  onClick={() => setActiveLocation('usa')}
                  className={`p-4 rounded-2xl border transition-all duration-200 cursor-pointer ${
                    activeLocation === 'usa'
                      ? 'bg-white border-[#5425B8] shadow-md shadow-[#5425B8]/10 ring-1 ring-[#5425B8]'
                      : 'bg-white/90 hover:bg-white border-neutral-200/90 shadow-xs hover:border-[#5425B8]/40'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-[#5425B8]/10 text-[#5425B8] flex items-center justify-center shrink-0">
                        <Landmark className="w-4 h-4 stroke-[2]" />
                      </div>
                      <h3 className="text-sm font-semibold text-neutral-900 font-['Sora'] tracking-tight">
                        USA Office
                      </h3>
                    </div>
                  </div>

                  <div className="space-y-1.5 pl-10">
                    <div className="flex items-start gap-2 text-xs text-neutral-600 font-sans leading-relaxed">
                      <MapPin className="w-3.5 h-3.5 text-[#5425B8] shrink-0 mt-0.5" />
                      <span>1999 Bryan Street, Dallas, TX 75201, USA</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#5425B8] font-sans">
                      <Phone className="w-3.5 h-3.5 shrink-0" />
                      <a href="tel:+12141250227" className="hover:underline">
                        +1 214 125 0227
                      </a>
                    </div>
                  </div>
                </div>

                {/* 3. Global Email Contact Bar */}
                <div className="p-3.5 rounded-2xl bg-white/70 border border-neutral-200/90 shadow-2xs flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-[#5425B8]/10 text-[#5425B8] flex items-center justify-center shrink-0">
                      <Mail className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-500 font-['Sora'] block">
                        General Inquiries
                      </span>
                      <a 
                        href="mailto:contact@iverdan.lk" 
                        className="text-xs font-semibold text-[#5425B8] hover:underline"
                      >
                        contact@iverdan.lk
                      </a>
                    </div>
                  </div>
                  <span className="text-[10px] text-neutral-500 hidden sm:inline-block font-sans">
                    24h Response SLA
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Right Column: "Your Detail" Card Floating Down Directly Over Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-7 relative z-30 translate-y-8 -mb-8 lg:translate-y-24 lg:-mb-24"
            >
              <div className="bg-white rounded-3xl border border-neutral-200/90 shadow-2xl shadow-neutral-900/10 p-6 sm:p-8 md:p-10 relative">
                {/* Card Title */}
                <h3 className="text-xl sm:text-2xl font-semibold text-neutral-900 font-['Sora'] tracking-tight mb-6 sm:mb-8">
                  Your Detail
                </h3>

                {serverStatus === 'success' ? (
                  <div className="py-8 px-2 text-center" role="alert">
                    <div className="w-14 h-14 rounded-full bg-[#5425B8]/10 text-[#5425B8] flex items-center justify-center mx-auto mb-4 border border-[#5425B8]/20">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <h4 className="text-xl font-bold text-neutral-900 font-['Sora'] mb-2">
                      Inquiry Successfully Received
                    </h4>
                    <p className="text-sm text-neutral-600 leading-relaxed max-w-md mx-auto mb-6">
                      {serverMessage}
                    </p>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="about-uiverse-btn curved group w-full sm:w-auto"
                    >
                      <RefreshCcw className="w-4 h-4 shrink-0" />
                      <span>Send Another Message</span>
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-6 sm:space-y-7">
                    {serverStatus === 'error' && (
                      <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs flex items-center gap-2.5">
                        <AlertCircle className="w-4 h-4 text-red-500 shrink-0" />
                        <span>{serverMessage}</span>
                      </div>
                    )}

                    {/* Row 1: Name & Email Address (2 Column Grid) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                      {/* Name */}
                      <div>
                        <label 
                          htmlFor="name" 
                          className="block text-xs font-semibold text-neutral-800 font-['Sora'] mb-1.5 tracking-wide"
                        >
                          Name <span className="text-[#5425B8]">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={(e) => handleChange('name', e.target.value)}
                          onBlur={() => handleBlur('name')}
                          placeholder="Your Name"
                          className={`w-full bg-transparent border-b-2 py-2 px-0.5 text-sm text-neutral-900 placeholder-neutral-400 outline-none transition-colors ${
                            errors.name ? 'border-red-400 focus:border-red-500' : 'border-neutral-200 focus:border-[#5425B8]'
                          }`}
                        />
                        {errors.name && (
                          <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            {errors.name}
                          </p>
                        )}
                      </div>

                      {/* Email Address */}
                      <div>
                        <label 
                          htmlFor="email" 
                          className="block text-xs font-semibold text-neutral-800 font-['Sora'] mb-1.5 tracking-wide"
                        >
                          Email Address <span className="text-[#5425B8]">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={(e) => handleChange('email', e.target.value)}
                          onBlur={() => handleBlur('email')}
                          placeholder="Your Email"
                          className={`w-full bg-transparent border-b-2 py-2 px-0.5 text-sm text-neutral-900 placeholder-neutral-400 outline-none transition-colors ${
                            errors.email ? 'border-red-400 focus:border-red-500' : 'border-neutral-200 focus:border-[#5425B8]'
                          }`}
                        />
                        {errors.email && (
                          <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Row 2: Subject */}
                    <div>
                      <label 
                        htmlFor="subject" 
                        className="block text-xs font-semibold text-neutral-800 font-['Sora'] mb-1.5 tracking-wide"
                      >
                        Subject <span className="text-[#5425B8]">*</span>
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={(e) => handleChange('subject', e.target.value)}
                        onBlur={() => handleBlur('subject')}
                        placeholder="Message Subject"
                        className={`w-full bg-transparent border-b-2 py-2 px-0.5 text-sm text-neutral-900 placeholder-neutral-400 outline-none transition-colors ${
                          errors.subject ? 'border-red-400 focus:border-red-500' : 'border-neutral-200 focus:border-[#5425B8]'
                        }`}
                      />
                      {errors.subject && (
                        <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.subject}
                        </p>
                      )}
                    </div>

                    {/* Row 3: Comments / Questions */}
                    <div>
                      <label 
                        htmlFor="comments" 
                        className="block text-xs font-semibold text-neutral-800 font-['Sora'] mb-1.5 tracking-wide"
                      >
                        Comments / Questions <span className="text-[#5425B8]">*</span>
                      </label>
                      <textarea
                        id="comments"
                        name="comments"
                        rows={3}
                        value={formData.comments}
                        onChange={(e) => handleChange('comments', e.target.value)}
                        onBlur={() => handleBlur('comments')}
                        placeholder="Your Message"
                        className={`w-full bg-transparent border-b-2 py-2 px-0.5 text-sm text-neutral-900 placeholder-neutral-400 outline-none transition-colors resize-none ${
                          errors.comments ? 'border-red-400 focus:border-red-500' : 'border-neutral-200 focus:border-[#5425B8]'
                        }`}
                      />
                      {errors.comments && (
                        <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.comments}
                        </p>
                      )}
                    </div>

                    {/* Action Button: About Section Theme Button Design (Full width on sm devices) */}
                    <div className="pt-2 sm:pt-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="about-uiverse-btn curved group w-full sm:w-auto"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin shrink-0" />
                            <span>Sending...</span>
                          </>
                        ) : (
                          <>
                            <span>Send Message</span>
                            <ArrowRight className="w-4 h-4 shrink-0" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Bottom Section: Clean Map with ONLY Form Card Overlay (Left cards are completely clear) */}
      <div className="relative w-full h-[220px] sm:h-[260px] md:h-[280px] bg-[#E8E8E8] z-10 border-t border-neutral-300 overflow-hidden">
        {/* Dynamic Google Map Embed */}
        <iframe
          key={activeLocation}
          title={locationDetails[activeLocation].name}
          src={locationDetails[activeLocation].mapUrl}
          className="w-full h-full border-0 select-none filter grayscale contrast-90 brightness-105 pointer-events-auto"
          loading="lazy"
          aria-label={`Google Map showing ${locationDetails[activeLocation].name}`}
        />
        {/* Subtle top edge gradient shadow */}
        <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-black/10 to-transparent pointer-events-none" />
      </div>
    </section>
  );
};

export default Contact;
