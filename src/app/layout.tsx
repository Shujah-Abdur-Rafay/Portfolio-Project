import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Libre_Baskerville, Poppins } from 'next/font/google';
import { cn } from '@/lib/utils';

const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-libre-baskerville',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['800'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Home - MIGUEL LÓPEZ',
  description: 'MIGUEL LÓPEZ * Based in Toronto, working worldwide Digital Strategy | Social Media | Copywriting',
  openGraph: {
    title: 'Home - MIGUEL LÓPEZ',
    description: 'MIGUEL LÓPEZ * Based in Toronto, working worldwide Digital Strategy | Social Media | Copywriting',
    url: 'https://www.sylviaogweng.com/',
    siteName: 'MIGUEL LÓPEZ',
    images: [
      {
        url: 'https://picsum.photos/seed/ogimage/1200/630',
        width: 1200,
        height: 630,
        alt: 'MIGUEL LÓPEZ digital presence',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Home - MIGUEL LÓPEZ',
    description: 'MIGUEL LÓPEZ * Based in Toronto, working worldwide Digital Strategy | Social Media | Copywriting',
    images: ['https://picsum.photos/seed/ogimage/1200/630'],
  },
  alternates: {
    canonical: 'https://www.sylviaogweng.com/',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("dark", poppins.variable, libreBaskerville.variable)}>
      <head>
      </head>
      <body className={cn("font-body bg-background text-foreground antialiased", poppins.variable, libreBaskerville.variable)}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
