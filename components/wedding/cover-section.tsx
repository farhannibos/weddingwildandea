"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { Volume2, VolumeX } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CoverSectionProps {
  onOpen: () => void
  isOpen: boolean
}

export function CoverSection({ onOpen, isOpen }: CoverSectionProps) {
  const [isMuted, setIsMuted] = useState(true)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    if (isOpen && audioRef.current) {
      audioRef.current.play().catch(() => {
        // Autoplay might be blocked
      })
      setIsMuted(false)
    }
  }, [isOpen])

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted
      setIsMuted(!isMuted)
    }
  }

  if (isOpen) {
    return (
      <>
      <audio
          ref={audioRef}
          src="/audio/Audio1.mp3"
          loop
          muted={isMuted}
        />
        <button
          onClick={toggleMute}
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-all"
          aria-label={isMuted ? "Unmute music" : "Mute music"}
        >
          {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
        </button>
      </>
    )
  }

  return (
    <section className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0">
        <Image
          src="/images/gallery-2.webp"
          alt="Pasangan pengantin"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brown-dark/30 via-brown-dark/20 to-brown-dark/40" />
      </div>
      
      <div className="absolute inset-0 batik-pattern opacity-30" />
      
      <div className="relative z-10 text-center px-6 animate-fade-in">
        <div className="mb-6">
          <svg className="w-16 h-16 mx-auto text-gold" viewBox="0 0 100 100" fill="currentColor">
            <path d="M50 10 L60 30 L80 30 L65 45 L70 65 L50 55 L30 65 L35 45 L20 30 L40 30 Z" />
          </svg>
        </div>
        
        <p className="text-cream text-lg tracking-[0.3em] uppercase mb-4 font-light">
          Undangan Pernikahan
        </p>
        
        <h1 className="font-[var(--font-script)] text-5xl md:text-7xl lg:text-8xl text-cream mb-2">
          Wildan
        </h1>
        <p className="text-gold text-3xl md:text-4xl font-light mb-2">&</p>
        <h1 className="font-[var(--font-script)] text-5xl md:text-7xl lg:text-8xl text-cream mb-8">
          Dea
        </h1>
        
        <p className="text-cream/90 text-base md:text-lg mb-12 max-w-md mx-auto font-light leading-relaxed">
          {"\""}Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu pasangan-pasangan dari jenismu sendiri{"\""}
          <br />
          <span className="text-gold text-sm">(QS. Ar-Rum: 21)</span>
        </p>
        
        <Button
          onClick={onOpen}
          className="px-8 py-6 text-lg bg-gold hover:bg-gold-dark text-brown-dark font-medium tracking-wider transition-all duration-300 hover:scale-105"
        >
          Buka Undangan
        </Button>
        
        <div className="mt-12 scroll-indicator">
          <svg className="w-6 h-6 mx-auto text-cream/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
      
      <audio
        ref={audioRef}
        src="/audio/Audio1.mp3"
        loop
        muted
      />
    </section>
  )
}
