import { Card } from '@/components/ui/card';
import { Star } from 'lucide-react';

export function TestimonialsSection() {
  const testimonials = [
    {
      name: 'PT Maspion Indonesia',
      role: 'Kepala Divisi Logistik',
      content: 'Kerjasama dengan CV Lancar Wijaya Sentosa sangat memuaskan. Mereka selalu tepat waktu dan profesional dalam menangani pengiriman produk kami.',
      rating: 5
    },
    {
      name: 'Budi Santoso',
      role: 'Manager Operasional',
      content: 'Layanan pengiriman cepat dan responsif. Tracking real-time membuat kami selalu tahu posisi produk. Sangat direkomendasikan!',
      rating: 5
    },
    {
      name: 'Siti Nurhaliza',
      role: 'Corporate Buyer',
      content: 'Pengalaman bertahun-tahun mereka terlihat dari profesionalisme dan ketenangan dalam menangani pengiriman cargo kami yang bernilai tinggi.',
      rating: 5
    },
    {
      name: 'Hendro Wijaya',
      role: 'Direktur Distribusi',
      content: 'Kami mempercayakan pengiriman ribuan unit per bulan kepada mereka. Konsistensi mereka tidak pernah mengecewakan.',
      rating: 5
    }
  ];

  return (
    <section id="testimonials-section" className="section-shell">
      <div className="section-inner">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="section-kicker">KEPUASAN KLIEN</span>
          <h2 className="section-title">
            Testimoni dari Mitra Bisnis
          </h2>
          <p className="section-subtitle">
            Kepercayaan klien adalah aset terbesar kami dalam memberikan layanan terbaik.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, idx) => (
            <Card 
              key={idx}
              className="modern-card flex flex-col p-8 fadeInUp"
              style={{animationDelay: `${idx * 0.1}s`}}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground mb-6 flex-1 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="border-t border-border/70 pt-6">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Trust metrics */}
        <div className="grid grid-cols-2 gap-8 border-t border-border/70 pt-16 md:grid-cols-4">
          {[
            { number: '500+', label: 'Klien Puas' },
            { number: '99.8%', label: 'Tingkat Sukses' },
            { number: '10K+', label: 'Pengiriman/Tahun' },
            { number: '24/7', label: 'Customer Support' }
          ].map((metric, idx) => (
            <div key={idx} className="text-center fadeInUp" style={{animationDelay: `${1.0 + idx * 0.1}s`}}>
              <p className="text-3xl sm:text-4xl font-bold text-accent mb-2">{metric.number}</p>
              <p className="text-sm sm:text-base text-muted-foreground">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
