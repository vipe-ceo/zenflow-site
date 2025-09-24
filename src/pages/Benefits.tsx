import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  Brain, 
  Moon, 
  Zap, 
  Shield, 
  Users, 
  Activity, 
  Smile,
  ArrowRight 
} from "lucide-react";
import { Link } from "react-router-dom";

const Benefits = () => {
  const benefits = [
    {
      icon: Heart,
      title: "Redução do Estresse",
      description: "A massagem libera endorfinas e reduz os níveis de cortisol, proporcionando alívio natural do estresse e ansiedade acumulados no dia a dia."
    },
    {
      icon: Brain,
      title: "Relaxamento Mental",
      description: "Promove clareza mental e tranquilidade, ajudando a diminuir pensamentos acelerados e melhorando a capacidade de concentração."
    },
    {
      icon: Moon,
      title: "Melhora do Sono",
      description: "As técnicas de massagem estimulam a produção de serotonina, regulando o ciclo do sono e proporcionando noites mais reparadoras."
    },
    {
      icon: Activity,
      title: "Alívio de Dores",
      description: "Reduz tensões musculares, dores nas costas, pescoço e ombros, proporcionando alívio duradouro e melhora da postura corporal."
    },
    {
      icon: Zap,
      title: "Aumento da Energia",
      description: "Melhora a circulação sanguínea e linfática, aumentando a oxigenação dos tecidos e proporcionando mais disposição e vitalidade."
    },
    {
      icon: Shield,
      title: "Fortalecimento Imunológico",
      description: "Estimula o sistema imunológico, aumentando a resistência do organismo contra infecções e doenças."
    },
    {
      icon: Users,
      title: "Melhora dos Relacionamentos",
      description: "O bem-estar físico e mental proporcionado pela massagem reflete positivamente nas relações interpessoais e autoestima."
    },
    {
      icon: Smile,
      title: "Bem-estar Emocional",
      description: "Promove sensação de bem-estar geral, reduz sintomas de depressão leve e aumenta a sensação de felicidade e satisfação pessoal."
    }
  ];

  const scientificBenefits = [
    {
      category: "Benefícios Físicos",
      items: [
        "Melhora da circulação sanguínea",
        "Redução da pressão arterial",
        "Alívio de dores musculares",
        "Maior flexibilidade",
        "Redução de inchaços",
        "Melhora da recuperação muscular"
      ]
    },
    {
      category: "Benefícios Mentais",
      items: [
        "Redução da ansiedade",
        "Diminuição do estresse",
        "Melhora da concentração",
        "Maior clareza mental",
        "Redução de pensamentos negativos",
        "Aumento da autoestima"
      ]
    },
    {
      category: "Benefícios Emocionais",
      items: [
        "Sensação de bem-estar",
        "Redução da irritabilidade",
        "Maior equilíbrio emocional",
        "Aumento da felicidade",
        "Melhora do humor",
        "Sensação de renovação"
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
              Benefícios da <span className="text-primary">Massoterapia</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Descubra como a massagem pode transformar sua qualidade de vida, proporcionando benefícios comprovados para corpo, mente e espírito
            </p>
          </div>
        </div>
      </section>

      {/* Main Benefits Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Como a Massagem Pode Transformar sua Vida
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Benefícios comprovados cientificamente que vão além do relaxamento momentâneo
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center shadow-soft hover:shadow-elegant transition-all duration-300 group">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 mx-auto group-hover:bg-primary/20 transition-colors">
                    <benefit.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-serif font-semibold">{benefit.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Scientific Evidence */}
      <section className="py-16 px-4 bg-secondary/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Benefícios Comprovados Cientificamente
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Estudos científicos confirmam os múltiplos benefícios da massoterapia para saúde e bem-estar
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {scientificBenefits.map((category, index) => (
              <Card key={index} className="shadow-soft">
                <CardHeader>
                  <h3 className="text-xl font-serif font-semibold text-center">{category.category}</h3>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* When to Get a Massage */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                Quando Procurar uma Massagem?
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-serif font-semibold mb-6 text-primary">Situações Ideais</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold mb-1">Estresse e Ansiedade</h4>
                      <p className="text-muted-foreground text-sm">Quando você sente sobrecarga emocional ou mental</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold mb-1">Dores Musculares</h4>
                      <p className="text-muted-foreground text-sm">Tensões no pescoço, ombros, costas ou outras regiões</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold mb-1">Problemas de Sono</h4>
                      <p className="text-muted-foreground text-sm">Dificuldade para adormecer ou sono não reparador</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold mb-1">Após Exercícios</h4>
                      <p className="text-muted-foreground text-sm">Para recuperação muscular e prevenção de lesões</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-serif font-semibold mb-6 text-primary">Frequência Recomendada</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-secondary/30 rounded-lg">
                    <h4 className="font-semibold mb-2">Manutenção do Bem-estar</h4>
                    <p className="text-muted-foreground text-sm">1 vez por mês para manter o equilíbrio e prevenir tensões</p>
                  </div>
                  <div className="p-4 bg-secondary/30 rounded-lg">
                    <h4 className="font-semibold mb-2">Tratamento Terapêutico</h4>
                    <p className="text-muted-foreground text-sm">1-2 vezes por semana para tratar dores específicas</p>
                  </div>
                  <div className="p-4 bg-secondary/30 rounded-lg">
                    <h4 className="font-semibold mb-2">Relaxamento e Desestresse</h4>
                    <p className="text-muted-foreground text-sm">A cada 15 dias para controle do estresse diário</p>
                  </div>
                  <div className="p-4 bg-secondary/30 rounded-lg">
                    <h4 className="font-semibold mb-2">Atletas e Esportistas</h4>
                    <p className="text-muted-foreground text-sm">2-3 vezes por semana para recuperação muscular</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-secondary/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              O que Nossos Clientes Dizem
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="shadow-soft">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div className="flex justify-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Heart key={i} className="h-4 w-4 text-primary fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground italic mb-4">
                    "Desde que comecei as sessões regulares, minha qualidade de sono melhorou 
                    drasticamente e as dores nas costas praticamente desapareceram."
                  </p>
                  <footer className="text-sm font-medium">— Carlos M.</footer>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-soft">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div className="flex justify-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Heart key={i} className="h-4 w-4 text-primary fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground italic mb-4">
                    "A massagem se tornou essencial na minha rotina. É incrível como me sinto 
                    renovada e com mais energia após cada sessão."
                  </p>
                  <footer className="text-sm font-medium">— Ana L.</footer>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-soft">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div className="flex justify-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Heart key={i} className="h-4 w-4 text-primary fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground italic mb-4">
                    "Como atleta, a massagem desportiva é fundamental para minha recuperação. 
                    Sinto a diferença na performance e na prevenção de lesões."
                  </p>
                  <footer className="text-sm font-medium">— Roberto S.</footer>
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
            Experimente os Benefícios da Massoterapia
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Dê o primeiro passo rumo ao seu bem-estar. Agende sua sessão e descubra como a massagem pode transformar sua qualidade de vida
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
                Agendar Primeira Sessão
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              asChild
            >
              <Link to="/massagens">
                Conhecer Nossos Serviços
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Benefits;