import { useEffect, useId } from "react";

interface JsonLdProps {
  data: Record<string, unknown> | Array<Record<string, unknown>>;
  id?: string;
}

const JsonLd = ({ data, id }: JsonLdProps) => {
  const reactId = useId();
  const scriptId = `jsonld-${id || reactId.replace(/:/g, "")}`;

  useEffect(() => {
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.id = scriptId;
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(data);
    return () => {
      script?.remove();
    };
  }, [data, scriptId]);

  return null;
};

const BASE_URL = "https://www.tanzaniaadvisorypartners.co.tz";

// Organization / Local Business schema with full NAP, geo coords, hours
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${BASE_URL}/#organization`,
  name: "Tanzania Advisory Partners",
  alternateName: "TAP",
  description:
    "Boutique advisory firm providing regulatory, immigration, business registration, financial and corporate coordination support for foreign investors and organizations operating in Tanzania.",
  url: BASE_URL,
  logo: `${BASE_URL}/favicon.png`,
  image: `${BASE_URL}/og-image.jpg`,
  telephone: "+255655641642",
  email: "info@tanzaniaadvisorypartners.co.tz",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dar es Salaam",
    addressRegion: "Dar es Salaam",
    addressCountry: "TZ",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -6.7924,
    longitude: 39.2083,
  },
  areaServed: [
    { "@type": "Country", name: "Tanzania" },
    { "@type": "City", name: "Dar es Salaam" },
    { "@type": "City", name: "Arusha" },
    { "@type": "City", name: "Mwanza" },
    { "@type": "City", name: "Dodoma" },
  ],
  serviceType: [
    "Business Advisory Tanzania",
    "Regulatory Advisory",
    "Immigration & Work Permit Support",
    "Business Registration Tanzania",
    "Financial Advisory Dar es Salaam",
    "Corporate Compliance",
    "Investment Entry Advisory",
    "Property Due Diligence",
    "Customs & Import Support",
  ],
  knowsAbout: [
    "Tanzanian business regulations",
    "Foreign investment in Tanzania",
    "Work permits Tanzania",
    "Business registration Tanzania",
    "BRELA company registration",
    "TIC investment certificate",
    "TRA tax compliance",
    "Immigration Tanzania",
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:30",
      closes: "17:30",
    },
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+255655641642",
      contactType: "customer service",
      email: "info@tanzaniaadvisorypartners.co.tz",
      areaServed: "TZ",
      availableLanguage: ["English", "Swahili"],
    },
  ],
  sameAs: [],
};

// Website schema with SearchAction
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  name: "Tanzania Advisory Partners",
  url: BASE_URL,
  inLanguage: "en",
  publisher: { "@id": `${BASE_URL}/#organization` },
};

export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: item.url,
  })),
});

// Service catalog schema for the Services page
export const servicesSchema = (
  services: { name: string; description: string }[]
) => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Advisory Services Offered by Tanzania Advisory Partners",
  itemListElement: services.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Service",
      name: s.name,
      description: s.description,
      provider: { "@id": `${BASE_URL}/#organization` },
      areaServed: { "@type": "Country", name: "Tanzania" },
    },
  })),
});

// FAQ schema (used on Home / About / Services where relevant)
export const faqSchema = (faqs: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.answer,
    },
  })),
});

// Contact page schema
export const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Tanzania Advisory Partners",
  url: `${BASE_URL}/contact`,
  about: { "@id": `${BASE_URL}/#organization` },
};

export default JsonLd;
