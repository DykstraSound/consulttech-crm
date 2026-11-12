/* About page: header, Travis's story and the closing CTA. */
import PageLayout from "@/components/PageLayout";
import PageHeader from "@/components/PageHeader";
import About from "@/components/About";
import CtaBand from "@/components/CtaBand";

export default function AboutPage() {
  return (
    <PageLayout
      seo={{
        title: "About Travis Dykstra | ConsultTech CRM",
        description:
          "Army Combat Veteran and Salesforce Certified consultant with a career in construction estimating. I build the CRM and sales systems that back up your plan.",
        path: "/about",
      }}
    >
      <PageHeader
        kicker="About"
        title={<>About <span className="text-primary">Travis</span></>}
        intro="The vision's usually right. I'll give you the tools to get it there."
      />
      <About />
      <CtaBand />
    </PageLayout>
  );
}
