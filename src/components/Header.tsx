import { Droplets, Phone, MapPin, Clock, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-hero/95 backdrop-blur-md border-b border-primary-foreground/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <Droplets className="w-10 h-10 text-secondary" />
              <div className="absolute inset-0 blur-lg bg-secondary/30" />
            </div>
            <span className="text-2xl font-heading font-bold text-primary-foreground">
              CarWash<span className="text-secondary">Z75</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("services")}
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors font-medium"
            >
              Nos Services
            </button>
            <button
              onClick={() => scrollToSection("tarifs")}
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors font-medium"
            >
              Tarifs
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors font-medium"
            >
              Contact
            </button>
            <Button
              variant="hero"
              size="sm"
              onClick={() => scrollToSection("reservation")}
            >
              Réserver
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-primary-foreground/10">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("services")}
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors font-medium text-left py-2"
              >
                Nos Services
              </button>
              <button
                onClick={() => scrollToSection("tarifs")}
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors font-medium text-left py-2"
              >
                Tarifs
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors font-medium text-left py-2"
              >
                Contact
              </button>
              <Button
                variant="hero"
                onClick={() => scrollToSection("reservation")}
                className="w-full"
              >
                Réserver
              </Button>
            </div>
          </nav>
        )}
      </div>

      {/* Contact Bar */}
      <div className="hidden lg:block bg-primary/90 py-2">
        <div className="container mx-auto px-4 flex items-center justify-center gap-8 text-sm text-primary-foreground/90">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>01 23 45 67 89</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>75 Avenue des Champs-Élysées, Paris 75008</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>Lun-Sam: 8h-20h | Dim: 9h-18h</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
