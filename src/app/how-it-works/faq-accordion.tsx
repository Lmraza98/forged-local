'use client'

import { useState } from 'react'

interface FAQAccordionProps {
  question: string
  answer: string
}

export function FAQAccordion({ question, answer }: FAQAccordionProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden transition-shadow hover:shadow-md">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between px-6 py-5 text-left transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-slate-900 pr-4">{question}</span>
        <svg
          className={`h-5 w-5 flex-shrink-0 text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div 
        className={`grid transition-all duration-200 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
      >
        <div className="overflow-hidden">
          <div className="border-t border-slate-100 px-6 py-5">
            <p className="text-slate-600 leading-relaxed">
              {answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
