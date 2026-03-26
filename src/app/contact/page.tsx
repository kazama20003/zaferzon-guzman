import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  Buildings,
  Clock,
  EnvelopeSimple,
  MapPin,
  PhoneCall,
  ShieldCheck,
} from '@phosphor-icons/react/ssr';

const contactCards = [
  {
    title: 'Telefono del estudio',
    value: 'Dato por confirmar',
    detail: 'Atencion para consultas iniciales y coordinacion de llamadas.',
    icon: PhoneCall,
  },
  {
    title: 'Correo institucional',
    value: 'Dato por confirmar',
    detail: 'Ideal para solicitudes de informacion y envio de documentos.',
    icon: EnvelopeSimple,
  },
  {
    title: 'Horario de atencion',
    value: 'Lunes a viernes, 9:00 a.m. - 6:00 p.m.',
    detail: 'Puedes usar este bloque para mostrar tambien sabados si aplica.',
    icon: Clock,
  },
];

const reasons = [
  'Solicitar informacion sobre los servicios del estudio.',
  'Pedir una primera consulta sobre un caso penal, civil o de familia.',
  'Coordinar una llamada o reunion con el despacho.',
  'Enviar antecedentes o documentos para una revision inicial.',
];

const officeDetails = [
  {
    label: 'Nombre del despacho',
    value: 'Zaferson & Guzman Estudio Juridico',
  },
  {
    label: 'Direccion referencial',
    value: 'Completar con la direccion real del estudio',
  },
  {
    label: 'Cobertura',
    value: 'Atencion presencial y virtual segun el tipo de consulta',
  },
];

