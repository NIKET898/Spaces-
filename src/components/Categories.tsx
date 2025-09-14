import { Card } from "@/components/ui/card";
import { Glasses, Sun, Monitor, Star } from "lucide-react";

const categories = [
  {
    id: 1,
    name: "Prescription",
    description: "Clear vision, stylish frames",
    icon: Glasses,
    color: "from-blue-500 to-blue-600",
  },
  {
    id: 2,
    name: "Sunglasses",
    description: "UV protection with style",
    icon: Sun,
    color: "from-amber-500 to-orange-600",
  },
  {
    id: 3,
    name: "Computer Glasses",
    description: "Blue light protection",
    icon: Monitor,
    color: "from-purple-500 to-purple-600",
  },
  {
    id: 4,
    name: "Designer",
    description: "Premium luxury eyewear",
    icon: Star,
    color: "from-[hsl(var(--gold-dark))] to-[hsl(var(--gold))]",
  },
];

export function Categories() {
  return (
    <section id="shop" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Shop by Category</h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Card
                key={category.id}
                className="p-6 cursor-pointer group hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                <p className="text-sm text-muted-foreground">{category.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}