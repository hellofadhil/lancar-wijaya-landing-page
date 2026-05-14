import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://lancarwijaya.com'
const siteName = 'CV Lancar Wijaya Sentosa'
const siteDescription =
  'Jasa ekspedisi resmi dan terpercaya dari Surabaya untuk pengiriman nasional, cargo khusus, armada modern, dan layanan logistik profesional.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  title: {
    default: `${siteName} - Jasa Ekspedisi Resmi & Terpercaya`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    'CV Lancar Wijaya Sentosa',
    'Lancar Wijaya',
    'jasa ekspedisi Surabaya',
    'ekspedisi nasional',
    'jasa cargo Surabaya',
    'logistik Indonesia',
    'pengiriman barang',
    'armada truk logistik',
    'mitra logistik Maspion',
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  alternates: {
    canonical: '/',
  },
  verification: {
    google: '7VRDVohW-l4vF5hu08DRwH-TqICDEy2HBY423NEFPTw',
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: '/',
    siteName,
    title: `${siteName} - Jasa Ekspedisi Resmi & Terpercaya`,
    description: siteDescription,
    images: [
      {
        url: '/placeholder-logo.png',
        width: 800,
        height: 600,
        alt: `${siteName} logo`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteName} - Jasa Ekspedisi Resmi & Terpercaya`,
    description: siteDescription,
    images: ['/placeholder-logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  category: 'logistics',
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