export const metadata: Metadata = {
  title: 'Contacto | Zaferson & Guzman',
  description:
    'Contacta al estudio juridico, solicita informacion y ubica la oficina.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <section className="px-4 pb-10 pt-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1710px] overflow-hidden rounded-[2rem] bg-[#121111] text-white shadow-[0_30px_90px_rgba(0,0,0,0.16)]">
          <div className="relative overflow-hidden px-5 pb-10 pt-28 sm:px-8 sm:pb-12 sm:pt-32 lg:px-14 lg:pb-16 lg:pt-40">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_26%),radial-gradient(circle_at_76%_18%,rgba(239,239,239,0.08),transparent_18%),linear-gradient(180deg,rgba(255,255,255,0.02)_0%,rgba(0,0,0,0)_35%,rgba(0,0,0,0.38)_100%)]" />

            <div className="relative z-10 grid gap-8 lg:grid-cols-[0.96fr_1.04fr] lg:items-start">
              <div className="max-w-[820px]">
                <p className="text-xs font-semibold uppercase tracking-[0.36em] text-white/50">
                  Contactanos
                </p>
                <h1 className="mt-6 max-w-[9ch] text-[clamp(3.3rem,7.4vw,7.1rem)] font-semibold leading-[0.9] tracking-[-0.085em] text-white">
                  Solicita informacion o agenda tu consulta con el estudio
                </h1>
                <p className="mt-8 max-w-[46rem] text-base leading-8 text-white/76 sm:text-lg">
                  Esta página debe convertir. Por eso el formulario, los datos del
                  despacho y la ubicacion estan visibles desde el inicio para que el
                  usuario sepa como contactarse sin friccion.
                </p>

                <div className="mt-10 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.05] p-5 backdrop-blur-sm">
                    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-white/46">
                      Objetivo
                    </p>
                    <p className="mt-3 text-[1.15rem] font-semibold leading-8 tracking-[-0.04em] text-white">
                      Que el usuario encuentre rapido como escribir, llamar o ubicar la oficina.
                    </p>
                  </div>
                  <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.05] p-5 backdrop-blur-sm">
                    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-white/46">
                      Enfoque
                    </p>
                    <p className="mt-3 text-sm leading-7 text-white/74 sm:text-base">
                      Menos texto conceptual y mas elementos utiles: formulario, datos
                      del estudio, horario y mapa.
                    </p>
                  </div>
                </div>
              </div>

              <div
                id="formulario-contacto"
                className="rounded-[1.9rem] bg-white p-6 text-foreground shadow-[0_24px_70px_rgba(0,0,0,0.16)] sm:p-8"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-[var(--text-soft)]">
                      Formulario de contacto
                    </p>
                    <h2 className="mt-3 max-w-[11ch] text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[0.94] tracking-[-0.07em] text-foreground">
                      Contacta al estudio
                    </h2>
                  </div>
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-black text-white">
                    <ShieldCheck size={20} />
                  </span>
                </div>

                <p className="mt-5 text-sm leading-7 text-[var(--text-soft)] sm:text-base">
                  Usa este bloque para solicitar informacion, dejar tus datos y resumir
                  brevemente el motivo del contacto.
                </p>

                <form className="mt-8 grid gap-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <label className="grid gap-2">
                      <span className="text-sm font-semibold tracking-[-0.02em] text-foreground">
                        Nombre completo
                      </span>
                      <input
                        type="text"
                        name="name"
                        placeholder="Tu nombre"
                        className="h-14 rounded-[1rem] border border-border bg-background px-4 text-sm text-foreground outline-none transition placeholder:text-[var(--text-soft)] focus:border-black"
                      />
                    </label>
                    <label className="grid gap-2">
                      <span className="text-sm font-semibold tracking-[-0.02em] text-foreground">
                        Telefono o WhatsApp
                      </span>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Tu numero de contacto"
                        className="h-14 rounded-[1rem] border border-border bg-background px-4 text-sm text-foreground outline-none transition placeholder:text-[var(--text-soft)] focus:border-black"
                      />
                    </label>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <label className="grid gap-2">
                      <span className="text-sm font-semibold tracking-[-0.02em] text-foreground">
                        Correo electronico
                      </span>
                      <input
                        type="email"
                        name="email"
                        placeholder="Tu correo"
                        className="h-14 rounded-[1rem] border border-border bg-background px-4 text-sm text-foreground outline-none transition placeholder:text-[var(--text-soft)] focus:border-black"
                      />
                    </label>
                    <label className="grid gap-2">
                      <span className="text-sm font-semibold tracking-[-0.02em] text-foreground">
                        Area de interes
                      </span>
                      <select className="h-14 rounded-[1rem] border border-border bg-background px-4 text-sm text-foreground outline-none transition focus:border-black">
                        <option>Selecciona una opcion</option>
                        <option>Consulta penal</option>
                        <option>Consulta civil</option>
                        <option>Consulta de familia</option>
                        <option>Informacion general del estudio</option>
                        <option>Atencion empresarial</option>
                      </select>
                    </label>
                  </div>

                  <label className="grid gap-2">
                    <span className="text-sm font-semibold tracking-[-0.02em] text-foreground">
                      Mensaje
                    </span>
                    <textarea
                      name="message"
                      rows={6}
                      placeholder="Cuéntanos brevemente que necesitas y como prefieres ser contactado."
                      className="min-h-[168px] rounded-[1rem] border border-border bg-background px-4 py-4 text-sm text-foreground outline-none transition placeholder:text-[var(--text-soft)] focus:border-black"
                    />
                  </label>

                  <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
                    <p className="max-w-[34rem] text-sm leading-7 text-[var(--text-soft)]">
                      El formulario ya esta maquetado. Solo falta conectarlo al correo,
                      CRM o endpoint real del estudio.
                    </p>
                    <button
                      type="submit"
                      className="inline-flex h-14 items-center justify-center gap-3 rounded-full bg-black px-7 text-base font-semibold tracking-[-0.03em] text-white transition hover:bg-[#1a1a1a]"
                    >
                      Enviar solicitud
                      <ArrowRight size={18} className="text-secondary" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1580px] px-6 pb-24 pt-8 sm:px-10 lg:px-16">
        <div className="grid gap-5 lg:grid-cols-3">
          {contactCards.map(({ title, value, detail, icon: Icon }) => (
            <article
              key={title}
              className="rounded-[1.7rem] border border-border/80 bg-white p-6 shadow-[0_20px_45px_rgba(0,0,0,0.04)]"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-black text-white">
                <Icon size={20} />
              </span>
              <p className="mt-6 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[var(--text-soft)]">
                {title}
              </p>
              <p className="mt-3 text-[1.35rem] font-semibold leading-8 tracking-[-0.04em] text-foreground">
                {value}
              </p>
              <p className="mt-3 text-sm leading-7 text-[var(--text-soft)] sm:text-base">
                {detail}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1710px] rounded-[2rem] border border-border/70 bg-[#f7f6f2] px-6 py-10 sm:px-8 lg:px-12 lg:py-14">
          <div className="grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
            <div>
              <p className="text-sm font-medium tracking-[-0.03em] text-[#2457ff]">
                + Informacion del estudio
              </p>
              <h2 className="mt-5 max-w-[8ch] text-[clamp(3rem,6.3vw,6rem)] font-semibold leading-[0.9] tracking-[-0.085em] text-foreground">
                Datos del despacho y ubicacion
              </h2>
              <p className="mt-6 max-w-[36rem] text-base leading-8 text-[var(--text-soft)] sm:text-lg">
                Esta seccion debe ayudar al usuario a reconocer el estudio, saber donde
                esta y decidir rapido si quiere escribir, llamar o visitar la oficina.
              </p>

              <div className="mt-8 grid gap-4">
                {officeDetails.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[1.35rem] border border-border/80 bg-white px-5 py-5"
                  >
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[var(--text-soft)]">
                      {item.label}
                    </p>
                    <p className="mt-3 text-[1.08rem] font-semibold leading-7 tracking-[-0.03em] text-foreground">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-[1.6rem] bg-black p-6 text-white shadow-[0_20px_55px_rgba(0,0,0,0.14)]">
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-white">
                    <Buildings size={20} />
                  </span>
                  <div>
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-white/48">
                      Nota importante
                    </p>
                    <p className="mt-3 text-sm leading-7 text-white/76 sm:text-base">
                      Aqui deje placeholders seguros para no inventar telefono, correo o
                      direccion reales. Cuando me pases esos datos, los integro y queda lista.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-5">
              <div className="overflow-hidden rounded-[1.8rem] border border-border/80 bg-white shadow-[0_20px_45px_rgba(0,0,0,0.04)]">
                <div className="border-b border-border/80 px-6 py-5 sm:px-8">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-black text-white">
                      <MapPin size={18} />
                    </span>
                    <div>
                      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[var(--text-soft)]">
                        Ubicacion en Google Maps
                      </p>
                      <p className="mt-1 text-lg font-semibold tracking-[-0.04em] text-foreground">
                        Mapa del estudio
                      </p>
                    </div>
                  </div>
                </div>

                <div className="aspect-[1.25/1] w-full bg-[#e9e6de]">
                  <iframe
                    title="Ubicacion referencial del estudio"
                    src="https://www.google.com/maps?q=San%20Isidro%2C%20Lima%2C%20Peru&z=14&output=embed"
                    className="h-full w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                <div className="px-6 py-5 sm:px-8">
                  <p className="text-sm leading-7 text-[var(--text-soft)] sm:text-base">
                    El mapa esta embebido y listo. Solo hay que reemplazar la query por
                    la direccion real del despacho para dejarlo final.
                  </p>
                  <Link
                    href="https://www.google.com/maps"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex h-12 items-center gap-3 rounded-full border border-border bg-background px-5 text-sm font-semibold tracking-[-0.03em] text-foreground transition hover:border-black"
                  >
                    Abrir Google Maps
                    <ArrowRight size={16} className="text-secondary" />
                  </Link>
                </div>
              </div>

              <div className="rounded-[1.8rem] border border-border/80 bg-white p-6 shadow-[0_20px_45px_rgba(0,0,0,0.04)] sm:p-8">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[var(--text-soft)]">
                  Motivos frecuentes de contacto
                </p>
                <div className="mt-6 space-y-4">
                  {reasons.map((reason) => (
                    <div
                      key={reason}
                      className="flex gap-4 rounded-[1.25rem] border border-border/80 bg-background px-5 py-4"
                    >
                      <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-black" />
                      <p className="text-sm leading-7 text-[var(--text-soft)] sm:text-base">
                        {reason}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
