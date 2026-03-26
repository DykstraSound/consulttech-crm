const steps = [
  {
    number: "01",
    title: "Audit",
    description:
      "We start with a free Salesforce Health Check — reviewing your current setup, identifying gaps, and mapping what's holding your team back.",
  },
  {
    number: "02",
    title: "Recommend",
    description:
      "You receive a clear, jargon-free action plan with prioritized recommendations tailored to your business goals and budget.",
  },
  {
    number: "03",
    title: "Execute",
    description:
      "We implement the plan — whether that means configuring automations, cleaning data, building reports, or handling a full implementation.",
  },
  {
    number: "04",
    title: "Support",
    description:
      "Ongoing fractional administration keeps your org healthy, your users supported, and your Salesforce investment growing with your business.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-16 lg:py-24 bg-gradient-to-br from-background via-[hsl(190,100%,45%)]/5 to-background"
      data-testid="section-how-it-works"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From first conversation to long-term partnership — a simple, proven process
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative flex flex-col items-center text-center group">
              {/* Connector line (desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[calc(50%+2.5rem)] w-[calc(100%-5rem)] h-px bg-border group-last:hidden" />
              )}
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center mb-6 flex-shrink-0 shadow-lg">
                <span className="text-2xl font-bold text-primary-foreground">{step.number}</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
