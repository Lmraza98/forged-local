'use client'

import { useState } from 'react'
import Link from 'next/link'

export function ROICalculator() {
  const [missedCalls, setMissedCalls] = useState(10)
  const [avgJobValue, setAvgJobValue] = useState(800)
  const [closeRate, setCloseRate] = useState(30)

  // Calculate potential loss
  const potentialLeads = missedCalls * 4 // per month
  const recoveredLeads = Math.round(potentialLeads * 0.6) // 60% respond to text
  const bookedJobs = Math.round(recoveredLeads * (closeRate / 100))
  const monthlyRecovery = bookedJobs * avgJobValue
  const yearlyRecovery = monthlyRecovery * 12

  return (
    <section id="calculator" className="bg-gradient-to-b from-slate-900 to-slate-800 py-20 sm:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <span className="inline-block rounded-full bg-red-500/10 border border-red-500/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-red-400 mb-4">
              Free Calculator
            </span>
            <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              How much are missed calls costing you?
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              Adjust the sliders to see your potential revenue loss
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Inputs */}
            <div className="space-y-8 rounded-2xl border border-slate-700 bg-slate-800/50 p-6 sm:p-8">
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label htmlFor="missed-calls" className="text-sm font-medium text-slate-300">
                    Missed calls per week
                  </label>
                  <span className="text-2xl font-bold text-amber-400" aria-live="polite">{missedCalls}</span>
                </div>
                <input
                  id="missed-calls"
                  type="range"
                  min="1"
                  max="50"
                  value={missedCalls}
                  onChange={(e) => setMissedCalls(Number(e.target.value))}
                  aria-valuenow={missedCalls}
                  aria-valuemin={1}
                  aria-valuemax={50}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>1</span>
                  <span>50</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-3">
                  <label htmlFor="avg-job-value" className="text-sm font-medium text-slate-300">
                    Average job value
                  </label>
                  <span className="text-2xl font-bold text-amber-400" aria-live="polite">${avgJobValue.toLocaleString()}</span>
                </div>
                <input
                  id="avg-job-value"
                  type="range"
                  min="100"
                  max="5000"
                  step="100"
                  value={avgJobValue}
                  onChange={(e) => setAvgJobValue(Number(e.target.value))}
                  aria-valuenow={avgJobValue}
                  aria-valuemin={100}
                  aria-valuemax={5000}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>$100</span>
                  <span>$5,000</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-3">
                  <label htmlFor="close-rate" className="text-sm font-medium text-slate-300">
                    Your close rate
                  </label>
                  <span className="text-2xl font-bold text-amber-400" aria-live="polite">{closeRate}%</span>
                </div>
                <input
                  id="close-rate"
                  type="range"
                  min="10"
                  max="80"
                  step="5"
                  value={closeRate}
                  onChange={(e) => setCloseRate(Number(e.target.value))}
                  aria-valuenow={closeRate}
                  aria-valuemin={10}
                  aria-valuemax={80}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>10%</span>
                  <span>80%</span>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="rounded-2xl border-2 border-amber-500/30 bg-gradient-to-br from-amber-500/10 to-orange-500/10 p-6 sm:p-8">
              <h3 className="text-lg font-semibold text-amber-400 mb-6">
                Your potential recovery with ForgedLocal
              </h3>

              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-slate-700/50">
                  <span className="text-slate-300">Missed calls/month</span>
                  <span className="text-xl font-bold text-white">{potentialLeads}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-slate-700/50">
                  <span className="text-slate-300">Leads recovered (60%)</span>
                  <span className="text-xl font-bold text-emerald-400">+{recoveredLeads}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-slate-700/50">
                  <span className="text-slate-300">Extra jobs booked</span>
                  <span className="text-xl font-bold text-emerald-400">+{bookedJobs}</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-amber-500/30">
                <div className="text-center">
                  <p className="text-sm text-slate-300 mb-1">Potential monthly recovery</p>
                  <p className="text-4xl sm:text-5xl font-bold text-white">
                    ${monthlyRecovery.toLocaleString()}
                  </p>
                  <p className="text-amber-400 font-semibold mt-2">
                    ${yearlyRecovery.toLocaleString()}/year
                  </p>
                </div>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-slate-900/50 text-center">
                <p className="text-xs text-slate-300 mb-1">ForgedLocal costs just</p>
                <p className="text-lg font-bold text-white">$149/month</p>
                <p className="text-emerald-400 text-sm font-semibold">
                  {Math.round(monthlyRecovery / 149)}x ROI
                </p>
              </div>

              <Link
                href="#contact"
                className="mt-6 w-full inline-flex items-center justify-center rounded-full bg-amber-700 px-6 py-4 text-base font-bold text-white shadow-lg shadow-amber-700/25 transition hover:bg-amber-800 hover:scale-105"
              >
                Stop Losing ${monthlyRecovery.toLocaleString()}/Month
                <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

