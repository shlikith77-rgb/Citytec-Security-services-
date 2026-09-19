import React from 'react';
import { Shield, Phone, MapPin, Mail, ChevronRight, ArrowUp, Lock, Award, Heart } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { COMPANY_INFO } from '../data/companyData';
import { SERVICES_DATA } from '../data/servicesData';

interface FooterProps {
  customLogoUrl: string | null;
  onOpenLogoModal: () => void;
  onSelectServiceTitle: (serviceTitle: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  customLogoUrl,
  onOpenLogoModal,
  onSelectServiceTitle,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#071324] text-slate-300 pt-16 pb-12 border-t border-blue-900/60 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-blue-900/50">
          
          {/* Column 1: Company Profile (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <BrandLogo
              customLogoUrl={customLogoUrl}
              variant="footer"
              onClickUpload={onOpenLogoModal}
            />
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm pt-2">
              <strong className="text-white font-medium">{COMPANY_INFO.legalName}</strong> is an institutional provider of manned guarding, mechanized facility maintenance, hospital sanitization, and specialized manpower outsourcing serving both government institutions and private-sector corporations across Maharashtra.
            </p>

            <div className="space-y-2 pt-2 text-xs">
              <div className="flex items-center gap-2 text-blue-300 font-semibold">
                <Shield className="w-3.5 h-3.5 text-cyan-400" />
                <span>PSARA Maharashtra &amp; GeM Ready</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <Lock className="w-3.5 h-3.5 text-amber-400" />
                <span>100% Police Verified &amp; Statutory Compliant</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenLogoModal}
                className="text-[11px] text-amber-300/80 hover:text-amber-200 underline transition-colors"
              >
                Upload / Preview Official Logo
              </button>
            </div>
          </div>

          {/* Column 2: The 8 Services (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>Core Services (8 Disciplines)</span>
            </h4>
            <ul className="grid grid-cols-1 gap-2 text-xs text-slate-400">
              {SERVICES_DATA.map((srv) => (
                <li key={srv.id}>
                  <button
                    onClick={() => onSelectServiceTitle(srv.title)}
                    className="hover:text-cyan-300 transition-colors flex items-center gap-1.5 text-left group"
                  >
                    <ChevronRight className="w-3 h-3 text-blue-500 group-hover:translate-x-0.5 transition-transform" />
                    <span>0{srv.number}. {srv.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Corporate Address & Dispatch (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
              <span>Pune Registered Office</span>
            </h4>

            <div className="p-4 rounded-xl bg-blue-950/60 border border-blue-800/40 text-xs space-y-2.5">
              <div className="flex items-start gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <div className="leading-relaxed">
                  <strong className="text-white">SHOP NO. 130, SN 46</strong>,<br />
                  JAIGANESHVISHWA, NR. KIRTI HOTEL,<br />
                  PUNE, MAHARASHTRA, INDIA – 411015
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2 border-t border-blue-900/60 text-slate-200">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <div>
                  <span className="text-[11px] text-slate-400">Direct Helpline: </span>
                  <a
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="font-bold text-white hover:text-cyan-300 underline ml-1"
                  >
                    {COMPANY_INFO.phoneFormatted}
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-1">
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="flex-1 py-2 px-3 rounded-lg bg-blue-700 hover:bg-blue-600 text-white text-xs font-bold text-center shadow-xs transition-colors"
              >
                Emergency Dispatch
              </a>
              <a
                href="#estimator"
                className="flex-1 py-2 px-3 rounded-lg bg-[#D4AF37] hover:bg-amber-400 text-slate-950 text-xs font-bold text-center shadow-xs transition-colors"
              >
                Request RFP
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Legal Notice & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="text-center sm:text-left space-y-1">
            <p>
              © {new Date().getFullYear()} {COMPANY_INFO.legalName}. All Rights Reserved.
            </p>
            <p className="text-[11px] text-slate-400">
              Private Security, Housekeeping, Facility Management &amp; Manpower Outsourcing. Pune, Maharashtra.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-950 hover:bg-blue-900 text-blue-200 hover:text-white border border-blue-800/60 text-xs font-semibold transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
