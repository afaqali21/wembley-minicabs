"use client";

import Script from "next/script";

// Placeholders for Google Analytics 4 (GA4) and Google Tag Manager (GTM)
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || "G-WEMBLEYMINI";
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "";

export const trackEvent = (
  action: string,
  category: string,
  label: string,
  value?: number
) => {
  if (typeof window !== "undefined" && (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag) {
    (window as unknown as { gtag: (...args: unknown[]) => void }).gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
  // Console logging for debugging / audit verification
  if (process.env.NODE_ENV !== "production") {
    console.log(`[Event Tracked] ${category} -> ${action}: ${label}`);
  }
};

export const trackCallClick = (source: string) => {
  trackEvent("phone_call_click", "Lead Generation", `Call Button (${source})`);
};

export const trackWhatsAppClick = (source: string) => {
  trackEvent("whatsapp_click", "Lead Generation", `WhatsApp Button (${source})`);
};

export const trackBookingClick = (source: string) => {
  trackEvent("booking_button_click", "Lead Generation", `Booking Engine (${source})`);
};

export default function Analytics() {
  return (
    <>
      {/* Google Analytics 4 Integration Placeholder */}
      {GA_MEASUREMENT_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}', {
                page_path: window.location.pathname,
              });
            `}
          </Script>
        </>
      )}

      {/* Google Tag Manager Placeholder */}
      {GTM_ID && (
        <Script id="google-tag-manager-init" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `}
        </Script>
      )}
    </>
  );
}
