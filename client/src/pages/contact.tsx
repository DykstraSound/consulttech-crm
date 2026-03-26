import Navigation from "@/components/Navigation";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const CALENDAR_LINK = "https://calendar.app.google/BJd5zjhMD5ZXctAx8";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Free Salesforce Health Check | ConsultTech CRM"
        description="Request your free Salesforce Health Check. We'll review your current setup and give you a clear, actionable assessment — no commitment, no sales pitch."
        path="/contact"
      />
      <Navigation calendarLink={CALENDAR_LINK} />
      <main className="pt-32">
        <Contact calendarLink={CALENDAR_LINK} />
      </main>
      <Footer calendarLink={CALENDAR_LINK} />
    </div>
  );
}
