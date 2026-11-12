/* Contact page: header plus the Zoho intake form and talk-first card. */
import PageLayout from "@/components/PageLayout";
import PageHeader from "@/components/PageHeader";
import Contact from "@/components/Contact";

export default function ContactPage() {
  return (
    <PageLayout
      seo={{
        title: "Get Your Free Punch List | ConsultTech CRM",
        description:
          "Book a free 30-minute Punch List call, or send a few details first. You'll get a written plan for your CRM and your numbers within 48 hours.",
        path: "/contact",
      }}
    >
      <PageHeader
        kicker="Free · 30 minutes"
        title={<>Get your free <span className="text-primary">Punch List</span></>}
        intro="Book the call directly, or send me a few details first and I'll reach out. Either way, you leave with a written plan within 48 hours."
      />
      <Contact />
    </PageLayout>
  );
}
