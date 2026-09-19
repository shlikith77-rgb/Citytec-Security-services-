import React from 'react';
import { Shield, Building, Award, CheckCircle2, Phone, MapPin, Users, Calendar, Briefcase, UserCheck, BadgeCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

export const AboutCompany: React.FC = () => {
  const { language, isHindi } = useLanguage();
  const t = TRANSLATIONS[language];

  return (
    <section id="about" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
          
          {/* Left: Imagery Composition & Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
              <img
                src="https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=1000&q=80"
                alt="CITYTEC Corporate Security & Facility Command"
                className="w-full h-[440px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/40 to-transparent" />

              {/* Floating Corporate Stamp */}
              <div className="absolute top-4 left-4 p-3 rounded-xl bg-white/95 backdrop-blur-xs border border-slate-200 shadow-lg text-left">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-900 text-amber-300 flex items-center justify-center font-black text-xs font-['Cinzel',serif]">
                    CT
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-blue-950 uppercase tracking-wider">
                      CITYTEC LLP
                    </div>
                    <div className="text-[11px] font-semibold text-slate-500">
                      {isHindi ? 'निगमन वर्ष: 2026 • पुणे' : 'Inc. Year: 2026 • Pune'}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Card Overlay */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-white/10 text-white space-y-1 text-left">
                <div className="text-xs font-bold text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5" />
                  <span>{isHindi ? 'अनुभवी परिचालन कर्मचारी' : 'Experienced Operational Staff'}</span>
                </div>
                <div className="text-sm font-bold text-white">
                  {isHindi ? 'रक्षा, सरकारी एवं निजी क्षेत्र की सेवाएं' : 'Defense, Govt & Enterprise Deployments'}
                </div>
                <div className="text-xs text-slate-300 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-cyan-400" />
                  <span>Jaiganeshvishwa, Nr. Kirti Hotel, Pune</span>
                </div>
              </div>
            </div>

            {/* Subtle floating gold seal */}
            <div className="hidden sm:flex absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-br from-[#0B1E3F] to-[#153465] border-2 border-[#D4AF37] p-2 shadow-xl items-center justify-center text-center flex-col">
              <span className="text-[9px] font-bold text-[#D4AF37] uppercase tracking-widest">
                VERIFIED
              </span>
              <span className="text-xs font-black text-white">
                100%
              </span>
              <span className="text-[8px] text-blue-200 uppercase">
                STATUTORY
              </span>
            </div>
          </div>

          {/* Right: Institutional Profile & Value Narrative */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-900 border border-blue-200 text-xs font-bold uppercase tracking-wider">
                <Building className="w-3.5 h-3.5 text-blue-700" />
                <span>{t.aboutBadge}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1E3F] tracking-tight">
                {t.aboutTitle}
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                {t.aboutText1}
              </p>
            </div>

            {/* Core Values Breakdown */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-blue-900 font-bold text-sm">
                  <Shield className="w-4 h-4 text-blue-600" />
                  <span>{t.aboutInstitutionalAuthority}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {t.aboutInstitutionalAuthorityText}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-blue-900 font-bold text-sm">
                  <Users className="w-4 h-4 text-blue-600" />
                  <span>{t.aboutTrainedWorkforce}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {t.aboutTrainedWorkforceText}
                </p>
              </div>
            </div>

            {/* Strategic Pillars checklist */}
            <div className="space-y-2.5 pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                {t.aboutWhyChooseTitle}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{t.aboutReason1}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{t.aboutReason2}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{t.aboutReason3}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{t.aboutReason4}</span>
                </div>
              </div>
            </div>

            {/* Registered Address & Direct Phone Bar */}
            <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200/70 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
              <div className="space-y-0.5">
                <div className="font-bold text-blue-950">
                  {isHindi ? 'पुणे पंजीकृत कार्यालय:' : 'Pune Registered Office:'}
                </div>
                <div className="text-slate-600">
                  {COMPANY_INFO.address.fullFormatted}
                </div>
              </div>
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0B1E3F] hover:bg-blue-900 text-white font-bold transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                <span>{isHindi ? 'कॉल करें' : 'Call'} {COMPANY_INFO.phone}</span>
              </a>
            </div>

          </div>

        </div>

        {/* Executive Leadership & Board of Directors Section */}
        <div className="mt-16 pt-12 border-t border-slate-200 text-left">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-900 border border-amber-200/80 text-xs font-bold uppercase tracking-wider mb-2">
                <Users className="w-3.5 h-3.5 text-amber-700" />
                <span>{t.leadershipBadge}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1E3F] tracking-tight">
                {t.leadershipTitle}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mt-1.5 leading-relaxed">
                {t.leadershipSubtitle}
              </p>
            </div>
            <div className="text-[11px] text-slate-500 bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 shrink-0 flex items-center gap-2">
              <BadgeCheck className="w-4 h-4 text-emerald-600" />
              <span>{isHindi ? 'एमसीए पंजीकृत नामित भागीदार (LLP)' : 'MCA Registered LLP Designated Partners'}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Director 1: Ajay Kumar Ahir */}
            <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50/40 rounded-2xl p-6 sm:p-7 border-2 border-blue-900/20 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-bl-full pointer-events-none" />
              
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-14 h-14 rounded-2xl bg-[#0B1E3F] text-amber-300 font-extrabold text-lg flex items-center justify-center shadow-md font-['Cinzel',serif] border border-amber-400/30">
                    AA
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-blue-900 text-amber-300 text-[10.5px] font-bold uppercase tracking-wider">
                      <Shield className="w-3 h-3 text-amber-300" />
                      <span>{t.directorLabel}</span>
                    </div>
                    <h4 className="text-xl sm:text-2xl font-black text-[#0B1E3F] mt-1 tracking-tight">
                      {isHindi ? 'अजय कुमार अहिर' : 'Ajay Kumar Ahir'}
                    </h4>
                    <p className="text-xs font-semibold text-blue-900">
                      {isHindi ? 'नामित भागीदार एवं निदेशक' : 'Designated Partner & Director'}
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-3 pt-3 border-t border-slate-200 text-xs text-slate-700">
                <div className="font-medium text-slate-800 leading-relaxed">
                  {isHindi 
                    ? 'कंपनी के रणनीतिक नेतृत्व, परिचालन कमान एवं रक्षा व उच्च सुरक्षा प्रतिष्ठानों की सुरक्षा संरचना के मुख्य सूत्रधार।'
                    : 'Leads strategic operational command, defense installations liaison, armed security architecture, and regulatory PSARA oversight.'}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] pt-1">
                  <div className="flex items-center gap-1.5 text-slate-600 bg-white/80 p-2 rounded-lg border border-slate-200/70">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{isHindi ? 'सुरक्षा रणनीति एवं कमान' : 'Security Command Strategy'}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-600 bg-white/80 p-2 rounded-lg border border-slate-200/70">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{isHindi ? 'रक्षा एवं टेंडर संबंध' : 'Defense & Tender Affairs'}</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/70 flex items-center justify-between text-[10.5px] text-slate-500 font-medium">
                <span>CITYTEC SECURITY SERVICES LLP</span>
                <span className="text-blue-900 font-bold">Pune, Maharashtra</span>
              </div>
            </div>

            {/* Director 2: Jai kumar yadav */}
            <div className="bg-gradient-to-br from-slate-50 via-white to-cyan-50/40 rounded-2xl p-6 sm:p-7 border-2 border-blue-900/20 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-bl-full pointer-events-none" />
              
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-14 h-14 rounded-2xl bg-[#0F284E] text-cyan-300 font-extrabold text-lg flex items-center justify-center shadow-md font-['Cinzel',serif] border border-cyan-400/30">
                    JY
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-slate-900 text-cyan-300 text-[10.5px] font-bold uppercase tracking-wider">
                      <Briefcase className="w-3 h-3 text-cyan-300" />
                      <span>{t.secondDirectorLabel}</span>
                    </div>
                    <h4 className="text-xl sm:text-2xl font-black text-[#0B1E3F] mt-1 tracking-tight">
                      {isHindi ? 'जय कुमार यादव' : 'Jai kumar yadav'}
                    </h4>
                    <p className="text-xs font-semibold text-blue-900">
                      {isHindi ? 'नामित भागीदार एवं द्वितीय निदेशक' : 'Designated Partner & Second Director'}
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-3 pt-3 border-t border-slate-200 text-xs text-slate-700">
                <div className="font-medium text-slate-800 leading-relaxed">
                  {isHindi 
                    ? 'एकीकृत फैसिलिटी प्रबंधन, यंत्रीकृत हाउसकीपिंग लॉजिस्टिक्स, कार्यबल आपूर्ति एवं 100% वैधानिक श्रम अनुपालन के प्रमुख।'
                    : 'Directs integrated facility services, mechanized corporate housekeeping logistics, talent outsourcing pipelines, and statutory wage code compliances.'}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] pt-1">
                  <div className="flex items-center gap-1.5 text-slate-600 bg-white/80 p-2 rounded-lg border border-slate-200/70">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{isHindi ? 'फैसिलिटी एवं कार्यबल आपूर्ति' : 'Facility & Manpower Ops'}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-600 bg-white/80 p-2 rounded-lg border border-slate-200/70">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{isHindi ? '100% वैधानिक अनुपालन' : '100% Statutory Compliance'}</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/70 flex items-center justify-between text-[10.5px] text-slate-500 font-medium">
                <span>CITYTEC SECURITY SERVICES LLP</span>
                <span className="text-blue-900 font-bold">Pune, Maharashtra</span>
              </div>
            </div>

          </div>

          <div className="mt-4 p-3 rounded-xl bg-blue-50/60 border border-blue-200/60 text-center text-xs text-slate-600">
            <span className="font-semibold text-blue-950">{isHindi ? 'एलएलपी कॉर्पोरेट विवरण:' : 'LLP Corporate Governance:'}</span>{' '}
            {isHindi 
              ? 'कंपनी निदेशक श्री अजय कुमार अहिर एवं श्री जय कुमार यादव के आधिकारिक नेतृत्व में संचालित है। पंजीकृत पता: दुकान नं. 130, एसएन 46, जयगणेशविश्व, कीर्ति होटल के पास, पुणे 411015।'
              : 'CITYTEC SECURITY SERVICES LLP operates under the verified governance of Director Ajay Kumar Ahir and Second Director Jai kumar yadav. Registered Office: Shop No. 130, SN 46, Jaiganeshvishwa, Nr. Kirti Hotel, Pune 411015.'}
          </div>
        </div>

      </div>
    </section>
  );
};
