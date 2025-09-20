import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, ShoppingCart, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCart } from "@/hooks/useCart";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export function Header() {
  const navigate = useNavigate();
  const { items } = useCart();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const glassesCategories = [
    {
      title: "By Type",
      items: [
        {
          name: "Prescription Glasses",
          href: "#prescription",
          description: "Corrective eyewear",
        },
        {
          name: "Sunglasses",
          href: "#sunglasses",
          description: "UV protection",
        },
        {
          name: "Reading Glasses",
          href: "#reading",
          description: "For near vision",
        },
        {
          name: "Computer Glasses",
          href: "#computer",
          description: "Blue light protection",
        },
      ],
    },
    {
      title: "By Frame Style",
      items: [
        {
          name: "Round Frames",
          href: "#round",
          description: "Classic circular style",
        },
        {
          name: "Square Frames",
          href: "#square",
          description: "Bold geometric look",
        },
        {
          name: "Aviator",
          href: "#aviator",
          description: "Timeless pilot style",
        },
        {
          name: "Cat Eye",
          href: "#cateye",
          description: "Vintage feminine style",
        },
      ],
    },
    {
      title: "By Brand",
      items: [
        { name: "Ray-Ban", href: "#rayban", description: "Iconic eyewear" },
        { name: "Oakley", href: "#oakley", description: "Sports performance" },
        { name: "Gucci", href: "#gucci", description: "Luxury fashion" },
        {
          name: "Tom Ford",
          href: "#tomford",
          description: "Designer elegance",
        },
      ],
    },
  ];

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLDivElement>,
    href: string
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-1">
          <div className="flex flex-col items-center">
  <div className="flex items-center">
    <img
      src="/without_bg1.png"
      alt="Deepak Optical Logo"
      className="h-5 w-auto"
    />
  </div>
  <div className="flex items-center mt-1">
    <h2 className="text-2xm font-bold bg-gradient-to-r from-[hsl(var(--gold-dark))] to-[hsl(var(--gold))] bg-clip-text text-transparent">
      Deepak Optical
    </h2>
  </div>
</div>


          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <a
                  href="#shop"
                  onClick={(e) => scrollToSection(e, "#shop")}
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                >
                  Shop
                </a>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <a
                  href="#services"
                  onClick={(e) => scrollToSection(e, "#services")}
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                >
                  Services
                </a>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <a
                  href="#eyewear"
                  onClick={(e) => scrollToSection(e, "#eyewear")}
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                >
                  Eyewear
                </a>
              </NavigationMenuItem>

              {/* Glasses Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>Glasses</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[600px] md:grid-cols-3">
                    {glassesCategories.map((category) => (
                      <div key={category.title} className="space-y-3">
                        <h4 className="text-sm font-medium leading-none text-foreground mb-3">
                          {category.title}
                        </h4>
                        <div className="space-y-2">
                          {category.items.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              onClick={(e) => scrollToSection(e, item.href)}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">
                                {item.name}
                              </div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {item.description}
                              </p>
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <a
                  href="#about"
                  onClick={(e) => scrollToSection(e, "#about")}
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                >
                  About
                </a>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <a
                  href="#contact"
                  onClick={(e) => scrollToSection(e, "#contact")}
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                >
                  Contact
                </a>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Actions */}
          <div className="flex items-center gap-4">
            {/* Desktop Search */}
            <div className="hidden md:flex items-center">
              {isSearchOpen ? (
                <div className="relative animate-slideInRight">
                  <Input
                    type="text"
                    placeholder="Search glasses..."
                    className="w-64 pr-10"
                    autoFocus
                    onBlur={() => setTimeout(() => setIsSearchOpen(false), 200)}
                  />
                  <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                </div>
              ) : (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsSearchOpen(true)}
                >
                  <Search className="h-5 w-5" />
                </Button>
              )}
            </div>

            {/* Cart Button */}
            <Button
              variant="ghost"
              size="icon"
              className="relative"
              onClick={() => document.getElementById("cart-trigger")?.click()}
            >
              <ShoppingCart className="h-5 w-5" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-[hsl(var(--gold))] text-xs font-bold text-primary flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Button>

            {/* Login Button */}
            <Button
              variant="outline-dark"
              className="hidden md:inline-flex"
              onClick={() => navigate("/login")}
            >
              Login
            </Button>

            {/* Mobile Menu Button */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  {isMobileMenuOpen ? (
                    <X className="h-5 w-5" />
                  ) : (
                    <Menu className="h-5 w-5" />
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-4 mt-8">
                  <a
                    href="#shop"
                    onClick={(e) => scrollToSection(e, "#shop")}
                    className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Shop
                  </a>
                  <a
                    href="#services"
                    onClick={(e) => scrollToSection(e, "#services")}
                    className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Services
                  </a>
                  <a
                    href="#eyewear"
                    onClick={(e) => scrollToSection(e, "#eyewear")}
                    className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Eyewear
                  </a>

                  {/* Glasses Dropdown for Mobile */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium text-foreground">
                      Glasses
                    </h3>
                    <div className="pl-4 space-y-3">
                      {glassesCategories.map((category) => (
                        <div key={category.title} className="space-y-2">
                          <h4 className="text-sm font-medium text-muted-foreground">
                            {category.title}
                          </h4>
                          <div className="pl-3 space-y-1">
                            {category.items.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                onClick={(e) => scrollToSection(e, item.href)}
                                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                              >
                                {item.name}
                              </a>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <a
                    href="#about"
                    onClick={(e) => scrollToSection(e, "#about")}
                    className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    About
                  </a>
                  <a
                    href="#contact"
                    onClick={(e) => scrollToSection(e, "#contact")}
                    className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Contact
                  </a>

                  <div className="pt-4 border-t">
                    <Input
                      type="text"
                      placeholder="Search glasses..."
                      className="mb-4"
                    />
                    <Button
                      variant="outline-dark"
                      className="w-full"
                      onClick={() => navigate("/login")}
                    >
                      Login
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
