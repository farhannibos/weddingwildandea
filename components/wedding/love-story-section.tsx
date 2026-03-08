"use client"

import { Heart } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

const stories = [
  {
    year: "2020",
    title: "Pertemuan Pertama",
    description:
      "Kami bertemu di sebuah acara reuni kampus. Saat mata kami bertemu, ada sesuatu yang berbeda. Percakapan sederhana yang berubah menjadi awal kisah cinta kami.",
  },
  {
    year: "2021",
    title: "Menjalin Hubungan",
    description:
      "Setelah setahun saling mengenal, kami memutuskan untuk memulai hubungan yang lebih serius. Bersama melewati suka dan duka, semakin menguatkan ikatan kami.",
  },
  {
    year: "2023",
    title: "Lamaran",
    description:
      "Di tengah gemerlap lampu malam kota, dengan penuh ketulusan dan cinta, Budi melamar Ayu untuk menjadi pendamping hidupnya selamanya.",
  },
  {
    year: "2025",
    title: "Hari Pernikahan",
    description:
      "Hari yang telah dinanti-nanti akhirnya tiba. Kami siap memulai babak baru kehidupan sebagai suami istri, bersama membangun keluarga yang bahagia.",
  },
]

export function LoveStorySection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section
      ref={ref}
      className="py-20 px-6 bg-cream relative overflow-hidden"
      id="story"
    >
      <div className="absolute inset-0 batik-pattern opacity-20" />
      
      <div className="max-w-3xl mx-auto relative z-10">
        <div className={`text-center mb-16 ${isInView ? "animate-fade-in-up" : "opacity-0"}`}>
          <p className="text-gold-dark tracking-[0.3em] uppercase text-sm mb-4">Perjalanan Cinta</p>
          <h2 className="font-[var(--font-script)] text-4xl md:text-5xl text-brown-dark mb-6">
            Love Story
          </h2>
          <div className="w-24 h-0.5 bg-gold mx-auto" />
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gold/30 transform md:-translate-x-1/2" />

          {stories.map((story, index) => (
            <div
              key={story.year}
              className={`relative mb-12 last:mb-0 ${
                isInView ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              <div
                className={`flex flex-col md:flex-row items-start gap-6 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 w-12 h-12 transform -translate-x-1/2 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center shadow-lg">
                    <Heart className="w-5 h-5 text-cream fill-current" />
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`ml-16 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"
                  }`}
                >
                  <span className="inline-block px-4 py-1 bg-gold/20 text-gold-dark text-sm rounded-full mb-3">
                    {story.year}
                  </span>
                  <h3 className="text-xl md:text-2xl font-semibold text-brown-dark mb-3">
                    {story.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {story.description}
                  </p>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
