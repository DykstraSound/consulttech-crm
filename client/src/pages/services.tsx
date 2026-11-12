import Navigation from "@/components/Navigation";
import Services from "@/components/Services";
import LeadMagnetBand from "@/components/LeadMagnetBand";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";


export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Fractional Salesforce Services - Retainer &amp; Projects | ConsultTech CRM"
        description="Fractional Salesforce administration on retainer or project-based consulting and implementation. Certified expertise for manufacturing, construction, and distribution businesses."
        path="/services"
      />
      <Navigation />
      <main className="pt-32">
        <Services />
        <LeadMagnetBand />
      </main>
      <Footer />
    </div>
  );
}
