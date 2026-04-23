import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { PartnershipSection } from '@/components/partnership-section';
import { ValueSection } from '@/components/value-section';
import { RoutesSection } from '@/components/routes-section';
import { FleetSection } from '@/components/fleet-section';
import { TestimonialsSection } from '@/components/testimonials-section';
import { ContactSection } from '@/components/contact-section';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen">
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
