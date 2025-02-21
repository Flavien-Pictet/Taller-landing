import { rethinkSansMedium, rethinkSansBold } from './fonts'
import "./globals.css";

export const metadata = {
  title: 'Taller - Maximize your height',
  description: 'We analyze your growth potential and give you a custom plan to make sure you reach it',
  openGraph: {
    title: 'Taller - Maximize your height',
    description: 'We analyze your growth potential and give you a custom plan to make sure you reach it',
    url: 'https://www.tallerapp.xyz',
    siteName: 'Taller',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Taller - Maximize your height',
    description: 'We analyze your growth potential and give you a custom plan to make sure you reach it',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${rethinkSansMedium.variable} ${rethinkSansBold.variable}`}>
      <body className={rethinkSansMedium.className}>{children}</body>
    </html>
  );
}
