import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { useState } from "react";

export function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Subscribed!",
        description: "Thank you for subscribing to our newsletter.",
      });
      setEmail("");
    }
  };

  const footerLinks = {
    Resources: ["Size Guide", "Care Instructions", "Warranty", "Returns"],
    Company: ["About Us", "Careers", "Press", "Blog"],
    Services: ["Eye Exams", "Lens Replacement", "Frame Repair", "Adjustments"],
  };

  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[hsl(var(--gold-dark))] to-[hsl(var(--gold))] bg-clip-text text-transparent">
              EyeWear
            </h3>
            <p className="text-primary-foreground/80 mb-4">
              Premium eyewear for the modern world
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="hover:text-[hsl(var(--gold))]">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-[hsl(var(--gold))]">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-[hsl(var(--gold))]">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-primary-foreground/70 hover:text-[hsl(var(--gold))] transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <p className="text-primary-foreground/70 mb-4">
              Get exclusive offers and new product updates
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
                required
              />
              <Button variant="hero" className="w-full">
                <Mail className="mr-2 h-4 w-4" />
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center">
          <p className="text-primary-foreground/60">
            &copy; 2025 EyeWear. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}