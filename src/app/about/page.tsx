// app/about/page.tsx  (Server Component)
import type { Metadata } from 'next';
import AboutClient from './AboutClient'; // <-- file must exist and default-export a component

export const metadata: Metadata = {
  title: 'About',
  description:
    'SIGNS is a luxury-leaning crypto culture club: conviction, patience, and wealth-building — where the lifestyle does the talking.',
  alternates: { canonical: '/about' },
  openGraph: {
    type: 'website',
    siteName: 'SIGNS',
    title: 'About · SIGNS',
    description:
      'SIGNS is a luxury-leaning crypto culture club: conviction, patience, and wealth-building — where the lifestyle does the talking.',
    url: '/about',
    images: [{ url: '/images/og/signs-about-og.jpg', width: 1200, height: 630, alt: 'SIGNS — Club for Extravagant Degenerates' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About · SIGNS',
    description:
      'SIGNS is a luxury-leaning crypto culture club: conviction, patience, and wealth-building — where the lifestyle does the talking.',
    images: ['/images/og/signs-about-og.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  themeColor: '#000000',
};

export default function Page() {
  return <AboutClient />;
}
