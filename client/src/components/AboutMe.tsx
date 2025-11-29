import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Shield, CheckCircle } from "lucide-react";

const certifications = [
  {
    platform: "Salesforce",
    certs: [
      { name: "Platform Administrator", icon: Shield },
      { name: "Business Analyst", icon: CheckCircle },
      { name: "Agentforce Specialist", icon: Award },
    ],
  },
  {
    platform: "StoreConnect",
    certs: [
      { name: "Admin Training Path", icon: Award },
    ],
  },
  {
    platform: "AWS",
    certs: [
      { name: "AWS Certified", icon: Shield },
    ],
  },
];

export default function AboutMe() {
  return (
    <section
      id="about-me"
      className="py-16 lg:py-24 bg-card"
      data-testid="section-about-me"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Meet the consultant behind ConsultTech CRM
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              With years of experience in CRM implementation and cloud technologies, 
              I founded ConsultTech CRM to help businesses navigate the complex world 
              of customer relationship management. My approach combines technical 
              expertise with a deep understanding of business processes to deliver 
              solutions that truly make a difference.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I specialize in Salesforce and StoreConnect platforms, with additional 
              expertise in AWS cloud infrastructure. Whether you're looking to implement 
              a new CRM system, optimize your existing setup, or integrate your CRM 
              with other business tools, I'm here to help you achieve your goals.
            </p>
          </div>

          <h3 className="text-2xl font-semibold text-foreground text-center mb-8">
            Certifications & Credentials
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((group) => (
              <Card
                key={group.platform}
                className="border-border"
                data-testid={`card-certs-${group.platform.toLowerCase()}`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Badge variant="secondary" className="text-sm font-semibold">
                      {group.platform}
                    </Badge>
                  </div>
                  <ul className="space-y-3">
                    {group.certs.map((cert) => (
                      <li
                        key={cert.name}
                        className="flex items-center gap-3 text-sm text-muted-foreground"
                      >
                        <cert.icon className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>{cert.name}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
