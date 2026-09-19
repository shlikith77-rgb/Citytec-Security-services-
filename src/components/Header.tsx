import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Shield, Menu, X, ChevronRight, FileText, Globe, Scale } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { COMPANY_INFO } from '../data/companyData';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

interface HeaderProps {
  onOpenLegalModal?: () => void;
  onNavigateToService?: (serviceId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenLegalModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, toggleLanguage, isHindi } = useLanguage();
  const t = TRANSLATIONS[language];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.navAbout, href: '#about' },
    { name: t.navServices, href: '#services' },
    { name: t.navClients, href: '#clients' },
    { name: t.navSectors, href: '#sectors' },
    { name: t.navCompliance, href: '#compliance' },
    { name: t.navFaq, href: '#faq' },
    { name: t.navEstimator, href: '#estimator' },
    { name: t.navContact, href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Institutional Notification Bar */}
      <div className="bg-[#081325] text-slate-300 text-xs border-b border-blue-900/40 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="truncate max-w-md text-[11.5px]">
                <strong className="text-white font-medium">{t.puneHq}:</strong> Jaiganeshvishwa, Nr. Kirti Hotel, Pune – 411015
              </span>
            </div>
            <div className="h-3 w-px bg-slate-700 hidden lg:block" />
            <div className="hidden lg:flex items-center gap-1.5 text-blue-300 text-[11px] font-medium tracking-wide">
              <Shield className="w-3.5 h-3.5 text-cyan-400" />
              <span>{t.topDispatch}</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Language Switch Button */}
            <button
              onClick={toggleLanguage}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-950/80 hover:bg-blue-900 text-cyan-300 hover:text-white border border-cyan-500/40 text-[11px] font-bold transition-all"
              title={t.langSwitchTitle}
            >
              <Globe className="w-3.5 h-3.5 text-cyan-400" />
              <span>{isHindi ? 'Switch to English' : 'हिन्दी भाषा चुनें'}</span>
            </button>

            {/* Legal Policies Modal trigger */}
            {onOpenLegalModal && (
              <button
                onClick={onOpenLegalModal}
                className="inline-flex items-center gap-1 text-[11px] text-slate-300 hover:text-white transition-colors"
              >
                <Scale className="w-3 h-3 text-amber-400" />
                <span>{t.legalBtn}</span>
              </button>
            )}

            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex items-center gap-1.5 text-white hover:text-cyan-300 font-semibold text-[12px] tracking-wide transition-colors group"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <Phone className="w-3.5 h-3.5 text-cyan-400 group-hover:rotate-12 transition-transform" />
              <span>{COMPANY_INFO.phoneFormatted}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Corporate Navigation Bar */}
      <div
        className={`w-full transition-all duration-300 border-b ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-slate-900/5 border-slate-200 py-2.5'
            : 'bg-white/90 backdrop-blur-sm border-slate-100 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center group">
            <BrandLogo
              variant="light"
              size="md"
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-semibold text-slate-700 hover:text-blue-700 transition-colors py-1 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-700 to-cyan-500 transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Header Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Header Language Switch button */}
            <button
              onClick={toggleLanguage}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-bold text-blue-900 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-lg transition-colors"
            >
              <Globe className="w-3.5 h-3.5 text-blue-700" />
              <span>{isHindi ? 'English' : 'हिन्दी'}</span>
            </button>

            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#0B1E3F] bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors shadow-xs"
            >
              <Phone className="w-3.5 h-3.5 text-blue-700" />
              <span>{COMPANY_INFO.phone}</span>
            </a>

            <a
              href="#estimator"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-gradient-to-r from-[#0B1E3F] via-[#153465] to-[#1E40AF] hover:from-[#0F2850] hover:to-[#2563EB] rounded-lg shadow-sm shadow-blue-900/20 transition-all transform hover:-translate-y-0.5"
            >
              <FileText className="w-3.5 h-3.5 text-cyan-300" />
              <span>{t.getQuoteBtn}</span>
            </a>
          </div>

          {/* Mobile Menu & Language Button */}
          <div className="flex items-center gap-1.5 xl:hidden">
            <button
              onClick={toggleLanguage}
              className="px-2 py-1.5 text-xs font-bold text-blue-900 bg-blue-50 border border-blue-200 rounded-lg"
            >
              {isHindi ? 'ENG' : 'हिन्दी'}
            </button>

            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="p-2 rounded-lg bg-blue-50 text-blue-700 border border-blue-200"
              aria-label="Direct Call"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 border border-slate-200"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 shadow-xl px-4 pt-3 pb-6 animate-in slide-in-from-top duration-200">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-800 hover:bg-blue-50 hover:text-blue-700 transition-colors"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-slate-100 space-y-2">
            <div className="flex items-center justify-between gap-2">
              <button
                onClick={toggleLanguage}
                className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-blue-50 text-blue-900 border border-blue-200 text-xs font-bold"
              >
                <Globe className="w-4 h-4 text-blue-700" />
                <span>{isHindi ? 'Switch to English' : 'हिन्दी भाषा चुनें'}</span>
              </button>

              {onOpenLegalModal && (
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenLegalModal();
                  }}
                  className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-slate-100 text-slate-800 border border-slate-200 text-xs font-bold"
                >
                  <Scale className="w-3.5 h-3.5 text-amber-600" />
                  <span>{t.legalBtn}</span>
                </button>
              )}
            </div>

            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#0B1E3F] text-white text-xs font-semibold shadow-sm"
            >
              <Phone className="w-4 h-4 text-cyan-400" />
              <span>Call Pune Dispatch: {COMPANY_INFO.phoneFormatted}</span>
            </a>

            <a
              href="#estimator"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-blue-600 text-white text-xs font-semibold shadow-sm"
            >
              <FileText className="w-4 h-4" />
              <span>{t.heroBtnEstimator}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
