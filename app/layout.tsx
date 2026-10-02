import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import LeadCaptureModal from '@/components/LeadCaptureModal'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Shreya Sanghvi | Psychotherapist & NLP Coach',
  description: 'Find clarity, healing, and transformation. Online therapy and coaching sessions across Canada with Shreya Sanghvi, a registered psychotherapist and NLP certified coach.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
      },
      {
        url: '/favicon-64x64.png',
        type: 'image/png',
      },
      {
        url: '/favicon.ico',
        type: 'image/x-icon',
      },
    ],
    apple: '/favicon-64x64.png',
    shortcut: '/favicon-64x64.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  userScalable: true,
  themeColor: '#3A5244',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-background">
        <div className="flex flex-col min-h-screen">
          {children}
        </div>
        <LeadCaptureModal />
        <Analytics />
      </body>
    </html>
  )
}
