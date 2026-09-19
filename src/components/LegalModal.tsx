import React, { useState } from 'react';
import { X, Shield, FileText, CheckCircle2, AlertCircle, Scale } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTab?: 'privacy' | 'terms' | 'approval' | 'all';
}

export const LegalModal: React.FC<LegalModalProps> = ({
  isOpen,
  onClose,
  defaultTab = 'all'
}) => {
  const { isHindi } = useLanguage();
  const [activeTab, setActiveTab] = useState<'privacy' | 'terms' | 'approval' | 'all'>(defaultTab);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col max-h-[90vh] overflow-hidden text-left">
        
        {/* Modal Header */}
        <div className="px-6 py-4 bg-[#0B1E3F] text-white flex items-center justify-between border-b border-blue-900">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-900/80 border border-blue-400/40 flex items-center justify-center text-amber-300">
              <Scale className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-sm sm:text-base font-bold text-white tracking-tight">
                {isHindi ? 'कानूनी नीतियां, नियम एवं शर्तें' : 'Legal Policies, Terms & Client Approval'}
              </h2>
              <div className="text-[10.5px] text-blue-200">
                CITYTEC SECURITY SERVICES LLP • Pune, Maharashtra
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selection Navigation */}
        <div className="px-6 py-2.5 bg-slate-100 border-b border-slate-200 flex flex-wrap gap-2 text-xs">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all text-xs ${
              activeTab === 'all'
                ? 'bg-blue-900 text-white shadow-xs'
                : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-200 border border-slate-200'
            }`}
          >
            {isHindi ? 'सभी नीतियां (संयुक्त)' : 'All Policies (Combined)'}
          </button>
          <button
            onClick={() => setActiveTab('privacy')}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all text-xs ${
              activeTab === 'privacy'
                ? 'bg-blue-900 text-white shadow-xs'
                : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-200 border border-slate-200'
            }`}
          >
            {isHindi ? 'गोपनीयता नीति' : 'Privacy Policy'}
          </button>
          <button
            onClick={() => setActiveTab('terms')}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all text-xs ${
              activeTab === 'terms'
                ? 'bg-blue-900 text-white shadow-xs'
                : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-200 border border-slate-200'
            }`}
          >
            {isHindi ? 'नियम व शर्तें एवं अस्वीकरण' : 'Terms & Disclaimer'}
          </button>
          <button
            onClick={() => setActiveTab('approval')}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all text-xs ${
              activeTab === 'approval'
                ? 'bg-blue-900 text-white shadow-xs'
                : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-200 border border-slate-200'
            }`}
          >
            {isHindi ? 'क्लाइंट सामग्री अनुमोदन' : 'Client Content Approval'}
          </button>
        </div>

        {/* Modal Body - Shrunk Text Size for Compact 1-2 Page Reading */}
        <div className="p-6 overflow-y-auto space-y-6 text-[11px] sm:text-xs text-slate-700 leading-relaxed max-h-[70vh]">
          
          {/* PRIVACY POLICY SECTION */}
          {(activeTab === 'all' || activeTab === 'privacy') && (
            <div className="space-y-3 pb-6 border-b border-slate-200 last:border-0 last:pb-0">
              <div className="flex items-center gap-2 text-blue-950 font-bold text-sm">
                <Shield className="w-4 h-4 text-blue-700" />
                <span>Privacy Policy</span>
                <span className="text-[10px] font-normal text-slate-500 ml-auto">Last Updated: September 2026</span>
              </div>
              
              <p>
                CITYTEC SECURITY SERVICES LLP (“CITYTEC”, “we”, “us” or “our”) respects your privacy. This Privacy Policy explains how information submitted through this website may be collected and used.
              </p>

              <div className="space-y-1">
                <div className="font-bold text-slate-900">Information We Collect</div>
                <p>
                  When you contact us or submit an enquiry/RFP, we may collect information such as your name, organization, phone number, email address, service requirements and other information that you voluntarily provide.
                </p>
              </div>

              <div className="space-y-1">
                <div className="font-bold text-slate-900">How We Use Information</div>
                <p>Information may be used to:</p>
                <ul className="list-disc list-inside space-y-0.5 pl-1 text-slate-600">
                  <li>Respond to enquiries and RFPs</li>
                  <li>Prepare quotations and proposals</li>
                  <li>Understand service and manpower requirements</li>
                  <li>Communicate with prospective or existing clients</li>
                  <li>Provide requested services</li>
                  <li>Maintain business and legal records</li>
                  <li>Improve website functionality and security</li>
                </ul>
              </div>

              <div className="space-y-1">
                <div className="font-bold text-slate-900">Sharing of Information</div>
                <p>
                  We do not intend to sell personal information submitted through this website. Information may be shared with relevant employees, service providers, technology/hosting providers or other parties where reasonably necessary to respond to enquiries, provide services, operate the website or comply with applicable law.
                </p>
              </div>

              <div className="space-y-1">
                <div className="font-bold text-slate-900">Data Security</div>
                <p>
                  We take reasonable measures to protect information against unauthorized access, misuse or disclosure. However, no internet transmission or electronic storage system can be guaranteed to be completely secure. Please avoid submitting highly sensitive or confidential information through ordinary website forms.
                </p>
              </div>

              <div className="space-y-1">
                <div className="font-bold text-slate-900">Third-Party Services</div>
                <p>
                  This website may use third-party services such as hosting, analytics, communication platforms or WhatsApp. Such services may have their own terms and privacy policies.
                </p>
              </div>

              <div className="space-y-1">
                <div className="font-bold text-slate-900">Data Retention</div>
                <p>
                  Information may be retained for as long as reasonably necessary for business, contractual, legal, security or regulatory purposes.
                </p>
              </div>

              <div className="space-y-1">
                <div className="font-bold text-slate-900">Updates</div>
                <p>
                  This Privacy Policy may be updated when our website, services, technology or applicable legal requirements change.
                </p>
              </div>
            </div>
          )}

          {/* TERMS AND CONDITIONS SECTION */}
          {(activeTab === 'all' || activeTab === 'terms') && (
            <div className="space-y-3 pb-6 border-b border-slate-200 last:border-0 last:pb-0">
              <div className="flex items-center gap-2 text-blue-950 font-bold text-sm">
                <FileText className="w-4 h-4 text-blue-700" />
                <span>Terms &amp; Conditions &amp; Website Disclaimer</span>
                <span className="text-[10px] font-normal text-slate-500 ml-auto">Last Updated: September 2026</span>
              </div>
              
              <p>
                This website is operated by CITYTEC SECURITY SERVICES LLP (“CITYTEC”, “we”, “us” or “our”). By using this website, you agree to the following terms.
              </p>

              <div className="space-y-2">
                <div>
                  <strong className="text-slate-900">1. Website Information: </strong>
                  The information on this website is provided for general corporate, informational and promotional purposes. Business information, service descriptions, personnel information, operational details, registrations, licences, certifications and compliance information may change from time to time. CITYTEC makes reasonable efforts to keep the information current; however, visitors should contact CITYTEC and verify relevant documents before relying on information for any material business, procurement, contractual or regulatory decision.
                </div>

                <div>
                  <strong className="text-slate-900">2. Company-Provided Information: </strong>
                  Company-specific information, including experience, services, certifications, registrations, compliance claims, personnel details, photographs and operational capabilities, is based on information and/or documentation provided or approved by CITYTEC. The website should not be treated as a replacement for official licences, certificates, registrations, tender documents, contracts or statutory records.
                </div>

                <div>
                  <strong className="text-slate-900">3. No Automatic Contract: </strong>
                  Submitting an enquiry, RFP, contact form, WhatsApp message or email through this website does not create a contract, service agreement, employment relationship or other binding commitment. Actual services, pricing, manpower, deployment timelines, guarantees and responsibilities are governed by the applicable written quotation, work order, tender or service agreement.
                </div>

                <div>
                  <strong className="text-slate-900">4. Service &amp; Compliance Claims: </strong>
                  References to PSARA, GeM, EPF, ESIC, Professional Tax, minimum wages, police verification, ISO standards, training, statutory compliance or other regulatory matters are based on information represented or documents provided by CITYTEC. Where applicable, users should independently verify the relevant licence, registration, certification or compliance documentation before entering into a contractual arrangement.
                </div>

                <div>
                  <strong className="text-slate-900">5. Website Availability: </strong>
                  CITYTEC does not guarantee that the website will always be available, uninterrupted or error-free. Content may be changed, corrected, updated or removed without prior notice.
                </div>

                <div>
                  <strong className="text-slate-900">6. Third-Party Links: </strong>
                  Links to third-party websites or services may be provided for convenience. CITYTEC is not responsible for the content, availability or privacy practices of third-party websites.
                </div>

                <div>
                  <strong className="text-slate-900">7. Limitation: </strong>
                  Nothing on this website constitutes legal, financial, regulatory, procurement, employment, medical or other professional advice. Any contractual liability relating to actual services shall be governed by the applicable agreement and applicable law. Nothing in these Terms is intended to exclude liability that cannot legally be excluded.
                </div>

                <div>
                  <strong className="text-slate-900">8. Governing Law: </strong>
                  These Terms are governed by the laws applicable in India. Subject to any applicable contractual dispute-resolution provisions, disputes relating to this website shall be subject to the jurisdiction of the appropriate courts in Pune.
                </div>
              </div>
            </div>
          )}

          {/* CLIENT CONTENT APPROVAL SECTION */}
          {(activeTab === 'all' || activeTab === 'approval') && (
            <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 space-y-2">
              <div className="flex items-center gap-2 text-amber-950 font-bold text-xs">
                <CheckCircle2 className="w-4 h-4 text-amber-700" />
                <span>Client Content Approval Statement</span>
              </div>
              <p className="text-slate-700 italic">
                “As discussed and approved by founder, website developer has published the website content based on the information, claims, documents and details provided/approved by CITYTEC SECURITY SERVICES LLP. The founder/owner of business remains responsible for the accuracy, authenticity and legality of the information and claims provided or approved by him. The Developer's role is limited to designing, developing and publishing the website based on the Client's instructions and approval.”
              </p>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 bg-slate-100 border-t border-slate-200 flex items-center justify-between text-xs">
          <span className="text-slate-500 text-[11px]">
            CITYTEC SECURITY SERVICES LLP • Registered at Pune, Maharashtra, India
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-blue-900 hover:bg-blue-800 text-white font-bold transition-colors text-xs"
          >
            {isHindi ? 'बंद करें (Close)' : 'Close'}
          </button>
        </div>

      </div>
    </div>
  );
};
