'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { 
  Gauge, 
  ShieldCheck, 
  SunMedium, 
  Wind, 
  UserCheck, 
  Award,
  CheckCircle,
  Sparkles
} from 'lucide-react';
import { TECHNICAL_DIFFERENTIALS } from '@/data/hangar-data';

export default function DifferentialsSection() {
  const containerRef = useRef<HTMLElement>(null);

  const iconMap: Record<string, React.ReactNode> = {
    Gauge: <Gauge className="w-6 h-6 text-[#D4AF37]" />,
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-[#D4AF37]" />,
    SunMedium: <SunMedium className="w-6 h-6 text-[#D4AF37]" />,
    Wind: <Wind className="w-6 h-6 text-[#D4AF37]" />,
    UserCheck: <UserCheck className="w-6 h-6 text-[#D4AF37]" />,
    Award: <Award className="w-6 h-6 text-[#D4AF37]" />
  };

  return (
    <section
      id="diferenciais"
      ref={containerRef}
      className="py-24 bg-[#09090B] relative border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-white/10 text-xs font-semibold uppercase tracking-widest text-zinc-300 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            Rigores Técnicos &amp; Diferenciais
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Engenharia do Detalhe em Cada Etapa
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400">
            A diferença entre uma limpeza comum e o padrão Hangar Auto está no método científico, nos equipamentos calibrados e na obsessão pelo acabamento impecável.
          </p>
        </div>

        {/* Differentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TECHNICAL_DIFFERENTIALS.map((diff, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-[#121215] border border-white/10 hover:border-white/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col justify-between"
            >
              <div>
                {/* Icon & Tag */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center group-hover:border-[#D4AF37]/50 transition-colors">
                    {iconMap[diff.iconName] || <CheckCircle className="w-6 h-6 text-[#D4AF37]" />}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 bg-zinc-900/60 px-3 py-1 rounded-full border border-white/5">
                    {diff.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-zinc-100 transition-colors">
                  {diff.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {diff.description}
                </p>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-zinc-500 group-hover:text-zinc-300 transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                <span>Padrão de Precisão Certificado</span>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Callout Strip */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 sm:p-8 rounded-2xl bg-zinc-950/70 border border-white/10 backdrop-blur-md">
          <div className="text-center md:border-r border-white/5 p-2">
            <span className="font-display text-2xl sm:text-3xl font-extrabold text-white">100%</span>
            <p className="text-xs text-zinc-400 mt-1 uppercase tracking-wider">Produtos Homologados</p>
          </div>
          <div className="text-center md:border-r border-white/5 p-2">
            <span className="font-display text-2xl sm:text-3xl font-extrabold text-[#D4AF37]">9H</span>
            <p className="text-xs text-zinc-400 mt-1 uppercase tracking-wider">Dureza Cerâmica</p>
          </div>
          <div className="text-center md:border-r border-white/5 p-2">
            <span className="font-display text-2xl sm:text-3xl font-extrabold text-white">99.9%</span>
            <p className="text-xs text-zinc-400 mt-1 uppercase tracking-wider">Eliminação de Ácaros</p>
          </div>
          <div className="text-center p-2">
            <span className="font-display text-2xl sm:text-3xl font-extrabold text-[#D4AF37]">5.0 ★</span>
            <p className="text-xs text-zinc-400 mt-1 uppercase tracking-wider">Avaliação Máxima Google</p>
          </div>
        </div>
      </div>
    </section>
  );
}
