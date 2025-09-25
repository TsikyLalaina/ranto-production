import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Mail, Users, Calendar } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export const CallToAction = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2, rootMargin: "0px 0px -10% 0px" });
  const visibility = isVisible ? "true" : "false";

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
            <Card
              className="glass-panel rounded-3xl border-border/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-glow reveal-on-scroll reveal-from-bottom"
              style={{ transitionDelay: "0.15s" }}
              data-visible={visibility}
            >
              <CardContent className="pt-8 pb-10 text-center">
                <Users className="h-12 w-12 text-primary mb-4 mx-auto" />
                <h3 className="text-lg font-semibold mb-2">For Farmers</h3>
                <p className="text-sm text-foreground/70 mb-5">
                  Get fair prices, instant payments, and direct market access
                </p>
                <Button variant="outline" className="w-full border-foreground/25 text-foreground/80 hover:bg-foreground/90 hover:text-background">
                  Register Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
            
            <Card
              className="glass-panel rounded-3xl border-border/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-glow reveal-on-scroll reveal-from-bottom"
              style={{ transitionDelay: "0.3s" }}
              data-visible={visibility}
            >
              <CardContent className="pt-8 pb-10 text-center">
                <Mail className="h-12 w-12 text-primary mb-4 mx-auto" />
                <h3 className="text-lg font-semibold mb-2">For Exporters</h3>
                <p className="text-sm text-foreground/70 mb-5">
                  Find verified suppliers, streamline documentation
                </p>
                <Button variant="outline" className="w-full border-foreground/25 text-foreground/80 hover:bg-foreground/90 hover:text-background">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
            
            <Card
              className="glass-panel rounded-3xl border-border/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-glow reveal-on-scroll reveal-from-bottom"
              style={{ transitionDelay: "0.45s" }}
              data-visible={visibility}
            >
              <CardContent className="pt-8 pb-10 text-center">
                <Calendar className="h-12 w-12 text-primary mb-4 mx-auto" />
                <h3 className="text-lg font-semibold mb-2">For Banks</h3>
                <p className="text-sm text-foreground/70 mb-5">
                  Access rural credit scoring API and expand reach
                </p>
                <Button variant="outline" className="w-full border-foreground/25 text-foreground/80 hover:bg-foreground/90 hover:text-background">
                  Schedule Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div
            className="relative overflow-hidden rounded-3xl border border-border/50 bg-gradient-hero/70 px-10 py-14 text-primary-foreground shadow-glow reveal-on-scroll reveal-from-bottom"
            style={{ transitionDelay: "0.6s" }}
            data-visible={visibility}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-secondary/50 opacity-70" aria-hidden="true" />
            <div className="relative z-10">
              <h3 className="text-2xl font-semibold mb-4">Ready to Transform Agricultural Trade?</h3>
              <p className="text-lg opacity-90 mb-8">
              Join the waitlist and be among the first to access the platform when we launch in SAVA region.
            </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" className="text-lg px-10 shadow-glow">
                  Join Waitlist
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-10 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-background">
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