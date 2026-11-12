/* About: Travis's origin story (estimating years, the installation-errors fix), how he works, and why he went out on his own. */
import { CheckCircle } from "lucide-react";
import headshotImage from "@assets/stock_images/web/headshot.webp";

const HOW_I_WORK = [
  "Platform-agnostic. Zoho or Salesforce, whichever fits your budget.",
  "Doing more with less. Systems your team will actually use, not shelfware.",
  "Straight talk. I'll tell you what's broken, even when it's uncomfortable.",
];

export default function About() {
  return (
    <section className="py-16 lg:py-24" data-testid="section-about">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-1">
          <img
            src={headshotImage}
            alt="Travis Dykstra"
            className="w-56 h-56 lg:w-full lg:h-auto rounded-lg object-cover border-4 border-primary/60 mx-auto"
          />
          <p className="kicker mt-4 text-center lg:text-left">Army Combat Veteran · Salesforce Certified</p>
        </div>

        <div className="lg:col-span-2 space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            I'm Travis Dykstra, owner of ConsultTech CRM. Before I ever touched a CRM, I spent my career in
            construction estimating, in flooring and commercial general contracting.
          </p>

          <h2 className="font-display uppercase text-3xl font-extrabold text-white pt-2">The pattern I couldn't unsee</h2>
          <p>
            For years I sat in quarterly all-hands meetings hearing the same thing: "We have to get a handle on
            installation errors." Everyone agreed. Nobody built the process to fix it. So nothing changed.
          </p>

          <h2 className="font-display uppercase text-3xl font-extrabold text-white pt-2">So I built it</h2>
          <p>
            When I got my own market, I built that process myself: a new estimating method, visual diagrams for
            installers, the software, and the training. Installation errors went from daily to a couple a month,
            and we hit our first zero-rework month inside 90 days.
          </p>
          <p>
            That's when it clicked. The plan is rarely the problem. The problem is that nothing is built to back it
            up, so people drift back to "how we've always done it." That's why I went into technology.
          </p>

          <h2 className="font-display uppercase text-3xl font-extrabold text-white pt-2">How I work</h2>
          <ul className="space-y-3">
            {HOW_I_WORK.map((item) => (
              <li key={item} className="flex gap-2">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h2 className="font-display uppercase text-3xl font-extrabold text-white pt-2">Why I went out on my own</h2>
          <p>
            To build a stable future for my family that lets me put them first, as it should be. I build for clients
            the same way: things that hold up.
          </p>
        </div>
      </div>
    </section>
  );
}
