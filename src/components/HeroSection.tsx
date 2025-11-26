'use client'

import { useState, useEffect } from 'react'
import HeroNotifications from './HeroNotifications'
import HeroPhone from './HeroPhone'
import BenefitsStrip from './BenefitsStrip'

export default function HeroSection() {
  const [phase, setPhase] = useState<'ringing' | 'missed' | 'followup'>('ringing')

  useEffect(() => {
    // Phase 1: Ringing (0-4s)
    // Phase 2: Missed (4-6s)
    // Phase 3: Followup (6-10s)
    
    const runSequence = () => {
      setPhase('ringing')
      
      const t1 = setTimeout(() => {
        setPhase('missed')
      }, 4000)

      const t2 = setTimeout(() => {
        setPhase('followup')
      }, 6000)

      // Loop back after 14s (10s sequence + 4s pause)
      const t3 = setTimeout(() => {
        runSequence()
      }, 14000)

      return () => {
        clearTimeout(t1)
        clearTimeout(t2)
        clearTimeout(t3)
      }
    }

    const cleanup = runSequence()
    return cleanup
  }, [])

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-slate-950 text-slate-50 flex flex-col px-4 pt-4 pb-6 min-h-[calc(100vh-64px)]"
    >
      {/* Base gradient */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
        aria-hidden="true"
      />

      {/* New England outline in the background */}
      <div
        className="pointer-events-none absolute -right-40 -top-24 h-[420px] w-[420px] opacity-[0.14] mix-blend-screen"
        aria-hidden="true"
      >
         {/* SVG can go here if needed */}
      </div>

      {/* Notification Component - Absolute positioning (top right) */}
      <HeroNotifications phase={phase} />

      {/* Main Container */}
      <div className="relative mx-auto flex w-full flex-1 max-w-7xl flex-col justify-start pt-20 md:pt-0 md:justify-center px-0 md:px-12 lg:px-24 xl:px-32">
        
        {/* Content Wrapper */}
        <div className="w-full flex flex-col z-10">
          
          {/* Top Row: Text + Image */}
          <div className="flex flex-row items-center justify-between lg:justify-center gap-2 sm:gap-6 lg:gap-16 mb-4">
            
            {/* Text Content */}
            <div className="flex-1 lg:flex-none min-w-0 pt-2 sm:pt-0">
              {/* Eyebrow */}
              <p className="text-xs font-semibold tracking-[0.2em] text-amber-300 mb-3">
                PRACTICAL CALL & LEAD SYSTEM
              </p>

              {/* Heading */}
              <h1
                id="hero-heading"
                className="text-3xl font-semibold leading-tight mb-2 sm:text-4xl lg:text-5xl xl:text-6xl max-w-[20ch]"
              >
                Stop losing leads to missed calls.
              </h1>

              {/* Supporting copy */}
              <p className="mt-2 text-sm text-slate-300 mb-4 sm:text-base max-w-[34ch] sm:max-w-lg lg:max-w-xl leading-relaxed">
                ForgedLocal plugs into your existing business line so every call,
                voicemail, and web lead is captured and followed up - with no change
                to the number on your trucks.
              </p>
            </div>

            {/* Hero Phone Image - Right Side on all screens */}
            <div className="relative mb-3 flex justify-center sm:justify-end shrink-0 -mt-3 lg:mt-0">
              <div className="pointer-events-none absolute -inset-4 rounded-[32px] bg-amber-400/[0.08] blur-3xl" />
              <div className="relative w-[140px] h-[210px] sm:w-[180px] sm:h-[270px] lg:w-[260px] lg:h-[390px]">
                <HeroPhone phase={phase} />
              </div>
            </div>
          </div>

          {/* Primary CTA block */}
          <div className="mb-4 space-y-2 sm:flex sm:items-center sm:space-y-0 sm:gap-3 w-full">
            <button className="w-full rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-amber-400/40 sm:w-auto hover:bg-amber-300 transition">
              Book a quick intro call
            </button>
            <button className="w-full rounded-full border border-slate-600/80 bg-slate-900/40 px-6 py-3 text-sm font-medium text-slate-100 hover:border-amber-300 hover:text-amber-200 sm:w-auto transition shadow-none">
              See how it works
            </button>
          </div>

        </div>
        
      </div>
      {/* BENEFITS SECTION - New "Panel" Style */}
      <section className="bg-slate-950 pt-2 pb-8 sm:pt-4 sm:pb-16">
        <div className="mx-auto max-w-5xl rounded-2xl sm:rounded-3xl bg-slate-950/50 border border-slate-800/60 px-4 py-5 sm:px-6 sm:py-8 shadow-[0_24px_60px_rgba(0,0,0,0.5)] backdrop-blur-sm">
          <div className="mb-3 sm:mb-6 flex justify-center">
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
              What ForgedLocal does for you
            </p>
          </div>
          <BenefitsStrip />
        </div>
      </section>
    </section>
  )
}


