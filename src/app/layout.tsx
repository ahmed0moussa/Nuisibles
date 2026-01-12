import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { VisualEditsMessenger } from "orchids-visual-edits";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Attrape Nuisibles à Paris - Pièges professionnels",
  description: "Découvrez nos solutions efficaces pour attraper les nuisibles à Paris. Pièges pour rats, souris et autres intrus.",
  robots: "index, follow",
  verification: {
    google: "NJAokNDF23vwURfXKEJDZ45XPQhbhR2ARPs73wehq_M",
  },
  openGraph: {
    title: "Attrape Nuisibles à Paris",
    description: "Solutions efficaces pour rats, souris et nuisibles à Paris.",
    url: "https://attrapenuisibles.fr",
    images: ["/images/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
