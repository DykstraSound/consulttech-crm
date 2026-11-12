/* Fixed top navigation: logo, the five page links, and the Punch List CTA (desktop and mobile menu). */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import PunchListButton from "@/components/PunchListButton";
import { NAV_LINKS } from "@/lib/site";
import logoImage from "@assets/ConsultTech Logo2 Transparent_1764386506741.png";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = (path: string) =>
    `text-sm font-medium transition-colors ${
      location === path ? "text-primary" : "text-muted-foreground hover:text-white"
    }`;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen ? "bg-background/95 backdrop-blur-sm border-b border-border" : "bg-transparent"
      }`}
      data-testid="navigation"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          <Link href="/" className="flex items-center" data-testid="link-logo">
            <img src={logoImage} alt="ConsultTech CRM" className="h-14 w-auto" />
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <Link key={link.path} href={link.path} className={linkClass(link.path)}>
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <PunchListButton label="Free Punch List" />
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="px-4 py-4 space-y-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-2 ${linkClass(link.path)}`}
              >
                {link.label}
              </Link>
            ))}
            <PunchListButton className="w-full mt-4" />
          </div>
        </div>
      )}
    </nav>
  );
}
