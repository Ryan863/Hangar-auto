'use client';

import { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Star, ShieldCheck, Sparkles, ArrowRight, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '@/data/hangar-data';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(useGSAP);
}

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from('.hero-reveal', {
      y: 30,
      opacity: 0,
      duration: 0.85,
      stagger: 0.12,
      ease: 'power3.out',
      clearProps: 'all'
    });
  }, { scope: containerRef });

  const vehicleWaUrl = `https://wa.me/${BUSINESS_INFO.phoneRaw}?text=${encodeURIComponent('Olá! Gostaria de um orçamento personalizado para estética e cuidado do meu veículo na Hangar Auto.')}`;
  const residentialWaUrl = `https://wa.me/${BUSINESS_INFO.phoneRaw}?text=${encodeURIComponent('Olá! Gostaria de um orçamento para higienização e impermeabilização residencial (sofás, estofados ou colchões) na Hangar Home.')}`;

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100dvh] w-full flex items-center pt-24 pb-16 overflow-hidden bg-[#09090B]"
    >
      {/* Background High-Resolution Photography */}
      <div className="absolute inset-0 -z-10 w-full h-full overflow-hidden">
        <Image
          src="/estetica/Gemini_Generated_Image_2cyq0a2cyq0a2cyq.jpg"
          alt="Hangar Auto - Estética Automotiva de Precisão e Luxo"
          fill
          priority
          sizes="100vw"
          quality={95}
          className="object-cover object-right md:object-center brightness-[0.92] contrast-[1.05]"
        />

        {/* Studio Lighting Gradients for Maximum Readability */}
        {/* Horizontal Dark Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent" />
        
        {/* Mobile Extra Contrast Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-zinc-950/60 to-zinc-950/40 md:hidden" />

        {/* Bottom Soft Fade to site background #09090B */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#09090B] via-[#09090B]/80 to-transparent" />

        {/* Top Soft Vignette for navigation */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#09090B]/90 to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Top Editorial Label */}
          <div className="hero-reveal inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/80 border border-white/10 backdrop-blur-md mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[11px] sm:text-xs font-semibold tracking-wider text-zinc-300 uppercase">
              ESTÉTICA AUTOMÓVEL &amp; HIGIENIZAÇÃO PREMIUM • HERVAL D&apos;OESTE - SC
            </span>
          </div>

          {/* H1 Main Heading */}
          <h1 className="hero-reveal font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-6">
            A perfeição em cada detalhe.{' '}
            <span className="metallic-gradient-text block mt-1">
              Para o seu veículo e a sua casa.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="hero-reveal text-base sm:text-lg lg:text-xl text-zinc-300 font-normal leading-relaxed mb-8 max-w-2xl">
            Serviços especializados de personalização de alto padrão, polimento técnico e higienização profunda residencial. O cuidado que eleva a durabilidade e a sofisticação do seu património.
          </p>

          {/* Double Action Conversion Buttons */}
          <div className="hero-reveal flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
            {/* Primary CTA - Veículo */}
            <a
              href={vehicleWaUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-cta-veiculo"
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-zinc-100 hover:bg-white text-zinc-950 font-bold text-sm tracking-wide transition-all duration-300 shadow-[0_4px_25px_rgba(255,255,255,0.2)] hover:shadow-[0_4px_35px_rgba(255,255,255,0.35)] hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageCircle className="w-5 h-5 fill-zinc-950 text-zinc-950" />
              <span>Cuidar do Meu Veículo</span>
              <ArrowRight className="w-4 h-4 text-zinc-950 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Secondary CTA - Residencial */}
            <a
              href={residentialWaUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-cta-residencial"
              className="group inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 text-zinc-100 font-semibold text-sm tracking-wide border border-white/15 hover:border-white/30 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5"
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

            {/* Location & Guarantee Pills */}
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
