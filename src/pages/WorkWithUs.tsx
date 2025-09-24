import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Users, Award, Heart, TrendingUp, CheckCircle, FileText } from "lucide-react";

const WorkWithUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "E-mail inválido",
        description: "Por favor, insira um e-mail válido.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Candidatura enviada!",
        description: "Recebemos sua candidatura e entraremos em contato em breve para mais informações.",
      });
      setFormData({ name: "", email: "", phone: "", experience: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  const benefits = [
    {
      icon: Users,
      title: "Ambiente Colaborativo",
      description: "Trabalhe em uma equipe unida e profissional, com foco no crescimento mútuo"
    },
    {
      icon: Award,
      title: "Crescimento Profissional",
      description: "Oportunidades de aperfeiçoamento e participação em cursos de especialização"
    },
    {
      icon: Heart,
      title: "Propósito Significativo",
      description: "Faça parte de uma missão que transforma vidas através do bem-estar"
    },
    {
      icon: TrendingUp,
      title: "Flexibilidade",
      description: "Horários flexíveis e possibilidade de crescimento dentro da empresa"
    }
  ];

  const requirements = [
    "Formação em Massoterapia ou áreas afins",
    "Certificação profissional válida",
    "Experiência comprovada (mínimo 1 ano)",
    "Excelentes habilidades interpessoais",
    "Ética profissional impecável",
    "Disponibilidade de horários flexíveis",
    "Comprometimento com qualidade",
    "Atualização constante em técnicas"
  ];

  const process = [
    {
      step: "1",
      title: "Candidatura",
      description: "Envie seu currículo através do formulário abaixo"
    },
    {
      step: "2", 
      title: "Análise",
      description: "Nossa equipe avaliará seu perfil e experiência"
    },
    {
      step: "3",
      title: "Entrevista",
      description: "Conversa inicial para conhecer você melhor"
    },
    {
      step: "4",
      title: "Teste Prático",
      description: "Demonstração de suas técnicas e habilidades"
    },
    {
      step: "5",
      title: "Integração",
      description: "Boas-vindas ao time e treinamento inicial"
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
              Trabalhe <span className="text-primary">Conosco</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Junte-se à nossa equipe de profissionais dedicados ao bem-estar e faça parte de uma missão transformadora
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Por que Trabalhar no Núcleo Massagem?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Oferecemos um ambiente de trabalho inspirador e oportunidades reais de crescimento profissional
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center shadow-soft hover:shadow-elegant transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 mx-auto">
                    <benefit.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-serif font-semibold">{benefit.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements and Process */}
      <section className="py-16 px-4 bg-secondary/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Requirements */}
            <Card className="shadow-elegant">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-serif font-bold">Requisitos</h2>
                </div>
                <p className="text-muted-foreground">
                  O que buscamos em nossos profissionais
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

            {/* Process */}
            <Card className="shadow-elegant">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <FileText className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-serif font-bold">Processo Seletivo</h2>
                </div>
                <p className="text-muted-foreground">
                  Como funciona nosso processo de contratação
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {process.map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                        {item.step}
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{item.title}</h3>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-elegant">
              <CardHeader>
                <h2 className="text-2xl font-serif font-bold text-center">Candidatar-se</h2>
                <p className="text-muted-foreground text-center">
                  Preencha o formulário abaixo para enviar sua candidatura
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome Completo *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Seu nome completo"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefone *</Label>
                      <Input
                        id="phone" 
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(11) 99999-9999"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="seu@email.com"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="experience">Experiência Profissional</Label>
                    <Textarea
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      placeholder="Descreva sua experiência em massoterapia, certificações, cursos e especializações..."
                      rows={4}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Conte-nos por que gostaria de trabalhar conosco e qual sua motivação para atuar na área de bem-estar..."
                      rows={4}
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full gradient-primary text-primary-foreground hover:opacity-90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Enviando Candidatura..." : "Enviar Candidatura"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 px-4 bg-secondary/50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-soft">
              <CardContent className="p-8">
                <h2 className="text-2xl font-serif font-bold text-center mb-6">
                  Informações Adicionais
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold mb-4">O que Oferecemos</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        Remuneração competitiva
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        Ambiente de trabalho acolhedor
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        Flexibilidade de horários
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        Oportunidades de crescimento
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        Treinamentos e especializações
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-4">Próximos Passos</h3>
                    <div className="space-y-3 text-sm text-muted-foreground">
                      <p>
                        Após enviar sua candidatura, nossa equipe de RH entrará em contato 
                        em até 5 dias úteis para agendar uma primeira conversa.
                      </p>
                      <p>
                        O processo seletivo completo pode levar até 15 dias, dependendo 
                        da disponibilidade de ambas as partes.
                      </p>
                      <p>
                        Mesmo que não tenhamos vagas abertas no momento, mantemos um 
                        banco de talentos para futuras oportunidades.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="text-center mt-8">
                  <p className="text-muted-foreground mb-4">
                    Tem dúvidas sobre o processo? Fale conosco!
                  </p>
                  <Button 
                    variant="outline" 
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    asChild
                  >
                    <a 
                      href="https://wa.me/11966588962" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Falar no WhatsApp
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkWithUs;