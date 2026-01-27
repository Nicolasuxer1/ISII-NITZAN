import React, { useState } from 'react';
import InputForm from './components/InputForm';
import SignaturePreview from './components/SignaturePreview';
import { SignatureData, INITIAL_DATA } from './types';

const App: React.FC = () => {
  const [data, setData] = useState<SignatureData>({
    ...INITIAL_DATA,
  });

  const handleDataChange = (field: keyof SignatureData, value: string | boolean) => {
    setData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 py-6">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div style={{ backgroundColor: '#2dab65' }} className="w-10 h-10 rounded-xl shadow-lg flex items-center justify-center text-white font-black text-2xl">
              G
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900 tracking-tight">Greenspec</h1>
              <p style={{ color: '#2dab65' }} className="text-xs font-semibold uppercase tracking-wider">Signature Generator</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">
              <span style={{ color: '#2dab65' }} className="underline decoration-[#2dab65]/20 underline-offset-8">Greenspec</span> Email Signature Generator
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto text-lg">
              Create your standardized professional signature in seconds.
            </p>
          </div>

          <div className="flex flex-col gap-8 mb-16">
            {/* Personal Information Form - Always Top */}
            <div className="w-full">
              <InputForm data={data} onChange={handleDataChange} />
            </div>
            
            {/* Signature Preview - Always Bottom */}
            <div className="w-full">
              <SignaturePreview data={data} />
            </div>
          </div>

          {/* Instructions Section */}
          <section className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
              <i style={{ color: '#2dab65' }} className="ri-list-check-3"></i>
              How to use this tool?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-3">
                <div style={{ backgroundColor: '#eaf7f0', color: '#2dab65' }} className="w-10 h-10 rounded-full flex items-center justify-center font-bold">1</div>
                <h4 className="font-bold text-slate-800">Fill your information</h4>
                <p className="text-sm text-slate-500">Enter your professional details. The preview updates automatically as you type.</p>
              </div>
              <div className="space-y-3">
                <div style={{ backgroundColor: '#eaf7f0', color: '#2dab65' }} className="w-10 h-10 rounded-full flex items-center justify-center font-bold">2</div>
                <h4 className="font-bold text-slate-800">Copy the signature</h4>
                <p className="text-sm text-slate-500">Click the <strong>"Copy Signature"</strong> button. The formatted signature is saved to your clipboard.</p>
              </div>
              <div className="space-y-3">
                <div style={{ backgroundColor: '#eaf7f0', color: '#2dab65' }} className="w-10 h-10 rounded-full flex items-center justify-center font-bold">3</div>
                <h4 className="font-bold text-slate-800">Paste in Outlook</h4>
                <p className="text-sm text-slate-500">Open your email settings and use <strong>Ctrl+V</strong> to paste the signature directly.</p>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} Greenspec Ltd. Internal Use Only.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;