'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const localeFlags: Record<string, string> = {
  es: '🇪🇸',
  en: '🇺🇸',
  pt: '🇧🇷',
};

export default function Navbar() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getLocalePath = (newLocale: string) => {
    const segments = pathname.split('/').filter(Boolean);
    const locales = ['es', 'en', 'pt'];
    if (locales.includes(segments[0])) segments.shift();
    return newLocale === 'es' ? `/${segments.join('/')}` : `/${newLocale}/${segments.join('/')}`;
  };

  const getHref = (path: string) => {
    return locale === 'es' ? path : `/${locale}${path}`;
  };

  const navLinks = [
    { href: getHref('/'), label: t('home') },
    { href: getHref('/product'), label: t('product') },
    { href: getHref('/solutions'), label: t('solutions') },
    { href: getHref('/about'), label: t('about') },
    { href: getHref('/how-it-works'), label: t('howItWorks') },
    { href: getHref('/contact'), label: t('contact') },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy/95 backdrop-blur-md border-b border-gold/10 shadow-lg shadow-navy/20'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href={getHref('/')} className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-gold flex items-center justify-center flex-shrink-0">
              <span className="text-navy font-inter font-black text-sm">T</span>
            </div>
            <span className="font-inter font-bold text-white text-lg tracking-tight">
              Trust Trade <span className="text-gold">LLC</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/70 hover:text-white text-sm font-medium transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language switcher */}
            <div className="flex items-center gap-1 bg-white/5 rounded-lg p-1 border border-white/10">
              {['es', 'en', 'pt'].map((loc) => (
                <button
                  key={loc}
                  onClick={() => router.push(getLocalePath(loc))}
                  className={`px-2.5 py-1.5 rounded-md text-xs font-bold uppercase transition-all ${
                    locale === loc
                      ? 'bg-gold text-navy shadow-sm'
                      : 'text-white/50 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {localeFlags[loc]} {loc}
                </button>
              ))}
            </div>

            {/* CTA */}
            <Link
              href={getHref('/contact')}
              className="px-5 py-2.5 bg-gold text-navy font-inter font-bold text-sm rounded-xl hover:bg-gold-light transition-all duration-200 shadow-lg shadow-gold/20 hover:shadow-gold/30 hover:-translate-y-0.5"
            >
              {t('requestQuote')}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-white/80 hover:text-white"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-navy/98 backdrop-blur-md border-t border-gold/10"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-white/70 hover:text-white font-medium py-2 border-b border-white/5"
                >
                  {link.label}
                </Link>
              ))}

              {/* Language switcher mobile */}
              <div className="flex gap-2 pt-2">
                {['es', 'en', 'pt'].map((loc) => (
                  <button
                    key={loc}
                    onClick={() => {
                      router.push(getLocalePath(loc));
                      setMobileOpen(false);
                    }}
                    className={`flex-1 py-2 rounded-lg text-xs font-bold uppercase transition-all ${
                      locale === loc
                        ? 'bg-gold text-navy'
                        : 'bg-white/10 text-white/60 hover:bg-white/20'
                    }`}
                  >
                    {localeFlags[loc]} {loc}
                  </button>
                ))}
              </div>

              <Link
                href={getHref('/contact')}
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center px-5 py-3 bg-gold text-navy font-inter font-bold rounded-xl mt-2"
              >
                {t('requestQuote')}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
