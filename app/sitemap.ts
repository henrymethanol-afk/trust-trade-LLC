import { MetadataRoute } from 'next';

const locales = ['es', 'en', 'pt'];
const routes = ['', '/product', '/solutions', '/about', '/how-it-works', '/contact'];
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://trusttradellc.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  const priorities: Record<string, number> = {
    '': 1.0,
    '/product': 0.9,
    '/contact': 0.9,
    '/solutions': 0.85,
    '/how-it-works': 0.8,
    '/about': 0.7,
  };

  const frequencies: Record<string, 'weekly' | 'monthly'> = {
    '': 'weekly',
    '/product': 'monthly',
    '/contact': 'monthly',
    '/solutions': 'monthly',
    '/how-it-works': 'monthly',
    '/about': 'monthly',
  };

  for (const route of routes) {
    for (const locale of locales) {
      const url = locale === 'es'
        ? `${siteUrl}${route}`
        : `${siteUrl}/${locale}${route}`;

      entries.push({
        url,
        lastModified: new Date(),
        changeFrequency: frequencies[route],
        priority: priorities[route],
      });
    }
  }

  return entries;
}
