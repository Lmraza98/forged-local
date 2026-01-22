'use client'

import { useState, useRef } from 'react'
import { motion, Variants } from 'framer-motion'
import { cn } from '@/lib/utils'

function IconClock() {
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
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}

function IconClipboard() {
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
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
      <path d="M9 12h6" />
      <path d="M9 16h6" />
    </svg>
  )
}

function IconMapPin() {
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
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function IconToggle() {
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
      <rect x="1" y="5" width="22" height="14" rx="7" ry="7" />
      <circle cx="8" cy="12" r="3" />
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
        className="flex w-full snap-x snap-mandatory overflow-x-auto pb-4 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-6 sm:overflow-visible sm:pb-0"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {/* Item 1 */}
        <motion.div variants={item} className="flex min-w-full snap-center flex-col items-start gap-2 px-1 sm:min-w-0 sm:gap-3 sm:px-0">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800 text-amber-400 ring-1 ring-white/10 sm:h-12 sm:w-12 sm:rounded-xl">
            <IconClock />
          </span>
          <div className="text-left">
            <p className="text-sm font-semibold text-slate-50">Replies in under 60 seconds</p>
            <p className="mt-1 text-xs leading-relaxed text-slate-400 sm:mt-1.5 sm:text-sm">Instant auto-text so leads don&apos;t move on.</p>
          </div>
        </motion.div>

        {/* Item 2 */}
        <motion.div variants={item} className="flex min-w-full snap-center flex-col items-start gap-2 px-1 sm:min-w-0 sm:gap-3 sm:px-0">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800 text-amber-400 ring-1 ring-white/10 sm:h-12 sm:w-12 sm:rounded-xl">
            <IconClipboard />
          </span>
          <div className="text-left">
            <p className="text-sm font-semibold text-slate-50">Captures name and job details</p>
            <p className="mt-1 text-xs leading-relaxed text-slate-400 sm:mt-1.5 sm:text-sm">Know what they need before you call back.</p>
          </div>
        </motion.div>

        {/* Item 3 */}
        <motion.div variants={item} className="flex min-w-full snap-center flex-col items-start gap-2 px-1 sm:min-w-0 sm:gap-3 sm:px-0">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800 text-amber-400 ring-1 ring-white/10 sm:h-12 sm:w-12 sm:rounded-xl">
            <IconMapPin />
          </span>
          <div className="text-left">
            <p className="text-sm font-semibold text-slate-50">Dedicated local texting number</p>
            <p className="mt-1 text-xs leading-relaxed text-slate-400 sm:mt-1.5 sm:text-sm">No app needed. Works with your existing phone.</p>
          </div>
        </motion.div>

        {/* Item 4 */}
        <motion.div variants={item} className="flex min-w-full snap-center flex-col items-start gap-2 px-1 sm:min-w-0 sm:gap-3 sm:px-0">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800 text-amber-400 ring-1 ring-white/10 sm:h-12 sm:w-12 sm:rounded-xl">
            <IconToggle />
          </span>
          <div className="text-left">
            <p className="text-sm font-semibold text-slate-50">No contracts</p>
            <p className="mt-1 text-xs leading-relaxed text-slate-400 sm:mt-1.5 sm:text-sm">Turn it off anytime. No questions asked.</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-1.5 sm:hidden">
        {[0, 1, 2, 3].map((index) => (
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
