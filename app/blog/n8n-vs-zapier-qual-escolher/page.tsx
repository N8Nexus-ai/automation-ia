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
              <Badge variant="secondary">Tecnologia</Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              n8n vs Zapier: Qual Escolher para Sua Empresa?
            </h1>
            <div className="flex items-center gap-6 text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                18 de Janeiro de 2025
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                7 min de leitura
              </div>
            </div>
            <p className="text-xl text-muted-foreground">
              Comparação detalhada entre as duas principais plataformas de automação e quando usar cada uma.
            </p>
          </div>

          {/* Article Image */}
          <div className="aspect-video rounded-lg mb-8 overflow-hidden relative">
            <img 
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&h=600&fit=crop&crop=center" 
              alt="Comparação n8n vs Zapier"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-green-500/20 to-teal-600/20"></div>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <h2>Introdução</h2>
            <p>
              Na era da automação, escolher a plataforma certa pode fazer toda a diferença no sucesso 
              dos seus projetos. n8n e Zapier são duas das principais opções, mas cada uma tem suas 
              particularidades e casos de uso ideais.
            </p>

            <h2>O que é n8n?</h2>
            <p>
              n8n é uma ferramenta de automação open-source que permite criar workflows complexos 
              através de uma interface visual. Sua principal vantagem é a flexibilidade e o controle 
              total sobre suas automações.
            </p>

            <h3>Vantagens do n8n:</h3>
            <ul>
              <li><strong>Open Source:</strong> Código aberto e gratuito</li>
              <li><strong>Self-hosted:</strong> Controle total sobre seus dados</li>
              <li><strong>Flexibilidade:</strong> Customização ilimitada</li>
              <li><strong>Integrações personalizadas:</strong> Crie seus próprios nós</li>
              <li><strong>Custo:</strong> Gratuito para uso próprio</li>
            </ul>

            <h2>O que é Zapier?</h2>
            <p>
              Zapier é uma plataforma SaaS que conecta diferentes aplicações através de "Zaps" 
              (automações). É conhecida por sua simplicidade e facilidade de uso.
            </p>

            <h3>Vantagens do Zapier:</h3>
            <ul>
              <li><strong>Facilidade de uso:</strong> Interface intuitiva</li>
              <li><strong>Muitas integrações:</strong> 5000+ aplicações conectadas</li>
              <li><strong>Confiabilidade:</strong> 99.9% de uptime</li>
              <li><strong>Suporte:</strong> Documentação excelente</li>
              <li><strong>Escalabilidade:</strong> Cresce com seu negócio</li>
            </ul>

            <h2>Comparação Detalhada</h2>
            
            <h3>Preço</h3>
            <p>
              <strong>n8n:</strong> Gratuito para self-hosted, $20/mês para cloud
              <br />
              <strong>Zapier:</strong> $20/mês para plano básico, $50/mês para profissional
            </p>

            <h3>Facilidade de Uso</h3>
            <p>
              <strong>n8n:</strong> Curva de aprendizado mais íngreme, mas mais poderoso
              <br />
              <strong>Zapier:</strong> Extremamente fácil de usar, ideal para iniciantes
            </p>

            <h3>Integrações</h3>
            <p>
              <strong>n8n:</strong> 400+ integrações nativas, mas permite criar customizadas
              <br />
              <strong>Zapier:</strong> 5000+ integrações prontas, sem customização
            </p>

            <h2>Quando Usar n8n?</h2>
            <ul>
              <li>Você precisa de controle total sobre seus dados</li>
              <li>Quer economizar custos a longo prazo</li>
              <li>Precisa de integrações personalizadas</li>
              <li>Tem equipe técnica para manutenção</li>
              <li>Quer flexibilidade máxima</li>
            </ul>

            <h2>Quando Usar Zapier?</h2>
            <ul>
              <li>Você é iniciante em automação</li>
              <li>Quer algo que "funcione de uma vez"</li>
              <li>Precisa de muitas integrações prontas</li>
              <li>Não tem equipe técnica</li>
              <li>Quer confiabilidade máxima</li>
            </ul>

            <h2>Conclusão</h2>
            <p>
              A escolha entre n8n e Zapier depende das suas necessidades específicas. 
              Para empresas que valorizam controle e flexibilidade, n8n é a melhor opção. 
              Para quem prioriza simplicidade e confiabilidade, Zapier é ideal.
            </p>
            <p>
              <strong>Nossa recomendação:</strong> Comece com Zapier para aprender os conceitos, 
              depois migre para n8n quando precisar de mais poder e controle.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-12 p-8 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg border border-primary/20">
            <h3 className="text-2xl font-bold mb-4">
              Precisa de ajuda para escolher?
            </h3>
            <p className="text-muted-foreground mb-6">
              Nossa equipe pode ajudar você a escolher a melhor plataforma para suas necessidades.
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
