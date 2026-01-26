
import React from 'react';
import { SignatureData } from '../types';

interface SignaturePreviewProps {
  data: SignatureData;
}

const generateSignatureHTML = (data: SignatureData) => {
  const { fullName, position, company, phone, email, photoUrl, companyLogoUrl } = data;
  
  const fontFamily = "'Segoe UI', Tahoma, Arial, sans-serif";
  const brandGreen = "#10b981";
  const textColor = "#475569";
  
  const websiteLink = "https://www.greenspec.nl";
  const linkedinLink = "https://www.linkedin.com/company/greenspecnl/?viewAsMember=true";

  const icons = {
    phone: "https://img.icons8.com/material-rounded/32/10b981/phone.png",
    mail: "https://img.icons8.com/material-rounded/32/10b981/mail.png",
    webCircle: "https://img.icons8.com/ios-filled/64/10b981/geography--v1.png",
    linkedinCircle: "https://img.icons8.com/ios-filled/64/10b981/linkedin-circled--v1.png"
  };

  return `
<table cellpadding="0" cellspacing="0" border="0" bgcolor="#ffffff" style="background-color: #ffffff; font-family: ${fontFamily}; color: ${textColor}; line-height: 1.2; width: 480px; margin: 0; padding: 15px;">
  <tr>
    <td width="115" style="vertical-align: middle; padding-right: 20px;">
      ${photoUrl ? `<img src="${photoUrl}" width="100" height="100" style="border-radius: 50%; display: block; object-fit: cover; border: 3px solid ${brandGreen};" alt="${fullName}" />` : ''}
    </td>
    
    <td style="border-left: 2px solid ${brandGreen}; padding-left: 20px; vertical-align: middle;">
      <table cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td><span style="font-size: 22px; font-weight: 700; color: #064e3b; font-family: ${fontFamily};">${fullName || 'Your Name'}</span></td>
        </tr>
        <tr>
          <td><span style="font-size: 14px; color: #64748b; font-family: ${fontFamily};">${position || 'Position'}</span></td>
        </tr>
        <tr>
          <td style="padding-bottom: 8px;"><span style="font-size: 14px; font-weight: 700; color: ${brandGreen}; text-transform: uppercase; font-family: ${fontFamily};">${company || 'Greenspec'}</span></td>
        </tr>
      </table>

      <table cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 8px;">
        <tr>
          <td style="vertical-align: middle; font-size: 13px; font-family: ${fontFamily}; color: ${textColor};">
            ${phone ? `
              <a href="tel:${phone}" style="text-decoration: none; color: ${textColor};">
                <img src="${icons.phone}" width="14" height="14" style="vertical-align: middle; margin-right: 4px; border: 0;" alt="" /><span style="vertical-align: middle;">${phone}</span>
              </a>` : ''}
            
            ${phone && email ? `<span style="margin: 0 10px; color: #e2e8f0; vertical-align: middle;">|</span>` : ''}
            
            ${email ? `
              <a href="mailto:${email}" style="text-decoration: none; color: ${textColor};">
                <img src="${icons.mail}" width="14" height="14" style="vertical-align: middle; margin-right: 4px; border: 0;" alt="" /><span style="vertical-align: middle;">${email}</span>
              </a>` : ''}
          </td>
        </tr>
      </table>

      <table cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 10px;">
        <tr>
          <td style="padding-right: 8px;">
            <a href="${websiteLink}" target="_blank" style="text-decoration: none;">
              <img src="${icons.webCircle}" width="26" height="26" style="display: block; border: 0;" alt="Web" />
            </a>
          </td>
          <td>
            <a href="${linkedinLink}" target="_blank" style="text-decoration: none;">
              <img src="${icons.linkedinCircle}" width="26" height="26" style="display: block; border: 0;" alt="LinkedIn" />
            </a>
          </td>
        </tr>
      </table>

      <table cellpadding="0" cellspacing="0" border="0" width="100%">
        <tr>
          <td style="${companyLogoUrl ? 'padding-top: 5px; border-top: 1px solid #e2e8f0;' : ''}">
            ${companyLogoUrl ? `
              <img src="${companyLogoUrl}" height="22" style="display: block; margin-top: 10px; max-width: 130px; border: 0;" alt="Logo" />
            ` : ''}
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
  `.trim();
};

const SignaturePreview: React.FC<SignaturePreviewProps> = ({ data }) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    const html = generateSignatureHTML(data);
    try {
      const blob = new Blob([html], { type: 'text/html' });
      const textBlob = new Blob([html], { type: 'text/plain' });
      const dataItems = [new ClipboardItem({ 'text/html': blob, 'text/plain': textBlob })];
      await navigator.clipboard.write(dataItems);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      await navigator.clipboard.writeText(html);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-slate-200">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
        <h2 className="text-xl md:text-2xl font-bold text-slate-800">Signature Preview</h2>
        <button
          onClick={handleCopy}
          className={`w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm transition-all shadow-md active:scale-95 ${
            copied ? 'bg-emerald-500 text-white' : 'bg-emerald-600 text-white hover:bg-emerald-700'
          }`}
        >
          <i className={copied ? 'ri-check-double-line text-lg' : 'ri-file-copy-2-line text-lg'}></i>
          {copied ? 'Signature Copied!' : 'Copy Signature'}
        </button>
      </div>

      <div className="relative p-4 md:p-10 border-2 border-dashed border-slate-100 rounded-3xl bg-slate-50 flex items-center justify-center overflow-hidden">
        <div className="w-full flex justify-center">
          <div 
            className="bg-white p-6 rounded-2xl shadow-2xl border border-slate-100 origin-center scale-[0.6] sm:scale-75 md:scale-100 transition-transform duration-300"
            dangerouslySetInnerHTML={{ __html: generateSignatureHTML(data) }}
          />
        </div>
      </div>

      <div className="mt-10 flex items-start gap-4 bg-emerald-50 p-5 rounded-2xl border border-emerald-100">
        <div className="bg-emerald-100 p-2 rounded-lg">
          <i className="ri-shield-check-line text-emerald-600 text-2xl"></i>
        </div>
        <div>
          <p className="text-base font-bold text-emerald-900 mb-1">Dark Mode Optimized</p>
          <p className="text-sm text-emerald-800 leading-relaxed">
            Our specialized rendering engine forces a white background container, ensuring your brand identity remains perfect even in <strong>Outlook and OneDrive Dark Mode</strong>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignaturePreview;
