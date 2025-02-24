import { rethinkSansMedium, rethinkSansBold } from './fonts'
import "./globals.css";

export const metadata = {
  title: 'Taller - Maximize your height | Official Website',
  description: 'Official website of Taller App - The #1 height prediction and maximization app. Used by 500,000+ people to reach their full height potential. Download the official Taller app today.',
  keywords: 'Taller app, Taller maximize height, height prediction app, height growth app, official Taller app, Taller, Grow Taller',
  metadataBase: new URL('https://tallerapp.xyz'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: 'Taller - Maximize your height | Official Website',
    description: 'Official website of Taller App - The #1 height prediction and maximization app. Download now.',
    siteName: 'Taller App',
    url: 'https://tallerapp.xyz',
    type: 'website',
    locale: 'en_US',
    images: [{
      url: 'https://tallerapp.xyz/images/logo.png',
      width: 1200,
      height: 630,
      alt: 'Taller App Logo',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Taller - Maximize your height',
    description: 'We analyze your growth potential and give you a custom plan to make sure you reach it',
    site: '@TallerApp',
    creator: '@TallerApp',
    images: {
      url: 'https://tallerapp.xyz/images/logo.png',
      alt: 'Taller App Logo',
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${rethinkSansMedium.variable} ${rethinkSansBold.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Taller App",
            "url": "https://tallerapp.xyz",
            "logo": "https://tallerapp.xyz/images/logo.png",
            "sameAs": [
              "https://tiktok.com/tallerapp",
              "https://instagram.com/taller.app"
              // Ajoutez vos autres réseaux sociaux
            ],
            "description": "The #1 height prediction and maximization app"
          })}
        </script>
      </head>
      <body className={rethinkSansMedium.className}>{children}</body>
    </html>
  );
}
