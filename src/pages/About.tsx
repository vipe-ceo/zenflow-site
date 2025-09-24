import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Heart, Shield, Clock, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-spa.jpg";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Bem-Estar Integral",
      description: "Cuidamos do corpo, mente e espírito de forma holística"
    },
    {
      icon: Shield,
      title: "Profissionalismo",
      description: "Terapeutas certificados e técnicas comprovadas"
    },
    {
      icon: Award,
      title: "Excelência",
      description: "Padrão de qualidade superior em todos os atendimentos"
    },
    {
      icon: Users,
      title: "Respeito",
      description: "Ambiente seguro, acolhedor e respeitoso para todos"
    }
  ];

  const highlights = [
    { number: "10+", label: "Anos de Experiência" },
    { number: "500+", label: "Clientes Atendidos" },
    { number: "8", label: "Tipos de Massagem" },
    { number: "100%", label: "Profissionais Certificados" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 gradient-subtle"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
              Nossa História de <span className="text-primary">Cuidado</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Mais de uma década dedicada ao bem-estar e à saúde através da massoterapia profissional
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Ambiente sereno do Núcleo Massagem"
                className="w-full h-96 object-cover rounded-lg shadow-elegant"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
            
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                Nossa Missão
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Fundado em 2014, o Núcleo Massagem nasceu da paixão por proporcionar momentos 
                de renovação e equilíbrio através de técnicas terapêuticas milenares e modernas.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Acreditamos que cada pessoa é única, por isso nossos tratamentos são 
                personalizados, respeitando as necessidades individuais de cada cliente. 
                Nosso espaço foi cuidadosamente projetado para oferecer total privacidade, 
                conforto e tranquilidade.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Trabalhamos exclusivamente com profissionais certificados e utilizamos 
                produtos de alta qualidade, garantindo uma experiência transformadora 
                e segura para todos os nossos clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Nossos Valores
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Princípios que guiam nosso trabalho e relacionamento com cada cliente
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center shadow-soft hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 mx-auto">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-serif font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Nossos Números
            </h2>
            <p className="text-muted-foreground text-lg">
              Resultados que refletem nosso compromisso com a excelência
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {item.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                Localização Privilegiada
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Situado no coração de Alphaville, nosso espaço oferece fácil acesso 
                e estacionamento conveniente. O ambiente foi projetado para proporcionar 
                uma experiência de total desconexão da agitação urbana.
              </p>
              
              <div className="flex items-start space-x-3 mb-6">
                <MapPin className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium mb-1">Endereço Completo</p>
                  <p className="text-muted-foreground">
                    Calç. dos Cravos, 240 - Alphaville Comercial<br />
                    Barueri - SP, 06453-053
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 mb-8">
                <Clock className="h-6 w-6 text-primary" />
                <div>
                  <p className="font-medium mb-1">Horário de Funcionamento</p>
                  <p className="text-muted-foreground">
                    Segunda a Sábado: 9h às 22h<br />
                    Domingo: 10h às 20h
                  </p>
                </div>
              </div>
              
              <Button 
                className="gradient-primary text-primary-foreground hover:opacity-90"
                asChild
              >
                <a 
                  href="https://share.google/Lut2j7GqsWMnL2tYC"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MapPin className="mr-2 h-4 w-4" />
                  Como Chegar
                </a>
              </Button>
            </div>
            
            <div className="relative">
              <div className="aspect-video rounded-lg overflow-hidden shadow-elegant bg-muted flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <MapPin className="h-12 w-12 mx-auto mb-2" />
                  <p>Mapa da Localização</p>
                  <p className="text-sm">Alphaville Comercial</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Pronto para sua Experiência?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Agende seu momento de renovação e descubra como podemos ajudar no seu bem-estar
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="gradient-primary text-primary-foreground hover:opacity-90"
              asChild
            >
              <a 
                href="https://wa.me/11966588962" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Agendar Massagem
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              asChild
            >
              <Link to="/contato">
                Falar Conosco
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;