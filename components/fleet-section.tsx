'use client';

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, ChevronLeft, ChevronRight, Package, Truck, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';

export function FleetSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFleet, setActiveFleet] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('fleet-section');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const fleetTypes = [
    {
      name: 'Engkel Fuso',
      capacity: '5-6 ton',
      description: 'Kendaraan serbaguna untuk pengiriman lokal dan antar kota dengan kapasitas medium.',
      specs: ['Payload 5-6 ton', 'Jarak sedang', 'Efisien biaya', 'Armada terbanyak'],
      bestFor: 'Retail, FMCG, dan distribusi harian',
      icon: Truck,
      color: 'from-blue-500 to-blue-600',
      image:
        'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80'
    },
    {
      name: 'Tronton',
      capacity: '20-25 ton',
      description: 'Kendaraan besar untuk cargo masif dengan teknologi modern dan keamanan terjamin.',
      specs: ['Payload 20-25 ton', 'Jarak jauh', 'Cargo berat', 'Tenaga mesin besar'],
      bestFor: 'Pabrikasi, distribusi antarkota, dan bulk delivery',
      icon: Package,
      color: 'from-slate-600 to-slate-700',
      image:
        'https://images.unsplash.com/photo-1616432043562-3671ea2e5242?auto=format&fit=crop&w=1200&q=80'
    },
    {
      name: 'Gandengan',
      capacity: '30+ ton',
      description: 'Armada premium untuk pengiriman ultra besar dengan sistem suspensi canggih.',
      specs: ['Payload 30+ ton', 'Jarak ultra jauh', 'Proyek khusus', 'Kemampuan maksimal'],
      bestFor: 'Project cargo, alat berat, dan volume ekstrem',
      icon: Zap,
      color: 'from-amber-500 to-amber-600',
      image:
        'https://images.unsplash.com/photo-1592838064575-70ed626d3a0e?auto=format&fit=crop&w=1200&q=80'
    }
  ];

  const goPrevFleet = () => {
    setActiveFleet((prev) => (prev === 0 ? fleetTypes.length - 1 : prev - 1));
  };

  const goNextFleet = () => {
    setActiveFleet((prev) => (prev === fleetTypes.length - 1 ? 0 : prev + 1));
  };

  const renderFleetCard = (fleet: (typeof fleetTypes)[number], idx: number) => {
    const Icon = fleet.icon;
    return (
      <Card
        key={idx}
        className={`group overflow-hidden rounded-2xl border border-border/70 bg-background transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-2xl hover:shadow-accent/10 ${isVisible ? 'fadeInUp' : 'translate-y-8 opacity-0'}`}
        style={{ animationDelay: `${idx * 0.15}s` }}
      >
        <div className={`relative flex h-44 flex-col justify-between overflow-hidden p-6 text-white`}>
          <Image
            src={fleet.image}
            alt={`Foto armada ${fleet.name}`}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="absolute inset-0 object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className={`absolute inset-0 bg-gradient-to-br ${fleet.color} opacity-75`} />
          <div className="absolute right-0 top-0 h-24 w-24 -mr-10 -mt-10 rounded-full bg-white/10 transition-transform duration-500 group-hover:scale-110"></div>
          <div className="absolute bottom-0 left-0 h-20 w-20 -mb-8 -ml-8 rounded-full bg-white/10 transition-transform duration-500 group-hover:scale-110"></div>

          <div className="relative z-10">
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-white/20 backdrop-blur-sm">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold">{fleet.name}</h3>
          </div>
          <div className="relative z-10 flex items-center justify-between gap-3">
            <p className="text-sm font-semibold text-white/90">Kapasitas: {fleet.capacity}</p>
            <Badge className="border-0 bg-white/20 text-white hover:bg-white/20">Ready Fleet</Badge>
          </div>
        </div>

        <div className="p-6">
          <p className="mb-4 leading-relaxed text-muted-foreground">{fleet.description}</p>
          <div className="mb-6 rounded-lg border border-border/70 bg-muted/40 px-4 py-3">
            <p className="mb-1 text-xs font-semibold tracking-wide text-muted-foreground">COCOK UNTUK</p>
            <p className="text-sm font-medium text-foreground">{fleet.bestFor}</p>
          </div>

          <div className="mb-6 space-y-2.5">
            {fleet.specs.map((spec, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                <span className="text-sm text-foreground">{spec}</span>
              </div>
            ))}
          </div>

          <Button asChild className="h-11 w-full gap-2 font-semibold">
            <a href="/permintaan-pengiriman">
              Konsultasi Armada Ini
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </Card>
    );
  };

  return (
    <section id="fleet-section" className="section-shell">
      <div className="section-inner">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="section-kicker">ARMADA KAMI</span>
          <h2 className="section-title">
            Armada yang Siap Angkut Tanpa Drama
          </h2>
          <p className="section-subtitle">
            Fokus section ini adalah pilihan unit: kapasitas, kecocokan jenis muatan, dan karakter tiap armada.
          </p>
        </div>

        {/* Mobile slider with icon buttons */}
        <div className="md:hidden">
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 right-0 z-10 flex items-center justify-between px-2">
              <Button
                type="button"
                size="icon"
                variant="outline"
                onClick={goPrevFleet}
                className="pointer-events-auto h-11 w-11 rounded-full border-accent/40 bg-background/90 shadow-md"
                aria-label="Armada sebelumnya"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                type="button"
                size="icon"
                variant="outline"
                onClick={goNextFleet}
                className="pointer-events-auto h-11 w-11 rounded-full border-accent/40 bg-background/90 shadow-md"
                aria-label="Armada berikutnya"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
            {renderFleetCard(fleetTypes[activeFleet], activeFleet)}
          </div>
          <div className="mt-4 flex items-center justify-center gap-2">
            {fleetTypes.map((_, idx) => (
              <button
                key={idx}
                type="button"
                aria-label={`Pilih armada ${idx + 1}`}
                onClick={() => setActiveFleet(idx)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full"
              >
                <span className={`h-2.5 rounded-full transition-all ${idx === activeFleet ? 'w-6 bg-accent' : 'w-2.5 bg-border'}`} />
              </button>
            ))}
          </div>
        </div>

        {/* Desktop grid */}
        <div className="hidden gap-8 md:grid md:grid-cols-3">
          {fleetTypes.map((fleet, idx) => renderFleetCard(fleet, idx))}
        </div>

        {/* Footer note */}
        <div className="mt-16 border-t border-border/70 pt-12 text-center">
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Identitas layanan kami: armada siap jalan, informasi perjalanan transparan, dan komunikasi cepat saat ada perubahan di lapangan.
          </p>
        </div>
      </div>
    </section>
  );
}
