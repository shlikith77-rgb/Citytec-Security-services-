import React, { useState } from 'react';
import { Calculator, CheckCircle2, Send, Phone, MessageSquare, Copy, Check, Shield, FileText } from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';
import { COMPANY_INFO } from '../data/companyData';

interface RFPQuoteEstimatorProps {
  preselectedService?: string;
}

export const RFPQuoteEstimator: React.FC<RFPQuoteEstimatorProps> = ({ preselectedService }) => {
  const [selectedService, setSelectedService] = useState<string>(
    preselectedService || 'Security Services'
  );
  const [selectedSector, setSelectedSector] = useState<string>('Corporate IT & Tech Park');
  const [headcount, setHeadcount] = useState<number>(10);
  const [shiftModel, setShiftModel] = useState<string>('24/7 Rotational (3 Shifts)');
  const [location, setLocation] = useState<string>('Pune / PCMC Region');
  
  // Contact details
  const [name, setName] = useState<string>('');
  const [organization, setOrganization] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [specialInstructions, setSpecialInstructions] = useState<string>('');
  
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [submittedMessage, setSubmittedMessage] = useState<boolean>(false);

  // When preselectedService changes from parent
  React.useEffect(() => {
    if (preselectedService) {
      setSelectedService(preselectedService);
    }
  }, [preselectedService]);

  const sectors = [
    'Government / PSU / Civil Administrative Hub',
    'Corporate IT & Tech Park',
    'Healthcare & Multi-Specialty Hospital',
    'Manufacturing Plant / Industrial Warehouse',
    'Commercial Mall / Retail Hub',
    'Educational Institution / University Campus',
    'Residential Township / Gated Community'
  ];

  const shiftOptions = [
    { label: '8 Hours (Single Shift)', desc: 'Standard business hours, office support & pantry' },
    { label: '12 Hours (Two Shifts)', desc: 'Day & night factory or commercial facility coverage' },
    { label: '24/7 Rotational (3 Shifts)', desc: 'Continuous uninterrupted manned guarding & response' },
    { label: 'Project-Based / Turnaround', desc: 'Temporary event or facility overhaul deployment' }
  ];

  const generateProposalSummary = () => {
    return `*RFP INQUIRY FOR CITYTEC SECURITY SERVICES LLP*
------------------------------------------------
*Service Requested:* ${selectedService}
*Sector:* ${selectedSector}
*Required Headcount:* ${headcount} Personnel
*Shift Configuration:* ${shiftModel}
*Deployment Hub:* ${location}

*Client Details:*
Name: ${name || 'Prospective Client'}
Organization: ${organization || 'Enterprise Entity'}
Contact: ${phone || 'Not provided'}
Email: ${email || 'Not provided'}
Additional Scope Notes: ${specialInstructions || 'Standard statutory compliance SLA required.'}

*Origin:* Official Website RFP Generator
*Pune Office:* Shop No. 130, Jaiganeshvishwa, Pune – 411015
*Dispatch Line:* +91 78418 64750`;
  };

  const handleCopySummary = () => {
    navigator.clipboard.writeText(generateProposalSummary());
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  const handleSendWhatsApp = () => {
    const text = encodeURIComponent(generateProposalSummary());
    window.open(`https://wa.me/917841864750?text=${text}`, '_blank');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedMessage(true);
    setTimeout(() => setSubmittedMessage(false), 6000);
  };

  return (
    <section id="estimator" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-900 border border-blue-200 text-xs font-bold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5 text-blue-700" />
            <span>Interactive Procurement Suite</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1E3F] tracking-tight">
            Corporate RFP &amp; Manpower Estimator
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Configure your facility specifications to receive an instant operational scope draft and statutory rate quotation from our Pune deployment desk.
          </p>
        </div>

        {/* 2-Column Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
          
          {/* Left: Interactive Configurator Form */}
          <div className="lg:col-span-7 bg-slate-50/80 rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
            
            {/* 1. Select Service */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-[#0B1E3F] block">
                1. Select Desired Service Discipline
              </label>
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-800 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-blue-600 shadow-xs"
              >
                {SERVICES_DATA.map((srv) => (
                  <option key={srv.id} value={srv.title}>
                    0{srv.number}. {srv.title} ({srv.category})
                  </option>
                ))}
              </select>
            </div>

            {/* 2. Select Sector */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-[#0B1E3F] block">
                2. Enterprise Sector / Facility Type
              </label>
              <select
                value={selectedSector}
                onChange={(e) => setSelectedSector(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-800 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-blue-600 shadow-xs"
              >
                {sectors.map((sec, i) => (
                  <option key={i} value={sec}>
                    {sec}
                  </option>
                ))}
              </select>
            </div>

            {/* 3. Headcount Slider & Numeric Presets */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold uppercase tracking-wider text-[#0B1E3F]">
                  3. Required Personnel Headcount
                </label>
                <span className="text-base font-extrabold text-blue-700 bg-blue-100/80 px-3 py-0.5 rounded-lg border border-blue-200">
                  {headcount} {headcount === 1 ? 'Person' : 'Personnel'}
                </span>
              </div>

              <input
                type="range"
                min="2"
                max="120"
                step="1"
                value={headcount}
                onChange={(e) => setHeadcount(Number(e.target.value))}
                className="w-full accent-blue-600 h-2 bg-slate-200 rounded-lg cursor-pointer"
              />

              {/* Headcount Fast Buttons */}
              <div className="flex flex-wrap gap-2 pt-1">
                {[5, 10, 25, 50, 80, 100].map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => setHeadcount(num)}
                    className={`px-3 py-1 rounded-md text-xs font-semibold transition-colors ${
                      headcount === num
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {num} Staff
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Shift Model */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-[#0B1E3F] block">
                4. Operational Shift Model
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {shiftOptions.map((opt, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setShiftModel(opt.label)}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      shiftModel === opt.label
                        ? 'bg-white border-blue-600 ring-2 ring-blue-600/20 shadow-xs'
                        : 'bg-white/60 border-slate-200 hover:bg-white hover:border-slate-300'
                    }`}
                  >
                    <div className={`text-xs font-bold ${shiftModel === opt.label ? 'text-blue-700' : 'text-slate-800'}`}>
                      {opt.label}
                    </div>
                    <div className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                      {opt.desc}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* 5. Deployment Hub Location */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-[#0B1E3F] block">
                5. Primary Deployment City / Industrial Zone
              </label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="e.g. Pune City, Hinjawadi Phase 1, Chakan MIDC, Bhosari"
                className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-800 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-600 shadow-xs"
              />
            </div>

            {/* Contact Details Grid */}
            <div className="pt-4 border-t border-slate-200 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B1E3F]">
                Procurement / Contact Officer Information
              </h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Officer Name *"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-xs text-slate-800 font-medium focus:ring-2 focus:ring-blue-600 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Organization / Company Name *"
                  value={organization}
                  onChange={(e) => setOrganization(e.target.value)}
                  className="px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-xs text-slate-800 font-medium focus:ring-2 focus:ring-blue-600 focus:outline-none"
                />
                <input
                  type="tel"
                  placeholder="Direct Phone / Mobile *"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-xs text-slate-800 font-medium focus:ring-2 focus:ring-blue-600 focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Official Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-xs text-slate-800 font-medium focus:ring-2 focus:ring-blue-600 focus:outline-none"
                />
              </div>

              <textarea
                rows={2}
                placeholder="Specific instructions or existing vendor transition timeline (Optional)"
                value={specialInstructions}
                onChange={(e) => setSpecialInstructions(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-xs text-slate-800 font-medium focus:ring-2 focus:ring-blue-600 focus:outline-none"
              />
            </div>

          </div>

          {/* Right: Dynamic Proposal Summary Card */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-[#0A192F] text-white rounded-2xl p-6 sm:p-7 border border-blue-900 shadow-xl space-y-6">
              
              <div className="flex items-center justify-between border-b border-blue-800/80 pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-600/30 border border-blue-400/40 flex items-center justify-center text-cyan-300">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                      RFP Operational Brief
                    </h3>
                    <p className="text-[11px] text-blue-200">
                      CITYTEC SECURITY SERVICES LLP
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopySummary}
                  className="p-1.5 rounded-lg bg-blue-900/60 hover:bg-blue-800 text-blue-200 hover:text-white transition-colors text-xs inline-flex items-center gap-1 border border-blue-700/50"
                  title="Copy RFP Summary"
                >
                  {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span className="text-[10px] font-semibold">{isCopied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* Dynamic Highlights */}
              <div className="space-y-3 text-xs">
                <div className="flex justify-between py-1.5 border-b border-blue-900">
                  <span className="text-slate-400">Selected Service:</span>
                  <span className="font-bold text-cyan-300 text-right">{selectedService}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-blue-900">
                  <span className="text-slate-400">Target Sector:</span>
                  <span className="font-bold text-white text-right">{selectedSector}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-blue-900">
                  <span className="text-slate-400">Deployment Strength:</span>
                  <span className="font-extrabold text-[#D4AF37] text-right">{headcount} Personnel</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-blue-900">
                  <span className="text-slate-400">Shift Coverage:</span>
                  <span className="font-bold text-slate-200 text-right">{shiftModel}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-blue-900">
                  <span className="text-slate-400">Deployment Node:</span>
                  <span className="font-bold text-slate-200 text-right">{location}</span>
                </div>
              </div>

              {/* Included Statutory Package checklist */}
              <div className="p-3.5 rounded-xl bg-blue-950/80 border border-blue-800/60 space-y-2">
                <div className="text-[11px] font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5" />
                  <span>Standard Statutory Coverage Included:</span>
                </div>
                <ul className="text-[11px] text-slate-300 space-y-1">
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                    <span>EPF &amp; ESIC employer + employee contributions</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                    <span>Complete uniform, badges, whistle &amp; safety boots</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                    <span>Regular Field Officer supervisory night rounds</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                    <span>Guaranteed reliever replacement within 2 hours</span>
                  </li>
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-2">
                <button
                  type="button"
                  onClick={handleSendWhatsApp}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs tracking-wide shadow-md transition-all transform hover:-translate-y-0.5"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Proposal via WhatsApp (78418 64750)</span>
                </button>

                <form onSubmit={handleFormSubmit}>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs tracking-wide shadow-md transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit RFP to Pune Operations Desk</span>
                  </button>
                </form>

                {submittedMessage && (
                  <div className="p-3 rounded-lg bg-emerald-900/60 border border-emerald-500/50 text-emerald-200 text-xs text-center font-semibold animate-in fade-in">
                    ✓ RFP Transmitted! Our Pune Operations Director will contact you at {phone || 'your phone'} within 4 hours.
                  </div>
                )}
              </div>

              {/* Emergency Call info */}
              <div className="pt-2 border-t border-blue-900 text-center text-xs text-slate-400">
                <span>Immediate Assistance or Urgent Tender: </span>
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="text-amber-300 hover:underline font-bold"
                >
                  Call +91 78418 64750
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
