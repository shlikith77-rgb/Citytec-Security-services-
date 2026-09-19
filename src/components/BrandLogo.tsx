import React from 'react';

interface BrandLogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'footer';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  layout?: 'horizontal' | 'stacked' | 'badge';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  variant = 'light',
  size = 'md',
  layout = 'horizontal'
}) => {
  const isDark = variant === 'dark' || variant === 'footer';

  // If stacked layout is requested, render the exact unified official logo mark as uploaded by user
  if (layout === 'stacked') {
    const imgHeight = {
      sm: 'h-14',
      md: 'h-20',
      lg: 'h-28',
      xl: 'h-36'
    }[size];

    return (
      <div className={`inline-flex flex-col items-center select-none ${className}`}>
        <img
          src={isDark ? '/citytec-official-logo-dark.svg' : '/citytec-official-logo.svg'}
          alt="CITYTEC SECURITY SERVICES LLP — SECURITY | TRUST | PROTECTION"
          className={`${imgHeight} w-auto object-contain drop-shadow-sm`}
          referrerPolicy="no-referrer"
        />
      </div>
    );
  }

  // If badge layout is requested, render a polished container with the official logo
  if (layout === 'badge') {
    return (
      <div className={`inline-flex items-center justify-center p-3 rounded-2xl ${
        isDark ? 'bg-slate-900/90 border border-slate-700/60 shadow-xl' : 'bg-white border border-slate-200/80 shadow-md'
      } select-none ${className}`}>
        <img
          src={isDark ? '/citytec-official-logo-dark.svg' : '/citytec-official-logo.svg'}
          alt="CITYTEC SECURITY SERVICES LLP"
          className={`${size === 'lg' ? 'h-24' : 'h-16'} w-auto object-contain`}
          referrerPolicy="no-referrer"
        />
      </div>
    );
  }

  // Horizontal layout for Headers, Navigation & Footers
  // Shows the official C-T Skyline emblem on the left, and the 3 official lines prominently on the right
  const dimensions = {
    sm: {
      iconSize: 'w-10 h-8',
      titleSize: 'text-lg sm:text-xl tracking-[0.14em]',
      llpSize: 'text-[9px] sm:text-[10px] tracking-[0.12em]',
      mottoSize: 'text-[7.5px] sm:text-[8.5px] tracking-[0.14em]',
      lineW1: 'w-2.5 sm:w-3.5',
      lineW2: 'w-2 sm:w-3',
      gap: 'gap-2.5'
    },
    md: {
      iconSize: 'w-14 h-11 sm:w-16 sm:h-12',
      titleSize: 'text-xl sm:text-2xl font-black tracking-[0.16em]',
      llpSize: 'text-[10px] sm:text-[11px] tracking-[0.14em]',
      mottoSize: 'text-[8.5px] sm:text-[9.5px] tracking-[0.16em]',
      lineW1: 'w-3.5 sm:w-5',
      lineW2: 'w-3 sm:w-4',
      gap: 'gap-3'
    },
    lg: {
      iconSize: 'w-20 h-16',
      titleSize: 'text-3xl font-black tracking-[0.18em]',
      llpSize: 'text-xs font-extrabold tracking-[0.16em]',
      mottoSize: 'text-[10.5px] font-bold tracking-[0.18em]',
      lineW1: 'w-6',
      lineW2: 'w-5',
      gap: 'gap-4'
    },
    xl: {
      iconSize: 'w-28 h-22',
      titleSize: 'text-4xl font-black tracking-[0.20em]',
      llpSize: 'text-sm font-extrabold tracking-[0.18em]',
      mottoSize: 'text-xs font-bold tracking-[0.20em]',
      lineW1: 'w-8',
      lineW2: 'w-6',
      gap: 'gap-5'
    }
  }[size];

  return (
    <div
      className={`inline-flex items-center ${dimensions.gap} select-none ${className}`}
      aria-label="CITYTEC SECURITY SERVICES LLP — SECURITY | TRUST | PROTECTION"
    >
      {/* 1. Official Emblem: Circular C-T Monogram with High-Rise City Skyline */}
      <div className="relative shrink-0 flex items-center justify-center">
        <svg
          viewBox="0 0 540 400"
          className={`${dimensions.iconSize} drop-shadow-xs`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id={`hlNavyGrad-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={isDark ? '#60A5FA' : '#071E4A'} />
              <stop offset="50%" stopColor={isDark ? '#3B82F6' : '#0B2D68'} />
              <stop offset="100%" stopColor={isDark ? '#93C5FD' : '#144DA0'} />
            </linearGradient>

            <linearGradient id={`hlSkylineGrad-${variant}`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={isDark ? '#60A5FA' : '#2563EB'} />
              <stop offset="50%" stopColor={isDark ? '#3B82F6' : '#10448E'} />
              <stop offset="100%" stopColor={isDark ? '#1E3A8A' : '#071E4A'} />
            </linearGradient>

            <linearGradient id={`hlGreyFacet-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={isDark ? '#CBD5E1' : '#94A3B8'} />
              <stop offset="100%" stopColor={isDark ? '#94A3B8' : '#64748B'} />
            </linearGradient>
          </defs>

          <g transform="translate(270, 200)">
            {/* Skyline Silhouettes */}
            <g fill={`url(#hlSkylineGrad-${variant})`}>
              <polygon points="-245,30 -245,-45 -243,-45 -243,-80 -242,-80 -242,-45 -240,-45 -240,30" />
              <rect x="-238" y="-40" width="30" height="70" />
              <rect x="-205" y="-70" width="28" height="100" />
              <polygon points="-188,30 -188,-100 -185,-100 -185,-135 -183,-135 -183,-100 -180,-100 -180,30" />
              <rect x="-175" y="-55" width="25" height="85" />
              <rect x="-148" y="-90" width="34" height="120" />
              
              {/* Window slits */}
              <g fill={isDark ? '#0F172A' : '#FFFFFF'} opacity="0.8">
                <rect x="-143" y="-82" width="24" height="3" />
                <rect x="-143" y="-73" width="24" height="3" />
                <rect x="-143" y="-64" width="24" height="3" />
                <rect x="-143" y="-55" width="24" height="3" />
                <rect x="-143" y="-46" width="24" height="3" />
              </g>

              <rect x="-112" y="-30" width="26" height="60" />
              <polygon points="-84,30 -84,-15 -68,-25 -68,30" fill={isDark ? '#94A3B8' : '#64748B'} />

              <rect x="-55" y="10" width="22" height="20" />
              <rect x="-30" y="5" width="28" height="25" />
              <rect x="2" y="12" width="25" height="18" />
              <rect x="30" y="8" width="24" height="22" />

              <rect x="56" y="-18" width="26" height="48" fill={isDark ? '#94A3B8' : '#64748B'} />
              <polygon points="84,30 84,-28 102,-18 102,30" />
              <rect x="104" y="-50" width="25" height="80" />

              <rect x="131" y="-85" width="32" height="115" />
              <g fill={isDark ? '#0F172A' : '#FFFFFF'} opacity="0.8">
                <rect x="136" y="-78" width="22" height="3" />
                <rect x="136" y="-69" width="22" height="3" />
                <rect x="136" y="-60" width="22" height="3" />
                <rect x="136" y="-51" width="22" height="3" />
              </g>

              <polygon points="174,30 174,-95 178,-115 179,-138 181,-138 182,-115 186,-95 186,30" />
              <rect x="190" y="-70" width="28" height="100" />
              <rect x="220" y="-38" width="26" height="68" />
              <rect x="248" y="-15" width="18" height="45" />
            </g>

            {/* Circular C Monogram */}
            <path
              d="M -15, -145
                 A 135 135 0 1 0 105, 50
                 L 62, 28
                 A 88 88 0 1 1 -10, -98
                 L 52, -98
                 L 52, -145
                 Z"
              fill={`url(#hlNavyGrad-${variant})`}
            />

            {/* T Top Bar */}
            <path
              d="M -90, -85
                 L 32, -85
                 L 32, -45
                 L -90, -45
                 Z"
              fill={`url(#hlNavyGrad-${variant})`}
            />

            {/* T Stem */}
            <path
              d="M -48, -45
                 L -4, -45
                 L -4, 45
                 L -48, -4
                 Z"
              fill={`url(#hlNavyGrad-${variant})`}
            />

            {/* Right Beveled Accent (Grey Facet) */}
            <path
              d="M -4, -45
                 L 30, -10
                 L 8, 48
                 L -4, 45
                 Z"
              fill={`url(#hlGreyFacet-${variant})`}
            />

            {/* Upper Right Bevel */}
            <path
              d="M 68, -120
                 L 115, -70
                 L 92, -50
                 L 52, -98
                 Z"
              fill={`url(#hlGreyFacet-${variant})`}
            />

            {/* Lower Ground Arc */}
            <path
              d="M -260, 48
                 Q 0, 26 260, 48
                 L 255, 62
                 Q 0, 38 -255, 62
                 Z"
              fill={`url(#hlNavyGrad-${variant})`}
            />
          </g>
        </svg>
      </div>

      {/* 2. Official Typography Hierarchy (3 Distinct Lines as specified) */}
      <div className="flex flex-col text-left justify-center leading-none">
        {/* Line 1: Wordmark CITYTEC - CITY in dark navy blue, TEC in royal blue combination */}
        <div className="flex items-center">
          <span
            className={`font-black uppercase tracking-[0.14em] ${dimensions.titleSize}`}
            style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
          >
            <span className={isDark ? 'text-white' : 'text-[#061A40]'}>CITY</span>
            <span
              className={
                isDark
                  ? 'bg-gradient-to-r from-blue-400 to-sky-300 bg-clip-text text-transparent'
                  : 'bg-gradient-to-r from-[#0C3577] to-[#2563EB] bg-clip-text text-transparent'
              }
            >
              TEC
            </span>
          </span>
        </div>

        {/* Line 2: — SECURITY SERVICES LLP — (Dark gray lettering with thin horizontal blue lines) */}
        <div className="flex items-center gap-1 sm:gap-1.5 mt-1 sm:mt-1.5 leading-none">
          <span className={`h-[1.5px] ${dimensions.lineW1} ${isDark ? 'bg-blue-400' : 'bg-blue-600'}`} />
          <span
            className={`font-black uppercase tracking-wider ${dimensions.llpSize} ${
              isDark ? 'text-slate-300' : 'text-[#475569]'
            }`}
          >
            SECURITY SERVICES LLP
          </span>
          <span className={`h-[1.5px] ${dimensions.lineW1} ${isDark ? 'bg-blue-400' : 'bg-blue-600'}`} />
        </div>

        {/* Line 3: — SECURITY | TRUST | PROTECTION — (Blue lettering with vertical bars and horizontal blue lines) */}
        <div className="flex items-center gap-1 sm:gap-1.5 mt-1 sm:mt-1.5 leading-none">
          <span className={`h-[1.5px] ${dimensions.lineW2} ${isDark ? 'bg-sky-400' : 'bg-blue-600'}`} />
          <span
            className={`font-bold uppercase tracking-wider ${dimensions.mottoSize} ${
              isDark ? 'text-sky-300' : 'text-[#1D4ED8]'
            }`}
          >
            SECURITY &nbsp;|&nbsp; TRUST &nbsp;|&nbsp; PROTECTION
          </span>
          <span className={`h-[1.5px] ${dimensions.lineW2} ${isDark ? 'bg-sky-400' : 'bg-blue-600'}`} />
        </div>
      </div>
    </div>
  );
};
