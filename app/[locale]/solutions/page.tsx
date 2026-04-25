'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import {
  ArrowRight, ExternalLink, CheckCircle,
  Droplets, Filter, Microscope, FlaskConical, ShieldCheck, Settings,
  Gauge, Radio, TrendingUp, Zap, Globe2, Award,
} from 'lucide-react';
import ScrollAnimation from '@/components/ui/ScrollAnimation';

/* ─── Lenntech ─── */
const lenntechCategories = [
  { icon: Droplets, label: 'Pumps & Filter Housings' },
  { icon: Microscope, label: 'Ultrafiltration & Membranes' },
  { icon: FlaskConical, label: 'Chemicals & Antiscalants' },
  { icon: Filter, label: 'Multimedia & Adsorbents' },
  { icon: ShieldCheck, label: 'Disinfection Systems' },
  { icon: Settings, label: 'Valves, Couplings & Measurement' },
];

const lenntechStats = [
  { value: '25+', label: 'Years' },
  { value: '140+', label: 'Countries' },
  { value: '100+', label: 'Brands' },
  { value: '4', label: 'ISO Certs' },
];

/* ─── Pietro Fiorentini ─── */
const mpfmBenefits = [
  { icon: TrendingUp, title: 'Reduce CAPEX', desc: 'Drastically smaller footprint vs. traditional separation systems. Critical for offshore and mobile applications.' },
  { icon: Zap, title: 'Cut OPEX', desc: 'Low maintenance, minimal energy consumption (from 14W). Perfect for unmanned and remote locations.' },
  { icon: Radio, title: 'Real-Time Data', desc: 'Continuous inline measurement of oil, water and gas fractions. Enables Industry 4.0 production optimization.' },
  { icon: Gauge, title: 'Full GVF Range', desc: 'Models covering 0–100% Gas Volume Fraction. Radioactive and non-radioactive versions available.' },
];

const mpfmApplications = ['Topside Wellheads', 'Offshore Platforms', 'Subsea Wells', 'Desert Operations', 'Arctic Conditions', 'Mobile Testing', 'Skid Mounted', 'Unmanned Sites'];

const pfStats = [
  { value: '1940', label: 'Founded' },
  { value: '100+', label: 'Countries' },
  { value: '3', label: 'MPFM Lines' },
  { value: '32W', label: 'Min. Power' },
];

