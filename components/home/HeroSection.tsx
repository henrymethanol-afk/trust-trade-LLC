'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

// Add your own images to /public/images/ and list them here.
// Use professional industrial/port/chemical imagery (1920×1080 or wider).
const slides = [
  { src: '/images/hero-bg-1.jpeg', kenBurns: 'ken-burns' },
  { src: '/images/hero-bg-2.jpeg', kenBurns: 'ken-burns-alt' },
  { src: '/images/hero-bg-3.jpeg', kenBurns: 'ken-burns' },
];

const SLIDE_DURATION = 6000; // ms each slide stays visible
const CROSSFADE_DURATION = 1.4; // seconds

export default function HeroSection() {
  const t = useTranslations('hero');
  const locale = useLocale();
  const [current, setCurrent] = useState(0);
  const getHref = (path: string) => locale === 'es' ? path : `/${locale}${path}`;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(c => (c + 1) % slides.length);
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, []);

  const scrollToNext = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen bg-navy flex items-center justify-center overflow-hidden">

      {/* ── Background slideshow ── */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: CROSSFADE_DURATION, ease: 'easeInOut' }}
            className={`absolute inset-0 bg-center bg-cover animate-${slides[current].kenBurns}`}
            style={{ backgroundImage: `url('${slides[current].src}')` }}
          />
        </AnimatePresence>
      </div>

      {/* Slide dots */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`transition-all duration-500 rounded-full ${
              i === current
                ? 'w-6 h-1.5 bg-gold'
                : 'w-1.5 h-1.5 bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Dark overlay — keeps text readable over any photo */}
      <div className="absolute inset-0 z-[1] bg-navy/65" />
      {/* Extra gradient at top and bottom */}
      <div className="absolute inset-0 z-[1] bg-hero-gradient opacity-40" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-navy to-transparent z-[2]" />

      {/* Ambient glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl z-[1]" />
      <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl z-[1]" />

      {/* ── Content ── */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-gold/30 bg-gold/10 text-gold text-sm font-medium backdrop-blur-sm">
            <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse" />
            Methanol Trading · FOB & CIF · Global
          </span>
        </motion.div>

        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-inter text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] mb-8"
        >
          {t('title').split('.').map((part, i, arr) => (
            <span key={i}>
              {part.trim()}
              {i < arr.length - 1 && (
                <>
                  <span className="text-gold">.</span>
                  <br />
                </>
              )}
            </span>
          ))}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-white/70 text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          {t('subtitle')}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href={getHref('/contact')}
            className="group flex items-center gap-2 px-8 py-4 bg-gold text-navy font-inter font-bold text-lg rounded-2xl hover:bg-gold-light transition-all duration-300 shadow-xl shadow-gold/20 hover:shadow-gold/40 hover:-translate-y-1"
          >
            {t('ctaQuote')}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href={getHref('/how-it-works')}
            className="flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-inter font-semibold text-lg rounded-2xl hover:border-white/60 hover:bg-white/5 transition-all duration-300 backdrop-blur-sm"
          >
            {t('ctaHowItWorks')}
          </Link>
        </motion.div>

        {/* Chemical formula badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-16 flex justify-center"
        >
          <div className="flex items-center gap-3 px-5 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center">
              <span className="text-gold text-xs">⚗</span>
            </div>
            <span className="text-white/50 text-sm">
              Methanol <span className="text-white/80 font-mono">CH₃OH</span> · ASTM Grade AA · Purity ≥99.85%
            </span>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/30 hover:text-white/60 transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-6 h-6" />
      </motion.button>
    </section>
  );
}
