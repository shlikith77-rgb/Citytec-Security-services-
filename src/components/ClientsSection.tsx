import React, { useState } from 'react';
import { Shield, Award, Landmark, Building, Crosshair, Anchor, Wind, Wrench, Search, CheckCircle2 } from 'lucide-react';
import { CLIENTS_DATA } from '../data/clientsData';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

export const ClientsSection: React.FC = () => {
  const { language, isHindi } = useLanguage();
  const t = TRANSLATIONS[language];
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const filteredClients = selectedCategory === 'ALL'
    ? CLIENTS_DATA
    : CLIENTS_DATA.filter((c) => c.category === selectedCategory);

  const getInsignia = (badgeType: string) => {
    switch (badgeType) {
      case 'army':
        return (
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-900 to-amber-900 border border-amber-400/40 p-2 flex items-center justify-center text-amber-300 shadow-md">
            {/* Crossed swords emblem */}
            <svg viewBox="0 0 24 24" className="w-7 h-7 stroke-current fill-none stroke-[1.7]" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14.5 17.5L3 6V3h3l11.5 11.5" />
              <path d="M13 19l6 2 2-6-4.5-4.5" />
              <path d="M9.5 17.5L21 6V3h-3L6.5 14.5" />
              <path d="M11 19l-6 2-2-6 4.5-4.5" />
              <circle cx="12" cy="7" r="1" className="fill-current" />
            </svg>
          </div>
        );
      case 'navy':
        return (
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-950 to-cyan-950 border border-cyan-400/40 p-2 flex items-center justify-center text-cyan-300 shadow-md">
            <Anchor className="w-7 h-7" />
          </div>
        );
      case 'airforce':
        return (
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-900 to-blue-950 border border-sky-400/40 p-2 flex items-center justify-center text-sky-300 shadow-md">
            <svg viewBox="0 0 24 24" className="w-7 h-7 stroke-current fill-none stroke-[1.8]" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="9" />
              <circle cx="12" cy="12" r="5" className="fill-amber-400/30" />
              <circle cx="12" cy="12" r="2" className="fill-current" />
              <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
            </svg>
          </div>
        );
      case 'drdo':
        return (
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-950 to-blue-950 border border-emerald-400/40 p-2 flex items-center justify-center text-emerald-300 shadow-md">
            <Crosshair className="w-7 h-7" />
          </div>
        );
      case 'command':
        return (
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0B1E3F] to-red-950 border border-amber-400/50 p-2 flex items-center justify-center text-amber-300 shadow-md">
            <Shield className="w-7 h-7" />
          </div>
        );
      case 'dgqa':
        return (
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-900 to-blue-950 border border-blue-400/40 p-2 flex items-center justify-center text-amber-400 shadow-md">
            <Award className="w-7 h-7" />
          </div>
        );
      case 'ordnance':
      default:
        return (
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-950 to-slate-900 border border-amber-500/40 p-2 flex items-center justify-center text-amber-400 shadow-md">
            <svg viewBox="0 0 24 24" className="w-7 h-7 stroke-current fill-none stroke-[1.7]" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
            </svg>
          </div>
        );
    }
  };

  return (
    <section id="clients" className="py-20 bg-gradient-to-b from-slate-900 via-[#0B1E3F] to-[#0A162B] text-white border-b border-blue-900/50 relative overflow-hidden">
      {/* Background Subtle Insignia Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-amber-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/80 border border-blue-500/30 text-xs font-bold text-amber-300 uppercase tracking-wider">
            <Shield className="w-3.5 h-3.5 text-amber-400" />
            <span>{t.clientsBadge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.clientsTitle}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {t.clientsSubtitle}
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
          <button
            onClick={() => setSelectedCategory('ALL')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              selectedCategory === 'ALL'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/50 border border-blue-400/40'
                : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10'
            }`}
          >
            {t.clientsTabAll}
          </button>
          <button
            onClick={() => setSelectedCategory('Armed Forces')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              selectedCategory === 'Armed Forces'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/50 border border-blue-400/40'
                : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10'
            }`}
          >
            {t.clientsTabArmedForces}
          </button>
          <button
            onClick={() => setSelectedCategory('Ordnance')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              selectedCategory === 'Ordnance'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/50 border border-blue-400/40'
                : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10'
            }`}
          >
            {t.clientsTabOrdnance}
          </button>
          <button
            onClick={() => setSelectedCategory('R&D / DGQA')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              selectedCategory === 'R&D / DGQA'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/50 border border-blue-400/40'
                : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10'
            }`}
          >
            {t.clientsTabDgqaDrdo}
          </button>
        </div>

        {/* 11 Client Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredClients.map((client, index) => (
            <div
              key={client.id}
              className="group relative bg-[#0D2246]/70 hover:bg-[#0E2854] border border-blue-800/40 hover:border-blue-500/60 rounded-2xl p-5 sm:p-6 transition-all duration-200 shadow-md hover:shadow-xl text-left flex flex-col justify-between"
            >
              {/* Card Header with Insignia & Category */}
              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3.5">
                    {getInsignia(client.badgeType)}
                    <div>
                      <span className="inline-block text-[10px] font-bold text-amber-300 uppercase tracking-wider px-2 py-0.5 rounded bg-amber-950/60 border border-amber-500/30">
                        {client.category}
                      </span>
                      <div className="text-xs text-blue-200 font-mono mt-0.5">
                        REF: {client.badgeCode}
                      </div>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">
                    #{String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Client Official Title */}
                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-amber-200 transition-colors tracking-tight">
                  {client.name}
                </h3>
                <div className="text-xs text-slate-300 font-medium mt-1">
                  {client.shortName}
                </div>

                {/* Scope of Engagement */}
                <div className="mt-4 pt-3 border-t border-blue-900/60 space-y-2">
                  <div className="text-[11px] text-slate-300 flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong className="text-white">{t.clientsScopeLabel}:</strong> {client.scope}</span>
                  </div>
                </div>
              </div>

              {/* Card Footer with Location */}
              <div className="mt-4 pt-3 border-t border-blue-900/60 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1">
                  <Landmark className="w-3 h-3 text-cyan-400" />
                  <span>{client.location}</span>
                </span>
                <span className="text-emerald-400 font-bold text-[10px] uppercase">
                  Verified Site
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Defense & Institutional Credibility Strip */}
        <div className="mt-12 p-5 rounded-xl bg-blue-950/60 border border-blue-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300 text-left">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-300 shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-white text-sm">
                {isHindi ? 'रक्षा एवं सरकारी सुरक्षा मानकों में पूर्ण प्रवीणता' : 'Specialized Defense & Ordnance Protocol Readiness'}
              </div>
              <div className="text-[11px] text-slate-400">
                {isHindi
                  ? 'अति-संवेदनशील परिसरों, आयुध कारखानों एवं सैन्य इकाइयों के लिए कठोर पुलिस सत्यापन व अनुशासित कार्यबल।'
                  : 'High-security gatehouse protocol, police antecedent clearances, and emergency reserve response for defense installations.'}
              </div>
            </div>
          </div>
          <a
            href="#contact"
            className="shrink-0 px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors"
          >
            {isHindi ? 'टेंडर / RFP संपर्क करें' : 'Defense RFP Desk'}
          </a>
        </div>

      </div>
    </section>
  );
};
