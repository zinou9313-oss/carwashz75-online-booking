import { Droplets, Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from "lucide-react";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer id="contact" className="bg-hero text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="relative">
                <Droplets className="w-10 h-10 text-secondary" />
                <div className="absolute inset-0 blur-lg bg-secondary/30" />
              </div>
              <span className="text-2xl font-heading font-bold">
                CarWash<span className="text-secondary">Z75</span>
              </span>
            </div>
            <p className="text-primary-foreground/70 mb-6">
              Le spécialiste du lavage auto premium à Paris. 
              Qualité, rapidité et respect de l'environnement.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Liens rapides</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Nos services
                </a>
              </li>
              <li>
                <a href="#tarifs" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Tarifs
                </a>
              </li>
              <li>
                <a href="#reservation" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Réservation
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  À propos
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Nos formules</h4>
            <ul className="space-y-3">
              <li>
                <a href="#tarifs" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Lavage Essentiel
                </a>
              </li>
              <li>
                <a href="#tarifs" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Lavage Confort
                </a>
              </li>
              <li>
                <a href="#tarifs" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Lavage Premium
                </a>
              </li>
              <li>
                <a href="#services" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Protection Céramique
                </a>
              </li>
              <li>
                <a href="#services" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Detailing
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/70">Paris, France
                <br />
                  75008 Paris, France
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                <a href="tel:0123456789" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">06 05 53 39 84</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                <a href="mailto:contact@carwashz75.fr" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  contact@carwashz75.fr
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/70">
                  Lun-Sam: 8h - 20h<br />
                  Dimanche: 9h - 18h
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
            <p>© {currentYear} CarWashZ75. Tous droits réservés.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Mentions légales
              </a>
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Politique de confidentialité
              </a>
              <a href="#" className="hover:text-primary-foreground transition-colors">
                CGV
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;