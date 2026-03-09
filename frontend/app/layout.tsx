import type { Metadata, Viewport } from 'next'
import { Bebas_Neue, Barlow_Condensed, IBM_Plex_Mono, DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const bebasNeue = Bebas_Neue({ 
  weight: '400',
  subsets: ["latin"],
  variable: '--font-bebas'
});

const barlowCondensed = Barlow_Condensed({ 
  weight: ['400', '600', '700'],
  subsets: ["latin"],
  variable: '--font-barlow'
});

const ibmPlexMono = IBM_Plex_Mono({ 
  weight: ['400', '500', '600'],
  subsets: ["latin"],
  variable: '--font-ibm-mono'
});

const dmSans = DM_Sans({ 
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
  variable: '--font-dm-sans'
});

export const metadata: Metadata = {
  title: 'RESQ - Every Second is a Life',
  description: 'Real-time animal emergency rescue dispatch system. Report injured animals, track rescues, and save lives.',
  generator: 'RESQ',
  manifest: '/manifest.json',
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
  themeColor: '#D72638',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${bebasNeue.variable} ${barlowCondensed.variable} ${ibmPlexMono.variable} ${dmSans.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
