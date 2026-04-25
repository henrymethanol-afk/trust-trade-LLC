import type { Metadata } from 'next';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://tradetrustt.com';
  const url = locale === 'es' ? `${siteUrl}/solutions` : `${siteUrl}/${locale}/solutions`;

  const titles: Record<string, string> = {
    es: 'Soluciones Industriales | Trust Trade LLC',
    en: 'Industrial Solutions | Trust Trade LLC',
    pt: 'Soluções Industriais | Trust Trade LLC',
  };
  const descriptions: Record<string, string> = {
    es: 'Portafolio extendido de soluciones industriales. Tratamiento de agua, membranas, filtración, bombas y más. En alianza con Lenntech, líder mundial en tratamiento de agua.',
    en: 'Extended industrial solutions portfolio. Water treatment, membranes, filtration, pumps and more. In partnership with Lenntech, global leader in water treatment.',
    pt: 'Portfólio estendido de soluções industriais. Tratamento de água, membranas, filtração, bombas e mais. Em parceria com a Lenntech, líder mundial em tratamento de água.',
  };

  return {
    title: titles[locale] || titles.en,
    description: descriptions[locale] || descriptions.en,
    keywords: 'water treatment solutions, industrial filtration, membranes, pumps, lenntech partner, water treatment products',
    alternates: {
      canonical: url,
      languages: {
        'es': `${siteUrl}/solutions`,
        'en': `${siteUrl}/en/solutions`,
        'pt': `${siteUrl}/pt/solutions`,
        'x-default': `${siteUrl}/solutions`,
      },
    },
    openGraph: {
      title: titles[locale] || titles.en,
      description: descriptions[locale] || descriptions.en,
      url,
      type: 'website',
    },
  };
}

export default function SolutionsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
