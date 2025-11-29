import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cloud, ShoppingCart, Server, Settings, Users, Zap } from "lucide-react";

const primaryServices = [
  {
    icon: Cloud,
    title: "Salesforce Consulting",
    description: "Comprehensive Salesforce services from implementation to optimization. We help you leverage the full power of Salesforce to manage customer relationships, automate workflows, and drive sales growth.",
    features: ["Implementation & Setup", "Custom Development", "Integration Services", "Training & Support"],
    isPrimary: true,
  },
  {
    icon: ShoppingCart,
    title: "StoreConnect Services",
    description: "Expert StoreConnect administration and configuration services. Streamline your e-commerce operations with seamless integration between your storefront and back-office systems.",
    features: ["Platform Configuration", "Inventory Management", "Order Processing", "System Integration"],
    isPrimary: true,
  },
];

const secondaryServices = [
  {
    icon: Settings,
    title: "CRM Strategy",
    description: "Strategic consulting to help you choose and implement the right CRM solution for your business needs.",
  },
  {
    icon: Server,
    title: "AWS Cloud Services",
    description: "Cloud infrastructure design, deployment, and management to ensure scalability and reliability.",
  },
  {
    icon: Users,
    title: "User Training",
    description: "Comprehensive training programs to ensure your team gets the most out of your CRM investment.",
  },
  {
    icon: Zap,
    title: "Process Automation",
    description: "Automate repetitive tasks and workflows to increase efficiency and reduce manual errors.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-16 lg:py-24 bg-background"
      data-testid="section-services"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive CRM and cloud consulting services tailored to your business needs
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {primaryServices.map((service) => (
            <Card
              key={service.title}
              className="border-border border-2 hover-elevate transition-all"
              data-testid={`card-primary-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div className="w-14 h-14 rounded-md bg-primary/10 flex items-center justify-center">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <Badge className="bg-primary/10 text-primary border-0">Primary Service</Badge>
                </div>
                <CardTitle className="text-xl mt-4">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <Badge key={feature} variant="secondary" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <h3 className="text-2xl font-semibold text-foreground text-center mb-8">
          Additional Services
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {secondaryServices.map((service) => (
            <Card
              key={service.title}
              className="border-border hover-elevate transition-all"
              data-testid={`card-secondary-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-md bg-muted flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-6 h-6 text-muted-foreground" />
                </div>
                <h4 className="text-base font-semibold text-foreground mb-2">
                  {service.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
