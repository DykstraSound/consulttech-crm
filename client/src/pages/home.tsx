/* Home page: hero, symptoms, process, proof, platform choice, industries and closing CTA. */
import PageLayout from "@/components/PageLayout";
import Hero from "@/components/Hero";
import SoundFamiliar from "@/components/SoundFamiliar";
import HowItWorks from "@/components/HowItWorks";
import ProofBand from "@/components/ProofBand";
import PickYourRide from "@/components/PickYourRide";
import SectionHeading from "@/components/SectionHeading";
import { IndustriesTeaser, IndustriesLink } from "@/components/Industries";
import CtaBand from "@/components/CtaBand";
import { SITE_URL } from "@/lib/site";

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "ConsultTech CRM",
  url: SITE_URL,
  description:
    "Zoho and Salesforce CRM implementation for construction, manufacturing and automotive aftermarket businesses with 100 people or fewer.",
  areaServed: "US",
  address: { "@type": "PostalAddress", addressLocality: "Wildersville", addressRegion: "TN", addressCountry: "US" },
  founder: { "@type": "Person", name: "Travis Dykstra" },
  sameAs: ["https://www.linkedin.com/in/travisjdykstra"],
};

export default function Home() {
  return (
    <PageLayout
      padTop={false}
      seo={{
        title: "ConsultTech CRM | You've Got the Plan. I Build the System Behind It.",
        description:
          "Zoho and Salesforce CRM for construction, manufacturing and automotive aftermarket businesses with 100 people or fewer. Start with a free 30-minute Punch List call and a written plan in 48 hours.",
        path: "/",
        jsonLd: JSON_LD,
      }}
    >
      <Hero />
      <SoundFamiliar />
      <HowItWorks />
      <ProofBand />
      <PickYourRide />
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={<>Who I <span className="text-primary">help</span></>}
            sub="Scrappy, blue-collar businesses that know two things: something's broken, and where they want to go."
          />
          <IndustriesTeaser />
          <IndustriesLink />
        </div>
      </section>
      <CtaBand />
    </PageLayout>
  );
}
