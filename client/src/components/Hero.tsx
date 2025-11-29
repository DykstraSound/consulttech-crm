import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";
import logoImage from "@assets/ConsultTech Logo1 Transparent_1764386506740.png";
import heroBackground from "@assets/stock_images/technology_consultin_1b9fd8f3.jpg";

interface HeroProps {
  calendarLink: string;
}

export default function Hero({ calendarLink }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-[600px] lg:min-h-[700px] flex items-center justify-center overflow-hidden"
      data-testid="section-hero"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        <img
          src={logoImage}
          alt="ConsultTech CRM"
          className="h-48 md:h-64 lg:h-80 w-auto mx-auto mb-8"
          data-testid="img-hero-logo"
        />
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Expert CRM Consulting for
          <span className="block text-primary">Your Business Success</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
          Certified Salesforce, StoreConnect, and AWS consultant helping businesses 
          optimize their CRM implementations and drive growth through technology.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            asChild
            className="min-w-[200px]"
            data-testid="button-schedule-hero"
          >
            <a href={calendarLink} target="_blank" rel="noopener noreferrer">
              <Calendar className="w-5 h-5 mr-2" />
              Schedule a Call
            </a>
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            asChild
            className="min-w-[200px] bg-[hsl(190,100%,45%)]/20 backdrop-blur-sm border-[hsl(190,100%,45%)]/50 text-white hover:bg-[hsl(190,100%,45%)]/30"
            data-testid="button-learn-more"
          >
            <Link href="/about-us">
              Learn More
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
