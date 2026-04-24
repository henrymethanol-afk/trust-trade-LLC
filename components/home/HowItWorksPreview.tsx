'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { ArrowRight, MessageSquare, FileText, Pen, Truck } from 'lucide-react';
import ScrollAnimation from '@/components/ui/ScrollAnimation';

const stepIcons = [MessageSquare, FileText, Pen, Truck];

export default function HowItWorksPreview() {
  const t = useTranslations('howItWorksPreview');
  const locale = useLocale();
  const steps = t.raw('steps') as Array<{ title: string; description: string }>;
  const getHref = (path: string) => locale === 'es' ? path : `/${locale}${path}`;

  return (
    <section className="bg-bgLight section-padding">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimation>
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 text-gold text-sm font-medium mb-4">
              {t('tag')}
            </span>
            <h2 className="font-inter text-3xl md:text-4xl font-bold text-navy mb-4">{t('title')}</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">{t('subtitle')}</p>
          </div>
        </ScrollAnimation>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 relative">
          {/* Connecting line desktop */}
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

          {steps.map((step, i) => {
            const Icon = stepIcons[i];
            return (
              <ScrollAnimation key={i} delay={i * 0.12}>
                <div className="relative bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:border-gold/30 hover:shadow-md transition-all group h-full">
                  {/* Step number */}
                  <div className="relative z-10 flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center group-hover:bg-gold/10 transition-colors border-2 border-gold/20 group-hover:border-gold/40">
                      <Icon className="w-5 h-5 text-gold" />
                    </div>
                    <span className="font-inter text-2xl font-bold text-gold/40 group-hover:text-gold/60 transition-colors">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="font-inter text-base font-bold text-navy mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
                </div>
              </ScrollAnimation>
            );
          })}
        </div>

        <ScrollAnimation delay={0.4}>
          <div className="text-center">
            <Link
              href={getHref('/how-it-works')}
              className="group inline-flex items-center gap-2 px-6 py-3 border-2 border-navy text-navy font-inter font-semibold rounded-xl hover:bg-navy hover:text-white transition-all"
            >
              {t('cta')}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
