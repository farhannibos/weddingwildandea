"use client"

import { useEffect, useRef, useState, useCallback } from "react"

interface UseScrollAnimationOptions {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
}

interface ScrollProgress {
  progress: number
  isInView: boolean
}

export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
  const { threshold = 0.1, rootMargin = "-50px", triggerOnce = false } = options
  const ref = useRef<HTMLDivElement>(null)
  const [scrollData, setScrollData] = useState<ScrollProgress>({
    progress: 0,
    isInView: false,
  })

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const handleScroll = () => {
      const rect = element.getBoundingClientRect()
      const windowHeight = window.innerHeight
      
      // Calculate progress from 0 to 1 as element moves through viewport
      const elementTop = rect.top
      const elementHeight = rect.height
      
      // Progress: 0 when element enters viewport, 1 when it's fully in view
      const progress = Math.max(0, Math.min(1, 
        (windowHeight - elementTop) / (windowHeight + elementHeight * 0.5)
      ))
      
      const isInView = rect.top < windowHeight && rect.bottom > 0

      setScrollData({ progress, isInView })
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          window.addEventListener("scroll", handleScroll, { passive: true })
          handleScroll()
        } else if (!triggerOnce) {
          window.removeEventListener("scroll", handleScroll)
          setScrollData({ progress: 0, isInView: false })
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [threshold, rootMargin, triggerOnce])

  return { ref, ...scrollData }
}

export function useParallax(speed: number = 0.5) {
  const ref = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const scrolled = window.scrollY
      const rate = scrolled * speed * 0.1
      setOffset(rate)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [speed])

  return { ref, offset }
}
