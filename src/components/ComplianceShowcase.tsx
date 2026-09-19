import React from 'react';
import { ShieldCheck, FileCheck, CheckCircle2, Award, UserCheck, Scale, Lock } from 'lucide-react';
import { STATUTORY_CREDENTIALS } from '../data/companyData';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

export const ComplianceShowcase: React.FC = () => {
  const { language, isHindi } = useLanguage();
  const t = TRANSLATIONS[language];

  return (
    <section id="compliance" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>{t.complianceBadge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1E3F] tracking-tight">
            {t.complianceTitle}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {t.complianceSubtitle}
          </p>
        </div>

        {/* 6 Key Statutory Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {STATUTORY_CREDENTIALS.map((cred, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 border border-slate-200 hover:border-blue-300 shadow-xs hover:shadow-md transition-all space-y-3"
            >
              <div className="flex items-center justify-between">
                <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-700">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                  Verified
                </span>
              </div>
              <h3 className="text-base font-bold text-[#0B1E3F]">
                {cred.label}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {cred.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Statutory Guarantee Box */}
        <div className="mt-12 rounded-2xl bg-gradient-to-br from-[#0B1E3F] via-[#0F2850] to-[#0A162B] text-white p-7 sm:p-9 border border-blue-900 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/80 border border-blue-700 text-xs font-semibold text-cyan-300">
                <Scale className="w-3.5 h-3.5" />
                <span>{t.complianceZeroLiability}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {t.complianceGuaranteeTitle}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {t.complianceGuaranteeText}
              </p>
            </div>

            <div className="lg:col-span-4 bg-white/5 border border-white/10 rounded-xl p-5 space-y-3 backdrop-blur-xs">
              <div className="flex items-center gap-2.5 text-xs text-slate-200">
                <UserCheck className="w-4 h-4 text-cyan-300 shrink-0" />
                <span>{isHindi ? 'स्थानीय पुलिस एवं सीआईडी द्वारा पूर्ववृत्त सत्यापन' : 'Police Antecedent Clearances on Record'}</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-200">
                <FileCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{isHindi ? 'बायोमेट्रिक रियल-टाइम उपस्थिति मस्टर' : 'Biometric Real-Time Muster Logs'}</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-200">
                <Lock className="w-4 h-4 text-amber-300 shrink-0" />
                <span>{isHindi ? 'सशस्त्र एवं गैर-सशस्त्र पसारा सुरक्षा प्रशिक्षण' : 'Armed & Unarmed Guard PSARA Training'}</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-200">
                <Award className="w-4 h-4 text-blue-300 shrink-0" />
                <span>{isHindi ? 'आपातकालीन घटना प्रतिक्रिया एवं प्राथमिक उपचार' : 'Emergency Incident Response & First-Aid Trained'}</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
