import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Millenium Despachos Aduaneiros',
  description:
    'Despacho aduaneiro, comércio exterior e logística internacional para destravar cargas, reduzir riscos e dar previsibilidade à operação.',
  openGraph: {
    title: 'Millenium Despachos Aduaneiros',
    description:
      'Soluções aduaneiras para importadores e exportadores com estratégia documental, conformidade e acompanhamento próximo.',
    images: ['/og.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Millenium Despachos Aduaneiros',
    description:
      'Soluções aduaneiras para importadores e exportadores com estratégia documental, conformidade e acompanhamento próximo.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
