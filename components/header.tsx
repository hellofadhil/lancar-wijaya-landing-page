'use client';

import { Button } from '@/components/ui/button';
import { Truck, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Tentang', href: '#partnership-section' },
    { label: 'Keunggulan', href: '#value-section' },
    { label: 'Rute', href: '#routes-section' },
    { label: 'Armada', href: '#fleet-section' },
    { label: 'Testimoni', href: '#testimonials-section' },
    { label: 'Kontak', href: '#contact-section' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
              <Truck className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-lg text-foreground hidden sm:inline">CV Lancar Wijaya</span>
          </div>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a 
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex gap-3">
            <Button 
              variant="outline" 
              size="sm"
              className="border-primary/40 text-primary hover:bg-primary/10"
            >
              Informasi
            </Button>
            <Button 
              asChild
              size="sm"
              className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-md shadow-accent/30"
            >
              <a href="/permintaan-pengiriman">Request Pengiriman</a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
            className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-lg p-2 hover:bg-muted transition-colors"
          >
            {isOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile nav */}
        {isOpen && (
          <nav className="lg:hidden pb-4 space-y-2 border-t border-border/60 pt-3">
            {navItems.map((item) => (
              <a 
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="px-4 pt-2 space-y-2">
              <Button 
                variant="outline" 
                size="sm"
                className="w-full border-primary/40 text-primary hover:bg-primary/10"
              >
                Informasi
              </Button>
              <Button 
                asChild
                size="sm"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                <a href="/permintaan-pengiriman">Request Pengiriman</a>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
