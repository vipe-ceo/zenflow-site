import { Link } from "react-router-dom";
import { Instagram, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 gradient-primary rounded-full"></div>
              <span className="text-xl font-serif font-bold">Núcleo Massagem</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Seu bem-estar é nossa prioridade. Tratamentos profissionais de massoterapia 
              em ambiente sereno e acolhedor.
            </p>
          </div>

          {/* Links Rápidos */}
          <div className="space-y-4">
            <h3 className="font-serif font-semibold">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><Link to="/sobre" className="text-muted-foreground hover:text-primary text-sm">Sobre Nós</Link></li>
              <li><Link to="/massagens" className="text-muted-foreground hover:text-primary text-sm">Massagens</Link></li>
              <li><Link to="/profissionais" className="text-muted-foreground hover:text-primary text-sm">Profissionais</Link></li>
              <li><Link to="/locacao" className="text-muted-foreground hover:text-primary text-sm">Locação de Espaço</Link></li>
            </ul>
          </div>

          {/* Contato */}
          <div className="space-y-4">
            <h3 className="font-serif font-semibold">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">
                    Calç. dos Cravos, 240 - Alphaville Comercial
                  </p>
                  <p className="text-sm text-muted-foreground">Barueri - SP, 06453-053</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <p className="text-sm text-muted-foreground">(11) 96658-8962</p>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <p className="text-sm text-muted-foreground">contato@nucleomassagem.com.br</p>
              </div>
            </div>
          </div>

          {/* Redes Sociais */}
          <div className="space-y-4">
            <h3 className="font-serif font-semibold">Siga-nos</h3>
            <div className="flex space-x-3">
              <a 
                href="#" 
                className="p-2 bg-primary/10 hover:bg-primary/20 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-primary" />
              </a>
            </div>
            <a 
              href="https://share.google/Lut2j7GqsWMnL2tYC"
              target="_blank"
              rel="noopener noreferrer" 
              className="inline-flex items-center text-sm text-primary hover:underline"
            >
              <MapPin className="h-4 w-4 mr-1" />
              Como chegar
            </a>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © 2024 Núcleo Massagem. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6">
            <Link to="/politica-privacidade" className="text-sm text-muted-foreground hover:text-primary">
              Política de Privacidade
            </Link>
            <Link to="/termos-uso" className="text-sm text-muted-foreground hover:text-primary">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;