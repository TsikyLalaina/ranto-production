import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export const MarketData = () => {
  const marketStats = [
    {
      label: "Madagascar GDP",
      value: "$15.4B",
      sublabel: "25% from agriculture"
    },
    {
      label: "Total Goods Exports",
      value: "$3.48B",
      sublabel: "World Bank 2024"
    },
    {
      label: "Top Export: Vanilla",
      value: "$1.12B",
      sublabel: "32% of total exports"
    },
    {
      label: "Rural Population",
      value: "62.1%",
      sublabel: "Primary target market"
    },
    {
      label: "Mobile Penetration",
      value: "56.2%",
      sublabel: "SMS accessibility"
    },
    {
      label: "Mobile Money Accounts",
      value: "14.8M",
      sublabel: "1.2 per adult"
    }
  ];

  const priceData = [
    {
      product: "Vanilla",
      farmGate: "$20/kg",
      exportFOB: "$200/kg",
      farmerShare: "10%",
      growth: "+10%"
    },
    {
      product: "Cloves",
      farmGate: "$6/kg",
      exportFOB: "$30/kg",
      farmerShare: "20%",
      growth: "+20%"
    },
    {
      product: "Graphite",
      farmGate: "$1/kg",
      exportFOB: "$7/kg",
      farmerShare: "14%",
      growth: "+14%"
    }
  ];

  const { ref, isVisible } = useScrollReveal({ threshold: 0.15, rootMargin: "0px 0px -10% 0px" });
  const visibility = isVisible ? "true" : "false";

  return (
    <section ref={ref} className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 reveal-on-scroll reveal-from-bottom" data-visible={visibility}>
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-foreground">
            Market Size & Opportunity
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto">
            Madagascar's agricultural export market represents a massive opportunity for digital transformation
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {marketStats.map((stat, index) => (
            <Card
              key={index}
              className="glass-panel rounded-3xl border-border/40 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-glow reveal-on-scroll reveal-from-bottom"
              style={{ transitionDelay: `${0.15 + index * 0.08}s` }}
              data-visible={visibility}
            >
              <CardContent className="pt-8 pb-10">
                <div className="text-4xl font-bold text-primary mb-3">{stat.value}</div>
                <div className="text-lg font-semibold text-foreground mb-2">{stat.label}</div>
                <div className="text-sm text-foreground/60">{stat.sublabel}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-8 text-center text-foreground reveal-on-scroll reveal-from-bottom" data-visible={visibility}>
            Current Farmer Share vs Export Value (2024)
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {priceData.map((item, index) => (
              <Card
                key={index}
                className="glass-panel rounded-3xl border-border/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-glow reveal-on-scroll reveal-from-bottom"
                style={{ transitionDelay: `${0.25 + index * 0.08}s` }}
                data-visible={visibility}
              >
                <CardHeader className="pb-0">
                  <CardTitle className="text-center text-xl text-foreground/90">{item.product}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 pt-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-foreground/60">Farm-gate:</span>
                    <span className="font-semibold text-foreground/90">{item.farmGate}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-foreground/60">Export FOB:</span>
                    <span className="font-semibold text-foreground/90">{item.exportFOB}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-foreground/60">Farmer Share:</span>
                    <span className="text-destructive font-semibold">{item.farmerShare}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-foreground/60">Growth Rate:</span>
                    <span className="text-success font-semibold">{item.growth}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};