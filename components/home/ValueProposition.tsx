'use client';

import { useTranslations } from 'next-intl';
import { Link2, TrendingDown, Globe } from 'lucide-react';
import ScrollAnimation from '@/components/ui/ScrollAnimation';

const icons = [Link2, TrendingDown, Globe];
const keys = ['directAccess', 'pricing', 'logistics'] as const;

export default function ValueProposition() {
  const t = useTranslations('valueProps');

  return (
    <section className="bg-white section-padding">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimation>
          <div className="text-center mb-14">
            <h2 className="font-inter text-3xl md:text-4xl font-bold text-navy">{t('title')}</h2>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-3 gap-8">
          {keys.map((key, i) => {
            const Icon = icons[i];
            return (
              <ScrollAnimation key={key} delay={i * 0.15}>
                <div className="group p-8 rounded-2xl border border-gray-100 hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5 transition-all duration-300 h-full">
                  <div className="w-14 h-14 rounded-xl bg-navy flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-gold" />
                  </div>
                  <h3 className="font-inter text-xl font-bold text-navy mb-3">
                    {t(`${key}.title`)}
                  </h3>
                  <p className="text-gray-500 leading-relaxed">{t(`${key}.description`)}</p>
                </div>
              </ScrollAnimation>
            );
          })}
        </div>
      </div>
    </section>
  );
}
