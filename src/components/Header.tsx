import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Shield, Menu, X, ChevronRight, FileText, Upload } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { COMPANY_INFO } from '../data/companyData';

interface HeaderProps {
  customLogoUrl: string | null;
  onOpenLogoModal: () => void;
  onNavigateToService?: (serviceId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  customLogoUrl,
  onOpenLogoModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Services (8)', href: '#services' },
    { name: 'Govt & Enterprise', href: '#sectors' },
    { name: 'Compliance & Trust', href: '#compliance' },
    { name: 'RFP Estimator', href: '#estimator' },
    { name: 'Contact Pune HQ', href: '#contact' },
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
                <strong className="text-white font-medium">Pune HQ:</strong> Jaiganeshvishwa, Nr. Kirti Hotel, Pune – 411015
              </span>
            </div>
            <div className="h-3 w-px bg-slate-700 hidden lg:block" />
            <div className="hidden lg:flex items-center gap-1.5 text-blue-300 text-[11px] font-medium tracking-wide">
              <Shield className="w-3.5 h-3.5 text-cyan-400" />
              <span>PSARA Compliant • GeM Tenders Ready • Police Verified</span>
            </div>
          </div>

          <div className="flex items-center gap-5">
            {/* Logo Preview utility trigger */}
            <button
              onClick={onOpenLogoModal}
              className="inline-flex items-center gap-1.5 text-[11px] text-amber-300 hover:text-amber-200 transition-colors font-medium px-2 py-0.5 rounded bg-amber-950/40 border border-amber-500/30"
              title="Click to preview your official company logo"
            >
              <Upload className="w-3 h-3" />
              <span>Official Logo Preview</span>
            </button>

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
            ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-slate-900/5 border-slate-200 py-3'
            : 'bg-white/90 backdrop-blur-sm border-slate-100 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center group">
            <BrandLogo
              customLogoUrl={customLogoUrl}
              variant="light"
              onClickUpload={onOpenLogoModal}
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-slate-700 hover:text-blue-700 transition-colors py-1 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-700 to-cyan-500 transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Header Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-[#0B1E3F] bg-blue-50/80 hover:bg-blue-100 border border-blue-200/70 rounded-lg transition-colors shadow-xs"
            >
              <Phone className="w-3.5 h-3.5 text-blue-700" />
              <span>{COMPANY_INFO.phone}</span>
            </a>

            <a
              href="#estimator"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-[#0B1E3F] via-[#153465] to-[#1E40AF] hover:from-[#0F2850] hover:to-[#2563EB] rounded-lg shadow-sm shadow-blue-900/20 transition-all transform hover:-translate-y-0.5"
            >
              <FileText className="w-3.5 h-3.5 text-cyan-300" />
              <span>Request RFP Quote</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
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
        <div className="lg:hidden bg-white border-b border-slate-200 shadow-xl px-4 pt-3 pb-6 animate-in slide-in-from-top duration-200">
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
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenLogoModal();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-amber-50 text-amber-900 border border-amber-200 text-xs font-semibold"
            >
              <Upload className="w-3.5 h-3.5 text-amber-700" />
              <span>Preview Official Company Logo</span>
            </button>

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
              <span>Open Manpower RFP Estimator</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
