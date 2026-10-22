import Image from 'next/image';
import { Camera, Sparkles, CheckCircle2 } from 'lucide-react';

export default function ShowcaseGallery() {
  const galleryItems = [
    {
      title: "Correção Óptica de Pintura",
      category: "Polimento Técnico",
      image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=800&q=85",
      badge: "Reflexo 100% Puro"
    },
    {
      title: "Repelência Cerâmica 9H",
      category: "Vitrificação",
      image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=800&q=85",
      badge: "Efeito Lótus"
    },
    {
      title: "Assepsia e Cockpit de Luxo",
      category: "Detalhamento Interior",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=85",
      badge: "Toque Acetinado"
    },
    {
      title: "Restauração de Sofás e Tecidos",
      category: "Hangar Home",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=85",
      badge: "Secagem Rápida"
    }
  ];

  return (
    <section className="py-20 bg-[#070709] border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-white/10 text-xs font-semibold uppercase tracking-widest text-zinc-300 mb-3">
              <Camera className="w-3.5 h-3.5 text-[#D4AF37]" />
              Galeria Visual de Resultados
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              O Padrão Estético em Execução Real
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md">
            Cada veículo e cada ambiente residencial tratado como obra de arte. Transparência visual do início ao acabamento.
          </p>
        </div>

        {/* 4 Photo Columns Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item, idx) => (
            <div
              key={idx}
              className="group relative h-80 rounded-2xl overflow-hidden border border-white/10 bg-zinc-900 shadow-xl"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover object-center group-hover:scale-110 transition-transform duration-700 brightness-[0.88] contrast-[1.05]"
              />

              {/* Gradient dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

              {/* Content overlay */}
              <div className="absolute inset-0 p-5 flex flex-col justify-between z-10">
                <div className="flex justify-start">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-amber-400/30">
                    {item.badge}
                  </span>
                </div>

                <div>
                  <span className="text-[11px] font-semibold text-zinc-400 uppercase tracking-widest block mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-display text-lg font-bold text-white leading-snug">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
