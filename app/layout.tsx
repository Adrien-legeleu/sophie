import type { Metadata } from 'next';
import { Cormorant_Garamond, Lora } from 'next/font/google';
import './globals.css';
import { Header } from './components/Header/Header';
import Footer from './components/Footer/Footer';

// 🟣 METADATA OPTIMISÉ
export const metadata: Metadata = {
  title: 'Sophie Dénériaz | Massothérapeute certifiée à Lutry, Suisse',
  description:
    'Sophie Dénériaz, praticienne certifiée en massage bien-être et réflexologie à Lutry. Prenez rendez-vous pour un moment de détente et de relaxation adapté à vos besoins.',
  keywords: [
    'massage',
    'massothérapeute',
    'réflexologie',
    'relaxation',
    'Suisse',
    'Lutry',
    'soins bien-être',
    'Sophie Dénériaz',
  ],
  // Icône de l’onglet
  icons: [
    { rel: 'icon', url: '/logo_site.avif', type: 'image/avif' }, // logo moderne
    { rel: 'icon', url: '/favicon.ico', type: 'image/x-icon' }, // backup standard
  ],
  openGraph: {
    title: 'Sophie Dénériaz | Massothérapeute à Lutry (Suisse)',
    description:
      'Offrez-vous une pause bien-être avec Sophie Dénériaz, spécialiste en massage et réflexologie à Lutry, Suisse.',
    url: 'https://votre-site.ch', // 🔄 À personnaliser
    siteName: 'Sophie Dénériaz Massothérapeute',
    images: [
      {
        url: '/logo_site.avif',
        width: 600,
        height: 600,
        alt: 'Logo Sophie Dénériaz massothérapeute à Lutry',
      },
    ],
    locale: 'fr_CH',
    type: 'website',
  },
  // Accessibilité (screen readers)
  alternates: {
    canonical: 'https://votre-site.ch', // 🔄 À personnaliser
    languages: {
      'fr-CH': 'https://votre-site.ch',
    },
  },
};

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});
const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-lora',
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        {/* Bonus pour SEO & accessibilité */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#fff" />
        {/* Le favicon est déjà injecté par Next.js si icons est bien renseigné */}
      </head>
      <body className={`${cormorant.variable} ${lora.variable} antialiased`}>
        <header>
          <Header />
        </header>
        {children}
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
