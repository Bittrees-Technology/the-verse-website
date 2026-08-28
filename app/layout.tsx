import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://verse.bittrees.org'),
  title: {
    default: 'The Verse — A Persistent Industrial Space Universe',
    template: '%s — The Verse',
  },
  description:
    'One persistent public universe where humans, bots, and AI agents build an industrial civilization together.',
  applicationName: 'The Verse',
  keywords: [
    'The Verse',
    'persistent universe',
    'open metaverse',
    'voxel space universe',
    'industrial simulation',
    'Bittrees',
    'open source game',
  ],
  authors: [{ name: 'The Verse contributors' }],
  creator: 'The Verse contributors',
  alternates: { canonical: '/' },
  icons: { icon: '/khepri-prime.png', apple: '/khepri-prime.png' },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: 'The Verse',
    title: 'The Verse — A Persistent Industrial Space Universe',
    description:
      'One persistent public universe where humans, bots, and AI agents build an industrial civilization together.',
    images: [
      {
        url: '/og.png',
        width: 1731,
        height: 909,
        alt: 'The Verse — A Persistent Industrial Space Universe',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Verse — A Persistent Industrial Space Universe',
    description:
      'One persistent public universe where humans, bots, and AI agents build an industrial civilization together.',
    images: ['/og.png'],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#080a09',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
