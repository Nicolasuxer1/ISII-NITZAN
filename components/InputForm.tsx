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
    <div className="bg-[#0a0a0a] p-6 md:p-10 rounded-3xl shadow-2xl border border-white/5 space-y-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
        <h2 className="text-xl md:text-2xl font-black text-white flex items-center gap-4 uppercase tracking-widest">
          <span style={{ backgroundColor: '#DF2929' }} className="text-white p-2 rounded-xl flex items-center justify-center w-12 h-12 shadow-[0_0_20px_rgba(223,41,41,0.3)]">
            <i className="ri-edit-box-line text-2xl"></i>
          </span>
          Profile Analytics
        </h2>

        {/* Signature Type Toggle */}
        <div className="flex bg-white/5 p-1.5 rounded-2xl border border-white/10 self-start">
          <button
            onClick={() => onChange('signatureType', 'personal')}
            className={`px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${data.signatureType === 'personal' ? 'bg-[#DF2929] shadow-lg text-white' : 'text-white/30 hover:text-white/60'}`}
          >
            Personal
          </button>
          <button
            onClick={() => onChange('signatureType', 'department')}
            className={`px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${data.signatureType === 'department' ? 'bg-[#DF2929] shadow-lg text-white' : 'text-white/30 hover:text-white/60'}`}
          >
            Dept
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {fields.map((field) => (
          <div key={field.id} className={`${field.id === 'fullName' ? 'sm:col-span-2' : ''} space-y-2.5`}>
            <label className="text-[10px] font-black text-white/50 flex items-center gap-3 uppercase tracking-[0.2em]">
              <i style={{ color: '#DF2929' }} className={`${field.icon} text-lg`}></i>
              {field.label}
            </label>
            <input
              type="text"
              value={data[field.id as keyof SignatureData] as string}
              onChange={(e) => onChange(field.id as keyof SignatureData, e.target.value)}
              placeholder={field.placeholder}
              className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-sm text-white placeholder:text-white/20 focus:ring-4 focus:ring-[#DF2929]/20 focus:border-[#DF2929] outline-none transition-all font-medium"
            />
          </div>
        ))}

        {/* LinkedIn Section */}
        <div className="sm:col-span-2 space-y-6 pt-6 border-t border-white/5">
          <div className="flex items-center justify-between bg-white/5 p-5 rounded-2xl border border-white/10">
            <div className="flex items-center gap-4">
              <i style={{ color: '#DF2929' }} className="ri-linkedin-box-line text-2xl"></i>
              <div>
                <p className="text-sm font-black text-white uppercase tracking-wider">Social Presence</p>
                <p className="text-xs text-white/40">Integrate your professional network.</p>
              </div>
            </div>
            <button
              onClick={() => onChange('showLinkedin', !data.showLinkedin)}
              className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors focus:outline-none ${data.showLinkedin ? 'bg-[#DF2929]' : 'bg-white/10'}`}
            >
              <span className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${data.showLinkedin ? 'translate-x-[22px]' : 'translate-x-1'}`} />
            </button>
          </div>

          {data.showLinkedin && (
            <div className="space-y-2.5 animate-in fade-in slide-in-from-top-2 duration-300">
              <label className="text-[10px] font-black text-white/50 flex items-center gap-3 uppercase tracking-[0.2em]">
                <i style={{ color: '#DF2929' }} className="ri-link-m text-lg"></i>
                Profile URL
              </label>
              <input
                type="text"
                value={data.personalLinkedin}
                onChange={(e) => onChange('personalLinkedin', e.target.value)}
                placeholder="https://linkedin.com/in/..."
                className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-sm text-white focus:ring-4 focus:ring-[#DF2929]/20 focus:border-[#DF2929] outline-none transition-all font-medium"
              />
            </div>
          )}
        </div>

        {/* Profile Picture Section */}
        <div className="sm:col-span-2 pt-8 border-t border-white/5">
          <div className="space-y-6 flex flex-col">
            <label className="text-[10px] font-black text-white/50 flex items-center gap-3 uppercase tracking-[0.2em]">
              <i style={{ color: '#DF2929' }} className="ri-camera-line text-lg"></i>
              Biometric Visualization
            </label>

            <div className="bg-[#DF2929]/5 p-5 rounded-2xl border border-[#DF2929]/20 space-y-3">
              <p className="text-xs font-black text-[#DF2929] flex items-center gap-3 uppercase tracking-wider">
                <i className="ri-information-line"></i> How to use a hosted image (e.g. Sanity):
              </p>
              <ol className="text-[11px] text-white/60 space-y-2 list-decimal list-inside leading-relaxed font-light">
                <li>Open the image in Sanity preview, then open it in a new tab.</li>
                <li>Copy the URL.</li>
                <li>Paste in image field.</li>
              </ol>
            </div>

            <div className="flex gap-4">
              <input
                type="text"
                value={data.photoUrl.startsWith('data:') ? 'L-FILE:[ENCRYPTED]' : data.photoUrl}
                onChange={(e) => onChange('photoUrl', e.target.value)}
                className="flex-grow px-5 py-3.5 bg-white/5 border border-white/10 rounded-2xl text-xs text-white placeholder:text-white/20 font-medium"
                placeholder="Asset Source URL..."
              />
              <button
                type="button"
                onClick={() => photoInputRef.current?.click()}
                style={{ backgroundColor: '#DF2929' }}
                className="px-6 py-3.5 rounded-2xl text-[10px] font-black text-white uppercase tracking-widest hover:brightness-110 flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(223,41,41,0.2)] whitespace-nowrap"
              >
                <i className="ri-upload-2-line text-sm"></i> Upload
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