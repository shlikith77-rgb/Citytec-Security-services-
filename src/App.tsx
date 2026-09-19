import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustPillars } from './components/TrustPillars';
import { ServicesSection } from './components/ServicesSection';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { GovtCorporateSectors } from './components/GovtCorporateSectors';
import { ComplianceShowcase } from './components/ComplianceShowcase';
import { RFPQuoteEstimator } from './components/RFPQuoteEstimator';
import { AboutCompany } from './components/AboutCompany';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { LogoUploadModal } from './components/LogoUploadModal';
import { ServiceItem } from './types';
import { SERVICES_DATA } from './data/servicesData';
import { COMPANY_INFO } from './data/companyData';
import { Phone, MessageSquare, ArrowUp } from 'lucide-react';

export default function App() {
  const [customLogoUrl, setCustomLogoUrl] = useState<string | null>(() => {
    try {
      return localStorage.getItem('citytec_custom_logo') || null;
    } catch {
      return null;
    }
  });

  const [isLogoModalOpen, setIsLogoModalOpen] = useState(false);
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);
  const [preselectedServiceForEstimator, setPreselectedServiceForEstimator] = useState<string>('Security Services');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleApplyLogo = (newLogoUrl: string | null) => {
    setCustomLogoUrl(newLogoUrl);
    try {
      if (newLogoUrl) {
        localStorage.setItem('citytec_custom_logo', newLogoUrl);
      } else {
        localStorage.removeItem('citytec_custom_logo');
      }
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
  };

  const handleSelectServiceForModal = (service: ServiceItem) => {
    setActiveModalService(service);
  };

  const handleQuickQuote = (serviceTitle: string) => {
    setPreselectedServiceForEstimator(serviceTitle);
    const estimatorEl = document.getElementById('estimator');
    if (estimatorEl) {
      estimatorEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleServiceSelectFromFooter = (serviceTitle: string) => {
    const matched = SERVICES_DATA.find((s) => s.title === serviceTitle);
    if (matched) {
      setActiveModalService(matched);
    } else {
      handleQuickQuote(serviceTitle);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-900 font-['Plus_Jakarta_Sans',sans-serif]">
      {/* 1. Header with Top Emergency Dispatch Bar & Nav */}
      <Header
        customLogoUrl={customLogoUrl}
        onOpenLogoModal={() => setIsLogoModalOpen(true)}
      />

      {/* 2. Hero Section with Institutional Grade Value Proposition */}
      <main className="flex-1">
        <Hero
          onOpenEstimator={() => handleQuickQuote('Security Services')}
          onExploreServices={() => {
            const el = document.getElementById('services');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 3. Core Pillars: Trust • Security • Professionalism • Reliability • Experience • Quality */}
        <TrustPillars />

        {/* 4. The 8 Core Services Showcase */}
        <ServicesSection
          onSelectService={handleSelectServiceForModal}
          onQuickQuote={handleQuickQuote}
        />

        {/* 5. Government & Private Sector Readiness */}
        <GovtCorporateSectors />

        {/* 6. Statutory Compliance & Zero Client Liability */}
        <ComplianceShowcase />

        {/* 7. Interactive Corporate RFP & Manpower Estimator */}
        <RFPQuoteEstimator
          preselectedService={preselectedServiceForEstimator}
        />

        {/* 8. Executive Company Profile & Pune Headquarters */}
        <AboutCompany />

        {/* 9. Official Registered Address & Contact Desk */}
        <ContactSection />
      </main>

      {/* 10. Institutional Footer */}
      <Footer
        customLogoUrl={customLogoUrl}
        onOpenLogoModal={() => setIsLogoModalOpen(true)}
        onSelectServiceTitle={handleServiceSelectFromFooter}
      />

      {/* Service Detail Modal */}
      <ServiceDetailModal
        service={activeModalService}
        onClose={() => setActiveModalService(null)}
        onSelectForQuote={(serviceTitle) => handleQuickQuote(serviceTitle)}
      />

      {/* Logo Customizer / Upload Preview Modal */}
      <LogoUploadModal
        isOpen={isLogoModalOpen}
        onClose={() => setIsLogoModalOpen(false)}
        currentLogo={customLogoUrl}
        onApplyLogo={handleApplyLogo}
      />

      {/* Floating Action Speed-Dial for Mobile & Desktop */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2.5">
        {/* WhatsApp Quick Dispatch Button */}
        <a
          href={`https://wa.me/917841864750?text=${encodeURIComponent(
            'Hello CITYTEC SECURITY SERVICES LLP, I would like to inquire about your corporate security and facility management services in Pune.'
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-950/20 border border-emerald-400/40 text-xs font-bold transition-all transform hover:scale-105 group"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare className="w-4 h-4" />
          <span className="hidden sm:inline">WhatsApp Dispatch</span>
        </a>

        {/* Direct Call Button */}
        <a
          href={`tel:${COMPANY_INFO.phone}`}
          className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-[#0B1E3F] hover:bg-blue-900 text-white shadow-lg shadow-blue-950/30 border border-blue-400/30 text-xs font-bold transition-all transform hover:scale-105"
          aria-label="Direct Call Pune HQ"
        >
          <Phone className="w-4 h-4 text-cyan-400" />
          <span className="hidden sm:inline">Call: {COMPANY_INFO.phoneFormatted}</span>
        </a>

        {/* Scroll To Top */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-full bg-white text-slate-700 hover:text-blue-700 border border-slate-200 shadow-md hover:bg-slate-50 transition-all"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}
