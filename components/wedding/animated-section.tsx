"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { ReactNode, CSSProperties } from "react"

type AnimationType = 
  | "fade-up" 
  | "fade-down" 
  | "flip-x" 
  | "flip-y" 
  | "zoom-3d" 
  | "rotate-left" 
  | "rotate-right"
  | "slide-left"
  | "slide-right"

interface AnimatedSectionProps {
  children: ReactNode
  animation?: AnimationType
  delay?: number
  className?: string
  style?: CSSProperties
}

export function AnimatedSection({ 
  children, 
  animation = "fade-up", 
  delay = 0,
  className = "",
  style = {}
}: AnimatedSectionProps) {
  const { ref, progress, isInView } = useScrollAnimation({
    threshold: 0.1,
    rootMargin: "-50px",
  })

  const getTransformStyle = (): CSSProperties => {
    const easeProgress = Math.min(1, progress * 1.5) // Slightly faster completion
    
    const baseStyle: CSSProperties = {
      transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
      willChange: "transform, opacity",
    }

    if (!isInView) {
      switch (animation) {
        case "fade-up":
          return {
            ...baseStyle,
            opacity: 0,
            transform: "translateY(60px)",
          }
        case "fade-down":
          return {
            ...baseStyle,
            opacity: 0,
            transform: "translateY(-60px)",
          }
        case "flip-x":
          return {
            ...baseStyle,
            opacity: 0,
            transform: "perspective(1000px) rotateX(-45deg)",
            transformOrigin: "center top",
          }
        case "flip-y":
          return {
            ...baseStyle,
            opacity: 0,
            transform: "perspective(1000px) rotateY(-45deg)",
          }
        case "zoom-3d":
          return {
            ...baseStyle,
            opacity: 0,
            transform: "perspective(1000px) translateZ(-150px) scale(0.85)",
          }
        case "rotate-left":
          return {
            ...baseStyle,
            opacity: 0,
            transform: "perspective(1000px) rotateY(25deg) translateX(-80px)",
          }
        case "rotate-right":
          return {
            ...baseStyle,
            opacity: 0,
            transform: "perspective(1000px) rotateY(-25deg) translateX(80px)",
          }
        case "slide-left":
          return {
            ...baseStyle,
            opacity: 0,
            transform: "translateX(-100px)",
          }
        case "slide-right":
          return {
            ...baseStyle,
            opacity: 0,
            transform: "translateX(100px)",
          }
        default:
          return {
            ...baseStyle,
            opacity: 0,
            transform: "translateY(60px)",
          }
      }
    }

    // In view - animate to final state
    return {
      ...baseStyle,
      opacity: 1,
      transform: "perspective(1000px) translateY(0) translateX(0) translateZ(0) rotateX(0deg) rotateY(0deg) scale(1)",
      transformOrigin: "center center",
    }
  }

  return (
    <div 
      ref={ref} 
      className={className}
      style={{
        ...getTransformStyle(),
        ...style,
      }}
    >
      {children}
    </div>
  )
}

// Floating petals component for decoration
export function FloatingPetals() {
  const petals = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 8}s`,
    duration: `${6 + Math.random() * 4}s`,
    size: 10 + Math.random() * 15,
  }))

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute opacity-60"
          style={{
            left: petal.left,
            top: "-50px",
            width: petal.size,
            height: petal.size,
            animation: `petalFall ${petal.duration} linear infinite`,
            animationDelay: petal.delay,
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="w-full h-full"
          >
            <path
              d="M12 2C12 2 8 6 8 10C8 14 12 18 12 18C12 18 16 14 16 10C16 6 12 2 12 2Z"
              fill="#c9a45c"
              opacity="0.6"
            />
            <path
              d="M12 6C12 6 9 9 9 12C9 15 12 18 12 18C12 18 15 15 15 12C15 9 12 6 12 6Z"
              fill="#f4d58d"
              opacity="0.4"
            />
          </svg>
        </div>
      ))}
    </div>
  )
}

// 3D Card component with tilt effect
interface Card3DProps {
  children: ReactNode
  className?: string
}

export function Card3D({ children, className = "" }: Card3DProps) {
  return (
    <div 
      className={`card-3d ${className}`}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </div>
  )
}
