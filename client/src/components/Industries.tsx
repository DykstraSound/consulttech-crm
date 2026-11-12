/* The three industries served: shared data, a Home teaser grid, and the detailed blocks for /who-i-help. */
import { Link } from "wouter";
import { ArrowRight, CheckCircle } from "lucide-react";
import constructionImg from "@assets/stock_images/web/hero-construction.webp";
import manufacturingImg from "@assets/stock_images/web/manufacturing.webp";
import partsImg from "@assets/stock_images/web/parts-warehouse.webp";

export const INDUSTRIES = [
  {
    name: "Construction",
    image: constructionImg,
    blurb: "General contractors, specialty trades and flooring. Bids, estimates and the handoff to the field.",
    symptoms: [
      "Bids tracked in email threads and spreadsheets",
      "Estimates that don't match what the field installs",
      "No clear view of which jobs make money and which don't",
      "Handoffs from sales to production that drop details",
    ],
    help: "I build your bid-to-job process into the CRM: estimates, follow-ups and the handoff to the field in one place, with reports that show which jobs are making money.",
  },
  {
    name: "Manufacturing",
    image: manufacturingImg,
    blurb: "Shops and plants that quote, build and ship, often right alongside construction.",
    symptoms: [
      "Quotes that slip through the cracks",
      "Orders re-keyed between systems",
      "Customer history scattered across inboxes",
      "No forecast you'd bet on",
    ],
    help: "I connect quoting, orders and customer history so nothing gets typed twice, and your forecast comes from real numbers.",
  },
  {
    name: "Automotive Aftermarket",
    image: partsImg,
    blurb: "Parts suppliers, performance shops and builders.",
    symptoms: [
      "Orders and invoices built by hand",
      "Sales reps working out of their own spreadsheets",
      "No reporting on what sells, and to whom",
      "Error-prone transactions that eat the afternoon",
    ],
    help: "I automate the path from order to invoice and keep your reps in one system. For one parts supplier, that took a 45-minute transaction down to 5.",
  },
] as const;

export function IndustriesTeaser() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {INDUSTRIES.map((ind) => (
        <div key={ind.name} className="group overflow-hidden rounded-lg border border-border bg-card">
          <div className="relative h-48 overflow-hidden">
            <img src={ind.image} alt="" aria-hidden="true" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <h3 className="absolute bottom-4 left-4 font-display uppercase text-2xl font-extrabold text-white">{ind.name}</h3>
          </div>
          <p className="p-5 text-sm text-muted-foreground leading-relaxed">{ind.blurb}</p>
        </div>
      ))}
    </div>
  );
}

export function IndustryDetails() {
  return (
    <div className="space-y-16">
      {INDUSTRIES.map((ind, i) => (
        <article key={ind.name} className="grid lg:grid-cols-2 gap-8 items-center">
          <img
            src={ind.image}
            alt=""
            aria-hidden="true"
            className={`h-72 w-full rounded-lg object-cover border border-border ${i % 2 ? "lg:order-2" : ""}`}
          />
          <div>
            <h2 className="font-display uppercase text-4xl font-extrabold text-white mb-2">{ind.name}</h2>
            <p className="text-muted-foreground mb-5">{ind.blurb}</p>
            <p className="kicker mb-3">Sound familiar?</p>
            <ul className="space-y-2 mb-5">
              {ind.symptoms.map((s) => (
                <li key={s} className="flex gap-2 text-muted-foreground">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
            <p className="text-white leading-relaxed border-l-4 border-primary pl-4">{ind.help}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

export function IndustriesLink() {
  return (
    <div className="text-center mt-10">
      <Link href="/who-i-help" className="inline-flex items-center text-primary font-semibold hover:underline">
        See how I help each one <ArrowRight className="w-4 h-4 ml-2" />
      </Link>
    </div>
  );
}
