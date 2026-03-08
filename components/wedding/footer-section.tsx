"use client"

import { Heart } from "lucide-react"
import { AnimatedSection } from "./animated-section"
import { useInView } from "@/hooks/use-in-view"

export function FooterSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <footer
      ref={ref}
      className="py-16 px-6 bg-cream relative overflow-hidden perspective-container"
      id="footer"
    >
      <div className="absolute inset-0 batik-pattern opacity-20" />
      
      <div className="max-w-2xl mx-auto relative z-10 text-center">
        <AnimatedSection animation="zoom-3d">
          {/* Ornament */}
          <div className="mb-8">
            <svg className="w-24 h-24 mx-auto text-gold animate-float-3d" viewBox="0 0 100 100" fill="currentColor">
              <path d="M50 10 L55 20 L65 20 L57 27 L60 37 L50 31 L40 37 L43 27 L35 20 L45 20 Z" opacity="0.6" />
              <path d="M50 30 L55 40 L65 40 L57 47 L60 57 L50 51 L40 57 L43 47 L35 40 L45 40 Z" />
              <path d="M50 50 L55 60 L65 60 L57 67 L60 77 L50 71 L40 77 L43 67 L35 60 L45 60 Z" opacity="0.6" />
            </svg>
          </div>

          <h2 className="font-[var(--font-script)] text-3xl md:text-4xl text-brown-dark mb-6 gold-shimmer">
            Terima Kasih
          </h2>
          
          <p className="text-muted-foreground leading-relaxed mb-8 max-w-md mx-auto">
            Merupakan suatu kebahagiaan dan kehormatan bagi kami, apabila Bapak/Ibu/Saudara/i berkenan hadir memberikan doa restu kepada kami.
          </p>

          <div className="mb-8">
            <p className="text-gold-dark text-lg mb-2">Kami yang berbahagia</p>
            <h3 className="font-[var(--font-script)] text-4xl md:text-5xl text-brown-dark gold-shimmer">
              Wildan & Dea
            </h3>
          </div>

          <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
            <span>Moch Farhan Fauzi</span>
          </div>

          <div className="mt-8 pt-8 border-t border-gold/20">
            <p className="text-muted-foreground/60 text-sm">
              © 2026 Wildan & Dea Wedding
            </p>
          </div>
        </AnimatedSection>
      </div>
    </footer>
  )
}
