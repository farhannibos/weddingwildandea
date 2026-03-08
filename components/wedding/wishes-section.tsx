"use client"

import { User } from "lucide-react"
import { AnimatedSection, Card3D } from "./animated-section"
import { useInView } from "@/hooks/use-in-view"

const wishes = [
  {
    name: "Moch Farhan Fauzi",
    message: "Selamat menempuh hidup baru, semoga menjadi keluarga yang sakinah, mawaddah, wa rahmah. Barakallah!",
    date: "1 hari lalu"
  },
  {
    name: "PMM Tulungrejo Universitas Muhamadiyah Malang",
    message: "Ya Allah, berkahilah pernikahan mereka, jadikan rumah tangga mereka penuh dengan kebahagiaan dan rezeki yang berlimpah. Aamiin.",
    date: "2 hari lalu"
  },
  {
    name: "Keluarga Besar Madura",
    message: "Selamat ya Wildan & Dea! Semoga langgeng sampai kakek nenek, selalu kompak dan saling menyayangi. Happy wedding!",
    date: "3 hari lalu"
  },
  {
    name: "Keluarga Besar Malang",
    message: "Barakallahu lakuma wa baraka alaikuma wa jama'a bainakuma fi khair. Selamat menempuh hidup baru!",
    date: "4 hari lalu"
  },
  {
    name: "Teman-teman Kampus",
    message: "Congrats buat Wildan & Dea! Akhirnya menikah juga setelah sekian lama. Semoga selalu bahagia ya!",
    date: "5 hari lalu"
  },
]

export function WishesSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section
      ref={ref}
      className="py-20 px-6 bg-secondary relative overflow-hidden perspective-container"
      id="wishes"
    >
      <div className="absolute inset-0 batik-pattern opacity-15" />
      
      <div className="max-w-2xl mx-auto relative z-10">
        <AnimatedSection animation="flip-x" className="text-center mb-12">
          <p className="text-gold-dark tracking-[0.3em] uppercase text-sm mb-4">Buku Tamu</p>
          <h2 className="font-[var(--font-script)] text-4xl md:text-5xl text-brown-dark mb-6 gold-shimmer">
            Ucapan & Doa
          </h2>
          <div className="w-24 h-0.5 bg-gold mx-auto" />
        </AnimatedSection>

        <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
          {wishes.map((wish, index) => (
            <AnimatedSection
              key={index}
              animation={index % 2 === 0 ? "slide-left" : "slide-right"}
              delay={index * 100}
            >
              <Card3D className="bg-card p-6 rounded-lg shadow-md border border-gold/20">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 animate-float-3d" style={{ animationDelay: `${index * 0.2}s` }}>
                    <User className="w-5 h-5 text-gold-dark" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-brown-dark">{wish.name}</h4>
                      <span className="text-xs text-muted-foreground">{wish.date}</span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{wish.message}</p>
                  </div>
                </div>
              </Card3D>
            </AnimatedSection>
          ))}
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: var(--gold);
          border-radius: 3px;
        }
      `}</style>
    </section>
  )
}
