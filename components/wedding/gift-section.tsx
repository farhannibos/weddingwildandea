"use client"

import { useState } from "react"
import { Gift, Copy, CheckCircle, CreditCard, Wallet } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useInView } from "@/hooks/use-in-view"

const bankAccounts = [
  {
    bank: "Bank Central Asia (BCA)",
    accountNumber: "1234567890",
    accountName: "Ayu Lestari",
    icon: CreditCard,
  },
  {
    bank: "Bank Mandiri",
    accountNumber: "0987654321",
    accountName: "Budi Santoso",
    icon: Wallet,
  },
]

export function GiftSection() {
  const { ref, isInView } = useInView({ threshold: 0.2 })
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

  const copyToClipboard = async (text: string, index: number) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedIndex(index)
      setTimeout(() => setCopiedIndex(null), 2000)
    } catch {
      alert("Gagal menyalin. Silakan salin manual.")
    }
  }

  return (
    <section
      ref={ref}
      className="py-20 px-6 bg-brown-dark relative overflow-hidden"
      id="gift"
    >
      <div className="absolute inset-0 batik-pattern opacity-10" />
      
      <div className="max-w-xl mx-auto relative z-10">
        <div className={`text-center mb-12 ${isInView ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Gift className="w-8 h-8 text-gold" />
          </div>
          <p className="text-gold tracking-[0.3em] uppercase text-sm mb-4">Amplop Digital</p>
          <h2 className="font-[var(--font-script)] text-4xl md:text-5xl text-cream mb-6">
            Kirim Hadiah
          </h2>
          <p className="text-cream/70 max-w-md mx-auto">
            Tanpa mengurangi rasa hormat, bagi Anda yang ingin memberikan tanda kasih kepada kedua mempelai, dapat melalui:
          </p>
        </div>

        <div className="space-y-4">
          {bankAccounts.map((account, index) => {
            const IconComponent = account.icon
            return (
              <div
                key={index}
                className={`bg-cream/10 backdrop-blur-sm p-6 rounded-lg border border-gold/30 ${
                  isInView ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${0.2 * (index + 1)}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <IconComponent className="w-6 h-6 text-gold" />
                  <span className="text-cream font-medium">{account.bank}</span>
                </div>
                
                <div className="bg-brown-dark/50 rounded-md p-4 mb-3">
                  <p className="text-cream text-2xl font-mono tracking-wider text-center">
                    {account.accountNumber}
                  </p>
                </div>
                
                <p className="text-cream/70 text-sm text-center mb-4">
                  a.n. {account.accountName}
                </p>
                
                <Button
                  onClick={() => copyToClipboard(account.accountNumber, index)}
                  className="w-full bg-gold hover:bg-gold-dark text-brown-dark"
                >
                  {copiedIndex === index ? (
                    <>
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Tersalin!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 mr-2" />
                      Salin Nomor Rekening
                    </>
                  )}
                </Button>
              </div>
            )
          })}
        </div>

        {/* QRIS Section */}
        <div
          className={`mt-8 bg-cream/10 backdrop-blur-sm p-6 rounded-lg border border-gold/30 text-center ${
            isInView ? "animate-fade-in-up" : "opacity-0"
          }`}
          style={{ animationDelay: "0.6s" }}
        >
          <p className="text-cream font-medium mb-4">Atau scan QRIS</p>
          <div className="w-48 h-48 bg-cream mx-auto rounded-lg p-2">
            {/* QRIS Placeholder */}
            <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2ZmZiIvPjxnIGZpbGw9IiMwMDAiPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIvPjxyZWN0IHg9IjcwIiB5PSIwIiB3aWR0aD0iMzAiIGhlaWdodD0iMzAiLz48cmVjdCB4PSIwIiB5PSI3MCIgd2lkdGg9IjMwIiBoZWlnaHQ9IjMwIi8+PHJlY3QgeD0iMTAiIHk9IjEwIiB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIGZpbGw9IiNmZmYiLz48cmVjdCB4PSI4MCIgeT0iMTAiIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgZmlsbD0iI2ZmZiIvPjxyZWN0IHg9IjEwIiB5PSI4MCIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjZmZmIi8+PHJlY3QgeD0iNDAiIHk9IjAiIHdpZHRoPSI1IiBoZWlnaHQ9IjUiLz48cmVjdCB4PSI1MCIgeT0iMCIgd2lkdGg9IjUiIGhlaWdodD0iNSIvPjxyZWN0IHg9IjQwIiB5PSIxMCIgd2lkdGg9IjUiIGhlaWdodD0iNSIvPjxyZWN0IHg9IjQwIiB5PSI0MCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIi8+PHJlY3QgeD0iNDUiIHk9IjQ1IiB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIGZpbGw9IiNmZmYiLz48L2c+PC9zdmc+')] bg-contain bg-center bg-no-repeat flex items-center justify-center">
              <span className="text-brown-dark/50 text-xs">QRIS Code</span>
            </div>
          </div>
          <p className="text-cream/50 text-sm mt-4">Scan dengan aplikasi e-wallet Anda</p>
        </div>
      </div>
    </section>
  )
}
