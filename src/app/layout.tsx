import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    default: 'Prime Green Landscape LLC | Lawn Care Montgomery County MD',
    template: '%s | Prime Green Landscape LLC',
  },
  description:
    'Professional residential lawn mowing in Montgomery County, MD. ' +
    'Push mower specialists. Free quotes. Online billing via Yardbook.',
  metadataBase: new URL('https://primegreenlandscape.com'),
  openGraph: {
    siteName: 'Prime Green Landscape LLC',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
