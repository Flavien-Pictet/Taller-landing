import { rethinkSansMedium, rethinkSansBold } from './fonts'
import "./globals.css";

export const metadata = {
  title: 'Taller - Height Growth & Prediction App | Official Website',
  description: 'The #1 height prediction and maximization app. Used by 500,000+ men to reach their full height potential through personalized plans. Download the official Taller app today.',
  keywords: 'Taller app, height prediction app, grow taller app, height growth tracker, height maximization, height potential, official Taller app',
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
    title: 'Taller - Height Growth & Prediction App | Official Website',
    description: 'The #1 height prediction and maximization app. Used by 500,000+ men to reach their full height potential through personalized plans.',
    siteName: 'Taller App',
    url: 'https://tallerapp.xyz',
    type: 'website',
    locale: 'en_US',
    images: [{
      url: 'https://tallerapp.xyz/images/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Taller App - Height Growth & Prediction',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Taller - Height Growth & Prediction App',
    description: 'We analyze your growth potential and give you a custom plan to make sure you reach it. Join 500,000+ users today.',
    site: '@TallerApp',
    creator: '@TallerApp',
    images: {
      url: 'https://tallerapp.xyz/images/twitter-card.png',
      alt: 'Taller App - Height Growth & Prediction',
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${rethinkSansMedium.variable} ${rethinkSansBold.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Taller App",
              "applicationCategory": "HealthApplication",
              "operatingSystem": "iOS, Android",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "500000",
                "bestRating": "5",
                "worstRating": "1"
              },
              "description": "The #1 height prediction and maximization app. Used by 500,000+ men to reach their full height potential through personalized plans.",
              "url": "https://tallerapp.xyz",
              "image": "https://tallerapp.xyz/images/logo.png",
              "sameAs": [
                "https://tiktok.com/tallerapp",
                "https://instagram.com/taller.app"
              ]
            })
          }}
        />
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How accurate is Taller's height prediction?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Taller's height prediction is 98.5% accurate, using machine learning and environmental factors to estimate your potential height."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I still grow taller after 18?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "While most height growth occurs before age 18, some people continue growing into their early 20s. The Taller app helps optimize factors that can influence your remaining growth potential."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How does Taller app help maximize height?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Taller provides personalized nutrition plans, exercise routines, sleep optimization, and posture correction techniques that can help you reach your maximum height potential."
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body className={rethinkSansMedium.className}>{children}</body>
    </html>
  );
}
