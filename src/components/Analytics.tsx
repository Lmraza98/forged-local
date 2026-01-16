'use client'

import Script from 'next/script'

// Analytics IDs from environment variables
// Set NEXT_PUBLIC_GA_ID and NEXT_PUBLIC_GTM_ID in your .env.local file
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID

// Strict validation - must be real IDs (start with G- or GTM-)
const isGAConfigured = GA_MEASUREMENT_ID && GA_MEASUREMENT_ID.startsWith('G-') && !GA_MEASUREMENT_ID.includes('XXXX')
const isGTMConfigured = GTM_ID && GTM_ID.startsWith('GTM-') && !GTM_ID.includes('XXXX')

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

