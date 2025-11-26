'use client'

import { motion, AnimatePresence, Variants } from 'framer-motion'

interface HeroPhoneProps {
  phase?: 'ringing' | 'missed' | 'followup'
}

export default function HeroPhone({ phase = 'missed' }: HeroPhoneProps) {
  // Animation variants for the phone container (shake)
  const phoneVariants: Variants = {
    ringing: {
      rotate: [0, -2, 2, -2, 2, 0],
      transition: {
        duration: 0.4,
        repeat: Infinity,
        repeatDelay: 0.8, // Pulse timing
        ease: "easeInOut"
      }
    },
    missed: {
      rotate: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    followup: {
      rotate: 0
    }
  }

  // Animation for the glow (pulse)
  const glowVariants: Variants = {
    ringing: {
      opacity: [0.3, 0.6, 0.3],
      scale: [1, 1.05, 1],
      transition: {
        duration: 1.2, // Matches shake repeat delay roughly
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    missed: {
      opacity: 0.2,
      scale: 1,
      transition: { duration: 0.5 }
    },
    followup: {
      opacity: 0.2,
      scale: 1
    }
  }

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
      className="relative h-full w-full select-none"
    >
      {/* Glow effect */}
      <motion.div 
        variants={glowVariants}
        animate={phase}
        className="absolute -inset-3 -z-10 bg-amber-400/[0.3] blur-2xl rounded-[2.5rem]" 
      />
      
      {/* Phone Container SVG */}
      <motion.div
        variants={phoneVariants}
        animate={phase}
        className="relative h-full w-full"
      >
        <svg
          viewBox="0 0 300 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full drop-shadow-2xl"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Phone Body/Frame */}
          <rect x="10" y="10" width="280" height="580" rx="40" fill="#0f172a" stroke="#334155" strokeWidth="8" />
          
          {/* Inner Screen Area */}
          <rect x="25" y="25" width="250" height="550" rx="30" fill="#020617" />

          {/* Notch area */}
          <path d="M 100 25 L 200 25 A 1 1 0 0 1 200 55 L 100 55 A 1 1 0 0 1 100 25" fill="#0f172a" />

          {/* Screen Content Container */}
          <foreignObject x="25" y="60" width="250" height="515" mask="url(#screen-mask)">
             {/* We can use HTML inside SVG for easier text layout, or stick to SVG elements. 
                 SVG elements are better for scaling without blur. */}
          </foreignObject>
          
          {/* Alternative: Pure SVG Content */}
          <g className="font-sans">
             {/* Status Bar (Simulated) */}
             <text x="45" y="50" fill="#94a3b8" fontSize="12" fontWeight="600">9:12</text>
             {/* Battery/Signal icons could go here */}
             <rect x="220" y="42" width="20" height="10" rx="2" stroke="#94a3b8" strokeWidth="1.5" />

            {/* CONTENT SWITCHER */}
            <AnimatePresence mode="wait">
              {phase === 'ringing' && (
                <motion.g
                  key="ringing"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                   {/* Incoming Call UI */}
                   <circle cx="150" cy="200" r="40" fill="#334155" opacity="0.5" />
                   <path d="M150 180 a 20 20 0 0 1 0 40 a 20 20 0 0 1 0 -40" fill="#94a3b8" />
                   <text x="150" y="280" textAnchor="middle" fill="#cbd5e1" fontSize="18" fontWeight="500">Incoming Call...</text>
                   <text x="150" y="305" textAnchor="middle" fill="#64748b" fontSize="14">Unknown Number</text>
                   
                   {/* Buttons */}
                   <circle cx="80" cy="480" r="30" fill="#ef4444" />
                   <path d="M70 475 l20 10" stroke="white" strokeWidth="3" strokeLinecap="round" />
                   <path d="M90 475 l-20 10" stroke="white" strokeWidth="3" strokeLinecap="round" />
                   
                   <circle cx="220" cy="480" r="30" fill="#22c55e" />
                   <path d="M210 485 l10 -10 l15 15" stroke="white" strokeWidth="3" strokeLinecap="round" fill="none" />
                </motion.g>
              )}

              {(phase === 'missed' || phase === 'followup') && (
                <motion.g
                  key="missed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Missed Call Notification Card */}
                  <motion.g
                     initial={{ y: -20, opacity: 0 }}
                     animate={{ y: 0, opacity: 1 }}
                     transition={{ type: "spring", stiffness: 300, damping: 25, delay: 0.2 }}
                  >
                    <rect x="35" y="100" width="230" height="80" rx="16" fill="#1e293b" />
                    {/* Icon */}
                    <circle cx="65" cy="140" r="16" fill="#ef4444" fillOpacity="0.2" />
                    <path d="M65 140 l5 5 l-5 5 m0 -10 l-5 5 l5 5" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" transform="translate(65,140) scale(0.5) translate(-65,-140)" />
                     {/* Since SVG path is hard, let's just do a phone icon shape or similar */}
                     <text x="65" y="145" textAnchor="middle" fill="#ef4444" fontSize="16" fontFamily="Arial">✕</text>

                    <text x="95" y="130" fill="#f8fafc" fontSize="14" fontWeight="600">Missed Call</text>
                    <text x="95" y="150" fill="#94a3b8" fontSize="12">9:12 AM</text>
                    <text x="95" y="165" fill="#94a3b8" fontSize="12">AC not working...</text>
                  </motion.g>

                  {/* Follow-up Pill */}
                  {phase === 'followup' && (
                    <motion.g
                      initial={{ opacity: 0, scale: 0.9, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                      <rect x="35" y="195" width="180" height="36" rx="18" fill="#22c55e" />
                      <text x="125" y="218" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="600">Text follow-up sent</text>
                    </motion.g>
                  )}
                  
                  {/* Mock App Interface Background Lines */}
                  <rect x="35" y="250" width="100" height="12" rx="6" fill="#334155" opacity="0.3" />
                  <rect x="35" y="275" width="230" height="1" fill="#334155" opacity="0.2" />
                  
                  <rect x="35" y="300" width="230" height="60" rx="12" fill="#1e293b" opacity="0.5" />
                  <rect x="35" y="370" width="230" height="60" rx="12" fill="#1e293b" opacity="0.5" />

                </motion.g>
              )}
            </AnimatePresence>

          </g>
        </svg>
      </motion.div>
    </motion.div>
  )
}
