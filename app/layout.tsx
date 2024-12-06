import type { Metadata } from 'next';
import { roboto } from './fonts';
import './globals.css';

export const metadata: Metadata = {
  title: {
    absolute: '',
    default: 'VestonVietHieu',
    template: '%s - Home',
  },
  icons: {
    icon: [
      {
        url: '/icon.ico',
      },
    ],
  },
  openGraph: {
    type: 'website',
    url: '',
    title: 'VestonVietHieu',
    description:
      'Your Trusted Partner for Affordable & Comprehensive Tech Solutions',
    siteName: 'VestonVietHieu',
    images: [
      {
        url: 'https://main.d1tllcoid227c3.amplifyapp.com/assets/cover-image.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full w-full bg-white ${roboto.variable}`}>
      <body>{children}</body>
    </html>
  );
}
