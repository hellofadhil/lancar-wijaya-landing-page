import type { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Send } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Form Permintaan Pengiriman',
  description:
    'Ajukan permintaan pengiriman barang dengan CV Lancar Wijaya Sentosa untuk estimasi biaya, jadwal, dan kebutuhan cargo khusus.',
  alternates: {
    canonical: '/permintaan-pengiriman',
  },
  openGraph: {
    title: 'Form Permintaan Pengiriman | CV Lancar Wijaya Sentosa',
    description:
      'Ajukan permintaan pengiriman barang untuk estimasi biaya, jadwal, dan kebutuhan cargo khusus.',
    url: '/permintaan-pengiriman',
  },
};

export default function RequestPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="section-shell pt-28">
        <div className="section-inner">
          <div className="mx-auto w-full max-w-3xl">
            <a href="/#contact-section" className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              <ArrowLeft className="h-4 w-4" />
              Kembali ke halaman utama
            </a>

            <Card className="modern-card p-8 sm:p-10">
              <span className="section-kicker">PERMINTAAN PENGIRIMAN</span>
              <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Form Permintaan Pengiriman
              </h1>
              <p className="mt-3 text-muted-foreground">
                Isi data berikut, tim kami akan menghubungi Anda dengan estimasi biaya dan jadwal pengiriman.
              </p>

              <div className="mt-8 space-y-5">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-foreground">Nama Lengkap *</label>
                  <Input placeholder="Masukkan nama Anda" className="h-11 bg-muted/50" />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-foreground">Nomor HP/WhatsApp *</label>
                  <Input placeholder="Contoh: 0812-3456-7890" className="h-11 bg-muted/50" />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-foreground">Jenis Rute</label>
                  <Input placeholder="Misal: Surabaya - Jakarta" className="h-11 bg-muted/50" />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-foreground">Detail Pengiriman</label>
                  <textarea
                    placeholder="Jelaskan detail barang, ukuran, berat, dan kebutuhan khusus..."
                    className="w-full rounded-md border border-border bg-muted/50 p-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                    rows={5}
                  />
                </div>

                <Button className="h-11 w-full gap-2 bg-accent font-semibold text-accent-foreground shadow-md shadow-accent/30 hover:bg-accent/90">
                  <Send className="h-4 w-4" />
                  Kirim Permintaan Pengiriman
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
