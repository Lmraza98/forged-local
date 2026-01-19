export function TrustSignals() {
  return (
    <div className="rounded-2xl border border-slate-700 bg-slate-800/30 p-6 mb-8">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
        <div>
          <div className="text-2xl sm:text-3xl font-bold text-amber-400">47+</div>
          <div className="text-xs text-slate-400">Contractors Served</div>
        </div>
        <div>
          <div className="text-2xl sm:text-3xl font-bold text-emerald-400">$127K</div>
          <div className="text-xs text-slate-400">Revenue Recovered</div>
        </div>
        <div>
          <div className="text-2xl sm:text-3xl font-bold text-amber-400">4.9★</div>
          <div className="text-xs text-slate-400">Avg Rating</div>
        </div>
        <div>
          <div className="text-2xl sm:text-3xl font-bold text-emerald-400">48hr</div>
          <div className="text-xs text-slate-400">Setup Time</div>
        </div>
      </div>
      
      <div className="mt-4 pt-4 border-t border-slate-700/50">
        <div className="flex flex-wrap justify-center gap-4 text-xs text-slate-400">
          <span className="flex items-center gap-1.5">
            <svg className="h-4 w-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            100% Secure
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="h-4 w-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            No Contracts
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="h-4 w-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Cancel Anytime
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="h-4 w-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Response in 24hrs
          </span>
        </div>
      </div>
    </div>
  )
}



