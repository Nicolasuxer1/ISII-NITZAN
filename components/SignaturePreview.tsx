
import React from 'react';
import { SignatureData } from '../types';

interface SignaturePreviewProps {
  data: SignatureData;
}

const generateSignatureHTML = (data: SignatureData) => {
  const { fullName, position, phone, email, photoUrl, personalLinkedin } = data;
  
  const fontFamily = "'Segoe UI', Tahoma, Arial, sans-serif";
  const brandGreen = "#2dab65";
  const textColor = "#475569";
  
  const websiteLink = "https://www.greenspec.nl";
  // Fixed Greenspec horizontal logo
  const fixedLogoUrl = "https://raw.githubusercontent.com/Nicolasuxer1/Signature/feat/ia-signature-generator/resources/logo.png";
  const LOGO_WIDTH = 150; // px
  const LOGO_HEIGHT = 32;

  const icons = {
    phone: `https://img.icons8.com/material-rounded/32/${brandGreen.replace('#', '')}/phone.png`,
    mail: `https://img.icons8.com/material-rounded/32/${brandGreen.replace('#', '')}/mail.png`,
    webCircle: `https://img.icons8.com/ios-filled/64/${brandGreen.replace('#', '')}/geography--v1.png`,
    linkedinCircle: `https://img.icons8.com/ios-filled/64/${brandGreen.replace('#', '')}/linkedin-circled--v1.png`
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
          <td style="padding-bottom: 8px;"><span style="font-size: 14px; color: #64748b; font-family: ${fontFamily};">${position || 'Position'}</span></td>
        </tr>
      </table>

      <!-- Contact Info Section with Robust Icon Alignment -->
        <table cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 12px;">
          <tr>
            ${phone ? `
              <td style="vertical-align: middle; padding-right: 6px;">
                <img src="${icons.phone}" width="14" height="14" style="display: block; border: 0;" alt="" />
              </td>
              <td
                style="
                  vertical-align: middle;
                  font-size: 13px;
                  font-family: ${fontFamily};
                  color: ${textColor};
                  white-space: nowrap;
                "
              >
                <a
                  href="tel:${phone}"
                  style="
                    text-decoration: none;
                    color: ${textColor};
                    white-space: nowrap;
                    display: inline-block;
                  "
                >
                  ${phone}
                </a>
              </td>
            ` : ''}
            
            ${phone && email ? `
              <td style="vertical-align: middle; padding: 0 10px; font-size: 13px; color: #e2e8f0; font-family: ${fontFamily};">|</td>
            ` : ''}

            ${email ? `
              <td style="vertical-align: middle; padding-right: 6px;">
                <img src="${icons.mail}" width="14" height="14" style="display: block; border: 0;" alt="" />
              </td>
              <td
                style="
                  vertical-align: middle;
                  font-size: 13px;
                  font-family: ${fontFamily};
                  color: ${textColor};
                  white-space: nowrap;
                "
              >
                <a
                  href="mailto:${email}"
                  style="
                    text-decoration: none;
                    color: ${textColor};
                    white-space: nowrap;
                    display: inline-block;
                  "
                >
                  ${email}
                </a>
              </td>
            ` : ''}
          </tr>
        </table>


      <!-- Footer: Logo on left, Socials on right -->
      <table cellpadding="10" cellspacing="10" border="0" width="100%" style="border-top: 1px solid #e2e8f0; padding-top: 20px;">
        <tr>
          <td align="left" style="vertical-align: middle;">
            <img 
              src="${fixedLogoUrl}" 
              width="${LOGO_WIDTH}" 
              height="${LOGO_HEIGHT}"
              style="display: block; border: 0; max-width: ${LOGO_WIDTH}px;"
              alt="Greenspec"
            />
          </td>
          <td align="right" style="vertical-align: middle;">
            <table cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td style="padding-right: 8px;">
                  <a href="${websiteLink}" target="_blank" style="text-decoration: none;">
                    <img src="${icons.webCircle}" width="24" height="24" style="display: block; border: 0;" alt="Web" />
                  </a>
                </td>
                <td>
                  <a href="${personalLinkedin || 'https://linkedin.com'}" target="_blank" style="text-decoration: none;">
                    <img src="${icons.linkedinCircle}" width="24" height="24" style="display: block; border: 0;" alt="LinkedIn" />
                  </a>
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
            className="bg-white p-6 rounded-2xl shadow-2xl border border-slate-100 origin-center scale-[0.6] sm:scale-75 md:scale-100 transition-transform duration-300"
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
            It is <strong>mandatory</strong> to upload a profile picture. To ensure a perfect fit, please use a <strong>1:1 aspect ratio (square)</strong> image. 
            Recommended resolution: Minimum 200x200px, Maximum 1000x1000px.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignaturePreview;
