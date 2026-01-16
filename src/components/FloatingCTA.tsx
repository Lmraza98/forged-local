'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero (about 600px)
      const shouldShow = window.scrollY > 600
      setIsVisible(shouldShow)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (isDismissed || !isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-amber-200 bg-gradient-to-r from-amber-50 to-orange-50 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] animate-in slide-in-from-bottom duration-300">
      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex h-10 w-10 items-center justify-center rounded-full bg-red-100 text-red-600">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900">
                You&apos;re losing <span className="text-red-600">$4,800+/month</span> to missed calls
              </p>
              <p className="text-xs text-slate-600 hidden sm:block">
                Get your free revenue recovery estimate in 2 minutes
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <Link
              href="#calculator"
              className="flex-1 sm:flex-none inline-flex items-center justify-center rounded-full bg-amber-500 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-amber-500/25 transition hover:bg-amber-600 hover:scale-105"
            >
              Calculate My Loss
              <svg className="ml-1.5 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </Link>
            <button
              onClick={() => setIsDismissed(true)}
              className="p-2 text-slate-400 hover:text-slate-600 transition"
              aria-label="Dismiss"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

