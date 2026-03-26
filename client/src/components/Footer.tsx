import { Link } from "wouter";
import logoImage from "@assets/ConsultTech Logo2 Transparent_1764386506741.png";
import { Linkedin, Mail, ArrowRight } from "lucide-react";

interface FooterProps {
  calendarLink: string;
}

export default function Footer({ calendarLink: _calendarLink }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Industries", path: "/industries" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-gradient-to-br from-background to-primary/5 border-t border-border" data-testid="footer">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <img
              src={logoImage}
              alt="ConsultTech CRM"
              className="h-36 w-auto mb-4"
            />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Fractional Salesforce administration and consulting for small
              and mid-sized businesses in manufacturing, construction,
              distribution, and beyond.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    data-testid={`footer-link-${link.path.replace("/", "") || "home"}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              Connect
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/contact"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  data-testid="footer-link-health-check"
                >
                  <ArrowRight className="w-4 h-4" />
                  Free Health Check
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  data-testid="footer-link-email"
                >
                  <Mail className="w-4 h-4" />
                  Contact Us
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  data-testid="footer-link-linkedin"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} <span className="text-primary">ConsultTech CRM</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
