/* Site footer: positioning blurb, page links, Punch List/contact/LinkedIn links and the veteran-owned line. */
import { Link } from "wouter";
import { ArrowRight, Linkedin, Mail } from "lucide-react";
import { NAV_LINKS, PUNCH_LIST_PATH } from "@/lib/site";
import logoImage from "@assets/ConsultTech Logo2 Transparent_1764386506741.png";

const linkClass = "flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-gradient-to-br from-background to-primary/5" data-testid="footer">
      <div className="safety-stripe h-1.5" aria-hidden="true" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <img src={logoImage} alt="ConsultTech CRM" className="h-20 w-auto mb-4" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              CRM and sales systems for construction, manufacturing and automotive aftermarket businesses with
              100 people or fewer.
            </p>
            <p className="text-sm text-muted-foreground mt-3">
              Army Combat Veteran owned. Based in Tennessee, working with clients anywhere.
            </p>
          </div>

          <div>
            <h3 className="kicker mb-4">Pages</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link href={link.path} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="kicker mb-4">Get started</h3>
            <ul className="space-y-3">
              <li>
                <a href={PUNCH_LIST_PATH} className={linkClass}>
                  <ArrowRight className="w-4 h-4" /> Free Punch List
                </a>
              </li>
              <li>
                <Link href="/contact" className={linkClass}>
                  <Mail className="w-4 h-4" /> Send me the details
                </Link>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/travisjdykstra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  <Linkedin className="w-4 h-4" /> Follow me on LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {year} <span className="text-primary">ConsultTech CRM</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
