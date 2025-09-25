import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Shield, Smartphone } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

export const Hero = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      setIsReady(true);
      return;
    }

    const frameId = window.requestAnimationFrame(() => {
      setIsReady(true);
    });

    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <section
      className="min-h-screen relative overflow-hidden reveal-on-scroll reveal-from-bottom"
      data-visible={isReady}
    >
      <div className="hero-glow" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background z-10" />
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 scale-105 animate-fade-in"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      <div className="relative z-20 container mx-auto px-6 py-28 lg:py-36">
        <div className="max-w-5xl mx-auto text-center">
          <div
            className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/60 px-5 py-2 text-xs uppercase tracking-[0.35em] text-muted-foreground mb-8 reveal-on-scroll reveal-from-bottom"
            style={{ transitionDelay: "0.1s" }}
            data-visible={isReady}
          >
            Building the future of agri-trade
          </div>
          <h1
            className="text-5xl md:text-7xl font-bold mb-8 text-foreground leading-tight drop-shadow-[0_30px_90px_rgba(8,148,255,0.2)] reveal-on-scroll reveal-from-bottom"
            style={{ transitionDelay: "0.2s" }}
            data-visible={isReady}
          >
            Transforming
            <span className="bg-gradient-hero bg-clip-text text-transparent"> Madagascar's </span>
            Agricultural Trade
          </h1>

          <p
            className="text-xl md:text-2xl mb-10 text-foreground/80 max-w-3xl mx-auto leading-relaxed reveal-on-scroll reveal-from-bottom"
            style={{ transitionDelay: "0.3s" }}
            data-visible={isReady}
          >
            SMS-first platform connecting smallholder farmers directly to global markets.
            Capture <strong className="text-primary font-semibold">50%+ of export value</strong> with
            AI-powered trade matching, instant payments, and blockchain traceability.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16 reveal-on-scroll reveal-from-bottom"
            style={{ transitionDelay: "0.4s" }}
            data-visible={isReady}
          >
            <Button
              variant="hero"
              size="lg"
              className="text-lg px-10 py-6 shadow-glow hover-float"
              style={{ animation: "float 6s ease-in-out infinite" }}
            >
              Join the Platform
              <ArrowRight className="ml-3 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-10 py-6 border-foreground/30 text-foreground/90 hover:text-background hover:bg-foreground/90 hover-float"
            >
              Learn More
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div
              className="glass-panel rounded-2xl p-6 md:p-8 hover-float reveal-on-scroll reveal-from-bottom"
              style={{ transitionDelay: "0.5s" }}
              data-visible={isReady}
            >
              <Smartphone className="h-12 w-12 text-primary mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">SMS-First Technology</h3>
              <p className="text-foreground/70">Works on any feature phone. No internet required.</p>
            </div>

            <div
              className="glass-panel rounded-2xl p-6 md:p-8 hover-float reveal-on-scroll reveal-from-bottom"
              style={{ transitionDelay: "0.65s" }}
              data-visible={isReady}
            >
              <BarChart3 className="h-12 w-12 text-primary mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">Real-Time Pricing</h3>
              <p className="text-foreground/70">Live FOB prices delivered daily at 7AM local time.</p>
            </div>

            <div
              className="glass-panel rounded-2xl p-6 md:p-8 hover-float reveal-on-scroll reveal-from-bottom"
              style={{ transitionDelay: "0.8s" }}
              data-visible={isReady}
            >
              <Shield className="h-12 w-12 text-primary mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">Blockchain Verified</h3>
              <p className="text-foreground/70">EU-compliant traceability and ESG documentation.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};