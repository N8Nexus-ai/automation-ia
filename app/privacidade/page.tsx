import { Header } from "@/components/header"
import { FooterLight } from "@/components/footer-light"

export default function PrivacidadePage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <div className="pt-24 pb-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-900">
            Política de Privacidade
          </h1>
          
          <div className="max-w-none">
            <p className="text-sm text-gray-600 text-center mb-12">
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </p>

            <section className="mb-8">
              <h2 className="text-lg font-semibold mb-4 text-gray-900">1. Informações que Coletamos</h2>
              <p className="text-sm text-gray-700 mb-4">
                Coletamos informações que você nos fornece diretamente, incluindo:
              </p>
              <ul className="list-disc pl-6 text-sm text-gray-700 mb-4">
                <li>Nome e informações de contato (email, telefone)</li>
                <li>Informações da empresa e cargo</li>
                <li>Dados de comunicação e correspondência</li>
                <li>Informações de pagamento (processadas por terceiros seguros)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-lg font-semibold mb-4 text-gray-900">2. Como Usamos suas Informações</h2>
              <p className="text-sm text-gray-700 mb-4">
                Utilizamos suas informações para:
              </p>
              <ul className="list-disc pl-6 text-sm text-gray-700 mb-4">
                <li>Fornecer e melhorar nossos serviços</li>
                <li>Comunicar sobre projetos e atualizações</li>
                <li>Processar pagamentos e faturas</li>
                <li>Enviar newsletters e materiais informativos</li>
                <li>Cumprir obrigações legais</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-lg font-semibold mb-4 text-gray-900">3. Compartilhamento de Informações</h2>
              <p className="text-sm text-gray-700 mb-4">
                Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, exceto:
              </p>
              <ul className="list-disc pl-6 text-sm text-gray-700 mb-4">
                <li>Com seu consentimento explícito</li>
                <li>Para cumprir obrigações legais</li>
                <li>Com prestadores de serviços que nos auxiliam (sob acordos de confidencialidade)</li>
                <li>Em caso de fusão, aquisição ou venda de ativos</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-lg font-semibold mb-4 text-gray-900">4. Segurança dos Dados</h2>
              <p className="text-sm text-gray-700 mb-4">
                Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações contra acesso não autorizado, alteração, divulgação ou destruição.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-lg font-semibold mb-4 text-gray-900">5. Cookies e Tecnologias Similares</h2>
              <p className="text-sm text-gray-700 mb-4">
                Utilizamos cookies e tecnologias similares para melhorar sua experiência, analisar o uso do site e personalizar conteúdo. Você pode controlar o uso de cookies através das configurações do seu navegador.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-lg font-semibold mb-4 text-gray-900">6. Seus Direitos</h2>
              <p className="text-sm text-gray-700 mb-4">
                Você tem o direito de:
              </p>
              <ul className="list-disc pl-6 text-sm text-gray-700 mb-4">
                <li>Acessar suas informações pessoais</li>
                <li>Corrigir informações incorretas</li>
                <li>Solicitar a exclusão de seus dados</li>
                <li>Retirar seu consentimento a qualquer momento</li>
                <li>Portabilidade de dados</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-lg font-semibold mb-4 text-gray-900">7. Retenção de Dados</h2>
              <p className="text-sm text-gray-700 mb-4">
                Mantemos suas informações pessoais apenas pelo tempo necessário para cumprir os propósitos descritos nesta política, a menos que um período de retenção mais longo seja exigido por lei.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-lg font-semibold mb-4 text-gray-900">8. Alterações nesta Política</h2>
              <p className="text-sm text-gray-700 mb-4">
                Podemos atualizar esta política de privacidade periodicamente. Notificaremos sobre mudanças significativas através do nosso site ou por email.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-lg font-semibold mb-4 text-gray-900">9. Contato</h2>
              <p className="text-sm text-gray-700 mb-4">
                Para questões sobre privacidade ou exercer seus direitos, entre em contato:
              </p>
              <p className="text-gray-700">
                Email: contato@n8nexus.com.br
              </p>
            </section>
          </div>
        </div>
      </div>
      
      <FooterLight />
    </main>
  )
}
