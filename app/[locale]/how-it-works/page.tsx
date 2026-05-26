import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import {
  pageUrl, hreflangAlternates, faqSchema, breadcrumbSchema, organizationSchema, jsonLd, SITE_URL, SITE_NAME,
} from '@/lib/seo';
import HowItWorksContent from './HowItWorksContent';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  setRequestLocale(locale);
  const url = pageUrl(locale, '/how-it-works');

  const titles: Record<string, string> = {
    es: 'Cómo Funciona | Proceso de Compra de Metanol | Trust Trade LLC',
    en: 'How It Works | Methanol Buying Process | Trust Trade LLC',
    pt: 'Como Funciona | Processo de Compra de Metanol | Trust Trade LLC',
  };
  const descriptions: Record<string, string> = {
    es: 'Proceso simple de 4 pasos para comprar metanol: envía RFQ, recibe cotización en 24-48h, firma contrato, coordina entrega FOB o CIF. Trust Trade LLC.',
    en: 'Simple 4-step process to buy methanol: send RFQ, receive quote in 24-48h, sign contract, coordinate FOB or CIF delivery. Trust Trade LLC.',
    pt: 'Processo simples de 4 etapas para comprar metanol: envie RFQ, receba cotação em 24-48h, assine contrato, coordene entrega FOB ou CIF.',
  };

  return {
    title: titles[locale] ?? titles.en,
    description: descriptions[locale] ?? descriptions.en,
    keywords: 'buy methanol process, methanol RFQ, FOB CIF methanol, methanol trading process, commodity quote',
    authors: [{ name: SITE_NAME }],
    robots: { index: true, follow: true },
    alternates: {
      canonical: url,
      languages: hreflangAlternates('/how-it-works'),
    },
    openGraph: {
      title: titles[locale] ?? titles.en,
      description: descriptions[locale] ?? descriptions.en,
      url,
      type: 'website',
      siteName: SITE_NAME,
      images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630, alt: 'How to buy methanol – Trust Trade LLC' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: titles[locale] ?? titles.en,
      description: descriptions[locale] ?? descriptions.en,
      images: [`${SITE_URL}/og-image.jpg`],
    },
  };
}

export default async function HowItWorksPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: 'howItWorks' });
  const faqs = t.raw('faqs') as Array<{ q: string; a: string }>;

  const crumbName: Record<string, string> = { es: 'Cómo Funciona', en: 'How It Works', pt: 'Como Funciona' };
  const schemas = [
    organizationSchema(),
    faqSchema(faqs),
    breadcrumbSchema([{ name: crumbName[locale] ?? 'How It Works', item: pageUrl(locale, '/how-it-works') }]),
  ];

  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(s) }} />
      ))}
      <HowItWorksContent />
    </>
  );
}
