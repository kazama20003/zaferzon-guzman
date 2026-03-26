import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Briefcase,
  FileText,
  Gavel,
  ShieldCheck,
} from '@phosphor-icons/react/ssr';
import { CONTACT_PATH, WHATSAPP_HREF } from '@/lib/site';

const serviceAreas = [
  {
    title: 'Derecho Penal',
    summary:
      'Defensa tecnica, estrategia procesal y respuesta inmediata ante denuncias, investigaciones o citaciones.',
    items: [
      'Defensa penal en investigaciones y procesos judiciales.',
      'Asistencia frente a denuncias, citaciones y diligencias.',
      'Estrategia de defensa y acompanamiento en audiencias.',
    ],
    image:
      'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1400&q=80',
  },
  {
    title: 'Derecho Civil',
    summary:
      'Asesoria y representacion en contratos, obligaciones, patrimonio y conflictos civiles.',
    items: [
      'Revision y elaboracion de contratos civiles.',
      'Responsabilidad civil, indemnizaciones y controversias patrimoniales.',
      'Sucesiones, obligaciones y defensa en procesos civiles.',
    ],
    image:
      'https://images.unsplash.com/photo-1453945619913-79ec89a82c51?auto=format&fit=crop&w=1400&q=80',
  },
  {
    title: 'Derecho de Familia',
    summary:
      'Atencion legal en procesos sensibles con enfoque tecnico, ordenado y humano.',
    items: [
      'Divorcio, tenencia, regimen de visitas y alimentos.',
      'Medidas urgentes y acompanamiento procesal en asuntos familiares.',
      'Estrategias para soluciones sostenibles y juridicamente solidas.',
    ],
    image:
      'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1400&q=80',
  },
  {
    title: 'Derecho Laboral',
    summary:
      'Asistencia legal para trabajadores y empresas frente a conflictos laborales y despidos.',
    items: [
      'Consultas sobre despidos, beneficios y controversias laborales.',
      'Negociacion y defensa en reclamos individuales o empresariales.',
      'Prevencion de contingencias laborales.',
    ],
    image:
      'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1400&q=80',
  },
  {
    title: 'Derecho Previsional y Registral',
    summary:
      'Gestion y defensa de tramites previsionales, bienes, titulos e inscripciones.',
    items: [
      'Pensiones, jubilacion y derechos previsionales.',
      'Saneamiento de bienes e inscripciones registrales.',
      'Revision documental y rutas de regularizacion.',
    ],
    image:
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1400&q=80',
  },
  {
    title: 'Asesoria Corporativa y Constitucional',
    summary:
      'Soporte legal para empresas y defensa de derechos fundamentales en escenarios complejos.',
    items: [
      'Consultoria para contingencias y decisiones empresariales sensibles.',
      'Acciones de amparo, habeas corpus y proteccion de derechos.',
      'Lectura legal integral con impacto operativo y reputacional.',
    ],
    image:
      'https://images.unsplash.com/photo-1505664063603-28e48ca204eb?auto=format&fit=crop&w=1400&q=80',
  },
];

const differentiators = [
  {
    title: 'Analisis antes de actuar',
    description:
      'Leemos hechos, documentos, plazos y riesgo antes de recomendar una ruta legal.',
    icon: FileText,
  },
  {
    title: 'Estrategia para cada caso',
    description:
      'No tratamos todos los asuntos igual; definimos la accion segun urgencia, impacto y viabilidad.',
    icon: ShieldCheck,
  },
  {
    title: 'Representacion con criterio',
    description:
      'Negociamos, redactamos o litigamos con seguimiento constante y posicion clara.',
    icon: Gavel,
  },
];

const workModel = [
  {
    step: '01',
    title: 'Consulta y diagnostico',
    description:
      'Entendemos el problema, el objetivo y el riesgo antes de proponer la estrategia.',
  },
  {
    step: '02',
    title: 'Revision de documentos',
    description:
      'Ordenamos contratos, resoluciones, antecedentes o pruebas relevantes para tomar decisiones utiles.',
  },
  {
    step: '03',
    title: 'Ruta de accion',
    description:
      'Definimos si conviene prevenir, responder, negociar, demandar o defender.',
  },
  {
    step: '04',
    title: 'Ejecucion y seguimiento',
    description:
      'Acompanamos cada etapa con comunicacion clara y control del avance del caso.',
  },
];

