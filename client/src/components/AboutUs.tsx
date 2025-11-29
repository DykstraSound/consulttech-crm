import { Card, CardContent } from "@/components/ui/card";
import { Cloud, Database, Cog, Server } from "lucide-react";

const services = [
  {
    icon: Cloud,
    title: "Salesforce",
    description: "Full-service Salesforce consulting including implementation, customization, and optimization for your business needs.",
  },
  {
    icon: Database,
    title: "StoreConnect",
    description: "Expert StoreConnect administration and configuration to streamline your e-commerce and retail operations.",
  },
  {
    icon: Cog,
    title: "Other CRMs",
    description: "Flexible consulting services for various CRM platforms, helping you choose and implement the right solution.",
  },
  {
    icon: Server,
    title: "AWS",
    description: "Cloud infrastructure consulting to ensure your systems are scalable, secure, and cost-effective.",
  },
];

export default function AboutUs() {
  return (
    <section
      id="about-us"
      className="py-16 lg:py-24 bg-background"
      data-testid="section-about-us"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            About ConsultTech CRM
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We are a specialized consultancy firm dedicated to helping businesses 
            maximize their CRM investments. With deep expertise in Salesforce, 
            StoreConnect, and cloud technologies, we deliver tailored solutions 
            that drive real results.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <Card className="border-border">
            <CardContent className="p-6 lg:p-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower businesses with the right CRM strategies and implementations 
                that enhance customer relationships, streamline operations, and accelerate 
                growth. We believe in building long-term partnerships with our clients, 
                providing ongoing support and expertise to ensure their continued success 
                in an ever-evolving digital landscape.
              </p>
            </CardContent>
          </Card>
        </div>

        <h3 className="text-2xl font-semibold text-foreground text-center mb-8">
          Our Expertise
        </h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service) => (
            <Card
              key={service.title}
              className="border-border hover-elevate transition-all"
              data-testid={`card-service-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <CardContent className="p-6 flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    {service.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
