"use client"

import { Header } from "@/components/header"
import { FooterLight } from "@/components/footer-light"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Workflow, Cloud, Brain, Database, ArrowLeft, Zap } from "lucide-react"
import { useContact } from "@/contexts/contact-context"
import Link from "next/link"

export default function OrquestracaoIntegracaoPage() {
  const { openContactModal } = useContact()

  const services = [
    {
      icon: Workflow,
      title: "Automação com n8n",
      description: "Criamos fluxos de automação complexos que conectam seus sistemas e eliminam trabalho manual.",
      features: ["Workflows visuais", "Integração com 400+ ferramentas", "Processamento de dados", "Automação de processos"],
      color: "primary"
    },
    {
      icon: Database,
      title: "Integração de Sistemas",
      description: "Conectamos CRMs, ERPs, APIs e sistemas legados em uma arquitetura unificada.",
      features: ["CRMs (RDStation, Pipedrive)", "ERPs (SAP, OPA)", "APIs personalizadas", "Sincronização de dados"],
      color: "accent"
    },
    {
      icon: Brain,
      title: "Agentes de IA",
      description: "Chatbots inteligentes e assistentes virtuais para suporte, qualificação e atendimento.",
      features: ["Atendimento 24/7", "Qualificação de leads", "Suporte técnico", "Análise de sentimento"],
      color: "primary"
    },
    {
      icon: Cloud,
      title: "Integração AWS",
      description: "Utilizamos serviços AWS para escalabilidade, performance e confiabilidade máxima.",
      features: ["Lambda Functions", "S3 Storage", "RDS Database", "API Gateway"],
      color: "accent"
    }
  ]

  const problems = [
    { title: "Silos de Dados", text: "Dados espalhados em CRMs, ERPs e planilhas sem comunicação" },
    { title: "Processos Manuais", text: "Equipe gastando horas em tarefas repetitivas que poderiam ser automatizadas" },
    { title: "Falta de Integração", text: "Sistemas desconectados impedem fluxos eficientes e geram erros" },
    { title: "Leads Esfriando", text: "Sem automação, leads valiosos são perdidos por falta de follow-up" }
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
                Integração
              </Badge>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight text-gray-900">
              Automação de Processos & Integração
            </h1>
            
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Criamos automações que se integram perfeitamente aos seus serviços (APIs, CRMs, Billing etc.). 
              Você escolhe o escopo: apenas automação simples ou solução completa com API e Banco de Dados. 
              Você também escolhe: integramos à sua infraestrutura interna ou cuidamos de toda a hospedagem e gerenciamento para você.
            </p>
          </header>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 pb-12 border-b border-gray-200">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">400+</div>
              <div className="text-sm text-gray-600">Integrações</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">99%</div>
              <div className="text-sm text-gray-600">Redução de Erros</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">24/7</div>
              <div className="text-sm text-gray-600">Disponibilidade</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">0</div>
              <div className="text-sm text-gray-600">Intervenção Manual</div>
            </div>
          </div>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">O que é Orquestração & Integração?</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Resolvemos o problema de <strong>"silos de dados"</strong> conectando seus sistemas existentes 
              (CRMs, ERPs, APIs) através de automações inteligentes. Utilizamos n8n e AWS para criar fluxos 
              que eliminam trabalho manual e garantem que seus dados fluam corretamente entre sistemas.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Problemas Que Resolvemos</h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Identificamos e resolvemos os principais desafios de integração:
            </p>
          </div>

          {/* Problems */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {problems.map((problem, index) => {
              const isPrimary = index % 2 === 0
              const bgColor = isPrimary ? "bg-primary/5" : "bg-accent/5"
              return (
                <div key={index} className={`p-6 ${bgColor} rounded-lg border-2 border-transparent hover:border-primary/30 transition-all`}>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{problem.title}</h3>
                  <p className="text-gray-700 text-sm">{problem.text}</p>
                </div>
              )
            })}
          </div>

          {/* Services */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">O Que Podemos Fazer</h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Oferecemos desde automações simples até soluções completas. Escolha o que precisa:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => {
                const iconColor = service.color === "primary" ? "text-primary" : "text-accent"
                const bgColor = service.color === "primary" ? "bg-primary/5" : "bg-accent/5"
                const iconBg = service.color === "primary" ? "bg-primary/10" : "bg-accent/10"
                const checkColor = service.color === "primary" ? "text-primary" : "text-accent"
                return (
                  <Card key={index} className={`border-2 border-transparent hover:border-primary/30 hover:shadow-xl transition-all duration-300 overflow-hidden ${bgColor}`}>
                    <CardHeader>
                      <div className={`w-14 h-14 ${iconBg} rounded-xl flex items-center justify-center mb-4`}>
                        <service.icon className={`w-7 h-7 ${iconColor}`} />
                      </div>
                      <CardTitle className="text-xl text-gray-900 mb-2 font-bold">{service.title}</CardTitle>
                      <CardDescription className="text-gray-700">{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {service.features.map((feature, i) => (
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
          </div>

          {/* CTA */}
          <div className="mt-16 pt-12 border-t border-gray-200">
            <div className="bg-gradient-to-br from-primary/5 via-accent/5 to-primary/10 rounded-2xl p-8 text-center border-2 border-primary/20">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Pronto para Conectar Seus Sistemas?
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed max-w-2xl mx-auto">
                Agende uma conversa gratuita e descubra como podemos integrar seus sistemas 
                e eliminar silos de dados através de automações inteligentes.
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

