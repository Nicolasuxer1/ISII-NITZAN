
import React from 'react';
import { SignatureData } from '../types';

interface SignaturePreviewProps {
  data: SignatureData;
}

const generateSignatureHTML = (data: SignatureData) => {
  const { fullName, position, phone, email, photoUrl, personalLinkedin, showLinkedin } = data;
  
  const fontFamily = "'Segoe UI', Tahoma, Arial, sans-serif";
  const brandGreen = "#2dab65";
  const textColor = "#475569";
  const nameColor = "#064e3b";
  const mutedText = "#64748b";
  
  const websiteUrl = "greenspec.nl";
  const websiteLink = "https://www.greenspec.nl";
  
  // Use a square logo container as requested
  const fixedLogoUrl =
  "https://raw.githubusercontent.com/Nicolasuxer1/Signature/feat/ia-signature-generator/resources/isotipo.jpg";


  const icons = {
    phone: `https://img.icons8.com/material-rounded/24/${brandGreen.replace('#', '')}/phone.png`,
    mail: `https://img.icons8.com/material-rounded/24/${brandGreen.replace('#', '')}/mail.png`,
    web: `https://img.icons8.com/material-rounded/24/${brandGreen.replace('#', '')}/geography.png`,
    linkedinWhite: `https://img.icons8.com/ios-filled/24/ffffff/linkedin.png`
  };

  return `
<table cellpadding="0" cellspacing="0" border="0" bgcolor="#ffffff" style="background-color: #ffffff; font-family: ${fontFamily}; color: ${textColor}; line-height: 1.2; width: 450px; margin: 0; padding: 10px;">
  <tr>
    <td style="vertical-align: top;">
      <table cellpadding="0" cellspacing="0" border="0">
        <tr>
          <!-- LEFT SIDE: PHOTO + LINKEDIN STACK -->
          <td width="85" style="vertical-align: top;">
            <table cellpadding="0" cellspacing="0" border="0" width="100%">
              <tr>
                <td align="center" style="padding-bottom: 6px;">
                  <!-- Profile Photo - Scaled to 80x80 -->
                  ${photoUrl ? `
                    <img src="${photoUrl}" width="80" height="80" style="display: block; width: 80px; height: 80px; border-radius: 40px; object-fit: cover; border: 2px solid ${brandGreen};" alt="${fullName}" />
                  ` : `
                    <div style="width: 80px; height: 80px; border-radius: 40px; background-color: #f1f5f9; border: 2px solid ${brandGreen};"></div>
                  `}
                </td>
              </tr>
              ${showLinkedin ? `
              <tr>
                <td align="center">
                  <!-- LinkedIn Pill Badge - Compact -->
                  <table cellpadding="0" cellspacing="0" border="0" bgcolor="${brandGreen}" style="background-color: ${brandGreen}; border-radius: 10px;">
                    <tr>
                      <td style="padding: 2px 8px; line-height: 0;">
                        <a href="${personalLinkedin || '#'}" target="_blank" style="text-decoration: none; display: block;">
                          <img src="${icons.linkedinWhite}" width="12" height="12" style="display: block; border: 0;" alt="LinkedIn" />
                        </a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>` : ''}
            </table>
          </td>

          <!-- SYMMETRIC SPACING AND DIVIDER -->
          <td width="16"></td>
          <td width="1" style="vertical-align: top; border-left: 1px solid ${brandGreen};"></td>
          <td width="16"></td>

          <!-- RIGHT SIDE: CONTENT -->
          <td style="vertical-align: top;">
            <!-- TOP BLOCK: NAME, POSITION AND LOGO -->
            <table cellpadding="0" cellspacing="0" border="0" width="100%" style="margin-bottom: 8px;">
              <tr>
                <td style="vertical-align: top;">
                  <div style="font-size: 19px; font-weight: 700; color: ${nameColor}; font-family: ${fontFamily}; margin-bottom: 1px; line-height: 1.1;">${fullName || 'Your Name'}</div>
                  <div style="font-size: 12px; color: ${mutedText}; font-family: ${fontFamily}; line-height: 1.2;">${position || 'Position / Role'}</div>
                </td>
                <td width="36" align="right" style="vertical-align: top; padding-top: 2px;">
                  <img src="${fixedLogoUrl}" width="32" height="32" style="display: block; width: 32px; height: 32px; border: 0;" alt="Logo" />
                </td>
              </tr>
            </table>

            <!-- BOTTOM BLOCK: CONTACT INFO LIST - Scaled to 12px -->
            <table cellpadding="0" cellspacing="0" border="0">
              <!-- Phone -->
              ${phone ? `
              <tr>
                <td width="18" style="vertical-align: middle; padding-bottom: 3px;">
                  <img src="${icons.phone}" width="12" height="12" style="display: block; border: 0;" alt="" />
                </td>
                <td style="vertical-align: middle; padding-bottom: 3px; font-size: 12px; font-family: ${fontFamily}; color: ${textColor};">
                  <a href="tel:${phone}" style="text-decoration: none; color: ${textColor};">${phone}</a>
                </td>
              </tr>` : ''}
              
              <!-- Email -->
              ${email ? `
              <tr>
                <td width="18" style="vertical-align: middle; padding-bottom: 3px;">
                  <img src="${icons.mail}" width="12" height="12" style="display: block; border: 0;" alt="" />
                </td>
                <td style="vertical-align: middle; padding-bottom: 3px; font-size: 12px; font-family: ${fontFamily}; color: ${textColor};">
                  <a href="mailto:${email}" style="text-decoration: none; color: ${textColor};">${email}</a>
                </td>
              </tr>` : ''}

              <!-- Website -->
              <tr>
                <td width="18" style="vertical-align: middle;">
                  <img src="${icons.web}" width="12" height="12" style="display: block; border: 0;" alt="" />
                </td>
                <td style="vertical-align: middle; font-size: 12px; font-family: ${fontFamily}; color: ${textColor};">
                  <a href="${websiteLink}" target="_blank" style="text-decoration: none; color: ${textColor}; font-weight: 500;">${websiteUrl}</a>
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
          {copied ? 'Signature Copied!' : 'Copy Signature'}
        </button>
      </div>

      <div className="relative p-4 md:p-10 border-2 border-dashed border-slate-100 rounded-3xl bg-slate-50 flex items-center justify-center overflow-hidden">
        <div className="w-full flex justify-center">
          <div 
            className="bg-white p-6 rounded-2xl shadow-2xl border border-slate-100 origin-center scale-[0.7] sm:scale-85 md:scale-100 transition-transform duration-300"
            dangerouslySetInnerHTML={{ __html: generateSignatureHTML(data) }}
          />
        </div>
      </div>

      {/* Mandatory Photo Info Box - Blue informative toast */}
      <div className="mt-10 flex items-start gap-4 bg-blue-50 p-5 rounded-2xl border border-blue-100 shadow-sm">
        <div className="bg-blue-100 p-2 rounded-lg">
          <i className="ri-information-line text-blue-600 text-2xl"></i>
        </div>
        <div>
          <p className="text-base font-bold text-blue-900 mb-1">Profile Picture Requirements</p>
          <p className="text-sm text-blue-800 leading-relaxed">
            For maximum compatibility across all email clients, we have optimized the table structure. 
            <strong>Note for Outlook:</strong> While we use circular styles, some versions of Outlook might display the image as a square. 
            For a perfect circle everywhere, please upload a pre-cropped circular image.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignaturePreview;