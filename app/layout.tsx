import './global.css'
import type { Metadata } from 'next'
import { Header } from './components/header'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Coding Exercise Two',
    template: '%s | Coding Exercise Two',
  },
  description: 'This is my response for Exercise Two.',
  openGraph: {
    title: 'Coding Exercise Two',
    description: 'This is my response for Exercise Two.',
    url: baseUrl,
    siteName: 'Coding Exercise Two',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className=""
    >
      <body className="">
        <main className="">
          <Header />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  )
}
