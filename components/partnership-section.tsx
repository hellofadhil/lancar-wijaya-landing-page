import { Card } from '@/components/ui/card';
import { Award, CheckCircle2 } from 'lucide-react';

export function PartnershipSection() {
  return (
    <section id="partnership-section" className="section-shell">
      <div className="section-inner">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="section-kicker">STRATEGI KEMITRAAN</span>
          <h2 className="section-title">
            Mitra Distribusi yang Teruji di Lapangan
          </h2>
          <p className="section-subtitle">
            Kami bukan sekadar vendor angkut. Kami jadi perpanjangan operasional untuk ritme distribusi harian.
          </p>
        </div>

        {/* Partnership cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <Card className="modern-card scaleIn p-8" style={{animationDelay: '0s'}}>
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/20">
              <Award className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Official Partner</h3>
            <p className="text-muted-foreground leading-relaxed">
              Dipercaya untuk menangani pengiriman rutin produk Maspion dari titik muat sampai titik terima.
            </p>
          </Card>

          {/* Card 2 */}
          <Card className="modern-card scaleIn p-8" style={{animationDelay: '0.2s'}}>
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/20">
              <CheckCircle2 className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Sertifikasi & Standar</h3>
            <p className="text-muted-foreground leading-relaxed">
              SOP, dokumen, dan proses kerja dijaga rapi supaya layanan tetap konsisten meski volume naik.
            </p>
          </Card>

          {/* Card 3 */}
          <Card className="modern-card scaleIn p-8" style={{animationDelay: '0.4s'}}>
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/20">
              <Award className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Kepercayaan Jangka Panjang</h3>
            <p className="text-muted-foreground leading-relaxed">
              Relasi kerja dibangun bertahun-tahun, bukan lewat janji, tapi lewat ketepatan pengiriman.
            </p>
          </Card>
        </div>

        {/* Stats section */}
        <div className="mt-20 grid grid-cols-2 gap-8 border-t border-border/70 pt-12 md:grid-cols-4">
          {[
            { number: '15+', label: 'Tahun Pengalaman' },
            { number: '500+', label: 'Pengiriman Bulanan' },
            { number: '99%', label: 'On-Time Delivery' },
            { number: '10+', label: 'Rute Operasional' }
          ].map((stat, idx) => (
            <div key={idx} className="text-center fadeInUp" style={{animationDelay: `${0.6 + idx * 0.1}s`}}>
              <p className="text-3xl sm:text-4xl font-bold text-accent mb-2">{stat.number}</p>
              <p className="text-sm sm:text-base text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
