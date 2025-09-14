import { Card } from "@/components/ui/card";
import { Award, Users, Shield, Zap } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Premium Materials",
    description: "Only the finest materials make it into our frames",
  },
  {
    icon: Users,
    title: "Expert Craftsmanship",
    description: "Each pair is carefully crafted by skilled artisans",
  },
  {
    icon: Shield,
    title: "Perfect Fit",
    description: "Advanced fitting technology for maximum comfort",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Get your perfect pair delivered in just 2-3 days",
  },
];

export function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-6">Why Choose EyeWear?</h2>
          <p className="text-lg text-muted-foreground">
            We combine cutting-edge technology with timeless design to create eyewear that not only 
            looks great but enhances your vision and lifestyle.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="p-6 text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[hsl(var(--gold-dark))] to-[hsl(var(--gold))] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            );
          })}
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { value: "50K+", label: "Happy Customers" },
            { value: "1000+", label: "Frame Styles" },
            { value: "15+", label: "Years Experience" },
            { value: "98%", label: "Satisfaction Rate" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-[hsl(var(--gold))] mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}