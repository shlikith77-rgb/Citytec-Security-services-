import React from 'react';
import { Shield, Lock, Award, Clock, TrendingUp, CheckCircle2 } from 'lucide-react';
import { CORE_PILLARS } from '../data/companyData';

export const TrustPillars: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <Shield className="w-5 h-5 text-blue-600" />;
      case 'Lock':
        return <Lock className="w-5 h-5 text-indigo-600" />;
      case 'Award':
        return <Award className="w-5 h-5 text-[#C5A059]" />;
      case 'Clock':
        return <Clock className="w-5 h-5 text-cyan-600" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-sky-600" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-5 h-5 text-blue-700" />;
      default:
        return <Shield className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-900 border border-blue-200 text-xs font-bold uppercase tracking-wider">
            <span>Corporate Operational Standard</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1E3F] tracking-tight">
            Engineered for Absolute Institutional Confidence
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Every contract managed by CITYTEC SECURITY SERVICES LLP is executed under our six non-negotiable operational tenets.
          </p>
        </div>

        {/* 6 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CORE_PILLARS.map((pillar, index) => (
            <div
              key={index}
              className="group relative bg-slate-50/70 hover:bg-white rounded-xl p-6 border border-slate-200 hover:border-blue-300 transition-all duration-200 shadow-xs hover:shadow-md space-y-4 text-left"
            >
              {/* Top Row: Icon + Index */}
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-lg bg-white border border-slate-200/80 shadow-xs flex items-center justify-center group-hover:scale-105 transition-transform">
                  {getIcon(pillar.icon)}
                </div>
                <span className="font-['Cinzel',serif] text-xs font-bold text-slate-400 group-hover:text-blue-700 transition-colors">
                  0{index + 1}
                </span>
              </div>

              {/* Text content */}
              <div className="space-y-1.5">
                <div className="text-xs font-semibold uppercase tracking-wider text-blue-800">
                  {pillar.subtitle}
                </div>
                <h3 className="text-lg font-bold text-[#0B1E3F]">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              {/* Bottom Subtle Accent Line */}
              <div className="w-10 h-0.5 bg-slate-200 group-hover:w-full group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-500 transition-all duration-300" />
            </div>
          ))}
        </div>

        {/* Bottom Banner Quote */}
        <div className="mt-12 p-5 rounded-xl bg-gradient-to-r from-[#0B1E3F] via-[#102A54] to-[#0B1E3F] text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm border border-blue-900">
          <div className="space-y-0.5 text-center sm:text-left">
            <h4 className="text-sm font-bold text-white tracking-wide">
              Serving Government Bodies, PSUs, IT Parks &amp; Industrial Facilities
            </h4>
            <p className="text-xs text-blue-200">
              Need certified personnel with zero compliance liabilities? We mobilize deployed teams within 48 to 72 hours.
            </p>
          </div>
          <a
            href="#estimator"
            className="shrink-0 px-4 py-2 rounded-lg bg-[#D4AF37] hover:bg-amber-400 text-slate-950 font-bold text-xs tracking-wide transition-colors shadow-xs"
          >
            Deploy Workforce →
          </a>
        </div>

      </div>
    </section>
  );
};
