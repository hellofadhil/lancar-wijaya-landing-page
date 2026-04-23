'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { MapPin, Phone, Mail, Clock, MessageCircle, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('contact-section');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section id="contact-section" className="section-shell">
      <div className="section-inner">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="section-kicker">HUBUNGI KAMI</span>
          <h2 className="section-title">
            Siap Layani Kebutuhan Pengiriman Anda
          </h2>
          <p className="section-subtitle">
            Hubungi kami melalui berbagai channel untuk mendapatkan informasi dan penawaran terbaik.
          </p>
        </div>

        {/* Contact grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact info cards */}
          <Card className={`modern-card p-8 ${isVisible ? 'fadeInUp' : 'translate-y-8 opacity-0'}`} style={{animationDelay: '0s'}}>
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-accent/20">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">Alamat Kantor</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Jl. Raya Surabaya-Jakarta Km 75, Surabaya, Jawa Timur 60188, Indonesia
                </p>
              </div>
            </div>
          </Card>

          <Card className={`modern-card p-8 ${isVisible ? 'fadeInUp' : 'translate-y-8 opacity-0'}`} style={{animationDelay: '0.1s'}}>
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-accent/20">
                <Phone className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">Telepon</h3>
                <p className="text-sm text-muted-foreground">
                  +62-31-8000-7000<br/>
                  +62-31-8000-7001
                </p>
              </div>
            </div>
          </Card>

          <Card className={`modern-card p-8 ${isVisible ? 'fadeInUp' : 'translate-y-8 opacity-0'}`} style={{animationDelay: '0.2s'}}>
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-accent/20">
                <Mail className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">Email</h3>
                <p className="text-sm text-muted-foreground break-all">
                  info@lancarwijaya.com<br/>
                  admin@lancarwijaya.com
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Info, hours, and FAQ */}
        <div className="mx-auto flex w-full max-w-4xl flex-col gap-6">
          <Card className={`modern-card border-accent/20 bg-gradient-to-br from-accent/10 to-transparent p-8 ${isVisible ? 'fadeInUp' : 'translate-y-8 opacity-0'}`} style={{animationDelay: '0.3s'}}>
            <div className="mb-6 flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-accent/20">
                <Clock className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Jam Operasional & FAQ</h3>
                <p className="text-sm text-muted-foreground">Klik untuk membuka informasi yang dibutuhkan.</p>
              </div>
            </div>

            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="hours">
                  <AccordionTrigger className="text-base font-semibold text-foreground hover:no-underline">
                    Jam Operasional
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Senin - Jumat</span>
                        <span className="font-semibold text-foreground">06:00 - 18:00 WIB</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Sabtu</span>
                        <span className="font-semibold text-foreground">06:00 - 14:00 WIB</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Minggu & Libur</span>
                        <span className="font-semibold text-foreground">Libur</span>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="faq-1">
                  <AccordionTrigger className="text-base font-semibold text-foreground hover:no-underline">
                    Bagaimana cara request penawaran?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Isi form permintaan pengiriman atau langsung hubungi WhatsApp kami. Tim akan respon cepat dengan estimasi biaya dan jadwal.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="faq-2">
                  <AccordionTrigger className="text-base font-semibold text-foreground hover:no-underline">
                    Apakah ada tracking pengiriman?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Ada. Setiap pengiriman dipantau dengan GPS tracking dan update status akan diinformasikan secara berkala.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="faq-3">
                  <AccordionTrigger className="text-base font-semibold text-foreground hover:no-underline">
                    Bisa untuk rute dan muatan khusus?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Bisa. Kami melayani pengiriman reguler, project cargo, hingga kebutuhan rute khusus sesuai jenis barang dan kapasitas armada.
                  </AccordionContent>
                </AccordionItem>
            </Accordion>
          </Card>

          <div className={`grid grid-cols-1 gap-4 sm:grid-cols-2 ${isVisible ? 'fadeInUp' : 'translate-y-8 opacity-0'}`} style={{animationDelay: '0.4s'}}>
            <Button asChild size="lg" className="h-14 gap-3 bg-accent text-base font-semibold text-accent-foreground shadow-lg shadow-accent/30 hover:bg-accent/90">
              <a href="/permintaan-pengiriman">
                Buka Form Pengiriman
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-14 gap-3 border-accent/40 text-base font-semibold text-foreground hover:bg-accent/10">
              <a href="#">
                <MessageCircle className="w-5 h-5" />
                Hubungi via WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