export default function SolutionsPage() {
  const locale = useLocale();
  const getHref = (path: string) => locale === 'es' ? path : `/${locale}${path}`;

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] bg-navy flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-hero-gradient opacity-80" />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-1.5 rounded-full border border-gold/30 text-gold text-sm font-medium mb-6 bg-gold/10">
              Strategic Partners
            </span>
            <h1 className="font-inter text-4xl md:text-6xl font-bold text-white mb-5">
              Extended Solutions
            </h1>
            <p className="text-white/65 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Beyond methanol, Trust Trade gives you access to world-class industrial products through two carefully selected global partners.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Notice */}
      <div className="bg-navy-dark border-b border-gold/10 py-3">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-center gap-3 flex-wrap text-center">
          <CheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
          <span className="text-white/50 text-sm">All products available upon inquiry — pricing and lead times on request</span>
          <Link href={getHref('/contact')} className="text-gold text-sm font-semibold hover:underline flex items-center gap-1">
            Request a quote <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* ── PARTNER 1: LENNTECH ── */}
      <section className="bg-bgLight section-padding">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimation>
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
              {/* Header */}
              <div className="bg-navy px-8 md:px-12 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-gold/60 text-xs uppercase tracking-widest font-semibold">Partner 01 · Water Treatment</span>
                  <h2 className="font-inter text-2xl md:text-3xl font-bold text-white mt-1">Lenntech</h2>
                  <p className="text-white/50 text-sm mt-1">Water Treatment Solutions · Netherlands</p>
                </div>
                <div className="flex gap-3 flex-wrap">
                  {['ISO 14001', 'ISO 9001', 'OHSAS 18001'].map(c => (
                    <span key={c} className="px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-semibold">{c}</span>
                  ))}
                </div>
              </div>

              <div className="p-8 md:p-12">
                {/* Stats */}
                <div className="grid grid-cols-4 gap-4 mb-10 pb-10 border-b border-gray-100">
                  {lenntechStats.map((s, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="text-center"
                    >
                      <p className="font-inter text-3xl font-bold text-navy">{s.value}</p>
                      <p className="text-gray-400 text-xs mt-1">{s.label}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Description + categories */}
                <div className="grid md:grid-cols-2 gap-8 items-start">
                  <div>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Global leader in water treatment with over 25 years of experience, serving industries from oil & gas to food & beverage across 140+ countries. Trust Trade provides direct access to their complete product portfolio — from pumps to advanced membrane systems.
                    </p>
                    <a
                      href="https://www.lenntech.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-navy/50 hover:text-navy transition-colors"
                    >
                      lenntech.com <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {lenntechCategories.map((cat) => {
                      const Icon = cat.icon;
                      return (
                        <div key={cat.label} className="flex items-center gap-3 p-3 rounded-xl bg-bgLight border border-transparent hover:border-gold/20 transition-colors">
                          <div className="w-8 h-8 rounded-lg bg-navy flex items-center justify-center flex-shrink-0">
                            <Icon className="w-4 h-4 text-gold" />
                          </div>
                          <span className="text-navy text-xs font-medium leading-tight">{cat.label}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* ── PARTNER 2: PIETRO FIORENTINI ── */}
      <section className="bg-white section-padding">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimation>
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
              {/* Header */}
              <div className="bg-navy px-8 md:px-12 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-gold/60 text-xs uppercase tracking-widest font-semibold">Partner 02 · Oil & Gas Instrumentation</span>
                  <h2 className="font-inter text-2xl md:text-3xl font-bold text-white mt-1">Pietro Fiorentini</h2>
                  <p className="text-white/50 text-sm mt-1">Multiphase Flow Metering · Italy</p>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20">
                  <Award className="w-4 h-4 text-gold" />
                  <span className="text-gold text-xs font-semibold">Since 1940 · ATEX / IECEx Certified</span>
                </div>
              </div>

              <div className="p-8 md:p-12">
                {/* Stats */}
                <div className="grid grid-cols-4 gap-4 mb-10 pb-10 border-b border-gray-100">
                  {pfStats.map((s, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="text-center"
                    >
                      <p className="font-inter text-3xl font-bold text-navy">{s.value}</p>
                      <p className="text-gray-400 text-xs mt-1">{s.label}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Product intro */}
                <div className="mb-8">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold/10 border border-gold/20 mb-4">
                    <Radio className="w-3.5 h-3.5 text-gold" />
                    <span className="text-gold text-xs font-semibold">Core Product: Multiphase Flow Meter (MPFM)</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed max-w-3xl">
                    Pietro Fiorentini's MPFM is an inline device for continuous real-time measurement of oil, water and gas fractions directly in the well stream — eliminating the need for traditional separation systems and enabling Industry 4.0 production optimization.
                  </p>
                </div>

                {/* Benefits grid */}
                <div className="grid sm:grid-cols-2 gap-4 mb-10">
                  {mpfmBenefits.map((b, i) => {
                    const Icon = b.icon;
                    return (
                      <motion.div
                        key={b.title}
                        initial={{ opacity: 0, x: i % 2 === 0 ? -10 : 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex gap-4 p-5 rounded-2xl bg-bgLight border border-transparent hover:border-gold/20 transition-all group"
                      >
                        <div className="w-10 h-10 rounded-xl bg-navy flex items-center justify-center flex-shrink-0 group-hover:bg-gold/10 transition-colors">
                          <Icon className="w-5 h-5 text-gold" />
                        </div>
                        <div>
                          <p className="font-inter font-bold text-navy text-sm mb-1">{b.title}</p>
                          <p className="text-gray-500 text-xs leading-relaxed">{b.desc}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Models */}
                <div className="mb-8 p-5 rounded-2xl bg-navy/[0.03] border border-navy/10">
                  <p className="text-xs font-semibold text-navy/50 uppercase tracking-wider mb-3">Available Models</p>
                  <div className="flex flex-wrap gap-3">
                    {[
                      { name: 'Flowatch 3i / HS', range: 'GVF 0–95% · Black & Volatile Oils' },
                      { name: 'Xtreme S / SHS', range: 'GVF 90–100% · Wet Gas' },
                      { name: 'Totem / Totem HS', range: 'GVF 0–100% · All Conditions' },
                    ].map((m) => (
                      <div key={m.name} className="px-4 py-2.5 rounded-xl bg-white border border-gray-200">
                        <p className="font-inter font-bold text-navy text-sm">{m.name}</p>
                        <p className="text-gray-400 text-xs mt-0.5">{m.range}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Applications */}
                <div>
                  <p className="text-xs font-semibold text-navy/50 uppercase tracking-wider mb-3">Applications</p>
                  <div className="flex flex-wrap gap-2">
                    {mpfmApplications.map((app) => (
                      <span key={app} className="px-3 py-1.5 rounded-full bg-bgLight border border-gray-200 text-navy/70 text-xs font-medium hover:border-gold/30 transition-colors">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-100">
                  <a
                    href="https://www.fiorentini.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-navy/50 hover:text-navy transition-colors"
                  >
                    fiorentini.com <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollAnimation>
            <Globe2 className="w-10 h-10 text-gold/40 mx-auto mb-5" />
            <h2 className="font-inter text-3xl md:text-4xl font-bold text-white mb-4">
              Interested in any of these products?
            </h2>
            <p className="text-white/55 text-lg mb-8 max-w-2xl mx-auto">
              Tell us your requirements and we'll coordinate pricing, availability and delivery through our partner network.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={getHref('/contact')}
                className="group flex items-center gap-2 px-8 py-4 bg-gold text-navy font-inter font-bold text-lg rounded-2xl hover:bg-gold-light transition-all duration-300 shadow-xl shadow-gold/20 hover:shadow-gold/40 hover:-translate-y-1"
              >
                Request a Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </>
  );
}
