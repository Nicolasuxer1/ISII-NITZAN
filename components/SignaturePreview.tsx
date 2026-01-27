import React from 'react';
import { SignatureData } from '../types';

interface SignaturePreviewProps {
  data: SignatureData;
}

const generateSignatureHTML = (data: SignatureData) => {
  const { fullName, position, phone, email, photoUrl, personalLinkedin, showLinkedin, signatureType } = data;
  
  const fontFamily = "Segoe UI, Tahoma, Arial, sans-serif";
  const brandGreen = "#2dab65";
  const textColor = "#475569";
  const nameColor = "#064e3b";
  const mutedText = "#64748b";
  
  const websiteUrl = "greenspec.nl";
  const websiteLink = "https://www.greenspec.nl";
  
  // Dynamic logos based on type
  const personalLogo = "https://cdn.sanity.io/images/1e0st73j/production/ca4da9c704776b736e8d4c22a20a388c4b382661-500x500.jpg?w=2000&fit=max&auto=format&dpr=2";
  const departmentLogo = "https://cdn.sanity.io/images/1e0st73j/production/b0427e163382a0a44eff073aa4e50b2dcc9926b0-764x153.png?w=2000&fit=max&auto=format&dpr=2";
  
  const currentLogo = signatureType === 'personal' ? personalLogo : departmentLogo;
  const logoWidth = signatureType === 'personal' ? "32" : "100";
  const logoHeight = signatureType === 'personal' ? "32" : "20";

  const icons = {
    phone: `https://img.icons8.com/material-rounded/24/${brandGreen.replace('#', '')}/phone.png`,
    mail: `https://img.icons8.com/material-rounded/24/${brandGreen.replace('#', '')}/mail.png`,
    web: `https://img.icons8.com/material-rounded/24/${brandGreen.replace('#', '')}/geography.png`,
    linkedinWhite: `https://img.icons8.com/ios-filled/24/ffffff/linkedin.png`
  };

  // Gmail Mobile Fix: table-layout fixed + explicit min-width + word-break
  return `
<table cellpadding="0" cellspacing="0" border="0" bgcolor="#ffffff" style="background-color: #ffffff; margin: 0; padding: 0; width: 440px; min-width: 440px; table-layout: fixed; -webkit-text-size-adjust: none;">
  <tr>
    <td style="padding: 10px; width: 420px;">
      <table cellpadding="0" cellspacing="0" border="0" width="100%" style="width: 100%; border-collapse: collapse;">
        <tr>
          <!-- LEFT COLUMN: PHOTO + LINKEDIN -->
          <td width="75" valign="top" align="center" style="width: 75px;">
            <table cellpadding="0" cellspacing="0" border="0" width="75" style="width: 75px;">
              <tr>
                <td align="center" style="padding-bottom: 6px;">
                  <!-- Profile Photo -->
                  ${photoUrl ? `
                    <img src="${photoUrl}" width="70" height="70" border="0" style="display: block; width: 70px; height: 70px; border-radius: 35px; object-fit: cover; border: 2px solid ${brandGreen};" alt="${fullName}" />
                  ` : `
                    <table cellpadding="0" cellspacing="0" border="0" width="70" height="70" bgcolor="#f1f5f9" style="border: 2px solid ${brandGreen}; border-radius: 35px; width: 70px; height: 70px;">
                      <tr><td>&nbsp;</td></tr>
                    </table>
                  `}
                </td>
              </tr>
              ${showLinkedin ? `
              <tr>
                <td align="center">
                  <!-- LinkedIn Pill -->
                  <table cellpadding="0" cellspacing="0" border="0" bgcolor="${brandGreen}" style="background-color: ${brandGreen}; border-radius: 8px;">
                    <tr>
                      <td style="padding: 2px 6px; line-height: 0;">
                        <a href="${personalLinkedin || '#'}" target="_blank" style="text-decoration: none;">
                          <img src="${icons.linkedinWhite}" width="10" height="10" border="0" style="display: block; border: 0;" alt="IN" />
                        </a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>` : ''}
            </table>
          </td>

          <!-- SYMMETRIC DIVIDER -->
          <td width="15" style="width: 15px;"></td>
          <td width="1" bgcolor="${brandGreen}" style="font-size: 1px; line-height: 1px; width: 1px;">&nbsp;</td>
          <td width="15" style="width: 15px;"></td>

          <!-- RIGHT COLUMN: DATA -->
          <td valign="top" style="text-align: left;">
            <table cellpadding="0" cellspacing="0" border="0" width="100%" style="width: 100%;">
              <!-- Name and Position -->
              <tr>
                <td valign="top">
                  <table cellpadding="0" cellspacing="0" border="0" width="100%" style="width: 100%;">
                    <tr>
                      <td valign="top" style="text-align: left;">
                        <div style="font-family: ${fontFamily}; font-size: 17px; font-weight: 700; color: ${nameColor}; line-height: 1.1; margin: 0; padding: 0;">${fullName || 'Name Surname'}</div>
                        <div style="font-family: ${fontFamily}; font-size: 11px; color: ${mutedText}; line-height: 1.3; margin: 2px 0 0 0; padding: 0;">${position || 'Position / Department'}</div>
                      </td>
                      <td width="${logoWidth}" align="right" valign="top" style="width: ${logoWidth}px;">
                        <img src="${currentLogo}" width="${logoWidth}" height="${logoHeight}" border="0" style="display: block; width: ${logoWidth}px; height: ${logoHeight}px; max-width: none;" alt="Logo" />
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <!-- Spacer -->
              <tr><td height="8" style="font-size: 1px; line-height: 1px;">&nbsp;</td></tr>
              <!-- Contact List -->
              <tr>
                <td>
                  <table cellpadding="0" cellspacing="0" border="0">
                    <!-- Phone -->
                    ${phone ? `
                    <tr>
                      <td width="16" valign="middle" style="padding-bottom: 2px; width: 16px;">
                        <img src="${icons.phone}" width="11" height="11" border="0" style="display: block;" alt="P" />
                      </td>
                      <td style="font-family: ${fontFamily}; font-size: 11px; color: ${textColor}; padding-bottom: 2px; line-height: 1;">
                        <a href="tel:${phone}" style="text-decoration: none; color: ${textColor}; white-space: nowrap;">${phone}</a>
                      </td>
                    </tr>` : ''}
                    <!-- Email -->
                    ${email ? `
                    <tr>
                      <td width="16" valign="middle" style="padding-bottom: 2px; width: 16px;">
                        <img src="${icons.mail}" width="11" height="11" border="0" style="display: block;" alt="E" />
                      </td>
                      <td style="font-family: ${fontFamily}; font-size: 11px; color: ${textColor}; padding-bottom: 2px; line-height: 1;">
                        <a href="mailto:${email}" style="text-decoration: none; color: ${textColor}; white-space: nowrap;">${email}</a>
                      </td>
                    </tr>` : ''}
                    <!-- Web -->
                    <tr>
                      <td width="16" valign="middle" style="width: 16px;">
                        <img src="${icons.web}" width="11" height="11" border="0" style="display: block;" alt="W" />
                      </td>
                      <td style="font-family: ${fontFamily}; font-size: 11px; color: ${textColor}; line-height: 1;">
                        <a href="${websiteLink}" target="_blank" style="text-decoration: none; color: ${textColor}; font-weight: 600; white-space: nowrap;">${websiteUrl}</a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
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
          style={{ backgroundColor: '#2dab65' }}
          className={`w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm transition-all shadow-md active:scale-95 text-white opacity-90 hover:opacity-100 hover:shadow-lg`}
        >
          <i className={copied ? 'ri-check-double-line text-lg' : 'ri-file-copy-2-line text-lg'}></i>
          {copied ? 'Copied!' : 'Copy Signature'}
        </button>
      </div>

      <div className="relative p-4 md:p-10 border-2 border-dashed border-slate-100 rounded-3xl bg-slate-50 flex items-center justify-center overflow-hidden">
        <div className="w-full flex justify-center overflow-x-auto">
          <div 
            className="bg-white p-6 rounded-2xl shadow-2xl border border-slate-100 transition-transform duration-300 min-w-fit"
            dangerouslySetInnerHTML={{ __html: generateSignatureHTML(data) }}
          />
        </div>
      </div>
    </div>
  );
};

export default SignaturePreview;