'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ScrollAnimation from '@/components/ui/ScrollAnimation';

export default function FinalCTA() {
  const t = useTranslations('finalCta');
  const locale = useLocale();
  const getHref = (path: string) => locale === 'es' ? path : `/${locale}${path}`;

  return (
    <section className="relative overflow-hidden py-24 px-4">
      {/* Gold gradient bg */}
      <div className="absolute inset-0 bg-gold-gradient" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.15)_0%,transparent_70%)]" />

      {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <ScrollAnimation>
          <h2 className="font-inter text-3xl md:text-5xl font-bold text-navy mb-4">
            {t('title')}
          </h2>
          <p className="text-navy/70 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
          <Link
            href={getHref('/contact')}
            className="group inline-flex items-center gap-2 px-8 py-4 bg-navy text-white font-inter font-bold text-lg rounded-2xl hover:bg-navy-light transition-all duration-300 shadow-xl shadow-navy/30 hover:-translate-y-1"
          >
            {t('cta')}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </ScrollAnimation>
      </div>
    </section>
  );
}
