import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Shield, CheckCircle, Cloud, Database, Cog, Server } from "lucide-react";
import headshotImage from "@assets/HS 3_1764388153432.jpeg";
import sfAgentforceSpecialist from "@assets/SF Agentforce Specialist.png";
import sfBusinessAnalyst from "@assets/SF Business Analyst.png";
import sfPlatformAdmin from "@assets/SF Platform Admin.png";
import dataCloudBadge from "@assets/Data Cloud Badge.png";
import badgeAdministrator from "@assets/badge_Administrator.png";
import badgeThemeDeveloper from "@assets/badge_Theme Developer.png";

const expertise = [
  {
    icon: Cloud,
    title: "Salesforce",
    description:
      "Full-service Salesforce consulting including fractional administration, implementation, customization, and optimization.",
  },
  {
    icon: Database,
    title: "StoreConnect",
    description:
      "Expert StoreConnect administration and configuration to streamline e-commerce and retail operations.",
  },
  {
    icon: Cog,
    title: "Other CRMs",
    description:
      "Flexible consulting for various CRM platforms, helping you choose and implement the right solution.",
  },
  {
    icon: Server,
    title: "AWS",
    description:
      "Cloud infrastructure consulting to ensure your systems are scalable, secure, and cost-effective.",
  },
];

const certifications = [
  {
    platform: "Salesforce",
    certs: [
      { name: "Platform Administrator", icon: Shield },
      { name: "Business Analyst", icon: CheckCircle },
      { name: "Agentforce Specialist", icon: Award },
      { name: "Data Cloud Consultant", icon: Award },
    ],
  },
  {
    platform: "StoreConnect",
    certs: [
      { name: "Certified Administrator", icon: Award },
      { name: "Certified Theme Developer", icon: Award },
    ],
  },
  {
    platform: "AWS",
    certs: [
      { name: "Certified Solutions Architect - Associate", icon: Shield },
    ],
  },
];

const certificationBadges = [
  sfAgentforceSpecialist,
  sfBusinessAnalyst,
  sfPlatformAdmin,
  dataCloudBadge,
  badgeAdministrator,
  badgeThemeDeveloper,
];

export default function About() {
  return (
    <section
      id="about"
      className="py-16 lg:py-24 bg-gradient-to-br from-background via-background to-primary/5"
      data-testid="section-about"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Company Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            About <span className="text-primary">ConsultTech CRM</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A specialized consultancy dedicated to helping small and mid-sized businesses
            get more from Salesforce - without the overhead of a full-time hire.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
            <CardContent className="p-6 lg:p-8">
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-primary rounded-full"></span>
                Our Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower businesses with the right CRM strategies and implementations
                that enhance customer relationships, streamline operations, and accelerate
                growth. We believe in building long-term partnerships - providing ongoing
                fractional support and expertise so you never have to navigate Salesforce alone.
              </p>
            </CardContent>
          </Card>
        </div>

        <h3 className="text-2xl font-semibold text-foreground text-center mb-8">
          Our <span className="text-primary">Expertise</span>
        </h3>

        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {expertise.map((item) => (
            <Card
              key={item.title}
              className="border-border hover-elevate transition-all group"
              data-testid={`card-expertise-${item.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <CardContent className="p-6 flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-md bg-gradient-to-br from-primary/20 to-[hsl(190,100%,45%)]/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-[hsl(190,100%,45%)]/30 transition-all">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">{item.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Consultant Section */}
        <div className="border-t border-border pt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              The <span className="text-primary">Consultant</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              The certified expert behind ConsultTech CRM
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-12 items-start">
              <div className="flex-shrink-0 mx-auto lg:mx-0">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-br from-primary to-[hsl(190,100%,45%)] rounded-full opacity-75 blur-sm"></div>
                  <img
                    src={headshotImage}
                    alt="ConsultTech CRM Consultant"
                    className="relative w-48 h-48 lg:w-56 lg:h-56 rounded-full object-cover border-4 border-background"
                    data-testid="img-headshot"
                  />
                </div>
              </div>

              <div className="flex-1">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  With a relentless focus on efficient CRM implementation and cloud technologies,
                  I founded ConsultTech CRM to help businesses navigate Salesforce without the
                  cost of a full-time admin. My approach combines technical expertise with a deep
                  understanding of business operations in manufacturing, construction, and distribution.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Whether you need ongoing fractional administration, a focused implementation project,
                  or help integrating Salesforce with your other tools - I'm here to make it work for your business.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-foreground text-center mb-8">
              Certifications & <span className="text-primary">Credentials</span>
            </h3>

            <div className="mb-12">
              <div className="flex flex-wrap justify-center gap-6 items-center">
                {certificationBadges.map((badgeSrc, index) => (
                  <div
                    key={`badge-${index}`}
                    className="h-32 w-32 flex items-center justify-center bg-card/50 rounded-lg p-2 hover-elevate transition-all"
                    data-testid={`badge-image-${index}`}
                  >
                    <img
                      src={badgeSrc}
                      alt={`Certification Badge ${index + 1}`}
                      className="max-h-28 max-w-28 object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {certifications.map((group) => (
                <Card
                  key={group.platform}
                  className="border-border bg-card/50 backdrop-blur-sm hover-elevate transition-all"
                  data-testid={`card-certs-${group.platform.toLowerCase()}`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Badge className="text-sm font-semibold bg-primary/10 text-primary border-0">
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

      </div>
    </section>
  );
}
