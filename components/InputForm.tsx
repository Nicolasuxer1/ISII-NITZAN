
import React, { useRef } from 'react';
import { SignatureData } from '../types';

interface InputFormProps {
  data: SignatureData;
  onChange: (field: keyof SignatureData, value: string) => void;
}

const InputForm: React.FC<InputFormProps> = ({ data, onChange }) => {
  const photoInputRef = useRef<HTMLInputElement>(null);
  const logoInputRef = useRef<HTMLInputElement>(null);

  const fields = [
    { id: 'fullName', label: 'Full Name', icon: 'ri-user-3-line', placeholder: 'e.g. John Doe' },
    { id: 'position', label: 'Position / Role', icon: 'ri-briefcase-line', placeholder: 'e.g. Marketing Director' },
    { id: 'company', label: 'Company', icon: 'ri-building-4-line', placeholder: 'e.g. Greenspec' },
    { id: 'phone', label: 'Phone Number', icon: 'ri-phone-line', placeholder: 'e.g. +1 555 000 000' },
    { id: 'email', label: 'Email Address', icon: 'ri-mail-line', placeholder: 'e.g. user@greenspec.nl' },
  ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, field: 'photoUrl' | 'companyLogoUrl') => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        alert("File size is too large. Maximum is 2MB.");
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
        <span className="bg-emerald-600 text-white p-1 rounded-lg flex items-center justify-center w-10 h-10">
          <i className="ri-edit-box-line text-xl"></i>
        </span>
        Personal Information
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {fields.map((field) => (
          <div key={field.id} className={`${field.id === 'fullName' ? 'sm:col-span-2' : ''} space-y-1.5`}>
            <label className="text-xs font-bold text-slate-700 flex items-center gap-2 uppercase tracking-wide">
              <i className={`${field.icon} text-emerald-600`}></i>
              {field.label}
            </label>
            <input
              type="text"
              value={data[field.id as keyof SignatureData]}
              onChange={(e) => onChange(field.id as keyof SignatureData, e.target.value)}
              placeholder={field.placeholder}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 outline-none transition-all"
            />
          </div>
        ))}

        {/* Assets Section: Profile Picture and Logo */}
        <div className="sm:col-span-2 pt-6 border-t border-slate-100 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Profile Picture Input */}
          <div className="space-y-2 flex flex-col">
            <label className="text-xs font-bold text-slate-800 flex items-center gap-2 uppercase tracking-wider">
              <i className="ri-camera-line text-emerald-600"></i>
              Profile Picture
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={data.photoUrl.startsWith('data:') ? 'Local image uploaded' : data.photoUrl}
                onChange={(e) => onChange('photoUrl', e.target.value)}
                className="flex-grow px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs"
                placeholder="Image URL..."
              />
              <button 
                type="button"
                onClick={() => photoInputRef.current?.click()} 
                className="px-4 py-2 bg-emerald-50 text-emerald-700 rounded-lg text-xs font-bold hover:bg-emerald-100 flex items-center justify-center gap-1 transition-colors whitespace-nowrap"
              >
                <i className="ri-upload-2-line"></i> Upload
              </button>
              <input type="file" ref={photoInputRef} onChange={(e) => handleFileChange(e, 'photoUrl')} accept="image/*" className="hidden" />
            </div>
          </div>

          {/* Company Logo Input */}
          <div className="space-y-2 flex flex-col">
            <label className="text-xs font-bold text-slate-800 flex items-center gap-2 uppercase tracking-wider">
              <i className="ri-image-line text-emerald-600"></i>
              Company Logo
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={data.companyLogoUrl.startsWith('data:') ? 'Local logo uploaded' : data.companyLogoUrl}
                onChange={(e) => onChange('companyLogoUrl', e.target.value)}
                className="flex-grow px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs"
                placeholder="Logo URL..."
              />
              <button 
                type="button"
                onClick={() => logoInputRef.current?.click()} 
                className="px-4 py-2 bg-emerald-50 text-emerald-700 rounded-lg text-xs font-bold hover:bg-emerald-100 flex items-center justify-center gap-1 transition-colors whitespace-nowrap"
              >
                <i className="ri-upload-2-line"></i> Upload
              </button>
              <input type="file" ref={logoInputRef} onChange={(e) => handleFileChange(e, 'companyLogoUrl')} accept="image/*" className="hidden" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputForm;
