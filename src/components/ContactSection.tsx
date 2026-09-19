import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, CheckCircle2, Shield, Building } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { SERVICES_DATA } from '../data/servicesData';

export const ContactSection: React.FC = () => {
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
      `Hello CITYTEC SECURITY SERVICES LLP Pune office,\nI would like to inquire about your corporate services.\n\nName: ${formData.name || 'Enterprise Inquirer'}\nOrganization: ${formData.organization || 'Corporate/Government entity'}\nService: ${formData.serviceInterest}\nPhone: ${formData.phone || 'Please call back'}\n\nPlease share your corporate brochure and quote.`
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
            <span>Pune Corporate Headquarters</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1E3F] tracking-tight">
            Connect With Our Operations Desk
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Contact CITYTEC SECURITY SERVICES LLP for site audits, government tender participation, facility management proposals, or urgent manpower deployments.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
          
          {/* Left Column: Official Registered Address & Contact Cards */}
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
                    Corporate &amp; Operational Headquarters
                  </p>
                </div>
              </div>

              {/* Exact Provided Address Block */}
              <div className="space-y-2 text-slate-700 text-xs sm:text-sm">
                <div className="font-bold text-slate-900 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-rose-500 shrink-0" />
                  <span>Registered Office Address:</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 font-mono text-xs text-slate-800 leading-relaxed">
                  <strong>SHOP NO. 130, SN 46</strong>,<br />
                  JAIGANESHVISHWA, NR. KIRTI HOTEL,<br />
                  PUNE, MAHARASHTRA, INDIA – 411015
                </div>
              </div>

              {/* Phone Line Highlight */}
              <div className="space-y-2">
                <div className="font-bold text-slate-900 text-xs flex items-center gap-2">
                  <Phone className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Direct Phone &amp; Emergency Dispatch:</span>
                </div>
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-blue-50/80 border border-blue-200">
                  <div>
                    <div className="text-lg font-extrabold text-[#0B1E3F]">
                      {COMPANY_INFO.phoneFormatted}
                    </div>
                    <div className="text-[11px] text-slate-600">
                      24/7 Operations &amp; Client Helpdesk
                    </div>
                  </div>
                  <a
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="px-3.5 py-2 rounded-lg bg-[#0B1E3F] hover:bg-blue-900 text-white font-bold text-xs shadow-xs transition-colors"
                  >
                    Call Now
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
                <span>Chat Instantly on WhatsApp ({COMPANY_INFO.phone})</span>
              </button>

              {/* Operating Hours Notice */}
              <div className="pt-2 border-t border-slate-100 flex items-start gap-2.5 text-xs text-slate-600">
                <Clock className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-slate-800">{COMPANY_INFO.officeHours}</div>
                  <div className="text-slate-500">{COMPANY_INFO.operatingHours}</div>
                </div>
              </div>

            </div>

            {/* Statutory Assurance Mini-Card */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-[#0B1E3F] to-[#122A54] text-white flex items-center gap-3 border border-blue-900 shadow-sm">
              <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-amber-300 shrink-0">
                <Shield className="w-5 h-5" />
              </div>
              <div className="text-xs">
                <div className="font-bold text-white">PSARA &amp; GeM Compliant Partner</div>
                <div className="text-blue-200 text-[11px]">Ready for State &amp; Corporate Vendor Empanelment</div>
              </div>
            </div>

          </div>

          {/* Right Column: Corporate Inquiry & RFP Request Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
            
            <div className="space-y-1 mb-6 border-b border-slate-100 pb-4">
              <h3 className="text-lg font-bold text-[#0B1E3F]">
                Send Corporate RFP / Facility Request
              </h3>
              <p className="text-xs text-slate-500">
                Our Pune operations director will review your requirements and respond within 4 business hours.
              </p>
            </div>

            {isSubmitted ? (
              <div className="p-8 text-center space-y-4 rounded-xl bg-emerald-50 border border-emerald-200 animate-in fade-in">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="text-base font-bold text-emerald-900">
                  Inquiry Successfully Received
                </h4>
                <p className="text-xs text-emerald-800 max-w-md mx-auto leading-relaxed">
                  Thank you for contacting <strong>CITYTEC SECURITY SERVICES LLP</strong>. Your facility details have been routed to our Pune deployment hub. You may also contact our direct hotline at <strong>78418 64750</strong>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">
                      Officer / Representative Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajesh Patil"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600 shadow-2xs"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">
                      Organization / Agency Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Tech Park / Hospital / Govt Department"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600 shadow-2xs"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">
                      Direct Mobile / Telephone *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 78418 64750"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600 shadow-2xs"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">
                      Official Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. procurement@organization.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600 shadow-2xs"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">
                      Primary Service Discipline
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
                      Sector Classification
                    </label>
                    <select
                      value={formData.sectorType}
                      onChange={(e) => setFormData({ ...formData, sectorType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600 shadow-2xs bg-white font-medium"
                    >
                      <option value="Private Enterprise">Private Sector Enterprise / MNC</option>
                      <option value="Government & PSU">Government / PSU / GeM Procurement</option>
                      <option value="Hospital & Healthcare">Hospital / Healthcare Facility</option>
                      <option value="Industrial / Manufacturing">Manufacturing / Logistics Warehouse</option>
                      <option value="Commercial Complex">Commercial Mall / Tech Park</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">
                    Deployment Location &amp; Scope Requirements
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Provide details on facility size, number of guards/helpers required, shift timings, or tender submission deadlines..."
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
                  <span>Transmit Official Inquiry to Pune Hub</span>
                </button>

                <p className="text-[11px] text-slate-500 text-center pt-1">
                  100% Data Confidentiality • No Spam • Handled directly by certified operations personnel.
                </p>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
