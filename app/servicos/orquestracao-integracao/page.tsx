"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Workflow, Cloud, Brain, Database, ArrowLeft, Zap, ArrowRight, AlertCircle, Link2 } from "lucide-react"
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
      gradient: "from-primary/20 to-primary/5"
    },
    {
      icon: Database,
      title: "Integração de Sistemas",
      description: "Conectamos CRMs, ERPs, APIs e sistemas legados em uma arquitetura unificada.",
      features: ["CRMs (RDStation, Pipedrive)", "ERPs (SAP, OPA)", "APIs personalizadas", "Sincronização de dados"],
      gradient: "from-accent/20 to-accent/5"
    },
    {
      icon: Brain,
      title: "Agentes de IA",
      description: "Chatbots inteligentes e assistentes virtuais para suporte, qualificação e atendimento.",
      features: ["Atendimento 24/7", "Qualificação de leads", "Suporte técnico", "Análise de sentimento"],
      gradient: "from-primary/20 to-primary/5"
    },
    {
      icon: Cloud,
      title: "Integração AWS",
      description: "Utilizamos serviços AWS para escalabilidade, performance e confiabilidade máxima.",
      features: ["Lambda Functions", "S3 Storage", "RDS Database", "API Gateway"],
      gradient: "from-accent/20 to-accent/5"
    }
  ]

  const stats = [
    { value: "400+", label: "Integrações", icon: Link2 },
    { value: "99%", label: "Redução de Erros", icon: Zap },
    { value: "24/7", label: "Disponibilidade", icon: Cloud },
    { value: "0", label: "Intervenção Manual", icon: Workflow }
  ]

  const problems = [
    { 
      title: "Silos de Dados", 
      text: "Dados espalhados em CRMs, ERPs e planilhas sem comunicação",
      icon: Database,
      gradient: "from-primary/20 to-primary/5"
    },
    { 
      title: "Processos Manuais", 
      text: "Equipe gastando horas em tarefas repetitivas que poderiam ser automatizadas",
      icon: Zap,
      gradient: "from-accent/20 to-accent/5"
    },
    { 
      title: "Falta de Integração", 
      text: "Sistemas desconectados impedem fluxos eficientes e geram erros",
      icon: Link2,
      gradient: "from-primary/20 to-accent/5"
    },
    { 
      title: "Leads Esfriando", 
      text: "Sem automação, leads valiosos são perdidos por falta de follow-up",
      icon: AlertCircle,
      gradient: "from-accent/20 to-accent/5"
    }
  ]

  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern opacity-10"></div>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10">
        <Header />
        
        <article className="pt-32 pb-20 px-4">
          <div className="container mx-auto max-w-7xl">
            {/* Back Button */}
            <Link 
              href="/servicos"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors group"
            >
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">Voltar aos Serviços</span>
            </Link>

            {/* Header */}
            <header className="mb-16 animate-fade-in-up">
              <div className="flex items-center justify-center gap-2 mb-6">
                <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-1.5">
                  <Workflow size={14} className="mr-2" />
                  Integração
                </Badge>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance leading-tight">
                Automação de Processos{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  & Integração
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-4xl mx-auto">
                Criamos automações que se integram perfeitamente aos seus serviços (APIs, CRMs, Billing etc.). 
                Você escolhe o escopo: apenas automação simples ou solução completa com API e Banco de Dados. 
                Você também escolhe: integramos à sua infraestrutura interna ou cuidamos de toda a hospedagem e gerenciamento para você.
              </p>
            </header>

            {/* Stats */}
            <section className="mb-20">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <Card 
                    key={index}
                    className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl group text-center"
                  >
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <stat.icon className="text-primary" size={24} />
                      </div>
                      <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Main Content */}
            <section className="mb-20">
              <div className="max-w-4xl mx-auto space-y-8">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    O que é <span className="text-primary">Orquestração & Integração</span>?
                  </h2>
                  <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                    <p>
                      Resolvemos o problema de <strong className="text-foreground">"silos de dados"</strong> conectando seus sistemas existentes 
                      (CRMs, ERPs, APIs) através de automações inteligentes. Utilizamos n8n e AWS para criar fluxos 
                      que eliminam trabalho manual e garantem que seus dados fluam corretamente entre sistemas.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Problems */}
            <section className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Problemas Que <span className="text-primary">Resolvemos</span>
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Identificamos e resolvemos os principais desafios de integração
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {problems.map((problem, index) => (
                  <Card 
                    key={index}
                    className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg group overflow-hidden relative"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${problem.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                    <CardHeader className="relative z-10">
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 bg-gradient-to-br ${problem.gradient} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                          <problem.icon className="text-primary" size={24} />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-xl mb-2">{problem.title}</CardTitle>
                          <CardDescription className="text-base">{problem.text}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </section>

            {/* Services */}
            <section className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  O Que Podemos <span className="text-primary">Fazer</span>
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Oferecemos desde automações simples até soluções completas. Escolha o que precisa
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {services.map((service, index) => (
                  <Card 
                    key={index}
                    className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl group overflow-hidden relative"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                    <CardHeader className="relative z-10">
                      <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <service.icon className="text-primary" size={32} />
                      </div>
                      <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                      <CardDescription className="text-base">{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <ul className="space-y-3">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary" />
                            <span className="text-muted-foreground text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section className="text-center">
              <Card className="bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 border-primary/30 overflow-hidden relative">
                <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
                <CardContent className="p-12 relative z-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-6">
                    <Workflow className="text-primary" size={32} />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Pronto para Conectar Seus Sistemas?
                  </h2>
                  <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto leading-relaxed">
                    Agende uma conversa gratuita e descubra como podemos integrar seus sistemas 
                    e eliminar silos de dados através de automações inteligentes.
                  </p>
                  <Button 
                    onClick={openContactModal} 
                    size="lg" 
                    className="px-8 py-6 text-lg group"
                  >
                    Agendar Reunião Gratuita
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  </Button>
                </CardContent>
              </Card>
            </section>
          </div>
        </article>
        
        <Footer />
      </div>
    </main>
  )
}

