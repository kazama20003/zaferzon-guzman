import Image from 'next/image';
import { cn } from '@/lib/utils';

export function BrandMark({
  scrolled = false,
  hideTextOnMobile = false,
}: {
  scrolled?: boolean;
  hideTextOnMobile?: boolean;
}) {
  return (
    <div className="flex items-center gap-3" aria-label="Zaferson y Guzman">
      <Image
        src="https://res.cloudinary.com/dhkb93mix/image/upload/v1774398747/zg-icon-logo_jp1xly.svg"
        alt="Zaferson y Guzman"
        width={64}
        height={64}
        unoptimized
        className={cn(
          'h-12 w-auto shrink-0 transition duration-500 sm:h-14',
          scrolled ? 'brightness-0' : 'brightness-0 invert'
        )}
      />
      <span
        className={cn(
          'text-2xl font-semibold tracking-[-0.04em] transition-colors duration-500 sm:text-3xl',
          hideTextOnMobile && 'hidden sm:inline',
          scrolled ? 'text-black' : 'text-white'
        )}
      >
        zaferson & guzman
      </span>
    </div>
  );
}
