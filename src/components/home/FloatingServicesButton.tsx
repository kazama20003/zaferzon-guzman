'use client';

import Link from 'next/link';
import { ArrowRight, Lightning } from '@phosphor-icons/react/ssr';

export function FloatingServicesButton() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-5 z-40 flex justify-center px-4 sm:bottom-7">
      <Link
        href="/services"
        className="service-pill pointer-events-auto inline-flex items-center gap-3 rounded-full bg-[#221f1f] px-4 py-3 text-white shadow-[0_18px_45px_rgba(0,0,0,0.18)] transition-transform duration-300 hover:-translate-y-0.5"
      >
        <span className="service-pill__icon inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#ef233c] text-white">
          <Lightning size={18} weight="fill" />
        </span>

        <span className="service-pill__label flex items-center gap-3">
          <span className="text-base font-semibold tracking-[-0.03em]">Servicios</span>
          <ArrowRight size={18} className="text-[#ef233c]" />
        </span>
      </Link>
    </div>
  );
}
