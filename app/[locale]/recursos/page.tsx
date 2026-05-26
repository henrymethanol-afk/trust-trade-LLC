import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import {
  pageUrl, hreflangAlternates, breadcrumbSchema, organizationSchema, corporationSchema, jsonLd, SITE_URL, SITE_NAME,
} from '@/lib/seo';
import RecursosContent from './RecursosContent';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  setRequestLocale(locale);
  const url = pageUrl(locale, '/recursos');

  const titles: Record<string, string> = {
    es: 'Glosario de Trading de Commodities | TRUST TRADE ORG LLC',
    en: 'Commodity Trading Glossary | TRUST TRADE ORG LLC – Key Industry Terms',
    pt: 'Glossário de Trading de Commodities | TRUST TRADE ORG LLC',
  };
  const descriptions: Record<string, string> = {
    es: 'Glosario completo de términos del trading internacional de commodities: FOB, CIF, DLC, SGS, ICPO, B/L, NEXO DIRECTO, Due Diligence, M&A — definidos por TRUST TRADE ORG LLC, Miami Florida.',
    en: 'Complete glossary of international commodity trading terms: FOB, CIF, DLC, SGS, ICPO, B/L, NEXO DIRECTO, Due Diligence, M&A — defined by TRUST TRADE ORG LLC, Miami Florida.',
    pt: 'Glossário completo de termos do trading internacional de commodities: FOB, CIF, DLC, SGS, ICPO, B/L, NEXO DIRECTO, Due Diligence, M&A — definidos pela TRUST TRADE ORG LLC, Miami Florida.',
  };

  return {
    title: titles[locale] ?? titles.en,
    description: descriptions[locale] ?? descriptions.en,
    keywords: 'FOB, CIF, DLC, SGS, Bill of Lading, ICPO, Due Diligence, M&A, commodity trading glossary, NEXO DIRECTO, methanol trading terms',
    authors: [{ name: SITE_NAME }],
    robots: { index: true, follow: true },
    alternates: {
      canonical: url,
      languages: hreflangAlternates('/recursos'),
    },
    openGraph: {
      title: titles[locale] ?? titles.en,
      description: descriptions[locale] ?? descriptions.en,
      url,
      type: 'website',
      siteName: SITE_NAME,
      images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630, alt: 'TRUST TRADE Commodity Trading Glossary' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: titles[locale] ?? titles.en,
      description: descriptions[locale] ?? descriptions.en,
      images: [`${SITE_URL}/og-image.png`],
    },
  };
}

export default function RecursosPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);

  const crumbName: Record<string, string> = { es: 'Glosario', en: 'Glossary', pt: 'Glossário' };
  const schemas = [
    corporationSchema(),
    organizationSchema(),
    breadcrumbSchema([{ name: crumbName[locale] ?? 'Glossary', item: pageUrl(locale, '/recursos') }]),
  ];

  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(s) }} />
      ))}
      <RecursosContent />
    </>
  );
}
