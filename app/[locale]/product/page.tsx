'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { CheckCircle, Download, Ship, Anchor, FlaskConical } from 'lucide-react';
import RFQForm from '@/components/RFQForm';
import ScrollAnimation from '@/components/ui/ScrollAnimation';

export default function ProductPage() {
  const t = useTranslations('product');

  const specs = [
    { key: 'purity', value: t('values.purity') },
    { key: 'appearance', value: t('values.appearance') },
    { key: 'density', value: t('values.density') },
    { key: 'boilingPoint', value: t('values.boilingPoint') },
    { key: 'waterContent', value: t('values.waterContent') },
    { key: 'flashPoint', value: t('values.flashPoint') },
    { key: 'grade', value: t('values.grade') },
  ] as const;

  const applications = t.raw('applications') as string[];

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] bg-navy flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-hero-gradient opacity-80" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-gold/10 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-gold/30 text-gold text-sm font-medium mb-6 bg-gold/10">
              {t('tag')}
            </span>
            <h1 className="font-inter text-6xl md:text-8xl font-bold text-white mb-4">
              {t('title')}
            </h1>
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="text-gold text-3xl md:text-4xl font-mono font-bold tracking-widest">
                CH₃OH
              </span>
            </div>
            <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto">
              {t('subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="bg-bgLight section-padding">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <h2 className="font-inter text-3xl md:text-4xl font-bold text-navy mb-4">
                {t('specsTitle')}
              </h2>
              <p className="text-gray-600 text-lg">{t('specsSubtitle')}</p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={0.2}>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
              <div className="bg-navy px-6 py-4 flex items-center gap-3">
                <FlaskConical className="w-5 h-5 text-gold" />
                <span className="text-white font-inter font-semibold">
                  ASTM Grade AA — Methanol (CH₃OH)
                </span>
              </div>
              <div className="divide-y divide-gray-100">
                {specs.map((spec, i) => (
                  <motion.div
                    key={spec.key}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 px-6 py-4 hover:bg-bgLight transition-colors"
                  >
                    <span className="font-inter font-semibold text-navy">
                      {t(`specs.${spec.key}`)}
                    </span>
                    <span className="text-gray-700 font-mono">{spec.value}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollAnimation>

          {/* Download placeholder */}
          <ScrollAnimation delay={0.3}>
            <div className="mt-8 flex justify-center">
              <a
                href="/icons/Hoja-de-Datos-Tecnicos.pdf"
                download="TrustTrade-Methanol-DataSheet.pdf"
                className="flex items-center gap-2 px-6 py-3 border-2 border-navy text-navy rounded-xl font-semibold hover:bg-navy hover:text-white transition-all duration-300 group"
              >
                <Download className="w-5 h-5 group-hover:text-gold transition-colors" />
                {t('downloadSpec')}
              </a>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Delivery Terms */}
      <section className="bg-navy section-padding">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimation>
            <h2 className="font-inter text-3xl md:text-4xl font-bold text-white text-center mb-12">
              {t('termsTitle')}
            </h2>
          </ScrollAnimation>
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollAnimation delay={0.1}>
              <div className="glass rounded-2xl p-8 border border-gold/20 hover:border-gold/40 transition-all group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    <Anchor className="w-7 h-7 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-inter text-2xl font-bold text-gold">{t('fobTitle')}</h3>
                    <span className="text-white/50 text-sm">Free On Board</span>
                  </div>
                </div>
                <p className="text-white/70 leading-relaxed">{t('fobDesc')}</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={0.2}>
              <div className="glass rounded-2xl p-8 border border-gold/20 hover:border-gold/40 transition-all group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    <Ship className="w-7 h-7 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-inter text-2xl font-bold text-gold">{t('cifTitle')}</h3>
                    <span className="text-white/50 text-sm">Cost, Insurance & Freight</span>
                  </div>
                </div>
                <p className="text-white/70 leading-relaxed">{t('cifDesc')}</p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="bg-white section-padding">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimation>
            <h2 className="font-inter text-3xl md:text-4xl font-bold text-navy text-center mb-12">
              {t('applicationsTitle')}
            </h2>
          </ScrollAnimation>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {applications.map((app, i) => (
              <ScrollAnimation key={i} delay={i * 0.08}>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-bgLight border border-transparent hover:border-gold/30 hover:bg-gold/5 transition-all group">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                  <span className="font-medium text-navy">{app}</span>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* RFQ Form */}
      <section className="bg-navy section-padding" id="rfq">
        <div className="max-w-4xl mx-auto">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <h2 className="font-inter text-3xl md:text-4xl font-bold text-white mb-4">
                {t('rfqTitle')}
              </h2>
              <p className="text-white/60 text-lg">{t('rfqSubtitle')}</p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation delay={0.2}>
            <div className="glass rounded-2xl p-8">
              <RFQForm />
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </>
  );
}
