import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LeadMagnetBand from "@/components/LeadMagnetBand";
import SEO from "@/components/SEO";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight, Users, Shield, BarChart3, Settings } from "lucide-react";

const CALENDAR_LINK = "https://calendar.app.google/BJd5zjhMD5ZXctAx8";

const included = [
  {
    icon: Users,
    title: "User & Permission Management",
    description: "Onboarding new users, managing profiles and permission sets, and keeping access controls aligned with your organizational structure.",
  },
  {
    icon: Shield,
    title: "Data Quality & Governance",
    description: "Deduplication, validation rules, field cleanup, and maintaining data standards so your CRM stays a trusted source of truth.",
  },
  {
    icon: BarChart3,
    title: "Reports & Dashboards",
    description: "Building and maintaining the reports and dashboards your team needs to see what's happening in the business - in real time.",
  },
  {
    icon: Settings,
    title: "Configuration & Optimization",
    description: "Ongoing configuration changes, workflow adjustments, and process improvements as your business evolves - without a project each time.",
  },
];

const isRightFor = [
  "You have Salesforce but no dedicated admin on staff",
  "Your CRM is underused, messy, or not keeping pace with your process",
  "You need someone who shows up consistently, not just for one-off projects",
  "You want a trusted expert you can call without worrying about hourly billing",
  "Your team is growing and Salesforce needs to grow with it",
];

export default function FractionalAdminPage() {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Fractional Salesforce Administrator | ConsultTech CRM"
        description="Get a certified Salesforce administrator without a full-time hire. Ongoing support, data management, reporting, and continuous optimization on a flexible monthly retainer."
        path="/services/fractional-admin"
      />
      <Navigation calendarLink={CALENDAR_LINK} />
      <main className="pt-32">

        {/* Hero */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-background via-primary/5 to-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge className="bg-primary/10 text-primary border-0 mb-6 text-sm font-semibold">
              Retainer-Based Service
            </Badge>
            <h1 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Fractional Salesforce
              <span className="block text-primary">Administration</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              A certified Salesforce administrator on your team - on demand, without the overhead of
              a full-time hire. Ongoing support, optimization, and expertise under a flexible monthly retainer.
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

        {/* What's included */}
        <section className="py-16 lg:py-20 bg-gradient-to-br from-background to-primary/5">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground text-center mb-12">
              What's <span className="text-primary">Included</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {included.map((item) => (
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

        {/* Is it right for you */}
        <section className="py-16 lg:py-20 bg-gradient-to-br from-primary/5 via-background to-background">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground text-center mb-10">
              This Is Right for You If…
            </h2>
            <ul className="space-y-4">
              {isRightFor.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
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
