'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { 
  Car, 
  Home, 
  CheckCircle2, 
  Clock, 
  MessageCircle, 
  Sparkles, 
  ShieldCheck, 
  ChevronRight,
  Flame
} from 'lucide-react';
import { AUTOMOTIVE_SERVICES, RESIDENTIAL_SERVICES, BUSINESS_INFO } from '@/data/hangar-data';

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState<'automotive' | 'residential'>('automotive');
  const sectionRef = useRef<HTMLElement>(null);

  const currentServices = activeTab === 'automotive' ? AUTOMOTIVE_SERVICES : RESIDENTIAL_SERVICES;

  return (
    <section
      id="automovel"
      ref={sectionRef}
      className="py-24 bg-[#09090B] relative overflow-hidden"
    >
      {/* Decorative background lighting */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-zinc-800/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-white/10 text-xs font-semibold uppercase tracking-widest text-zinc-300 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            Catálogo Visual de Especialidades
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Especialidades com Padrão de Precisão
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400">
            Trabalhos meticulosos desenvolvidos com tecnologia de ponta, processos químicos homologados e respeito irrestrito a cada superfície.
          </p>

          {/* Module Switcher Tabs */}
          <div className="mt-8 inline-flex p-1.5 rounded-2xl bg-zinc-900/90 border border-white/10 backdrop-blur-md shadow-2xl">
            <button
              onClick={() => setActiveTab('automotive')}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                activeTab === 'automotive'
                  ? 'bg-zinc-100 text-zinc-950 shadow-lg scale-[1.02]'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Car className="w-4 h-4" />
              <span>Vertente Automóvel</span>
            </button>

            <button
              id="residencial-tab-btn"
              onClick={() => setActiveTab('residential')}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                activeTab === 'residential'
                  ? 'bg-zinc-100 text-zinc-950 shadow-lg scale-[1.02]'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Home className="w-4 h-4" />
              <span>Hangar Home (Residencial)</span>
            </button>
          </div>
        </div>

        {/* Anchor for direct page links */}
        <div id="residencial" className="h-0 w-0 -mt-24 pointer-events-none" />

        {/* Services Grid with Visual Photography Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {currentServices.map((service) => {
            const waUrl = `https://wa.me/${BUSINESS_INFO.phoneRaw}?text=${encodeURIComponent(service.whatsappMessage)}`;

            return (
              <div
                key={service.id}
                className={`group relative flex flex-col justify-between rounded-3xl overflow-hidden bg-[#121215] border transition-all duration-300 hover:-translate-y-1.5 ${
                  service.popular
                    ? 'border-[#D4AF37]/40 hover:border-[#D4AF37] shadow-[0_0_30px_rgba(212,175,55,0.12)]'
                    : 'border-white/10 hover:border-white/25 shadow-xl'
                }`}
              >
                {/* Visual Image Header */}
                <div className="relative h-60 w-full overflow-hidden bg-zinc-950">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-[0.9] contrast-[1.05]"
                  />
                  {/* Subtle dark bottom fade */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121215] via-transparent to-black/30" />

                  {/* Badges on Top of Image */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2 z-10">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider backdrop-blur-md ${
                        service.popular
                          ? 'bg-zinc-950/80 text-amber-300 border border-amber-400/40'
                          : 'bg-zinc-950/80 text-zinc-200 border border-white/15'
                      }`}
                    >
                      {service.popular && <Flame className="w-3.5 h-3.5 text-amber-400" />}
                      {service.badge}
                    </span>

                    <div className="flex items-center gap-1.5 text-xs text-zinc-300 font-medium px-3 py-1.5 rounded-full bg-zinc-950/80 border border-white/15 backdrop-blur-md">
                      <Clock className="w-3.5 h-3.5 text-zinc-400" />
                      <span>{service.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Title */}
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight mb-3 group-hover:text-zinc-100 transition-colors">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-2.5 mb-8 pt-4 border-t border-white/5">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                          <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Action Button */}
                  <div className="pt-4 border-t border-white/10">
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-100 text-zinc-200 hover:text-zinc-950 font-bold text-xs uppercase tracking-wider border border-white/10 hover:border-transparent transition-all duration-300 group/btn shadow-md"
                    >
                      <MessageCircle className="w-4 h-4 text-emerald-400 group-hover/btn:text-zinc-950 transition-colors" />
                      <span>Consultar Orçamento Deste Serviço</span>
                      <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Bottom Banner inside services */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-zinc-900/90 via-zinc-900/70 to-zinc-900/90 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-zinc-800 border border-white/10 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-[#D4AF37]" />
            </div>
            <div>
              <h4 className="font-display font-bold text-base sm:text-lg text-white">
                Não encontrou o que procura ou precisa de um pacote personalizado?
              </h4>
              <p className="text-xs sm:text-sm text-zinc-400 mt-0.5">
                Realizamos pacotes completos sob medida (Polimento + Vitrificação + Higienização Residencial).
              </p>
            </div>
          </div>

          <a
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-zinc-100 hover:bg-white text-zinc-950 font-bold text-xs uppercase tracking-wider shrink-0 transition-transform active:scale-95 shadow-md"
          >
            <MessageCircle className="w-4 h-4 fill-zinc-950 text-zinc-950" />
            <span>Falar com o Especialista</span>
          </a>
        </div>
      </div>
    </section>
  );
}
