import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { VisualEditsMessenger } from "orchids-visual-edits";
import Head from "next/head";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <Head>
        <meta
          name="google-site-verification"
          content="NJAokNDF23vwURfXKEJDZ45XPQhbhR2ARPs73wehq_M"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Attrape Nuisibles à Paris" />
        <meta
          property="og:description"
          content="Solutions efficaces pour rats, souris et nuisibles à Paris."
        />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta property="og:url" content="https://attrapenuisibles.fr" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}