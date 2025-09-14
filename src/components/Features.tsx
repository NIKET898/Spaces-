import { Shield, Eye, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";

export function Features() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Feature Card */}
          <Card className="md:col-span-2 p-8 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[hsl(var(--gold))]/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
            <div className="relative z-10 space-y-6">
              <Eye className="h-12 w-12 text-[hsl(var(--gold))]" />
              <div>
                <h3 className="text-3xl font-bold mb-2">PRO LENS</h3>
                <p className="text-xl text-primary-foreground/80 mb-4">
                  The Ultimate Duo - Clarity & Confidence
                </p>
                <p className="text-primary-foreground/60">
                  Precision in motion, elegance in form
                </p>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-bold text-[hsl(var(--gold))]">$9</span>
                <span className="text-primary-foreground/60">starting price</span>
              </div>
            </div>
          </Card>

          {/* Secondary Feature Cards */}
          <div className="space-y-8">
            <Card className="p-6 hover:shadow-xl transition-all duration-300 group">
              <Shield className="h-10 w-10 text-[hsl(var(--gold))] mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="text-xl font-bold mb-2">VISION SHIELD</h4>
              <p className="text-muted-foreground">
                Designed to move, built to feel
              </p>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-all duration-300 group">
              <Sparkles className="h-10 w-10 text-[hsl(var(--gold))] mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="text-xl font-bold mb-2">PREMIUM QUALITY</h4>
              <p className="text-muted-foreground">
                Handcrafted with attention to every detail
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}