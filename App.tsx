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
    <div className="min-h-screen bg-black text-white flex flex-col font-sans">
      {/* Header */}
      <header className="bg-[#0a0a0a] border-b border-white/10 py-6">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src="https://static.wixstatic.com/media/21bdd8_afed04f284154ed2987ef4d27914549d~mv2.png"
              alt="isii Nitzan Logo"
              className="h-10 w-auto"
            />
            <div className="h-8 w-[1px] bg-white/20 hidden sm:block"></div>
            <div>
              <h1 className="text-xl font-bold text-white tracking-widest uppercase">isii Nitzan</h1>
              <p style={{ color: '#DF2929' }} className="text-[10px] font-black uppercase tracking-[0.2em]">Signature Generator</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-tighter">
              <span style={{ color: '#DF2929' }}>Precision</span> Email Signatures
            </h2>
            <p className="text-white/50 max-w-xl mx-auto text-lg font-light">
              Crafting professional identities for the Swiss luxury water technology.
            </p>
          </div>

          <div className="flex flex-col gap-12 mb-16">
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
          <section className="bg-[#0a0a0a] rounded-3xl p-10 border border-white/5 shadow-2xl">
            <h3 className="text-2xl font-black text-white mb-8 flex items-center gap-4 uppercase tracking-widest">
              <i style={{ color: '#DF2929' }} className="ri-list-check-3"></i>
              Application Guide
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="space-y-4">
                <div style={{ backgroundColor: '#DF2929', color: '#ffffff' }} className="w-10 h-10 rounded-full flex items-center justify-center font-black shadow-[0_0_20px_rgba(223,41,41,0.4)]">1</div>
                <h4 className="font-bold text-white uppercase tracking-wider">Parameters</h4>
                <p className="text-sm text-white/40 leading-relaxed">Enter your professional metrics. The interface reflects changes in real-time.</p>
              </div>
              <div className="space-y-4">
                <div style={{ backgroundColor: '#DF2929', color: '#ffffff' }} className="w-10 h-10 rounded-full flex items-center justify-center font-black shadow-[0_0_20px_rgba(223,41,41,0.4)]">2</div>
                <h4 className="font-bold text-white uppercase tracking-wider">Export</h4>
                <p className="text-sm text-white/40 leading-relaxed">Trigger the <strong>"Copy Signature"</strong> command to capture the source to your clipboard.</p>
              </div>
              <div className="space-y-4">
                <div style={{ backgroundColor: '#DF2929', color: '#ffffff' }} className="w-10 h-10 rounded-full flex items-center justify-center font-black shadow-[0_0_20px_rgba(223,41,41,0.4)]">3</div>
                <h4 className="font-bold text-white uppercase tracking-wider">Integration</h4>
                <p className="text-sm text-white/40 leading-relaxed">Deploy into Outlook using <strong>Cmd+V</strong>. The syntax is optimized for all protocols.</p>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 py-10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/20 text-[10px] uppercase tracking-[0.3em] font-medium">
            &copy; {new Date().getFullYear()} isii Nitzan. All rights reserved. Industrial Grade.
          </p>
        </div>
      </footer>
    </div>

  );
};

export default App;