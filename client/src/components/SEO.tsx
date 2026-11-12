/* Per-page <head> tags: title, description, canonical, Open Graph/Twitter card and optional JSON-LD. */
import { Helmet } from "react-helmet-async";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

export interface SEOProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
  jsonLd?: Record<string, unknown>;
}

export default function SEO({ title, description, path = "", image = DEFAULT_OG_IMAGE, jsonLd }: SEOProps) {
  const fullUrl = `${SITE_URL}${path}`;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      {jsonLd && <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>}
    </Helmet>
  );
}
