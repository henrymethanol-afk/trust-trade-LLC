'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { ArrowRight, Droplets, Filter, Layers, Microscope, Atom, Database, Waves, FlaskConical, Cpu, ShieldCheck, Activity, Settings, CheckCircle, ExternalLink } from 'lucide-react';
import ScrollAnimation from '@/components/ui/ScrollAnimation';

const categories = [
  {
    icon: Droplets,
    title: 'Pumps',
    description: 'Low pressure, high pressure and dosing/chemical pumps for any type of flow and application.',
    types: ['Low pressure pumps', 'High pressure pumps', 'Dosing / Chemical pumps'],
  },
  {
    icon: Filter,
    title: 'Filters & Filter Housings',
    description: 'Full range of filtration products including cartridge, bag and self-cleaning filters for oil & gas, food & beverage, pharmaceutical and more.',
    types: ['Cartridge filters', 'Filter bags', 'Self-cleaning filters', 'Filter housings'],
  },
  {
    icon: Layers,
    title: 'Multimedia & Adsorbents',
    description: 'Diverse portfolio of filter media: anthracite, sand, gravel, activated carbon, calcite and specialty adsorbents for arsenic removal.',
    types: ['Activated Carbon', 'Arsenic Adsorbent', 'Sand & Gravel', 'Anthracite'],
  },
  {
    icon: Microscope,
    title: 'Ultrafiltration Modules',
    description: 'UF technology for separation of suspended solids, colloids, bacteria and viruses. Pre-treatment for RO, ion exchange and EDI.',
    types: ['Ultrafiltration membranes', 'MBR modules'],
  },
  {
    icon: Atom,
    title: 'Ion Exchange Resins',
    description: 'Complete range for demineralization, ultrapure water and nuclear applications. Direct collaboration with major global producers.',
    types: ['Weak / Strong Anion Resins', 'Weak / Strong Cation Resins', 'Mixed Bed Resins', 'Chelating Resins'],
  },
  {
    icon: Database,
    title: 'Pressure Vessels & Tanks',
    description: 'Great variety of pressure vessels and tanks with composite materials and advanced technology for RO and NF systems.',
    types: ['Pressure vessels', 'Tanks'],
  },
  {
    icon: Waves,
    title: 'Membranes',
    description: 'RO and Nanofiltration elements from 1.8" to 8" diameter for brackish water, seawater, tap water and industrial applications.',
    types: ['High/Low Brackish Water', 'Seawater', 'Nanofiltration', 'Low & Eco Low Energy'],
  },
  {
    icon: FlaskConical,
    title: 'Chemicals',
    description: 'Full range from pre-treatment to post-treatment. Chemical dosing systems, antiscalants, membrane cleaners and biocides.',
    types: ['Antiscalants', 'Membrane Cleaners', 'Biocide', 'Generic Chemicals'],
  },
  {
    icon: Cpu,
    title: 'EDI Modules',
    description: 'Chemical-free removal of residual salts. 97% water recovery. Ideal for power plants, semiconductors, food & beverage and pharma.',
    types: ['EDI modules', 'ED', 'BP MED'],
  },
  {
    icon: ShieldCheck,
    title: 'Disinfection',
    description: 'Chemical-free disinfection for all water applications, chemical dosing and advanced oxidation solutions.',
    types: ['UV systems', 'Ozone generators', 'ClO₂ systems'],
  },
  {
    icon: Activity,
    title: 'Measurement Devices',
    description: 'Robust and adaptable measurement systems. Technical support for selection and sizing for each specific application.',
    types: ['Measurement devices', 'Alarm devices', 'Testing kits'],
  },
  {
    icon: Settings,
    title: 'Valves & Couplings',
    description: 'Broad range of couplings, valves and fittings designed for easy installation and connection of RO and UF systems.',
    types: ['Couplings', 'Valves', 'Fittings'],
  },
];

const partnerStats = [
  { value: '25+', label: 'Years of experience' },
  { value: '140+', label: 'Countries served' },
  { value: '100+', label: 'Brands represented' },
  { value: '4', label: 'ISO certifications' },
];

