import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Building, 
  Bed, 
  Wifi, 
  Car, 
  Coffee, 
  Shield, 
  Clock, 
  Users,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import heroImage from "@/assets/hero-spa.jpg";

const SpaceRental = () => {
  const facilities = [
    {
      icon: Bed,
      title: "Macas Profissionais",
      description: "Macas reguláveis e confortáveis para todos os tipos de massagem"
    },
    {
      icon: Coffee,
      title: "Produtos Inclusos",
      description: "Óleos, cremes e toalhas de alta qualidade sempre disponíveis"
    },
    {
      icon: Shield,
      title: "Ambiente Higienizado",
      description: "Limpeza profissional e protocolos rigorosos de higienização"
    },
    {
      icon: Wifi,
      title: "WiFi e Som Ambiente",
      description: "Internet de alta velocidade e sistema de som para relaxamento"
    },
    {
      icon: Car,
      title: "Estacionamento",
      description: "Vagas gratuitas para você e seus clientes"
    },
    {
      icon: Users,
      title: "Recepção",
      description: "Atendimento profissional para receber seus clientes"
    }
  ];

  const plans = [
    {
      name: "Por Hora",
      price: "R$ 45",
      period: "/hora",
      description: "Ideal para testes e atendimentos esporádicos",
      features: [
        "Uso por 1 hora",
        "Todos os equipamentos inclusos",
        "Produtos básicos de massagem",
        "Limpeza após uso",
        "Suporte da recepção"
      ],
      popular: false
    },
    {
      name: "Meio Período",
      price: "R$ 180",
      period: "/meio período",
      description: "Perfeito para profissionais com agenda flexível",
      features: [
        "4 horas consecutivas",
        "Todos os equipamentos inclusos",
        "Kit completo de produtos",
        "Limpeza incluída",
        "Agendamento de clientes",
        "Café e água à vontade"
      ],
      popular: true
    },
    {
      name: "Período Integral",
      price: "R$ 320",
      period: "/dia",
      description: "Para profissionais com alta demanda",
      features: [
        "8 horas de uso",
        "Sala reservada exclusivamente",
        "Kit premium de produtos",
        "Limpeza completa",
        "Agendamento prioritário",
        "Espaço para materiais pessoais",
        "Desconto em pacotes mensais"
      ],
      popular: false
    }
  ];

  const requirements = [
    "Certificação profissional válida",
    "Experiência comprovada em massoterapia",
    "Seguro de responsabilidade civil",
    "Comprometimento com nossa política de qualidade",
    "Disponibilidade para agendamento prévio",
    "Respeito aos horários estabelecidos"
  ];

  const availableHours = [
    { day: "Segunda a Sexta", hours: "9h às 22h" },
    { day: "Sábado", hours: "9h às 20h" },
    { day: "Domingo", hours: "10h às 18h" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 gradient-subtle"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
              Locação de <span className="text-primary">Espaço</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Salas totalmente equipadas para massoterapeutas profissionais. Tudo pronto para você focar no que faz de melhor: cuidar do bem-estar dos seus clientes
            </p>
          </div>
        </div>
      </section>

      {/* Facilities Overview */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                Tudo que Você Precisa em um Só Lugar
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Nossa estrutura foi pensada para oferecer a melhor experiência tanto para 
                o profissional quanto para os clientes. Ambiente sereno, equipamentos de 
                qualidade e toda a infraestrutura necessária para um atendimento excepcional.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {facilities.map((facility, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <facility.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{facility.title}</h3>
                      <p className="text-sm text-muted-foreground">{facility.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Sala para locação no Núcleo Massagem"
                className="w-full h-96 object-cover rounded-lg shadow-elegant"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm p-4 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Building className="h-5 w-5 text-primary" />
                  <span className="font-semibold">Salas Disponíveis</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  3 salas equipadas e climatizadas
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 px-4 bg-secondary/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Planos de Locação
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Escolha o plano que melhor se adapta à sua agenda e necessidades profissionais
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative shadow-elegant ${plan.popular ? 'ring-2 ring-primary scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-4 py-1">
                      Mais Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center">
                  <h3 className="text-2xl font-serif font-bold">{plan.name}</h3>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-primary">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <p className="text-muted-foreground text-sm mt-2">{plan.description}</p>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full ${plan.popular 
                      ? 'gradient-primary text-primary-foreground hover:opacity-90' 
                      : 'variant-outline border-primary text-primary hover:bg-primary hover:text-primary-foreground'
                    }`}
                    asChild
                  >
                    <a 
                      href="https://wa.me/11966588962" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Solicitar {plan.name}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements and Schedule */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Requirements */}
            <Card className="shadow-elegant">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Shield className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-serif font-bold">Requisitos</h2>
                </div>
                <p className="text-muted-foreground">
                  Para garantir a qualidade e segurança de todos
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {requirements.map((requirement, index) => (
                    <li key={index} className="flex items-start text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Available Hours */}
            <Card className="shadow-elegant">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Clock className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-serif font-bold">Horários Disponíveis</h2>
                </div>
                <p className="text-muted-foreground">
                  Flexibilidade para atender sua agenda
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                {availableHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-secondary/30 rounded-lg">
                    <span className="font-medium">{schedule.day}</span>
                    <span className="text-primary font-semibold">{schedule.hours}</span>
                  </div>
                ))}
                
                <div className="mt-6 p-4 bg-secondary/50 rounded-lg">
                  <h4 className="font-semibold mb-2">Informações Importantes</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Agendamento obrigatório com 24h de antecedência</li>
                    <li>• Cancelamentos até 4h antes sem cobrança</li>
                    <li>• Pacotes mensais com desconto progressivo</li>
                    <li>• Feriados com funcionamento reduzido</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process and Gallery */}
      <section className="py-16 px-4 bg-secondary/50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                Como Funciona
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">1</div>
                <h3 className="font-semibold mb-2">Contato</h3>
                <p className="text-sm text-muted-foreground">Entre em contato pelo WhatsApp</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">2</div>
                <h3 className="font-semibold mb-2">Visita</h3>
                <p className="text-sm text-muted-foreground">Conheça nossas instalações</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">3</div>
                <h3 className="font-semibold mb-2">Documentação</h3>
                <p className="text-sm text-muted-foreground">Análise dos documentos</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">4</div>
                <h3 className="font-semibold mb-2">Inicio</h3>
                <p className="text-sm text-muted-foreground">Comece a atender</p>
              </div>
            </div>
            
            {/* Gallery placeholder */}
            <Card className="shadow-elegant">
              <CardContent className="p-8">
                <h3 className="text-xl font-serif font-semibold text-center mb-6">
                  Galeria do Espaço
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[1, 2, 3].map((_, index) => (
                    <div key={index} className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                      <div className="text-center text-muted-foreground">
                        <Building className="h-8 w-8 mx-auto mb-2" />
                        <p className="text-sm">Sala {index + 1}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Pronto para Expandir sua Prática?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Agende uma visita e conheça pessoalmente nosso espaço. Tenha acesso a toda 
            infraestrutura necessária para oferecer o melhor atendimento aos seus clientes
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
                Solicitar Locação
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              asChild
            >
              <a 
                href="https://wa.me/11966588962" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Agendar Visita
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SpaceRental;