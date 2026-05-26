'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { BookOpen, ChevronRight } from 'lucide-react';
import ScrollAnimation from '@/components/ui/ScrollAnimation';

export default function RecursosContent() {
  const t = useTranslations('recursos');
  const terms = t.raw('terms') as Array<{ term: string; definition: string }>;

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[45vh] bg-navy flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-hero-gradient opacity-80" />
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-gold/8 rounded-full blur-3xl" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-gold/30 text-gold text-sm font-medium mb-6 bg-gold/10">
              {t('heroTag')}
            </span>
            <h1 className="font-inter text-4xl md:text-5xl font-bold text-white mb-6">
              {t('heroTitle')}
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto">{t('heroSubtitle')}</p>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-gold/5 border-b border-gold/10 py-6">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gray-700 text-base leading-relaxed">{t('introText')}</p>
        </div>
      </section>

      {/* Glossary Terms */}
      <section className="bg-white section-padding">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {terms.map((item, i) => (
              <ScrollAnimation key={i} delay={i * 0.04}>
                <article className="bg-bgLight rounded-2xl p-6 border border-gray-100 hover:border-gold/30 hover:shadow-md transition-all group">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-navy flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                      <BookOpen className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h2 className="font-inter text-lg font-bold text-navy mb-2 flex items-center gap-2">
                        <ChevronRight className="w-4 h-4 text-gold" />
                        {item.term}
                      </h2>
                      <p className="text-gray-600 leading-relaxed text-sm md:text-base">{item.definition}</p>
                    </div>
                  </div>
                </article>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
