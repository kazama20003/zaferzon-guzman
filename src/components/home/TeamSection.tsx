'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { ArrowRight } from '@phosphor-icons/react/ssr';
import { CONTACT_PATH } from '@/lib/site';

const lawyers = [
  {
    name: 'Alessandro Nina B.',
    role: 'Abogado asociado senior',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80',
    summary:
      'Especialista en litigacion penal y defensa tecnica en casos complejos, con enfoque estrategico y lectura procesal precisa.',
    expertise: 'Derecho Penal / Litigacion oral / Estrategia procesal',
  },
  {
    name: 'Camila Torres R.',
    role: 'Abogada civilista',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80',
    summary:
      'Asesora en contratos, responsabilidad civil y conflictos patrimoniales con enfoque preventivo y resolutivo.',
    expertise: 'Contratos / Responsabilidad civil / Sucesiones',
  },
  {
    name: 'Luis Mendoza P.',
    role: 'Abogado laboralista',
    image:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80',
    summary:
      'Representa a trabajadores y empleadores en controversias laborales, despidos y negociaciones individuales.',
    expertise: 'Derecho Laboral / Despidos / Conciliacion',
  },
  {
    name: 'Valeria Rojas C.',
    role: 'Abogada previsional',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=900&q=80',
    summary:
      'Gestiona pensiones, jubilaciones y revision de aportes previsionales con atencion cercana y orden documental.',
    expertise: 'Pensiones / Jubilacion / Derechos previsionales',
  },
  {
    name: 'Diego Salvatierra M.',
    role: 'Abogado registral',
    image:
      'https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&w=900&q=80',
    summary:
      'Desarrolla soluciones para saneamiento de bienes, titulos e inscripciones registrales de alta complejidad.',
    expertise: 'Saneamiento / Titulos / Registros publicos',
  },
  {
    name: 'Mariana Paredes A.',
    role: 'Abogada constitucionalista',
    image:
      'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=900&q=80',
    summary:
      'Interviene en acciones de amparo, habeas corpus y defensa de derechos fundamentales frente a actos arbitrarios.',
    expertise: 'Amparo / Habeas corpus / Derechos fundamentales',
  },
  {
    name: 'Rodrigo Huaman L.',
    role: 'Abogado corporativo',
    image:
      'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=900&q=80',
    summary:
      'Acompana empresas en contingencias legales, cumplimiento y decisiones estrategicas con impacto reputacional.',
    expertise: 'Asesoria empresarial / Cumplimiento / Prevencion legal',
  },
  {
    name: 'Ana Lucia Vega S.',
    role: 'Abogada de familia',
    image:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80',
    summary:
      'Lidera casos de alimentos, tenencia y divorcio con manejo tecnico sensible y enfocado en soluciones sostenibles.',
    expertise: 'Familia / Tenencia / Divorcio',
  },
];

const defaultPointer = { x: 0, y: 0 };

