import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
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
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
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
        title: "Mensagem enviada!",
        description: "Recebemos sua mensagem e entraremos em contato em breve.",
      });
      setFormData({ name: "", email: "", phone: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Endereço",
      info: "Calç. dos Cravos, 240 - Alphaville Comercial, Barueri - SP, 06453-053",
      action: {
        text: "Como chegar",
        link: "https://share.google/Lut2j7GqsWMnL2tYC"
      }
    },
    {
      icon: Phone,
      title: "Telefone",
      info: "(11) 96658-8962",
      action: {
        text: "Ligar agora",
        link: "tel:+5511966588962"
      }
    },
    {
      icon: Mail,
      title: "E-mail",
      info: "contato@nucleomassagem.com.br",
      action: {
        text: "Enviar e-mail",
        link: "mailto:contato@nucleomassagem.com.br"
      }
    },
    {
      icon: Clock,
      title: "Horário de Funcionamento",
      info: "Segunda a Sábado: 9h às 22h\nDomingo: 10h às 20h",
      action: null
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
              Entre em <span className="text-primary">Contato</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Estamos aqui para esclarecer suas dúvidas e ajudar você a encontrar o tratamento ideal para seu bem-estar
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center shadow-soft hover:shadow-elegant transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 mx-auto">
                    <info.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-serif font-semibold">{info.title}</h3>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm whitespace-pre-line">{info.info}</p>
                  {info.action && (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      asChild
                    >
                      <a 
                        href={info.action.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {info.action.text}
                      </a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and WhatsApp */}
      <section className="py-16 px-4 bg-secondary/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="shadow-elegant">
              <CardHeader>
                <h2 className="text-2xl font-serif font-bold">Envie sua Mensagem</h2>
                <p className="text-muted-foreground">
                  Preencha o formulário abaixo e entraremos em contato em breve
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome *</Label>
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
                      <Label htmlFor="phone">Telefone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(11) 99999-9999"
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
                    <Label htmlFor="message">Mensagem *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Como podemos ajudar você? Descreva suas necessidades, dúvidas ou prefira agendar uma massagem específica..."
                      rows={5}
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full gradient-primary text-primary-foreground hover:opacity-90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* WhatsApp Section */}
            <div className="space-y-8">
              <Card className="shadow-elegant">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center">
                      <MessageCircle className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-serif font-bold">Agendamento Rápido</h2>
                      <p className="text-muted-foreground">WhatsApp - Resposta imediata</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground">
                    Para agendamentos rápidos e atendimento personalizado, fale conosco 
                    diretamente pelo WhatsApp. Nosso time está pronto para ajudar você 
                    a escolher o melhor tratamento.
                  </p>
                  
                  <div className="space-y-3">
                    <h3 className="font-semibold">O que você pode fazer pelo WhatsApp:</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        Agendar sua massagem preferida
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        Tirar dúvidas sobre nossos serviços
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        Verificar horários disponíveis
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        Solicitar informações sobre preços
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        Cancelar ou reagendar sessões
                      </li>
                    </ul>
                  </div>
                  
                  <Button 
                    size="lg" 
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                    asChild
                  >
                    <a 
                      href="https://wa.me/11966588962" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Falar no WhatsApp
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Additional Info */}
              <Card className="shadow-soft">
                <CardContent className="p-6">
                  <h3 className="font-serif font-semibold mb-4">Informações Importantes</h3>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <p>
                      <strong className="text-foreground">Agendamento:</strong> Recomendamos 
                      agendar com antecedência para garantir o horário desejado.
                    </p>
                    <p>
                      <strong className="text-foreground">Cancelamento:</strong> Cancelamentos 
                      devem ser feitos com pelo menos 2 horas de antecedência.
                    </p>
                    <p>
                      <strong className="text-foreground">Primeira visita:</strong> Chegue 
                      10 minutos antes para preenchimento da ficha de anamnese.
                    </p>
                    <p>
                      <strong className="text-foreground">Estacionamento:</strong> Disponível 
                      no local, gratuito para clientes.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Nossa Localização
            </h2>
            <p className="text-muted-foreground text-lg">
              Localizado no coração de Alphaville, com fácil acesso e estacionamento
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden shadow-elegant">
              <div className="aspect-video bg-muted flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <MapPin className="h-16 w-16 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Núcleo Massagem</h3>
                  <p className="mb-4">Calç. dos Cravos, 240 - Alphaville Comercial</p>
                  <Button 
                    variant="outline" 
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    asChild
                  >
                    <a 
                      href="https://share.google/Lut2j7GqsWMnL2tYC"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Abrir no Google Maps
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;