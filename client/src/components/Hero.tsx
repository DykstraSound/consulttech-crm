/* Home hero: the core promise, who it's for, and the Punch List call to action. */
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import PunchListButton from "@/components/PunchListButton";
import heroImage from "@assets/stock_images/web/hero-construction.webp";

export default function Hero() {
  return (
    <section className="relative flex min-h-[640px] lg:min-h-[720px] items-center overflow-hidden" data-testid="section-hero">
      <img src={heroImage} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/50" />
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <p className="kicker mb-5">CRM for construction, manufacturing &amp; automotive aftermarket</p>
        <h1 className="font-display uppercase font-extrabold text-white text-5xl sm:text-6xl lg:text-7xl leading-[0.92] max-w-4xl">
          The vision's usually right.
          <span className="block text-primary mt-2">I'll give you the tools to get it there.</span>
        </h1>
        <p className="mt-8 text-lg lg:text-xl text-gray-200 max-w-2xl leading-relaxed">
          CRM and sales systems for businesses with 100 people or fewer. Zoho or Salesforce, built to fit your
          budget and the way your crew actually works.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <PunchListButton size="lg" />
          <Button asChild size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10">
            <Link href="/how-it-works">See How It Works</Link>
          </Button>
        </div>
        <p className="mt-4 text-sm text-gray-400">Free 30-minute call. Written punch list in 48 hours.</p>
      </div>
      <div className="safety-stripe absolute bottom-0 inset-x-0 h-2" aria-hidden="true" />
    </section>
  );
}
