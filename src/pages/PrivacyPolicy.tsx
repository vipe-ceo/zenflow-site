import { Card, CardContent, CardHeader } from "@/components/ui/card";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <Card className="shadow-elegant">
          <CardHeader>
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-center">
              Política de Privacidade
            </h1>
            <p className="text-muted-foreground text-center">
              Última atualização: Janeiro de 2024
            </p>
          </CardHeader>
          <CardContent className="prose prose-lg max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-serif font-semibold mb-4">1. Informações Gerais</h2>
              <p className="text-muted-foreground leading-relaxed">
                Esta Política de Privacidade descreve como o Núcleo Massagem coleta, usa e protege 
                as informações pessoais dos nossos clientes e visitantes do site. Estamos comprometidos 
                em proteger sua privacidade e garantir a segurança dos seus dados pessoais.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold mb-4">2. Informações que Coletamos</h2>
              <div className="space-y-4 text-muted-foreground">
                <h3 className="text-lg font-semibold text-foreground">2.1 Informações Fornecidas Voluntariamente</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Nome completo e informações de contato (telefone, e-mail)</li>
                  <li>Informações sobre preferências de massagem e necessidades específicas</li>
                  <li>Histórico médico relevante para os tratamentos</li>
                  <li>Informações de agendamento e histórico de sessões</li>
                </ul>

                <h3 className="text-lg font-semibold text-foreground">2.2 Informações Coletadas Automaticamente</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Dados de navegação no site (cookies, endereço IP)</li>
                  <li>Informações sobre o dispositivo utilizado</li>
                  <li>Páginas visitadas e tempo de permanência</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold mb-4">3. Como Usamos suas Informações</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Fornecer e personalizar nossos serviços de massoterapia</li>
                <li>Agendar e confirmar suas sessões</li>
                <li>Comunicar sobre nossos serviços e promoções</li>
                <li>Melhorar a qualidade dos nossos atendimentos</li>
                <li>Cumprir obrigações legais e regulamentares</li>
                <li>Processar pagamentos e emitir recibos</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold mb-4">4. Compartilhamento de Informações</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, 
                exceto nas seguintes situações:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Com profissionais de saúde, quando necessário para o tratamento</li>
                <li>Para cumprir obrigações legais ou ordens judiciais</li>
                <li>Com prestadores de serviços que nos auxiliam nas operações do negócio</li>
                <li>Em caso de emergência médica que requeira assistência imediata</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold mb-4">5. Segurança dos Dados</h2>
              <p className="text-muted-foreground leading-relaxed">
                Implementamos medidas de segurança técnicas e organizacionais adequadas para proteger 
                suas informações pessoais contra acesso não autorizado, alteração, divulgação ou 
                destruição. Isso inclui criptografia, controles de acesso e treinamento regular 
                da nossa equipe sobre práticas de privacidade.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold mb-4">6. Seus Direitos</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem os seguintes direitos:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Confirmar a existência de tratamento dos seus dados</li>
                <li>Acessar seus dados pessoais</li>
                <li>Corrigir dados incompletos, inexatos ou desatualizados</li>
                <li>Solicitar a exclusão dos seus dados</li>
                <li>Revogar o consentimento</li>
                <li>Obter informações sobre o compartilhamento dos seus dados</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold mb-4">7. Retenção de Dados</h2>
              <p className="text-muted-foreground leading-relaxed">
                Mantemos suas informações pessoais apenas pelo tempo necessário para cumprir os 
                propósitos descritos nesta política, atender a requisitos legais ou resolver 
                disputas. Os dados médicos podem ser mantidos por períodos mais longos conforme 
                exigido pela legislação de saúde.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold mb-4">8. Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                Nosso site utiliza cookies para melhorar sua experiência de navegação. Você pode 
                configurar seu navegador para recusar cookies, mas isso pode afetar algumas 
                funcionalidades do site. Os cookies nos ajudam a entender como você utiliza 
                nosso site e personalizar o conteúdo.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold mb-4">9. Alterações na Política</h2>
              <p className="text-muted-foreground leading-relaxed">
                Esta Política de Privacidade pode ser atualizada periodicamente para refletir 
                mudanças em nossas práticas ou na legislação aplicável. Notificaremos sobre 
                alterações significativas através do nosso site ou por e-mail.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold mb-4">10. Contato</h2>
              <p className="text-muted-foreground leading-relaxed">
                Se você tiver dúvidas sobre esta Política de Privacidade ou quiser exercer 
                seus direitos de proteção de dados, entre em contato conosco:
              </p>
              <div className="mt-4 p-4 bg-secondary/30 rounded-lg">
                <p className="text-sm">
                  <strong>Núcleo Massagem</strong><br />
                  E-mail: contato@nucleomassagem.com.br<br />
                  Telefone: (11) 96658-8962<br />
                  Endereço: Calç. dos Cravos, 240 - Alphaville Comercial, Barueri - SP
                </p>
              </div>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PrivacyPolicy;