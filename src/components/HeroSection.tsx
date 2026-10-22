'use client';

import { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Star, ShieldCheck, Sparkles, ArrowRight, MessageCircle, ChevronsRight } from 'lucide-react';
import { BUSINESS_INFO } from '@/data/hangar-data';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(useGSAP);
}

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from('.hero-reveal', {
      y: 20,
      opacity: 0,
      duration: 0.8,
      stagger: 0.08,
      ease: 'power3.out',
      clearProps: 'all'
    });
  }, { scope: containerRef });

  const vehicleWaUrl = `https://wa.me/${BUSINESS_INFO.phoneRaw}?text=${encodeURIComponent('Olá! Gostaria de um orçamento personalizado para estética e cuidado do meu veículo na Hangar Auto.')}`;
  const residentialWaUrl = `https://wa.me/${BUSINESS_INFO.phoneRaw}?text=${encodeURIComponent('Olá! Gostaria de um orçamento para higienização e impermeabilização residencial (sofás, estofados ou colchões) na Hangar Home.')}`;

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100dvh] w-full flex items-center pt-28 pb-16 overflow-hidden bg-[#09090B]"
    >
      {/* Background High-Resolution Photography */}
      <div className="absolute inset-0 z-0 w-full h-full overflow-hidden pointer-events-none select-none">
        <Image
          src="/estetica/Gemini_Generated_Image_2cyq0a2cyq0a2cyq.jpg"
          alt="Hangar Auto - Estética Automotiva de Precisão e Luxo"
          fill
          priority
          sizes="100vw"
          className="object-cover object-right md:object-[right_center] brightness-[0.96] contrast-[1.04]"
        />

        {/* Studio Lighting Dark Gradient Overlays - Transparent on the right to expose the car headlights & reflections */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#09090B] via-[#09090B]/85 md:via-[#09090B]/40 to-transparent" />
        
        {/* Mobile vertical gradient so text is readable if image centers */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#09090B] via-transparent to-transparent md:hidden" />

        {/* Bottom seamless blend into next sections */}
        <div className="absolute bottom-0 left-0 right-0 h-36 z-[1] bg-gradient-to-t from-[#09090B] via-[#09090B]/80 to-transparent" />

        {/* Top subtle vignette for navbar */}
        <div className="absolute top-0 left-0 right-0 h-28 z-[1] bg-gradient-to-b from-[#09090B]/90 to-transparent" />
      </div>

      {/* Hero Content Layer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 relative">
        <div className="max-w-xl lg:max-w-2xl">
          {/* Top Editorial Label */}
          <div className="hero-reveal flex items-center gap-2 mb-4 text-[10px] sm:text-xs uppercase tracking-[0.25em] text-zinc-400 font-semibold">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
            <span className="text-zinc-300">ESTÉTICA AUTOMÓVEL DE PRECISÃO</span>
            <span className="text-zinc-600">•</span>
            <span className="text-zinc-400">HERVAL D&apos;OESTE - SC</span>
          </div>

          {/* Subheading Tag */}
          <div className="hero-reveal mb-3">
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-zinc-400">
              PADRÃO EDITORIAL PREMIUM
            </span>
          </div>

          {/* Main H1 Title - Balanced 2 Lines */}
          <h1 className="hero-reveal font-display text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase leading-[1.08] mb-6">
            A PERFEIÇÃO EM <br />
            <span className="relative inline-flex items-center gap-4">
              <span>CADA DETALHE</span>
              <span className="hidden sm:inline-block w-16 lg:w-24 h-1 bg-red-600 rounded-full" />
            </span>
          </h1>

          {/* Subtitle */}
          <p className="hero-reveal text-sm sm:text-base lg:text-lg text-zinc-300 font-normal leading-relaxed mb-8 max-w-lg">
            Serviços especializados de personalização de alto padrão, polimento técnico e higienização profunda residencial. O cuidado que eleva a durabilidade e a sofisticação do seu património.
          </p>

          {/* 3 Technical Pills with Red Chevrons (Inspired by reference mockup) */}
          <div className="hero-reveal grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-10 max-w-xl">
            <div className="flex items-center gap-2.5 p-2.5 sm:p-3 rounded-xl bg-zinc-950/80 border border-white/10 backdrop-blur-md">
              <ChevronsRight className="w-4 h-4 text-red-500 shrink-0" />
              <div className="text-[11px] leading-tight">
                <strong className="block text-white font-bold uppercase tracking-wider">Polimento</strong>
                <span className="text-zinc-400">Correção &amp; Verniz</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5 p-2.5 sm:p-3 rounded-xl bg-zinc-950/80 border border-white/10 backdrop-blur-md">
              <ChevronsRight className="w-4 h-4 text-red-500 shrink-0" />
              <div className="text-[11px] leading-tight">
                <strong className="block text-white font-bold uppercase tracking-wider">Vitrificação</strong>
                <span className="text-zinc-400">Blindagem 9H Cerâmica</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5 p-2.5 sm:p-3 rounded-xl bg-zinc-950/80 border border-white/10 backdrop-blur-md">
              <ChevronsRight className="w-4 h-4 text-red-500 shrink-0" />
              <div className="text-[11px] leading-tight">
                <strong className="block text-white font-bold uppercase tracking-wider">Hangar Home</strong>
                <span className="text-zinc-400">Higienização Têxtil</span>
              </div>
            </div>
          </div>

          {/* Double Action Conversion Buttons */}
          <div className="hero-reveal flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10">
            {/* Primary CTA - Veículo */}
            <a
              href={vehicleWaUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-cta-veiculo"
              className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-zinc-100 hover:bg-white text-zinc-950 font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-[0_4px_25px_rgba(255,255,255,0.2)] hover:shadow-[0_4px_35px_rgba(255,255,255,0.35)] hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageCircle className="w-4 h-4 fill-zinc-950 text-zinc-950" />
              <span>Cuidar do Meu Veículo</span>
              <ArrowRight className="w-4 h-4 text-zinc-950 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Secondary CTA - Residencial */}
            <a
              href={residentialWaUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-cta-residencial"
              className="group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 text-zinc-100 font-semibold text-xs uppercase tracking-wider border border-white/15 hover:border-white/30 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5"
            >
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <span>Higienização Residencial</span>
            </a>
          </div>

          {/* Trust Social Proof Bar */}
          <div className="hero-reveal pt-4 border-t border-white/10 flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-zinc-400">
            {/* Google Rating Badge */}
            <div className="flex items-center gap-2">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <span className="font-bold text-zinc-200">5.0 no Google</span>
              <span className="text-zinc-500">•</span>
              <span className="text-zinc-300">Avaliação máxima em detalhe e acabamento</span>
            </div>

            <div className="hidden sm:flex items-center gap-4 text-zinc-400">
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-zinc-300" />
                Garantia Técnica Homologada
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
