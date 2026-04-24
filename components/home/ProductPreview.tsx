'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { ArrowRight, FlaskConical, CheckCircle } from 'lucide-react';
import ScrollAnimation from '@/components/ui/ScrollAnimation';

export default function ProductPreview() {
  const t = useTranslations('productPreview');
  const locale = useLocale();
  const getHref = (path: string) => locale === 'es' ? path : `/${locale}${path}`;

  return (
    <section className="bg-navy section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: content */}
          <ScrollAnimation>
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full border border-gold/30 text-gold text-sm font-medium mb-6 bg-gold/10">
                {t('tag')}
              </span>
              <h2 className="font-inter text-4xl md:text-5xl font-bold text-white mb-4">
                {t('title')}
              </h2>
              <p className="text-white/60 text-lg mb-8">{t('subtitle')}</p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { label: t('purity'), value: '99.85% min.' },
                  { label: t('grade'), value: 'ASTM AA' },
                  { label: t('terms'), value: 'FOB & CIF' },
                  { label: t('delivery'), value: t('deliveryValue') },
                ].map((item, i) => (
                  <div key={i} className="glass rounded-xl p-4 border border-gold/10">
                    <p className="text-white/40 text-xs mb-1">{item.label}</p>
                    <p className="text-white font-inter font-bold text-sm">{item.value}</p>
                  </div>
                ))}
              </div>

              <Link
                href={getHref('/product')}
                className="group inline-flex items-center gap-2 px-6 py-3.5 bg-gold text-navy font-inter font-bold rounded-xl hover:bg-gold-light transition-all hover:-translate-y-0.5 shadow-lg shadow-gold/20"
              >
                {t('cta')}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </ScrollAnimation>

          {/* Right: product card */}
          <ScrollAnimation delay={0.2}>
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 bg-gold/10 rounded-3xl blur-2xl scale-110" />

              <div className="relative glass rounded-3xl border border-gold/20 p-8 overflow-hidden">
                {/* Background pattern */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-gold/5 rounded-full translate-y-1/2 -translate-x-1/2" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-6">
                    <FlaskConical className="w-8 h-8 text-gold" />
                  </div>

                  {/* Formula */}
                  <div className="flex items-baseline gap-3 mb-2">
                    <h3 className="font-inter text-3xl font-bold text-white">Methanol</h3>
                  </div>
                  <div className="font-mono text-5xl font-bold text-gold/80 mb-6">CH₃OH</div>

                  {/* Specs */}
                  <div className="space-y-3">
                    {[
                      'Purity: 99.85% min. (ASTM AA)',
                      'Clear, colorless liquid',
                      'Density: 0.791 g/cm³',
                      'Boiling Point: 64.7°C',
                      'FOB & CIF Available',
                    ].map((spec, i) => (
                      <div key={i} className="flex items-center gap-2.5">
                        <CheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
                        <span className="text-white/65 text-sm">{spec}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tag */}
                  <div className="mt-6 pt-6 border-t border-gold/10">
                    <div className="flex flex-wrap gap-2">
                      {['Industrial Grade', 'Premium Quality', 'ASTM Certified'].map((tag) => (
                        <span key={tag} className="px-3 py-1 rounded-full bg-gold/10 text-gold text-xs font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
