// Testimonials section — hidden until real testimonials are available.
// To show: remove the `hidden` class from the outer section.
// Testimonial cards are pre-styled; replace placeholder content with real quotes.

const testimonials = [
  {
    quote:
      "Placeholder — replace with a real client testimonial once available.",
    author: "Client Name",
    title: "Title, Company",
  },
  {
    quote:
      "Placeholder — replace with a real client testimonial once available.",
    author: "Client Name",
    title: "Title, Company",
  },
  {
    quote:
      "Placeholder — replace with a real client testimonial once available.",
    author: "Client Name",
    title: "Title, Company",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="hidden py-16 lg:py-24 bg-gradient-to-br from-primary/5 via-background to-background"
      data-testid="section-testimonials"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            What Clients <span className="text-primary">Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Real results from real businesses
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-xl p-6 hover-elevate transition-all"
              data-testid={`card-testimonial-${i}`}
            >
              <blockquote className="text-muted-foreground leading-relaxed mb-6 text-sm italic">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.author}</p>
                  <p className="text-xs text-muted-foreground">{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
