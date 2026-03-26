import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Checks,
  Scales,
  ShieldCheck,
  UsersThree,
} from '@phosphor-icons/react/ssr';
import { CONTACT_PATH } from '@/lib/site';

const valueCards = [
  {
    title: 'Lectura precisa del problema',
    description:
      'Analizamos el contexto legal, el riesgo real y el margen de accion antes de mover una sola pieza.',
    icon: Scales,
  },
  {
    title: 'Estrategia con criterio',
    description:
      'Cada recomendacion busca proteger posicion, tiempo y evidencia, no solo responder a la urgencia.',
    icon: ShieldCheck,
  },
  {
    title: 'Acompanamiento cercano',
    description:
      'Explicamos el proceso con claridad para que cada decision tenga sentido juridico y operativo.',
    icon: UsersThree,
  },
];

const processSteps = [
  {
    label: '01',
    title: 'Escuchamos el caso',
    description:
      'Ordenamos hechos, documentos, plazos y riesgos para construir una primera lectura util.',
  },
  {
    label: '02',
    title: 'Definimos la ruta',
    description:
      'Trazamos la estrategia legal mas conveniente segun urgencia, costo y probabilidad de resultado.',
  },
  {
    label: '03',
    title: 'Ejecutamos con control',
    description:
      'Presentamos, negociamos o litigamos con seguimiento continuo y criterio tecnico.',
  },
  {
    label: '04',
    title: 'Ajustamos cuando cambia el escenario',
    description:
      'Si el caso se mueve, recalibramos la defensa o la accion para no perder ventaja.',
  },
];

const focusAreas = [
  'Defensa penal y respuesta inmediata ante denuncias, citaciones o investigaciones.',
  'Controversias civiles, contratos, patrimonio y conflictos que requieren estructura legal.',
  'Procesos de familia con manejo tecnico, sensible y orientado a soluciones sostenibles.',
];

