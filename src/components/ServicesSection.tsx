import React, { useState } from 'react';
import { 
  ShieldCheck, 
  UserCheck, 
  Sparkles, 
  Trees, 
  Coffee, 
  Cross, 
  Wrench, 
  Briefcase, 
  ArrowUpRight, 
  Layers
} from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';
import { ServiceItem } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';
import { HINDI_SERVICES_MAP } from '../data/hindiData';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onQuickQuote: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onQuickQuote,
}) => {
  const { language, isHindi } = useLanguage();
  const t = TRANSLATIONS[language];
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    { id: 'All', label: t.servicesFilterAll },
    { id: 'Security', label: t.servicesFilterSecurity },
    { id: 'Facility', label: t.servicesFilterFacility },
    { id: 'Manpower', label: t.servicesFilterManpower },
    { id: 'Specialized', label: t.servicesFilterSpecialized },
  ];

  const filteredServices = activeCategory === 'All'
    ? SERVICES_DATA
    : SERVICES_DATA.filter((s) => s.category === activeCategory || (activeCategory === 'Specialized' && (s.category === 'Specialized' || s.id === 'garden-maintenance-development')));

  const renderIcon = (name: string) => {
    switch (name) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-blue-600" />;
      case 'UserCheck':
        return <UserCheck className="w-5 h-5 text-blue-700" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-cyan-600" />;
      case 'Cross':
        return <Cross className="w-5 h-5 text-rose-600" />;
      case 'Trees':
        return <Trees className="w-5 h-5 text-emerald-600" />;
      case 'Coffee':
        return <Coffee className="w-5 h-5 text-amber-600" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-indigo-600" />;
      case 'Briefcase':
        return <Briefcase className="w-5 h-5 text-sky-600" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 text-left">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-900 border border-blue-200 text-xs font-bold uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5 text-blue-700" />
              <span>{t.servicesBadge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1E3F] tracking-tight">
              {t.servicesTitle}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {t.servicesSubtitle}
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-white rounded-xl border border-slate-200 shadow-xs self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeCategory === cat.id
                    ? 'bg-[#0B1E3F] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredServices.map((service) => {
            const hindiData = HINDI_SERVICES_MAP[service.id];
            const displayTitle = isHindi && hindiData?.title ? hindiData.title : service.title;
            const displayShortDesc = isHindi && hindiData?.shortDescription ? hindiData.shortDescription : service.shortDescription;

            return (
              <div
                key={service.id}
                className="group bg-white rounded-2xl border border-slate-200 hover:border-blue-300 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden text-left"
              >
                {/* Card Image Banner */}
                <div className="relative h-44 w-full overflow-hidden bg-slate-100 shrink-0">
                  <img
                    src={service.image}
                    alt={displayTitle}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E3F]/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                  {/* Service Tag & Category */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5">
                    <span className="px-2 py-0.5 rounded-md bg-[#0B1E3F]/90 backdrop-blur-xs text-[10px] font-bold text-white border border-blue-400/30 uppercase tracking-wider">
                      0{service.number}
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-white/90 backdrop-blur-xs text-[10px] font-bold text-slate-800 uppercase tracking-wider">
                      {service.category}
                    </span>
                  </div>

                  {/* Service Icon Badge */}
                  <div className="absolute -bottom-3 right-4 w-10 h-10 rounded-xl bg-white border border-slate-200 shadow-md flex items-center justify-center group-hover:scale-110 transition-transform">
                    {renderIcon(service.iconName)}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 pt-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-base font-bold text-[#0B1E3F] group-hover:text-blue-700 transition-colors leading-snug">
                      {displayTitle}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                      {displayShortDesc}
                    </p>
                  </div>

                  {/* Key Deliverables Bullet Excerpt */}
                  <div className="space-y-1.5 pt-2 border-t border-slate-100">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      {isHindi ? 'मुख्य विशेषताएं:' : 'Highlights:'}
                    </div>
                    <ul className="text-[11.5px] text-slate-600 space-y-1">
                      {service.keyDeliverables.slice(0, 2).map((del, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                          <span className="line-clamp-1">{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Action Buttons */}
                  <div className="pt-3 border-t border-slate-100 flex items-center gap-2">
                    <button
                      onClick={() => onSelectService(service)}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-slate-100 hover:bg-blue-50 text-[#0B1E3F] hover:text-blue-700 text-xs font-semibold transition-colors"
                    >
                      <span>{isHindi ? 'विस्तार देखें' : 'View Scope'}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => onQuickQuote(displayTitle)}
                      className="px-3 py-2 rounded-lg bg-[#0B1E3F] hover:bg-blue-800 text-white text-xs font-bold transition-colors shadow-xs"
                      title="Calculate RFP for this service"
                    >
                      {isHindi ? 'कोटेशन' : 'Get Quote'}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Corporate Note at Bottom */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6 text-left">
          <div className="space-y-1 max-w-2xl">
            <h4 className="text-sm font-bold text-[#0B1E3F]">
              {isHindi ? 'एकीकृत बहु-विषयक फैसिलिटी प्रबंधन अनुबंध की आवश्यकता है?' : 'Need a Custom Multi-Disciplinary Facility Management Contract?'}
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              {isHindi
                ? 'हम सुरक्षा गार्ड, हाउसकीपिंग, अस्पताल सैनिटाइजेशन और कार्यालय सहायकों को एकल चालान और समर्पित परिचालन पर्यवेक्षकों के साथ एकीकृत SLA के तहत प्रदान करते हैं।'
                : 'We bundle Security Services, Housekeeping, Hospital Sanitization, and Office Helpers under a unified Service Level Agreement (SLA) with single-invoice billing and dedicated operational managers.'}
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#estimator"
              className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-sm transition-colors"
            >
              {isHindi ? 'आरएफपी कॉन्फ़िगर करें' : 'Configure Custom SLA RFP'}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
