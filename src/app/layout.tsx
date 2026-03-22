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
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Prime Green Landscape LLC",
              "image": "https://primegreenlandscape.com/images/logo.png",
              "@id": "https://primegreenlandscape.com",
              "url": "https://primegreenlandscape.com",
              "telephone": "(571) 405-0031",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Montgomery Village",
                "addressLocality": "Montgomery Village",
                "addressRegion": "MD",
                "postalCode": "20886",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 39.1754,
                "longitude": -77.2011
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday"
                ],
                "opens": "07:00",
                "closes": "19:00"
              },
              "areaServed": [
                { "@type": "City", "name": "Montgomery Village" },
                { "@type": "City", "name": "Gaithersburg" },
                { "@type": "City", "name": "Rockville" },
                { "@type": "City", "name": "Germantown" },
                { "@type": "City", "name": "Bethesda" },
                { "@type": "City", "name": "Silver Spring" }
              ]
            })
          }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
