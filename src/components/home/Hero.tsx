'use client';

import { useRef, useState } from 'react';
import { Pause, Play } from '@phosphor-icons/react/ssr';

const HERO_VIDEO_SRC = 'https://res.cloudinary.com/dhkb93mix/video/upload/v1774383587/198890-909564521_smc77f.mp4';
const HERO_POSTER_SRC =
  'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80';

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  function togglePlayback() {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    if (video.paused) {
      void video.play();
      setIsPlaying(true);
      return;
    }

    video.pause();
    setIsPlaying(false);
  }

  return (
    <section className="relative min-h-[720px] overflow-hidden rounded-[1.9rem] bg-black text-white shadow-[0_30px_90px_rgba(0,0,0,0.18)]">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster={HERO_POSTER_SRC}
        className="absolute inset-0 h-full w-full object-cover object-center"
      >
        <source src={HERO_VIDEO_SRC} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.38)_0%,rgba(0,0,0,0.12)_28%,rgba(0,0,0,0.28)_58%,rgba(0,0,0,0.82)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_44%,rgba(0,0,0,0.32),transparent_30%),radial-gradient(circle_at_64%_28%,rgba(122,122,122,0.22),transparent_18%)]" />

      <div className="relative z-10 flex min-h-[720px] flex-col px-5 pb-8 pt-28 sm:px-8 sm:pb-10 sm:pt-32 lg:px-14 lg:pb-14 lg:pt-40">
        <div className="mt-auto flex max-w-[1120px] flex-1 flex-col justify-end">
          <h1 className="max-w-[10.5ch] text-[clamp(3.35rem,7vw,6.85rem)] font-semibold leading-[0.92] tracking-[-0.075em] text-white">
            Soluciones legales efectivas en Penal, Civil y Familia
          </h1>

          <div className="mt-12 border-t border-white/20 pt-6">
            <div className="flex items-end justify-between gap-6">
              <p className="max-w-[58rem] text-sm font-semibold tracking-[-0.03em] text-white/92 sm:text-lg">
                Asesoria estrategica personalizada, defensa solida y acompanamiento
                juridico para personas y empresas que necesitan respuestas claras y
                accion inmediata.
              </p>

              <button
                type="button"
                aria-label={isPlaying ? 'Pause hero video' : 'Play hero video'}
                aria-pressed={!isPlaying}
                onClick={togglePlayback}
                className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/24 bg-white/8 text-white backdrop-blur-sm transition hover:bg-white/14"
              >
                {isPlaying ? <Pause size={18} weight="fill" /> : <Play size={18} weight="fill" />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
