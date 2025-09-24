import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowRight, Clock, Star } from "lucide-react";
import relaxingMassage from "@/assets/relaxing-massage.jpg";
import sportsMassage from "@/assets/sports-massage.jpg";
import tantricMassage from "@/assets/tantric-massage.jpg";

const Massages = () => {
  const massages = [
    {
      title: "Massagem Relaxante",
      image: relaxingMassage,
      duration: "60-90 min",
      description: "Técnica suave e envolvente que combina movimentos fluidos e pressão moderada para aliviar tensões acumuladas no dia a dia. Promove profundo relaxamento muscular e mental, reduzindo o estresse e ansiedade.",
      benefits: [
        "Redução do estresse e ansiedade",
        "Alívio das tensões musculares",
        "Melhora da qualidade do sono",
        "Sensação de bem-estar geral"
      ]
    },
    {
      title: "Massagem Desportiva", 
      image: sportsMassage,
      duration: "60-75 min",
      description: "Terapia específica para atletas e praticantes de atividade física, focada na recuperação muscular, prevenção de lesões e melhora da performance. Utiliza técnicas de deep tissue e liberação miofascial.",
      benefits: [
        "Recuperação muscular acelerada",
        "Prevenção de lesões",
        "Melhora da flexibilidade",
        "Aumento da performance atlética"
      ]
    },
    {
      title: "Massagem Tântrica",
      image: tantricMassage,
      duration: "90-120 min",
      description: "Técnica milenar que trabalha energia, sensualidade e conexão corpo-mente. Promove autoconhecimento, desbloqueio energético e despertar da consciência corporal através de toques respeitosos e terapêuticos.",
      benefits: [
        "Autoconhecimento corporal",
        "Desbloqueio energético",
        "Redução de bloqueios emocionais",
        "Conexão mente-corpo-espírito"
      ]
    },
    {
      title: "Massagem Nuru",
      image: relaxingMassage,
      duration: "60-90 min", 
      description: "Técnica japonesa que utiliza gel especial à base de algas marinhas, proporcionando deslizamento suave e sensações únicas. Focada no relaxamento profundo e experiência sensorial diferenciada.",
      benefits: [
        "Hidratação profunda da pele",
        "Relaxamento sensorial único",
        "Melhora da circulação",
        "Experiência terapêutica diferenciada"
      ]
    },
    {
      title: "Massagem Mix",
      image: sportsMassage,
      duration: "75-90 min",
      description: "Combinação personalizada de diferentes técnicas de massagem adaptada às necessidades específicas de cada cliente. Integra elementos relaxantes, terapêuticos e energéticos em uma sessão única.",
      benefits: [
        "Tratamento personalizado",
        "Múltiplos benefícios terapêuticos",
        "Experiência única e adaptada",
        "Resultados otimizados"
      ]
    },
    {
      title: "Massagem Mútua",
      image: tantricMassage,
      duration: "90-120 min",
      description: "Experiência compartilhada onde os participantes aprendem técnicas básicas de massagem e praticam em ambiente seguro e orientado. Promove conexão, intimidade e bem-estar mútuo.",
      benefits: [
        "Fortalecimento de vínculos",
        "Aprendizado de técnicas",
        "Experiência compartilhada",
        "Conexão e intimidade"
      ]
    },
    {
      title: "Vivência",
      image: relaxingMassage,
      duration: "120-180 min",
      description: "Sessão prolongada que combina massagem, meditação, respiração consciente e práticas de mindfulness. Uma jornada completa de autoconhecimento e renovação interior.",
      benefits: [
        "Autoconhecimento profundo",
        "Renovação interior",
        "Equilíbrio emocional",
        "Expansão da consciência"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 gradient-subtle"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
              Nossas <span className="text-primary">Massagens</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Descubra nossa variedade de técnicas terapêuticas, cada uma cuidadosamente desenvolvida para proporcionar uma experiência única de bem-estar
            </p>
          </div>
        </div>
      </section>

      {/* Massages Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid gap-12">
            {massages.map((massage, index) => (
              <Card key={index} className={`overflow-hidden shadow-elegant ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:flex">
                  <div className={`lg:w-1/2 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <img 
                      src={massage.image} 
                      alt={massage.title}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                  </div>
                  <div className={`lg:w-1/2 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-2xl md:text-3xl font-serif font-bold">{massage.title}</h3>
                        <div className="flex items-center text-muted-foreground">
                          <Clock className="h-4 w-4 mr-1" />
                          <span className="text-sm">{massage.duration}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <p className="text-muted-foreground leading-relaxed">
                        {massage.description}
                      </p>
                      
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center">
                          <Star className="h-4 w-4 text-primary mr-2" />
                          Principais Benefícios
                        </h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {massage.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-start text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></div>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <Button 
                        className="w-full gradient-primary text-primary-foreground hover:opacity-90"
                        asChild
                      >
                        <a 
                          href="https://wa.me/11966588962" 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          Agendar {massage.title}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-16 px-4 bg-secondary/50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-serif font-bold mb-4">Como Funciona</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold mt-0.5">1</div>
                    <div>
                      <h3 className="font-semibold mb-1">Consulta Inicial</h3>
                      <p className="text-muted-foreground text-sm">Conversamos sobre suas necessidades e expectativas</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold mt-0.5">2</div>
                    <div>
                      <h3 className="font-semibold mb-1">Preparação</h3>
                      <p className="text-muted-foreground text-sm">Ambiente preparado com total privacidade e conforto</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold mt-0.5">3</div>
                    <div>
                      <h3 className="font-semibold mb-1">Sessão</h3>
                      <p className="text-muted-foreground text-sm">Massagem personalizada com técnicas profissionais</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold mt-0.5">4</div>
                    <div>
                      <h3 className="font-semibold mb-1">Finalização</h3>
                      <p className="text-muted-foreground text-sm">Momento de relaxamento e orientações pós-sessão</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-serif font-bold mb-4">Informações Importantes</h2>
                <div className="space-y-4 text-muted-foreground text-sm">
                  <p>
                    <strong className="text-foreground">Higiene e Segurança:</strong> Utilizamos produtos de alta qualidade 
                    e seguimos rigorosos protocolos de higienização.
                  </p>
                  <p>
                    <strong className="text-foreground">Privacidade:</strong> Garantimos total discrição e respeito 
                    aos limites de cada cliente.
                  </p>
                  <p>
                    <strong className="text-foreground">Profissionais:</strong> Todos os nossos massoterapeutas 
                    são certificados e experientes.
                  </p>
                  <p>
                    <strong className="text-foreground">Agendamento:</strong> Recomendamos agendamento prévio 
                    para garantir o horário de sua preferência.
                  </p>
                  <p>
                    <strong className="text-foreground">Cancelamento:</strong> Cancelamentos devem ser feitos 
                    com pelo menos 2 horas de antecedência.
                  </p>
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
            Pronto para sua Experiência de Bem-estar?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Escolha a massagem ideal para suas necessidades e agende seu momento de renovação
          </p>
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
              Agendar Massagem pelo WhatsApp
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Massages;