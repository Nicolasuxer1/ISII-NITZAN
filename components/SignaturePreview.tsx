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
  const lightText = "#1a1a1a";
  const lightMuted = "#475569";
  const lightBorder = "#d0d0d0";
  // Dark Theme Colors (Improved Contrast)
  const darkText = "#ffffff";
  const darkMuted = "#94a3b8";
  const darkBorder = "#444444";

  const websiteUrl = "isii-nitzan.swiss";
  const websiteLink = "https://isii-nitzan.swiss";

  const logoWhiteUrl = "https://static.wixstatic.com/media/21bdd8_afed04f284154ed2987ef4d27914549d~mv2.png";
  const logoBlackUrl = "https://vivent-biosignals.com/wp-content/uploads/2025/06/Group-234.png";

  const icons = {
    phone: `https://img.icons8.com/material-rounded/24/DF2929/phone.png`,
    mail: `https://img.icons8.com/material-rounded/24/DF2929/mail.png`,
    web: `https://img.icons8.com/material-rounded/24/DF2929/geography.png`,
    address: `https://img.icons8.com/material-rounded/24/DF2929/marker.png`,
  };

  return `
<style type="text/css">
  /* Base Light Theme Styles */
  .sig-text { color: ${lightText} !important; }
  .sig-muted { color: ${lightMuted} !important; }
  .sig-border { border-color: ${lightBorder} !important; border-style: solid !important; }
  .logo-dark { display: block !important; }
  .logo-light { display: none !important; }
  .sig-bg { background-color: #ffffff !important; }

  /* Dark Theme Overrides */
  @media (prefers-color-scheme: dark) {
    .sig-text { color: ${darkText} !important; }
    .sig-muted { color: ${darkMuted} !important; }
    .sig-border { border-color: ${darkBorder} !important; border-style: solid !important; }
    .logo-dark { display: none !important; }
    .logo-light { display: block !important; }
    .sig-bg { background-color: #000000 !important; }
  }

  /* Outlook/Gmail Dark Mode Overrides */
  [data-ogsc] .sig-text { color: ${darkText} !important; }
  [data-ogsc] .sig-muted { color: ${darkMuted} !important; }
  [data-ogsc] .sig-border { border-color: ${darkBorder} !important; border-style: solid !important; }
  [data-ogsc] .logo-dark { display: none !important; }
  [data-ogsc] .logo-light { display: block !important; }
  [data-ogsc] .sig-bg { background-color: #000000 !important; }
</style>

<table cellpadding="0" cellspacing="0" border="0" class="sig-bg" style="background-color: #ffffff; margin: 0; padding: 0; width: 440px; min-width: 440px; table-layout: fixed; -webkit-text-size-adjust: none;">
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
                    <img src="${photoUrl}" width="70" height="70" border="0" style="display: block; width: 70px; height: 70px; border-radius: 35px; object-fit: cover;" alt="${fullName || 'Photo'}" />
                  ` : `
                    <table cellpadding="0" cellspacing="0" border="0" width="70" height="70" bgcolor="#f5f5f5" style="border-radius: 35px; width: 70px; height: 70px;">
                      <tr><td align="center" valign="middle" class="sig-text" style="font-family: ${fontFamily}; font-size: 24px; font-weight: bold;">IN</td></tr>
                    </table>
                  `}
                </td>
              </tr>
              
              ${showLinkedin ? `
              <tr>
                <td align="center">
                  <!-- LinkedIn Pill -->
                  <table cellpadding="0" cellspacing="0" border="0" bgcolor="${brandRed}" style="background-color: ${brandRed}; border-radius: 8px;">
                    <tr>
                      <td style="padding: 2px 6px; line-height: 0;">
                        <a href="${personalLinkedin || '#'}" target="_blank" style="text-decoration: none;">
                          <img src="https://img.icons8.com/ios-filled/24/ffffff/linkedin.png" width="10" height="10" border="0" style="display: block; border: 0;" alt="IN" />
                        </a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              ` : ''}
            </table>
          </td>

          <!-- SYMMETRIC DIVIDER -->
          <td width="15" style="width: 15px;"></td>
          <td width="1" bgcolor="${brandRed}" style="font-size: 1px; line-height: 1px; width: 1px;">&nbsp;</td>
          <td width="15" style="width: 15px;"></td>

          <!-- RIGHT COLUMN: DATA -->
          <td valign="top" style="text-align: left;">
            <table cellpadding="0" cellspacing="0" border="0" width="100%" style="width: 100%;">
              <tr>
                <!-- LEFT CONTENT: Name, Position, Contacts -->
                <td valign="top" style="text-align: left;">
                  <div class="sig-text" style="font-family: ${fontFamily}; font-size: 17px; font-weight: 700; color: ${lightText}; line-height: 1; margin: 0; padding: 0;">${fullName || 'Name Surname'}</div>
                  <div class="sig-muted" style="font-family: ${fontFamily}; font-size: 11px; color: ${lightMuted}; line-height: 1.1; margin: 0; padding: 0;">${position || 'Position'}</div>
                  
                  <!-- Spacer -->
                  <div style="height: 8px; line-height: 8px; font-size: 8px;">&nbsp;</div>

                  <table cellpadding="0" cellspacing="0" border="0">
                    <!-- Phone -->
                    ${phone ? `
                    <tr>
                      <td width="16" valign="middle" style="padding-bottom: 1px; width: 16px;">
                        <img src="${icons.phone}" width="11" height="11" border="0" style="display: block;" alt="P" />
                      </td>
                      <td class="sig-muted" style="font-family: ${fontFamily}; font-size: 11px; color: ${lightMuted}; padding-bottom: 1px; line-height: 1;">
                        <a href="tel:${phone}" class="sig-muted" style="text-decoration: none; color: ${lightMuted}; white-space: nowrap;">${phone}</a>
                      </td>
                    </tr>
                    ` : ''}
                    <!-- Email -->
                    ${email ? `
                    <tr>
                      <td width="16" valign="middle" style="padding-bottom: 1px; width: 16px;">
                        <img src="${icons.mail}" width="11" height="11" border="0" style="display: block;" alt="E" />
                      </td>
                      <td class="sig-muted" style="font-family: ${fontFamily}; font-size: 11px; color: ${lightMuted}; padding-bottom: 1px; line-height: 1;">
                        <a href="mailto:${email}" class="sig-muted" style="text-decoration: none; color: ${lightMuted}; white-space: nowrap;">${email}</a>
                      </td>
                    </tr>
                    ` : ''}
                    <!-- Web -->
                    <tr>
                      <td width="16" valign="middle" style="padding-bottom: 1px; width: 16px;">
                        <img src="${icons.web}" width="11" height="11" border="0" style="display: block;" alt="W" />
                      </td>
                      <td class="sig-muted" style="font-family: ${fontFamily}; font-size: 11px; color: ${lightMuted}; padding-bottom: 1px; line-height: 1;">
                        <a href="${websiteLink}" target="_blank" class="sig-muted" style="text-decoration: none; color: ${lightMuted}; font-weight: 600; white-space: nowrap;">${websiteUrl}</a>
                      </td>
                    </tr>
                    <!-- Address -->
                    <tr>
                      <td width="16" valign="middle" style="width: 16px;">
                        <img src="${icons.address}" width="11" height="11" border="0" style="display: block;" alt="A" />
                      </td>
                      <td class="sig-muted" style="font-family: ${fontFamily}; font-size: 11px; color: ${lightMuted}; line-height: 1;">
                        <span class="sig-muted" style="color: ${lightMuted}; white-space: nowrap;">Via Cremignone 4C, 6924 Sorengo, Switzerland</span>
                      </td>
                    </tr>
                  </table>
                </td>

                <!-- RIGHT CONTENT: Logo -->
                <td width="30" align="right" valign="top" style="width: 30px;">
                  <img src="${logoBlackUrl}" width="30" height="30" border="0" class="logo-dark" style="display: block; width: 30px; height: 30px; max-width: none; object-fit: contain;" alt="Logo" />
                  <!--[if !mso]><!-->
                  <img src="${logoWhiteUrl}" width="30" height="30" border="0" class="logo-light" style="display: none; width: 30px; height: 30px; max-width: none; object-fit: contain;" alt="Logo" />
                  <!--<![endif]-->
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