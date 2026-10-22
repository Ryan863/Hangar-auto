'use client';

import { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { FAQS, BUSINESS_INFO } from '@/data/hangar-data';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-24 bg-[#09090B] relative border-t border-white/5"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-white/10 text-xs font-semibold uppercase tracking-widest text-zinc-300 mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-[#D4AF37]" />
            Perguntas Frequentes &amp; Transparência
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Esclareça as Suas Dúvidas Técnicas
          </h2>
          <p className="mt-4 text-base text-zinc-400">
            Respostas detalhadas sobre prazos de execução, higienização ao domicílio, tempos de cura e cobertura regional.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-[#121215] border-white/20 shadow-xl'
                    : 'bg-[#121215]/50 border-white/5 hover:border-white/15'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 px-2.5 py-1 rounded-full bg-zinc-800/80 border border-white/5 shrink-0 hidden sm:inline-block">
                      {faq.category}
                    </span>
                    <h3 className="font-display text-base sm:text-lg font-bold text-white tracking-tight">
                      {faq.question}
                    </h3>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-zinc-800 border-white/30 text-white' : 'text-zinc-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 sm:px-6 sm:pb-6 pt-1 text-sm text-zinc-300 leading-relaxed border-t border-white/5">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* FAQ Support Box */}
        <div className="mt-12 text-center p-8 rounded-2xl bg-zinc-950/60 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h4 className="font-bold text-white text-base">Tem alguma dúvida específica sobre o seu caso?</h4>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1">
              Envie fotos ou descreva o modelo do carro / estofado para uma resposta imediata.
            </p>
          </div>

          <a
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-zinc-100 hover:bg-white text-zinc-950 font-bold text-xs uppercase tracking-wider shrink-0 transition-all shadow-md"
          >
            <MessageCircle className="w-4 h-4 fill-zinc-950 text-zinc-950" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
