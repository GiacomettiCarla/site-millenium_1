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
    'Despacho aduaneiro, comercio exterior e logistica internacional com atendimento consultivo desde 1998.',
  openGraph: {
    title: 'Millenium Despachos Aduaneiros',
    description:
      'Solucoes aduaneiras para importadores e exportadores com etica, transparencia e compromisso.',
    images: ['/og.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Millenium Despachos Aduaneiros',
    description:
      'Solucoes aduaneiras para importadores e exportadores com etica, transparencia e compromisso.',
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
