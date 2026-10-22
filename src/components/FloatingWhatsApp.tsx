'use client';

import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { BUSINESS_INFO } from '@/data/hangar-data';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show gentle tooltip after 3 seconds
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <aside
      aria-label="Atendimento Rápido via WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3"
    >
      {/* Gentle floating speech bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-[#121215] border border-white/15 text-zinc-200 px-4 py-2.5 rounded-2xl shadow-2xl backdrop-blur-md animate-in fade-in slide-in-from-right-2 duration-300">
          <span className="text-xs font-medium">
            Precisa de um orçamento rápido? Fale connosco!
          </span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-zinc-400 hover:text-white p-0.5"
            aria-label="Fechar mensagem"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Main Floating Button */}
      <a
        href={BUSINESS_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        id="floating-whatsapp-btn"
        className="group relative flex items-center justify-center w-14 h-14 sm:w-auto sm:px-5 sm:h-12 bg-emerald-500 hover:bg-emerald-400 text-white rounded-full shadow-[0_8px_30px_rgba(16,185,129,0.35)] transition-all duration-300 hover:scale-105 active:scale-95"
        aria-label="Conversar no WhatsApp"
      >
        {/* Pulsing indicator dot */}
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-300 border-2 border-[#09090B]" />
        </span>

        <MessageCircle className="w-6 h-6 sm:mr-2.5 fill-white text-emerald-500 stroke-[2]" />
        
        <span className="hidden sm:inline font-bold text-xs uppercase tracking-wider text-white">
          WhatsApp
        </span>
      </a>
    </aside>
  );
}
