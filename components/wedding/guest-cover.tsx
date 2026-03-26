"use client"

import { useState, useRef, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Image from "next/image"
import { Volume2, VolumeX } from "lucide-react"
import { Button } from "@/components/ui/button"
import { 
  ProfileSection, 
  EventSection, 
  CountdownSection, 
  GallerySection, 
  LoveStorySection,
  RSVPSection, 
  WishesSection, 
  FooterSection 
} from "@/components/wedding"
import { FloatingPetals } from "@/components/wedding/animated-section"

export function GuestCover() {
  const searchParams = useSearchParams()
  const kpd = searchParams.get("kpd")
  const guestName = kpd ? decodeURIComponent(kpd) : "Tamu Undangan"
  const [isCoverOpen, setIsCoverOpen] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const audioRef = useRef<HTMLAudioElement>(null)

  const handleOpenInvitation = () => {
    setIsCoverOpen(true)
  }

  useEffect(() => {
    if (isCoverOpen && audioRef.current) {
      audioRef.current.play().catch(() => {})
      setIsMuted(false)
    }
  }, [isCoverOpen])

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted
      setIsMuted(!isMuted)
    }
  }

  if (isCoverOpen) {
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
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-gold text-brown-dark shadow-lg hover:bg-gold-dark transition-all duration-300"
          aria-label={isMuted ? "Hidupkan musik" : "Matikan musik"}
        >
          {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
        </button>
        <FloatingPetals />
        <main className="min-h-screen bg-background pt-20">
          <div className="animate-fade-in">
            <ProfileSection />
            <EventSection />
            <CountdownSection />
            <GallerySection />
            <LoveStorySection />
            <RSVPSection />
            <WishesSection />
            <FooterSection />
          </div>
        </main>
      </>
    )
  }

  return (
    <section className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0">
        <Image
          src="/images/gallery-2.webp"
          alt="Cover"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brown-dark/30 via-brown-dark/20 to-brown-dark/40" />
      </div>
      
      <div className="absolute inset-0 opacity-30 batik-pattern" />
      
      <div className="relative z-10 text-center px-6 w-full max-w-2xl animate-fade-in">
        {/* Guest Greeting */}
        <div className="mb-8">
          <p className="text-2xl md:text-3xl lg:text-4xl text-cream/95 font-light leading-relaxed tracking-wide mb-2">
            Yth. Bapak/Ibu/Saudara/i
          </p>
          <p className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gold tracking-wide">
            {guestName}
          </p>
          <p className="text-2xl md:text-3xl lg:text-4xl text-cream/95 font-light">
            Di Tempat
          </p>
        </div>
        
        <div className="mb-8">
          <svg className="w-20 h-20 mx-auto text-gold mb-4" viewBox="0 0 100 100" fill="currentColor">
            <path d="M50 10 L60 30 L80 30 L65 45 L70 65 L50 55 L30 65 L35 45 L20 30 L40 30 Z" />
          </svg>
          <p className="text-cream text-xl md:text-2xl tracking-[0.3em] uppercase font-light mb-4">
            Undangan Pernikahan
          </p>
        </div>
        
        <div className="mb-12">
          <h1 className="font-[var(--font-script)] text-5xl md:text-7xl lg:text-8xl text-cream mb-3 px-4">
            Wildan
          </h1>
          <p className="text-gold text-4xl md:text-5xl font-light mb-3">&</p>
          <h1 className="font-[var(--font-script)] text-5xl md:text-7xl lg:text-8xl text-cream mb-12 px-4">
            Dea
          </h1>
        </div>
        
        <p className="text-cream/90 text-lg md:text-xl mb-12 max-w-md mx-auto font-light leading-relaxed px-4">
          \"Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu pasangan-pasangan dari jenismu sendiri\"
          <br />
          <span className="text-gold text-base">(QS. Ar-Rum: 21)</span>
        </p>
        
        <Button
          onClick={handleOpenInvitation}
          className="px-12 py-8 text-xl bg-gold hover:bg-gold-dark text-brown-dark font-medium tracking-wider transition-all duration-300 hover:scale-105 shadow-2xl text-lg md:text-xl"
          size="lg"
        >
          Buka Undangan
        </Button>
        
        <div className="mt-16">
          <svg className="w-8 h-8 mx-auto text-cream/60 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}

