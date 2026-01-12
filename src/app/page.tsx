import Head from "next/head";
import Header from "@/components/sections/header";
import HeroSection from "@/components/sections/hero";
import Services from "@/components/sections/services";
import WhyChooseUs from "@/components/sections/why-choose-us";
import ProcessSection from "@/components/sections/process";
import ContactFormSection from "@/components/sections/contact-form";
import Footer from "@/components/sections/footer";
import StickyCTA from "@/components/sections/sticky-cta";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <Head>
        <title>Attrape Nuisibles à Paris - Pièges professionnels</title>
        <meta
          name="description"
          content="Découvrez nos solutions efficaces pour attraper les nuisibles à Paris. Pièges pour rats, souris et autres intrus."
        />
         <meta
          name="google-site-verification"
          content="NJAokNDF23vwURfXKEJDZ45XPQhbhR2ARPs73wehq_M"
        />
        <meta name="robots" content="index, follow" />
        {/* Open Graph pour réseaux sociaux */}
        <meta property="og:title" content="Attrape Nuisibles à Paris" />
        <meta
          property="og:description"
          content="Solutions efficaces pour rats, souris et nuisibles à Paris."
        />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta property="og:url" content="https://attrapenuisibles.fr" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Header />
      <main>
        <HeroSection />
        <Services />
        <WhyChooseUs />
        <ProcessSection />
        <ContactFormSection />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
}