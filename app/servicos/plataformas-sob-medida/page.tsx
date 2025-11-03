"use client"

import { Header } from "@/components/header"
import { FooterLight } from "@/components/footer-light"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Layers, Database, Code, LayoutDashboard, ArrowLeft, Zap } from "lucide-react"
import { useContact } from "@/contexts/contact-context"
import Link from "next/link"

export default function PlataformasSobMedidaPage() {
  const { openContactModal } = useContact()

  const deliverables = [
    {
      icon: Layers,
      title: "Design de Arquitetura",
      description: "Planejamos a arquitetura completa da solução para atender suas necessidades específicas.",
      features: ["Análise de requisitos", "Modelagem de dados", "Definição de integrações", "Plano de implementação"],
      color: "primary"
    },
    {
      icon: Code,
      title: "Desenvolvimento de API",
      description: "Back-end robusto com APIs personalizadas para integrações e processamento de dados.",
      features: ["APIs personalizadas", "Integração com CRMs/ERPs", "Processamento de dados", "Segurança e autenticação"],
      color: "accent"
    },
    {
      icon: Database,
      title: "Banco de Dados",
      description: "Centralização de dados reduz custos de API e melhora performance significativamente.",
      features: ["Banco de dados otimizado", "Redução de custos de API", "Backup automático", "Consultas otimizadas"],
      color: "primary"
    },
    {
      icon: LayoutDashboard,
      title: "Painel de Controle",
      description: "Interface visual que permite equipes não-técnicas gerenciarem processos com um clique.",
      features: ["Interface intuitiva", "Disparos manuais", "Relatórios visuais", "Gerenciamento completo"],
      color: "accent"
    }
  ]

  const benefits = [
    { title: "Equipes Não-Técnicas", text: "Permite que equipes comerciais e operacionais gerenciem processos complexos" },
    { title: "Redução de Custos", text: "Centralização de dados reduz chamadas de API e custos operacionais" },
    { title: "Solução Completa", text: "Uma única plataforma integrada ao invés de múltiplas ferramentas" },
    { title: "Escalabilidade", text: "Arquitetura preparada para crescer com seu negócio" }
  ]

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <article className="pt-24 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Back Button */}
          <Link 
            href="/servicos"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors"
          >
            <ArrowLeft size={18} />
            <span className="font-medium">Voltar aos Serviços</span>
          </Link>

          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Badge className="bg-gray-900 text-white px-4 py-1.5">
                Plataformas
              </Badge>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight text-gray-900">
              Plataformas de Automação Sob Medida
            </h1>
            
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Para empresas que precisam de uma ferramenta gerenciável ou não possuem um time técnico, 
              oferecemos a opção de construir a plataforma completa ponta-a-ponta: do Back-end (APIs), 
              Banco de dados e o orquestrador (n8n), até um painel de controle visual.
            </p>
            
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mb-8">
              <p className="text-sm text-gray-700">
                <strong>Nota:</strong> Esta é uma opção para quem precisa de mais. Você também pode escolher 
                apenas automação simples. Na conversa inicial, definimos juntos o escopo ideal para seu negócio.
              </p>
            </div>
          </header>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 pb-12 border-b border-gray-200">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">100%</div>
              <div className="text-sm text-gray-600">Ponta-a-Ponta</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">0</div>
              <div className="text-sm text-gray-600">Código para Você</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">1</div>
              <div className="text-sm text-gray-600">Clique</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">∞</div>
              <div className="text-sm text-gray-600">Escalável</div>
            </div>
          </div>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">O que são Plataformas Sob Medida?</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Esta é uma <strong>opção adicional</strong> para empresas que precisam de mais que uma automação simples. 
              Diferente de simples automações, construímos <strong>plataformas completas</strong> que unificam 
              API, Banco de Dados e Painel de Controle visual em uma única solução. Isso permite que equipes não-técnicas 
              gerenciem processos complexos através de uma interface visual intuitiva.
            </p>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              Se você precisa apenas de automação para conectar sistemas, também oferecemos isso. 
              O importante é resolver seu desafio de negócio com a solução adequada.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Entregáveis da Solução</h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Cada plataforma inclui todos os componentes necessários para uma solução completa:
            </p>
          </div>

          {/* Deliverables */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {deliverables.map((deliverable, index) => {
              const iconColor = deliverable.color === "primary" ? "text-primary" : "text-accent"
              const bgColor = deliverable.color === "primary" ? "bg-primary/5" : "bg-accent/5"
              const iconBg = deliverable.color === "primary" ? "bg-primary/10" : "bg-accent/10"
              const checkColor = deliverable.color === "primary" ? "text-primary" : "text-accent"
              return (
                <Card key={index} className={`border-2 border-transparent hover:border-primary/30 hover:shadow-xl transition-all duration-300 overflow-hidden ${bgColor}`}>
                  <CardHeader>
                    <div className={`w-14 h-14 ${iconBg} rounded-xl flex items-center justify-center mb-4`}>
                      <deliverable.icon className={`w-7 h-7 ${iconColor}`} />
                    </div>
                    <CardTitle className="text-xl text-gray-900 mb-2 font-bold">{deliverable.title}</CardTitle>
                    <CardDescription className="text-gray-700">{deliverable.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {deliverable.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle className={`w-5 h-5 mt-0.5 flex-shrink-0 ${checkColor}`} />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Benefits */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Por Que Escolher Plataformas Sob Medida?</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Benefícios reais para empresas que precisam de soluções completas:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => {
                const isPrimary = index % 2 === 0
                const bgColor = isPrimary ? "bg-primary/5" : "bg-accent/5"
                return (
                  <div key={index} className={`p-6 ${bgColor} rounded-lg border-2 border-transparent hover:border-primary/30 transition-all`}>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-700 text-sm">{benefit.text}</p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 pt-12 border-t border-gray-200">
            <div className="bg-gradient-to-br from-primary/5 via-accent/5 to-primary/10 rounded-2xl p-8 text-center border-2 border-primary/20">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Pronto para Sua Plataforma Completa?
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed max-w-2xl mx-auto">
                Agende uma conversa gratuita e descubra como podemos arquitetar e construir 
                a plataforma completa que sua equipe precisa.
              </p>
              <Button 
                onClick={openContactModal} 
                size="lg" 
                className="px-8 py-6 text-lg bg-gradient-to-r from-primary to-indigo-400 hover:from-primary/90 hover:to-indigo-400/90 text-white shadow-lg hover:shadow-xl transition-all"
              >
                Agendar Reunião Gratuita
              </Button>
            </div>
          </div>
        </div>
      </article>
      
      <FooterLight />
    </main>
  )
}

