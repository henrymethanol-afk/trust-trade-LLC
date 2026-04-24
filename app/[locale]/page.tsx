import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import HeroSection from '@/components/home/HeroSection';
import TrustBar from '@/components/home/TrustBar';
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
  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      type: 'website',
    },
  };
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <ValueProposition />
      <ProductPreview />
      <HowItWorksPreview />
      <IndustriesSection />
      <TeamSection />
      <FinalCTA />
    </>
  );
}
