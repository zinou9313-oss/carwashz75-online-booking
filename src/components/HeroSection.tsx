import { Button } from "@/components/ui/button";
import { ChevronDown, Sparkles, Shield, Clock } from "lucide-react";
import heroImage from "@/assets/hero-carwash.jpg";

const HeroSection = () => {
  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToReservation = () => {
    const element = document.getElementById("reservation");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero pt-32 lg:pt-40">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Premium Car Wash"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(210,30%,12%)] via-[hsl(210,30%,12%)]/70 to-[hsl(210,40%,18%)]" />
      </div>

      {/* Animated water effect */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2 mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-secondary" />
            <span className="text-primary-foreground/90 text-sm font-medium">
              N°1 du lavage auto à Paris
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-black text-primary-foreground mb-6 leading-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Votre voiture mérite
            <br />
            <span className="text-gradient">l'excellence</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Découvrez nos services de lavage premium avec des produits écologiques 
            et un savoir-faire exceptionnel.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="lg" onClick={scrollToReservation}>
              Prendre rendez-vous
            </Button>
            <Button variant="heroOutline" size="lg" onClick={scrollToServices}>
              Découvrir nos services
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center justify-center gap-3 text-primary-foreground/80">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-secondary" />
              </div>
              <div className="text-left">
                <div className="font-bold text-primary-foreground">+5000</div>
                <div className="text-sm">Clients satisfaits</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 text-primary-foreground/80">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                <Shield className="w-6 h-6 text-secondary" />
              </div>
              <div className="text-left">
                <div className="font-bold text-primary-foreground">100%</div>
                <div className="text-sm">Produits écolos</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 text-primary-foreground/80">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                <Clock className="w-6 h-6 text-secondary" />
              </div>
              <div className="text-left">
                <div className="font-bold text-primary-foreground">30 min</div>
                <div className="text-sm">Service express</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToServices}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/60 hover:text-primary-foreground transition-colors animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default HeroSection;
