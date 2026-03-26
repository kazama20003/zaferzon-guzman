import Image from 'next/image';
import { ArrowUpRight } from '@phosphor-icons/react/ssr';

const processSteps = [
  {
    number: '01',
    title: 'Consulta inicial',
    description:
      'Escuchamos el caso, identificamos riesgos y definimos el enfoque juridico mas conveniente.',
    image:
      'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80',
  },
  {
    number: '02',
    title: 'Diagnostico y estrategia',
    description:
      'Analizamos documentos, antecedentes y plazos para construir una ruta de accion clara.',
    image:
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80',
  },
  {
    number: '03',
    title: 'Ejecucion del caso',
    description:
      'Asumimos la defensa, redaccion de escritos, negociacion o representacion procesal segun corresponda.',
    image:
      'https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=1200&q=80',
  },
  {
    number: '04',
    title: 'Seguimiento constante',
    description:
      'Mantenemos comunicacion directa, avances oportunos y decisiones informadas en cada etapa.',
    image:
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80',
  },
];

export function ProcessSection() {
  return (
    <section id="procesos" className="px-4 pb-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1710px] rounded-[2rem] border border-border/60 bg-background px-6 py-10 sm:px-8 lg:px-12 lg:py-14">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.7fr] lg:gap-14">
          <div className="lg:sticky lg:top-8 lg:self-start">
            <p className="text-xs font-semibold uppercase tracking-[0.36em] text-[var(--text-soft)]">
              Procesos
            </p>
            <h2 className="mt-5 max-w-[10ch] text-[clamp(2.4rem,4.3vw,4.8rem)] font-semibold leading-[0.94] tracking-[-0.07em] text-foreground">
              Asi trabajamos cada caso
            </h2>
            <p className="mt-6 max-w-lg text-base leading-8 text-[var(--text-soft)] sm:text-lg">
              Un proceso ordenado, directo y enfocado en proteger tus intereses desde
              el primer contacto.
            </p>

            <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-border bg-white px-5 py-3 text-sm font-semibold text-foreground shadow-[0_12px_30px_rgba(0,0,0,0.05)]">
              Metodologia clara
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-black text-white">
                <ArrowUpRight size={16} />
              </span>
            </div>

            <div className="mt-8 overflow-hidden rounded-[1.7rem] border border-border/70 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.06)]">
              <div className="relative aspect-[1.18/1]">
                <Image
                  src="https://images.unsplash.com/photo-1589994965851-a8f479c573a9?auto=format&fit=crop&w=1200&q=80"
                  alt="Abogado revisando documentacion legal"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04)_0%,rgba(0,0,0,0.26)_100%)]" />
              </div>
              <div className="grid grid-cols-2 gap-px bg-border/70">
                <div className="bg-white px-5 py-4">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-[var(--text-soft)]">
                    Analisis
                  </p>
                  <p className="mt-2 text-sm font-medium text-foreground">
                    Evaluacion inicial y lectura del riesgo.
                  </p>
                </div>
                <div className="bg-white px-5 py-4">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-[var(--text-soft)]">
                    Accion
                  </p>
                  <p className="mt-2 text-sm font-medium text-foreground">
                    Respuesta juridica precisa y seguimiento.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {processSteps.map((step) => (
              <article
                key={step.number}
                className="rounded-[1.6rem] border border-border/70 bg-white p-6 shadow-[0_18px_50px_rgba(0,0,0,0.06)] transition hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(0,0,0,0.08)] sm:p-7"
              >
                <div className="relative mb-5 overflow-hidden rounded-[1.2rem]">
                  <div className="relative aspect-[1.8/1]">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02)_0%,rgba(0,0,0,0.16)_100%)]" />
                  </div>
                </div>

                <div className="flex items-center justify-between border-b border-border/80 pb-5">
                  <span className="text-[0.78rem] font-semibold tracking-[0.34em] text-[var(--text-soft)]">
                    {step.number}
                  </span>
                  <span className="h-2.5 w-2.5 rounded-full bg-secondary" />
                </div>

                <div className="pt-5">
                  <h3 className="max-w-[16ch] text-[clamp(1.45rem,2vw,2rem)] font-semibold leading-[1.02] tracking-[-0.05em] text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-4 max-w-[34ch] text-sm font-medium leading-7 text-[var(--text-soft)] sm:text-base">
                    {step.description}
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
