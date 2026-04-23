import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { PartnershipSection } from '@/components/partnership-section';
import { ValueSection } from '@/components/value-section';
import { RoutesSection } from '@/components/routes-section';
import { FleetSection } from '@/components/fleet-section';
import { TestimonialsSection } from '@/components/testimonials-section';
import { ContactSection } from '@/components/contact-section';
import { Footer } from '@/components/footer';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://lancarwijaya.com';

const structuredData = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'LocalBusiness'],
  name: 'CV Lancar Wijaya Sentosa',
  alternateName: 'CV Lancar Wijaya',
  url: siteUrl,
  logo: `${siteUrl}/placeholder-logo.png`,
  description:
    'Jasa ekspedisi dan logistik dari Surabaya untuk pengiriman nasional, cargo khusus, dan kebutuhan armada bisnis.',
  email: 'info@lancarwijaya.com',
  telephone: '+62-31-8000-7000',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Jl. Raya Surabaya-Jakarta Km 75',
    addressLocality: 'Surabaya',
    addressRegion: 'Jawa Timur',
    postalCode: '60188',
    addressCountry: 'ID',
  },
  areaServed: {
    '@type': 'Country',
    name: 'Indonesia',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '06:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '06:00',
      closes: '14:00',
    },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Layanan Ekspedisi dan Logistik',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Pengiriman Reguler',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Cargo Khusus',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Pengiriman Malam',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Asuransi Penuh',
        },
      },
    ],
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />
      <HeroSection />
      <PartnershipSection />
      <ValueSection />
      <RoutesSection />
      <FleetSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
