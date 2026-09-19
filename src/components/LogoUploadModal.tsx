import React, { useState } from 'react';
import { X, Upload, CheckCircle2, RefreshCw, AlertCircle } from 'lucide-react';

interface LogoUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLogo: string | null;
  onApplyLogo: (logoUrl: string | null) => void;
}

export const LogoUploadModal: React.FC<LogoUploadModalProps> = ({
  isOpen,
  onClose,
  currentLogo,
  onApplyLogo,
}) => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(currentLogo);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setErrorMsg('Please select a valid image file (PNG, JPG, SVG, or WEBP).');
      return;
    }

    setErrorMsg(null);
    const reader = new FileReader();
    reader.onload = () => {
      setPreviewUrl(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleSave = () => {
    onApplyLogo(previewUrl);
    onClose();
  };

  const handleReset = () => {
    setPreviewUrl(null);
    onApplyLogo(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl border border-slate-200 overflow-hidden">
        {/* Modal Header */}
        <div className="bg-[#0B1E3F] px-6 py-4 text-white flex items-center justify-between border-b border-blue-900/40">
          <div>
            <h3 className="font-semibold text-lg text-white">Official Company Logo</h3>
            <p className="text-xs text-blue-200">
              Preview or replace the CITYTEC SECURITY SERVICES LLP logo
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5">
          <div className="p-3.5 bg-blue-50/80 rounded-xl border border-blue-100 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
            <div className="text-xs text-slate-700 leading-relaxed">
              <span className="font-semibold text-blue-950">Client Note:</span> As specified in your request, a bespoke corporate vector crest is currently configured. You can upload your official logo right here to preview how it integrates across the navigation bar and footer!
            </div>
          </div>

          {/* Current Preview */}
          <div className="border border-dashed border-slate-300 rounded-xl p-6 bg-slate-50 flex flex-col items-center justify-center text-center">
            {previewUrl ? (
              <div className="space-y-3">
                <div className="p-4 bg-white rounded-lg shadow-sm border border-slate-200 inline-block max-w-[240px]">
                  <img
                    src={previewUrl}
                    alt="Logo Preview"
                    className="max-h-16 w-auto object-contain mx-auto"
                  />
                </div>
                <p className="text-xs font-medium text-emerald-600 flex items-center justify-center gap-1">
                  <CheckCircle2 className="w-4 h-4" /> Official Logo Ready for Preview
                </p>
              </div>
            ) : (
              <div className="space-y-2">
                <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mx-auto">
                  <Upload className="w-6 h-6" />
                </div>
                <p className="text-xs text-slate-600">
                  Select your PNG, SVG, or high-res JPG logo file
                </p>
              </div>
            )}

            <label className="mt-4 cursor-pointer inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0B1E3F] text-white text-xs font-semibold hover:bg-blue-900 transition-colors shadow-sm">
              <Upload className="w-3.5 h-3.5" />
              <span>Browse Image File</span>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
          </div>

          {errorMsg && (
            <p className="text-xs text-rose-600 font-medium">{errorMsg}</p>
          )}

          {/* Action buttons */}
          <div className="flex items-center justify-between pt-2 border-t border-slate-100">
            {previewUrl && (
              <button
                type="button"
                onClick={handleReset}
                className="text-xs font-medium text-slate-500 hover:text-slate-800 flex items-center gap-1.5"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                Reset to Default Crest
              </button>
            )}
            <div className="flex items-center gap-2 ml-auto">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-800 rounded-lg hover:bg-slate-100 transition-colors"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSave}
                className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm transition-colors"
              >
                Apply to Website
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
