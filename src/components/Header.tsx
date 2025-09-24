import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Sobre Nós", href: "/sobre" },
    { name: "Massoterapeuta", href: "/profissionais" },
    { name: "Massagens", href: "/massagens" },
    { name: "Benefícios", href: "/beneficios" },
    { name: "Contato", href: "/contato" },
    { name: "Trabalhe Conosco", href: "/trabalhe-conosco" },
    { name: "Locação", href: "/locacao" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 gradient-primary rounded-full"></div>
            <span className="text-xl font-serif font-bold text-foreground">
              Núcleo Massagem
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(item.href) 
                    ? "text-primary border-b-2 border-primary" 
                    : "text-muted-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button asChild className="gradient-primary text-primary-foreground hover:opacity-90">
              <a 
                href="https://wa.me/11966588962" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Agendar
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 text-base font-medium transition-colors hover:text-primary ${
                    isActive(item.href) 
                      ? "text-primary bg-primary/10" 
                      : "text-muted-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Button asChild className="w-full gradient-primary text-primary-foreground">
                  <a 
                    href="https://wa.me/11966588962" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Agendar Massagem
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;