/* Shared page frame: SEO tags, fixed navigation, page content and footer. */
import type { ReactNode } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO, { type SEOProps } from "@/components/SEO";

interface PageLayoutProps {
  seo: SEOProps;
  children: ReactNode;
  /** Pad below the fixed nav. Off for pages whose hero sits under the nav. */
  padTop?: boolean;
}

export default function PageLayout({ seo, children, padTop = true }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <SEO {...seo} />
      <Navigation />
      <main className={padTop ? "pt-20" : undefined}>{children}</main>
      <Footer />
    </div>
  );
}
