import React, { useRef } from 'react';
import { SignatureData } from '../types';

interface InputFormProps {
  data: SignatureData;
  onChange: (field: keyof SignatureData, value: string | boolean) => void;
}

const InputForm: React.FC<InputFormProps> = ({ data, onChange }) => {
  const photoInputRef = useRef<HTMLInputElement>(null);

  const fields = [
    { id: 'fullName', label: 'Full Name', icon: 'ri-user-3-line', placeholder: 'e.g. John Doe' },
    { id: 'position', label: 'Position / Job Title', icon: 'ri-briefcase-line', placeholder: 'e.g. Sales Director' },
    { id: 'phone', label: 'Phone Number', icon: 'ri-phone-line', placeholder: 'e.g. +34 600 000 000' },
    { id: 'email', label: 'Corporate Email', icon: 'ri-mail-line', placeholder: 'e.g. john.doe@greenspec.nl' },
  ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, field: 'photoUrl') => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 1 * 1024 * 1024) {
        alert("Image is too heavy. Maximum 1MB.");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => onChange(field, reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-slate-200 space-y-8">
      <h2 className="text-xl md:text-2xl font-bold text-slate-800 flex items-center gap-3">
        <span style={{ backgroundColor: '#2dab65' }} className="text-white p-1 rounded-lg flex items-center justify-center w-10 h-10">
          <i className="ri-edit-box-line text-xl"></i>
        </span>
        Personal Information
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {fields.map((field) => (
          <div key={field.id} className={`${field.id === 'fullName' ? 'sm:col-span-2' : ''} space-y-1.5`}>
            <label className="text-xs font-bold text-slate-700 flex items-center gap-2 uppercase tracking-wide">
              <i style={{ color: '#2dab65' }} className={`${field.icon}`}></i>
              {field.label}
            </label>
            <input
              type="text"
              value={data[field.id as keyof SignatureData] as string}
              onChange={(e) => onChange(field.id as keyof SignatureData, e.target.value)}
              placeholder={field.placeholder}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-4 focus:ring-[#2dab65]/10 focus:border-[#2dab65] outline-none transition-all"
            />
          </div>
        ))}

        {/* LinkedIn Section with Toggle */}
        <div className="sm:col-span-2 space-y-4 pt-4 border-t border-slate-100">
          <div className="flex items-center justify-between bg-slate-50 p-4 rounded-xl border border-slate-100">
            <div className="flex items-center gap-3">
              <i style={{ color: '#2dab65' }} className="ri-linkedin-box-line text-xl"></i>
              <div>
                <p className="text-sm font-bold text-slate-800">Include LinkedIn?</p>
                <p className="text-xs text-slate-500">Show or hide your professional profile.</p>
              </div>
            </div>
            <button
              onClick={() => onChange('showLinkedin', !data.showLinkedin)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${data.showLinkedin ? 'bg-[#2dab65]' : 'bg-slate-200'}`}
            >
              <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${data.showLinkedin ? 'translate-x-6' : 'translate-x-1'}`} />
            </button>
          </div>

          {data.showLinkedin && (
            <div className="space-y-1.5 animate-in fade-in slide-in-from-top-2 duration-300">
              <label className="text-xs font-bold text-slate-700 flex items-center gap-2 uppercase tracking-wide">
                <i style={{ color: '#2dab65' }} className="ri-link-m"></i>
                LinkedIn Profile URL
              </label>
              <input
                type="text"
                value={data.personalLinkedin}
                onChange={(e) => onChange('personalLinkedin', e.target.value)}
                placeholder="e.g. https://linkedin.com/in/yourprofile"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-4 focus:ring-[#2dab65]/10 focus:border-[#2dab65] outline-none transition-all"
              />
            </div>
          )}
        </div>

        {/* Profile Picture Section */}
        <div className="sm:col-span-2 pt-6 border-t border-slate-100">
          <div className="space-y-4 flex flex-col">
            <label className="text-xs font-bold text-slate-800 flex items-center gap-2 uppercase tracking-wider">
              <i style={{ color: '#2dab65' }} className="ri-camera-line"></i>
              Profile Picture (Mandatory)
            </label>
            
            {/*Instructions */}
            <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 space-y-2">
              <p className="text-xs font-bold text-blue-900 flex items-center gap-2">
                <i className="ri-information-line"></i> How to use a hosted image (e.g. Sannity):
              </p>
              <ol className="text-[11px] text-blue-800 space-y-1 list-decimal list-inside">
                <li>Open the image in Sanity preview, then open it in a new tab.</li>
                <li>Copy the URL.</li>
                <li>Paste in image field.</li>
              </ol>
            </div>

            <div className="flex gap-2">
              <input
                type="text"
                value={data.photoUrl.startsWith('data:') ? 'Local image uploaded' : data.photoUrl}
                onChange={(e) => onChange('photoUrl', e.target.value)}
                className="flex-grow px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs"
                placeholder="Paste your photo URL here (Recommended)..."
              />
              <input type="file" ref={photoInputRef} onChange={(e) => handleFileChange(e, 'photoUrl')} accept="image/*" className="hidden" />
            </div>
            <p className="text-[10px] text-slate-400">Preferably a public HTTPS URL to prevent broken images in some email clients.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputForm;