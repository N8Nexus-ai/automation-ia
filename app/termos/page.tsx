import { Header } from "@/components/header"
import { FooterLight } from "@/components/footer-light"

export default function TermosPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <div className="pt-24 pb-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-900">
            Termos de Uso
          </h1>
          
          <div className="max-w-none">
            <p className="text-sm text-gray-600 text-center mb-12">
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </p>

            <section className="mb-8">
              <h2 className="text-lg font-semibold mb-4 text-gray-900">1. Aceitação dos Termos</h2>
              <p className="text-sm text-gray-700 mb-4">
                Ao acessar e utilizar os serviços da Nexus.ai, você concorda em cumprir e estar vinculado aos seguintes termos e condições de uso.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-lg font-semibold mb-4 text-gray-900">2. Descrição dos Serviços</h2>
              <p className="text-sm text-gray-700 mb-4">
                A Nexus.ai oferece serviços de automação de processos, desenvolvimento de agentes de IA, integração de sistemas e consultoria em tecnologia. Nossos serviços incluem:
              </p>
              <ul className="list-disc pl-6 text-sm text-gray-700 mb-4">
                <li>Desenvolvimento de chatbots e assistentes virtuais</li>
                <li>Automação de processos de negócio</li>
                <li>Integração com sistemas AWS e n8n</li>
                <li>Consultoria em transformação digital</li>
                <li>Suporte técnico e manutenção</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-lg font-semibold mb-4 text-gray-900">3. Uso dos Serviços</h2>
              <p className="text-sm text-gray-700 mb-4">
                Você concorda em usar nossos serviços apenas para fins legais e de acordo com estes termos. É proibido:
              </p>
              <ul className="list-disc pl-6 text-sm text-gray-700 mb-4">
                <li>Usar os serviços para atividades ilegais ou não autorizadas</li>
                <li>Interferir no funcionamento normal dos serviços</li>
                <li>Tentar acessar contas ou sistemas de outros usuários</li>
                <li>Reproduzir, distribuir ou modificar nosso conteúdo sem autorização</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-lg font-semibold mb-4 text-gray-900">4. Propriedade Intelectual</h2>
              <p className="text-sm text-gray-700 mb-4">
                Todo o conteúdo, incluindo textos, gráficos, logotipos, ícones, imagens e software, é propriedade da Nexus.ai e está protegido por leis de direitos autorais e outras leis de propriedade intelectual.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-lg font-semibold mb-4 text-gray-900">5. Limitação de Responsabilidade</h2>
              <p className="text-sm text-gray-700 mb-4">
                A Nexus.ai não será responsável por danos diretos, indiretos, incidentais, especiais ou consequenciais resultantes do uso ou incapacidade de usar nossos serviços.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-lg font-semibold mb-4 text-gray-900">6. Modificações</h2>
              <p className="text-sm text-gray-700 mb-4">
                Reservamo-nos o direito de modificar estes termos a qualquer momento. As alterações entrarão em vigor imediatamente após a publicação.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-lg font-semibold mb-4 text-gray-900">7. Contato</h2>
              <p className="text-sm text-gray-700 mb-4">
                Para questões sobre estes termos, entre em contato conosco:
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
