'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { MessageCircle, Menu, X, Phone, Shield } from 'lucide-react';
import { BUSINESS_INFO } from '@/data/hangar-data';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Automóvel", href: "#automovel" },
    { name: "Residencial", href: "#residencial" },
    { name: "Diferenciais", href: "#diferenciais" },
    { name: "Avaliações", href: "#avaliacoes" },
    { name: "Dúvidas", href: "#faq" },
    { name: "Localização", href: "#localizacao" },
  ];

  return (
    <header
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#09090B]/85 backdrop-blur-md border-b border-white/10 shadow-2xl py-3.5'
          : 'bg-transparent border-b border-white/5 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-white/15 flex items-center justify-center group-hover:border-white/40 transition-colors">
              <span className="font-display font-black text-base text-zinc-100">H</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display tracking-[0.2em] font-bold text-sm sm:text-base text-zinc-100 uppercase group-hover:text-white transition-colors">
                HANGAR AUTO
              </span>
              <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-medium">
                ESTÉTICA & HOME
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs uppercase tracking-widest text-zinc-300 hover:text-white transition-colors font-medium relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-zinc-200 hover:after:w-full after:transition-all after:duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA & Phone Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="hidden xl:flex items-center gap-2 text-xs text-zinc-300 hover:text-white px-3 py-2 rounded-full border border-white/10 hover:border-white/20 transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-zinc-400" />
              <span>{BUSINESS_INFO.phoneDisplay}</span>
            </a>
            
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-100 hover:bg-white text-zinc-950 text-xs font-semibold uppercase tracking-wider transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.25)] hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4 fill-zinc-950 text-zinc-950" />
              <span>Agendar Horário</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-zinc-300 hover:text-white hover:bg-zinc-800/60 focus:outline-none"
            aria-label="Abrir menu de navegação"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#09090B]/95 backdrop-blur-xl border-b border-white/10 px-6 pt-4 pb-8 space-y-4 animate-in fade-in slide-in-from-top-3 duration-200">
          <div className="flex flex-col space-y-3 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium tracking-wide text-zinc-200 hover:text-white py-2 border-b border-zinc-800/60"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-4 flex flex-col gap-3">
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-zinc-100 hover:bg-white text-zinc-950 text-xs font-bold uppercase tracking-wider shadow-lg"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Agendar no WhatsApp</span>
            </a>
            <div className="flex items-center justify-between text-xs text-zinc-400 px-2 pt-2">
              <span>Herval d&apos;Oeste - SC</span>
              <span>{BUSINESS_INFO.phoneDisplay}</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
