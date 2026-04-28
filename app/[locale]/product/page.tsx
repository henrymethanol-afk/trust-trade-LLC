'use client';

import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { CheckCircle, Download, Ship, Anchor, FlaskConical, Waves, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import RFQForm from '@/components/RFQForm';
import ScrollAnimation from '@/components/ui/ScrollAnimation';

const otherCommodities = [
  { name: 'Diesel / ULSD',      tag: 'Ultra Low Sulfur',   image: '/images/commodities/diesel.jpg',      accent: 'from-amber-900/80' },
  { name: 'Fuel Oil',           tag: 'Industrial & Heating', image: '/images/commodities/fuel-oil.jpg',   accent: 'from-stone-900/80' },
  { name: 'Marine Fuel',        tag: 'Bunker & VLSFO',     image: '/images/commodities/marine-fuel.jpg', accent: 'from-blue-950/80'  },
  { name: 'Jet Fuel / Jet A-1', tag: 'Aviation Grade',     image: '/images/commodities/jet-fuel.jpg',    accent: 'from-sky-900/80'   },
  { name: 'Asphalt / Bitumen',  tag: 'Road & Industrial',  image: '/images/commodities/asphalt.jpg',     accent: 'from-neutral-900/80' },
  { name: 'Lubricants',         tag: 'Industrial Grade',   image: '/images/commodities/lubricants.jpg',  accent: 'from-zinc-800/80'  },
];

export default function ProductPage() {
  const t = useTranslations('product');
  const locale = useLocale();

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
          <div className="grid md:grid-cols-3 gap-8">
            <ScrollAnimation delay={0.1}>
              <div className="glass rounded-2xl p-8 border border-gold/20 hover:border-gold/40 transition-all group h-full">
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
              <div className="glass rounded-2xl p-8 border border-gold/20 hover:border-gold/40 transition-all group h-full">
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
            <ScrollAnimation delay={0.3}>
              <div className="glass rounded-2xl p-8 border border-gold/20 hover:border-gold/40 transition-all group h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    <Waves className="w-7 h-7 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-inter text-2xl font-bold text-gold">{t('tankerTitle')}</h3>
                    <span className="text-white/50 text-sm">Full Charter</span>
                  </div>
                </div>
                <p className="text-white/70 leading-relaxed">{t('tankerDesc')}</p>
                <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold/10 border border-gold/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                  <span className="text-gold text-xs font-medium">{t('tankerNote')}</span>
                </div>
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

      {/* Our Commodities */}
      <section className="bg-navy section-padding">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimation>
            <div className="text-center mb-10">
              <span className="inline-block px-4 py-1.5 rounded-full border border-gold/30 text-gold text-sm font-medium mb-5 bg-gold/10">
                Full Trading Portfolio
              </span>
              <h2 className="font-inter text-3xl md:text-4xl font-bold text-white mb-3">
                Our Commodities
              </h2>
              <p className="text-white/50 text-lg max-w-2xl mx-auto">
                Beyond methanol, we source and trade across the full energy spectrum — refined fuels, petrochemicals and more.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {otherCommodities.map((c, i) => (
              <ScrollAnimation key={c.name} delay={i * 0.07}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="relative rounded-2xl overflow-hidden group"
                  style={{ aspectRatio: '4/3' }}
                >
                  <div
                    className="absolute inset-0 bg-center bg-cover transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url('${c.image}')` }}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${c.accent} to-navy`} />
                  <div className="absolute inset-0 bg-navy/55 group-hover:bg-navy/40 transition-colors duration-500" />
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gold/40 transition-colors duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="font-inter font-bold text-white text-sm md:text-base leading-tight mb-1.5 group-hover:-translate-y-0.5 transition-transform duration-300">
                      {c.name}
                    </p>
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-gold/20 border border-gold/30 text-gold text-xs font-medium">
                      {c.tag}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Link
                      href={locale === 'es' ? '/contact' : `/${locale}/contact`}
                      className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-gold text-navy text-xs font-bold shadow-lg"
                    >
                      Inquire <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </motion.div>
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