const serviceHighlights = [
  'Atencion para personas y empresas.',
  'Consultas presenciales o virtuales segun el caso.',
  'Intervencion en asuntos urgentes y estrategicos.',
  'Explicacion clara del escenario legal y del siguiente paso.',
];

export const metadata: Metadata = {
  title: 'Servicios | Zaferson & Guzman',
  description:
    'Conoce las areas de practica y servicios legales de Zaferson & Guzman.',
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <section className="px-4 pb-8 pt-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1710px] overflow-hidden rounded-[2rem] bg-[#151211] text-white shadow-[0_30px_90px_rgba(0,0,0,0.16)]">
          <div className="relative overflow-hidden px-5 pb-10 pt-28 sm:px-8 sm:pb-12 sm:pt-32 lg:px-14 lg:pb-16 lg:pt-40">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_28%),radial-gradient(circle_at_78%_20%,rgba(239,239,239,0.08),transparent_18%),linear-gradient(180deg,rgba(255,255,255,0.02)_0%,rgba(0,0,0,0)_35%,rgba(0,0,0,0.3)_100%)]" />

            <div className="relative z-10 grid gap-10 lg:grid-cols-[1.04fr_0.96fr] lg:items-end">
              <div className="max-w-[860px]">
                <p className="text-xs font-semibold uppercase tracking-[0.36em] text-white/52">
                  Servicios legales
                </p>
                <h1 className="mt-6 max-w-[9ch] text-[clamp(3.3rem,7.4vw,7.2rem)] font-semibold leading-[0.9] tracking-[-0.085em] text-white">
                  Defensa, asesoria y estrategia para escenarios legales exigentes
                </h1>
                <p className="mt-8 max-w-[48rem] text-base leading-8 text-white/78 sm:text-lg">
                  Trabajamos asuntos penales, civiles, familiares, laborales y
                  corporativos con una misma idea central: dar direccion clara y una
                  respuesta legal bien ejecutada.
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                  <Link
                    href={WHATSAPP_HREF}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-14 items-center gap-3 rounded-full bg-white px-7 text-base font-semibold tracking-[-0.03em] text-black transition hover:bg-[#efefef]"
                  >
                    Solicitar informacion
                    <ArrowRight size={18} className="text-secondary" />
                  </Link>
                  <Link
                    href="/about"
                    className="inline-flex h-14 items-center gap-3 rounded-full border border-white/14 bg-white/8 px-7 text-base font-semibold tracking-[-0.03em] text-white backdrop-blur-sm transition hover:bg-white/12"
                  >
                    Conocer el estudio
                  </Link>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                <div className="rounded-[1.7rem] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-white/48">
                    Cobertura
                  </p>
                  <p className="mt-4 text-[1.35rem] font-semibold leading-8 tracking-[-0.04em] text-white">
                    Consultas, representacion procesal, revision documental y asesoria continua.
                  </p>
                </div>
                <div className="rounded-[1.7rem] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-white/48">
                    Perfil de atencion
                  </p>
                  <p className="mt-4 text-sm leading-7 text-white/72 sm:text-base">
                    Personas, familias y empresas que necesitan criterio tecnico y
                    un siguiente paso juridico bien definido.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 grid gap-4 lg:grid-cols-[1.12fr_0.88fr]">
              <div className="relative min-h-[340px] overflow-hidden rounded-[1.85rem] border border-white/10">
                <Image
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1600&q=80"
                  alt="Estrategia y documentacion legal"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.06)_0%,rgba(0,0,0,0.22)_55%,rgba(0,0,0,0.72)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <p className="max-w-[38rem] text-[1.15rem] font-medium leading-8 tracking-[-0.03em] text-white/92 sm:text-[1.35rem]">
                    Cada servicio se presta con una metodologia sobria: diagnostico,
                    estrategia, ejecucion y seguimiento.
                  </p>
                </div>
              </div>

              <div className="rounded-[1.85rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm sm:p-8">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-white/48">
                  Lo que incluye nuestra atencion
                </p>
                <div className="mt-6 space-y-4">
                  {serviceHighlights.map((item) => (
                    <div
                      key={item}
                      className="flex gap-4 border-b border-white/10 pb-4 last:border-b-0 last:pb-0"
                    >
                      <span className="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-white">
                        <Briefcase size={18} />
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
      </section>

      <section className="mx-auto max-w-[1580px] px-6 pb-24 pt-12 sm:px-10 lg:px-16">
        <div className="max-w-[980px]">
          <p className="text-xs font-semibold uppercase tracking-[0.38em] text-[var(--text-soft)]">
            Areas de practica
          </p>
          <h2 className="mt-6 text-[clamp(2.7rem,5.2vw,5.5rem)] font-semibold leading-[0.94] tracking-[-0.08em] text-foreground">
            Servicios pensados para conflictos reales y decisiones importantes
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {serviceAreas.map((area) => (
            <article
              key={area.title}
              className="overflow-hidden rounded-[1.85rem] border border-border/80 bg-white shadow-[0_20px_45px_rgba(0,0,0,0.04)]"
            >
              <div className="relative aspect-[1.55/1]">
                <Image
                  src={area.image}
                  alt={area.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04)_0%,rgba(0,0,0,0.08)_56%,rgba(0,0,0,0.28)_100%)]" />
              </div>

              <div className="p-6 sm:p-8">
                <h3 className="text-[clamp(1.8rem,2.6vw,2.5rem)] font-semibold leading-[1] tracking-[-0.05em] text-foreground">
                  {area.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[var(--text-soft)] sm:text-base">
                  {area.summary}
                </p>

                <div className="mt-6 space-y-3">
                  {area.items.map((item) => (
                    <div key={item} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-black" />
                      <p className="text-sm leading-7 text-[var(--text-soft)] sm:text-base">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <Link
                    href="/contact#formulario-contacto"
                    className="inline-flex h-12 items-center gap-3 rounded-full border border-border bg-background px-5 text-sm font-semibold tracking-[-0.03em] text-foreground transition hover:border-black"
                  >
                    Consultar esta area
                    <ArrowRight size={16} className="text-secondary" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1710px] rounded-[2rem] border border-border/70 bg-[#f7f6f2] px-6 py-10 sm:px-8 lg:px-12 lg:py-14">
          <div className="grid gap-12 border-b border-border/80 pb-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-end">
            <div>
              <p className="text-sm font-medium tracking-[-0.03em] text-[#2457ff]">
                + Como trabajamos
              </p>
              <h2 className="mt-5 max-w-[8ch] text-[clamp(3rem,6.5vw,6.2rem)] font-semibold leading-[0.9] tracking-[-0.085em] text-foreground">
                Servicio legal con metodo y control
              </h2>
            </div>

            <div className="max-w-[38rem] lg:justify-self-end">
              <p className="text-base leading-8 text-[var(--text-soft)] sm:text-lg">
                El valor del servicio no esta solo en la respuesta juridica, sino en
                como se estructura, se ejecuta y se comunica cada decision.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-4">
            {workModel.map((step) => (
              <article
                key={step.step}
                className="rounded-[1.6rem] border border-border/80 bg-background p-5 transition hover:border-black/40"
              >
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-[var(--text-soft)]">
                  {step.step}
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
        <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.38em] text-[var(--text-soft)]">
              Diferenciales
            </p>
            <h2 className="mt-6 max-w-[8ch] text-[clamp(2.7rem,5.2vw,5.4rem)] font-semibold leading-[0.93] tracking-[-0.08em] text-foreground">
              Por que nuestros servicios buscan ser utiles de verdad
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {differentiators.map(({ title, description, icon: Icon }) => (
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

      <section className="px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1710px] overflow-hidden rounded-[2rem] bg-[#221e1d] px-6 py-10 text-white sm:px-8 lg:px-12 lg:py-14">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-[780px]">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-white/48">
                Siguiente paso
              </p>
              <h2 className="mt-5 text-[clamp(2.6rem,5.4vw,5rem)] font-semibold leading-[0.94] tracking-[-0.075em] text-white">
                Si quieres saber que servicio encaja con tu caso, conversemos
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
                href="/about"
                className="inline-flex h-14 items-center gap-3 rounded-full border border-white/18 bg-white/[0.04] px-7 text-base font-semibold tracking-[-0.03em] text-white transition hover:bg-white/[0.08]"
              >
                Ver quienes somos
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
