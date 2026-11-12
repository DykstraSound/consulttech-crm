/* Closing band used on every page: "Not for everyone" with the Punch List CTA, plus the talk-first card. */
import PunchListButton from "@/components/PunchListButton";
import TalkFirstCard from "@/components/TalkFirstCard";

export default function CtaBand() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/10 via-background to-[hsl(var(--brand-blue))]/10" data-testid="section-cta">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-5 gap-8 items-center">
        <div className="md:col-span-3">
          <h2 className="font-display uppercase font-extrabold text-4xl lg:text-5xl text-white leading-none mb-4">
            Not for <span className="text-primary">everyone.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            If you want someone to tell you everything's fine, I'm not your guy. If you know something's broken and
            you're ready to hear what it is, let's talk.
          </p>
          <PunchListButton size="lg" />
        </div>
        <div className="md:col-span-2">
          <TalkFirstCard />
        </div>
      </div>
    </section>
  );
}
