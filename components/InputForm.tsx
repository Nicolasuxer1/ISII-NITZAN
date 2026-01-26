
import React, { useRef } from 'react';
import { SignatureData } from '../types';

interface InputFormProps {
  data: SignatureData;
  onChange: (field: keyof SignatureData, value: string) => void;
}

const InputForm: React.FC<InputFormProps> = ({ data, onChange }) => {
  const photoInputRef = useRef<HTMLInputElement>(null);

  const fields = [
    { id: 'fullName', label: 'Full Name', icon: 'ri-user-3-line', placeholder: 'e.g. John Doe' },
    { id: 'position', label: 'Position / Role', icon: 'ri-briefcase-line', placeholder: 'e.g. Marketing Director' },
    { id: 'phone', label: 'Phone Number', icon: 'ri-phone-line', placeholder: 'e.g. +1 555 000 000' },
    { id: 'email', label: 'Email Address', icon: 'ri-mail-line', placeholder: 'e.g. user@greenspec.nl' },
    { id: 'personalLinkedin', label: 'Personal LinkedIn URL', icon: 'ri-linkedin-box-line', placeholder: 'e.g. https://linkedin.com/in/yourprofile' },
  ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, field: 'photoUrl') => {
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
        <span style={{ backgroundColor: '#2dab65' }} className="text-white p-1 rounded-lg flex items-center justify-center w-10 h-10">
          <i className="ri-edit-box-line text-xl"></i>
        </span>
        Personal Information
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {fields.map((field) => (
          <div key={field.id} className={`${field.id === 'fullName' || field.id === 'personalLinkedin' ? 'sm:col-span-2' : ''} space-y-1.5`}>
            <label className="text-xs font-bold text-slate-700 flex items-center gap-2 uppercase tracking-wide">
              <i style={{ color: '#2dab65' }} className={`${field.icon}`}></i>
              {field.label}
            </label>
            <input
              type="text"
              value={data[field.id as keyof SignatureData]}
              onChange={(e) => onChange(field.id as keyof SignatureData, e.target.value)}
              placeholder={field.placeholder}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-4 focus:ring-[#2dab65]/10 focus:border-[#2dab65] outline-none transition-all"
            />
          </div>
        ))}

        {/* Profile Picture Section */}
        <div className="sm:col-span-2 pt-6 border-t border-slate-100">
          <div className="space-y-2 flex flex-col">
            <label className="text-xs font-bold text-slate-800 flex items-center gap-2 uppercase tracking-wider">
              <i style={{ color: '#2dab65' }} className="ri-camera-line"></i>
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
                style={{ color: '#2dab65', backgroundColor: '#eaf7f0' }}
                className="px-4 py-2 rounded-lg text-xs font-bold hover:bg-[#d5eedf] flex items-center justify-center gap-1 transition-colors whitespace-nowrap"
              >
                <i className="ri-upload-2-line"></i> Upload
              </button>
              <input type="file" ref={photoInputRef} onChange={(e) => handleFileChange(e, 'photoUrl')} accept="image/*" className="hidden" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputForm;
