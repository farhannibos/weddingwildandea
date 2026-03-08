"use client"

import { useState } from "react"
import { Send, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { AnimatedSection, Card3D } from "./animated-section"
import { useInView } from "@/hooks/use-in-view"

export function RSVPSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    guests: "1",
    attendance: "hadir",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.name.trim()) {
      alert("Nama harus diisi")
      return
    }

    setIsSubmitting(true)

    try {
      const url = new URL("https://script.google.com/macros/s/AKfycbzd7TA-wYcrx4LMawLpcN5oCxtD8RwkZzuO2eoPWFbE5bJzUI9Z_jb8pxvZjrhVCVQp/exec")
      
      url.searchParams.append("name", formData.name)
      url.searchParams.append("guests", formData.guests)
      url.searchParams.append("attendance", formData.attendance)
      url.searchParams.append("message", formData.message)

      const response = await fetch(url.toString(), {
        method: "GET",
        mode: "no-cors"
      })

      // Dengan no-cors, response akan selalu ok, jadi kita asumsikan berhasil
      console.log("RSVP submitted successfully")
      setIsSubmitted(true)
      setFormData({ name: "", guests: "1", attendance: "hadir", message: "" })
      
    } catch (error) {
      console.error("Fetch error:", error)
      alert("Terjadi kesalahan. Silakan refresh halaman dan coba lagi.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      ref={ref}
      className="py-20 px-6 bg-cream relative overflow-hidden perspective-container"
      id="rsvp"
    >
      <div className="absolute inset-0 batik-pattern opacity-20" />
      
      {/* Batik corner ornaments */}
      <div className="absolute top-0 left-0 w-24 h-24">
        <svg viewBox="0 0 100 100" className="w-full h-full text-gold/25">
          <path d="M0 0 L100 0 L100 20 Q50 40 0 20 Z" fill="currentColor" />
          <path d="M0 0 L0 100 L20 100 Q40 50 20 0 Z" fill="currentColor" />
          <circle cx="30" cy="30" r="5" fill="currentColor" />
        </svg>
      </div>
      <div className="absolute top-0 right-0 w-24 h-24 transform scale-x-[-1]">
        <svg viewBox="0 0 100 100" className="w-full h-full text-gold/25">
          <path d="M0 0 L100 0 L100 20 Q50 40 0 20 Z" fill="currentColor" />
          <path d="M0 0 L0 100 L20 100 Q40 50 20 0 Z" fill="currentColor" />
          <circle cx="30" cy="30" r="5" fill="currentColor" />
        </svg>
      </div>
      
      <div className="max-w-xl mx-auto relative z-10">
        <AnimatedSection animation="flip-x" className="text-center mb-12">
          <p className="text-gold-dark tracking-[0.3em] uppercase text-sm mb-4">Konfirmasi</p>
          <h2 className="font-[var(--font-script)] text-4xl md:text-5xl text-brown-dark mb-6 gold-shimmer">
            RSVP
          </h2>
          <div className="w-24 h-0.5 bg-gold mx-auto mb-6" />
          <p className="text-muted-foreground">
            Mohon konfirmasi kehadiran Anda
          </p>
        </AnimatedSection>

        {isSubmitted ? (
          <AnimatedSection animation="zoom-3d">
            <Card3D className="bg-card p-8 rounded-lg shadow-lg text-center border border-gold/20">
              <CheckCircle className="w-16 h-16 text-gold mx-auto mb-4 animate-float-3d" />
              <h3 className="text-2xl font-semibold text-brown-dark mb-2">Terima Kasih!</h3>
              <p className="text-muted-foreground">
                Konfirmasi kehadiran Anda telah kami terima.
              </p>
            </Card3D>
          </AnimatedSection>
        ) : (
          <AnimatedSection animation="flip-y" delay={200}>
            <div className="bg-card p-8 rounded-lg shadow-lg border border-gold/20 relative z-20">
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-brown mb-2">
                      Nama Lengkap
                    </label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-cream border-gold/30 focus:border-gold transition-all duration-300 hover:border-gold/50"
                      placeholder="Masukkan nama lengkap"
                    />
                  </div>

                  <div>
                    <label htmlFor="guests" className="block text-sm font-medium text-brown mb-2">
                      Jumlah Tamu
                    </label>
                    <select
                      id="guests"
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full px-3 py-2 rounded-md border border-gold/30 bg-cream text-foreground focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition-all duration-300 hover:border-gold/50"
                    >
                      <option value="1">1 Orang</option>
                      <option value="2">2 Orang</option>
                      <option value="3">3 Orang</option>
                      <option value="4">4 Orang</option>
                      <option value="5">5 Orang</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-brown mb-2">
                      Status Kehadiran
                    </label>
                    <div className="flex gap-4">
                      <label className="flex items-center gap-2 cursor-pointer group">
                        <input
                          type="radio"
                          name="attendance"
                          value="hadir"
                          checked={formData.attendance === "hadir"}
                          onChange={(e) => setFormData({ ...formData, attendance: e.target.value })}
                          className="w-4 h-4 text-gold focus:ring-gold"
                        />
                        <span className="text-brown group-hover:text-gold-dark transition-colors">Hadir</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer group">
                        <input
                          type="radio"
                          name="attendance"
                          value="tidak hadir"
                          checked={formData.attendance === "tidak hadir"}
                          onChange={(e) => setFormData({ ...formData, attendance: e.target.value })}
                          className="w-4 h-4 text-gold focus:ring-gold"
                        />
                        <span className="text-brown group-hover:text-gold-dark transition-colors">Tidak Hadir</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-brown mb-2">
                      Ucapan & Doa untuk Pengantin
                    </label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-cream border-gold/30 focus:border-gold min-h-[100px] transition-all duration-300 hover:border-gold/50"
                      placeholder="Tulis ucapan dan doa terbaik Anda..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gold hover:bg-gold-dark text-brown-dark py-6 text-lg font-semibold cursor-pointer transition-all"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Mengirim...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        <Send className="w-5 h-5" />
                        Kirim Konfirmasi
                      </span>
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </AnimatedSection>
        )}
      </div>
    </section>
  )
}
