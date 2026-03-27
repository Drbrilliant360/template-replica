import { useEffect } from "react";

const JSONLD_ID = "jsonld-structured-data";

interface JsonLdProps {
  data: Record<string, unknown>;
}

const JsonLd = ({ data }: JsonLdProps) => {
  useEffect(() => {
    let script = document.getElementById(JSONLD_ID) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.id = JSONLD_ID;
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(data);
    return () => {
      script?.remove();
    };
  }, [data]);

  return null;
};

// Prebuilt structured data
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Tanzania Advisory Partners",
  description:
    "Boutique advisory firm providing regulatory, immigration, and corporate coordination support for foreign investors and organizations operating in Tanzania.",
  url: "https://tanzaniaadvisorypartners.com",
  telephone: "+255123456789",
  email: "info@tanzaniaadvisory.co.tz",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dar es Salaam",
    addressCountry: "TZ",
  },
  areaServed: {
    "@type": "Country",
    name: "Tanzania",
  },
  serviceType: [
    "Regulatory Advisory",
    "Immigration Support",
    "Business Registration",
    "Tax Advisory",
    "Corporate Compliance",
    "Work Permit Processing",
  ],
  knowsAbout: [
    "Tanzanian business regulations",
    "Foreign investment in Tanzania",
    "Work permits Tanzania",
    "Business registration Tanzania",
  ],
  sameAs: [],
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

export default JsonLd;
