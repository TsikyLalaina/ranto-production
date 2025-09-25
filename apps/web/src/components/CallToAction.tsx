import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Mail, Users, Calendar } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export const CallToAction = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2, rootMargin: "0px 0px -10% 0px" });
  const visibility = isVisible ? "true" : "false";

  const audienceCards = [
    {
      icon: <Users className="h-12 w-12 text-primary mb-4 mx-auto" />,
      title: "For Farmers",
      description: "Get fair prices, instant payments, and direct market access",
      cta: "Register Now",
      delay: 0.15,
    },
    {
      icon: <Mail className="h-12 w-12 text-primary mb-4 mx-auto" />,
      title: "For Exporters",
      description: "Find verified suppliers and streamline documentation",
      cta: "Start Free Trial",
      delay: 0.3,
    },
    {
      icon: <Calendar className="h-12 w-12 text-primary mb-4 mx-auto" />,
      title: "For Banks",
      description: "Access rural credit scoring APIs and expand reach",
      cta: "Schedule Demo",
      delay: 0.45,
    },
  ];

  return (
    <section ref={ref} className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center reveal-on-scroll reveal-from-bottom" data-visible={visibility}>
          <h2 className="text-4xl md:text-5xl font-semibold mb-8 text-foreground">
            Join the Agricultural Revolution
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 mb-14 max-w-3xl mx-auto">
            Be part of Madagascar's first platform where smallholder farmers capture ≥50% of FOB price 
            and get paid within 72 days—using only a feature phone.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
            {audienceCards.map((card, index) => (
              <Card
                key={index}
                className="glass-panel rounded-3xl border-border/40 transition-all duration-500 hover-float hover:shadow-glow reveal-on-scroll reveal-from-bottom"
                style={{ transitionDelay: `${card.delay}s` }}
                data-visible={visibility}
              >
                <CardContent className="pt-8 pb-10 text-center">
                  {card.icon}
                  <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                  <p className="text-sm text-foreground/70 mb-5">{card.description}</p>
                  <Button variant="outline" className="w-full border-foreground/25 text-foreground/80 hover:bg-foreground/90 hover:text-background">
                    {card.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div
            className="relative overflow-hidden rounded-3xl border border-border/50 bg-gradient-hero/75 px-10 py-14 text-white shadow-glow reveal-on-scroll reveal-from-bottom"
            style={{ transitionDelay: "0.6s" }}
            data-visible={visibility}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/35 via-primary/20 to-accent/25 opacity-80" aria-hidden="true" />
            <div className="relative z-10 space-y-6">
              <h3 className="text-2xl font-semibold">Ready to Transform Agricultural Trade?</h3>
              <p className="text-lg text-white/80">
                Join the waitlist and be among the first to access the platform when we launch in the SAVA region.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" className="text-lg px-10 shadow-glow">
                  Join Waitlist
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-10 border-white/60 text-white bg-white/10 hover:bg-white/20 hover:text-white"
                >
                  Contact Team
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};