import { MetadataRoute } from 'next';

const locales = ['es', 'en', 'pt'];
const routes = ['', '/product', '/about', '/how-it-works', '/contact'];
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://trusttradellc.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const route of routes) {
    for (const locale of locales) {
      const url = locale === 'es'
        ? `${siteUrl}${route}`
        : `${siteUrl}/${locale}${route}`;

      entries.push({
        url,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'weekly' : 'monthly',
        priority: route === '' ? 1 : 0.8,
      });
    }
  }

  return entries;
}
