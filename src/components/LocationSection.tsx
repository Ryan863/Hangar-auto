'use client';

import { useMemo } from 'react';
import { 
  MapPin, 
  Navigation, 
  Clock, 
  Phone, 
  CheckCircle2, 
  Calendar,
  ExternalLink,
  MessageCircle
} from 'lucide-react';
import { BUSINESS_INFO } from '@/data/hangar-data';

export default function LocationSection() {
  // Check if open right now
  const isOpenNow = useMemo(() => {
    try {
      const now = new Date();
      const day = now.getDay(); // 0 is Sunday, 1-5 is Mon-Fri, 6 is Saturday
      const hour = now.getHours() + now.getMinutes() / 60;

      if (day >= 1 && day <= 5) {
        // Seg a Sex: 08:00 - 18:30 (18.5)
        return hour >= 8 && hour < 18.5;
      } else if (day === 6) {
        // Sab: 08:00 - 12:00
        return hour >= 8 && hour < 12;
      }
      return false; // Domingo encerrado
    } catch {
      return false;
    }
  }, []);

  return (
    <section
      id="localizacao"
      className="py-24 bg-[#09090B] relative border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-white/10 text-xs font-semibold uppercase tracking-widest text-zinc-300 mb-4">
            <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
            Localização &amp; Horários de Atendimento
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Venha Conhecer Nosso Estúdio
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400">
            Ambiente climatizado e de alta segurança técnica para o seu veículo em Herval d&apos;Oeste, a minutos do centro de Joaçaba.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Address & Actions Card (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-[#121215] border border-white/10 shadow-2xl">
            <div>
              {/* Status Header */}
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <span
                    className={`w-3 h-3 rounded-full ${
                      isOpenNow ? 'bg-emerald-400 animate-pulse' : 'bg-zinc-500'
                    }`}
                  />
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-zinc-200">
                    {isOpenNow ? 'Aberto Agora • Atendimento Disponível' : 'Fechado no Momento • Agendamentos Online 24h'}
                  </span>
                </div>

                <span className="text-xs text-zinc-400 hidden sm:inline">
                  Herval d&apos;Oeste - SC
                </span>
              </div>

              {/* Address details */}
              <div className="my-8 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-white">
                      Hangar Auto — Sede Principal
                    </h3>
                    <p className="text-zinc-300 text-sm sm:text-base mt-1 leading-relaxed">
                      {BUSINESS_INFO.address.fullFormatted}
                    </p>
                    <p className="text-xs text-zinc-400 mt-1">
                      Fácil acesso, rua asfaltada com área privativa para manobra e guarda de veículos.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                  <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <span className="text-xs text-zinc-400 block uppercase tracking-wider">Telefone e WhatsApp</span>
                    <a
                      href={`tel:${BUSINESS_INFO.phoneRaw}`}
                      className="text-base sm:text-lg font-bold text-white hover:text-emerald-400 transition-colors"
                    >
                      {BUSINESS_INFO.phoneDisplay}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Map / GPS Triggers */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={BUSINESS_INFO.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-zinc-100 hover:bg-white text-zinc-950 font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-lg hover:scale-[1.02] active:scale-[0.98]"
              >
                <Navigation className="w-4 h-4 fill-zinc-950 text-zinc-950" />
                <span>Traçar Rota no Google Maps</span>
              </a>

              <a
                href={`https://waze.com/ul?q=${encodeURIComponent(BUSINESS_INFO.address.fullFormatted)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 font-semibold text-xs uppercase tracking-wider border border-white/15 transition-all"
              >
                <ExternalLink className="w-4 h-4 text-zinc-400" />
                <span>Abrir no Waze</span>
              </a>
            </div>
          </div>

          {/* Opening Hours Schedule Card (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-[#121215] border border-white/10 shadow-2xl">
            <div>
              <div className="flex items-center gap-3 pb-6 border-b border-white/10">
                <Clock className="w-5 h-5 text-[#D4AF37]" />
                <h3 className="font-display text-lg font-bold text-white tracking-tight">
                  Horário de Atendimento
                </h3>
              </div>

              {/* Schedule Table */}
              <div className="divide-y divide-white/5 my-6">
                <div className="py-4 flex items-center justify-between text-sm">
                  <span className="font-medium text-zinc-300">Segunda a Sexta</span>
                  <span className="font-bold text-white px-3 py-1 rounded-full bg-zinc-900 border border-white/5">
                    {BUSINESS_INFO.hours.weekdays}
                  </span>
                </div>

                <div className="py-4 flex items-center justify-between text-sm">
                  <span className="font-medium text-zinc-300">Sábado</span>
                  <span className="font-bold text-amber-300 px-3 py-1 rounded-full bg-zinc-900 border border-white/5">
                    {BUSINESS_INFO.hours.saturday}
                  </span>
                </div>

                <div className="py-4 flex items-center justify-between text-sm">
                  <span className="font-medium text-zinc-400">Domingo</span>
                  <span className="font-medium text-zinc-500 px-3 py-1 rounded-full bg-zinc-900/50">
                    {BUSINESS_INFO.hours.sunday}
                  </span>
                </div>
              </div>

              {/* Note on Appointments */}
              <div className="p-4 rounded-2xl bg-zinc-900/70 border border-white/5 text-xs text-zinc-400 leading-relaxed">
                <p className="flex items-center gap-2 font-semibold text-zinc-300 mb-1">
                  <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                  Atendimento com Agendamento Prévio
                </p>
                Para assegurar a máxima dedicação e zero espera, os veículos e residências são atendidos com horário reservado com antecedência.
              </div>
            </div>

            {/* Quick Contact CTA */}
            <div className="pt-6 border-t border-white/10">
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-xs uppercase tracking-wider border border-white/10 hover:border-white/30 transition-all"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Reservar Data no WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
