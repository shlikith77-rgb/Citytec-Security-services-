import React, { useState } from 'react';
import { Landmark, Building2, Cross, Factory, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import { SECTORS_SERVED } from '../data/companyData';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

export const GovtCorporateSectors: React.FC = () => {
  const { language, isHindi } = useLanguage();
  const t = TRANSLATIONS[language];
  const [selectedTab, setSelectedTab] = useState<'All' | 'Government' | 'Private'>('All');

  const filtered = selectedTab === 'All'
    ? SECTORS_SERVED
    : SECTORS_SERVED.filter((s) => s.category === selectedTab);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Landmark':
        return <Landmark className="w-5 h-5 text-blue-700" />;
      case 'Building2':
        return <Building2 className="w-5 h-5 text-indigo-700" />;
      case 'Cross':
        return <Cross className="w-5 h-5 text-rose-600" />;
      case 'Factory':
        return <Factory className="w-5 h-5 text-amber-600" />;
      default:
        return <Building2 className="w-5 h-5 text-blue-700" />;
    }
  };

  return (
    <section id="sectors" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-900 border border-blue-200 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-700" />
            <span>{t.sectorsBadge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1E3F] tracking-tight">
            {t.sectorsTitle}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {t.sectorsSubtitle}
          </p>

          {/* Filter Pills */}
          <div className="inline-flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl border border-slate-200 mt-2">
            <button
              onClick={() => setSelectedTab('All')}
              className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedTab === 'All'
                  ? 'bg-white text-blue-950 shadow-xs border border-slate-200'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {isHindi ? 'सभी क्षेत्र' : 'All Sectors'}
            </button>
            <button
              onClick={() => setSelectedTab('Government')}
              className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedTab === 'Government'
                  ? 'bg-white text-blue-950 shadow-xs border border-slate-200'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {isHindi ? 'सरकारी एवं सार्वजनिक क्षेत्र' : 'Government & Public Sector'}
            </button>
            <button
              onClick={() => setSelectedTab('Private')}
              className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedTab === 'Private'
                  ? 'bg-white text-blue-950 shadow-xs border border-slate-200'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {isHindi ? 'निजी एवं कॉर्पोरेट प्रतिष्ठान' : 'Private Enterprises & MNCs'}
            </button>
          </div>
        </div>

        {/* Sectors Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {filtered.map((sector, index) => (
            <div
              key={index}
              className="bg-slate-50/70 hover:bg-white rounded-2xl p-7 border border-slate-200 hover:border-blue-300 transition-all shadow-xs hover:shadow-lg space-y-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Header Row */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-center">
                      {getIcon(sector.icon)}
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700">
                        {sector.category === 'Government' 
                          ? (isHindi ? 'सार्वजनिक क्षेत्र एवं GeM' : 'Public Sector & GeM')
                          : (isHindi ? 'निजी व्यावसायिक क्षेत्र' : 'Private Commercial')}
                      </span>
                      <h3 className="text-lg font-bold text-[#0B1E3F]">
                        {sector.title}
                      </h3>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10.5px] font-bold bg-blue-100 text-blue-900 border border-blue-200">
                    {sector.highlight}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {sector.description}
                </p>

                {/* Example Deployments List */}
                <div className="space-y-2 pt-2 border-t border-slate-200/70">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    {isHindi ? 'प्रमुख तैनाती परिसर:' : 'Key Deployment Environments:'}
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {sector.examples.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 p-2 rounded-lg bg-white border border-slate-200 text-xs text-slate-700"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        <span className="line-clamp-1">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="pt-4 border-t border-slate-200/70 flex items-center justify-between">
                <span className="text-xs text-slate-500">
                  {isHindi ? '100% वैधानिक ऑडिट एवं देनदारी मुक्ति' : 'Full statutory audit & liability waiver provided'}
                </span>
                <a
                  href="#estimator"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-900 transition-colors"
                >
                  <span>{isHindi ? 'आरएफपी सबमिट करें' : 'Submit RFP'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Government Tender & GeM Special Callout */}
        <div className="mt-12 rounded-2xl bg-[#09172E] text-white p-7 sm:p-8 border border-blue-900 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6 text-left">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/60 border border-blue-700/50 text-[11px] font-bold text-cyan-300">
              <Landmark className="w-3 h-3 text-[#D4AF37]" />
              <span>{isHindi ? 'सरकारी खरीद एवं निविदा सूचना' : 'Government Procurement Notice'}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              {isHindi ? 'सार्वजनिक उपक्रम एवं GeM निविदा पूछताछ' : 'Public Sector & GeM Tender Enquiries'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {isHindi
                ? 'क्या आप सरकारी खरीद अधिकारी या निविदा समिति के सदस्य हैं? सिटीटेक सिक्योरिटी सर्विसेज एलएलपी GeM खरीद या राज्य निविदा बोली के लिए सभी पूर्व-योग्यताएं, न्यूनतम वेतन कोड, ईएसआई/ईपीएफ चालान और जीएसटी नियमों का पूर्ण पालन करती है।'
                : 'Are you a government procurement officer, administrative officer, or tender committee member? CITYTEC SECURITY SERVICES LLP meets all pre-qualification requirements, statutory wage code filings, ESI/EPF challans, and GST compliance for direct GeM purchase or custom RFP bidding.'}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full lg:w-auto">
            <a
              href="#contact"
              className="w-full sm:w-auto text-center px-5 py-3 rounded-xl bg-[#D4AF37] hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-md transition-colors"
            >
              {isHindi ? 'टेंडर डेस्क: 78418 64750' : 'Direct Tender Desk: 78418 64750'}
            </a>
            <a
              href="#estimator"
              className="w-full sm:w-auto text-center px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/20 transition-colors"
            >
              {isHindi ? 'प्रस्ताव अनुमानक खोलें' : 'Open RFP Estimator'}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
