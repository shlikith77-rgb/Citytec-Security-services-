import React from 'react';

interface BrandLogoProps {
  customLogoUrl?: string | null;
  className?: string;
  variant?: 'light' | 'dark' | 'footer';
  onClickUpload?: () => void;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  customLogoUrl,
  className = '',
  variant = 'light',
  onClickUpload
}) => {
  if (customLogoUrl) {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <img
          src={customLogoUrl}
          alt="CITYTEC SECURITY SERVICES LLP Official Logo"
          className="h-11 w-auto max-w-[180px] object-contain"
        />
        {onClickUpload && (
          <button
            type="button"
            onClick={onClickUpload}
            title="Change uploaded logo"
            className="text-[10px] text-slate-400 hover:text-blue-600 transition-colors uppercase tracking-wider underline ml-1"
          >
            Change
          </button>
        )}
      </div>
    );
  }

  const isDark = variant === 'dark' || variant === 'footer';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Precision Vector Emblem */}
      <div className="relative flex items-center justify-center">
        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#0F2850] via-[#0A192F] to-[#050D1A] p-0.5 shadow-md shadow-blue-950/30 border border-blue-400/20 flex items-center justify-center group-hover:border-amber-400/50 transition-colors">
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full p-1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Outer Protective Shield Geometry */}
            <path
              d="M50 8L84 22V50C84 72 68 89 50 94C32 89 16 72 16 50V22L50 8Z"
              className="fill-blue-900/60 stroke-[#3B82F6]"
              strokeWidth="3"
            />
            {/* Inner Shield Contour with Gold Accent */}
            <path
              d="M50 17L76 28V49C76 66 63 80 50 84C37 80 24 66 24 49V28L50 17Z"
              className="stroke-[#D4AF37]/70"
              strokeWidth="1.5"
              strokeDasharray="2 2"
            />
            {/* Architectural Stylized 'C' and Crest Core */}
            <path
              d="M60 38C58 35 54 33 50 33C40 33 33 41 33 51C33 61 40 69 50 69C55 69 59 66 61 62"
              stroke="white"
              strokeWidth="4.5"
              strokeLinecap="round"
            />
            {/* Tech / Security Central Diamond Star */}
            <polygon
              points="50,44 53,51 60,51 54,56 56,63 50,58 44,63 46,56 40,51 47,51"
              fill="#D4AF37"
            />
            <circle cx="50" cy="51" r="2" fill="#0A192F" />
          </svg>
        </div>
        {/* Restrained Gold Status Pip */}
        <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-[#D4AF37] border-2 border-[#0A192F] shadow-sm"></span>
      </div>

      {/* Typography Hierarchy */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span
            className={`font-['Cinzel',serif] tracking-wider text-xl font-extrabold leading-none ${
              isDark ? 'text-white' : 'text-[#0B1E3F]'
            }`}
          >
            CITYTEC
          </span>
          <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-blue-950/10 text-blue-800 border border-blue-200/50 uppercase tracking-widest">
            LLP
          </span>
        </div>
        <span
          className={`text-[10.5px] font-semibold tracking-wider uppercase mt-0.5 ${
            isDark ? 'text-blue-200/80' : 'text-slate-600'
          }`}
        >
          Security & Facility Services
        </span>
      </div>
    </div>
  );
};