export const metadata: Metadata = {
  title: 'Quienes somos | Zaferson & Guzman',
  description:
    'Conoce el enfoque, la forma de trabajo y la vision de Zaferson & Guzman.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <section className="px-4 pb-8 pt-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1710px] overflow-hidden rounded-[2rem] bg-[#161312] text-white shadow-[0_30px_90px_rgba(0,0,0,0.16)]">
          <div className="relative overflow-hidden px-5 pb-10 pt-28 sm:px-8 sm:pb-12 sm:pt-32 lg:px-14 lg:pb-16 lg:pt-40">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_28%),radial-gradient(circle_at_78%_20%,rgba(239,239,239,0.08),transparent_18%),linear-gradient(180deg,rgba(255,255,255,0.02)_0%,rgba(0,0,0,0)_35%,rgba(0,0,0,0.28)_100%)]" />

            <div className="relative z-10">
              <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
                <div className="max-w-[860px]">
                  <p className="text-xs font-semibold uppercase tracking-[0.36em] text-white/52">
                    Quienes somos
                  </p>
                  <h1 className="mt-6 max-w-[10ch] text-[clamp(3.3rem,7.4vw,7.2rem)] font-semibold leading-[0.9] tracking-[-0.085em] text-white">
                    Firma legal con estrategia, criterio y acompanamiento real
                  </h1>
                  <p className="mt-8 max-w-[50rem] text-base leading-8 text-white/78 sm:text-lg">
                    En Zaferson & Guzman trabajamos los casos con lectura precisa,
                    estructura clara y accion oportuna. No construimos discurso
                    decorativo: construimos rutas legales defendibles.
                  </p>

                  <div className="mt-10 flex flex-wrap gap-4">
                    <Link
                      href="/"
                      className="inline-flex h-13 items-center gap-3 rounded-full border border-white/14 bg-white/8 px-6 text-sm font-semibold tracking-[-0.03em] text-white backdrop-blur-sm transition hover:bg-white/12 sm:h-14 sm:px-7 sm:text-base"
                    >
                      Volver al inicio
                    </Link>
                    <Link
                      href={CONTACT_PATH}
                      className="inline-flex h-13 items-center gap-3 rounded-full bg-white px-6 text-sm font-semibold tracking-[-0.03em] text-black transition hover:bg-[#efefef] sm:h-14 sm:px-7 sm:text-base"
                    >
                      Hablar con el estudio
                      <ArrowRight size={18} className="text-secondary" />
                    </Link>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                  <div className="rounded-[1.7rem] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm">
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-white/48">
                      Enfoque
                    </p>
                    <p className="mt-4 text-[1.35rem] font-semibold leading-8 tracking-[-0.04em] text-white">
                      Penal, civil y familia bajo una misma lectura estrategica.
                    </p>
                  </div>
                  <div className="rounded-[1.7rem] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm">
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-white/48">
                      Forma de trabajo
                    </p>
                    <p className="mt-4 text-sm leading-7 text-white/72 sm:text-base">
                      Analisis, plan de accion, ejecucion y seguimiento continuo en
                      cada etapa del caso.
                    </p>
                  </div>
                  <div className="rounded-[1.7rem] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm">
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-white/48">
                      Prioridad
                    </p>
                    <p className="mt-4 text-sm leading-7 text-white/72 sm:text-base">
                      Traducir complejidad juridica en decisiones claras para la
                      persona o empresa que necesita actuar.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="relative min-h-[320px] overflow-hidden rounded-[1.85rem] border border-white/10">
                  <Image
                    src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80"
                    alt="Equipo legal en sala de reuniones"
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.06)_0%,rgba(0,0,0,0.22)_55%,rgba(0,0,0,0.72)_100%)]" />
                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                    <p className="max-w-[36rem] text-[1.15rem] font-medium leading-8 tracking-[-0.03em] text-white/92 sm:text-[1.35rem]">
                      Defendemos intereses con una metodologia sobria: diagnostico,
                      estrategia, ejecucion y control.
                    </p>
                  </div>
                </div>

                <div className="rounded-[1.85rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm sm:p-8">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-white/48">
                    Lo que nos importa
                  </p>
                  <div className="mt-6 space-y-5">
                    {focusAreas.map((item) => (
                      <div
                        key={item}
                        className="flex gap-4 border-b border-white/10 pb-5 last:border-b-0 last:pb-0"
                      >
                        <span className="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-white">
                          <Checks size={18} />
                        </span>
                        <p className="text-sm leading-7 text-white/74 sm:text-base">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1580px] px-6 pb-24 pt-12 sm:px-10 lg:px-16">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.38em] text-[var(--text-soft)]">
              Nuestra forma de pensar
            </p>
            <h2 className="mt-6 max-w-[8ch] text-[clamp(2.7rem,5.4vw,5.6rem)] font-semibold leading-[0.92] tracking-[-0.08em] text-foreground">
              Derecho util, no discurso vacio
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {valueCards.map(({ title, description, icon: Icon }) => (
              <article
                key={title}
                className="rounded-[1.7rem] border border-border/80 bg-white p-6 shadow-[0_20px_45px_rgba(0,0,0,0.04)]"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-black text-white">
                  <Icon size={20} />
                </span>
                <h3 className="mt-6 text-[1.55rem] font-semibold leading-8 tracking-[-0.05em] text-foreground">
                  {title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[var(--text-soft)] sm:text-base">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1710px] rounded-[2rem] border border-border/70 bg-[#f7f6f2] px-6 py-10 sm:px-8 lg:px-12 lg:py-14">
          <div className="grid gap-12 border-b border-border/80 pb-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-end">
            <div>
              <p className="text-sm font-medium tracking-[-0.03em] text-[#2457ff]">
                + Metodo de trabajo
              </p>
              <h2 className="mt-5 max-w-[8ch] text-[clamp(3rem,6.6vw,6.4rem)] font-semibold leading-[0.9] tracking-[-0.085em] text-foreground">
                Orden para decidir mejor
              </h2>
            </div>

            <div className="max-w-[38rem] lg:justify-self-end">
              <p className="text-base leading-8 text-[var(--text-soft)] sm:text-lg">
                Cada caso necesita estructura antes que improvisacion. Por eso
                trabajamos con una secuencia clara que permite evaluar, ejecutar y
                corregir a tiempo.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-4">
            {processSteps.map((step) => (
              <article
                key={step.label}
                className="rounded-[1.6rem] border border-border/80 bg-background p-5 transition hover:border-black/40"
              >
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-[var(--text-soft)]">
                  {step.label}
                </p>
                <h3 className="mt-5 text-[1.45rem] font-semibold leading-8 tracking-[-0.05em] text-foreground">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[var(--text-soft)] sm:text-base">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1580px] px-6 pb-24 sm:px-10 lg:px-16">
        <div className="grid gap-6 lg:grid-cols-[0.96fr_1.04fr]">
          <div className="relative min-h-[520px] overflow-hidden rounded-[1.9rem] bg-black">
            <Image
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1400&q=80"
              alt="Documentos y estrategia legal"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.1)_0%,rgba(0,0,0,0.22)_42%,rgba(0,0,0,0.78)_100%)]" />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-white/52">
                Vision del estudio
              </p>
              <p className="mt-4 max-w-[28rem] text-[1.25rem] font-medium leading-8 tracking-[-0.03em] text-white/88">
                Un caso bien llevado no solo se defiende: tambien se ordena, se
                explica y se sostiene.
              </p>
            </div>
          </div>

          <div className="rounded-[1.9rem] bg-white p-6 shadow-[0_22px_55px_rgba(0,0,0,0.05)] sm:p-8 lg:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.38em] text-[var(--text-soft)]">
              Por que esta pagina se ve como el home
            </p>
            <h2 className="mt-6 max-w-[11ch] text-[clamp(2.5rem,5.2vw,5.2rem)] font-semibold leading-[0.93] tracking-[-0.075em] text-foreground">
              Misma identidad, contenido distinto
            </h2>
            <p className="mt-6 max-w-[42rem] text-base leading-8 text-[var(--text-soft)] sm:text-lg">
              Mantuvimos la misma direccion visual del inicio: grandes titulares,
              bloques editoriales, superficies redondeadas, blanco y negro con
              acentos sobrios y llamadas a la accion muy claras.
            </p>

            <div className="mt-10 space-y-4">
              <div className="rounded-[1.45rem] border border-border/80 bg-background p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--text-soft)]">
                  Continuidad visual
                </p>
                <p className="mt-3 text-sm leading-7 text-[var(--text-soft)] sm:text-base">
                  La pagina comparte espaciados, bordes, pesos tipograficos y el
                  mismo sistema de contraste que se ve en `src/app/page.tsx`.
                </p>
              </div>
              <div className="rounded-[1.45rem] border border-border/80 bg-background p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--text-soft)]">
                  Navegacion util
                </p>
                <p className="mt-3 text-sm leading-7 text-[var(--text-soft)] sm:text-base">
                  En lugar de copiar el header del home con anclas internas que no
                  existen aqui, la pagina tiene una cabecera propia y limpia.
                </p>
              </div>
              <div className="rounded-[1.45rem] border border-border/80 bg-background p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--text-soft)]">
                  Lectura rapida
                </p>
                <p className="mt-3 text-sm leading-7 text-[var(--text-soft)] sm:text-base">
                  Secciones cortas, jerarquia marcada y CTAs bien ubicados para que
                  la pagina sirva tanto como presentacion como punto de conversion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1710px] overflow-hidden rounded-[2rem] bg-[#221e1d] px-6 py-10 text-white sm:px-8 lg:px-12 lg:py-14">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-[780px]">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-white/48">
                Siguiente paso
              </p>
              <h2 className="mt-5 text-[clamp(2.6rem,5.4vw,5rem)] font-semibold leading-[0.94] tracking-[-0.075em] text-white">
                Si necesitas orientacion legal, conversemos con contexto y direccion
              </h2>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href={CONTACT_PATH}
                className="inline-flex h-14 items-center gap-3 rounded-full bg-white px-7 text-base font-semibold tracking-[-0.03em] text-black transition hover:bg-[#efefef]"
              >
                Ir a contacto
                <ArrowRight size={18} className="text-secondary" />
              </Link>
              <Link
                href="/"
                className="inline-flex h-14 items-center gap-3 rounded-full border border-white/18 bg-white/[0.04] px-7 text-base font-semibold tracking-[-0.03em] text-white transition hover:bg-white/[0.08]"
              >
                Volver al home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
