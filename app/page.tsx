"use client"

import { useState } from "react"
import { CoverSection } from "@/components/wedding/cover-section"
import { ProfileSection } from "@/components/wedding/profile-section"
import { EventSection } from "@/components/wedding/event-section"
import { CountdownSection } from "@/components/wedding/countdown-section"
import { GallerySection } from "@/components/wedding/gallery-section"
import { RSVPSection } from "@/components/wedding/rsvp-section"
import { WishesSection } from "@/components/wedding/wishes-section"
import { FooterSection } from "@/components/wedding/footer-section"
import { FloatingPetals } from "@/components/wedding/animated-section"

export default function WeddingInvitation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <main className="min-h-screen bg-background">
      <CoverSection onOpen={() => setIsOpen(true)} isOpen={isOpen} />
      
      {isOpen && (
        <>
          <FloatingPetals />
          <div className="animate-fade-in">
            <ProfileSection />
            <EventSection />
            <CountdownSection />
            <GallerySection />
            <RSVPSection />
            <WishesSection />
            <FooterSection />
          </div>
        </>
      )}
    </main>
  )
}
