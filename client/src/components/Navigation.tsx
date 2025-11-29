import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Calendar } from "lucide-react";
import logoImage from "@assets/ConsultTech Logo2 Transparent_1764386506741.png";

interface NavigationProps {
  calendarLink: string;
}

export default function Navigation({ calendarLink }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about-us" },
    { label: "About Me", path: "/about-me" },
    { label: "Services", path: "/services" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm border-b border-border"
          : "bg-transparent"
      }`}
      data-testid="navigation"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          <Link
            href="/"
            className="flex items-center gap-2"
            data-testid="link-logo"
          >
            <img
              src={logoImage}
              alt="ConsultTech CRM"
              className="h-14 w-auto"
            />
          </Link>

          <div className="hidden md:flex items-center gap-6 flex-wrap">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`text-sm font-medium transition-colors ${
                  location === link.path
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                data-testid={`link-${link.path.replace("/", "") || "home"}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Button asChild data-testid="button-schedule-nav">
              <a href={calendarLink} target="_blank" rel="noopener noreferrer">
                <Calendar className="w-4 h-4 mr-2" />
                Schedule a Call
              </a>
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
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
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block w-full text-left text-sm font-medium transition-colors py-2 ${
                  location === link.path
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                data-testid={`link-mobile-${link.path.replace("/", "") || "home"}`}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="w-full mt-4" data-testid="button-schedule-mobile">
              <a href={calendarLink} target="_blank" rel="noopener noreferrer">
                <Calendar className="w-4 h-4 mr-2" />
                Schedule a Call
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
