'use client'

import { useState, useRef } from 'react'
import { motion, Variants } from 'framer-motion'
import { cn } from '@/lib/utils'

function IconPhone() {
  return (
    <svg
      className="h-5 w-5 sm:h-6 sm:w-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.86.37 1.7.72 2.49a2 2 0 0 1-.45 2.18L8.5 9.5a15.24 15.24 0 0 0 6 6l1.11-1.33a2 2 0 0 1 2.18-.45c.79.35 1.63.6 2.49.72A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function IconSparkles() {
  return (
    <svg
      className="h-5 w-5 sm:h-6 sm:w-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3l1.4 3.7L17 8.1l-3.6 1.4L12 13l-1.4-3.5L7 8.1l3.6-1.4L12 3z" />
      <path d="M5 16l.7 1.8L8 18.5l-1.7.7L5 21l-.7-1.8L2.5 18.5l1.8-.7L5 16z" />
      <path d="M19 14l.9 2.2L22 17l-2.1.8L19 20l-.9-2.2L16 17l2.1-.8L19 14z" />
    </svg>
  )
}

function IconChart() {
  return (
    <svg
      className="h-5 w-5 sm:h-6 sm:w-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" y1="19" x2="20" y2="19" />
      <rect x="6" y="12" width="2.5" height="5" />
      <rect x="10.5" y="9" width="2.5" height="8" />
      <rect x="15" y="6" width="2.5" height="11" />
    </svg>
  )
}

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
}

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
}

interface BenefitsStripProps {
  className?: string
}

export default function BenefitsStrip({ className }: BenefitsStripProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current
      // Calculate active index based on scroll position
      const index = Math.round(scrollLeft / clientWidth)
      setActiveIndex(index)
    }
  }

  const scrollTo = (index: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: index * scrollRef.current.clientWidth,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className={cn("w-full", className)}>
      <motion.div
        ref={scrollRef}
        onScroll={handleScroll}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-50px' }}
        className="flex w-full snap-x snap-mandatory overflow-x-auto pb-4 sm:grid sm:grid-cols-3 sm:gap-8 sm:overflow-visible sm:pb-0"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {/* Item 1 */}
        <motion.div variants={item} className="flex min-w-full snap-center flex-col items-start gap-2 px-1 sm:min-w-0 sm:gap-3 sm:px-0">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800 text-amber-400 ring-1 ring-white/10 sm:h-12 sm:w-12 sm:rounded-xl">
            <IconPhone />
          </span>
          <div className="text-left">
            <p className="text-sm font-semibold text-slate-50">Capture every call</p>
            <p className="mt-1 text-xs leading-relaxed text-slate-400 sm:mt-1.5 sm:text-sm">Missed calls & forms log automatically so nothing is lost.</p>
          </div>
        </motion.div>

        {/* Item 2 */}
        <motion.div variants={item} className="flex min-w-full snap-center flex-col items-start gap-2 px-1 sm:min-w-0 sm:gap-3 sm:px-0">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800 text-amber-400 ring-1 ring-white/10 sm:h-12 sm:w-12 sm:rounded-xl">
            <IconSparkles />
          </span>
          <div className="text-left">
            <p className="text-sm font-semibold text-slate-50">Fast follow-up</p>
            <p className="mt-1 text-xs leading-relaxed text-slate-400 sm:mt-1.5 sm:text-sm">Text back missed calls in minutes to secure the lead.</p>
          </div>
        </motion.div>

        {/* Item 3 */}
        <motion.div variants={item} className="flex min-w-full snap-center flex-col items-start gap-2 px-1 sm:min-w-0 sm:gap-3 sm:px-0">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800 text-amber-400 ring-1 ring-white/10 sm:h-12 sm:w-12 sm:rounded-xl">
            <IconChart />
          </span>
          <div className="text-left">
            <p className="text-sm font-semibold text-slate-50">See the impact</p>
            <p className="mt-1 text-xs leading-relaxed text-slate-400 sm:mt-1.5 sm:text-sm">Track recovered jobs and watch revenue grow.</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-1.5 sm:hidden">
        {[0, 1, 2].map((index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              activeIndex === index ? "w-6 bg-amber-400" : "w-1.5 bg-slate-700/50"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
