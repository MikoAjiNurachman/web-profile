"use client"

import { MotionConfig } from "framer-motion"
import type { ReactNode } from "react"

// Global reduced-motion gate: when the OS asks for reduced motion,
// framer-motion collapses transform/layout animations to instant and
// keeps opacity fades. Pairs with the CSS media query in globals.css.
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}
