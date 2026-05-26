import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import {
  pageUrl, hreflangAlternates, breadcrumbSchema, organizationSchema, jsonLd, SITE_URL, SITE_NAME,
} from '@/lib/seo';
import ContactContent from './ContactContent';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  setRequestLocale(locale);
  const url = pageUrl(locale, '/contact');

  const titles: Record<string, string> = {
    es: 'Contacto | Solicitar Cotización de Metanol | Trust Trade LLC',
    en: 'Contact Trust Trade LLC | Get Methanol Commodity Quote',
    pt: 'Contato | Solicitar Cotação de Metanol | Trust Trade LLC',
  };
  const descriptions: Record<string, string> = {
    es: 'Solicita cotización de metanol CH₃OH Grado AA. Respondemos en 24-48 horas hábiles. Email, WhatsApp, formulario RFQ. Miami, Florida.',
    en: 'Request a methanol CH₃OH Grade AA quote from Trust Trade LLC. We respond within 24-48 business hours. Email, WhatsApp, RFQ form. Miami, Florida.',
    pt: 'Solicite cotação de metanol CH₃OH Grau AA. Respondemos em 24-48 horas úteis. Email, WhatsApp, formulário RFQ. Miami, Florida.',
  };

  return {
    title: titles[locale] ?? titles.en,
    description: descriptions[locale] ?? descriptions.en,
    keywords: 'contact Trust Trade, methanol quote, buy methanol, RFQ methanol, commodity quote request',
    authors: [{ name: SITE_NAME }],
    robots: { index: true, follow: true },
    alternates: {
      canonical: url,
      languages: hreflangAlternates('/contact'),
    },
    openGraph: {
      title: titles[locale] ?? titles.en,
      description: descriptions[locale] ?? descriptions.en,
      url,
      type: 'website',
      siteName: SITE_NAME,
      images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630, alt: 'Contact Trust Trade LLC' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: titles[locale] ?? titles.en,
      description: descriptions[locale] ?? descriptions.en,
      images: [`${SITE_URL}/og-image.png`],
    },
  };
}

export default function ContactPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);

  const crumbName: Record<string, string> = { es: 'Contacto', en: 'Contact', pt: 'Contato' };
  const schemas = [
    organizationSchema(),
    breadcrumbSchema([{ name: crumbName[locale] ?? 'Contact', item: pageUrl(locale, '/contact') }]),
  ];

  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(s) }} />
      ))}
      <ContactContent />
    </>
  );
}
