'use client'

import { useEffect } from 'react'

interface CalendlyEmbedProps {
  url: string
}

export function CalendlyEmbed({ url }: CalendlyEmbedProps) {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      // Cleanup if component unmounts
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')
      if (existingScript) {
        existingScript.remove()
      }
    }
  }, [])

  return (
    <div 
      className="calendly-inline-widget rounded-xl overflow-hidden" 
      data-url={`${url}?hide_gdpr_banner=1&primary_color=f59e0b`}
      style={{ minWidth: '320px', height: '630px' }}
    />
  )
}

