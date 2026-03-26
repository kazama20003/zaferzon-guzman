import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Plus } from '@phosphor-icons/react/ssr';
import { CONTACT_PATH } from '@/lib/site';

const legalCards = [
  {
    title: 'Problemas / Necesidades',
    image:
      'https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=1200&q=80',
    items: ['Defensa inmediata ante denuncias o citaciones', 'Orientacion clara cuando el caso parece estancado'],
  },
  {
    title: 'Casos comunes',
    image:
      'https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?auto=format&fit=crop&w=1200&q=80',
    items: ['Procesos penales, deudas civiles, contratos y familia', 'Alimentos, tenencia, divorcio e indemnizaciones'],
  },
  {
    title: 'Dolor del cliente',
    image:
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80',
    items: ['Incertidumbre, urgencia y falta de estrategia legal', 'Desgaste emocional y economico por no saber como actuar'],
  },
];

export function Solutions() {
  return (
    <section
      id="what-we-do"
      className="mx-auto max-w-[1580px] px-6 pb-24 pt-10 sm:px-10 lg:px-16 lg:pt-18"
    >
      <div className="max-w-[1080px]">
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.38em] text-[var(--text-soft)]">
          Estudio Juridico
        </p>
        <h2 className="text-[clamp(2.6rem,5vw,5.35rem)] font-semibold leading-[0.95] tracking-[-0.07em] text-foreground">
          Te asesoramos si atraviesas alguno de estos problemas y necesitas una
          respuesta legal clara, firme y oportuna
        </h2>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href={CONTACT_PATH}
            className="inline-flex h-13 items-center gap-3 rounded-full bg-black px-6 text-sm font-semibold tracking-[-0.03em] text-white transition hover:bg-[#1a1a1a] sm:h-14 sm:px-7 sm:text-base"
          >
            Solicitar asesoria
            <ArrowRight size={18} className="text-secondary" />
          </Link>

          <Link
            href="#servicios"
            className="inline-flex h-13 items-center gap-3 rounded-full border border-border bg-white px-6 text-sm font-semibold tracking-[-0.03em] text-foreground transition hover:border-black sm:h-14 sm:px-7 sm:text-base"
          >
            Ver servicios
            <ArrowRight size={18} className="text-secondary" />
          </Link>
        </div>
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {legalCards.map((card) => (
          <article key={card.title} className="group">
            <div className="relative overflow-hidden rounded-[1.6rem] bg-black">
              <div className="relative aspect-[4/5]">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.06)_0%,rgba(0,0,0,0.02)_50%,rgba(0,0,0,0.28)_100%)]" />
              </div>

              <div className="absolute bottom-5 right-5">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-white text-secondary shadow-[0_10px_24px_rgba(0,0,0,0.14)]">
                  <Plus size={20} weight="bold" />
                </span>
              </div>
            </div>

            <div className="px-1 pt-5">
              <h3 className="text-[clamp(1.55rem,2.2vw,2rem)] font-semibold tracking-[-0.05em] text-foreground">
                {card.title}
              </h3>
              <ul className="mt-3 space-y-2 text-sm font-medium leading-6 text-[var(--text-soft)] sm:text-base">
                {card.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
