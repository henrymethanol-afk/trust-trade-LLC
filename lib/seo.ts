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

export function corporationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Corporation',
    name: 'TRUST TRADE ORG LLC',
    alternateName: ['TRUST TRADE', 'Trust Trade LLC'],
    legalName: 'TRUST TRADE ORG LLC',
    foundingDate: '2026',
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    image: `${SITE_URL}/og-image.png`,
    email: SITE_EMAIL,
    telephone: SITE_PHONE,
    address: { '@type': 'PostalAddress', ...ADDRESS },
    sameAs: SOCIAL_LINKS,
    description:
      'TRUST TRADE ORG LLC is a Miami-based international commodity trading company specializing in methanol CH3OH Grade AA, asphalt AC-30, used lubricating oil, and urea — with working capital financing, due diligence, and M&A advisory services for Venezuelan companies.',
    slogan: 'Built on Trust. Powered by Supply.',
    founder: {
      '@type': 'Person',
      name: 'Yamil Llaver',
      jobTitle: 'Director & Authorized Signatory',
      email: SITE_EMAIL,
      url: 'https://www.linkedin.com/in/yamil-llaver/',
    },
    employee: [
      {
        '@type': 'Person',
        name: 'Nicolas Herrera',
        jobTitle: 'Commercial Lead (CRO)',
        url: 'https://www.linkedin.com/in/nicolasjherrera/',
      },
      {
        '@type': 'Person',
        name: 'Henry Ramirez',
        jobTitle: 'CEO & Founder',
        url: 'https://www.linkedin.com/in/henry-morales--/',
      },
    ],
    knowsAbout: [
      'Commodity Trading',
      'Methanol CH3OH Trading',
      'Asphalt AC-30',
      'Used Lubricating Oil ULO',
      'Granular Urea',
      'Venezuelan Company Financing',
      'Working Capital Financing',
      'Due Diligence',
      'M&A Advisory',
      'International Trade',
      'FOB CIF Trading',
      'Documentary Letter of Credit DLC',
      'SGS Inspection',
      'Petrochemical Trading',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Commodity Products & Financial Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Product',
            name: 'Methanol CH3OH Grade AA',
            description:
              'Premium methanol for industrial use. 40,000 MT/month FOB Puerto de Jose, Venezuela. ASTM Grade AA, purity 99.85% min. SGS-inspected.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Product',
            name: 'Asphalt AC-30',
            description: 'Industrial asphalt grade AC-30. 30,000 MT/month FOB Venezuela.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Product',
            name: 'Used Lubricating Oil (ULO)',
            description: 'Used lubricating oil for industrial recycling. 200,000 liters/month FOB Venezuela.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Product',
            name: 'Granular Urea Grade AA',
            description: 'Granular urea for agricultural and industrial use. FOB Venezuela.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Working Capital Financing for Venezuelan Companies',
            description:
              'Capital injection financing for Venezuelan companies in oil, gas, and petrochemical sectors. Contract assignment as collateral. Terms: 12-36 months.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Due Diligence & KYC Services',
            description:
              'Complete compliance evaluation for Venezuelan energy companies. KYC, asset analysis, contract review, financial assessment. Process: 30-60 business days.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'M&A Advisory for Venezuelan Companies',
            description:
              'Mergers and acquisitions advisory: full sale, partial stake, joint ventures, capital injection for Venezuelan energy companies.',
          },
        },
      ],
    },
    areaServed: [
      { '@type': 'Country', name: 'China' },
      { '@type': 'Country', name: 'Malaysia' },
      { '@type': 'Country', name: 'United States' },
      { '@type': 'Country', name: 'Brazil' },
      { '@type': 'Country', name: 'Mexico' },
      { '@type': 'Country', name: 'Chile' },
      { '@type': 'Country', name: 'Venezuela' },
    ],
  };
}

export function teamMemberSchema(member: {
  name: string;
  jobTitle: string;
  description: string;
  linkedinUrl: string;
  imageUrl?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: member.name,
    jobTitle: member.jobTitle,
    description: member.description,
    url: member.linkedinUrl,
    image: member.imageUrl,
    worksFor: {
      '@type': 'Corporation',
      name: 'TRUST TRADE ORG LLC',
      url: SITE_URL,
    },
    email: SITE_EMAIL,
  };
}

export function jsonLd(schema: object) {
  return JSON.stringify(schema);
}
