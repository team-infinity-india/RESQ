"use client"

import { useEffect, useState } from "react"

export function Logo({ compact = false }: { compact?: boolean }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div 
      className={`flex items-center gap-2 transition-all duration-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
    >
      {/* Red Cross Icon */}
      <div className="relative">
        <svg 
          viewBox="0 0 32 32" 
          className={compact ? "w-8 h-8" : "w-10 h-10"}
          fill="none"
        >
          <rect x="12" y="4" width="8" height="24" rx="2" fill="#D72638" />
          <rect x="4" y="12" width="24" height="8" rx="2" fill="#D72638" />
        </svg>
        {/* Pulse effect */}
        <div className="absolute inset-0 animate-pulse-ring">
          <svg 
            viewBox="0 0 32 32" 
            className={compact ? "w-8 h-8" : "w-10 h-10"}
            fill="none"
          >
            <rect x="12" y="4" width="8" height="24" rx="2" stroke="#D72638" strokeWidth="1" fill="none" opacity="0.3" />
            <rect x="4" y="12" width="24" height="8" rx="2" stroke="#D72638" strokeWidth="1" fill="none" opacity="0.3" />
          </svg>
        </div>
      </div>

      {/* Wordmark */}
      {!compact && (
        <div className="flex items-center gap-2">
          <span 
            className="text-2xl font-bold tracking-wider text-[#F0F4F8]"
            style={{ fontFamily: 'var(--font-bebas), Bebas Neue, sans-serif' }}
          >
            RESQ
          </span>
          {/* Live Badge */}
          <span className="flex items-center gap-1 px-1.5 py-0.5 bg-[#22C55E]/20 rounded text-[10px] font-mono text-[#22C55E] animate-pulse-glow">
            <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full" />
            LIVE
          </span>
        </div>
      )}
    </div>
  )
}
