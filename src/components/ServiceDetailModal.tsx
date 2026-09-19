import React from 'react';
import { X, CheckCircle2, Building, ShieldCheck, Users, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { HINDI_SERVICES_MAP } from '../data/hindiData';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onSelectForQuote: (serviceTitle: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onSelectForQuote,
}) => {
  const { isHindi } = useLanguage();

  if (!service) return null;

  const hindiData = HINDI_SERVICES_MAP[service.id];
  const displayTitle = isHindi && hindiData?.title ? hindiData.title : service.title;
  const displayTagline = isHindi && hindiData?.tagline ? hindiData.tagline : service.tagline;
  const displayFullDesc = isHindi && hindiData?.fullDescription ? hindiData.fullDescription : service.fullDescription;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs overflow-y-auto animate-in fade-in">
      <div className="bg-white rounded-2xl max-w-2xl w-full shadow-2xl border border-slate-200 overflow-hidden my-8 max-h-[90vh] flex flex-col text-left">
        
        {/* Modal Top Hero Image & Title */}
        <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-slate-900 shrink-0">
          <img
            src={service.image}
            alt={displayTitle}
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E3F] via-[#0B1E3F]/60 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-xs transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6 text-white space-y-1">
            <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-blue-600/90 text-white border border-blue-400/40">
              Service 0{service.number} • {service.category}
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              {displayTitle}
            </h3>
            <p className="text-xs text-blue-200 line-clamp-1">
              {displayTagline}
            </p>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-slate-700 text-sm">
          
          {/* Executive Overview */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-blue-900 uppercase tracking-wider">
              {isHindi ? 'परिचालन दायरा एवं विवरण' : 'Operational Scope & Overview'}
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              {displayFullDesc}
            </p>
          </div>

          {/* Key Deliverables */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-blue-900 uppercase tracking-wider flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-blue-600" />
              <span>{isHindi ? 'मुख्य कार्य एवं सेवाएं' : 'Core Service Deliverables'}</span>
            </h4>
            <div className="grid grid-cols-1 gap-2">
              {service.keyDeliverables.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-xs text-slate-700"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Personnel Profiles & Compliance */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-3.5 rounded-xl bg-blue-50/50 border border-blue-100 space-y-2">
              <h5 className="text-xs font-bold text-[#0B1E3F] uppercase tracking-wider flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-blue-700" />
                <span>{isHindi ? 'तैनात कर्मचारी प्रोफाइल' : 'Personnel Profiles'}</span>
              </h5>
              <div className="flex flex-wrap gap-1.5">
                {service.personnelProfiles.map((role, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] px-2 py-0.5 rounded bg-white text-slate-700 border border-slate-200 font-medium"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <h5 className="text-xs font-bold text-[#0B1E3F] uppercase tracking-wider flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>{isHindi ? 'वैधानिक अनुपालन' : 'Statutory Compliance'}</span>
              </h5>
              <ul className="text-[11px] text-slate-600 space-y-1">
                {service.complianceStandards.slice(0, 3).map((std, idx) => (
                  <li key={idx} className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-emerald-500" />
                    <span>{std}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sectors Suited */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-blue-900 uppercase tracking-wider flex items-center gap-2">
              <Building className="w-4 h-4 text-blue-600" />
              <span>{isHindi ? 'अनुशंसित प्रतिष्ठान' : 'Recommended For'}</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {service.sectorsSuited.map((sector, idx) => (
                <span
                  key={idx}
                  className="text-xs px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 font-medium"
                >
                  {sector}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Bottom Footer Actions */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="text-xs text-slate-500">
            {isHindi ? 'पुणे कमान नियंत्रण कक्ष: 78418 64750' : 'Pune Operational Command: 78418 64750'}
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-initial px-4 py-2 rounded-lg border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors"
            >
              {isHindi ? 'बंद करें' : 'Close'}
            </button>
            <button
              onClick={() => {
                onClose();
                onSelectForQuote(displayTitle);
              }}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-[#0B1E3F] hover:bg-blue-800 text-white text-xs font-bold transition-colors shadow-sm"
            >
              <span>{isHindi ? 'इस सेवा हेतु कोटेशन लें' : 'Configure RFP Quote'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