export function TeamSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [pointer, setPointer] = useState(defaultPointer);

  const activeLawyer = lawyers[activeIndex];

  return (
    <section id="equipo" className="px-4 pb-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1710px] rounded-[2rem] bg-background px-6 py-10 sm:px-8 lg:px-12 lg:py-14">
        <div className="grid gap-8 border-b border-border/80 pb-10 lg:grid-cols-[1.18fr_0.72fr] lg:gap-14">
          <div>
            <p className="text-sm font-medium tracking-[-0.03em] text-[#2457ff]">
              + Nuestro equipo
            </p>
            <h2 className="mt-5 max-w-[9ch] text-[clamp(3rem,7vw,6.9rem)] font-semibold leading-[0.88] tracking-[-0.085em] text-foreground">
              Experiencia y estrategia para cada caso relevante
            </h2>
          </div>

          <div className="max-w-[25rem] lg:justify-self-end">
            <p className="text-base leading-8 text-[var(--text-soft)] sm:text-lg">
              Conozca a parte de nuestro equipo legal. Pase el cursor sobre cada
              perfil para descubrir a quien lidera cada frente de trabajo.
            </p>
          </div>
        </div>

        <div data-team-wrap className="relative mt-10">
          <div
            className="hidden pointer-events-none absolute z-20 lg:block"
            style={{
              left: `${pointer.x}px`,
              top: `${pointer.y}px`,
              opacity: isHovering ? 1 : 0,
              transform: 'translate(28px, -46%)',
            }}
          >
            <div className="w-[220px] overflow-hidden rounded-[1.55rem] border border-black/6 bg-white shadow-[0_24px_70px_rgba(0,0,0,0.18)]">
              <div className="relative aspect-[0.9/1]">
                <Image
                  src={activeLawyer.image}
                  alt={activeLawyer.name}
                  fill
                  sizes="220px"
                  className="object-cover"
                />
              </div>
              <div className="border-t border-border/70 px-4 py-3">
                <p className="text-sm font-semibold tracking-[-0.03em] text-foreground">
                  {activeLawyer.name}
                </p>
                <p className="mt-1 text-[0.68rem] uppercase tracking-[0.24em] text-[var(--text-soft)]">
                  {activeLawyer.role}
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            {lawyers.map((lawyer, index) => (
              <button
                key={lawyer.name}
                type="button"
                onMouseEnter={() => {
                  setActiveIndex(index);
                  setIsHovering(true);
                }}
                onMouseLeave={() => setIsHovering(false)}
                onMouseMove={(event) => {
                  const bounds = event.currentTarget
                    .closest('[data-team-wrap]')
                    ?.getBoundingClientRect();

                  if (!bounds) {
                    return;
                  }

                  setPointer({
                    x: event.clientX - bounds.left,
                    y: event.clientY - bounds.top,
                  });
                }}
                onFocus={() => setActiveIndex(index)}
                className={`group relative block w-full rounded-[1.7rem] border px-5 py-5 text-left transition sm:px-7 sm:py-6 ${
                  activeIndex === index
                    ? 'border-black bg-black text-white'
                    : 'border-border/80 bg-white text-foreground hover:border-black/60 hover:bg-[#f2f2ef]'
                }`}
              >
                <div className="grid items-start gap-4 lg:grid-cols-[1.2fr_0.8fr_1.1fr_auto]">
                  <div>
                    <p
                      className={`text-[0.72rem] font-semibold uppercase tracking-[0.28em] ${
                        activeIndex === index ? 'text-white/58' : 'text-[var(--text-soft)]'
                      }`}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </p>
                    <h3 className="mt-3 text-[clamp(1.55rem,3vw,3.2rem)] font-semibold leading-[0.94] tracking-[-0.06em]">
                      {lawyer.name}
                    </h3>
                  </div>

                  <div className="lg:pt-9">
                    <p
                      className={`text-sm font-semibold uppercase tracking-[0.24em] ${
                        activeIndex === index ? 'text-white/68' : 'text-[var(--text-soft)]'
                      }`}
                    >
                      {lawyer.role}
                    </p>
                  </div>

                  <div className="lg:pt-9">
                    <p
                      className={`max-w-[36rem] text-sm leading-7 sm:text-base ${
                        activeIndex === index ? 'text-white/78' : 'text-[var(--text-soft)]'
                      }`}
                    >
                      {lawyer.summary}
                    </p>
                    <p
                      className={`mt-3 text-[0.75rem] font-medium uppercase tracking-[0.2em] ${
                        activeIndex === index ? 'text-white/58' : 'text-[var(--text-soft)]'
                      }`}
                    >
                      {lawyer.expertise}
                    </p>
                  </div>

                  <div className="flex justify-start lg:justify-end">
                    <span
                      className={`inline-flex h-11 w-11 items-center justify-center rounded-full transition ${
                        activeIndex === index
                          ? 'bg-white/10 text-white'
                          : 'bg-[#2457ff]/8 text-[#2457ff]'
                      }`}
                    >
                      <ArrowRight size={18} />
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-10 flex justify-end">
            <Link
              href={CONTACT_PATH}
              className="inline-flex h-14 items-center gap-4 rounded-full bg-white px-7 text-base font-semibold tracking-[-0.03em] text-foreground shadow-[0_16px_38px_rgba(0,0,0,0.06)] transition hover:bg-[#efefef]"
            >
              Contactenos
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#2457ff]/10 text-[#2457ff]">
                <ArrowRight size={16} />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
