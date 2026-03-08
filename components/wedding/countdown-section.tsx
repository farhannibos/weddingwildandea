"use client"

import { useEffect, useState } from "react"
import { AnimatedSection, Card3D } from "./animated-section"
import { useInView } from "@/hooks/use-in-view"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function CountdownSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const weddingDate = new Date("2026-04-18T09:00:00").getTime()

    const calculateTimeLeft = () => {
      const now = new Date().getTime()
      const difference = weddingDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  const timeUnits = [
    { value: timeLeft.days, label: "Hari" },
    { value: timeLeft.hours, label: "Jam" },
    { value: timeLeft.minutes, label: "Menit" },
    { value: timeLeft.seconds, label: "Detik" },
  ]

  return (
    <section
      ref={ref}
      className="py-20 px-6 bg-brown-dark relative overflow-hidden perspective-container"
      id="countdown"
    >
      {/* Batik Truntum Pattern Background */}
      <div className="absolute inset-0 batik-truntum opacity-15" />
      
      {/* Decorative Batik Frame */}
      <div className="absolute top-0 left-0 right-0 h-12">
        <svg viewBox="0 0 1200 50" className="w-full h-full text-gold/30" preserveAspectRatio="none">
          <pattern id="batikBorder" x="0" y="0" width="100" height="50" patternUnits="userSpaceOnUse">
            <circle cx="50" cy="25" r="6" fill="currentColor" />
            <circle cx="25" cy="25" r="3" fill="currentColor" opacity="0.5" />
            <circle cx="75" cy="25" r="3" fill="currentColor" opacity="0.5" />
            <path d="M0 25 Q25 15 50 25 Q75 35 100 25" stroke="currentColor" fill="none" strokeWidth="1" />
          </pattern>
          <rect x="0" y="0" width="1200" height="50" fill="url(#batikBorder)" />
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-12 transform rotate-180">
        <svg viewBox="0 0 1200 50" className="w-full h-full text-gold/30" preserveAspectRatio="none">
          <rect x="0" y="0" width="1200" height="50" fill="url(#batikBorder)" />
        </svg>
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <AnimatedSection animation="flip-x" className="text-center mb-12">
          <p className="text-gold tracking-[0.3em] uppercase text-sm mb-4">Menghitung Hari</p>
          <h2 className="font-[var(--font-script)] text-4xl md:text-5xl text-cream mb-4 gold-shimmer">
            Menuju Hari Bahagia
          </h2>
          <p className="text-cream/80">18 April 2026</p>
          
          {/* Batik Ornament Divider */}
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="w-12 h-px bg-gold/50" />
            <svg viewBox="0 0 30 30" className="w-6 h-6 text-gold animate-float-3d">
              <circle cx="15" cy="15" r="6" fill="currentColor" />
              <circle cx="15" cy="5" r="2" fill="currentColor" opacity="0.6" />
              <circle cx="15" cy="25" r="2" fill="currentColor" opacity="0.6" />
              <circle cx="5" cy="15" r="2" fill="currentColor" opacity="0.6" />
              <circle cx="25" cy="15" r="2" fill="currentColor" opacity="0.6" />
            </svg>
            <div className="w-12 h-px bg-gold/50" />
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-4 gap-4 md:gap-8">
          {timeUnits.map((unit, index) => (
            <AnimatedSection
              key={unit.label}
              animation="flip-y"
              delay={index * 150}
              className="text-center"
            >
              <Card3D className="bg-cream/10 backdrop-blur-sm rounded-lg p-4 md:p-6 border border-gold/30 relative">
                {/* Corner ornaments */}
                <svg className="absolute top-1 left-1 w-4 h-4 text-gold/40" viewBox="0 0 20 20">
                  <path d="M0 0 L10 0 L10 2 L2 2 L2 10 L0 10 Z" fill="currentColor" />
                </svg>
                <svg className="absolute bottom-1 right-1 w-4 h-4 text-gold/40 transform rotate-180" viewBox="0 0 20 20">
                  <path d="M0 0 L10 0 L10 2 L2 2 L2 10 L0 10 Z" fill="currentColor" />
                </svg>
                
                <span className="text-3xl md:text-5xl lg:text-6xl font-bold text-cream block mb-2 transition-all duration-300">
                  {String(unit.value).padStart(2, "0")}
                </span>
                <span className="text-gold text-sm md:text-base tracking-wider uppercase">
                  {unit.label}
                </span>
              </Card3D>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="fade-up" delay={800} className="text-center mt-12">
          <p className="text-cream/60 text-lg italic">
            {"\""}Segala sesuatu indah pada waktunya{"\""}
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
