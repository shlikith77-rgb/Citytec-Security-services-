import React from 'react';
import { Shield, Award, CheckCircle2, Phone, ArrowRight, Building, FileCheck } from 'lucide-react';
import { COMPANY_INFO, COMPANY_STATS } from '../data/companyData';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

interface HeroProps {
  onOpenEstimator?: () => void;
  onExploreServices?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEstimator, onExploreServices }) => {
  const { language, isHindi } = useLanguage();
  const t = TRANSLATIONS[language];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#071426] via-[#0B1E3F] to-[#0A1830] text-white pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-blue-900/40">
      {/* Precision Background Geometry & Subtle Aura */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 right-0 w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-3xl" />
        <div className="absolute top-1/2 -left-40 w-[500px] h-[500px] rounded-full bg-cyan-500/5 blur-3xl" />
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #38BDF8 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Corporate Value Proposition */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7 text-left">
            {/* Trust Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-400/30 text-xs font-semibold text-blue-200 shadow-inner">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
              <span className="text-[#D4AF37] font-bold">CITYTEC</span>
              <span className="text-blue-400">•</span>
              <span className="text-slate-200">{t.heroBadge}</span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.18]">
                {t.heroTitlePrefix} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-cyan-200 to-white">{t.heroTitleHighlight}</span>
              </h1>
              <p className="text-sm sm:text-base lg:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
                {t.heroSubtitle}
              </p>
            </div>

            {/* Dual Sector Badge */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-blue-900/30 border border-blue-800/50 backdrop-blur-xs">
                <div className="w-9 h-9 rounded-lg bg-blue-700/30 border border-blue-500/30 flex items-center justify-center text-cyan-300 shrink-0">
                  <Building className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">{t.heroSectorGov}</h4>
                  <p className="text-[11px] text-slate-300">{t.heroSectorGovSub}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-blue-900/30 border border-blue-800/50 backdrop-blur-xs">
                <div className="w-9 h-9 rounded-lg bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-amber-300 shrink-0">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">{t.heroSectorPvt}</h4>
                  <p className="text-[11px] text-slate-300">{t.heroSectorPvtSub}</p>
                </div>
              </div>
            </div>

            {/* Key Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#estimator"
                onClick={onOpenEstimator}
                className="inline-flex items-center gap-2.5 px-5 sm:px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 hover:from-blue-500 hover:to-indigo-600 text-white font-bold text-xs sm:text-sm shadow-lg shadow-blue-900/40 border border-blue-400/30 transition-all transform hover:-translate-y-0.5"
              >
                <span>{t.heroBtnEstimator}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#services"
                onClick={onExploreServices}
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs sm:text-sm border border-white/20 backdrop-blur-xs transition-colors"
              >
                <span>{t.heroBtnServices}</span>
              </a>

              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="inline-flex items-center gap-2 px-3 py-3 text-xs font-medium text-cyan-300 hover:text-cyan-200 transition-colors"
              >
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                <span className="underline underline-offset-4">{t.heroDirectDispatch}: {COMPANY_INFO.phoneFormatted}</span>
              </a>
            </div>

            {/* Micro Trust Proof Bar */}
            <div className="pt-4 border-t border-blue-900/60 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-slate-400">
              <div className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>{t.heroPoliceVerified}</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>{t.heroPsaraCompliant}</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>{t.heroStatutoryGuaranteed}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Executive Corporate Credentials Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-[#D4AF37]/50 to-cyan-500 rounded-2xl blur-xs opacity-60" />
              
              <div className="relative bg-[#0D2144] rounded-2xl p-5 sm:p-7 border border-blue-400/20 shadow-2xl space-y-5 sm:space-y-6">
                
                {/* Header of the Card */}
                <div className="flex items-center justify-between border-b border-blue-800/60 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-900/60 border border-amber-400/30 flex items-center justify-center text-amber-400">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
                        {t.heroCardTitle}
                      </h3>
                      <p className="text-[11px] text-blue-200">
                        {t.heroCardSub}
                      </p>
                    </div>
                  </div>
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-950/80 text-emerald-300 border border-emerald-500/40">
                    {t.heroActive247}
                  </span>
                </div>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-2 gap-3">
                  {COMPANY_STATS.map((stat, idx) => (
                    <div
                      key={idx}
                      className="p-3 sm:p-3.5 rounded-xl bg-blue-950/60 border border-blue-800/40 text-left space-y-1"
                    >
                      <div className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-baseline gap-1">
                        <span>{stat.value}</span>
                        {idx === 0 && <span className="text-xs text-emerald-400">✓</span>}
                      </div>
                      <div className="text-xs font-semibold text-blue-200">{stat.label}</div>
                      <div className="text-[10px] text-slate-400">{stat.subtext}</div>
                    </div>
                  ))}
                </div>

                {/* Statutory Quick Checks */}
                <div className="space-y-2 pt-1">
                  <div className="text-xs font-bold text-slate-300 tracking-wider uppercase flex items-center gap-2">
                    <FileCheck className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{t.heroComplianceStandard}</span>
                  </div>
                  
                  <div className="space-y-1.5 text-xs text-slate-300">
                    <div className="flex items-center justify-between p-2 rounded-lg bg-blue-900/20 border border-blue-800/30">
                      <span className="text-[11px] sm:text-[11.5px] text-slate-300">{t.heroPsaraCheck}</span>
                      <span className="text-[10.5px] font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded">Verified</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded-lg bg-blue-900/20 border border-blue-800/30">
                      <span className="text-[11px] sm:text-[11.5px] text-slate-300">{t.heroGemCheck}</span>
                      <span className="text-[10.5px] font-bold text-cyan-300 bg-cyan-950/60 px-2 py-0.5 rounded">Tender Ready</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded-lg bg-blue-900/20 border border-blue-800/30">
                      <span className="text-[11px] sm:text-[11.5px] text-slate-300">{t.heroEsicCheck}</span>
                      <span className="text-[10.5px] font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded">100% Enrolled</span>
                    </div>
                  </div>
                </div>

                {/* Registered Office Fast Link */}
                <div className="pt-2 border-t border-blue-800/60 flex items-center justify-between text-xs">
                  <span className="text-slate-400 text-[11px]">
                    {t.heroOfficeLine}
                  </span>
                  <a
                    href="#contact"
                    className="text-amber-300 hover:text-amber-200 font-medium text-[11px] underline"
                  >
                    {t.heroOfficeLink}
                  </a>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
