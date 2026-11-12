/* The three-step process (Punch List, Build, Keep It Running). `detailed` adds the specifics shown on /how-it-works. */
import { Link } from "wouter";
import { ArrowRight, CheckCircle } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

export const STEPS = [
  {
    number: "1",
    title: "The Punch List",
    tag: "Free · 30 minutes",
    body: "We talk through your top 3 issues, where the business is versus where you want it, and your budget. Within 48 hours you get a written punch list: current state, goals, the right tools, and what to expect.",
    details: [
      "Come ready to talk about what's broken. It's not therapy, but it might feel like it.",
      "No pitch. We'll see if we're the right fit, no pressure.",
      "The punch list is yours to keep, whether we work together or not.",
    ],
  },
  {
    number: "2",
    title: "The Build",
    tag: "Usually 1–2 months",
    body: "A paid discovery session if we need one, then a proposal with pricing, timeline and the tools we'll use. I implement it, train your team, and take you live.",
    details: [
      "The proposal confirms the platform: Zoho or Salesforce.",
      "You set up admin access in your tools; I handle the build.",
      "Training is part of the job. A system nobody uses is a system that failed.",
    ],
  },
  {
    number: "3",
    title: "Keep It Running",
    tag: "Optional monthly support",
    body: "A set block of hours each month for fixes, troubleshooting, training and tweaks, so the system keeps up as the business grows.",
    details: [
      "We set it up while the build is underway, so there's no gap after go-live.",
      "Covers maintenance, troubleshooting, training new people, and small changes.",
    ],
  },
] as const;

export default function HowItWorks({ detailed = false }: { detailed?: boolean }) {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-background via-[hsl(var(--brand-blue))]/5 to-background" data-testid="section-how-it-works">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {!detailed && (
          <SectionHeading
            title={<>Three steps. <span className="text-primary">No surprises.</span></>}
            sub="Start with a free conversation. Leave with a plan, whether we work together or not."
          />
        )}
        <div className="grid md:grid-cols-3 gap-8">
          {STEPS.map((step) => (
            <div key={step.number} className="relative rounded-lg border border-border bg-card/60 p-6">
              <div className="font-display text-6xl font-extrabold text-primary leading-none mb-3">{step.number}</div>
              <h3 className="font-display uppercase text-2xl font-bold text-white">{step.title}</h3>
              <p className="kicker !text-xs mt-1 mb-4">{step.tag}</p>
              <p className="text-muted-foreground leading-relaxed">{step.body}</p>
              {detailed && (
                <ul className="mt-5 space-y-2">
                  {step.details.map((d) => (
                    <li key={d} className="flex gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        {!detailed && (
          <div className="text-center mt-10">
            <Link href="/how-it-works" className="inline-flex items-center text-primary font-semibold hover:underline">
              The full breakdown <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
