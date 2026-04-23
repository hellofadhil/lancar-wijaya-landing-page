'use client';

import { Card } from '@/components/ui/card';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

export function RoutesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeRoute, setActiveRoute] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('routes-section');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const routes = [
    {
      from: 'Surabaya',
      to: 'Jakarta',
      freq: 'Reguler Harian/Mingguan',
      specialty: 'Rute Utama',
      color: 'from-blue-500 to-blue-600',
      image:
        'https://images.unsplash.com/photo-1555899434-94d1368aa7af?auto=format&fit=crop&w=1200&q=80'
    },
    {
      from: 'Surabaya',
      to: 'Palembang',
      freq: 'Proyek Pipa & Kaca',
      specialty: 'Cargo Khusus',
      color: 'from-slate-600 to-slate-700',
      image:
        'https://images.unsplash.com/photo-1566552881560-0be862a7c445?auto=format&fit=crop&w=1200&q=80'
    },
    {
      from: 'Surabaya',
      to: 'Bali',
      freq: 'Reguler Harian',
      specialty: 'Rute Cepat',
      color: 'from-amber-500 to-amber-600',
      image:
        'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80'
    },
    {
      from: 'Surabaya',
      to: 'Lombok',
      freq: 'Reguler Mingguan',
      specialty: 'Rute Insular',
      color: 'from-cyan-500 to-cyan-600',
      image:
        'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1200&q=80'
    }
  ];

  return (
    <section id="routes-section" className="section-shell">
      <div className="section-inner">
        <div className="mb-16 text-center">
          <span className="section-kicker">RUTE OPERASIONAL</span>
          <h2 className="section-title">Jalur Distribusi Utama dari Surabaya</h2>
          <p className="section-subtitle">
            Fokus section ini adalah jaringan dan frekuensi rute: kota tujuan, ritme keberangkatan, dan pola distribusi.
          </p>
        </div>

        <div className="mb-12 -mx-4 overflow-x-auto px-4 pb-2 md:mx-0 md:overflow-visible md:px-0">
          <div className="flex min-w-max snap-x snap-mandatory gap-4 md:min-w-0 md:grid md:grid-cols-2 md:gap-6 lg:grid-cols-4">
            {routes.map((route, idx) => (
              <Card
                key={idx}
                onClick={() => setActiveRoute(idx)}
                className={`modern-card w-[78vw] max-w-sm shrink-0 snap-center cursor-pointer p-6 md:w-auto md:max-w-none ${
                  activeRoute === idx ? 'border-accent shadow-xl shadow-accent/10' : 'hover:border-accent/50'
                } ${isVisible ? 'fadeInUp' : 'translate-y-8 opacity-0'}`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="relative mb-4 h-28 overflow-hidden rounded-xl">
                  <Image
                    src={route.image}
                    alt={`Foto kota tujuan ${route.to}`}
                    fill
                    sizes="(max-width: 768px) 78vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${route.color} opacity-55`} />
                  <div className="absolute inset-x-0 bottom-2 text-center text-white">
                    <p className="text-[11px] font-semibold opacity-90">Rute</p>
                    <p className="text-lg font-bold">{route.to}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-foreground">{route.from}</span>
                    <ArrowRight className="h-4 w-4 text-accent" />
                    <span className="text-sm font-semibold text-foreground">{route.to}</span>
                  </div>

                  <div>
                    <span className="mb-2 inline-flex rounded-full border border-accent/30 bg-accent/10 px-2 py-1 text-xs font-medium text-accent">
                      {route.specialty}
                    </span>
                    <p className="text-xs text-muted-foreground">{route.freq}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <Card className="modern-card border-accent/20 bg-muted/40 p-8">
          <div className="flex flex-col items-center gap-8 md:flex-row">
            <div className="flex-1">
              <p className="mb-2 text-xs font-semibold tracking-[0.18em] text-accent">RUTE AKTIF</p>
              <h3 className="mb-2 text-2xl font-bold text-foreground">
                {routes[activeRoute].from} {'->'} {routes[activeRoute].to}
              </h3>
              <p className="mb-4 text-muted-foreground">
                Spesialisasi: <span className="font-semibold text-foreground">{routes[activeRoute].specialty}</span>
              </p>
              <p className="text-muted-foreground">
                Frekuensi: <span className="font-semibold text-foreground">{routes[activeRoute].freq}</span>
              </p>
              <div className="mt-5 inline-flex rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-foreground">
                Dikelola langsung tim dispatch CV Lancar Wijaya
              </div>
            </div>
            <div className="relative h-36 w-full max-w-xs flex-shrink-0 overflow-hidden rounded-xl">
              <Image
                src={routes[activeRoute].image}
                alt={`Foto kota ${routes[activeRoute].to}`}
                fill
                sizes="(max-width: 768px) 100vw, 20rem"
                className="object-cover"
                loading="lazy"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${routes[activeRoute].color} opacity-45`} />
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
