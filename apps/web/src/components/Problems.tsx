import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingDown, Clock, AlertTriangle, DollarSign } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export const Problems = () => {
  const problems = [
    {
      icon: <DollarSign className="h-8 w-8 text-destructive" />,
      title: "Farmers Capture Only 20% of Export Value",
      description: "Madagascar farmers receive $20/kg for vanilla that exports at $200/kg FOB",
      impact: "80% value lost to intermediaries"
    },
    {
      icon: <Clock className="h-8 w-8 text-destructive" />,
      title: "Export Documentation Takes 4-6 Weeks",
      description: "43 documents, $3,000 middleman fees, and significant bribe requirements",
      impact: "Massive delays and costs"
    },
    {
      icon: <AlertTriangle className="h-8 w-8 text-destructive" />,
      title: "No Access to Credit",
      description: "Only 8% of MSMEs have bank loans; farmers rely on 10%/month informal lending",
      impact: "Financial exclusion"
    },
    {
      icon: <TrendingDown className="h-8 w-8 text-destructive" />,
      title: "Trucks Run 40% Empty",
      description: "3,400 km empty monthly due to lack of cargo coordination",
      impact: "Logistics inefficiency"
    }
  ];

  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });
  const visibility = isVisible ? "true" : "false";

  return (
    <section ref={ref} className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 reveal-on-scroll reveal-from-bottom" data-visible={visibility}>
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-foreground">
            The Current Reality in Madagascar
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto">
            Systemic inefficiencies are crushing farmer incomes and limiting agricultural export potential
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <Card
              key={index}
              className="glass-panel rounded-3xl border-border/50 transition-all duration-500 hover:translate-y-[-6px] hover:shadow-glow reveal-on-scroll reveal-from-bottom"
              style={{ transitionDelay: `${0.15 + index * 0.1}s` }}
              data-visible={visibility}
            >
              <CardHeader className="pb-0">
                <div className="flex items-center gap-4">
                  {problem.icon}
                  <CardTitle className="text-xl text-foreground/90">{problem.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-foreground/70 mb-4 leading-relaxed">{problem.description}</p>
                <div className="inline-flex items-center gap-2 rounded-full bg-destructive/15 text-destructive px-4 py-2 text-sm font-semibold">
                  <span className="size-2 rounded-full bg-destructive block" />
                  {problem.impact}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};