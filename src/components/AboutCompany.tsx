import React from 'react';
import { Shield, Building, Award, CheckCircle2, Phone, MapPin, Eye, Compass, Users } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const AboutCompany: React.FC = () => {
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
                      Pune Registered
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Card Overlay */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-white/10 text-white space-y-1 text-left">
                <div className="text-xs font-bold text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5" />
                  <span>Dual Sector Compliance</span>
                </div>
                <div className="text-sm font-bold text-white">
                  Government &amp; Private Sector Deployments
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
                <span>Executive Company Profile</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1E3F] tracking-tight">
                Setting New Benchmarks in Security, Facility &amp; Manpower Excellence
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                <strong className="text-slate-900">CITYTEC SECURITY SERVICES LLP</strong> is a premier integrated facility management and specialized manpower outsourcing enterprise headquartered in Pune, Maharashtra. We provide private security, institutional housekeeping, hospital sanitization, and certified manpower deployment to prominent government agencies and private-sector organizations.
              </p>
            </div>

            {/* Core Values Breakdown */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-blue-900 font-bold text-sm">
                  <Shield className="w-4 h-4 text-blue-600" />
                  <span>Institutional Authority</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Rigorous operational protocols, uncompromised verification standards, and complete compliance transparency for corporate leaders.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-blue-900 font-bold text-sm">
                  <Users className="w-4 h-4 text-blue-600" />
                  <span>Trained &amp; Groomed Workforce</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Every guard, helper, and technician undergoes structured behavior, emergency preparedness, and service hospitality drills.
                </p>
              </div>
            </div>

            {/* Strategic Pillars checklist */}
            <div className="space-y-2.5 pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Why Procurement Committees Select CITYTEC:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Central Operations Control Desk in Pune</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Direct GeM &amp; State Tender Eligibility</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Zero Statutory Liabilities (EPF / ESIC Guaranteed)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Rapid Standby Force for Surprise Audits</span>
                </div>
              </div>
            </div>

            {/* Registered Address & Direct Phone Bar */}
            <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200/70 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
              <div className="space-y-0.5">
                <div className="font-bold text-blue-950">
                  Pune Registered Office:
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
                <span>Call {COMPANY_INFO.phone}</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
