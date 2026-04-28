'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Target, Link2, ShieldCheck, Users, Globe2, CheckCircle } from 'lucide-react';
import ScrollAnimation from '@/components/ui/ScrollAnimation';
import TeamSection from '@/components/home/TeamSection';
import SectionParticles from '@/components/ui/SectionParticles';

const whyIcons = [Link2, ShieldCheck, Users];

export default function AboutPage() {
  const t = useTranslations('about');
  const why = t.raw('why') as Array<{ title: string; description: string }>;
  const reachItems = t.raw('reachItems') as string[];

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[55vh] bg-navy flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-hero-gradient opacity-80" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gold/8 rounded-full blur-3xl" />
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

      {/* Mission */}
      <section className="bg-white section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <ScrollAnimation>
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 text-gold text-sm font-medium mb-4">
                  {t('missionTag')}
                </span>
                <h2 className="font-inter text-3xl md:text-4xl font-bold text-navy mb-6">
                  {t('missionTitle')}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">{t('missionText')}</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={0.2}>
              <div className="relative">
                <div className="bg-navy rounded-2xl p-8 border border-gold/20">
                  <Target className="w-12 h-12 text-gold mb-6" />
                  <blockquote className="text-white/80 text-xl italic leading-relaxed">
                    &ldquo;{t('missionText')}&rdquo;
                  </blockquote>
                  <div className="mt-6 pt-6 border-t border-gold/20">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-0.5 bg-gold" />
                      <span className="text-gold font-semibold">Trust Trade LLC</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-bgLight section-padding">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 text-gold text-sm font-medium mb-4">
                {t('whyTag')}
              </span>
              <h2 className="font-inter text-3xl md:text-4xl font-bold text-navy">
                {t('whyTitle')}
              </h2>
            </div>
          </ScrollAnimation>
          <div className="grid md:grid-cols-3 gap-8">
            {why.map((item, i) => {
              const Icon = whyIcons[i];
              return (
                <ScrollAnimation key={i} delay={i * 0.15}>
                  <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:border-gold/30 hover:shadow-md transition-all group h-full">
                    <div className="w-14 h-14 rounded-xl bg-navy flex items-center justify-center mb-6 group-hover:bg-gold/10 transition-colors">
                      <Icon className="w-7 h-7 text-gold" />
                    </div>
                    <h3 className="font-inter text-xl font-bold text-navy mb-3">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </ScrollAnimation>
              );
            })}
          </div>
        </div>
      </section>

      {/* Florida LLC Badge */}
      <section className="bg-navy section-padding relative overflow-hidden">
        <SectionParticles id="particles-about-1" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <ScrollAnimation>
            <div className="glass rounded-2xl p-10 border border-gold/20 inline-block w-full">
              <div className="flex flex-col items-center gap-6">
                <div className="w-20 h-20 rounded-full bg-gold/10 border-2 border-gold/30 flex items-center justify-center">
                  <ShieldCheck className="w-10 h-10 text-gold" />
                </div>
                <div>
                  <h3 className="font-inter text-2xl font-bold text-white mb-2">{t('badgeTitle')}</h3>
                  <p className="text-white/60">{t('badgeSubtitle')}</p>
                </div>
                <div className="flex items-center gap-4 flex-wrap justify-center">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20">
                    <span className="text-2xl">🇺🇸</span>
                    <span className="text-white/80 text-sm font-medium">United States of America</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20">
                    <span className="text-2xl">🌴</span>
                    <span className="text-white/80 text-sm font-medium">State of Florida</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20">
                    <span className="text-2xl">⚖️</span>
                    <span className="text-white/80 text-sm font-medium">LLC Entity</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Team */}
      <TeamSection />

      {/* Global Reach */}
      <section className="bg-navy section-padding relative overflow-hidden">
        <SectionParticles id="particles-about-2" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full border border-gold/30 text-gold text-sm font-medium mb-4 bg-gold/10">
                {t('reachTag')}
              </span>
              <h2 className="font-inter text-3xl md:text-4xl font-bold text-white mb-4">
                {t('reachTitle')}
              </h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto">{t('reachSubtitle')}</p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={0.2}>
            {/* SVG World Map Placeholder */}
            <div className="relative bg-navy-light rounded-2xl border border-gold/20 overflow-hidden p-8">
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {reachItems.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gold/10 border border-gold/20 hover:border-gold/40 transition-colors"
                  >
                    <Globe2 className="w-4 h-4 text-gold" />
                    <span className="text-white/80 text-sm font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>

              {/* Simplified SVG World Map */}
              <div className="relative w-full h-64 flex items-center justify-center">
                <svg
                  viewBox="0 0 1000 500"
                  className="w-full h-full opacity-30"
                  fill="none"
                  stroke="#C9A84C"
                  strokeWidth="1"
                >
                  {/* Simplified continents */}
                  <path d="M150,120 L200,100 L250,110 L280,140 L260,180 L220,200 L180,190 L150,160 Z" />
                  <path d="M290,150 L350,130 L400,160 L420,200 L380,250 L320,260 L280,220 L270,180 Z" />
                  <path d="M430,100 L500,80 L580,90 L620,130 L600,200 L540,230 L460,210 L420,160 Z" />
                  <path d="M640,80 L720,70 L800,100 L830,150 L810,200 L750,220 L670,200 L630,150 Z" />
                  <path d="M840,120 L900,110 L950,140 L940,180 L890,190 L840,165 Z" />
                  <path d="M350,280 L420,260 L450,300 L440,360 L380,390 L330,360 L310,310 Z" />
                  <path d="M620,250 L680,230 L720,260 L710,320 L660,340 L610,300 Z" />
                  <path d="M700,300 L800,280 L850,330 L830,400 L760,420 L700,380 Z" />
                  {/* Trade route lines */}
                  <path d="M200,150 Q400,200 600,150" strokeDasharray="5,5" opacity="0.5" />
                  <path d="M600,150 Q750,120 900,150" strokeDasharray="5,5" opacity="0.5" />
                  <path d="M380,200 Q450,320 400,380" strokeDasharray="5,5" opacity="0.5" />
                  {/* Dots for major ports */}
                  <circle cx="200" cy="150" r="5" fill="#C9A84C" opacity="0.8" />
                  <circle cx="400" cy="160" r="5" fill="#C9A84C" opacity="0.8" />
                  <circle cx="600" cy="150" r="5" fill="#C9A84C" opacity="0.8" />
                  <circle cx="750" cy="140" r="5" fill="#C9A84C" opacity="0.8" />
                  <circle cx="900" cy="150" r="5" fill="#C9A84C" opacity="0.8" />
                  <circle cx="380" cy="360" r="5" fill="#C9A84C" opacity="0.8" />
                  <circle cx="660" cy="300" r="5" fill="#C9A84C" opacity="0.8" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Globe2 className="w-12 h-12 text-gold/40 mx-auto mb-2" />
                    <p className="text-white/40 text-sm">Global Trade Network</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </>
  );
}
