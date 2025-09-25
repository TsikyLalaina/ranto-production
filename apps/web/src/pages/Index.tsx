import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Problems } from "@/components/Problems";
import { Solutions } from "@/components/Solutions";
import { MarketData } from "@/components/MarketData";
import { RevenueModel } from "@/components/RevenueModel";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <Navigation />
      <main className="relative">
        <Hero />
        <div className="relative -mt-12 md:-mt-16 xl:-mt-20">
          <div className="cinematic-bg rounded-t-[3rem] pt-28 pb-24 lg:pb-32">
            <div className="cinematic-grid" aria-hidden="true" />
            <section id="problem" className="relative z-10">
              <Problems />
            </section>
            <section id="solution" className="relative z-10">
              <Solutions />
            </section>
            <section id="market" className="relative z-10">
              <MarketData />
            </section>
            <section id="revenue" className="relative z-10">
              <RevenueModel />
            </section>
            <div className="relative z-10">
              <CallToAction />
              <Footer />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
