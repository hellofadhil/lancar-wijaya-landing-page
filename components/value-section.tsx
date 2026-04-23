import { Card } from '@/components/ui/card';
import { Shield, Globe, Zap, Clock } from 'lucide-react';

export function ValueSection() {
  const values = [
    {
      icon: Shield,
      title: 'Keamanan Pengiriman Terjamin',
      description: 'Barang ditangani dengan SOP jelas dan perlindungan asuransi di setiap proses pengiriman.'
    },
    {
      icon: Globe,
      title: 'Kemitraan Strategis Berskala Nasional',
      description: 'Rute utama antar kota sudah teruji, jadi pengiriman lebih konsisten dan tidak banyak trial-error.'
    },
    {
      icon: Zap,
      title: 'Armada Lengkap dan Terawat',
      description: 'Pilihan armada lengkap dari Engkel Fuso sampai Gandengan, disesuaikan dengan volume muatan.'
    },
    {
      icon: Clock,
      title: 'Layanan Cepat dan Tepat Waktu',
      description: 'Tracking aktif dan update status rutin supaya tim Anda tidak perlu menebak posisi barang.'
    }
  ];

  return (
    <section id="value-section" className="section-shell">
      <div className="section-inner">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="section-kicker">MENGAPA MEMILIH KAMI</span>
          <h2 className="section-title">
            Nilai Kerja yang Terasa di Lapangan
          </h2>
          <p className="section-subtitle">
            Fokus kami simpel: barang aman, ritme pengiriman stabil, dan komunikasi jelas dari awal sampai selesai.
          </p>
        </div>

        {/* Values grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, idx) => {
            const Icon = value.icon;
            return (
              <Card 
                key={idx}
                className="modern-card group transform p-8 fadeInUp"
                style={{animationDelay: `${idx * 0.15}s`}}
              >
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/20 transition-colors group-hover:bg-accent/30">
                      <Icon className="w-7 h-7 text-accent" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Bottom accent */}
        <div className="mt-16 border-t border-border/70 pt-12 text-center">
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Lebih dari 15 tahun menangani distribusi membuat kami tahu bagian mana yang harus cepat, dan mana yang harus presisi.
          </p>
        </div>
      </div>
    </section>
  );
}
