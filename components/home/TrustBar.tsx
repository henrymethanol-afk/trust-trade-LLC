'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Globe, Ship, Clock, Shield } from 'lucide-react';
import AnimatedCounter from '@/components/ui/AnimatedCounter';

export default function TrustBar() {
  const t = useTranslations('trustBar');

  const metrics = [
    { icon: Globe, label: t('globalDelivery'), value: '50+', suffix: ' Countries', isCounter: true, target: 50 },
    { icon: Ship, label: t('fobCif'), value: 'FOB & CIF', isCounter: false },
    { icon: Clock, label: t('response'), value: '24', suffix: '-48h', isCounter: true, target: 24 },
    { icon: Shield, label: t('registered'), value: 'US LLC', isCounter: false },
  ];

  return (
    <section className="bg-navy-dark border-y border-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {metrics.map((metric, i) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center py-4 px-2 group"
              >
                <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center mb-3 group-hover:bg-gold/20 transition-colors">
                  <Icon className="w-5 h-5 text-gold" />
                </div>
                <div className="font-inter text-2xl md:text-3xl font-bold text-white mb-1">
                  {metric.isCounter && metric.target !== undefined ? (
                    <AnimatedCounter target={metric.target} suffix={metric.suffix || ''} />
                  ) : (
                    <span>{metric.value}</span>
                  )}
                </div>
                <p className="text-white/40 text-xs md:text-sm font-medium">{metric.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
