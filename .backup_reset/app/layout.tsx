import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Phone } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Prime Green Landscape LLC | Residential Lawn Mowing",
  description: "Professional residential lawn mowing in Montgomery County, MD using push mowers for superior precision and lawn health.",
  metadataBase: new URL('https://primegreenlandscape.com'),
  icons: {
    icon: '/favicon.jpg',
    apple: '/favicon.jpg',
    shortcut: '/favicon.jpg',
  },
  openGraph: {
    images: [
      {
        url: '/images/logo.jpg',
        width: 1024,
        height: 1024,
        alt: 'Prime Green Landscape LLC',
      }
    ],
  },
  twitter: {
    card: 'summary',
    images: ['/images/logo.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        
        {/* Mobile Sticky Bottom Bar */}
        <div className="fixed bottom-0 left-0 right-0 z-40 bg-green-700 text-white py-3 px-4 md:hidden shadow-2xl border-t border-green-600/30">
          <Link 
            href="/contact"
            className="w-full flex items-center justify-center gap-2 text-center font-bold py-2 px-6 rounded-md uppercase tracking-wider text-sm"
          >
            Get Free Quote
          </Link>
        </div>
      </body>
    </html>
  );
}
