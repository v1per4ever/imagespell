import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://imagespell.org';

  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', '/about', '/services', '/blog/*'],
        disallow: ['/api/*', '/admin/*', '/.git/*', '/private/*'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
