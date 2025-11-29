import { Link } from "wouter";
import logoImage from "@assets/ConsultTech Logo2 Transparent_1764386506741.png";
import { Linkedin, Mail, Calendar } from "lucide-react";

interface FooterProps {
  calendarLink: string;
}

export default function Footer({ calendarLink }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about-us" },
    { label: "About Me", path: "/about-me" },
    { label: "Services", path: "/services" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-background border-t border-border" data-testid="footer">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <img
              src={logoImage}
              alt="ConsultTech CRM"
              className="h-12 w-auto mb-4"
            />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Expert CRM consulting services specializing in Salesforce, 
              StoreConnect, and AWS. Helping businesses optimize their 
              customer relationship management.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    data-testid={`footer-link-${link.path.replace("/", "") || "home"}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Connect
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={calendarLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="footer-link-calendar"
                >
                  <Calendar className="w-4 h-4" />
                  Schedule a Call
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="footer-link-email"
                >
                  <Mail className="w-4 h-4" />
                  Contact Us
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
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
            &copy; {currentYear} ConsultTech CRM. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
