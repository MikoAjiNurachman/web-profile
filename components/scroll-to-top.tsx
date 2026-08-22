"use client"

import { useState } from "react"
import { ArrowUp } from "lucide-react"
import { cn } from "@/lib/utils"
import { useScroll, useMotionValueEvent } from "framer-motion"

// Apple icon-circular button — 44px target, translucent chip on the bottom-
// right. Visible once scrolled past 300px.
export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  // Motion's useScroll batches scroll reads (no raw window scroll listener).
  const { scrollY } = useScroll()
  useMotionValueEvent(scrollY, "change", (latest) => setIsVisible(latest > 300))

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={cn(
        "btn-icon-circular fixed bottom-6 right-6 z-50 transition-all duration-300",
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none",
      )}
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  )
}
