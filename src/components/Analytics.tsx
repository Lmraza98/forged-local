'use client'

import Script from 'next/script'

// Analytics IDs from environment variables
// Set NEXT_PUBLIC_GA_ID, NEXT_PUBLIC_GTM_ID, and NEXT_PUBLIC_GOOGLE_ADS_ID in your .env.local file
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID
const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || 'AW-17886467359'

// Strict validation - must be real IDs
const isGAConfigured = GA_MEASUREMENT_ID && GA_MEASUREMENT_ID.startsWith('G-') && !GA_MEASUREMENT_ID.includes('XXXX')
const isGTMConfigured = GTM_ID && GTM_ID.startsWith('GTM-') && !GTM_ID.includes('XXXX')
const isGoogleAdsConfigured = GOOGLE_ADS_ID && GOOGLE_ADS_ID.startsWith('AW-') && !GOOGLE_ADS_ID.includes('XXXX')

export function GoogleAdsTag() {
  if (!isGoogleAdsConfigured) {
    return null
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
        strategy="afterInteractive"
      />
      <Script
        id="google-ads-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GOOGLE_ADS_ID}');
          `,
        }}
      />
    </>
  )
}

export function Analytics() {
  // Don't render anything if no valid analytics configured
  if (!isGAConfigured && !isGTMConfigured) {
    return null
  }

  return (
    <>
      {/* Google Tag Manager - only load if properly configured */}
      {isGTMConfigured && GTM_ID && (
        <Script
          id="gtm-script"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');
            `,
          }}
        />
      )}

      {/* Google Analytics 4 - only load if properly configured */}
      {isGAConfigured && GA_MEASUREMENT_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            strategy="lazyOnload"
          />
          <Script
            id="ga4-script"
            strategy="lazyOnload"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}', {
                  page_title: document.title,
                  page_location: window.location.href,
                });
              `,
            }}
          />
        </>
      )}
    </>
  )
}

// GTM noscript tag - only render if properly configured
export function GTMNoScript() {
  if (!isGTMConfigured || !GTM_ID) {
    return null
  }
  
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
        title="Google Tag Manager"
      />
    </noscript>
  )
}

// Helper function to track events
export function trackEvent(eventName: string, params?: Record<string, unknown>) {
  if (typeof window !== 'undefined' && (window as Window & { gtag?: (...args: unknown[]) => void }).gtag) {
    (window as Window & { gtag?: (...args: unknown[]) => void }).gtag?.('event', eventName, params)
  }
}

// Helper to push to dataLayer
export function pushToDataLayer(data: Record<string, unknown>) {
  if (typeof window !== 'undefined') {
    (window as Window & { dataLayer?: unknown[] }).dataLayer = (window as Window & { dataLayer?: unknown[] }).dataLayer || []
    ;(window as Window & { dataLayer?: unknown[] }).dataLayer?.push(data)
  }
}

