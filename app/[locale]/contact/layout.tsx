import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'meta.contact' });
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://tradetrustt.com';
  const url = locale === 'es' ? `${siteUrl}/contact` : `${siteUrl}/${locale}/contact`;

  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    alternates: {
      canonical: url,
      languages: {
        'es': `${siteUrl}/contact`,
        'en': `${siteUrl}/en/contact`,
        'pt': `${siteUrl}/pt/contact`,
        'x-default': `${siteUrl}/contact`,
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

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
