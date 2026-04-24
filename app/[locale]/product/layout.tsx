import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'meta.product' });
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://tradetrustt.com';
  const url = locale === 'es' ? `${siteUrl}/product` : `${siteUrl}/${locale}/product`;

  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    alternates: {
      canonical: url,
      languages: {
        'es': `${siteUrl}/product`,
        'en': `${siteUrl}/en/product`,
        'pt': `${siteUrl}/pt/product`,
        'x-default': `${siteUrl}/product`,
      },
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url,
      type: 'website',
      images: [{ url: `${siteUrl}/favicon.png`, width: 640, height: 640, alt: 'Trust Trade LLC – Methanol' }],
    },
  };
}

export default function ProductLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
