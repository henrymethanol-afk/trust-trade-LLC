import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'meta.howItWorks' });
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://tradetrustt.com';
  const url = locale === 'es' ? `${siteUrl}/how-it-works` : `${siteUrl}/${locale}/how-it-works`;

  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    alternates: {
      canonical: url,
      languages: {
        'es': `${siteUrl}/how-it-works`,
        'en': `${siteUrl}/en/how-it-works`,
        'pt': `${siteUrl}/pt/how-it-works`,
        'x-default': `${siteUrl}/how-it-works`,
      },
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url,
      type: 'website',
    },
  };
}

export default function HowItWorksLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
