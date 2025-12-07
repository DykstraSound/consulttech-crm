import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Shield, CheckCircle } from "lucide-react";
import headshotImage from "@assets/HS 3_1764388153432.jpeg";
import sfAgentforceSpecialist from "@assets/certifications/SF Agentforce Specialist.png";
import sfBusinessAnalyst from "@assets/certifications/SF Business Analyst.png";
import sfPlatformAdmin from "@assets/certifications/SF Platform Admin.png";
import badgeAdministrator from "@assets/certifications/badge_Administrator.png";
import badgeThemeDeveloper from "@assets/certifications/badge_Theme Developer.png";

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
      { name: "Certified Solutions Architect - Associate", icon: Shield },
    ],
  },
];

// Certification badge images
const certificationBadges = [
  sfAgentforceSpecialist,
  sfBusinessAnalyst,
  sfPlatformAdmin,
  badgeAdministrator,
  badgeThemeDeveloper,
];

export default function AboutMe() {
  const badges = certificationBadges;
  return (
    <section
      id="about-me"
      className="py-16 lg:py-24 bg-gradient-to-br from-background via-background to-primary/5"
      data-testid="section-about-me"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Meet the consultant behind ConsultTech CRM
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
                  className="relative w-48 h-48 lg:w-64 lg:h-64 rounded-full object-cover border-4 border-background"
                  data-testid="img-headshot"
                />
              </div>
            </div>
            
            <div className="flex-1">
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
          </div>

          <h3 className="text-2xl font-semibold text-foreground text-center mb-8">
            Certifications & <span className="text-primary">Credentials</span>
          </h3>

          {badges.length > 0 && (
            <div className="mb-12">
              <h4 className="text-lg font-semibold text-foreground text-center mb-6">
                Industry <span className="text-primary">Badges</span>
              </h4>
              <div className="flex flex-wrap justify-center gap-6 items-center">
                {badges.map((badgeSrc, index) => (
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
          )}

          <h3 className="text-2xl font-semibold text-foreground text-center mb-8">
            Certification <span className="text-primary">Details</span>
          </h3>

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
    </section>
  );
}
