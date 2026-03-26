import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function LeadMagnetBand() {
  return (
    <section
      id="lead-magnet"
      className="py-14 bg-gradient-to-r from-primary to-[hsl(190,100%,45%)]"
      data-testid="section-lead-magnet"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
          Not Sure Where to Start?
        </h2>
        <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Get a free Salesforce Health Check. We'll review your current setup and give you
          a clear picture of what's working, what isn't, and where the biggest wins are.
        </p>
        <Button
          size="lg"
          asChild
          className="bg-white text-primary hover:bg-white/90 font-semibold min-w-[220px]"
          data-testid="button-health-check-band"
        >
          <Link href="/contact">
            Get Your Free Health Check
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
