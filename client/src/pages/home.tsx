import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Industries from "@/components/Industries";
import LeadMagnetBand from "@/components/LeadMagnetBand";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CALENDAR_LINK = "https://calendar.app.google/BJd5zjhMD5ZXctAx8";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Fractional Salesforce Admin & Consulting | ConsultTech CRM"
        description="Certified fractional Salesforce administrator and consultant serving manufacturing, construction, and distribution businesses. Get your free Salesforce Health Check today."
        path="/"
      />
      <Navigation calendarLink={CALENDAR_LINK} />
      <main>
        <Hero calendarLink={CALENDAR_LINK} />
        <HowItWorks />

        {/* Who We Help -industries teaser */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-background via-background to-primary/5">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Who We <span className="text-primary">Help</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Deep experience in the verticals where CRM complexity is highest - and the stakes are real.
              </p>
            </div>
            <Industries />
            <div className="text-center mt-10">
              <Button asChild variant="outline" className="border-primary/40 hover:bg-primary/5">
                <Link href="/industries">
                  See All Industries We Serve
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <LeadMagnetBand />
        <Testimonials />
      </main>
      <Footer calendarLink={CALENDAR_LINK} />
    </div>
  );
}
