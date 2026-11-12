/* Proof band: two concrete results with numbers. The client stays unnamed until they approve being named. */
import SectionHeading from "@/components/SectionHeading";

const RESULTS = [
  {
    stat: "Daily → a couple a month",
    label: "Installation errors",
    body: "Rebuilt the estimating process for a regional flooring market running up to 100 installs a week. First zero-rework month inside 90 days.",
  },
  {
    stat: "45 min → 5 min",
    label: "Order-to-invoice transaction",
    body: "Zoho build for an aftermarket parts supplier: orders and invoicing automated, with data validation built in. The owner can finally see his numbers.",
  },
];

export default function ProofBand() {
  return (
    <section className="relative py-16 lg:py-20 border-y border-border overflow-hidden" data-testid="section-proof">
      <div className="blueprint-grid absolute inset-0" aria-hidden="true" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title={<>Results, <span className="text-primary">not slides.</span></>} />
        <div className="grid md:grid-cols-2 gap-8">
          {RESULTS.map((r) => (
            <div key={r.label} className="border-l-4 border-primary pl-6">
              <p className="kicker mb-2">{r.label}</p>
              <p className="font-display uppercase font-extrabold text-4xl lg:text-5xl text-white leading-none mb-4">{r.stat}</p>
              <p className="text-muted-foreground leading-relaxed">{r.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
