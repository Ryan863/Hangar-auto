'use client';

import { Star, CheckCircle, Quote, Shield, MessageCircle } from 'lucide-react';
import { TESTIMONIALS, BUSINESS_INFO } from '@/data/hangar-data';

export default function SocialProofSection() {
  const mainReview = TESTIMONIALS[0]; // Vital Fedrigo
  const otherReviews = TESTIMONIALS.slice(1);

  return (
    <section
      id="avaliacoes"
      className="py-24 bg-[#09090B] relative border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Google Verified Banner */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900 border border-white/10 text-xs font-semibold text-zinc-200 mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Classificação 5,0 no Google Avaliações</span>
            <span className="text-zinc-500">•</span>
            <span className="text-amber-400 font-bold">100% Satisfação</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            A Opinião de Quem Confia o Seu Património
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400">
            A máxima pontuação atribuída por proprietários criteriosos de Herval d&apos;Oeste, Joaçaba e região.
          </p>
        </div>

        {/* Featured Testimonial - Vital Fedrigo */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#121215] via-zinc-950 to-[#121215] border border-[#D4AF37]/40 shadow-[0_0_50px_rgba(212,175,55,0.08)]">
            <Quote className="absolute top-6 right-6 sm:top-10 sm:right-10 w-12 h-12 text-[#D4AF37]/20 pointer-events-none" />

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-zinc-800 to-zinc-700 border border-white/20 flex items-center justify-center text-lg font-bold text-white shadow-inner">
                  {mainReview.avatarText}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-display text-lg sm:text-xl font-bold text-white">
                      {mainReview.author}
                    </h3>
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                      <CheckCircle className="w-3 h-3" />
                      Avaliação Verificada
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    {mainReview.city} • {mainReview.vehicleOrService}
                  </p>
                </div>
              </div>

              {/* 5 Stars */}
              <div className="flex items-center gap-1 text-amber-400 bg-zinc-900/80 px-3.5 py-1.5 rounded-full border border-white/10 w-fit">
                {[...Array(mainReview.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
                <span className="ml-1 text-xs font-bold text-white">5.0</span>
              </div>
            </div>

            {/* Testimonial Quote */}
            <blockquote className="text-xl sm:text-2xl text-zinc-100 font-medium leading-relaxed italic">
              &ldquo;{mainReview.text}&rdquo;
            </blockquote>

            <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-zinc-400">
              <span className="flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-[#D4AF37]" />
                Registado publicamente no Google Meu Negócio
              </span>
              <span className="text-zinc-500">Herval d&apos;Oeste - SC</span>
            </div>
          </div>
        </div>

        {/* Other Verified Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {otherReviews.map((rev, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-[#121215] border border-white/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center text-xs font-bold text-zinc-200">
                      {rev.avatarText}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-white">{rev.author}</h4>
                      <p className="text-[11px] text-zinc-400">{rev.city}</p>
                    </div>
                  </div>
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                </div>

                <p className="text-sm text-zinc-300 leading-relaxed italic">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 text-[11px] text-zinc-500 font-medium">
                {rev.vehicleOrService}
              </div>
            </div>
          ))}
        </div>

        {/* CTA below reviews */}
        <div className="text-center mt-12">
          <a
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-zinc-900 hover:bg-zinc-100 text-zinc-200 hover:text-zinc-950 font-bold text-xs uppercase tracking-wider border border-white/10 hover:border-transparent transition-all shadow-md"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>Experimente o Padrão 5 Estrelas no Seu Veículo</span>
          </a>
        </div>
      </div>
    </section>
  );
}
