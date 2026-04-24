import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'meta.about' });
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://tradetrustt.com';
  const url = locale === 'es' ? `${siteUrl}/about` : `${siteUrl}/${locale}/about`;

  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    alternates: {
      canonical: url,
      languages: {
        'es': `${siteUrl}/about`,
        'en': `${siteUrl}/en/about`,
        'pt': `${siteUrl}/pt/about`,
        'x-default': `${siteUrl}/about`,
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

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
