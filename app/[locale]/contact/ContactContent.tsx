'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, Linkedin, Clock } from 'lucide-react';
import RFQForm from '@/components/RFQForm';
import ScrollAnimation from '@/components/ui/ScrollAnimation';

export default function ContactPage() {
  const t = useTranslations('contact');
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '+15551234567';

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[45vh] bg-navy flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-hero-gradient opacity-80" />
        <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-gold/8 rounded-full blur-3xl" />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
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

      {/* Main content */}
      <section className="bg-bgLight section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* RFQ Form */}
            <div className="lg:col-span-2">
              <ScrollAnimation>
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                  <h2 className="font-inter text-2xl font-bold text-navy mb-8">{t('formTitle')}</h2>
                  <RFQForm />
                </div>
              </ScrollAnimation>
            </div>

            {/* Contact Channels */}
            <div className="space-y-6">
              <ScrollAnimation delay={0.2}>
                <h3 className="font-inter text-xl font-bold text-navy">{t('channelsTitle')}</h3>
              </ScrollAnimation>

              {/* Response time badge */}
              <ScrollAnimation delay={0.25}>
                <div className="bg-gold/10 border border-gold/30 rounded-xl p-4 flex items-center gap-3">
                  <Clock className="w-5 h-5 text-gold flex-shrink-0" />
                  <p className="text-navy font-medium text-sm">{t('responseTime')}</p>
                </div>
              </ScrollAnimation>

              {/* Email */}
              <ScrollAnimation delay={0.3}>
                <a
                  href="mailto:contact@trusttradellc.com"
                  className="flex items-center gap-4 bg-white rounded-xl p-5 border border-gray-100 hover:border-gold/30 hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center group-hover:bg-gold/10 transition-colors flex-shrink-0">
                    <Mail className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <p className="font-inter font-semibold text-navy text-sm">{t('email')}</p>
                    <p className="text-gray-600 text-sm">contact@trusttradellc.com</p>
                  </div>
                </a>
              </ScrollAnimation>

              {/* WhatsApp */}
              <ScrollAnimation delay={0.35}>
                <a
                  href={`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-white rounded-xl p-5 border border-gray-100 hover:border-gold/30 hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center group-hover:bg-gold/10 transition-colors flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <p className="font-inter font-semibold text-navy text-sm">{t('whatsapp')}</p>
                    <p className="text-gray-600 text-sm">{whatsappNumber}</p>
                  </div>
                </a>
              </ScrollAnimation>

              {/* LinkedIn */}
              <ScrollAnimation delay={0.4}>
                <a
                  href="https://www.linkedin.com/company/trust-trade-llc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-white rounded-xl p-5 border border-gray-100 hover:border-gold/30 hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center group-hover:bg-gold/10 transition-colors flex-shrink-0">
                    <Linkedin className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <p className="font-inter font-semibold text-navy text-sm">{t('linkedin')}</p>
                    <p className="text-gray-600 text-sm">Trust Trade LLC</p>
                  </div>
                </a>
              </ScrollAnimation>

              {/* Company info */}
              <ScrollAnimation delay={0.45}>
                <div className="bg-navy rounded-xl p-6 border border-gold/20">
                  <h4 className="font-inter font-bold text-white mb-4">Trust Trade LLC</h4>
                  <div className="space-y-2 text-sm text-white/60">
                    <p>🇺🇸 Florida, United States</p>
                    <p>⚗️ Methanol Commodity Trading</p>
                    <p>🌍 Global Operations</p>
                    <p>📋 ASTM Grade AA Supplier</p>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
