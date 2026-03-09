import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Great_Vibes } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-serif'
})

const greatVibes = Great_Vibes({ 
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-script'
})

export const metadata: Metadata = {
  title: 'Undangan Pernikahan - Shinta & Wildan',
  description: 'Undangan Pernikahan - Yas Shinta Deana Putri & Wildan Ibnu Batutoh. Kami mengundang Bapak/Ibu/Saudara/i untuk hadir dalam acara pernikahan kami.',
  generator: 'v0.app',
  openGraph: {
    title: 'Undangan Pernikahan - Shinta & Wildan',
    description: 'Undangan Pernikahan - Yas Shinta Deana Putri & Wildan Ibnu Batutoh',
    url: 'https://undangan-nikah.vercel.app',
    siteName: 'Undangan Pernikahan',
    images: [
      {
        url: 'https://undangan-nikah.vercel.app/images/couple-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Shinta & Wildan - Undangan Pernikahan',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Undangan Pernikahan - Shinta & Wildan',
    description: 'Undangan Pernikahan - Yas Shinta Deana Putri & Wildan Ibnu Batutoh',
    images: ['https://undangan-nikah.vercel.app/images/couple-hero.jpg'],
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#c9a45c',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${cormorant.variable} ${greatVibes.variable} font-serif antialiased`} suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
