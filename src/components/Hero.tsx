import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const scrollToProducts = () => {
    const element = document.querySelector("#eyewear");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-secondary/20 to-background">
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fadeInUp">
            <div className="inline-block">
              <span className="px-4 py-2 text-xs font-semibold tracking-wider text-[hsl(var(--gold))] bg-[hsl(var(--gold))]/10 rounded-full uppercase">
                Eye Health at 30's
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              SEE THE{" "}
              <span className="bg-gradient-to-r from-[hsl(var(--gold-dark))] to-[hsl(var(--gold))] bg-clip-text text-transparent">
                DIFFERENCE
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-lg">
              Not just eyewear — a unique blend of elegance, cutting-edge tech and affordability
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <Button 
                variant="hero" 
                size="xl" 
                onClick={scrollToProducts}
                className="group"
              >
                Explore Glasses
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <div className="flex items-baseline gap-2">
                <span className="text-sm text-muted-foreground">Starts From</span>
                <span className="text-3xl font-bold text-[hsl(var(--gold))]">₹9.99</span>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative lg:h-[600px] animate-slideInRight">
            <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--gold))]/20 to-transparent rounded-3xl" />
            <img
              src="https://images.unsplash.com/photo-1574258495973-f010dfbb5371?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Professional model wearing premium glasses"
              className="w-full h-full object-cover rounded-3xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[hsl(var(--gold))] rounded-full blur-3xl opacity-30 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}