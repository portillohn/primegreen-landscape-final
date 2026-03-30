import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { GoogleTagManager } from '@next/third-parties/google'
import { siteConfig } from '@/lib/siteConfig'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const ogImage = `${siteConfig.url}${siteConfig.primaryOgImage}`

export const metadata: Metadata = {
  title: {
    default: 'Prime Green Landscape LLC | Lawn Care Montgomery County MD',
    template: '%s | Prime Green Landscape LLC',
  },
  description:
    'Premium residential lawn mowing, mulching, edging, and seasonal cleanup in Montgomery County, MD. Push mower specialists serving Montgomery Village, Gaithersburg, Rockville, Germantown, Bethesda, and Silver Spring.',
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
  openGraph: {
    siteName: siteConfig.name,
    locale: 'en_US',
    type: 'website',
    url: siteConfig.url,
    title: 'Prime Green Landscape LLC | Premium Lawn Care in Montgomery County, MD',
    description:
      'Professional residential lawn mowing, mulch installation, yard cleanup, and edging for Montgomery County homeowners.',
    images: [
      {
        url: ogImage,
        width: 1600,
        height: 900,
        alt: 'Prime Green Landscape LLC premium lawn care in Montgomery County, Maryland',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prime Green Landscape LLC | Premium Lawn Care in Montgomery County, MD',
    description:
      'Push mower specialists for premium residential lawn care, mulching, and cleanup in Montgomery County.',
    images: [ogImage],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const businessSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': `${siteConfig.url}/#localbusiness`,
        name: siteConfig.name,
        image: ogImage,
        url: siteConfig.url,
        telephone: siteConfig.phoneRaw,
        email: siteConfig.email,
        priceRange: '$$',
        address: {
          '@type': 'PostalAddress',
          streetAddress: siteConfig.address.city,
          addressLocality: siteConfig.address.city,
          addressRegion: siteConfig.address.state,
          postalCode: siteConfig.address.zip,
          addressCountry: siteConfig.address.country,
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 39.1754,
          longitude: -77.2011,
        },
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '07:00',
          closes: '18:00',
        },
        areaServed: siteConfig.serviceAreas.map((city) => ({ '@type': 'City', name: city })),
        sameAs: [siteConfig.social.facebook, siteConfig.social.instagram],
      },
      {
        '@type': 'Organization',
        '@id': `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        url: siteConfig.url,
        logo: {
          '@type': 'ImageObject',
          url: `${siteConfig.url}/images/logo.png`,
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: siteConfig.phoneRaw,
          email: siteConfig.email,
          contactType: 'customer service',
          areaServed: 'US-MD',
          availableLanguage: 'en',
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        publisher: {
          '@id': `${siteConfig.url}/#organization`,
        },
      },
    ],
  }

  return (
    <html lang="en" className={inter.variable}>
      <GoogleTagManager gtmId="GTM-WTWV8FZW" />
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WTWV8FZW"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
