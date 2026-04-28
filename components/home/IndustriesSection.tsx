'use client';

import { useTranslations } from 'next-intl';
import { FlaskConical, Zap, BarChart3, Factory, Wrench } from 'lucide-react';
import ScrollAnimation from '@/components/ui/ScrollAnimation';
import SectionParticles from '@/components/ui/SectionParticles';

const icons = [FlaskConical, Zap, BarChart3, Factory, Wrench];

export default function IndustriesSection() {
  const t = useTranslations('industries');
  const items = t.raw('items') as Array<{ title: string; description: string }>;

  return (
    <section className="bg-navy section-padding relative overflow-hidden">
      <SectionParticles id="particles-industries" />
      <div className="relative z-10 max-w-7xl mx-auto">
        <ScrollAnimation>
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full border border-gold/30 text-gold text-sm font-medium mb-4 bg-gold/10">
              {t('tag')}
            </span>
            <h2 className="font-inter text-3xl md:text-4xl font-bold text-white mb-4">{t('title')}</h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">{t('subtitle')}</p>
          </div>
        </ScrollAnimation>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {items.map((item, i) => {
            const Icon = icons[i];
            return (
              <ScrollAnimation key={i} delay={i * 0.1}>
                <div className="glass rounded-2xl p-6 border border-gold/10 hover:border-gold/30 transition-all group text-center h-full flex flex-col items-center">
                  <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 group-hover:scale-110 transition-all">
                    <Icon className="w-7 h-7 text-gold" />
                  </div>
                  <h3 className="font-inter text-sm font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-white/40 text-xs leading-relaxed">{item.description}</p>
                </div>
              </ScrollAnimation>
            );
          })}
        </div>
      </div>
    </section>
  );
}
