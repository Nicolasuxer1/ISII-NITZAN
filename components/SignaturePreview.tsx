import React from 'react';
import { SignatureData } from '../types';

interface SignaturePreviewProps {
  data: SignatureData;
}

const generateSignatureHTML = (data: SignatureData) => {
  const { fullName, position, phone, email, photoUrl, personalLinkedin, showLinkedin } = data;

  const fontFamily = "Segoe UI, Tahoma, Arial, sans-serif";
  const brandRed = "#DF2929";
  const bgColor = "#000000";
  const textColor = "#ffffff";
  const mutedText = "#888888";

  const websiteUrl = "isii-nitzan.swiss";
  const websiteLink = "https://isii-nitzan.swiss";

  const logoUrl = "https://static.wixstatic.com/media/21bdd8_afed04f284154ed2987ef4d27914549d~mv2.png";

  const icons = {
    phone: `https://img.icons8.com/material-rounded/24/DF2929/phone.png`,
    mail: `https://img.icons8.com/material-rounded/24/DF2929/mail.png`,
    web: `https://img.icons8.com/material-rounded/24/DF2929/geography.png`,
    marker: `https://img.icons8.com/material-rounded/24/DF2929/marker.png`,
    linkedinRed: `https://img.icons8.com/ios-filled/24/DF2929/linkedin.png`
  };

  return `
<table cellpadding="0" cellspacing="0" border="0" bgcolor="${bgColor}" style="background-color: ${bgColor}; margin: 0; padding: 0; width: 480px; min-width: 480px; table-layout: fixed; -webkit-text-size-adjust: none; border-radius: 4px; overflow: hidden;">
  <tr>
    <td style="padding: 24px; width: 432px;">
      <table cellpadding="0" cellspacing="0" border="0" width="100%" style="width: 100%; border-collapse: collapse;">
        <tr>
          <!-- LEFT: PHOTO -->
          <td width="80" valign="top" align="left" style="width: 80px;">
            ${photoUrl ? `
              <img src="${photoUrl}" width="80" height="80" border="0" style="display: block; width: 80px; height: 80px; border-radius: 20px; object-fit: cover; filter: grayscale(20%); border: 3px solid ${brandRed};" alt="${fullName}" />
            ` : `
              <table cellpadding="0" cellspacing="0" border="0" width="80" height="80" bgcolor="#111111" style="border: 3px solid ${brandRed}; border-radius: 20px; width: 80px; height: 80px;">
                <tr><td align="center" valign="middle" style="color: ${brandRed}; font-family: ${fontFamily}; font-size: 24px; font-weight: bold;">IN</td></tr>
              </table>
            `}
          </td>

          <td width="24" style="width: 24px;"></td>

          <!-- RIGHT: DATA -->
          <td valign="top" style="text-align: left;">
            <table cellpadding="0" cellspacing="0" border="0" width="100%" style="width: 100%;">
              <tr>
                <td valign="top">
                  <div style="font-family: ${fontFamily}; font-size: 20px; font-weight: 900; color: ${textColor}; line-height: 1; margin: 0; padding: 0; text-transform: uppercase; letter-spacing: 1px;">${fullName || 'NAME SURNAME'}</div>
                  <div style="font-family: ${fontFamily}; font-size: 10px; color: ${brandRed}; line-height: 1.2; margin: 4px 0 0 0; padding: 0; font-weight: 800; text-transform: uppercase; letter-spacing: 2px;">${position || 'TECHNICAL DIRECTOR'}</div>
                </td>
              </tr>
              <tr><td height="16" style="font-size: 1px; line-height: 1px;">&nbsp;</td></tr>
              <tr>
                <td>
                  <table cellpadding="0" cellspacing="0" border="0">
                    ${phone ? `
                    <tr>
                      <td width="20" valign="middle" style="padding-bottom: 4px; width: 20px;">
                        <img src="${icons.phone}" width="12" height="12" border="0" style="display: block;" alt="P" />
                      </td>
                      <td style="font-family: ${fontFamily}; font-size: 11px; color: ${mutedText}; padding-bottom: 4px; line-height: 1;">
                        <a href="tel:${phone}" style="text-decoration: none; color: ${mutedText}; white-space: nowrap;">${phone}</a>
                      </td>
                    </tr>` : ''}
                    ${email ? `
                    <tr>
                      <td width="20" valign="middle" style="padding-bottom: 4px; width: 20px;">
                        <img src="${icons.mail}" width="12" height="12" border="0" style="display: block;" alt="E" />
                      </td>
                      <td style="font-family: ${fontFamily}; font-size: 11px; color: ${mutedText}; padding-bottom: 4px; line-height: 1;">
                        <a href="mailto:${email}" style="text-decoration: none; color: ${mutedText}; white-space: nowrap;">${email}</a>
                      </td>
                    </tr>` : ''}
                    <tr>
                      <td width="20" valign="middle" style="padding-bottom: 4px; width: 20px;">
                        <img src="${icons.marker}" width="12" height="12" border="0" style="display: block;" alt="L" />
                      </td>
                      <td style="font-family: ${fontFamily}; font-size: 11px; color: ${mutedText}; padding-bottom: 4px; line-height: 1.2;">
                        <span style="color: ${mutedText};">Via Cremignone 4C, 6924 Sorengo, Switzerland</span>
                      </td>
                    </tr>
                    <tr>
                      <td width="20" valign="middle" style="width: 20px;">
                        <img src="${icons.web}" width="12" height="12" border="0" style="display: block;" alt="W" />
                      </td>
                      <td style="font-family: ${fontFamily}; font-size: 11px; color: ${textColor}; line-height: 1;">
                        <a href="${websiteLink}" target="_blank" style="text-decoration: none; color: ${textColor}; font-weight: 700; white-space: nowrap;">${websiteUrl.toUpperCase()}</a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <tr><td height="24" style="font-size: 1px; line-height: 1px;">&nbsp;</td></tr>
        <tr>
          <td colspan="3">
            <table cellpadding="0" cellspacing="0" border="0" width="100%" style="width: 100%; border-top: 1px solid #333333; padding-top: 24px;">
              <tr>
                <td valign="middle">
                  <img src="${logoUrl}" height="24" border="0" style="display: block; height: 24px; width: auto;" alt="isii Nitzan" />
                </td>
                ${showLinkedin ? `
                <td align="right" valign="middle">
                  <a href="${personalLinkedin || '#'}" target="_blank" style="text-decoration: none;">
                    <img src="${icons.linkedinRed}" width="16" height="16" border="0" style="display: block;" alt="IN" />
                  </a>
                </td>` : ''}
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
    <div className="bg-[#0a0a0a] p-6 md:p-10 rounded-3xl shadow-2xl border border-white/5">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-10">
        <h2 className="text-xl md:text-2xl font-black text-white uppercase tracking-widest">Master Preview</h2>
        <button
          onClick={handleCopy}
          style={{ backgroundColor: '#DF2929' }}
          className={`w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-[0_0_30px_rgba(223,41,41,0.3)] active:scale-95 text-white hover:brightness-110`}
        >
          <i className={copied ? 'ri-check-double-line text-lg' : 'ri-file-copy-2-line text-lg'}></i>
          {copied ? 'Captured' : 'Deploy Signature'}
        </button>
      </div>

      <div className="relative p-6 md:p-16 border-2 border-dashed border-white/5 rounded-[40px] bg-white/[0.02] flex items-center justify-center overflow-hidden">
        <div className="w-full flex justify-center overflow-x-auto">
          <div
            className="p-8 rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/5 transition-transform duration-300 min-w-fit"
            style={{ backgroundColor: '#000000' }}
            dangerouslySetInnerHTML={{ __html: generateSignatureHTML(data) }}
          />
        </div>
      </div>
    </div>
  );
};


export default SignaturePreview;