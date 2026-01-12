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