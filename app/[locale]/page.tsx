import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import HeroSection from '@/components/home/HeroSection';
import TrustBar from '@/components/home/TrustBar';
import MarketIntelligence from '@/components/home/MarketIntelligence';
import ValueProposition from '@/components/home/ValueProposition';
import ProductPreview from '@/components/home/ProductPreview';
import CommoditiesSection from '@/components/home/CommoditiesSection';
import HowItWorksPreview from '@/components/home/HowItWorksPreview';
import IndustriesSection from '@/components/home/IndustriesSection';
import TeamSection from '@/components/home/TeamSection';
import FinalCTA from '@/components/home/FinalCTA';
import {
  pageUrl, hreflangAlternates, localBusinessSchema, jsonLd, SITE_URL, SITE_NAME,
} from '@/lib/seo';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  setRequestLocale(locale);
  const url = pageUrl(locale);

  const titles: Record<string, string> = {
    es: 'Trust Trade LLC | Trading de Metanol CH₃OH | FOB & CIF Global',
    en: 'Trust Trade LLC | Methanol Commodity Trading | FOB & CIF Global',
    pt: 'Trust Trade LLC | Trading de Metanol CH₃OH | FOB e CIF Global',
  };
  const descriptions: Record<string, string> = {
    es: 'Trust Trade LLC: acceso directo al suministro premium de metanol. Grado ASTM AA, pureza ≥99.85%. Entrega FOB y CIF en todo el mundo. Sin intermediarios. Florida, USA.',
    en: 'Trust Trade LLC: direct access to premium methanol supply. ASTM Grade AA, purity ≥99.85%. FOB & CIF worldwide delivery. No intermediaries. Florida, USA.',
    pt: 'Trust Trade LLC: acesso direto ao fornecimento premium de metanol. Grau ASTM AA, pureza ≥99,85%. Entrega FOB e CIF em todo o mundo. Florida, EUA.',
  };
  const keywords: Record<string, string> = {
    es: 'commodity trading, metanol, metanol grado AA, trading FOB CIF, Trust Trade LLC, trading Florida, intermediación commodities',
    en: 'commodity trading, methanol, methanol grade AA, FOB CIF trading, Trust Trade LLC, Florida trading company, methanol supplier',
    pt: 'commodity trading, metanol, metanol grau AA, trading FOB CIF, Trust Trade LLC, empresa de trading Florida, fornecedor metanol',
  };

  return {
    title: titles[locale] ?? titles.en,
    description: descriptions[locale] ?? descriptions.en,
    keywords: keywords[locale] ?? keywords.en,
    authors: [{ name: SITE_NAME }],
    robots: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' } as never,
    alternates: {
      canonical: url,
      languages: hreflangAlternates(),
    },
    openGraph: {
      title: titles[locale] ?? titles.en,
      description: descriptions[locale] ?? descriptions.en,
      url,
      type: 'website',
      siteName: SITE_NAME,
      images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630, alt: `${SITE_NAME} – Methanol Trading` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: titles[locale] ?? titles.en,
      description: descriptions[locale] ?? descriptions.en,
      images: [`${SITE_URL}/og-image.jpg`],
    },
  };
}

export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(localBusinessSchema()) }}
      />
      <HeroSection />
      <TrustBar />
      <MarketIntelligence />
      <ValueProposition />
      <ProductPreview />
      <CommoditiesSection />
      <HowItWorksPreview />
      <IndustriesSection />
      <TeamSection />
      <FinalCTA />
    </>
  );
}
