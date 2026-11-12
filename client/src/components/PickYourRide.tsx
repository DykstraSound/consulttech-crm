/* "Pick your ride": Zoho (budget workhorse) vs Salesforce (the hypercar). StoreConnect noted as a Salesforce-only add-on. */
import { CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeading from "@/components/SectionHeading";

const RIDES = [
  {
    name: "Zoho CRM",
    tagline: "The budget-friendly workhorse.",
    points: [
      "CRM, sales and invoicing without the big-platform price tag",
      "Right-sized for teams of 100 or fewer",
      "I run my own business on it",
    ],
  },
  {
    name: "Salesforce",
    tagline: "The hypercar.",
    points: [
      "Built for complex processes and serious growth",
      "Deep automation and reporting",
      "Selling B2B and direct-to-consumer? I also implement StoreConnect e-commerce on Salesforce",
    ],
  },
];

export default function PickYourRide() {
  return (
    <section className="py-16 lg:py-24" data-testid="section-pick-your-ride">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={<>Pick your <span className="text-primary">ride.</span></>}
          sub="I don't push a platform. The tool fits your budget and the way you work, not the other way around."
        />
        <div className="grid md:grid-cols-2 gap-6">
          {RIDES.map((ride) => (
            <Card key={ride.name} className="border-border bg-card/60">
              <CardContent className="p-8">
                <h3 className="font-display uppercase text-3xl font-extrabold text-white">{ride.name}</h3>
                <p className="text-primary font-semibold mb-5">{ride.tagline}</p>
                <ul className="space-y-3">
                  {ride.points.map((p) => (
                    <li key={p} className="flex gap-2 text-muted-foreground">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
