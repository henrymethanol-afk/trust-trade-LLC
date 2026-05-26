'use client';

import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import {
  MessageSquare, FileText, Pen, Truck, CheckCircle, ChevronDown,
} from 'lucide-react';
import ScrollAnimation from '@/components/ui/ScrollAnimation';
import SectionParticles from '@/components/ui/SectionParticles';

const stepIcons = [MessageSquare, FileText, Pen, Truck];

export default function HowItWorksPage() {
  const t = useTranslations('howItWorks');
  const steps = t.raw('steps') as Array<{ title: string; description: string; details: string[] }>;
  const faqs = t.raw('faqs') as Array<{ q: string; a: string }>;
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] bg-navy flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-hero-gradient opacity-80" />
        <div className="absolute top-1/4 right-1/3 w-64 h-64 bg-gold/8 rounded-full blur-3xl" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-gold/30 text-gold text-sm font-medium mb-6 bg-gold/10">
              {t('heroTag')}
            </span>
            <h1 className="font-inter text-4xl md:text-6xl font-bold text-white mb-6">
              {t('heroTitle')}
            </h1>
            <p className="text-white/70 text-lg md:text-xl">{t('heroSubtitle')}</p>
          </motion.div>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-white section-padding">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 text-gold text-sm font-medium mb-4">
                {t('stepsTag')}
              </span>
              <h2 className="font-inter text-3xl md:text-4xl font-bold text-navy mb-4">
                {t('stepsTitle')}
              </h2>
              <p className="text-gray-600 text-lg">{t('stepsSubtitle')}</p>
            </div>
          </ScrollAnimation>

          <div className="relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold/0 via-gold/30 to-gold/0 -translate-x-1/2" />

            <div className="space-y-16">
              {steps.map((step, i) => {
                const Icon = stepIcons[i];
                const isEven = i % 2 === 0;
                return (
                  <ScrollAnimation key={i} delay={i * 0.15}>
                    <div className={`flex flex-col md:flex-row items-center gap-8 ${isEven ? '' : 'md:flex-row-reverse'}`}>
                      {/* Content */}
                      <div className="flex-1 w-full">
                        <div className={`bg-bgLight rounded-2xl p-8 border border-gray-100 hover:border-gold/30 hover:shadow-md transition-all ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                          <h3 className="font-inter text-xl font-bold text-navy mb-3">
                            {step.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed mb-4">{step.description}</p>
                          <ul className={`space-y-2 ${isEven ? 'md:flex md:flex-col md:items-end' : ''}`}>
                            {step.details.map((detail, j) => (
                              <li key={j} className={`flex items-center gap-2 text-sm text-gray-500 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                                <CheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Step badge */}
                      <div className="relative z-10 flex-shrink-0">
                        <div className="w-20 h-20 rounded-full bg-navy border-4 border-gold/30 flex flex-col items-center justify-center shadow-lg">
                          <Icon className="w-7 h-7 text-gold" />
                          <span className="text-gold text-xs font-bold">{i + 1}</span>
                        </div>
                      </div>

                      {/* Empty spacer for alignment */}
                      <div className="flex-1 hidden md:block" />
                    </div>
                  </ScrollAnimation>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-navy section-padding relative overflow-hidden">
        <SectionParticles id="particles-hiw" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full border border-gold/30 text-gold text-sm font-medium mb-4 bg-gold/10">
                {t('faqTag')}
              </span>
              <h2 className="font-inter text-3xl md:text-4xl font-bold text-white mb-4">
                {t('faqTitle')}
              </h2>
              <p className="text-white/60 text-lg">{t('faqSubtitle')}</p>
            </div>
          </ScrollAnimation>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <ScrollAnimation key={i} delay={i * 0.05}>
                <div className="glass rounded-xl border border-gold/10 overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-white/5 transition-colors"
                  >
                    <span className="font-inter font-semibold text-white pr-4">{faq.q}</span>
                    <motion.div
                      animate={{ rotate: openFaq === i ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown className="w-5 h-5 text-gold" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-5 text-white/65 leading-relaxed border-t border-gold/10 pt-4">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
