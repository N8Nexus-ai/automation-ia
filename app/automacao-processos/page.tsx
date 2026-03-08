"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Zap, Settings, BarChart3, Clock, Target, Users, ArrowLeft, ArrowRight, TrendingUp } from "lucide-react"
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
      gradient: "from-primary/20 to-primary/5"
    },
    {
      icon: Users,
      title: "Processos de Vendas",
      description: "Automação do funil de vendas e relacionamento",
      features: ["Qualificação de leads", "Follow-up automático", "Propostas personalizadas", "Pós-venda automatizado"],
      gradient: "from-accent/20 to-accent/5"
    },
    {
      icon: BarChart3,
      title: "Processos Financeiros",
      description: "Automação de controles e análises financeiras",
      features: ["Conciliação bancária", "Controle de inadimplência", "Análise de fluxo de caixa", "Relatórios fiscais"],
      gradient: "from-primary/20 to-primary/5"
    }
  ]

  const stats = [
    { value: "99%", label: "Redução de Tempo", icon: Clock },
    { value: "0", label: "Erros Humanos", icon: Target },
    { value: "24/7", label: "Disponibilidade", icon: Zap },
    { value: "300%", label: "ROI Anual", icon: TrendingUp }
  ]

  const benefits = [
    { 
      icon: Clock, 
      title: "Economia de Tempo", 
      text: "Reduza em até 99% o tempo gasto em tarefas repetitivas",
      gradient: "from-primary/20 to-primary/5"
    },
    { 
      icon: Target, 
      title: "Eliminação de Erros", 
      text: "Zero erros em processos automatizados",
      gradient: "from-accent/20 to-accent/5"
    },
    { 
      icon: Zap, 
      title: "Escalabilidade", 
      text: "Processe milhares de operações simultaneamente",
      gradient: "from-primary/20 to-accent/5"
    },
    { 
      icon: BarChart3, 
      title: "ROI Comprovado", 
      text: "Retorno do investimento em menos de 3 meses",
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
                  <Zap size={14} className="mr-2" />
                  Automação
                </Badge>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance leading-tight">
                Automação de <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Processos</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-4xl mx-auto">
                Transformamos processos manuais e repetitivos em automações inteligentes que trabalham 24/7, 
                eliminando erros humanos e liberando sua equipe para atividades estratégicas.
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
                    O que é <span className="text-primary">Automação de Processos</span>?
                  </h2>
                  <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                    <p>
                      Automação de processos é a tecnologia que transforma tarefas manuais e repetitivas em 
                      fluxos automatizados que funcionam sem intervenção humana. Utilizamos plataformas como 
                      n8n e integrações AWS para criar automações robustas e escaláveis.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Process Types */}
            <section className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Tipos de Processos Que <span className="text-primary">Automatizamos</span>
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Identificamos e automatizamos qualquer processo repetitivo da sua empresa
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {processTypes.map((process, index) => (
                  <Card 
                    key={index}
                    className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl group overflow-hidden relative"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${process.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                    <CardHeader className="relative z-10">
                      <div className={`w-16 h-16 bg-gradient-to-br ${process.gradient} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <process.icon className="text-primary" size={32} />
                      </div>
                      <CardTitle className="text-xl mb-2">{process.title}</CardTitle>
                      <CardDescription className="text-base">{process.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <ul className="space-y-3">
                        {process.features.map((feature, i) => (
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

            {/* Benefits */}
            <section className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Por Que <span className="text-primary">Automatizar</span>?
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Veja os benefícios reais que a automação traz para sua empresa
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <Card 
                    key={index}
                    className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg group overflow-hidden relative"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                    <CardContent className="p-6 relative z-10">
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 bg-gradient-to-br ${benefit.gradient} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                          <benefit.icon className="text-primary" size={24} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-foreground mb-2">{benefit.title}</h3>
                          <p className="text-muted-foreground text-sm leading-relaxed">{benefit.text}</p>
                        </div>
                      </div>
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
                    <Zap className="text-primary" size={32} />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Pronto para Automatizar Seus Processos?
                  </h2>
                  <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto leading-relaxed">
                    Agende uma conversa gratuita e descubra quais processos da sua empresa 
                    podem ser automatizados para gerar mais eficiência e economia.
                  </p>
                  <Button 
                    onClick={openContactModal} 
                    size="lg" 
                    className="px-8 py-6 text-lg group"
                  >
                    Agendar Consultoria Gratuita
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
