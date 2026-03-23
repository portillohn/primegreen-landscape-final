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
  alternates: {
    canonical: '/',
  },
  openGraph: {
    siteName: 'Prime Green Landscape LLC',
    locale: 'en_US',
    type: 'website',
    url: 'https://primegreenlandscape.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prime Green Landscape LLC | Precision Lawn Care',
    description: 'Professional residential lawn mowing and landscape maintenance in Montgomery County, MD.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const businessSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://primegreenlandscape.com/#localbusiness",
        "name": "Prime Green Landscape LLC",
        "image": "https://primegreenlandscape.com/images/logo.png",
        "url": "https://primegreenlandscape.com",
        "telephone": "(571) 405-0031",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Montgomery Village",
          "addressLocality": "Montgomery Village",
          "addressRegion": "MD",
          "postalCode": "20879",
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
          "closes": "18:00"
        },
        "areaServed": [
          { "@type": "City", "name": "Montgomery Village" },
          { "@type": "City", "name": "Gaithersburg" },
          { "@type": "City", "name": "Rockville" },
          { "@type": "City", "name": "Germantown" },
          { "@type": "City", "name": "Bethesda" },
          { "@type": "City", "name": "Silver Spring" }
        ]
      },
      {
        "@type": "Organization",
        "@id": "https://primegreenlandscape.com/#organization",
        "name": "Prime Green Landscape LLC",
        "url": "https://primegreenlandscape.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://primegreenlandscape.com/images/logo.png"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "(571) 405-0031",
          "contactType": "customer service"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://primegreenlandscape.com/#website",
        "url": "https://primegreenlandscape.com",
        "name": "Prime Green Landscape LLC",
        "publisher": {
          "@id": "https://primegreenlandscape.com/#organization"
        }
      }
    ]
  };

  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WTWV8FZW');`,
          }}
        />
        {/* End Google Tag Manager */}
        <link rel="icon" href="/favicon.jpg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WTWV8FZW"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
