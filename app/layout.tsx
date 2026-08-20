import type { Metadata } from 'next';
import JsonLd from '../components/seo/JsonLd';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://imagespell.org';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'ImageSpell — Channel & Prompt Library',
    template: '%s | ImageSpell',
  },
  description:
    'ImageSpell is a comprehensive prompt library and AI image generation showcase designed for creators, designers, and prompt engineers.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'ImageSpell — Channel & Prompt Library',
    description:
      'ImageSpell is a comprehensive prompt library and AI image generation showcase designed for creators, designers, and prompt engineers.',
    url: baseUrl,
    siteName: 'ImageSpell',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `${baseUrl}/banner.jpg`,
        width: 1200,
        height: 630,
        alt: 'ImageSpell Banner',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ImageSpell — Channel & Prompt Library',
    description:
      'ImageSpell is a comprehensive prompt library and AI image generation showcase designed for creators, designers, and prompt engineers.',
    images: [`${baseUrl}/banner.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLdData = [
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ImageSpell',
    url: baseUrl,
    logo: `${baseUrl}/favicon.svg`,
    sameAs: ['https://github.com/v1per4ever/imagespell'],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'ImageSpell',
    url: baseUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${baseUrl}/?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'ImageSpell Prompt Library',
    operatingSystem: 'All',
    applicationCategory: 'DesignApplication',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <JsonLd data={jsonLdData} />
      </head>
      <body>{children}</body>
    </html>
  );
}
