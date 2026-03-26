import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LeadMagnetBand from "@/components/LeadMagnetBand";
import SEO from "@/components/SEO";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight, Layers, Zap, BookOpen, Puzzle } from "lucide-react";

const CALENDAR_LINK = "https://calendar.app.google/BJd5zjhMD5ZXctAx8";

const deliverables = [
  {
    icon: Layers,
    title: "Implementation & Setup",
    description: "Full Salesforce implementations configured around your business processes — from initial data model design through go-live.",
  },
  {
    icon: Puzzle,
    title: "Custom Development & Configuration",
    description: "Custom objects, flows, validation rules, and page layouts tailored to how your team actually works, not how Salesforce works out of the box.",
  },
  {
    icon: Zap,
    title: "Integration Services",
    description: "Connecting Salesforce to your ERP, marketing tools, email systems, and other platforms so data flows where it needs to without manual entry.",
  },
  {
    icon: BookOpen,
    title: "Training & Documentation",
    description: "Hands-on training sessions and process documentation so your team can use the system confidently after handoff — and onboard new users independently.",
  },
];

const process = [
  { step: "01", title: "Discovery", description: "We learn your business, your processes, and what success looks like. No assumptions." },
  { step: "02", title: "Design", description: "We map out the solution architecture and get your sign-off before a line of configuration is written." },
  { step: "03", title: "Build", description: "We configure, test, and iterate — keeping you informed at every milestone." },
  { step: "04", title: "Deploy & Train", description: "Go-live with hands-on training and documentation. You leave knowing how to use what we built." },
];

export default function ConsultingPage() {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Salesforce Consulting & Implementation | ConsultTech CRM"
        description="Project-based Salesforce consulting and implementation services. From greenfield builds to complex integrations — designed around your business, delivered with documentation and training."
        path="/services/consulting"
      />
      <Navigation calendarLink={CALENDAR_LINK} />
      <main className="pt-32">

        {/* Hero */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-background via-primary/5 to-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge className="bg-primary/10 text-primary border-0 mb-6 text-sm font-semibold">
              Project-Based Service
            </Badge>
            <h1 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Salesforce Consulting
              <span className="block text-primary">&amp; Implementation</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Purpose-built Salesforce implementations designed around your business — not a generic template.
              From initial setup through integration, training, and handoff.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Get Your Free Health Check
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href={CALENDAR_LINK} target="_blank" rel="noopener noreferrer">
                  Book a Call First
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Deliverables */}
        <section className="py-16 lg:py-20 bg-gradient-to-br from-background to-primary/5">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground text-center mb-12">
              What We <span className="text-primary">Deliver</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {deliverables.map((item) => (
                <Card key={item.title} className="border-border hover-elevate transition-all group">
                  <CardContent className="p-6 flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-md bg-gradient-to-br from-primary/20 to-[hsl(190,100%,45%)]/20 flex items-center justify-center group-hover:from-primary/30 transition-all">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-foreground mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 lg:py-20 bg-gradient-to-br from-primary/5 via-background to-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground text-center mb-12">
              How a Project <span className="text-primary">Works</span>
            </h2>
            <div className="space-y-6">
              {process.map((p) => (
                <div key={p.step} className="flex gap-6 items-start">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center flex-shrink-0 shadow">
                    <span className="text-lg font-bold text-primary-foreground">{p.step}</span>
                  </div>
                  <div className="pt-2">
                    <h3 className="text-lg font-semibold text-foreground mb-1">{p.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{p.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 p-6 rounded-xl border border-primary/20 bg-primary/5">
              <p className="text-muted-foreground text-sm leading-relaxed flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                Many clients follow a consulting engagement with an ongoing fractional admin retainer — ensuring what
                we build keeps running well as your business evolves.
              </p>
            </div>

            <div className="text-center mt-10">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Start with a Free Health Check
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <LeadMagnetBand />
      </main>
      <Footer calendarLink={CALENDAR_LINK} />
    </div>
  );
}
