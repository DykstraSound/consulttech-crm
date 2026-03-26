import { Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Settings, Server, Zap, ArrowRight } from "lucide-react";
import badgeImage from "@assets/Partner_Badges_Certified Partner.png";
import logoImage from "@assets/ConsultTech Logo1 Transparent_1764386506740.png";

const primaryServices = [
  {
    href: "/services/fractional-admin",
    logo: logoImage,
    title: "Fractional Salesforce Administration",
    badge: "Retainer-Based",
    description:
      "Get a certified Salesforce admin on your team without the cost of a full-time hire. Ongoing administration, user support, data management, and continuous optimization — all under a flexible monthly retainer.",
    features: ["Ongoing Admin Support", "User & Permission Management", "Data Quality & Maintenance", "Reports & Dashboards", "Release Management"],
  },
  {
    href: "/services/consulting",
    logo: badgeImage,
    title: "Salesforce Consulting & Implementation",
    badge: "Project-Based",
    description:
      "From greenfield implementations to complex customizations, we design and build Salesforce solutions that fit how your business actually operates — then hand them off with documentation and training.",
    features: ["Implementation & Setup", "Custom Development", "Integration Services", "Process Automation", "Training & Handoff"],
  },
];

const secondaryServices = [
  {
    icon: Settings,
    title: "StoreConnect",
    description: "Expert StoreConnect administration and configuration for seamless e-commerce and Salesforce integration.",
    href: "/contact?service=storeconnect",
  },
  {
    icon: Server,
    title: "AWS Cloud Services",
    description: "Cloud infrastructure design, deployment, and management to ensure scalability and security.",
    href: "/contact?service=aws",
  },
  {
    icon: Users,
    title: "User Training",
    description: "Comprehensive training programs to ensure your team gets the most from your Salesforce investment.",
    href: "/contact?service=training",
  },
  {
    icon: Zap,
    title: "Process Automation",
    description: "Automate repetitive tasks and workflows using Salesforce Flow to increase efficiency and reduce errors.",
    href: "/contact?service=automation",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-16 lg:py-24 bg-gradient-to-br from-background via-primary/5 to-background"
      data-testid="section-services"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Fractional Salesforce administration and consulting built around the way your business works
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {primaryServices.map((service) => (
            <Card
              key={service.title}
              className="border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-transparent hover-elevate transition-all flex flex-col"
              data-testid={`card-primary-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  <div className="w-24 h-24 rounded-md bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center flex-shrink-0">
                    <img src={service.logo} alt={service.title} className="w-20 h-20 object-contain" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between h-24">
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <Badge className="bg-primary text-primary-foreground border-0 w-fit">{service.badge}</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col flex-1">
                <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.map((feature) => (
                    <Badge key={feature} variant="secondary" className="text-xs bg-[hsl(190,100%,45%)]/10 text-[hsl(190,100%,35%)] dark:text-[hsl(190,100%,65%)] border-0">
                      {feature}
                    </Badge>
                  ))}
                </div>
                <div className="mt-auto">
                  <Button asChild variant="outline" className="w-full border-primary/40 hover:bg-primary/5">
                    <Link href={service.href}>
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <h3 className="text-2xl font-semibold text-foreground text-center mb-8">
          Additional <span className="text-primary">Services</span>
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {secondaryServices.map((service) => (
            <Link key={service.title} href={service.href}>
              <Card
                className="border-border hover-elevate transition-all group cursor-pointer h-full"
                data-testid={`card-secondary-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-md bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center mx-auto mb-4 group-hover:from-primary/20 group-hover:to-primary/10 transition-all">
                    <service.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <h4 className="text-base font-semibold text-foreground mb-2">{service.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
