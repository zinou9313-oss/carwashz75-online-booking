import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Car, Sparkles, Shield, Droplets, Wrench, Star } from "lucide-react";

const services = [
  {
    icon: Droplets,
    title: "Lavage Extérieur",
    description: "Nettoyage complet de la carrosserie avec shampooing premium et séchage soigné.",
    features: ["Pré-rinçage haute pression", "Shampooing sans contact", "Séchage manuel"],
  },
  {
    icon: Car,
    title: "Lavage Intérieur",
    description: "Aspiration complète, nettoyage des surfaces et désodorisation professionnelle.",
    features: ["Aspiration complète", "Nettoyage plastiques", "Vitres intérieures"],
  },
  {
    icon: Sparkles,
    title: "Lavage Complet",
    description: "La formule tout-en-un pour un véhicule impeccable à l'intérieur comme à l'extérieur.",
    features: ["Extérieur + Intérieur", "Traitement jantes", "Parfum au choix"],
  },
  {
    icon: Shield,
    title: "Protection Céramique",
    description: "Traitement longue durée pour protéger votre carrosserie pendant 6 mois.",
    features: ["Protection hydrophobe", "Brillance intense", "Anti-UV"],
  },
  {
    icon: Wrench,
    title: "Detailing Premium",
    description: "Service haut de gamme pour les perfectionnistes exigeant le meilleur.",
    features: ["Polish carrosserie", "Rénovation cuir", "Traitement vitres"],
  },
  {
    icon: Star,
    title: "Formule VIP",
    description: "L'expérience ultime avec prise en charge personnalisée et services exclusifs.",
    features: ["Service sur RDV", "Livraison incluse", "Garantie 30 jours"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[hsl(210,40%,18%)] to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            Nos Prestations
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Des services adaptés à <span className="text-gradient">vos besoins</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Que vous ayez besoin d'un lavage express ou d'un traitement complet, 
            nous avons la formule parfaite pour votre véhicule.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.title}
              variant="service"
              className="group opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "forwards" }}
            >
              <CardHeader>
                <div className="w-16 h-16 rounded-2xl bg-water-gradient flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-button">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
