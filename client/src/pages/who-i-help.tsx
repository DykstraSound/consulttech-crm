/* Who I Help: construction, manufacturing and automotive aftermarket, each with symptoms and how I help. */
import PageLayout from "@/components/PageLayout";
import PageHeader from "@/components/PageHeader";
import { IndustryDetails } from "@/components/Industries";
import ProofBand from "@/components/ProofBand";
import CtaBand from "@/components/CtaBand";

export default function WhoIHelpPage() {
  return (
    <PageLayout
      seo={{
        title: "CRM for Construction, Manufacturing & Automotive Aftermarket | ConsultTech CRM",
        description:
          "CRM and sales systems for contractors, manufacturers and aftermarket parts suppliers with 100 people or fewer. Zoho or Salesforce, built around how your business actually runs.",
        path: "/who-i-help",
      }}
    >
      <PageHeader
        kicker="100 people or fewer"
        title={<>Who I <span className="text-primary">Help</span></>}
        intro="Owners and operators who know two things: something is broken, and exactly where they want the business to go. If you're running on spreadsheets or a half-built system, you're in the right place."
      />
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <IndustryDetails />
        </div>
      </section>
      <ProofBand />
      <CtaBand />
    </PageLayout>
  );
}
