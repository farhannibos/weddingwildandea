"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import { AnimatedSection, Card3D } from "./animated-section"
import { useInView } from "@/hooks/use-in-view"

const galleryImages = [
{ src: "/images/gallery-1.webp", alt: "Prewedding photo 1" },
{ src: "/images/gallery-2.webp", alt: "Prewedding photo 2" },
{ src: "/images/gallery-3.webp", alt: "Prewedding photo 3" },
{ src: "/images/gallery-4.webp", alt: "Prewedding photo 4" },
{ src: "/images/couple-hero.webp", alt: "Couple photo" },
{ src: "/images/groom.webp", alt: "Groom photo" },
]

export function GallerySection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <>
      <section
        ref={ref}
        className="py-20 px-6 bg-secondary relative overflow-hidden perspective-container"
        id="gallery"
      >
        <div className="absolute inset-0 batik-pattern opacity-15" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <AnimatedSection animation="flip-x" className="text-center mb-16">
            <p className="text-gold-dark tracking-[0.3em] uppercase text-sm mb-4">Galeri</p>
            <h2 className="font-[var(--font-script)] text-4xl md:text-5xl text-brown-dark mb-6 gold-shimmer">
              Foto Prewedding
            </h2>
            <div className="w-24 h-0.5 bg-gold mx-auto" />
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <AnimatedSection
                key={image.src}
                animation={index % 2 === 0 ? "rotate-left" : "rotate-right"}
                delay={index * 100}
              >
                <Card3D
                  className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
                >
                  <div 
                    className="w-full h-full"
                    onClick={() => setSelectedImage(image.src)}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 768px) 50vw, 33vw"
                      loading="lazy"
                      placeholder="blur"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQAAAgIDAAAAAAAAAAAAAAAAAAAAZAB/9oACAEBAAE/AA=="
                    />
                    <div className="absolute inset-0 bg-brown-dark/0 group-hover:bg-brown-dark/30 transition-colors duration-300 flex items-center justify-center">
                      <div className="w-12 h-12 bg-gold/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-100 scale-50">
                        <svg className="w-6 h-6 text-brown-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </div>
                    </div>
                    {/* Corner frame */}
                    <div className="absolute top-2 left-2 w-6 h-6 border-l-2 border-t-2 border-gold/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute top-2 right-2 w-6 h-6 border-r-2 border-t-2 border-gold/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-2 left-2 w-6 h-6 border-l-2 border-b-2 border-gold/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-2 right-2 w-6 h-6 border-r-2 border-b-2 border-gold/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </Card3D>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox with animation */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-brown-dark/95 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-cream hover:text-gold transition-colors z-10"
            onClick={() => setSelectedImage(null)}
            aria-label="Close"
          >
            <X className="w-8 h-8" />
          </button>
          <div className="relative w-full max-w-4xl aspect-square md:aspect-video animate-zoom-3d">
            <Image
              src={selectedImage}
              alt="Gallery image"
              fill
              sizes="100vw"
              priority
              placeholder="blur"
              className="object-contain"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQAAAgIDAAAAAAAAAAAAAAAAAAAAZAB/9oACAEBAAE/AA=="
            />
          </div>
        </div>
      )}
    </>
  )
}
