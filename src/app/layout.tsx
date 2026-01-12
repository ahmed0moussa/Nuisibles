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
         <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Attrape Nuisibles Paris",
                "image": "https://attrapenuisibles.fr/images/og-image.jpg",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Adresse exemple",
                  "addressLocality": "Paris",
                  "postalCode": "75000",
                  "addressCountry": "FR"
                },
                "url": "https://attrapenuisibles.fr",
                "telephone": "+33 6 12 34 56 78",
                "openingHours": "Mo,Tu,We,Th,Fr 09:00-18:00"
              })
            }}
          />
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}