import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import {
  pageUrl, hreflangAlternates, breadcrumbSchema, organizationSchema, corporationSchema, jsonLd, SITE_URL, SITE_NAME,
} from '@/lib/seo';
import AboutContent from './AboutContent';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  setRequestLocale(locale);
  const url = pageUrl(locale, '/about');

  const titles: Record<string, string> = {
    es: 'Sobre Trust Trade LLC | Equipo Experto en Commodity Trading | Miami',
    en: 'About Trust Trade LLC | Commodity Trading Experts | Miami-Based',
    pt: 'Sobre a Trust Trade LLC | Especialistas em Commodity Trading | Miami',
  };
  const descriptions: Record<string, string> = {
    es: 'Trust Trade LLC, empresa de trading de metanol registrada en Florida. Equipo experto con Nicolas Herrera, Henry Ramirez y Yamil Llaver. Confianza, velocidad y alcance global.',
    en: 'Trust Trade LLC: premium methanol trading company registered in Florida, USA. Expert team led by Nicolas Herrera, Henry Ramirez and Yamil Llaver. Global reach, transparent operations.',
    pt: 'Trust Trade LLC: empresa de trading de metanol registrada na Florida, EUA. Equipe especializada com Nicolas Herrera, Henry Ramirez e Yamil Llaver. Alcance global, transparência.',
  };

  return {
    title: titles[locale] ?? titles.en,
    description: descriptions[locale] ?? descriptions.en,
    keywords: 'Trust Trade LLC, methanol trading company, commodity broker, Florida LLC, Miami trading',
    authors: [{ name: SITE_NAME }],
    robots: { index: true, follow: true },
    alternates: {
      canonical: url,
      languages: hreflangAlternates('/about'),
    },
    openGraph: {
      title: titles[locale] ?? titles.en,
      description: descriptions[locale] ?? descriptions.en,
      url,
      type: 'website',
      siteName: SITE_NAME,
      images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630, alt: 'Trust Trade LLC Team' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: titles[locale] ?? titles.en,
      description: descriptions[locale] ?? descriptions.en,
      images: [`${SITE_URL}/og-image.png`],
    },
  };
}

export default function AboutPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);

  const crumbName: Record<string, string> = { es: 'Nosotros', en: 'About', pt: 'Sobre' };
  const schemas = [
    corporationSchema(),
    organizationSchema(),
    breadcrumbSchema([{ name: crumbName[locale] ?? 'About', item: pageUrl(locale, '/about') }]),
  ];

  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(s) }} />
      ))}
      <AboutContent />
    </>
  );
}
