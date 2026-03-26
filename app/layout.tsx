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
  metadataBase: new URL('https://weddingwildea-2026.vercel.app'),
  title: 'The Wedding Of Wildan & Dea',
  description: 'Kami mengundang Anda untuk menghadiri acara pernikahan kami',
  generator: 'Next.js',
  openGraph: {
    title: 'The Wedding Of Wildan & Dea',
    description: 'Kami mengundang Anda untuk menghadiri acara pernikahan kami',
    url: '/',
    siteName: 'Wedding Wildan & Dea',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Wildan & Dea Wedding Invitation',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Wedding Of Wildan & Dea',
    description: 'Kami mengundang Anda untuk menghadiri acara pernikahan kami',
    images: ['/images/og-image.jpg'],
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
  other: {
    preload: [
      "/images/couple-hero.webp",
      "/images/gallery-2.webp",
    ],
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
