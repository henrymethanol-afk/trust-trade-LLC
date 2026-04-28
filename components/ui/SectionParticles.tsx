'use client';

import { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { ISourceOptions } from '@tsparticles/engine';

const options: ISourceOptions = {
  background: { color: { value: 'transparent' } },
  fpsLimit: 50,
  particles: {
    color: { value: '#C9A84C' },
    links: {
      color: '#C9A84C',
      distance: 160,
      enable: true,
      opacity: 0.1,
      width: 1,
    },
    move: {
      enable: true,
      speed: 0.6,
      direction: 'none',
      outModes: { default: 'bounce' },
      random: true,
      straight: false,
    },
    number: { density: { enable: true }, value: 50 },
    opacity: { value: 0.2 },
    shape: { type: 'circle' },
    size: { value: { min: 1, max: 2.5 } },
  },
  detectRetina: true,
};

let engineReady = false;
let enginePromise: Promise<void> | null = null;

export default function SectionParticles({ id }: { id: string }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (engineReady) { setReady(true); return; }
    if (!enginePromise) {
      enginePromise = initParticlesEngine(async (engine) => {
        await loadSlim(engine);
      });
    }
    enginePromise.then(() => {
      engineReady = true;
      setReady(true);
    });
  }, []);

  if (!ready) return null;

  return (
    <Particles
      id={id}
      className="absolute inset-0 z-0 pointer-events-none"
      options={options}
    />
  );
}
