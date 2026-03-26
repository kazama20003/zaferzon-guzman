'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowRight, List, MagnifyingGlass, X } from '@phosphor-icons/react';
import { CONTACT_PATH, WHATSAPP_HREF } from '@/lib/site';
import { cn } from '@/lib/utils';
import { BrandMark } from './BrandMark';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const homeHrefPrefix = pathname === '/' ? '' : '/';

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = isMenuOpen ? 'hidden' : '';
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';

    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const navItems = [
    { label: 'Quienes somos', href: '/about' },
    { label: 'Servicios', href: '/services' },
    { label: 'Contacto', href: CONTACT_PATH },
  ];

  const sectionMenuItems = [
    { label: 'Inicio', href: `${homeHrefPrefix}#inicio` },
    { label: 'Problemas', href: `${homeHrefPrefix}#what-we-do` },
    { label: 'Servicios', href: `${homeHrefPrefix}#servicios` },
    { label: 'Procesos', href: `${homeHrefPrefix}#procesos` },
    { label: 'Equipo', href: `${homeHrefPrefix}#equipo` },
    { label: 'Resenas', href: `${homeHrefPrefix}#resenas` },
    { label: 'Contacto', href: CONTACT_PATH },
  ];

  const pagesMenuItems = [
    { label: 'Quienes somos', href: '/about' },
    { label: 'Servicios', href: '/services' },
    { label: 'Contacto', href: CONTACT_PATH },
  ];

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-5 pt-5 sm:px-8 sm:pt-6 lg:px-14">
        <div
          className={cn(
            'mx-auto max-w-[1710px] rounded-[1.6rem] border px-4 py-3 transition-all duration-300 sm:px-6 lg:px-8',
            isScrolled
              ? 'border-black/8 bg-white/94 shadow-[0_18px_45px_rgba(0,0,0,0.08)] backdrop-blur-xl'
              : 'border-transparent bg-transparent shadow-none'
          )}
        >
          <div className="grid grid-cols-[auto_1fr_auto] items-center gap-2 sm:gap-3 lg:gap-8">
            <div className="flex items-center gap-3 lg:gap-7">
              <button
                type="button"
                aria-label="Open navigation"
                onClick={() => setIsMenuOpen(true)}
                className={cn(
                  'inline-flex h-10 w-10 items-center justify-center rounded-full border transition duration-300 sm:h-11 sm:w-11',
                  isScrolled
                    ? 'border-black/10 bg-black/[0.04] text-black hover:bg-black/[0.08]'
                    : 'border-white/14 bg-black/12 text-white hover:bg-black/24'
                )}
              >
                <List size={22} weight="regular" />
              </button>

              <nav className="hidden items-center gap-8 lg:flex">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={cn(
                      'flex items-start gap-2 text-lg font-semibold tracking-[-0.03em] transition-colors duration-300',
                      isScrolled ? 'text-black' : 'text-white'
                    )}
                  >
                    <span>{item.label}</span>
                  </Link>
                ))}
              </nav>
            </div>

            <div className="flex justify-center">
              <Link href="/">
                <BrandMark scrolled={isScrolled} hideTextOnMobile />
              </Link>
            </div>

            <div className="flex items-center justify-end gap-2 sm:gap-4">
              <Link
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  'inline-flex h-11 items-center gap-2 rounded-full px-4 text-xs font-semibold tracking-[-0.02em] transition duration-300 sm:h-14 sm:px-8 sm:text-base',
                  'bg-black text-white',
                  isScrolled
                    ? 'shadow-[0_14px_30px_rgba(0,0,0,0.12)] hover:bg-[#1a1a1a]'
                    : 'shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] hover:bg-[#1a1a1a]'
                )}
              >
                <span className="hidden sm:inline">Solicitar Informacion</span>
                <span className="sm:hidden">Informacion</span>
                <ArrowRight size={18} className="text-secondary" />
              </Link>

              <button
                type="button"
                aria-label="Search"
                className={cn(
                  'hidden h-11 w-11 items-center justify-center rounded-full border transition duration-300 lg:inline-flex',
                  isScrolled
                    ? 'border-black/10 bg-black/[0.04] text-black hover:bg-black/[0.08]'
                    : 'border-white/14 bg-black/12 text-white hover:bg-black/24'
                )}
              >
                <MagnifyingGlass size={22} weight="regular" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div
        className={cn(
          'fixed inset-0 z-[70] transition duration-300',
          isMenuOpen ? 'pointer-events-auto bg-black/34' : 'pointer-events-none bg-black/0'
        )}
        onClick={() => setIsMenuOpen(false)}
      />

      <aside
        className={cn(
          'fixed left-0 top-0 z-[80] h-full w-full max-w-[420px] overflow-y-auto border-r border-black/8 bg-[#fbfbf8] px-6 py-6 shadow-[0_18px_50px_rgba(0,0,0,0.16)] transition-transform duration-300 will-change-transform sm:px-8',
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        )}
        aria-hidden={!isMenuOpen}
      >
        <div className="flex items-center justify-between gap-4 border-b border-border/80 pb-5">
          <Link href="/" onClick={() => setIsMenuOpen(false)}>
            <BrandMark scrolled />
          </Link>
          <button
            type="button"
            aria-label="Close navigation"
            onClick={() => setIsMenuOpen(false)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-black/[0.04] text-black transition hover:bg-black/[0.08]"
          >
            <X size={20} />
          </button>
        </div>

        <div className="mt-8 space-y-10">
          <div>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-[var(--text-soft)]">
              Secciones del inicio
            </p>
            <div className="mt-5 divide-y divide-border/80 rounded-[1.7rem] border border-border/70 bg-white px-5">
              {sectionMenuItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-between py-5 text-[1.05rem] font-semibold tracking-[-0.04em] text-foreground transition hover:pl-1"
                >
                  <span>{item.label}</span>
                  <ArrowRight size={16} className="text-secondary" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-[var(--text-soft)]">
              Paginas
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {pagesMenuItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-between rounded-[1.25rem] border border-border/75 bg-white px-5 py-4 text-sm font-semibold tracking-[-0.03em] text-foreground transition hover:border-black"
                >
                  <span>{item.label}</span>
                  <ArrowRight size={16} className="text-secondary" />
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-[1.6rem] border border-black/8 bg-black p-6 text-white shadow-[0_18px_50px_rgba(0,0,0,0.18)]">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-white/52">
              Consulta directa
            </p>
            <p className="mt-4 text-[1.15rem] font-medium leading-8 text-white/82">
              Si necesitas orientacion inmediata, accede al canal de contacto y agenda
              una asesoria.
            </p>
            <Link
              href={CONTACT_PATH}
              onClick={() => setIsMenuOpen(false)}
              className="mt-6 inline-flex h-12 items-center gap-3 rounded-full bg-white px-5 text-sm font-semibold text-black transition hover:bg-[#efefef]"
            >
              Ir a contacto
              <ArrowRight size={16} className="text-secondary" />
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}
