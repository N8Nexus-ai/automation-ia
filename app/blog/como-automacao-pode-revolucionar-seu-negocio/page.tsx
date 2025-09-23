import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ArticlePage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <div className="pt-24 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Back Button */}
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Voltar ao Blog
          </Link>

          {/* Article Header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="secondary">Automação</Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Como a Automação Pode Revolucionar Seu Negócio em 2025
            </h1>
            <div className="flex items-center gap-6 text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                20 de Janeiro de 2025
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                5 min de leitura
              </div>
            </div>
            <p className="text-xl text-muted-foreground">
              Descubra as principais tendências de automação e como implementá-las para acelerar o crescimento da sua empresa.
            </p>
          </div>

          {/* Article Image */}
          <div className="aspect-video rounded-lg mb-8 overflow-hidden relative">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop&crop=center" 
              alt="Automação de negócios"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-purple-600/20"></div>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <h2>Introdução</h2>
            <p>
              A automação não é mais uma tendência futura - é uma realidade presente que está transformando 
              empresas de todos os tamanhos. Em 2025, as empresas que não abraçarem a automação correm o 
              risco de ficar para trás em um mercado cada vez mais competitivo.
            </p>

            <h2>Por que a Automação é Essencial?</h2>
            <p>
              A automação oferece benefícios tangíveis que impactam diretamente o resultado final:
            </p>
            <ul>
              <li><strong>Redução de custos:</strong> Até 30% de economia em processos operacionais</li>
              <li><strong>Aumento de produtividade:</strong> Funcionários focam em atividades estratégicas</li>
              <li><strong>Melhoria na qualidade:</strong> Redução de erros humanos em 99%</li>
              <li><strong>Escalabilidade:</strong> Crescimento sem aumento proporcional de custos</li>
            </ul>

            <h2>Tendências de Automação para 2025</h2>
            
            <h3>1. IA Generativa em Processos</h3>
            <p>
              A integração de IA generativa está revolucionando como processamos documentos, 
              atendemos clientes e criamos conteúdo. Empresas estão usando ChatGPT, Claude e 
              outras ferramentas para automatizar tarefas criativas que antes eram exclusivamente humanas.
            </p>

            <h3>2. Automação End-to-End</h3>
            <p>
              Não se trata mais de automatizar tarefas isoladas, mas de criar fluxos completos 
              que conectam diferentes departamentos e sistemas. Plataformas como n8n e Zapier 
              permitem criar automações complexas sem programação.
            </p>

            <h3>3. Automação Inteligente com Dados</h3>
            <p>
              A automação agora é orientada por dados, usando analytics e machine learning para 
              tomar decisões em tempo real e otimizar processos continuamente.
            </p>

            <h2>Como Implementar Automação na Sua Empresa</h2>
            
            <h3>Passo 1: Mapeamento de Processos</h3>
            <p>
              Identifique processos repetitivos e que consomem muito tempo. Priorize aqueles 
              com maior impacto e menor complexidade para implementação.
            </p>

            <h3>Passo 2: Escolha da Tecnologia</h3>
            <p>
              Para pequenas empresas, ferramentas no-code como Zapier são ideais. Para empresas 
              maiores, considere n8n ou desenvolvimento customizado com AWS.
            </p>

            <h3>Passo 3: Implementação Gradual</h3>
            <p>
              Comece com um processo simples, meça os resultados e expanda gradualmente. 
              A automação é uma jornada, não um destino.
            </p>

            <h2>Casos de Sucesso Reais</h2>
            <p>
              Nossos clientes têm visto resultados impressionantes:
            </p>
            <ul>
              <li>Empresa de e-commerce: 80% de redução no tempo de processamento de pedidos</li>
              <li>Consultoria: 60% de aumento na produtividade da equipe comercial</li>
              <li>Startup: 90% de redução em tarefas administrativas</li>
            </ul>

            <h2>Conclusão</h2>
            <p>
              A automação não é mais opcional - é essencial para a sobrevivência e crescimento 
              das empresas. Em 2025, as empresas que investirem em automação terão vantagem 
              competitiva significativa.
            </p>
            <p>
              <strong>Pronto para começar sua jornada de automação?</strong> Entre em contato 
              conosco e descubra como podemos ajudar sua empresa a se transformar digitalmente.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-12 p-8 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg border border-primary/20">
            <h3 className="text-2xl font-bold mb-4">
              Quer automatizar seus processos?
            </h3>
            <p className="text-muted-foreground mb-6">
              Agende uma conversa gratuita e descubra como podemos revolucionar seu negócio com automação.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="mailto:contato@n8nexus.com.br"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                Entrar em Contato
              </a>
              <a 
                href="https://calendly.com/marco-florencio100/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors"
              >
                Agendar Call
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  )
}
