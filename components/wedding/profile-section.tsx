"use client"

import Image from "next/image"
import { AnimatedSection, Card3D } from "./animated-section"
import { useInView } from "@/hooks/use-in-view"

export function ProfileSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section
      ref={ref}
      className="py-20 px-6 bg-cream relative overflow-hidden perspective-container"
      id="profile"
    >
      {/* Batik Corner Ornaments */}
      <div className="absolute top-0 left-0 w-32 h-32 md:w-48 md:h-48">
        <svg viewBox="0 0 200 200" className="w-full h-full text-gold/30">
          <defs>
            <pattern id="batikPattern1" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="3" fill="currentColor" />
              <circle cx="10" cy="10" r="2" fill="currentColor" />
              <circle cx="30" cy="10" r="2" fill="currentColor" />
              <circle cx="10" cy="30" r="2" fill="currentColor" />
              <circle cx="30" cy="30" r="2" fill="currentColor" />
              <path d="M0 20 Q10 10 20 20 Q30 30 40 20" stroke="currentColor" fill="none" strokeWidth="1" />
              <path d="M20 0 Q10 10 20 20 Q30 30 20 40" stroke="currentColor" fill="none" strokeWidth="1" />
            </pattern>
          </defs>
          <rect x="0" y="0" width="200" height="200" fill="url(#batikPattern1)" />
          <path d="M0 0 L200 0 L200 30 Q100 60 0 30 Z" fill="currentColor" opacity="0.3" />
          <path d="M0 0 L0 200 L30 200 Q60 100 30 0 Z" fill="currentColor" opacity="0.3" />
        </svg>
      </div>
      <div className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48 transform scale-x-[-1]">
        <svg viewBox="0 0 200 200" className="w-full h-full text-gold/30">
          <rect x="0" y="0" width="200" height="200" fill="url(#batikPattern1)" />
          <path d="M0 0 L200 0 L200 30 Q100 60 0 30 Z" fill="currentColor" opacity="0.3" />
          <path d="M0 0 L0 200 L30 200 Q60 100 30 0 Z" fill="currentColor" opacity="0.3" />
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 w-32 h-32 md:w-48 md:h-48 transform scale-y-[-1]">
        <svg viewBox="0 0 200 200" className="w-full h-full text-gold/30">
          <rect x="0" y="0" width="200" height="200" fill="url(#batikPattern1)" />
          <path d="M0 0 L200 0 L200 30 Q100 60 0 30 Z" fill="currentColor" opacity="0.3" />
          <path d="M0 0 L0 200 L30 200 Q60 100 30 0 Z" fill="currentColor" opacity="0.3" />
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 w-32 h-32 md:w-48 md:h-48 transform scale-[-1]">
        <svg viewBox="0 0 200 200" className="w-full h-full text-gold/30">
          <rect x="0" y="0" width="200" height="200" fill="url(#batikPattern1)" />
          <path d="M0 0 L200 0 L200 30 Q100 60 0 30 Z" fill="currentColor" opacity="0.3" />
          <path d="M0 0 L0 200 L30 200 Q60 100 30 0 Z" fill="currentColor" opacity="0.3" />
        </svg>
      </div>

      {/* Batik Border Lines */}
      <div className="absolute top-8 left-8 right-8 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="absolute bottom-8 left-8 right-8 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="absolute top-8 bottom-8 left-8 w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent" />
      <div className="absolute top-8 bottom-8 right-8 w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <AnimatedSection animation="flip-x" className="text-center mb-12">
          <p className="text-gold-dark tracking-[0.3em] uppercase text-sm mb-4">Bismillahirrahmanirrahim</p>
          <h2 className="font-[var(--font-script)] text-4xl md:text-5xl text-brown-dark mb-6">
            Mempelai
          </h2>
          {/* Batik Divider */}
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-px bg-gold/60" />
            <svg viewBox="0 0 40 40" className="w-8 h-8 text-gold animate-float-3d">
              <circle cx="20" cy="20" r="8" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="20" cy="20" r="4" fill="currentColor" />
              <circle cx="20" cy="8" r="2" fill="currentColor" />
              <circle cx="20" cy="32" r="2" fill="currentColor" />
              <circle cx="8" cy="20" r="2" fill="currentColor" />
              <circle cx="32" cy="20" r="2" fill="currentColor" />
            </svg>
            <div className="w-16 h-px bg-gold/60" />
          </div>
        </AnimatedSection>

        {/* Combined Photo */}
        <AnimatedSection animation="zoom-3d" delay={200} className="relative mx-auto mb-12 max-w-sm">
          <Card3D className="relative aspect-[3/4] w-full">
            {/* Batik Frame */}
            <div className="absolute -inset-4 border-2 border-gold/40 rounded-lg" />
            <div className="absolute -inset-2 border border-gold/20 rounded-lg" />
            
            {/* Corner Decorations */}
            <svg className="absolute -top-6 -left-6 w-12 h-12 text-gold animate-float-3d" viewBox="0 0 50 50" style={{ animationDelay: "0s" }}>
              <path d="M25 5 L30 20 L45 25 L30 30 L25 45 L20 30 L5 25 L20 20 Z" fill="currentColor" opacity="0.6" />
              <circle cx="25" cy="25" r="5" fill="currentColor" />
            </svg>
            <svg className="absolute -top-6 -right-6 w-12 h-12 text-gold animate-float-3d" viewBox="0 0 50 50" style={{ animationDelay: "0.5s" }}>
              <path d="M25 5 L30 20 L45 25 L30 30 L25 45 L20 30 L5 25 L20 20 Z" fill="currentColor" opacity="0.6" />
              <circle cx="25" cy="25" r="5" fill="currentColor" />
            </svg>
            <svg className="absolute -bottom-6 -left-6 w-12 h-12 text-gold animate-float-3d" viewBox="0 0 50 50" style={{ animationDelay: "1s" }}>
              <path d="M25 5 L30 20 L45 25 L30 30 L25 45 L20 30 L5 25 L20 20 Z" fill="currentColor" opacity="0.6" />
              <circle cx="25" cy="25" r="5" fill="currentColor" />
            </svg>
            <svg className="absolute -bottom-6 -right-6 w-12 h-12 text-gold animate-float-3d" viewBox="0 0 50 50" style={{ animationDelay: "1.5s" }}>
              <path d="M25 5 L30 20 L45 25 L30 30 L25 45 L20 30 L5 25 L20 20 Z" fill="currentColor" opacity="0.6" />
              <circle cx="25" cy="25" r="5" fill="currentColor" />
            </svg>
            
            <Image
              src="/images/couple-hero.jpg"
              alt="Mempelai - Dea & Wildan"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover rounded-lg"
            />
          </Card3D>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 items-start relative">
          {/* Bride */}
          <AnimatedSection animation="rotate-left" delay={300} className="text-center">
            {/* Jasmine decoration */}
            <div className="flex justify-center mb-4">
              <svg viewBox="0 0 100 30" className="w-24 h-8 text-gold">
                <circle cx="50" cy="15" r="6" fill="currentColor" />
                <circle cx="35" cy="15" r="4" fill="currentColor" opacity="0.7" />
                <circle cx="65" cy="15" r="4" fill="currentColor" opacity="0.7" />
                <circle cx="22" cy="15" r="3" fill="currentColor" opacity="0.5" />
                <circle cx="78" cy="15" r="3" fill="currentColor" opacity="0.5" />
                <path d="M10 15 Q20 10 30 15" stroke="currentColor" fill="none" strokeWidth="1" opacity="0.4" />
                <path d="M70 15 Q80 10 90 15" stroke="currentColor" fill="none" strokeWidth="1" opacity="0.4" />
              </svg>
            </div>
            
            <h3 className="font-[var(--font-script)] text-3xl md:text-4xl text-brown-dark mb-2 gold-shimmer">
               Wildan Ibnu Batutoh, A.Md.Kep
            </h3>
            <p className="text-muted-foreground text-lg mb-4">Putra dari</p>
            <p className="text-brown font-medium leading-relaxed">
              Bapak H. Hamdi<br />
              <span className="text-gold-dark text-xl">&</span><br />
              Ibu Hj.Lasiana
            </p>
          </AnimatedSection>

          {/* Divider */}
          <div className="hidden md:flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 translate-y-8">
            <div className="flex flex-col items-center animate-float-3d">
              <svg viewBox="0 0 40 80" className="w-10 h-20 text-gold">
                <path d="M20 0 L20 25" stroke="currentColor" strokeWidth="1" />
                <circle cx="20" cy="40" r="15" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <path d="M20 40 L25 35 L20 30 L15 35 Z" fill="currentColor" />
                <path d="M20 40 L25 45 L20 50 L15 45 Z" fill="currentColor" />
                <path d="M20 40 L30 40 L25 35 Z" fill="currentColor" opacity="0.7" />
                <path d="M20 40 L10 40 L15 35 Z" fill="currentColor" opacity="0.7" />
                <path d="M20 55 L20 80" stroke="currentColor" strokeWidth="1" />
              </svg>
            </div>
          </div>

          {/* Groom */}
          <AnimatedSection animation="rotate-right" delay={500} className="text-center">
            {/* Jasmine decoration */}
            <div className="flex justify-center mb-4">
              <svg viewBox="0 0 100 30" className="w-24 h-8 text-gold">
                <circle cx="50" cy="15" r="6" fill="currentColor" />
                <circle cx="35" cy="15" r="4" fill="currentColor" opacity="0.7" />
                <circle cx="65" cy="15" r="4" fill="currentColor" opacity="0.7" />
                <circle cx="22" cy="15" r="3" fill="currentColor" opacity="0.5" />
                <circle cx="78" cy="15" r="3" fill="currentColor" opacity="0.5" />
                <path d="M10 15 Q20 10 30 15" stroke="currentColor" fill="none" strokeWidth="1" opacity="0.4" />
                <path d="M70 15 Q80 10 90 15" stroke="currentColor" fill="none" strokeWidth="1" opacity="0.4" />
              </svg>
            </div>
            
            <h3 className="font-[var(--font-script)] text-3xl md:text-4xl text-brown-dark mb-2 gold-shimmer">
             
              Yas Shinta Deana Putri, A.Md.Kep
            </h3>
            <p className="text-muted-foreground text-lg mb-4">Putri dari</p>
            <p className="text-brown font-medium leading-relaxed">
              Bapak Yusron Agus Santoso<br />
              <span className="text-gold-dark text-xl">&</span><br />
              Ibu Cristiana
            </p>
          </AnimatedSection>
        </div>

        {/* Mobile divider */}
        <div className="md:hidden text-center my-8">
          <svg viewBox="0 0 100 40" className="w-20 h-10 mx-auto text-gold animate-float-3d">
            <circle cx="50" cy="20" r="12" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <path d="M50 20 L55 15 L50 10 L45 15 Z" fill="currentColor" />
            <path d="M50 20 L55 25 L50 30 L45 25 Z" fill="currentColor" />
            <path d="M10 20 L35 20" stroke="currentColor" strokeWidth="1" />
            <path d="M65 20 L90 20" stroke="currentColor" strokeWidth="1" />
          </svg>
        </div>
      </div>
    </section>
  )
}
