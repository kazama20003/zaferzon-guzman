'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CONTACT_PATH } from '@/lib/site';

const trustItems = [
  { title: 'Atencion legal', value: 'Penal, civil, laboral y familia' },
  { title: 'Cobertura', value: 'Consultas presenciales y virtuales' },
  { title: 'Respuesta', value: 'Acompanamiento rapido y directo' },
  { title: 'Enfoque', value: 'Estrategia coordinada para cada caso' },
];

export function FooterSection() {
  const pathname = usePathname();
  const homeHrefPrefix = pathname === '/' ? '' : '/';
  const footerLinks = [
    { label: 'Servicios', href: `${homeHrefPrefix}#what-we-do` },
    { label: 'Equipo', href: `${homeHrefPrefix}#equipo` },
    { label: 'Procesos', href: `${homeHrefPrefix}#procesos` },
    { label: 'Resenas', href: `${homeHrefPrefix}#resenas` },
    { label: 'Areas', href: `${homeHrefPrefix}#servicios` },
    { label: 'Contacto', href: CONTACT_PATH },
  ];

  return (
    <footer id="contacto" className="px-4 pb-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1710px] overflow-hidden rounded-[2rem] bg-[#221e1d] px-6 py-10 text-white sm:px-8 lg:px-12 lg:py-14">
        <div className="relative z-10">
          <div className="max-w-[980px]">
            <h2 className="text-[clamp(2.5rem,5vw,4.6rem)] font-semibold leading-[0.95] tracking-[-0.07em] text-white">
              Listo para proteger tus intereses?{' '}
              <Link
                href={CONTACT_PATH}
                className="border-b-4 border-[#ef4444] pb-1 text-white transition hover:text-[#efefef]"
              >
                Hablemos
              </Link>
            </h2>
          </div>

          <nav className="mt-12 flex flex-wrap gap-x-9 gap-y-4">
            {footerLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="border-b border-white/35 pb-1 text-[1.1rem] font-medium tracking-[-0.03em] text-white/72 transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="relative mt-20 min-h-[280px]">
          <div className="pointer-events-none absolute inset-x-0 bottom-0 select-none">
            <div className="flex items-end gap-4 text-[clamp(4.2rem,16vw,15rem)] font-semibold leading-none tracking-[-0.09em] text-white/[0.05]">
              <span className="shrink-0">Zaferson</span>
              <span className="shrink-0">&amp;</span>
              <span className="shrink-0">Guzman</span>
            </div>
          </div>

          <div className="relative z-10 flex min-h-[280px] flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-[720px]">
              <p className="text-sm leading-7 text-white/72 sm:text-base">
                © Copyright 2026 Zaferson &amp; Guzman
                <span className="mx-3 text-white/34">|</span>
                <Link href="#terminos" className="border-b border-white/35 pb-0.5 hover:text-white">
                  Terminos y condiciones
                </Link>
                <span className="mx-3 text-white/34">|</span>
                <Link href="#privacidad" className="border-b border-white/35 pb-0.5 hover:text-white">
                  Politica de privacidad
                </Link>
                <span className="mx-3 text-white/34">|</span>
                <Link href="#cookies" className="border-b border-white/35 pb-0.5 hover:text-white">
                  Gestionar cookies
                </Link>
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {trustItems.map((item) => (
                <div
                  key={item.title}
                  className="min-w-[148px] rounded-[1.15rem] border border-white/12 bg-white/[0.03] px-4 py-4"
                >
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-white/52">
                    {item.title}
                  </p>
                  <p className="mt-2 text-sm font-medium leading-6 text-white/84">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
