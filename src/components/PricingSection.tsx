import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Essentiel",
    price: "19",
    description: "Le lavage rapide et efficace pour un véhicule propre au quotidien.",
    features: [
      "Lavage extérieur",
      "Rinçage haute pression",
      "Séchage automatique",
      "Durée: 15 min",
    ],
    popular: false,
  },
  {
    name: "Confort",
    price: "39",
    description: "Notre formule la plus populaire pour un nettoyage complet.",
    features: [
      "Lavage extérieur premium",
      "Aspiration intérieure",
      "Nettoyage vitres",
      "Traitement jantes",
      "Parfum offert",
      "Durée: 45 min",
    ],
    popular: true,
  },
  {
    name: "Premium",
    price: "79",
    description: "L'expérience de luxe pour les amoureux de leur véhicule.",
    features: [
      "Lavage complet VIP",
      "Shampoing sièges",
      "Rénovation plastiques",
      "Polish carrosserie",
      "Protection céramique",
      "Garantie 7 jours",
      "Durée: 2h",
    ],
    popular: false,
  },
];

const PricingSection = () => {
  const scrollToReservation = () => {
    const element = document.getElementById("reservation");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="tarifs" className="py-24 bg-muted/50 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            Nos Tarifs
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Choisissez votre <span className="text-gradient">formule</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Des prix transparents et compétitifs pour tous les types de véhicules.
            Profitez de nos offres spéciales abonnement.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={plan.name}
              variant="pricing"
              className={`relative opacity-0 animate-fade-in ${
                plan.popular ? "border-primary scale-105 shadow-glow" : ""
              }`}
              style={{ animationDelay: `${index * 0.15}s`, animationFillMode: "forwards" }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-water-gradient text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full shadow-button">
                    Le plus populaire
                  </span>
                </div>
              )}
              <CardHeader className="text-center pt-8">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-5xl font-black font-heading text-foreground">
                    {plan.price}€
                  </span>
                </div>
                <CardDescription className="mt-3">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm">
                      <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-secondary" />
                      </div>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  variant={plan.popular ? "hero" : "outline"}
                  size="lg"
                  className="w-full"
                  onClick={scrollToReservation}
                >
                  Réserver maintenant
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <p className="text-center text-muted-foreground mt-12">
          💡 <strong>Astuce :</strong> Abonnez-vous et économisez jusqu'à 20% sur chaque lavage !
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
