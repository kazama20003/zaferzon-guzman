'use client';

import { ReactLenis } from 'lenis/react';

export function SmoothScrollProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactLenis
      root
      options={{
        autoRaf: true,
        smoothWheel: true,
        duration: 1.35,
        easing: (t: number) => 1 - Math.pow(1 - t, 3),
        wheelMultiplier: 0.92,
        touchMultiplier: 1,
        syncTouch: false,
        anchors: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}
