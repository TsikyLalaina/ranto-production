import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Globe, Banknote, BarChart } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export const RevenueModel = () => {
  const revenueStreams = [
    {
      icon: <Building2 className="h-8 w-8 text-accent" />,
      segment: "Registered Exporters",
      problem: "6h/day on WhatsApp looking for 5MT cloves",
      solution: "AI-ranked supplier shortlists + ESG documentation",
      pricing: "$99/month + $20 per QR scan",
      target: "30 paying exporters",
      priority: "Primary"
    },
    {
      icon: <Globe className="h-8 w-8 text-accent" />,
      segment: "EU/USA Ethical Buyers",
      problem: "Need child-labour-free vanilla, fully traceable",
      solution: "Blockchain QR certificates + compliance reports",
      pricing: "$200 per container + $500/month dashboard",
      target: "20 buyers, 80% repeat rate",
      priority: "Primary"
    },
    {
      icon: <Banknote className="h-8 w-8 text-accent" />,
      segment: "Commercial Banks & MFIs",
      problem: "Can't underwrite farmers—no credit history",
      solution: "24-month sales ledger API + risk assessment",
      pricing: "$0.50 per API call + 1% loan volume",
      target: "3 banks, $500k loans facilitated",
      priority: "Primary"
    },
    {
      icon: <BarChart className="h-8 w-8 text-accent" />,
      segment: "Development Agencies",
      problem: "Require real-time intervention tracking",
      solution: "Impact dashboards + anonymized metrics",
      pricing: "$2,000/month white-label reports",
      target: "USAID, GIZ, World Bank",
      priority: "Secondary"
    }
  ];

  const targets2027 = [
    { metric: "Farmers Served", value: "50,000+", note: "Across SAVA region" },
    { metric: "Export Value", value: "$100M+", note: "Processed through platform" },
    { metric: "Credit Facilitated", value: "$50M+", note: "Via banking partnerships" },
    { metric: "Exporter Retention", value: "80%", note: "Recurring premium customers" }
  ];

  const { ref, isVisible } = useScrollReveal({ threshold: 0.2, rootMargin: "0px 0px -15% 0px" });
  const visibility = isVisible ? "true" : "false";

  return (
    <section ref={ref} className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 reveal-on-scroll reveal-from-bottom" data-visible={visibility}>
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-foreground">
            Revenue Model & Customer Segments
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto">
            B2B revenue concentration drives platform economics while B2C acquisition creates network effects
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto mb-16">
          {revenueStreams.map((stream, index) => (
            <Card
              key={index}
              className="glass-panel rounded-3xl border-border/40 transition-all duration-500 hover-float hover:shadow-glow reveal-on-scroll reveal-from-bottom"
              style={{ transitionDelay: `${0.15 + index * 0.12}s` }}
              data-visible={visibility}
            >
              <CardHeader className="pb-0">
                <div className="flex items-center justify-between mb-4">
                  {stream.icon}
                  <Badge variant={stream.priority === "Primary" ? "default" : "secondary"} className="uppercase tracking-wide">
                    {stream.priority}
                  </Badge>
                </div>
                <CardTitle className="text-xl text-foreground/90">{stream.segment}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 pt-6 text-sm text-foreground/70">
                <div>
                  <h4 className="font-semibold text-foreground/60 mb-1">PAIN POINT</h4>
                  <p>{stream.problem}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground/60 mb-1">SOLUTION</h4>
                  <p>{stream.solution}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground/60 mb-1">PRICING</h4>
                  <p className="font-semibold text-secondary">{stream.pricing}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground/60 mb-1">2025 TARGET</h4>
                  <p>{stream.target}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div
          className="relative overflow-hidden rounded-3xl border border-border/50 bg-gradient-hero/70 px-10 py-14 text-white max-w-5xl mx-auto mb-16 shadow-glow reveal-on-scroll reveal-from-bottom"
          style={{ transitionDelay: "0.6s" }}
          data-visible={visibility}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-secondary/45 opacity-70" aria-hidden="true" />
          <div className="relative z-10">
            <h3 className="text-3xl font-semibold mb-10 text-center">2027 Success Targets</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 w-full max-w-6xl mx-auto justify-items-center">
              {targets2027.map((target, index) => (
                <div key={index} className="w-full text-center space-y-2 px-2">
                  <div className="text-2xl font-bold">{target.value}</div>
                  <div className="text-lg font-semibold text-white/90">{target.metric}</div>
                  <div className="text-sm text-white/80">{target.note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center reveal-on-scroll reveal-from-bottom" data-visible={visibility} style={{ transitionDelay: "0.75s" }}>
          <h3 className="text-2xl font-semibold mb-6 text-foreground">
            Phased Market Entry Strategy
          </h3>
          <div className="max-w-4xl mx-auto glass-panel rounded-3xl border-border/40 p-8 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left text-sm text-foreground/70">
              <div className="space-y-5">
                <div>
                  <h4 className="font-semibold text-secondary mb-2">2025 Q4 – 2026 Q1</h4>
                  <p>Vanilla cooperatives Sambava & Antalaha</p>
                </div>
                <div>
                  <h4 className="font-semibold text-secondary mb-2">2026 Q2 – 2026 Q3</h4>
                  <p>Clove farmers Antalaha / Fénérive</p>
                </div>
              </div>
              <div className="space-y-5">
                <div>
                  <h4 className="font-semibold text-secondary mb-2">2026 Q4 – 2027 Q2</h4>
                  <p>Graphite / cacao (if vanilla economics ≥ 0)</p>
                </div>
                <div>
                  <h4 className="font-semibold text-secondary mb-2">2027 Q3 – 2027 Q4</h4>
                  <p>Battery minerals (if EU passport enforced)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};