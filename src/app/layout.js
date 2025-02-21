import { rethinkSansMedium, rethinkSansBold } from './fonts'
import "./globals.css";

export const metadata = {
  title: "Your Landing Page",
  description: "Your landing page description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${rethinkSansMedium.variable} ${rethinkSansBold.variable}`}>
      <body className={rethinkSansMedium.className}>{children}</body>
    </html>
  );
}
