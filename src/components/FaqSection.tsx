import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Phone, MessageSquare, ShieldCheck } from 'lucide-react';
import { FAQ_DATA } from '../data/faqData';
import { HINDI_FAQ_DATA } from '../data/hindiData';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';
import { COMPANY_INFO } from '../data/companyData';

export const FaqSection: React.FC = () => {
  const { language, isHindi } = useLanguage();
  const t = TRANSLATIONS[language];
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const activeFaqList = isHindi ? HINDI_FAQ_DATA : FAQ_DATA;

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-900 border border-blue-200 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
            <span>{t.faqBadge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1E3F] tracking-tight">
            {t.faqTitle}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {t.faqSubtitle}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5 text-left">
          {activeFaqList.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-xl border border-slate-200 shadow-xs hover:border-blue-300 transition-all overflow-hidden"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-5 text-left font-bold text-[#0B1E3F] hover:text-blue-700 transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3 text-sm sm:text-base pr-4">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-50 text-blue-800 text-xs font-bold shrink-0">
                      {index + 1}
                    </span>
                    <span>{faq.question}</span>
                  </span>
                  <div className="shrink-0 p-1 rounded-md bg-slate-100 text-slate-600">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    <div className="pt-2">
                      {faq.answer}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Micro FAQ Help CTA */}
        <div className="mt-10 p-5 rounded-2xl bg-white border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs shadow-xs text-left">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-slate-900 text-sm">
                {isHindi ? 'विशिष्ट निविदा या तैनाती संबंधी प्रश्न?' : 'Have specific tender or operational inquiries?'}
              </div>
              <div className="text-slate-500">
                {isHindi
                  ? 'हमारे पुणे मुख्यालय संचालन डेस्क से सीधे संपर्क करें।'
                  : 'Speak directly with our Pune Headquarters operations desk.'}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#0B1E3F] hover:bg-blue-900 text-white font-bold transition-colors text-xs"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
            <a
              href={`https://wa.me/917841864750?text=${encodeURIComponent(
                'Hello CITYTEC, I have a specific query regarding security and facility services.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold transition-colors text-xs"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
