import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrivacidadePage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <div className="pt-24 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
            Política de Privacidade
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground text-center mb-12">
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Informações que Coletamos</h2>
              <p className="text-muted-foreground mb-4">
                Coletamos informações que você nos fornece diretamente, incluindo:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4">
                <li>Nome e informações de contato (email, telefone)</li>
                <li>Informações da empresa e cargo</li>
                <li>Dados de comunicação e correspondência</li>
                <li>Informações de pagamento (processadas por terceiros seguros)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Como Usamos suas Informações</h2>
              <p className="text-muted-foreground mb-4">
                Utilizamos suas informações para:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4">
                <li>Fornecer e melhorar nossos serviços</li>
                <li>Comunicar sobre projetos e atualizações</li>
                <li>Processar pagamentos e faturas</li>
                <li>Enviar newsletters e materiais informativos</li>
                <li>Cumprir obrigações legais</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. Compartilhamento de Informações</h2>
              <p className="text-muted-foreground mb-4">
                Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, exceto:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4">
                <li>Com seu consentimento explícito</li>
                <li>Para cumprir obrigações legais</li>
                <li>Com prestadores de serviços que nos auxiliam (sob acordos de confidencialidade)</li>
                <li>Em caso de fusão, aquisição ou venda de ativos</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Segurança dos Dados</h2>
              <p className="text-muted-foreground mb-4">
                Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações contra acesso não autorizado, alteração, divulgação ou destruição.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Cookies e Tecnologias Similares</h2>
              <p className="text-muted-foreground mb-4">
                Utilizamos cookies e tecnologias similares para melhorar sua experiência, analisar o uso do site e personalizar conteúdo. Você pode controlar o uso de cookies através das configurações do seu navegador.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Seus Direitos</h2>
              <p className="text-muted-foreground mb-4">
                Você tem o direito de:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4">
                <li>Acessar suas informações pessoais</li>
                <li>Corrigir informações incorretas</li>
                <li>Solicitar a exclusão de seus dados</li>
                <li>Retirar seu consentimento a qualquer momento</li>
                <li>Portabilidade de dados</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Retenção de Dados</h2>
              <p className="text-muted-foreground mb-4">
                Mantemos suas informações pessoais apenas pelo tempo necessário para cumprir os propósitos descritos nesta política, a menos que um período de retenção mais longo seja exigido por lei.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">8. Alterações nesta Política</h2>
              <p className="text-muted-foreground mb-4">
                Podemos atualizar esta política de privacidade periodicamente. Notificaremos sobre mudanças significativas através do nosso site ou por email.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">9. Contato</h2>
              <p className="text-muted-foreground mb-4">
                Para questões sobre privacidade ou exercer seus direitos, entre em contato:
              </p>
              <p className="text-muted-foreground">
                Email: contato@n8nexus.com.br
              </p>
            </section>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  )
}
