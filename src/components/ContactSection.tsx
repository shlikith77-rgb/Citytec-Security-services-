import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, CheckCircle2, Shield, Building, Calendar } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { SERVICES_DATA } from '../data/servicesData';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

export const ContactSection: React.FC = () => {
  const { language, isHindi } = useLanguage();
  const t = TRANSLATIONS[language];

  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    phone: '',
    email: '',
    serviceInterest: 'Security Services',
    sectorType: 'Private Enterprise',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        organization: '',
        phone: '',
        email: '',
        serviceInterest: 'Security Services',
        sectorType: 'Private Enterprise',
        message: '',
      });
    }, 6000);
  };

  const handleWhatsAppInquiry = () => {
    const text = encodeURIComponent(
      `Hello CITYTEC SECURITY SERVICES LLP Pune office,\nI would like to inquire about your corporate services.\n\nName: ${formData.name || 'Enterprise Inquirer'}\nOrganization: ${formData.organization || 'Corporate/Government entity'}\nService: ${formData.serviceInterest}\nPhone: ${formData.phone || 'Please call back'}\n\nPlease share your corporate quotation and brochure.`
    );
    window.open(`https://wa.me/917841864750?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-950 border border-blue-200 text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-blue-700" />
            <span>{t.contactBadge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1E3F] tracking-tight">
            {t.contactTitle}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {t.contactSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
          
          {/* Left Column: Official Registered Address, Timings & Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Corporate Address Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-xs space-y-5">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700">
                  <Building className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#0B1E3F]">
                    {COMPANY_INFO.legalName}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">
                    {isHindi ? 'कॉर्पोरेट एवं परिचालन मुख्यालय (निगमित: 2026)' : 'Corporate & Operational Headquarters (Inc: 2026)'}
                  </p>
                </div>
              </div>

              {/* Exact Provided Address Block */}
              <div className="space-y-2 text-slate-700 text-xs sm:text-sm">
                <div className="font-bold text-slate-900 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-rose-500 shrink-0" />
                  <span>{t.contactRegAddress}:</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 font-mono text-xs text-slate-800 leading-relaxed">
                  <strong>SHOP NO. 130, SN 46</strong>,<br />
                  JAIGANESHVISHWA, NR. KIRTI HOTEL,<br />
                  PUNE, MAHARASHTRA, INDIA – 411015
                </div>
              </div>

              {/* Exact Office Hours Schedule Specified by User */}
              <div className="space-y-2 pt-2 border-t border-slate-100">
                <div className="font-bold text-slate-900 text-xs flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>{t.contactOfficeScheduleTitle}:</span>
                </div>
                
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1 text-xs">
                  <div className="flex items-center justify-between text-slate-800">
                    <span className="font-medium">{isHindi ? 'सोमवार – शुक्रवार:' : 'Monday – Friday:'}</span>
                    <span className="font-bold text-blue-900">10:00 AM – 6:00 PM</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-800">
                    <span className="font-medium">{isHindi ? 'शनिवार:' : 'Saturday:'}</span>
                    <span className="font-bold text-blue-900">10:00 AM – 5:00 PM</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-500">
                    <span className="font-medium">{isHindi ? 'रविवार:' : 'Sunday:'}</span>
                    <span className="font-bold text-rose-600">{isHindi ? 'अवकाश (Closed)' : 'Closed'}</span>
                  </div>
                  <div className="pt-2 border-t border-slate-200 text-[11px] text-emerald-700 font-medium flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>{t.contactEmergency247}</span>
                  </div>
                </div>
              </div>

              {/* Phone Line Highlight */}
              <div className="space-y-2 pt-1 border-t border-slate-100">
                <div className="font-bold text-slate-900 text-xs flex items-center gap-2">
                  <Phone className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>{t.contactPhone} &amp; {isHindi ? 'सीधा संपर्क' : 'Direct Dispatch'}:</span>
                </div>
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-blue-50/80 border border-blue-200">
                  <div>
                    <div className="text-lg font-extrabold text-[#0B1E3F]">
                      {COMPANY_INFO.phoneFormatted}
                    </div>
                    <div className="text-[11px] text-slate-600">
                      {isHindi ? 'पुणे परिचालन एवं सहायता डेस्क' : 'Pune Operations & Client Helpdesk'}
                    </div>
                  </div>
                  <a
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="px-3.5 py-2 rounded-lg bg-[#0B1E3F] hover:bg-blue-900 text-white font-bold text-xs shadow-xs transition-colors"
                  >
                    {isHindi ? 'कॉल करें' : 'Call Now'}
                  </a>
                </div>
              </div>

              {/* Quick WhatsApp Action */}
              <button
                type="button"
                onClick={handleWhatsAppInquiry}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs tracking-wide shadow-xs transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{isHindi ? 'व्हाट्सएप पर तुरंत संदेश भेजें' : 'Chat Instantly on WhatsApp'} ({COMPANY_INFO.phone})</span>
              </button>

            </div>

            {/* Statutory Assurance Mini-Card */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-[#0B1E3F] to-[#122A54] text-white flex items-center gap-3 border border-blue-900 shadow-sm">
              <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-amber-300 shrink-0">
                <Shield className="w-5 h-5" />
              </div>
              <div className="text-xs">
                <div className="font-bold text-white">
                  {isHindi ? 'पसारा (PSARA) एवं GeM अनुरूप साझेदार' : 'PSARA & GeM Compliant Partner'}
                </div>
                <div className="text-blue-200 text-[11px]">
                  {isHindi ? 'सरकारी, रक्षा एवं कॉर्पोरेट निविदाओं हेतु तैयार' : 'Ready for Defense, Government & Corporate Empanelment'}
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Corporate Inquiry & RFP Request Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
            
            <div className="space-y-1 mb-6 border-b border-slate-100 pb-4">
              <h3 className="text-lg font-bold text-[#0B1E3F]">
                {isHindi ? 'कॉर्पोरेट आरएफपी एवं सेवा अनुरोध भेजें' : 'Send Corporate RFP / Facility Request'}
              </h3>
              <p className="text-xs text-slate-500">
                {isHindi
                  ? 'हमारे पुणे परिचालन प्रबंधक आपकी आवश्यकताओं की समीक्षा कर 4 कार्य घंटों में जवाब देंगे।'
                  : 'Our Pune operations desk will review your requirements and respond within 4 business hours.'}
              </p>
            </div>

            {isSubmitted ? (
              <div className="p-8 text-center space-y-4 rounded-xl bg-emerald-50 border border-emerald-200 animate-in fade-in">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="text-base font-bold text-emerald-900">
                  {isHindi ? 'अनुरोध सफलतापूर्वक प्राप्त हुआ' : 'Inquiry Successfully Received'}
                </h4>
                <p className="text-xs text-emerald-800 max-w-md mx-auto leading-relaxed">
                  {isHindi
                    ? 'सिटीटेक सिक्योरिटी सर्विसेज एलएलपी से संपर्क करने के लिए धन्यवाद। आपका विवरण हमारे पुणे कार्यालय को भेज दिया गया है। आप सीधे 78418 64750 पर भी कॉल कर सकते हैं।'
                    : 'Thank you for contacting CITYTEC SECURITY SERVICES LLP. Your facility details have been routed to our Pune deployment hub. You may also contact our direct hotline at 78418 64750.'}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">
                      {isHindi ? 'अधिकारी / प्रतिनिधि का नाम *' : 'Officer / Representative Name *'}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={isHindi ? 'उदा. राजेश पाटिल' : 'e.g. Rajesh Patil'}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600 shadow-2xs"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">
                      {isHindi ? 'संस्थान / कंपनी का नाम *' : 'Organization / Agency Name *'}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={isHindi ? 'उदा. टेक पार्क / अस्पताल / सरकारी विभाग' : 'e.g. Tech Park / Hospital / Govt Department'}
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600 shadow-2xs"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">
                      {isHindi ? 'मोबाइल / फोन नंबर *' : 'Direct Mobile / Telephone *'}
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="78418 64750"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600 shadow-2xs"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">
                      {isHindi ? 'आधिकारिक ईमेल पता *' : 'Official Email Address *'}
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="procurement@organization.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600 shadow-2xs"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">
                      {isHindi ? 'आवश्यक सेवा श्रेणी' : 'Primary Service Discipline'}
                    </label>
                    <select
                      value={formData.serviceInterest}
                      onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600 shadow-2xs bg-white font-medium"
                    >
                      {SERVICES_DATA.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">
                      {isHindi ? 'प्रतिष्ठान का प्रकार' : 'Sector Classification'}
                    </label>
                    <select
                      value={formData.sectorType}
                      onChange={(e) => setFormData({ ...formData, sectorType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600 shadow-2xs bg-white font-medium"
                    >
                      <option value="Defense & Military Establishment">{isHindi ? 'रक्षा एवं सैन्य प्रतिष्ठान' : 'Defense & Military Establishment'}</option>
                      <option value="Government & PSU">{isHindi ? 'सरकारी विभाग / पीएसयू' : 'Government / PSU / GeM Procurement'}</option>
                      <option value="Private Enterprise">{isHindi ? 'निजी उद्यम / बहुराष्ट्रीय कंपनी' : 'Private Sector Enterprise / MNC'}</option>
                      <option value="Hospital & Healthcare">{isHindi ? 'अस्पताल एवं स्वास्थ्य केंद्र' : 'Hospital / Healthcare Facility'}</option>
                      <option value="Industrial / Manufacturing">{isHindi ? 'औद्योगिक विनिर्माण एवं गोदाम' : 'Manufacturing / Logistics Warehouse'}</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">
                    {isHindi ? 'तैनाती स्थान एवं आवश्यकता विवरण' : 'Deployment Location & Scope Requirements'}
                  </label>
                  <textarea
                    rows={3}
                    placeholder={
                      isHindi
                        ? 'परिसर का आकार, आवश्यक सुरक्षा गार्ड/सहायकों की संख्या, शिफ्ट विवरण...'
                        : 'Provide details on facility size, number of guards/helpers required, shift timings, or tender submission deadlines...'
                    }
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600 shadow-2xs"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-gradient-to-r from-[#0B1E3F] via-[#153465] to-[#1E40AF] hover:from-[#0F2850] hover:to-[#2563EB] text-white font-bold text-xs tracking-wider uppercase shadow-md transition-all transform hover:-translate-y-0.5"
                >
                  <Send className="w-4 h-4" />
                  <span>{isHindi ? 'पुणे नियंत्रण कक्ष को विवरण भेजें' : 'Transmit Official Inquiry to Pune Hub'}</span>
                </button>

                <p className="text-[11px] text-slate-500 text-center pt-1">
                  {isHindi
                    ? '100% डेटा गोपनीयता • कोई स्पैम नहीं • सीधे अधिकृत अधिकारियों द्वारा त्वरित संपर्क।'
                    : '100% Data Confidentiality • No Spam • Handled directly by certified operations personnel.'}
                </p>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
