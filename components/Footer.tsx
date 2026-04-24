'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { Mail, MessageCircle, Linkedin } from 'lucide-react';

export default function Footer() {
  const t = useTranslations('footer');
  const t_nav = useTranslations('nav');
  const locale = useLocale();

  const getHref = (path: string) => locale === 'es' ? path : `/${locale}${path}`;

  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href={getHref('/')} className="inline-flex items-center gap-2 mb-5">
              <div className="w-7 h-7 rounded-md bg-gold flex items-center justify-center flex-shrink-0">
                <span className="text-navy font-inter font-black text-sm">T</span>
              </div>
              <span className="font-inter font-bold text-white text-lg tracking-tight">
                Trust Trade <span className="text-gold">LLC</span>
              </span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-xs">{t('tagline')}</p>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-medium">
                🇺🇸 {t('florida')}
              </span>
              <span className="px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-medium">
                ⚗️ Methanol Trading
              </span>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-inter font-semibold text-white mb-4">{t('links')}</h4>
            <ul className="space-y-3">
              {[
                { href: '/', label: t_nav('home') },
                { href: '/product', label: t_nav('product') },
                { href: '/about', label: t_nav('about') },
                { href: '/how-it-works', label: t_nav('howItWorks') },
                { href: '/contact', label: t_nav('contact') },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={getHref(link.href)}
                    className="text-white/50 hover:text-gold text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-inter font-semibold text-white mb-4">{t('contact')}</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:contact@trusttradellc.com"
                  className="flex items-center gap-2 text-white/50 hover:text-gold text-sm transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  contact@trusttradellc.com
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '').replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/50 hover:text-gold text-sm transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 text-white/50 hover:text-gold text-sm transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © {year} Trust Trade LLC. {t('rights')}
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-white/30 hover:text-white/60 text-xs transition-colors">
              {t('privacyPolicy')}
            </Link>
            <Link href="#" className="text-white/30 hover:text-white/60 text-xs transition-colors">
              {t('terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
