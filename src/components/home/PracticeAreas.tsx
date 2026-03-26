import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Plus } from '@phosphor-icons/react/ssr';
import { CONTACT_PATH } from '@/lib/site';

const whyChooseUs = [
  'Atencion personalizada y estrategia clara.',
  'Respuesta oportuna en asuntos urgentes.',
];

const currentServices = [
  'Defensa penal',
  'Contratos civiles',
  'Procesos laborales',
  'Pensiones',
];

const practiceAreas = [
  {
    title: 'Derecho Penal',
    description: 'Defensa tecnica, representacion en procesos penales y estrategia procesal.',
    image:
      'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Derecho Civil',
    description: 'Contratos, responsabilidad civil, sucesiones y asesoria patrimonial.',
    image:
      'https://images.unsplash.com/photo-1453945619913-79ec89a82c51?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Derecho Laboral',
    description: 'Asistencia a trabajadores y empleadores en conflictos laborales y despidos.',
    image:
      'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Derecho Previsional',
    description: 'Revision y gestion de pensiones, jubilacion y derechos previsionales.',
    image:
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Derecho Registral',
    description: 'Soluciones en saneamiento de bienes, inscripciones y titulos.',
    image:
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Derecho Constitucional',
    description: 'Acciones de amparo, habeas corpus y defensa de derechos fundamentales.',
    image:
      'https://images.unsplash.com/photo-1505664063603-28e48ca204eb?auto=format&fit=crop&w=1200&q=80',
  },
];

export function PracticeAreas() {
  return (
    <section id="servicios" className="px-4 pb-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1710px] rounded-[2rem] bg-[#1f1b1a] px-6 py-8 text-white sm:px-8 sm:py-10 lg:px-12 lg:py-12">
        <div className="grid gap-8 xl:grid-cols-[1.05fr_2fr]">
          <div className="xl:sticky xl:top-8 xl:self-start">
            <div className="rounded-[1.7rem] bg-white/4 p-6 ring-1 ring-white/8 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.36em] text-white/55">
                Areas de practica
              </p>
              <h2 className="mt-5 max-w-[9ch] text-[clamp(2.4rem,4.4vw,4.7rem)] font-semibold leading-[0.95] tracking-[-0.07em] text-white">
                Defensa legal especializada para cada escenario
              </h2>
              <p className="mt-6 max-w-lg text-base leading-7 text-white/72 sm:text-lg">
                Atendemos casos urgentes y estrategicos con criterio tecnico y
                acompanamiento cercano.
              </p>

              <div className="mt-8">
                <Link
                  href={CONTACT_PATH}
                  className="inline-flex h-14 items-center gap-3 rounded-full bg-white px-7 text-base font-semibold tracking-[-0.03em] text-black transition hover:bg-[#efefef]"
                >
                  Consultar ahora
                  <ArrowRight size={18} className="text-secondary" />
                </Link>
              </div>

              <div className="mt-10 border-t border-white/10 pt-8">
                <h3 className="text-sm font-semibold uppercase tracking-[0.28em] text-white/52">
                  Por que elegirnos
                </h3>
                <ul className="mt-5 space-y-3 text-sm font-medium leading-7 text-white/78 sm:text-base">
                  {whyChooseUs.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10 border-t border-white/10 pt-8">
                <h3 className="text-sm font-semibold uppercase tracking-[0.28em] text-white/52">
                  Servicios actuales
                </h3>
                <div className="mt-5 flex flex-wrap gap-3">
                  {currentServices.map((service) => (
                    <span
                      key={service}
                      className="rounded-full border border-white/12 bg-white/6 px-4 py-2 text-sm font-medium text-white/82"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-2">
            {practiceAreas.map((area) => (
              <article key={area.title} className="group">
                <div className="relative overflow-hidden rounded-[1.6rem] bg-black">
                  <div className="relative aspect-[1.28/1]">
                    <Image
                      src={area.image}
                      alt={area.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      className="object-cover transition duration-500 group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02)_0%,rgba(0,0,0,0.06)_58%,rgba(0,0,0,0.24)_100%)]" />
                  </div>

                  <div className="absolute bottom-5 right-5">
                    <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-white text-secondary shadow-[0_10px_24px_rgba(0,0,0,0.2)]">
                      <Plus size={20} weight="bold" />
                    </span>
                  </div>
                </div>

                <div className="pt-5">
                  <h3 className="max-w-[18ch] text-[clamp(1.6rem,2.2vw,2.25rem)] font-semibold leading-[1.04] tracking-[-0.05em] text-white">
                    {area.title}
                  </h3>
                  <p className="mt-3 max-w-[42ch] text-sm font-medium leading-7 text-white/68 sm:text-base">
                    {area.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
