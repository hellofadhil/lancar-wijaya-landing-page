import { Truck, Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-primary text-white">
      <div className="pointer-events-none absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.4), transparent 35%), radial-gradient(circle at 80% 10%, rgba(255,255,255,0.3), transparent 30%)' }} />
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent shadow-lg shadow-accent/40">
                <Truck className="w-6 h-6 text-primary" />
              </div>
              <span className="font-bold text-lg">CV Lancar Wijaya</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Mitra logistik terpercaya untuk pengiriman nasional dengan standar kualitas tinggi dan layanan profesional.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Navigasi</h3>
            <ul className="space-y-2">
              {['Beranda', 'Tentang Kami', 'Rute Pengiriman', 'Armada', 'Kontak'].map((link) => (
                <li key={link}>
                  <a href={link === 'Beranda' ? '/' : link === 'Tentang Kami' ? '/#partnership-section' : link === 'Rute Pengiriman' ? '/#routes-section' : link === 'Armada' ? '/#fleet-section' : '/#contact-section'} className="text-white/70 hover:text-white transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Layanan</h3>
            <ul className="space-y-2">
              {['Pengiriman Reguler', 'Cargo Khusus', 'Pengiriman Malam', 'Asuransi Penuh'].map((service) => (
                <li key={service}>
                  <a href="/permintaan-pengiriman" className="text-white/70 hover:text-white transition-colors text-sm">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Hubungi Kami</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-white/70">+62-31-8000-7000</p>
                  <p className="text-sm text-white/70">+62-31-8000-7001</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-sm text-white/70">info@lancarwijaya.com</p>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-sm text-white/70">Surabaya, Jawa Timur</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/15"></div>

        {/* Bottom footer */}
        <div className="flex flex-col md:flex-row items-center justify-between py-8 gap-4">
          <p className="text-white/60 text-sm">
            &copy; 2026 CV Lancar Wijaya Sentosa. All rights reserved.
          </p>
          
          {/* Social links */}
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Facebook" className="inline-flex h-11 w-11 items-center justify-center rounded-full text-white/60 hover:text-white hover:bg-white/10 transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Instagram" className="inline-flex h-11 w-11 items-center justify-center rounded-full text-white/60 hover:text-white hover:bg-white/10 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" aria-label="LinkedIn" className="inline-flex h-11 w-11 items-center justify-center rounded-full text-white/60 hover:text-white hover:bg-white/10 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
