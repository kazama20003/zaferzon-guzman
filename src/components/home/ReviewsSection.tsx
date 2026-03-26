'use client';

import { useEffect, useRef } from 'react';
import { Star } from '@phosphor-icons/react/ssr';
import { gsap } from 'gsap';

type Review = {
  name: string;
  role: string;
  text: string;
  time: string;
};

const reviews: Review[] = [
  {
    name: 'Mariela P.',
    role: 'Cliente penal',
    text: 'Me explicaron el proceso con claridad y actuaron rapido desde la primera reunion.',
    time: 'Hace 2 semanas',
  },
  {
    name: 'Jorge A.',
    role: 'Caso civil',
    text: 'Resolucion ordenada, trato profesional y seguimiento constante en todo momento.',
    time: 'Hace 1 mes',
  },
  {
    name: 'Lucia R.',
    role: 'Cliente familiar',
    text: 'Acompanamiento serio y humano en un tema delicado. Me senti bien asesorada.',
    time: 'Hace 3 semanas',
  },
  {
    name: 'Carlos M.',
    role: 'Consulta laboral',
    text: 'Fueron directos, tecnicos y muy claros al plantear la mejor estrategia.',
    time: 'Hace 1 semana',
  },
  {
    name: 'Daniela S.',
    role: 'Tema previsional',
    text: 'Ordenaron toda la documentacion y avanzaron mas de lo que esperaba.',
    time: 'Hace 1 mes',
  },
  {
    name: 'Fernando T.',
    role: 'Cliente registral',
    text: 'Buena comunicacion, tiempos razonables y mucha precision en cada paso.',
    time: 'Hace 2 meses',
  },
  {
    name: 'Paola V.',
    role: 'Amparo constitucional',
    text: 'Entendieron la urgencia del caso y respondieron con criterio y rapidez.',
    time: 'Hace 3 semanas',
  },
  {
    name: 'Ricardo L.',
    role: 'Asesoria empresarial',
    text: 'Muy buenos para anticipar riesgos y plantear soluciones concretas.',
    time: 'Hace 1 mes',
  },
  {
    name: 'Andrea C.',
    role: 'Divorcio y tenencia',
    text: 'Trato respetuoso, estrategia clara y excelente acompanamiento durante el proceso.',
    time: 'Hace 2 semanas',
  },
  {
    name: 'Miguel H.',
    role: 'Cliente penal',
    text: 'Defensa solida y presencia real en cada audiencia. Totalmente recomendables.',
    time: 'Hace 5 dias',
  },
];

function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="w-[320px] shrink-0 rounded-[1.5rem] border border-border/75 bg-white p-5 shadow-[0_16px_40px_rgba(0,0,0,0.05)] sm:w-[360px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-black text-sm font-semibold text-white">
            {review.name.slice(0, 1)}
          </div>
          <div>
            <p className="text-sm font-semibold tracking-[-0.02em] text-foreground">
              {review.name}
            </p>
            <p className="text-xs uppercase tracking-[0.22em] text-[var(--text-soft)]">
              {review.role}
            </p>
          </div>
        </div>

        <div className="inline-flex items-center gap-2 rounded-full bg-[#f5f7ff] px-3 py-1.5 text-xs font-semibold text-[#2457ff]">
          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white text-[0.72rem] shadow-[0_4px_10px_rgba(0,0,0,0.08)]">
            G
          </span>
          Google
        </div>
      </div>

      <div className="mt-4 flex gap-1 text-[#fbbc04]">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} size={16} weight="fill" />
        ))}
      </div>

      <p className="mt-4 text-sm leading-7 text-[var(--text-soft)] sm:text-[0.97rem]">
        {review.text}
      </p>

      <p className="mt-4 text-xs uppercase tracking-[0.18em] text-[var(--text-soft)]">
        {review.time}
      </p>
    </article>
  );
}

function ReviewRow({
  items,
  direction = 'left',
}: {
  items: Review[];
  direction?: 'left' | 'right';
}) {
  const rowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const row = rowRef.current;

    if (!row) {
      return;
    }

    let tween: gsap.core.Tween | undefined;

    const buildAnimation = () => {
      tween?.kill();

      const distance = row.scrollWidth / 2;
      if (!distance) {
        return;
      }

      tween = gsap.fromTo(
        row,
        { x: direction === 'left' ? 0 : -distance },
        {
          x: direction === 'left' ? -distance : 0,
          duration: 34,
          ease: 'none',
          repeat: -1,
        }
      );
    };

    buildAnimation();
    window.addEventListener('resize', buildAnimation);

    return () => {
      window.removeEventListener('resize', buildAnimation);
      tween?.kill();
    };
  }, [direction]);

  return (
    <div className="overflow-hidden">
      <div ref={rowRef} className="flex w-max gap-5 py-2">
        {[...items, ...items].map((review, index) => (
          <ReviewCard key={`${review.name}-${index}`} review={review} />
        ))}
      </div>
    </div>
  );
}

export function ReviewsSection() {
  const firstRow = reviews.slice(0, 5);
  const secondRow = reviews.slice(5);

  return (
    <section id="resenas" className="px-4 pb-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1710px] rounded-[2rem] border border-border/60 bg-background px-6 py-10 sm:px-8 lg:px-12 lg:py-14">
        <div className="grid gap-8 border-b border-border/80 pb-10 lg:grid-cols-[1.15fr_0.75fr] lg:gap-14">
          <div>
            <p className="text-sm font-medium tracking-[-0.03em] text-[#2457ff]">
              + Comentarios
            </p>
            <h2 className="mt-5 max-w-[10ch] text-[clamp(2.9rem,6.5vw,6.2rem)] font-semibold leading-[0.9] tracking-[-0.08em] text-foreground">
              Resenas breves con impacto real
            </h2>
          </div>

          <div className="max-w-[28rem] lg:justify-self-end">
            <p className="text-base leading-8 text-[var(--text-soft)] sm:text-lg">
              Comentarios de clientes que valoran claridad, respuesta oportuna y una
              estrategia legal firme desde el inicio.
            </p>
          </div>
        </div>

        <div className="mt-10 space-y-5">
          <ReviewRow items={firstRow} direction="left" />
          <ReviewRow items={secondRow} direction="right" />
        </div>
      </div>
    </section>
  );
}
