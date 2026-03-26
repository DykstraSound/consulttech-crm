import manufacturingImg from "@assets/stock_images/Manufacturing.jpg";
import constructionImg from "@assets/stock_images/Construction 2.jpg";
import distributionImg from "@assets/stock_images/Distribution.jpg";

const industries = [
  {
    name: "Manufacturing",
    image: manufacturingImg,
    description:
      "Streamline quoting, opportunity tracking, and supplier relationships with Salesforce built for manufacturers.",
  },
  {
    name: "Construction",
    image: constructionImg,
    description:
      "Manage bids, project pipelines, and subcontractor relationships with CRM configured for the way construction works.",
  },
  {
    name: "Distribution",
    image: distributionImg,
    description:
      "Optimize order management, customer accounts, and fulfillment visibility across complex distribution networks.",
  },
];

export default function Industries() {
  return (
    <div className="grid md:grid-cols-3 gap-8" data-testid="section-industries">
      {industries.map((industry) => (
        <div
          key={industry.name}
          className="group rounded-xl overflow-hidden border border-border bg-card hover-elevate transition-all"
          data-testid={`card-industry-${industry.name.toLowerCase()}`}
        >
          <div className="relative h-48 overflow-hidden">
            <img
              src={industry.image}
              alt={industry.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white">
              {industry.name}
            </h3>
          </div>
          <div className="p-6">
            <p className="text-sm text-muted-foreground leading-relaxed">
              {industry.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
