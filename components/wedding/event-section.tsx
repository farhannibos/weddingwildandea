"use client"

import { MapPin, Calendar, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedSection, Card3D } from "./animated-section"
import { useInView } from "@/hooks/use-in-view"

export function EventSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  const openGoogleMaps = () => {
    window.open("https://maps.app.goo.gl/r44RgD1Wgk5Pi2ty8", "_blank")
  }

  return (
    <section
      ref={ref}
      className="py-20 px-6 bg-secondary relative overflow-hidden perspective-container"
      id="event"
    >
      {/* Batik Parang Pattern Background */}
      <div className="absolute inset-0 batik-parang opacity-20" />
      
      {/* Batik Corner Ornaments */}
      <div className="absolute top-4 left-4 w-24 h-24 md:w-32 md:h-32">
        <svg viewBox="0 0 100 100" className="w-full h-full text-gold/40">
          <path d="M0 0 L50 0 Q30 20 50 50 Q20 30 0 50 Z" fill="currentColor" />
          <circle cx="25" cy="25" r="8" fill="currentColor" opacity="0.5" />
          <circle cx="15" cy="15" r="3" fill="currentColor" />
        </svg>
      </div>
      <div className="absolute top-4 right-4 w-24 h-24 md:w-32 md:h-32 transform scale-x-[-1]">
        <svg viewBox="0 0 100 100" className="w-full h-full text-gold/40">
          <path d="M0 0 L50 0 Q30 20 50 50 Q20 30 0 50 Z" fill="currentColor" />
          <circle cx="25" cy="25" r="8" fill="currentColor" opacity="0.5" />
          <circle cx="15" cy="15" r="3" fill="currentColor" />
        </svg>
      </div>
      <div className="absolute bottom-4 left-4 w-24 h-24 md:w-32 md:h-32 transform scale-y-[-1]">
        <svg viewBox="0 0 100 100" className="w-full h-full text-gold/40">
          <path d="M0 0 L50 0 Q30 20 50 50 Q20 30 0 50 Z" fill="currentColor" />
          <circle cx="25" cy="25" r="8" fill="currentColor" opacity="0.5" />
          <circle cx="15" cy="15" r="3" fill="currentColor" />
        </svg>
      </div>
      <div className="absolute bottom-4 right-4 w-24 h-24 md:w-32 md:h-32 transform scale-[-1]">
        <svg viewBox="0 0 100 100" className="w-full h-full text-gold/40">
          <path d="M0 0 L50 0 Q30 20 50 50 Q20 30 0 50 Z" fill="currentColor" />
          <circle cx="25" cy="25" r="8" fill="currentColor" opacity="0.5" />
          <circle cx="15" cy="15" r="3" fill="currentColor" />
        </svg>
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <AnimatedSection animation="flip-y" className="text-center mb-16">
          <p className="text-gold-dark tracking-[0.3em] uppercase text-sm mb-4">Save The Date</p>
          <h2 className="font-[var(--font-script)] text-4xl md:text-5xl text-brown-dark mb-6 gold-shimmer">
            Waktu & Tempat
          </h2>
          {/* Batik Divider */}
          <div className="flex items-center justify-center gap-3">
            <svg viewBox="0 0 60 20" className="w-16 h-5 text-gold animate-float-3d">
              <path d="M0 10 Q15 0 30 10 Q45 20 60 10" stroke="currentColor" fill="none" strokeWidth="1.5" />
              <circle cx="30" cy="10" r="3" fill="currentColor" />
            </svg>
          </div>
        </AnimatedSection>

        <div className="flex justify-center">
          {/* Resepsi */}
          <AnimatedSection animation="rotate-right" delay={400} className="w-full md:w-1/2">
            <Card3D className="bg-card p-8 rounded-lg shadow-lg text-center border border-gold/30 relative overflow-hidden h-full">
              {/* Card Batik Ornament */}
              <div className="absolute top-0 left-0 w-16 h-16">
                <svg viewBox="0 0 50 50" className="w-full h-full text-gold/20">
                  <path d="M0 0 L25 0 L25 25 Q12 12 0 25 Z" fill="currentColor" />
                </svg>
              </div>
              <div className="absolute bottom-0 right-0 w-16 h-16 transform rotate-180">
                <svg viewBox="0 0 50 50" className="w-full h-full text-gold/20">
                  <path d="M0 0 L25 0 L25 25 Q12 12 0 25 Z" fill="currentColor" />
                </svg>
              </div>
              
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10 animate-float-3d" style={{ animationDelay: "0.5s" }}>
                <svg viewBox="0 0 50 50" className="w-8 h-8 text-gold-dark">
                  <circle cx="25" cy="20" r="8" fill="currentColor" />
                  <path d="M10 45 Q25 30 40 45" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
              </div>
              
              <h3 className="text-2xl font-semibold text-brown-dark mb-6 relative z-10">Resepsi</h3>
              
              <div className="space-y-4 text-brown relative z-10">
                <div className="flex items-center justify-center gap-3">
                  <Calendar className="w-5 h-5 text-gold-dark" />
                  <span>Sabtu, 18 April 2026</span>
                </div>
                
                <div className="flex items-center justify-center gap-3">
                  <Clock className="w-5 h-5 text-gold-dark" />
                  <span>09:00 - 13:00 WIB</span>
                </div>
                
                <div className="flex items-start justify-center gap-3">
                  <MapPin className="w-5 h-5 text-gold-dark mt-1 flex-shrink-0" />
                  <span className="text-left">
                    Gang Sedap Malam RT08 RW04<br />
                    Wadung Pal Tulungrejo<br />
                    Glenmore
                  </span>
                </div>
              </div>
            </Card3D>
          </AnimatedSection>
        </div>

        <AnimatedSection animation="zoom-3d" delay={600} className="text-center mt-10">
          <Button
            onClick={openGoogleMaps}
            className="bg-gold hover:bg-gold-dark text-brown-dark px-8 py-6 card-3d"
          >
            <MapPin className="w-5 h-5 mr-2" />
            Lihat Lokasi di Google Maps
          </Button>
        </AnimatedSection>
      </div>
    </section>
  )
}
