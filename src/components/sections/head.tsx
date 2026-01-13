export default function HeadComponent() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Attrape Nuisibles Paris",
            image: "https://attrapenuisibles.fr/images/og-image.png",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Adresse exemple",
              addressLocality: "Paris",
              postalCode: "75000",
              addressCountry: "FR",
            },
            url: "https://attrapenuisibles.fr",
            telephone: "+33 6 12 34 56 78",
            openingHours: "Mo,Tu,We,Th,Fr 09:00-18:00",
          }),
        }}
      />
    </>
  );
}
