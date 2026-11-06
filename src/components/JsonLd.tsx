export function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "SeraHome",
    description:
      "Plant-based, high-touch home cleaning for East Bay estates. Same cleaner every visit, nothing missed, re-clean guarantee.",
    url: "https://serahome.co",
    areaServed: [
      "Berkeley",
      "Berkeley Hills",
      "Oakland",
      "Oakland Hills",
      "Piedmont",
      "Rockridge",
      "Alameda",
      "Emeryville",
    ],
    serviceType: [
      "House cleaning",
      "Deep cleaning",
      "Move-out cleaning",
      "Estate cleaning",
    ],
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Oakland",
      addressRegion: "CA",
      addressCountry: "US",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
