'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Home } from 'lucide-react';

export default function NotFound() {
  const t = useTranslations('notFound');

  return (
    <div className="min-h-screen bg-navy flex items-center justify-center px-4">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-gold/20 font-inter font-bold text-[200px] leading-none select-none">
            404
          </div>
          <h1 className="font-inter text-3xl md:text-4xl font-bold text-white -mt-8 mb-4">
            {t('title')}
          </h1>
          <p className="text-white/60 text-lg mb-8">{t('subtitle')}</p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-navy font-inter font-bold rounded-xl hover:bg-gold-light transition-colors"
          >
            <Home className="w-5 h-5" />
            {t('cta')}
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
