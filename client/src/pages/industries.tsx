import Navigation from "@/components/Navigation";
import Industries from "@/components/Industries";
import LeadMagnetBand from "@/components/LeadMagnetBand";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const CALENDAR_LINK = "https://calendar.app.google/BJd5zjhMD5ZXctAx8";

const industryDetails = [
  {
    name: "Manufacturing",
    challenges: [
      "Quoting and estimating cycles that slip through the cracks",
      "Opportunity tracking spread across email and spreadsheets",
      "No visibility into where deals are in the pipeline",
      "Disconnected systems between sales and production",
    ],
    howWeHelp:
      "We configure Salesforce to match your quoting and production workflows — giving your sales team a single source of truth and your leadership real-time pipeline visibility. Fractional admin keeps it running smoothly as your processes evolve.",
  },
  {
    name: "Construction",
    challenges: [
      "Bid management spread across email threads and shared drives",
      "No structured pipeline for tracking project opportunities",
      "Subcontractor and vendor relationships managed informally",
      "Lost follow-up on bids that don't close immediately",
    ],
    howWeHelp:
      "We build Salesforce around your bid-to-project lifecycle — from initial lead through awarded contract. Custom stages, automated follow-up reminders, and dashboards designed for how construction teams actually work.",
  },
  {
    name: "Distribution & Wholesale",
    challenges: [
      "Order management visibility is limited to the ERP",
      "No system for managing renewals and repeat customers",
      "Customer relationship history scattered across people and inboxes",
      "Sales reps lack tools to prioritize their book of business",
    ],
    howWeHelp:
      "We implement Salesforce to work alongside your ERP — capturing the customer relationship context your transactional systems can't. Renewal tracking, customer health scoring, and rep-facing dashboards that drive proactive account management.",
  },
  {
    name: "Professional Services",
    challenges: [
      "Pipeline tracking is inconsistent across the team",
      "Project handoffs from sales to delivery get lost",
      "No visibility into utilization or capacity",
      "Client success is reactive instead of proactive",
    ],
    howWeHelp:
      "We configure Salesforce to connect your sales pipeline to delivery — so nothing falls through the cracks at handoff. Account health tracking and structured client success workflows help you stay ahead of churn.",
  },
];

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Salesforce for Manufacturing, Construction & Distribution | ConsultTech CRM"
        description="Fractional Salesforce administration and consulting for manufacturing, construction, distribution, and professional services companies. Industry-specific expertise, not generic CRM advice."
        path="/industries"
      />
      <Navigation calendarLink={CALENDAR_LINK} />
      <main className="pt-32">

        {/* Header */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-background via-background to-primary/5">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Industries <span className="text-primary">We Serve</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Salesforce works across every industry — but the configuration, terminology, and workflows
                that make it valuable are different for a manufacturer than a distributor. We bring
                industry-specific experience, not generic CRM advice.
              </p>
            </div>
            <Industries />
          </div>
        </section>

        {/* Industry detail cards */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-background via-primary/5 to-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground text-center mb-12">
              Common <span className="text-primary">Challenges — and How We Solve Them</span>
            </h2>

            <div className="space-y-8">
              {industryDetails.map((industry) => (
                <Card
                  key={industry.name}
                  className="border-border bg-card"
                  data-testid={`card-detail-${industry.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <CardContent className="p-6 lg:p-8">
                    <div className="grid lg:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-4">
                          {industry.name}
                        </h3>
                        <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-3">
                          Common Pain Points
                        </p>
                        <ul className="space-y-2">
                          {industry.challenges.map((c) => (
                            <li key={c} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                              {c}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="lg:border-l lg:border-border lg:pl-8">
                        <p className="text-sm font-semibold text-[hsl(190,100%,35%)] dark:text-[hsl(190,100%,65%)] uppercase tracking-wide mb-3">
                          How We Help
                        </p>
                        <p className="text-muted-foreground leading-relaxed text-sm">
                          {industry.howWeHelp}
                        </p>
                        <Button asChild className="mt-6" variant="outline" size="sm">
                          <Link href="/contact">
                            <CheckCircle className="w-4 h-4 mr-2" />
                            Get a Free Health Check
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Any vertical CTA */}
        <section className="py-12 bg-gradient-to-br from-background to-primary/5">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Don't See Your Industry?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Salesforce is industry-agnostic — and so are we. Whatever vertical you're in,
              the fundamentals of good CRM administration apply. If you have Salesforce,
              we can help you get more from it.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">
                Let's Talk About Your Business
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </section>

        <LeadMagnetBand />
      </main>
      <Footer calendarLink={CALENDAR_LINK} />
    </div>
  );
}
