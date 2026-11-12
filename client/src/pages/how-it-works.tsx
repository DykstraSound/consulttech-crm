/* How It Works: the three steps in detail, how pricing works, platform choice and CTA. */
import PageLayout from "@/components/PageLayout";
import PageHeader from "@/components/PageHeader";
import HowItWorks from "@/components/HowItWorks";
import PickYourRide from "@/components/PickYourRide";
import SectionHeading from "@/components/SectionHeading";
import CtaBand from "@/components/CtaBand";

export default function HowItWorksPage() {
  return (
    <PageLayout
      seo={{
        title: "How It Works: Punch List, Build, Keep It Running | ConsultTech CRM",
        description:
          "Start with a free 30-minute Punch List call and a written plan in 48 hours. Then a 1–2 month build and optional monthly support. Zoho or Salesforce.",
        path: "/how-it-works",
      }}
    >
      <PageHeader
        kicker="Three steps, no surprises"
        title={<>How It <span className="text-primary">Works</span></>}
        intro="Start with a free conversation. Leave with a written plan. If we build it together, you'll know the scope, the timeline and the price before any work starts."
      />
      <HowItWorks detailed />
      <section className="py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={<>What it <span className="text-primary">costs</span></>}
            sub="Every business is different, so pricing is set in the proposal after the Punch List, fit to your budget and your tools. You'll know the number before any work starts."
          />
        </div>
      </section>
      <PickYourRide />
      <CtaBand />
    </PageLayout>
  );
}
