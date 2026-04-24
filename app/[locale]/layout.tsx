import type { Metadata } from 'next';
import { Inter, DM_Sans } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Toaster } from 'sonner';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';
import '../globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dmsans',
  display: 'swap',
});

const locales = ['es', 'en', 'pt'];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://tradetrustt.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    siteName: 'Trust Trade LLC',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@trusttradellc',
  },
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Trust Trade LLC',
  url: siteUrl,
  logo: `${siteUrl}/favicon.png`,
  email: 'contact@trusttradellc.com',
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'Florida',
    addressCountry: 'US',
  },
  description: 'Direct methanol supplier. ASTM Grade AA, purity ≥99.85%. FOB & CIF worldwide delivery. Florida LLC.',
  knowsAbout: ['Methanol Trading', 'Chemical Commodities', 'FOB CIF Logistics', 'ASTM Grade AA Methanol'],
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(locale)) notFound();

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${dmSans.variable} font-dmsans antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <ChatBot />
          <Toaster
            position="bottom-right"
            toastOptions={{
              style: {
                background: '#0A1628',
                color: '#FFFFFF',
                border: '1px solid #C9A84C',
              },
            }}
          />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
