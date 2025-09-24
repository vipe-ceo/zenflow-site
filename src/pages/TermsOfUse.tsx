import { Card, CardContent, CardHeader } from "@/components/ui/card";

const TermsOfUse = () => {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <Card className="shadow-elegant">
          <CardHeader>
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-center">
              Termos de Uso
            </h1>
            <p className="text-muted-foreground text-center">
              Última atualização: Janeiro de 2024
            </p>
          </CardHeader>
          <CardContent className="prose prose-lg max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-serif font-semibold mb-4">1. Aceitação dos Termos</h2>
              <p className="text-muted-foreground leading-relaxed">
                Ao utilizar os serviços do Núcleo Massagem ou acessar nosso site, você concorda 
                em cumprir e ficar vinculado a estes Termos de Uso. Se você não concordar com 
                algum destes termos, não deve utilizar nossos serviços.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold mb-4">2. Descrição dos Serviços</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                O Núcleo Massagem oferece serviços profissionais de massoterapia, incluindo:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Massagem relaxante e terapêutica</li>
                <li>Massagem desportiva</li>
                <li>Massagem tântrica</li>
                <li>Outros tipos de massagem especializados</li>
                <li>Locação de espaço para profissionais da área</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold mb-4">3. Agendamentos e Cancelamentos</h2>
              <div className="space-y-4 text-muted-foreground">
                <h3 className="text-lg font-semibold text-foreground">3.1 Agendamentos</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Agendamentos devem ser feitos com antecedência mínima de 2 horas</li>
                  <li>A confirmação do horário será feita por WhatsApp ou telefone</li>
                  <li>É necessário fornecer informações precisas sobre saúde e preferências</li>
                  <li>Chegue 10 minutos antes do horário agendado para a primeira sessão</li>
                </ul>

                <h3 className="text-lg font-semibold text-foreground">3.2 Cancelamentos</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Cancelamentos devem ser feitos com no mínimo 2 horas de antecedência</li>
                  <li>Cancelamentos de última hora podem resultar em cobrança parcial</li>
                  <li>No-shows (faltas sem aviso) serão cobrados integralmente</li>
                  <li>Em caso de emergência, entre em contato imediatamente</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold mb-4">4. Pagamentos e Preços</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Os preços estão sujeitos a alterações sem aviso prévio</li>
                <li>O pagamento pode ser feito em dinheiro, cartão ou PIX</li>
                <li>Pacotes de sessões têm validade de 6 meses</li>
                <li>Não há reembolso para sessões não utilizadas</li>
                <li>Promoções e descontos têm validade limitada</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold mb-4">5. Condições de Saúde</h2>
              <div className="space-y-4 text-muted-foreground">
                <h3 className="text-lg font-semibold text-foreground">5.1 Contraindicações</h3>
                <p>Informe-nos imediatamente se você tiver alguma das seguintes condições:</p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                  <li>Lesões recentes ou cirurgias</li>
                  <li>Problemas cardíacos ou pressão alta</li>
                  <li>Gravidez</li>
                  <li>Problemas de pele ou alergias</li>
                  <li>Uso de medicamentos que possam afetar a circulação</li>
                </ul>

                <h3 className="text-lg font-semibold text-foreground">5.2 Responsabilidades</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>É sua responsabilidade informar sobre condições de saúde relevantes</li>
                  <li>Não nos responsabilizamos por complicações decorrentes de informações omitidas</li>
                  <li>Recomendamos consulta médica prévia em casos de dúvida</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold mb-4">6. Conduta e Comportamento</h2>
              <div className="space-y-4 text-muted-foreground">
                <h3 className="text-lg font-semibold text-foreground">6.1 Comportamento Apropriado</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Mantenha sempre respeito mútuo com profissionais e outros clientes</li>
                  <li>Siga as orientações dos massoterapeutas</li>
                  <li>Comunique desconfortos imediatamente</li>
                  <li>Desligue dispositivos eletrônicos durante as sessões</li>
                </ul>

                <h3 className="text-lg font-semibold text-foreground">6.2 Comportamento Inadequado</h3>
                <p>Não toleramos:</p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                  <li>Comportamento inadequado, assédio ou desrespeito</li>
                  <li>Uso de substâncias ilícitas no estabelecimento</li>
                  <li>Solicitações inapropriadas aos profissionais</li>
                  <li>Qualquer forma de discriminação ou preconceito</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold mb-4">7. Privacidade e Confidencialidade</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Todas as informações pessoais e de saúde são tratadas com confidencialidade</li>
                <li>Seguimos rigorosamente nossa Política de Privacidade</li>
                <li>Não compartilhamos informações sem seu consentimento expresso</li>
                <li>Respeitamos sua privacidade durante todos os tratamentos</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold mb-4">8. Limitação de Responsabilidade</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Nossos serviços são oferecidos para fins de relaxamento e bem-estar. 
                Não constituem tratamento médico e não substituem cuidados médicos profissionais.
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Não nos responsabilizamos por resultados específicos ou cura de condições médicas</li>
                <li>Nossa responsabilidade é limitada ao valor pago pelo serviço</li>
                <li>Não cobrimos despesas médicas decorrentes de condições preexistentes</li>
                <li>Recomendamos sempre consulta médica para questões de saúde</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold mb-4">9. Propriedade Intelectual</h2>
              <p className="text-muted-foreground leading-relaxed">
                Todo o conteúdo do site, incluindo textos, imagens, logos e design, é propriedade 
                do Núcleo Massagem e está protegido por leis de direitos autorais. O uso não 
                autorizado de qualquer material pode resultar em ação legal.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold mb-4">10. Alterações nos Termos</h2>
              <p className="text-muted-foreground leading-relaxed">
                Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento. 
                As alterações entrarão em vigor imediatamente após a publicação no site. 
                É sua responsabilidade revisar periodicamente estes termos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold mb-4">11. Lei Aplicável</h2>
              <p className="text-muted-foreground leading-relaxed">
                Estes Termos de Uso são regidos pelas leis brasileiras. Qualquer disputa será 
                resolvida no foro da comarca de Barueri, Estado de São Paulo.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold mb-4">12. Contato</h2>
              <p className="text-muted-foreground leading-relaxed">
                Para dúvidas sobre estes Termos de Uso, entre em contato conosco:
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

export default TermsOfUse;