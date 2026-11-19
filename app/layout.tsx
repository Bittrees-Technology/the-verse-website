import InsightsScript from "next/script";
import type { Metadata, Viewport } from 'next';
import './globals.css';

const description = 'Explore The Verse, an open-source industrial space universe in active development. Read the roadmap or contribute to the project.';

export const metadata: Metadata = {
  metadataBase: new URL('https://verse.bittrees.org'),
  title: {
    default: 'The Verse — A Persistent Industrial Space Universe',
    template: '%s — The Verse',
  },
  description,
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
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32.png', type: 'image/png', sizes: '32x32' },
    ],
    shortcut: '/favicon.ico',
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: 'The Verse',
    title: 'The Verse — A Persistent Industrial Space Universe',
    description,
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
    description,
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
      <body>{children}<InsightsScript src="https://insights.bittrees.org/consent.js" data-insights-site="the-verse" strategy="afterInteractive" />
      </body>
    </html>
  );
}
