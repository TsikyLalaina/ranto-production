import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Zap, FileText, CreditCard, Truck, QrCode } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export const Solutions = () => {
  const solutions = [
    {
      icon: <MessageSquare className="h-8 w-8 text-accent" />,
      title: "Daily SMS Price Radar",
      description: "Live FOB prices delivered to farmers' phones at 7:00 AM local time",
      timeline: "< 60 seconds",
      status: "Core Feature"
    },
    {
      icon: <Zap className="h-8 w-8 text-accent" />,
      title: "3-Click Deal Matching",
      description: "Farmers accept best offers via *888# USSD in under 60 seconds",
      timeline: "< 60 seconds",
      status: "Core Feature"
    },
    {
      icon: <FileText className="h-8 w-8 text-accent" />,
      title: "1-Click Export Documentation",
      description: "Export dossier pre-filled in 5 minutes, customs release in 24 hours",
      timeline: "< 24 hours",
      status: "Core Feature"
    },
    {
      icon: <CreditCard className="h-8 w-8 text-accent" />,
      title: "24-Hour Credit Scoring API",
      description: "Banks access real-time farmer creditworthiness via blockchain sales ledger",
      timeline: "< 24 hours",
      status: "B2B Revenue"
    },
    {
      icon: <Truck className="h-8 w-8 text-accent" />,
      title: "Cargo Optimization Board",
      description: "WhatsApp integration for instant back-haul cargo booking with mobile escrow",
      timeline: "Real-time",
      status: "Secondary"
    },
    {
      icon: <QrCode className="h-8 w-8 text-accent" />,
      title: "Blockchain QR Certificates",
      description: "EU-compliant traceability with satellite geo-tagging for ethical buyers",
      timeline: "Instant",
      status: "Premium"
    }
  ];

  const { ref, isVisible } = useScrollReveal({ threshold: 0.2, rootMargin: "0px 0px -15% 0px" });
  const visibility = isVisible ? "true" : "false";

  return (
    <section ref={ref} className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 reveal-on-scroll reveal-from-bottom" data-visible={visibility}>
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-foreground">
            The Ranto Solution
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto">
            Turn rural supply-chain data into money in farmers' mobile wallets
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {solutions.map((solution, index) => (
            <Card
              key={index}
              className="glass-panel rounded-3xl border-border/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-glow reveal-on-scroll reveal-from-bottom"
              style={{ transitionDelay: `${0.15 + index * 0.1}s` }}
              data-visible={visibility}
            >
              <CardHeader className="pb-0">
                <div className="flex items-center justify-between mb-4">
                  {solution.icon}
                  <Badge variant={solution.status === "Core Feature" ? "default" : "secondary"} className="uppercase tracking-wide">
                    {solution.status}
                  </Badge>
                </div>
                <CardTitle className="text-lg text-foreground/90">
                  {solution.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-foreground/70 mb-6 leading-relaxed">{solution.description}</p>
                <div className="inline-flex items-center gap-2 rounded-full bg-success/15 text-success px-4 py-2 text-sm font-semibold">
                  <span className="size-2 rounded-full bg-success block" />
                  {solution.timeline}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-20">
          <div
            className="relative overflow-hidden rounded-3xl border border-border/50 bg-gradient-hero/70 px-8 py-14 text-white max-w-4xl mx-auto shadow-glow reveal-on-scroll reveal-from-bottom"
            style={{ transitionDelay: "0.6s" }}
            data-visible={visibility}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-secondary/50 opacity-70" aria-hidden="true" />
            <div className="relative z-10">
              <h3 className="text-2xl font-semibold mb-4">Our North Star Metric</h3>
              <p className="text-lg text-white/85">
                "Verified vanilla transactions where net payment reaches a Malagasy mobile-wallet within 72 calendar days"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};