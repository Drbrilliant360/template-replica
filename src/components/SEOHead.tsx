import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  path?: string;
  type?: string;
  image?: string;
  keywords?: string;
}

const SITE_NAME = "Tanzania Advisory Partners";
const BASE_URL = "https://www.tanzaniaadvisorypartners.co.tz";
const DEFAULT_IMAGE = `${BASE_URL}/og-image.jpg`;
const DEFAULT_KEYWORDS =
  "business advisory Tanzania, consulting services Tanzania, financial advisory Dar es Salaam, regulatory advisory Tanzania, work permit Tanzania, business registration Tanzania, foreign investment Tanzania, immigration advisory Tanzania, corporate compliance Tanzania";

const SEOHead = ({
  title,
  description,
  path = "",
  type = "website",
  image,
  keywords,
}: SEOHeadProps) => {
  const fullTitle = path === "/" || path === "" ? title : `${title} | ${SITE_NAME}`;
  const url = `${BASE_URL}${path}`;
  const ogImage = image || DEFAULT_IMAGE;
  const metaKeywords = keywords || DEFAULT_KEYWORDS;

  useEffect(() => {
    document.title = fullTitle;

    const setMeta = (attr: string, key: string, content: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("name", "description", description);
    setMeta("name", "keywords", metaKeywords);
    setMeta("name", "robots", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");
    setMeta("name", "googlebot", "index, follow");
    setMeta("name", "geo.region", "TZ-02");
    setMeta("name", "geo.placename", "Dar es Salaam");
    setMeta("name", "geo.position", "-6.7924;39.2083");
    setMeta("name", "ICBM", "-6.7924, 39.2083");

    // Open Graph
    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", description);
    setMeta("property", "og:type", type);
    setMeta("property", "og:url", url);
    setMeta("property", "og:site_name", SITE_NAME);
    setMeta("property", "og:locale", "en_US");
    setMeta("property", "og:image", ogImage);
    setMeta("property", "og:image:width", "1200");
    setMeta("property", "og:image:height", "630");
    setMeta("property", "og:image:alt", `${SITE_NAME} — Regulatory & Investment Advisory in Tanzania`);

    // Twitter
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", ogImage);

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = url;
  }, [fullTitle, description, url, type, ogImage, metaKeywords]);

  return null;
};

export default SEOHead;
