'use client'

import { useState } from 'react'

interface FAQAccordionProps {
  question: string
  answer: string
}

export function FAQAccordion({ question, answer }: FAQAccordionProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="rounded-lg border border-slate-200 bg-white">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between px-5 py-4 text-left transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2"
        aria-expanded={isOpen}
      >
        <span className="text-sm font-semibold text-slate-900">{question}</span>
        <svg
          className={`h-5 w-5 flex-shrink-0 text-slate-500 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="border-t border-slate-200 px-5 py-4">
          <p className="text-sm text-slate-600" style={{ lineHeight: '1.6' }}>
            {answer}
          </p>
        </div>
      )}
    </div>
  )
}

