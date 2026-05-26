import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import {
  pageUrl, hreflangAlternates, productSchema, breadcrumbSchema, organizationSchema, jsonLd, SITE_URL, SITE_NAME,
} from '@/lib/seo';
import ProductContent from './ProductContent';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  setRequestLocale(locale);
  const url = pageUrl(locale, '/product');

  const titles: Record<string, string> = {
    es: 'Comprar Metanol Grado AA | FOB & CIF | Trust Trade LLC',
    en: 'Buy Methanol Grade AA | FOB Pricing | Trust Trade LLC – Global Shipping',
    pt: 'Comprar Metanol Grau AA | FOB e CIF | Trust Trade LLC',
  };
  const descriptions: Record<string, string> = {
    es: 'Metanol premium CH₃OH Grado AA ASTM. Pureza 99.85% mínimo. Entrega FOB y CIF. Solicita cotización ahora — Trust Trade LLC, Florida.',
    en: 'Premium methanol CH₃OH ASTM Grade AA. 99.85% min purity. FOB & CIF delivery. SGS-inspected. Chemical tanker shipping worldwide. Quote now.',
    pt: 'Metanol premium CH₃OH Grau AA ASTM. Pureza mínima 99,85%. Entrega FOB e CIF. Cotação imediata — Trust Trade LLC, Florida.',
  };
  const keywords: Record<string, string> = {
    es: 'metanol grado AA, comprar metanol, metanol FOB, metanol CIF, CH3OH, metanol industrial, Trust Trade',
    en: 'methanol grade AA, buy methanol, methanol FOB, methanol CIF, CH3OH, industrial methanol, ASTM methanol, chemical tanker',
    pt: 'metanol grau AA, comprar metanol, metanol FOB, metanol CIF, CH3OH, metanol industrial',
  };

  return {
    title: titles[locale] ?? titles.en,
    description: descriptions[locale] ?? descriptions.en,
    keywords: keywords[locale] ?? keywords.en,
    authors: [{ name: SITE_NAME }],
    robots: { index: true, follow: true },
    alternates: {
      canonical: url,
      languages: hreflangAlternates('/product'),
    },
    openGraph: {
      title: titles[locale] ?? titles.en,
      description: descriptions[locale] ?? descriptions.en,
      url,
      type: 'website',
      siteName: SITE_NAME,
      images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630, alt: 'Methanol CH₃OH Grade AA – Trust Trade LLC' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: titles[locale] ?? titles.en,
      description: descriptions[locale] ?? descriptions.en,
      images: [`${SITE_URL}/og-image.jpg`],
    },
  };
}

export default function ProductPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);

  const crumbName: Record<string, string> = { es: 'Producto', en: 'Product', pt: 'Produto' };
  const schemas = [
    organizationSchema(),
    productSchema(),
    breadcrumbSchema([{ name: crumbName[locale] ?? 'Product', item: pageUrl(locale, '/product') }]),
  ];

  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(s) }} />
      ))}
      <ProductContent />
    </>
  );
}
