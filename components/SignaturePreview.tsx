import React from 'react';
import { SignatureData } from '../types';

interface SignaturePreviewProps {
  data: SignatureData;
}

const generateSignatureHTML = (data: SignatureData) => {
  const { fullName, position, phone, email, photoUrl, personalLinkedin, showLinkedin } = data;

  const fontFamily = "Segoe UI, Tahoma, Arial, sans-serif";
  const brandRed = "#DF2929";
  // Default Light Theme Colors (Improved Contrast)
  const lightText = "#222222";
  const lightMuted = "#666666";
  const lightBorder = "#d0d0d0";
  // Dark Theme Colors (Improved Contrast)
  const darkText = "#ffffff";
  const darkMuted = "#aaaaaa";
  const darkBorder = "#444444";

  const websiteUrl = "isii-nitzan.swiss";
  const websiteLink = "https://isii-nitzan.swiss";

  const logoWhiteUrl = "https://static.wixstatic.com/media/21bdd8_afed04f284154ed2987ef4d27914549d~mv2.png";
  const logoBlackUrl = "https://vivent-biosignals.com/wp-content/uploads/2025/06/Group-234.png";

  const icons = {
    phone: `https://img.icons8.com/material-rounded/24/DF2929/phone.png`,
    mail: `https://img.icons8.com/material-rounded/24/DF2929/mail.png`,
    web: `https://img.icons8.com/material-rounded/24/DF2929/geography.png`,
  };

  return `
<style type="text/css">
  /* Base Light Theme Styles */
  .sig-text { color: ${lightText} !important; }
  .sig-muted { color: ${lightMuted} !important; }
  .sig-border { border-color: ${lightBorder} !important; border-style: solid !important; }
  .logo-dark { display: block !important; }
  .logo-light { display: none !important; }

  /* Dark Theme Overrides */
  @media (prefers-color-scheme: dark) {
    .sig-text { color: ${darkText} !important; }
    .sig-muted { color: ${darkMuted} !important; }
    .sig-border { border-color: ${darkBorder} !important; border-style: solid !important; }
    .logo-dark { display: none !important; }
    .logo-light { display: block !important; }
  }

  /* Outlook/Gmail Dark Mode Overrides */
  [data-ogsc] .sig-text { color: ${darkText} !important; }
  [data-ogsc] .sig-muted { color: ${darkMuted} !important; }
  [data-ogsc] .sig-border { border-color: ${darkBorder} !important; border-style: solid !important; }
  [data-ogsc] .logo-dark { display: none !important; }
  [data-ogsc] .logo-light { display: block !important; }
</style>

<table cellpadding="0" cellspacing="0" border="0" style="margin: 0; padding: 0; width: 480px; min-width: 480px; table-layout: fixed; -webkit-text-size-adjust: none; font-family: ${fontFamily};">
  <tr>
    <td style="padding: 24px; width: 432px;">
      <table cellpadding="0" cellspacing="0" border="0" width="100%" style="width: 100%; border-collapse: collapse;">
        <tr>
          <!-- LEFT: PHOTO & LINKEDIN -->
          <td width="80" valign="top" align="left" style="width: 80px;">
            ${photoUrl ? `
              <img src="${photoUrl}" width="80" height="80" border="0" style="display: block; width: 80px; height: 80px; border-radius: 20px; object-fit: cover; filter: grayscale(10%); border: 3px solid ${brandRed};" alt="${fullName}" />
            ` : `
              <table cellpadding="0" cellspacing="0" border="0" width="80" height="80" bgcolor="#f5f5f5" style="border: 3px solid ${brandRed}; border-radius: 20px; width: 80px; height: 80px;">
                <tr><td align="center" valign="middle" style="color: ${brandRed}; font-family: ${fontFamily}; font-size: 24px; font-weight: bold;">IN</td></tr>
              </table>
            `}
            
            ${showLinkedin ? `
            <table cellpadding="0" cellspacing="0" border="0" width="80" style="width: 80px; margin-top: 10px;">
              <tr>
                <td align="center">
                  <a href="${personalLinkedin || '#'}" target="_blank" style="text-decoration: none; display: inline-block;">
                    <table cellpadding="0" cellspacing="0" border="0" width="28" height="28" bgcolor="${brandRed}" style="background-color: ${brandRed}; border-radius: 14px; width: 28px; height: 28px;">
                      <tr>
                        <td align="center" valign="middle">
                          <img src="https://img.icons8.com/ios-filled/24/ffffff/linkedin.png" width="14" height="14" border="0" style="display: block; width: 14px; height: 14px;" alt="IN" />
                        </td>
                      </tr>
                    </table>
                  </a>
                </td>
              </tr>
            </table>` : ''}
          </td>

          <!-- VERTICAL DIVIDER -->
          <td width="24" style="width:24px;border-right:1px solid #d0d0d0;font-size:1px;line-height:1px;">&nbsp;</td>
          <td width="24" style="width: 24px; font-size: 1px; line-height: 1px;">&nbsp;</td>

          <!-- RIGHT: DATA & LOGO -->
          <td valign="top" style="text-align: left;">
            <table cellpadding="0" cellspacing="0" border="0" width="100%" style="width: 100%;">
              <tr>
                <td valign="top">
                  <div class="sig-text" style="font-family: ${fontFamily}; font-size: 20px; font-weight: 900; color: ${lightText}; line-height: 1; margin: 0; padding: 0; text-transform: uppercase; letter-spacing: 1px;">${fullName || 'NAME SURNAME'}</div>
                  <div style="font-family: ${fontFamily}; font-size: 10px; color: ${brandRed}; line-height: 1.2; margin: 4px 0 0 0; padding: 0; font-weight: 800; text-transform: uppercase; letter-spacing: 2px;">${position || 'TECHNICAL DIRECTOR'}</div>
                </td>
                <!-- ADAPTIVE LOGO -->
                <td width="100" align="right" valign="top" style="width: 100px;">
                  <!-- Dark Logo for Light Themes -->
                  <img src="${logoBlackUrl}" height="52" border="0" class="logo-dark" style="display: block; height: 52px; width: auto;" alt="isii Nitzan" />
                  <!-- Light Logo for Dark Themes -->
                  <!--[if !mso]><!-->
                  <img src="${logoWhiteUrl}" height="52" border="0" class="logo-light" style="display: none; height: 52px; width: auto;" alt="isii Nitzan" />
                  <!--<![endif]-->
                </td>
              </tr>
              <tr><td height="16" style="font-size: 1px; line-height: 1px;">&nbsp;</td></tr>
              <tr>
                <td colspan="2">
                  <table cellpadding="0" cellspacing="0" border="0">
                    ${phone ? `
                    <tr>
                      <td width="20" valign="middle" style="padding-bottom: 4px; width: 20px;">
                        <img src="${icons.phone}" width="12" height="12" border="0" style="display: block;" alt="P" />
                      </td>
                      <td class="sig-muted" style="font-family: ${fontFamily}; font-size: 11px; color: ${lightMuted}; padding-bottom: 4px; line-height: 1;">
                        <a href="tel:${phone}" class="sig-muted" style="text-decoration: none; color: ${lightMuted}; white-space: nowrap;">${phone}</a>
                      </td>
                    </tr>` : ''}
                    ${email ? `
                    <tr>
                      <td width="20" valign="middle" style="padding-bottom: 4px; width: 20px;">
                        <img src="${icons.mail}" width="12" height="12" border="0" style="display: block;" alt="E" />
                      </td>
                      <td class="sig-muted" style="font-family: ${fontFamily}; font-size: 11px; color: ${lightMuted}; padding-bottom: 4px; line-height: 1;">
                        <a href="mailto:${email}" class="sig-muted" style="text-decoration: none; color: ${lightMuted}; white-space: nowrap;">${email}</a>
                      </td>
                    </tr>` : ''}
                    <tr>
                      <td width="20" valign="middle" style="width: 20px;">
                        <img src="${icons.web}" width="12" height="12" border="0" style="display: block;" alt="W" />
                      </td>
                      <td class="sig-text" style="font-family: ${fontFamily}; font-size: 11px; color: ${lightText}; line-height: 1;">
                        <a href="${websiteLink}" target="_blank" class="sig-text" style="text-decoration: none; color: ${lightText}; font-weight: 700; white-space: nowrap;">${websiteUrl.toUpperCase()}</a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- ADAPTIVE HORIZONTAL DIVIDER AND ADDRESS -->
        <tr>
          <td colspan="4" style="padding-top: 16px;">
            <table cellpadding="0" cellspacing="0" border="0" width="100%" style="width: 100%;">
              <tr>
  <td height="1" style="height:1px;background-color:#d0d0d0;font-size:1px;line-height:1px;">&nbsp;</td>
</tr>
              <tr>
                <td class="sig-muted" style="padding-top: 10px; font-family: ${fontFamily}; font-size: 10px; color: ${lightMuted}; line-height: 1.2; text-align: left;">
                  Via Cremignone 4C, 6924 Sorengo, Switzerland
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
    <div className="bg-[#0a0a0a] p-6 md:p-10 rounded-3xl shadow-2xl border border-white/5">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-10">
        <h2 className="text-xl md:text-2xl font-black text-white uppercase tracking-widest">Master Preview</h2>
        <button
          onClick={handleCopy}
          style={{ backgroundColor: '#DF2929' }}
          className="w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-[0_0_30px_rgba(223,41,41,0.3)] active:scale-95 text-white hover:brightness-110"
        >
          <i className={copied ? 'ri-check-double-line text-lg' : 'ri-file-copy-2-line text-lg'}></i>
          {copied ? 'Captured' : 'Deploy Signature'}
        </button>
      </div>

      <div className="relative p-6 md:p-16 border-2 border-dashed border-white/5 rounded-[40px] bg-white/[0.02] flex items-center justify-center overflow-hidden">
        <div className="w-full flex justify-center overflow-x-auto">
          {/* Background is now responsive to system theme in the preview as well */}
          <div
            className="p-8 rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/5 transition-transform duration-300 min-w-fit bg-white dark:bg-black"
            dangerouslySetInnerHTML={{ __html: generateSignatureHTML(data) }}
          />
        </div>
      </div>
      <p className="text-center mt-6 text-xs text-white/30 uppercase tracking-widest">
        The preview above uses your system theme (Light/Dark)
      </p>
    </div>
  );
};

export default SignaturePreview;