export default function SolutionsPage() {
  const locale = useLocale();
  const getHref = (path: string) => locale === 'es' ? path : `/${locale}${path}`;

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[55vh] bg-navy flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-hero-gradient opacity-80" />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-gold/30 text-gold text-sm font-medium mb-6 bg-gold/10">
              Extended Portfolio
            </span>
            <h1 className="font-inter text-4xl md:text-6xl font-bold text-white mb-6">
              Industrial Solutions
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Beyond methanol, Trust Trade LLC offers access to world-class industrial water treatment products through our strategic partnership with Lenntech.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partner spotlight */}
      <section className="bg-bgLight section-padding">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimation>
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Left: Partner info */}
                <div className="p-10 md:p-12">
                  <span className="inline-block px-3 py-1 rounded-full bg-gold/10 text-gold text-xs font-semibold mb-5 uppercase tracking-wider">
                    Strategic Partner
                  </span>
                  <h2 className="font-inter text-3xl font-bold text-navy mb-4">
                    Lenntech Water Treatment Solutions
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Lenntech is a global leader in water treatment with over 25 years of experience, ISO certified and serving clients in more than 140 countries. Through our partnership, Trust Trade LLC provides direct access to their complete product portfolio — pumps, membranes, filtration systems, chemicals and more.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {['ISO 14001:2015', 'ISO 9001:2015', 'OHSAS 18001', 'VCA 2008/5.1'].map((cert) => (
                      <span key={cert} className="px-3 py-1.5 rounded-full bg-navy/5 border border-navy/10 text-navy text-xs font-semibold">
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
                {/* Right: Stats */}
                <div className="bg-navy p-10 md:p-12 grid grid-cols-2 gap-6 content-center">
                  {partnerStats.map((stat, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="text-center"
                    >
                      <p className="font-inter text-4xl font-bold text-gold mb-1">{stat.value}</p>
                      <p className="text-white/50 text-sm">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Notice banner */}
      <section className="bg-white py-6 border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20">
                <CheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
                <span className="text-navy text-sm font-medium">All products available upon inquiry — pricing and availability on request</span>
              </div>
              <Link
                href={getHref('/contact')}
                className="flex items-center gap-1.5 text-sm text-gold font-semibold hover:underline"
              >
                Request a quote <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Product categories grid */}
      <section className="bg-white section-padding">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation>
            <div className="text-center mb-14">
              <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 text-gold text-sm font-medium mb-4">
                Product Catalogue
              </span>
              <h2 className="font-inter text-3xl md:text-4xl font-bold text-navy mb-4">
                12 Product Categories
              </h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                From pumps and membranes to disinfection and measurement — full coverage for any industrial water treatment need.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, i) => {
              const Icon = cat.icon;
              return (
                <ScrollAnimation key={cat.title} delay={(i % 3) * 0.1}>
                  <div className="group p-7 rounded-2xl border border-gray-100 hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5 transition-all duration-300 h-full flex flex-col">
                    <div className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center mb-5 group-hover:bg-gold/10 transition-colors flex-shrink-0">
                      <Icon className="w-6 h-6 text-gold" />
                    </div>
                    <h3 className="font-inter text-lg font-bold text-navy mb-2">{cat.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">{cat.description}</p>
                    <div className="flex flex-wrap gap-1.5 mt-auto">
                      {cat.types.map((type) => (
                        <span key={type} className="px-2.5 py-1 rounded-full bg-bgLight text-navy/60 text-xs font-medium">
                          {type}
                        </span>
                      ))}
                    </div>
                  </div>
                </ScrollAnimation>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries served */}
      <section className="bg-navy section-padding">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimation>
            <div className="text-center mb-10">
              <span className="inline-block px-4 py-1.5 rounded-full border border-gold/30 text-gold text-sm font-medium mb-4 bg-gold/10">
                Industries
              </span>
              <h2 className="font-inter text-3xl md:text-4xl font-bold text-white mb-4">
                Sectors We Cover
              </h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto">
                These solutions serve the same industries that rely on our methanol supply — and many more.
              </p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation delay={0.2}>
            <div className="flex flex-wrap justify-center gap-3">
              {['Manufacturing', 'Oil & Gas', 'Mining', 'Chemical & Petrochemical', 'Shipping', 'Food & Beverage', 'Agriculture', 'Pharmaceutical', 'Power Plants', 'Tourism'].map((industry, i) => (
                <motion.span
                  key={industry}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="px-5 py-2.5 rounded-full bg-white/5 border border-gold/20 hover:border-gold/50 hover:bg-gold/10 transition-all text-white/80 text-sm font-medium cursor-default"
                >
                  {industry}
                </motion.span>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-bgLight section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollAnimation>
            <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 text-gold text-sm font-medium mb-4">
              Get in Touch
            </span>
            <h2 className="font-inter text-3xl md:text-4xl font-bold text-navy mb-4">
              Interested in any of these products?
            </h2>
            <p className="text-gray-500 text-lg mb-8 max-w-2xl mx-auto">
              Contact us with your requirements and we'll coordinate pricing, availability and delivery directly with our partner network.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={getHref('/contact')}
                className="group flex items-center gap-2 px-8 py-4 bg-gold text-navy font-inter font-bold text-lg rounded-2xl hover:bg-gold-light transition-all duration-300 shadow-xl shadow-gold/20 hover:shadow-gold/40 hover:-translate-y-1"
              >
                Request a Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="https://www.lenntech.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 border-2 border-navy/20 text-navy font-inter font-semibold text-lg rounded-2xl hover:border-navy/50 hover:bg-navy/5 transition-all duration-300"
              >
                Visit Lenntech
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </>
  );
}
