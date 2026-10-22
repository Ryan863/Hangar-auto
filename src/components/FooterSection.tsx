import Link from 'next/link';
import { MessageCircle, Phone, MapPin, Shield, Star, Heart } from 'lucide-react';
import { BUSINESS_INFO } from '@/data/hangar-data';

export default function FooterSection() {
  return (
    <footer className="bg-[#070709] border-t border-white/10 relative overflow-hidden">
      {/* Pre-footer High Impact Conversion Callout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        <div className="relative rounded-3xl p-8 sm:p-14 bg-gradient-to-b from-[#121215] to-[#0A0A0C] border border-white/15 overflow-hidden text-center">
          {/* Subtle gold radial behind text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#D4AF37]/5 blur-3xl rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-white/10 text-[11px] font-bold uppercase tracking-widest text-zinc-300 mb-5">
              <Star className="w-3.5 h-3.5 text-[#D4AF37] fill-[#D4AF37]" />
              Excelência Comprovada em Cada Detalhe
            </span>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Pronto para elevar o nível do seu veículo ou renovar o conforto da sua casa?
            </h2>

            <p className="mt-4 text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto">
              Garanta a preservação e a estética máxima com profissionais dedicados em Herval d&apos;Oeste e Joaçaba. Solicite seu orçamento sem compromisso.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-zinc-100 hover:bg-white text-zinc-950 font-extrabold text-sm uppercase tracking-wider transition-all duration-300 shadow-[0_4px_30px_rgba(255,255,255,0.25)] hover:scale-[1.02] active:scale-[0.98]"
              >
                <MessageCircle className="w-5 h-5 fill-zinc-950 text-zinc-950" />
                <span>Conversar no WhatsApp Agora</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 text-zinc-200 font-semibold text-sm border border-white/10 hover:border-white/20 transition-all"
              >
                <Phone className="w-4 h-4 text-zinc-400" />
                <span>Ligue: {BUSINESS_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Information */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/5">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-white/20 flex items-center justify-center">
                <span className="font-display font-black text-sm text-white">H</span>
              </div>
              <span className="font-display font-bold tracking-[0.2em] text-white text-base">
                HANGAR AUTO
              </span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-md leading-relaxed">
              Estética automóvel de alta precisão e higienização residencial profunda. Cuidado artesanal com rigor técnico e produtos certificados no Meio-Oeste Catarinense.
            </p>
            <div className="flex items-center gap-2 text-xs text-zinc-400 pt-2">
              <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>{BUSINESS_INFO.address.city} - {BUSINESS_INFO.address.state}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-zinc-300">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li>
                <a href="#automovel" className="hover:text-white transition-colors">Estética Automóvel</a>
              </li>
              <li>
                <a href="#residencial" className="hover:text-white transition-colors">Hangar Home (Residencial)</a>
              </li>
              <li>
                <a href="#diferenciais" className="hover:text-white transition-colors">Diferenciais Técnicos</a>
              </li>
              <li>
                <a href="#avaliacoes" className="hover:text-white transition-colors">Avaliações de Clientes</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">Dúvidas Frequentes</a>
              </li>
            </ul>
          </div>

          {/* Business Hours Summary */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-zinc-300">
              Atendimento
            </h4>
            <p className="text-xs text-zinc-400">
              <strong className="text-zinc-300 block">Segunda a Sexta:</strong>
              {BUSINESS_INFO.hours.weekdays}
            </p>
            <p className="text-xs text-zinc-400">
              <strong className="text-zinc-300 block">Sábado:</strong>
              {BUSINESS_INFO.hours.saturday}
            </p>
            <p className="text-xs text-zinc-400">
              <strong className="text-zinc-300 block">Domingo:</strong>
              {BUSINESS_INFO.hours.sunday}
            </p>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <p>© {new Date().getFullYear()} Hangar Auto. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1.5 text-zinc-400">
            <span>Desenvolvido com padrão editorial e alta conversão</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
