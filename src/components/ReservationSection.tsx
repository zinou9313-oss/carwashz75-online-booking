import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, CheckCircle } from "lucide-react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { useToast } from "@/hooks/use-toast";

const timeSlots = [
  "08:00", "08:30", "09:00", "09:30", "10:00", "10:30",
  "11:00", "11:30", "14:00", "14:30", "15:00", "15:30",
  "16:00", "16:30", "17:00", "17:30", "18:00", "18:30",
];

const services = [
  { value: "essentiel", label: "Essentiel - 19€" },
  { value: "confort", label: "Confort - 39€" },
  { value: "premium", label: "Premium - 79€" },
];

const ReservationSection = () => {
  const [date, setDate] = useState<Date>();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    time: "",
    vehicleType: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone || !formData.service || !date || !formData.time) {
      toast({
        title: "Formulaire incomplet",
        description: "Veuillez remplir tous les champs obligatoires.",
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    setIsSubmitted(true);
    toast({
      title: "Réservation confirmée ! ✨",
      description: `Rendez-vous le ${format(date, "d MMMM yyyy", { locale: fr })} à ${formData.time}`,
    });
  };

  if (isSubmitted) {
    return (
      <section id="reservation" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <Card variant="feature" className="max-w-2xl mx-auto text-center">
            <CardContent className="pt-12 pb-12">
              <div className="w-20 h-20 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-secondary" />
              </div>
              <h3 className="font-heading text-3xl font-bold text-foreground mb-4">
                Réservation confirmée !
              </h3>
              <p className="text-muted-foreground text-lg mb-6">
                Merci {formData.name} ! Nous avons bien reçu votre réservation pour le{" "}
                <strong>{date && format(date, "d MMMM yyyy", { locale: fr })}</strong> à{" "}
                <strong>{formData.time}</strong>.
              </p>
              <p className="text-muted-foreground mb-8">
                Un email de confirmation a été envoyé à <strong>{formData.email}</strong>.
              </p>
              <Button variant="outline" onClick={() => setIsSubmitted(false)}>
                Faire une nouvelle réservation
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="reservation" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            Réservation
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Prenez <span className="text-gradient">rendez-vous</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Réservez en ligne en quelques clics et bénéficiez d'un créneau garanti.
            Notre équipe vous attend !
          </p>
        </div>

        {/* Reservation Form */}
        <Card variant="feature" className="max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle>Formulaire de réservation</CardTitle>
            <CardDescription>
              Remplissez les informations ci-dessous pour réserver votre créneau.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name">Nom complet *</Label>
                  <Input
                    id="name"
                    placeholder="Jean Dupont"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="jean@exemple.fr"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <Label htmlFor="phone">Téléphone *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="06 12 34 56 78"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                {/* Vehicle Type */}
                <div className="space-y-2">
                  <Label htmlFor="vehicleType">Type de véhicule</Label>
                  <Select
                    value={formData.vehicleType}
                    onValueChange={(value) => setFormData({ ...formData, vehicleType: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionnez" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="citadine">Citadine</SelectItem>
                      <SelectItem value="berline">Berline</SelectItem>
                      <SelectItem value="suv">SUV / 4x4</SelectItem>
                      <SelectItem value="utilitaire">Utilitaire</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Service */}
                <div className="space-y-2">
                  <Label htmlFor="service">Formule *</Label>
                  <Select
                    value={formData.service}
                    onValueChange={(value) => setFormData({ ...formData, service: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Choisissez une formule" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service.value} value={service.value}>
                          {service.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Date */}
                <div className="space-y-2">
                  <Label>Date *</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal h-12"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "d MMMM yyyy", { locale: fr }) : "Choisir une date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        disabled={(date) => date < new Date()}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Time Slot */}
                <div className="space-y-2 md:col-span-2">
                  <Label>Créneau horaire *</Label>
                  <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                    {timeSlots.map((slot) => (
                      <Button
                        key={slot}
                        type="button"
                        variant={formData.time === slot ? "default" : "outline"}
                        size="sm"
                        onClick={() => setFormData({ ...formData, time: slot })}
                        className="text-sm"
                      >
                        {slot}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full">
                Confirmer la réservation
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ReservationSection;
