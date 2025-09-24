import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import ServiceCard from "@/components/ServiceCard";
import { ArrowRight, Star, Users, Clock, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-spa.jpg";
import relaxingMassage from "@/assets/relaxing-massage.jpg";
import sportsMassage from "@/assets/sports-massage.jpg";
import tantricMassage from "@/assets/tantric-massage.jpg";

const Index = () => {
  const services = [
    {
      title: "Massagem Relaxante",
      image: relaxingMassage,
      description: "Técnicas suaves para alívio do estresse e tensões do dia a dia, promovendo profundo relaxamento corporal e mental."
    },
    {
      title: "Massagem Desportiva", 
      image: sportsMassage,
      description: "Terapia específica para atletas e praticantes de atividade física, focada na recuperação muscular e prevenção de lesões."
    },
    {
      title: "Massagem Tântrica",
      image: tantricMassage, 
      description: "Técnica milenar que trabalha energia, sensualidade e conexão, promovendo autoconhecimento e bem-estar integral."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
            Sua Jornada de 
            <span className="text-primary"> Bem-Estar</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            Descubra o poder transformador da massoterapia profissional em ambiente sereno e acolhedor
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="gradient-primary text-primary-foreground hover:opacity-90 text-lg px-8 py-4"
              asChild
            >
              <a 
                href="https://wa.me/11966588962" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Agendar Massagem
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 text-lg px-8 py-4"
              asChild
            >
              <Link to="/sobre">
                Conhecer Mais
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 gradient-subtle">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Transformamos Tensão em Tranquilidade
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nossos profissionais certificados combinam técnicas tradicionais com abordagens modernas, 
            oferecendo tratamentos personalizados em um ambiente de total privacidade e conforto.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Nossos Principais Serviços
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Cada massagem é uma experiência única, adaptada às suas necessidades específicas
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                image={service.image}
                description={service.description}
                link="/massagens"
              />
            ))}
          </div>
          
          <div className="text-center">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              asChild
            >
              <Link to="/massagens">
                Ver Todos os Serviços
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto shadow-elegant">
            <CardHeader className="text-center pb-4">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-primary fill-current" />
                ))}
              </div>
            </CardHeader>
            <CardContent className="text-center">
              <blockquote className="text-xl md:text-2xl font-serif italic text-muted-foreground mb-6">
                "Experiência transformadora! O ambiente é acolhedor e os profissionais são extremamente 
                competentes. Saí renovada e com uma sensação de bem-estar que durou dias."
              </blockquote>
              <footer className="text-foreground font-medium">
                — Maria Silva, Cliente Regular
              </footer>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                Sobre o Núcleo Massagem
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Há mais de 10 anos dedicados ao bem-estar e saúde através da massoterapia profissional. 
                Nossa missão é proporcionar momentos de renovação e equilíbrio, respeitando a 
                individualidade de cada cliente.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-3 mx-auto">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Clientes Satisfeitos</div>
                </div>
                
                <div className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-3 mx-auto">
                    <Clock className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-primary">10+</div>
                  <div className="text-sm text-muted-foreground">Anos de Experiência</div>
                </div>
              </div>
              
              <Button 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                asChild
              >
                <Link to="/sobre">
                  Conhecer Nossa História
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-lg overflow-hidden shadow-elegant">
                <img 
                  src={heroImage} 
                  alt="Ambiente do Núcleo Massagem"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary/10 p-6 rounded-lg backdrop-blur-sm">
                <Shield className="h-8 w-8 text-primary mb-2" />
                <div className="text-sm font-medium">Profissionais</div>
                <div className="text-sm text-muted-foreground">Certificados</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;