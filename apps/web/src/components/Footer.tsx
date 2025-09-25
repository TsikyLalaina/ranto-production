import { Separator } from "@/components/ui/separator";

export const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-border/40 bg-background/80">
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/15 via-secondary/10 to-background opacity-80" aria-hidden="true" />
      <div className="absolute inset-0 cinematic-grid" aria-hidden="true" />
      <div className="relative container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-hero shadow-glow" />
              <span className="text-2xl font-semibold tracking-tight text-foreground">Ranto</span>
            </div>
            <p className="text-foreground/70 max-w-md leading-relaxed">
              Transforming Madagascar's agricultural trade through SMS-first technology, connecting farmers directly to global markets with
              fair pricing and instant payments.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-foreground/60">Platform</h4>
            <ul className="space-y-2 text-foreground/70 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">For Farmers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">For Exporters</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">For Banks</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">API Documentation</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-foreground/60">Company</h4>
            <ul className="space-y-2 text-foreground/70 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Mission</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <Separator className="my-12 bg-foreground/10" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-foreground/60">
          <p>© 2025 Ranto. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Data Protection</a>
          </div>
        </div>
      </div>
    </footer>
  );
};