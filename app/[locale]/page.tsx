import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import HeroSection from '@/components/home/HeroSection';
import TrustBar from '@/components/home/TrustBar';
import MarketIntelligence from '@/components/home/MarketIntelligence';
import ValueProposition from '@/components/home/ValueProposition';
import ProductPreview from '@/components/home/ProductPreview';
import HowItWorksPreview from '@/components/home/HowItWorksPreview';
import IndustriesSection from '@/components/home/IndustriesSection';
import TeamSection from '@/components/home/TeamSection';
import FinalCTA from '@/components/home/FinalCTA';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'meta.home' });
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://tradetrustt.com';
  const url = locale === 'es' ? siteUrl : `${siteUrl}/${locale}`;

  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    alternates: {
      canonical: url,
      languages: {
        'es': siteUrl,
        'en': `${siteUrl}/en`,
        'pt': `${siteUrl}/pt`,
        'x-default': siteUrl,
      },
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url,
      type: 'website',
      images: [{ url: `${siteUrl}/favicon.png`, width: 640, height: 640, alt: 'Trust Trade LLC' }],
    },
  };
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <MarketIntelligence />
      <ValueProposition />
      <ProductPreview />
      <HowItWorksPreview />
      <IndustriesSection />
      <TeamSection />
      <FinalCTA />
    </>
  );
}
