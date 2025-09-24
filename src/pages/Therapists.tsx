import TherapistCard from "@/components/TherapistCard";
import { Button } from "@/components/ui/button";
import { Users, Award, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import therapist1 from "@/assets/therapist-1.jpg";
import therapist2 from "@/assets/therapist-2.jpg";

const Therapists = () => {
  const therapists = [
    {
      name: "Ana Carolina Silva",
      photo: therapist1,
      specialty: "Especialista em Massagem Relaxante e Tântrica",
      bio: "Formada em massoterapia há 8 anos, Ana possui especialização em técnicas orientais e terapias holísticas. Dedica-se ao bem-estar integral dos clientes.",
      techniques: ["Relaxante", "Tântrica", "Hot Stone", "Aromática"]
    },
    {
      name: "Ricardo Mendes",
      photo: therapist2, 
      specialty: "Massagem Desportiva e Terapêutica",
      bio: "Fisioterapeuta e massagista esportivo, Ricardo atende atletas profissionais e amadores, focando na recuperação muscular e prevenção de lesões.",
      techniques: ["Desportiva", "Deep Tissue", "Liberação Miofascial", "Nuru"]
    },
    {
      name: "Mariana Santos",
      photo: therapist1,
      specialty: "Terapias Alternativas e Vivência",
      bio: "Especialista em massagens terapêuticas e práticas de mindfulness, Mariana oferece experiências transformadoras de autoconhecimento.",
      techniques: ["Vivência", "Mútua", "Mix", "Ayurvédica"]
    }
  ];

  const qualifications = [
    {
      icon: Award,
      title: "Certificação Profissional",
      description: "Todos nossos terapeutas possuem formação reconhecida e certificações atualizadas"
    },
    {
      icon: Heart,
      title: "Cuidado Personalizado", 
      description: "Cada sessão é adaptada às necessidades específicas de cada cliente"
    },
    {
      icon: Users,
      title: "Experiência Comprovada",
      description: "Anos de prática e centenas de clientes satisfeitos"
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
              Nossos <span className="text-primary">Profissionais</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Conheça nossa equipe de massoterapeutas certificados, dedicados ao seu bem-estar
            </p>
          </div>
        </div>
      </section>

      {/* Qualifications Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Por que Escolher Nossos Profissionais?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Qualidade, experiência e dedicação em cada atendimento
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {qualifications.map((qual, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 mx-auto">
                  <qual.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-3">{qual.title}</h3>
                <p className="text-muted-foreground">{qual.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Therapists Grid */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Nossa Equipe
            </h2>
            <p className="text-muted-foreground text-lg">
              Profissionais especializados em diferentes técnicas terapêuticas
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {therapists.map((therapist, index) => (
              <TherapistCard
                key={index}
                name={therapist.name}
                photo={therapist.photo}
                specialty={therapist.specialty}
                bio={therapist.bio}
                techniques={therapist.techniques}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Professional Standards */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                Nossos Padrões Profissionais
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-serif font-semibold mb-4">Formação Continuada</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Todos os nossos massoterapeutas passam por formação contínua, mantendo-se 
                  atualizados com as mais modernas técnicas e protocolos de segurança. 
                  Participamos regularmente de cursos, workshops e congressos da área.
                </p>
                
                <h3 className="text-2xl font-serif font-semibold mb-4">Ética Profissional</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Mantemos os mais altos padrões éticos em todos os atendimentos. 
                  Respeitamos a privacidade, individualidade e limites de cada cliente, 
                  garantindo um ambiente seguro e acolhedor para todos.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-serif font-semibold mb-4">Certificações</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Certificação em Massoterapia Clínica
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Especialização em Técnicas Orientais
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Curso de Primeiros Socorros
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Treinamento em Atendimento Humanizado
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Certificação em Higiene e Biossegurança
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-secondary/50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Agende com Nossos Profissionais
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Escolha o profissional ideal para suas necessidades e agende sua sessão
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
                Agendar pelo WhatsApp
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              asChild
            >
              <Link to="/trabalhe-conosco">
                Trabalhe Conosco
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Therapists;