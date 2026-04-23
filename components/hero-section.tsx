import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { ArrowRight, MapPin, MessageCircle, PackageCheck, ShieldCheck, Truck } from 'lucide-react';

export function HeroSection() {
  const deliveryStats = [
    { value: '15+', label: 'Tahun ritme lapangan' },
    { value: '500+', label: 'Pengiriman bulanan' },
    { value: '10+', label: 'Rute aktif nasional' }
  ];

  return (
    <section
      className="relative min-h-screen overflow-hidden bg-primary pt-20 pb-14"
      style={{
        backgroundImage:
          'radial-gradient(circle at 15% 18%, rgba(245,177,66,0.34), transparent 28%), linear-gradient(135deg, var(--primary) 0%, var(--primary) 48%, #163a57 100%)'
      }}
    >
      {/* Atmospheric background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-16 h-80 w-80 rounded-full bg-accent/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[34rem] w-[34rem] rounded-full bg-sky-300/20 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black/20 to-transparent" />
        <div className="absolute left-1/2 top-0 h-full w-[56rem] -translate-x-1/2 rotate-12 border-x border-dashed border-white/10" />
        <div className="absolute left-[58%] top-0 h-full w-16 -translate-x-1/2 rotate-12 bg-white/[0.03]" />
      </div>

      <div className="relative container mx-auto flex min-h-[calc(100vh-5rem)] items-center px-4 sm:px-6 lg:px-8">
        <div className="grid w-full grid-cols-1 items-center gap-14 py-4 lg:grid-cols-[0.92fr_1.08fr] ">
          {/* Left content */}
          <div className="relative z-10 space-y-7">
            {/* Badge */}
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-white shadow-lg shadow-black/10 backdrop-blur-sm fadeInUp">
              <ShieldCheck className="h-4 w-4 text-accent" />
              <span className="text-xs font-semibold tracking-[0.18em]">OFFICIAL LOGISTICS PARTNER</span>
            </div>

            {/* Main headline */}
            <h1 className="max-w-3xl text-5xl font-black leading-[0.95] tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl xl:text-8xl fadeInUp" style={{ animationDelay: '0.08s' }}>
              Kiriman cepat,
              <span className="relative ml-2 inline-block">
                <span className="relative z-10 bg-gradient-to-r from-accent via-amber-200 to-accent bg-clip-text text-transparent">
                  bisnis ikut maju.
                </span>
                <span className="absolute inset-x-1 bottom-2 h-4 -rotate-1 rounded-full bg-accent/25 blur-sm" />
              </span>
            </h1>

            {/* Subtitle */}
            {/* <p className="max-w-xl text-lg leading-relaxed text-white/88 fadeInUp" style={{ animationDelay: '0.16s' }}>
              Ekspedisi dari Surabaya untuk rute-rute utama Indonesia dengan armada siap jalan, handling rapi, dan update pengiriman yang tidak bikin menebak-nebak.
            </p> */}

            <div className="grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3 fadeInUp" style={{ animationDelay: '0.24s' }}>
              {deliveryStats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/15 bg-white/[0.08] px-4 py-3 shadow-lg shadow-black/10 backdrop-blur-sm">
                  <p className="text-2xl font-black tracking-tight text-white">{stat.value}</p>
                  <p className="mt-1 text-xs leading-snug text-white/70">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 pt-2 sm:flex-row fadeInUp" style={{ animationDelay: '0.32s' }}>
              <Button
                asChild
                size="lg"
                className="h-12 gap-2 rounded-full bg-accent px-7 font-bold text-accent-foreground shadow-xl shadow-accent/35 hover:-translate-y-0.5 hover:bg-accent/90"
              >
                <a href="/permintaan-pengiriman">
                  <Truck className="w-5 h-5" />
                  Request Pengiriman
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 gap-2 rounded-full border-white/60 bg-white/5 px-7 font-bold text-white backdrop-blur-sm hover:-translate-y-0.5 hover:bg-white/10"
              >
                <a href="#contact-section">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Admin
                </a>
              </Button>
            </div>
          </div>

          {/* Right visual */}
          <div className="relative min-h-[30rem] lg:min-h-[42rem] slideInLeft">
            <div className="absolute left-6 right-6 top-10 h-[72%] rotate-3 rounded-[2.5rem] border border-white/15 bg-white/[0.06] shadow-2xl shadow-black/20 backdrop-blur-sm lg:left-14 lg:right-0" />

            <div className="absolute inset-x-0 top-16 overflow-hidden rounded-[2rem] border border-white/20 bg-white/10 p-3 shadow-2xl shadow-black/25 backdrop-blur-md sm:top-10 sm:rotate-[-3deg] lg:left-4 lg:right-0">
              <div className="relative h-[22rem] overflow-hidden rounded-[1.5rem] sm:h-[28rem] lg:h-[34rem]">
                <Image
                  src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1400&q=80"
                  alt="Armada truk logistik modern"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/90 via-primary/35 to-accent/10" />
                <div className="absolute inset-x-8 bottom-8 h-24 rounded-[100%] bg-accent/20 blur-3xl" />
              </div>

              <div className="absolute -left-1 top-12 rounded-2xl border border-white/20 bg-white/90 p-4 ml-14 text-primary shadow-2xl shadow-black/20 backdrop-blur-md sm:-left-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/20">
                    <MapPin className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/55">Hub utama</p>
                    <p className="text-lg font-black">Surabaya</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-5 left-5 right-5 rounded-3xl border border-white/20 bg-primary/85 p-5 text-white shadow-2xl shadow-black/25 backdrop-blur-md sm:left-auto sm:right-8 sm:w-80 mb-8">
                <div className="flex items-start gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
                    <PackageCheck className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-4">
                      <p className="text-sm font-semibold">On-time delivery</p>
                      <p className="text-lg font-black">99%</p>
                    </div>
                    <div className="mt-3 h-2 rounded-full bg-white/20">
                      <div className="h-2 w-[99%] rounded-full bg-accent" />
                    </div>
                    <p className="mt-3 text-xs leading-relaxed text-white/75">Status pengiriman dipantau agar tim operasional tetap punya kepastian.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-3 left-0 hidden rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white shadow-xl shadow-black/10 backdrop-blur-sm lg:inline-flex">
              <Truck className="mr-2 h-4 w-4 text-accent" />
              Fleet ready for daily routes
            </div>
          </div>
        </div>
      </div>

      {/* Bottom accent line
      <a href="#partnership-section" className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white/90 backdrop-blur-sm md:inline-flex">
        Scroll untuk lihat detail
        <ArrowRight className="h-4 w-4 rotate-90" />
      </a> */}
    </section>
  );
}
