'use client'

import { motion, AnimatePresence } from 'framer-motion'

interface HeroNotificationsProps {
  phase?: 'ringing' | 'missed' | 'followup'
}

export default function HeroNotifications({ phase = 'missed' }: HeroNotificationsProps) {
  // On desktop, we might want it always visible or following the same logic? 
  // Prompt says "Today's activity" section should be left aligned.
  // Animation: "Missed call - 9:12 am" card appears... 4-6s.
  
  // So visible only if phase is 'missed' or 'followup'
  const isVisible = phase === 'missed' || phase === 'followup'

  const handleCallback = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="absolute top-2 left-4 z-40 w-full max-w-[320px] sm:px-0 lg:fixed lg:right-8 lg:left-auto lg:top-24 lg:px-0">
      <AnimatePresence>
        {isVisible && (
          <div className="flex flex-col items-start mb-3">
             <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-1 ml-1 text-[11px] font-medium tracking-[0.16em] text-slate-400 text-left"
            >
              TODAY&apos;S ACTIVITY
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="flex w-full items-center justify-between rounded-xl border border-slate-800 bg-slate-900/95 px-4 py-2 shadow-xl backdrop-blur-md"
            >
              <div className="mr-3 min-w-0 flex-1">
                <p className="font-semibold text-slate-50 text-xs">Missed call - 9:12 am</p>
                <p className="truncate text-[0.7rem] text-slate-400">
                  Text follow-up sent
                </p>
              </div>
              <div className="shrink-0">
                <button 
                  onClick={handleCallback}
                  className="rounded-full border border-slate-700 bg-transparent px-2.5 py-0.5 text-[0.65rem] text-slate-400 transition hover:border-slate-500 hover:text-slate-200 whitespace-nowrap cursor-pointer"
                >
                  Call back
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
