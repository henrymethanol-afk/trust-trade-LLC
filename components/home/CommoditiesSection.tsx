'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import ScrollAnimation from '@/components/ui/ScrollAnimation';

// ── Images go in /public/images/commodities/
// Each file should be ~1200×800 px or larger.
// Suggested Unsplash searches per commodity are noted below.

const featured = {
  name: 'Methanol',
  formula: 'CH₃OH',
  specs: ['ASTM Grade AA', 'Purity ≥99.85%', 'FOB · CIF · Tanker'],
  image: '/images/commodities/methanol.jpeg', // search: "methanol chemical plant"
};

const commodities = [
  {
    name: 'Diesel / ULSD',
    tag: 'Ultra Low Sulfur Diesel',
    image: '/images/commodities/diesel.jpeg',       // search: "fuel truck diesel"
    accent: 'from-amber-900/80',
  },
  {
    name: 'Fuel Oil',
    tag: 'Industrial & Heating',
    image: '/images/commodities/fuel-oil.jpeg',     // search: "oil refinery storage tanks"
    accent: 'from-stone-900/80',
  },
  {
    name: 'Marine Fuel',
    tag: 'Bunker & VLSFO',
    image: '/images/commodities/marine-fuel.jpeg',  // search: "cargo ship port bunker"
    accent: 'from-blue-950/80',
  },
  {
    name: 'Jet Fuel / Jet A-1',
    tag: 'Aviation Grade',
    image: '/images/commodities/jet-fuel.jpeg',     // search: "airplane refuel aviation"
    accent: 'from-sky-900/80',
  },
  {
    name: 'Asphalt / Bitumen',
    tag: 'Road & Industrial',
    image: '/images/commodities/asphalts.jpeg',      // search: "asphalt road construction bitumen"
    accent: 'from-neutral-900/80',
  },
  {
    name: 'Lubricants',
    tag: 'Industrial Grade',
    image: '/images/commodities/lubricants.jpeg',   // search: "industrial machinery lubricant oil"
    accent: 'from-zinc-800/80',
  },
];

export default function CommoditiesSection() {
  const locale = useLocale();
  const getHref = (path: string) => locale === 'es' ? path : `/${locale}${path}`;

  return (
    <section className="bg-white section-padding">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <ScrollAnimation>
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full border border-gold/30 text-gold text-sm font-medium mb-5 bg-gold/10">
              Energy Trading Portfolio
            </span>
            <h2 className="font-inter text-4xl md:text-5xl font-bold text-navy mb-4">
              Methanol specialists.<br className="hidden sm:block" /> Full energy traders.
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Our core expertise is methanol, but we source and trade across the full spectrum of
              energy commodities — from refined fuels to petrochemical feedstocks.
            </p>
          </div>
        </ScrollAnimation>

        {/* ── Featured: Methanol ── */}
        <ScrollAnimation>
          <div className="relative rounded-3xl overflow-hidden mb-4 group">
            {/* Background image */}
            <div
              className="absolute inset-0 bg-center bg-cover transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url('${featured.image}')` }}
            />
            {/* Fallback gradient (shows if image is missing) */}
            <div className="absolute inset-0 bg-gradient-to-br from-navy to-navy-dark" />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-navy/30" />

            <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-8 md:p-12">
              <div>
                {/* Core product badge */}
                <div className="flex items-center gap-2 mb-4">
                  <Star className="w-4 h-4 text-gold fill-gold" />
                  <span className="text-gold text-xs font-bold uppercase tracking-widest">Core Product</span>
                </div>
                <div className="flex items-baseline gap-4 mb-3">
                  <h3 className="font-inter text-3xl md:text-4xl font-bold text-white">{featured.name}</h3>
                  <span className="font-mono text-2xl md:text-3xl font-bold text-gold/70">{featured.formula}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {featured.specs.map(s => (
                    <span key={s} className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/80 text-xs font-medium backdrop-blur-sm">
                      {s}
                    </span>
                  ))}
                </div>
                <Link
                  href={getHref('/product')}
                  className="group/btn inline-flex items-center gap-2 px-6 py-3 bg-gold text-navy font-inter font-bold rounded-xl hover:bg-gold-light transition-all shadow-lg shadow-gold/20 hover:-translate-y-0.5"
                >
                  View full specifications
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Right: big formula display */}
              <div className="hidden md:flex flex-col items-center justify-center w-48 h-48 rounded-2xl bg-white/5 border border-gold/20 backdrop-blur-sm flex-shrink-0">
                <span className="font-mono text-5xl font-bold text-gold/80">CH₃OH</span>
                <span className="text-white/40 text-xs mt-2 uppercase tracking-widest">Methanol</span>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* ── Secondary commodities grid ── */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {commodities.map((c, i) => (
            <ScrollAnimation key={c.name} delay={i * 0.07}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="relative rounded-2xl overflow-hidden cursor-default group"
                style={{ aspectRatio: '4/3' }}
              >
                {/* Background image */}
                <div
                  className="absolute inset-0 bg-center bg-cover transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${c.image}')` }}
                />
                {/* Fallback gradient */}
                <div className={`absolute inset-0 bg-gradient-to-t ${c.accent} to-navy`} />
                {/* Overlay — lighter on hover */}
                <div className="absolute inset-0 bg-navy/55 group-hover:bg-navy/40 transition-colors duration-500" />
                {/* Gold border on hover */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gold/40 transition-colors duration-300" />

                {/* Text */}
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                  <p className="font-inter font-bold text-white text-base md:text-lg leading-tight mb-1.5 group-hover:translate-y-[-2px] transition-transform duration-300">
                    {c.name}
                  </p>
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-gold/20 border border-gold/30 text-gold text-xs font-medium">
                    {c.tag}
                  </span>
                </div>

                {/* Inquiry chip — appears on hover */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link
                    href={getHref('/contact')}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-gold text-navy text-xs font-bold shadow-lg"
                  >
                    Inquire <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </motion.div>
            </ScrollAnimation>
          ))}
        </div>

        {/* Bottom CTA */}
        <ScrollAnimation delay={0.2}>
          <div className="mt-10 text-center">
            <p className="text-gray-400 text-sm mb-3">
              All commodities available upon inquiry — pricing and availability on request.
            </p>
            <Link
              href={getHref('/contact')}
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-navy/20 text-navy font-inter font-semibold rounded-xl hover:border-gold hover:text-gold transition-all duration-300 text-sm"
            >
              Request a quote for any product
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollAnimation>

      </div>
    </section>
  );
}
