export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://trusttradellc.com';
export const SITE_NAME = 'Trust Trade LLC';
export const SITE_EMAIL = 'contact@tradetrustt.com';
export const SITE_PHONE = '+14355717794';
export const TWITTER_HANDLE = '@trusttradellc';

export const ADDRESS = {
  streetAddress: '33 SW 2nd AVE STE 1202',
  addressLocality: 'Miami',
  addressRegion: 'FL',
  postalCode: '33130',
  addressCountry: 'US',
};

export const SOCIAL_LINKS = [
  'https://www.linkedin.com/company/trust-trade-org-llc',
  'https://twitter.com/trusttradellc',
];

export function pageUrl(locale: string, path = '') {
  const base = locale === 'es' ? SITE_URL : `${SITE_URL}/${locale}`;
  return path ? `${base}${path}` : base;
}

export function hreflangAlternates(path = '') {
  return {
    'es': `${SITE_URL}${path}`,
    'en': `${SITE_URL}/en${path}`,
    'pt': `${SITE_URL}/pt${path}`,
    'x-default': `${SITE_URL}${path}`,
  };
}

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description:
      'Direct methanol commodity trading company. ASTM Grade AA, purity ≥99.85%. FOB & CIF worldwide delivery. Florida LLC.',
    email: SITE_EMAIL,
    telephone: SITE_PHONE,
    address: { '@type': 'PostalAddress', ...ADDRESS },
    sameAs: SOCIAL_LINKS,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Sales',
      telephone: SITE_PHONE,
      email: SITE_EMAIL,
      url: `${SITE_URL}/contact`,
    },
  };
}

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: SITE_NAME,
    image: `${SITE_URL}/logo.png`,
    description: 'Premium methanol commodity broker and trading company',
    address: { '@type': 'PostalAddress', ...ADDRESS },
    telephone: SITE_PHONE,
    email: SITE_EMAIL,
    url: SITE_URL,
    priceRange: 'Custom',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
  };
}

export function productSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Methanol CH₃OH Grade AA',
    description:
      'Premium methanol (CH₃OH) ASTM Grade AA, minimum purity 99.85%. Available FOB & CIF. Clear, colorless liquid. Industrial and petrochemical grade.',
    image: `${SITE_URL}/logo.png`,
    brand: { '@type': 'Brand', name: SITE_NAME },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: `${SITE_URL}/contact`,
    },
    additionalProperty: [
      { '@type': 'PropertyValue', name: 'Purity', value: '99.85% min (ASTM AA)' },
      { '@type': 'PropertyValue', name: 'Density', value: '0.791 g/cm³ at 20°C' },
      { '@type': 'PropertyValue', name: 'Boiling Point', value: '64.7°C' },
      { '@type': 'PropertyValue', name: 'Flash Point', value: '11°C' },
      { '@type': 'PropertyValue', name: 'Water Content', value: '0.1% max' },
      { '@type': 'PropertyValue', name: 'Delivery Terms', value: 'FOB & CIF' },
    ],
  };
}

export function breadcrumbSchema(items: Array<{ name: string; item: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      ...items.map((crumb, i) => ({
        '@type': 'ListItem',
        position: i + 2,
        name: crumb.name,
        item: crumb.item,
      })),
    ],
  };
}

export function faqSchema(faqs: Array<{ q: string; a: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  };
}

export function jsonLd(schema: object) {
  return JSON.stringify(schema);
}
