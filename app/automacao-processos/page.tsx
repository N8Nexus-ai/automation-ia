"use client"

import { Header } from "@/components/header"
import { FooterLight } from "@/components/footer-light"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Zap, Settings, BarChart3, Clock, Target, Users, ArrowLeft } from "lucide-react"
import { useContact } from "@/contexts/contact-context"
import Link from "next/link"

export default function AutomacaoProcessosPage() {
  const { openContactModal } = useContact()

  const processTypes = [
    {
      icon: Settings,
      title: "Processos Administrativos",
      description: "Automação de tarefas burocráticas e operacionais",
      features: ["Emissão de relatórios", "Controle de estoque", "Gestão de documentos", "Controle de prazos"],
      color: "primary"
    },
    {
      icon: Users,
      title: "Processos de Vendas",
      description: "Automação do funil de vendas e relacionamento",
      features: ["Qualificação de leads", "Follow-up automático", "Propostas personalizadas", "Pós-venda automatizado"],
      color: "accent"
    },
    {
      icon: BarChart3,
      title: "Processos Financeiros",
      description: "Automação de controles e análises financeiras",
      features: ["Conciliação bancária", "Controle de inadimplência", "Análise de fluxo de caixa", "Relatórios fiscais"],
      color: "primary"
    }
  ]

  const benefits = [
    { icon: Clock, title: "Economia de Tempo", text: "Reduza em até 99% o tempo gasto em tarefas repetitivas" },
    { icon: Target, title: "Eliminação de Erros", text: "Zero erros em processos automatizados" },
    { icon: Zap, title: "Escalabilidade", text: "Processe milhares de operações simultaneamente" },
    { icon: BarChart3, title: "ROI Comprovado", text: "Retorno do investimento em menos de 3 meses" }
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
                Serviços
              </Badge>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight text-gray-900">
              Automação de Processos
            </h1>
            
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Transformamos processos manuais e repetitivos em automações inteligentes que trabalham 24/7, 
              eliminando erros humanos e liberando sua equipe para atividades estratégicas.
            </p>
          </header>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 pb-12 border-b border-gray-200">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">99%</div>
              <div className="text-sm text-gray-600">Redução de Tempo</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">0</div>
              <div className="text-sm text-gray-600">Erros Humanos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">24/7</div>
              <div className="text-sm text-gray-600">Disponibilidade</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">300%</div>
              <div className="text-sm text-gray-600">ROI Anual</div>
            </div>
          </div>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">O que é Automação de Processos?</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Automação de processos é a tecnologia que transforma tarefas manuais e repetitivas em 
              fluxos automatizados que funcionam sem intervenção humana. Utilizamos plataformas como 
              n8n e integrações AWS para criar automações robustas e escaláveis.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Tipos de Processos Que Automatizamos</h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Identificamos e automatizamos qualquer processo repetitivo da sua empresa:
            </p>
          </div>

          {/* Process Types */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {processTypes.map((process, index) => {
              const iconColor = process.color === "primary" ? "text-primary" : "text-accent"
              const bgColor = process.color === "primary" ? "bg-primary/5" : "bg-accent/5"
              const iconBg = process.color === "primary" ? "bg-primary/10" : "bg-accent/10"
              const checkColor = process.color === "primary" ? "text-primary" : "text-accent"
              return (
                <Card key={index} className={`border-2 border-transparent hover:border-primary/30 hover:shadow-xl transition-all duration-300 overflow-hidden ${bgColor}`}>
                  <CardHeader>
                    <div className={`w-14 h-14 ${iconBg} rounded-xl flex items-center justify-center mb-4`}>
                      <process.icon className={`w-7 h-7 ${iconColor}`} />
                    </div>
                    <CardTitle className="text-xl text-gray-900 mb-2 font-bold">{process.title}</CardTitle>
                    <CardDescription className="text-gray-700">{process.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {process.features.map((feature, i) => (
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Por Que Automatizar?</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Veja os benefícios reais que a automação traz para sua empresa:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => {
                const isPrimary = index % 2 === 0
                const bgColor = isPrimary ? "bg-primary/5" : "bg-accent/5"
                const iconColor = isPrimary ? "text-primary" : "text-accent"
                return (
                  <div key={index} className={`flex items-start gap-4 p-6 ${bgColor} rounded-lg border-2 border-transparent hover:border-primary/30 transition-all`}>
                    <div className={`w-12 h-12 ${isPrimary ? "bg-primary/10" : "bg-accent/10"} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <benefit.icon className={`w-6 h-6 ${iconColor}`} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                      <p className="text-gray-700 text-sm">{benefit.text}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 pt-12 border-t border-gray-200">
            <div className="bg-gradient-to-br from-primary/5 via-accent/5 to-primary/10 rounded-2xl p-8 text-center border-2 border-primary/20">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Pronto para Automatizar Seus Processos?
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed max-w-2xl mx-auto">
                Agende uma conversa gratuita e descubra quais processos da sua empresa 
                podem ser automatizados para gerar mais eficiência e economia.
              </p>
              <Button 
                onClick={openContactModal} 
                size="lg" 
                className="px-8 py-6 text-lg bg-gradient-to-r from-primary to-indigo-400 hover:from-primary/90 hover:to-indigo-400/90 text-white shadow-lg hover:shadow-xl transition-all"
              >
                Agendar Consultoria Gratuita
              </Button>
            </div>
          </div>
        </div>
      </article>
      
      <FooterLight />
    </main>
  )
}
