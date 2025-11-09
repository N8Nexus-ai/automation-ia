"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Layers, Database, Code, LayoutDashboard, ArrowLeft, Zap, Sparkles, ArrowRight, Infinity } from "lucide-react"
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
      gradient: "from-primary/20 to-primary/5"
    },
    {
      icon: Code,
      title: "Desenvolvimento de API",
      description: "Back-end robusto com APIs personalizadas para integrações e processamento de dados.",
      features: ["APIs personalizadas", "Integração com CRMs/ERPs", "Processamento de dados", "Segurança e autenticação"],
      gradient: "from-accent/20 to-accent/5"
    },
    {
      icon: Database,
      title: "Banco de Dados",
      description: "Centralização de dados reduz custos de API e melhora performance significativamente.",
      features: ["Banco de dados otimizado", "Redução de custos de API", "Backup automático", "Consultas otimizadas"],
      gradient: "from-primary/20 to-primary/5"
    },
    {
      icon: LayoutDashboard,
      title: "Painel de Controle",
      description: "Interface visual que permite equipes não-técnicas gerenciarem processos com um clique.",
      features: ["Interface intuitiva", "Disparos manuais", "Relatórios visuais", "Gerenciamento completo"],
      gradient: "from-accent/20 to-accent/5"
    }
  ]

  const stats = [
    { value: "100%", label: "Ponta-a-Ponta", icon: Layers },
    { value: "0", label: "Código para Você", icon: Code },
    { value: "1", label: "Clique", icon: Zap },
    { value: "∞", label: "Escalável", icon: Infinity }
  ]

  const benefits = [
    { 
      title: "Equipes Não-Técnicas", 
      text: "Permite que equipes comerciais e operacionais gerenciem processos complexos",
      icon: Sparkles,
      gradient: "from-primary/20 to-primary/5"
    },
    { 
      title: "Redução de Custos", 
      text: "Centralização de dados reduz chamadas de API e custos operacionais",
      icon: Database,
      gradient: "from-accent/20 to-accent/5"
    },
    { 
      title: "Solução Completa", 
      text: "Uma única plataforma integrada ao invés de múltiplas ferramentas",
      icon: Layers,
      gradient: "from-primary/20 to-accent/5"
    },
    { 
      title: "Escalabilidade", 
      text: "Arquitetura preparada para crescer com seu negócio",
      icon: Infinity,
      gradient: "from-accent/20 to-accent/5"
    }
  ]

  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern opacity-10"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      
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
                  <Layers size={14} className="mr-2" />
                  Plataformas
                </Badge>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance leading-tight">
                Plataformas de Automação{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Sob Medida
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-4xl mx-auto">
                Para empresas que precisam de uma ferramenta gerenciável ou não possuem um time técnico, 
                oferecemos a opção de construir a plataforma completa ponta-a-ponta: do Back-end (APIs), 
                Banco de dados e o orquestrador (n8n), até um painel de controle visual.
              </p>
              
              <Card className="bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 border-primary/20 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Sparkles className="text-primary" size={18} />
                    </div>
                    <div>
                      <p className="text-sm text-foreground leading-relaxed">
                        <strong className="text-primary">Nota:</strong> Esta é uma opção para quem precisa de mais. Você também pode escolher 
                        apenas automação simples. Na conversa inicial, definimos juntos o escopo ideal para seu negócio.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
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
                    O que são <span className="text-primary">Plataformas Sob Medida</span>?
                  </h2>
                  <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                    <p>
                      Esta é uma <strong className="text-foreground">opção adicional</strong> para empresas que precisam de mais que uma automação simples. 
                      Diferente de simples automações, construímos <strong className="text-foreground">plataformas completas</strong> que unificam 
                      API, Banco de Dados e Painel de Controle visual em uma única solução. Isso permite que equipes não-técnicas 
                      gerenciem processos complexos através de uma interface visual intuitiva.
                    </p>
                    
                    <p>
                      Se você precisa apenas de automação para conectar sistemas, também oferecemos isso. 
                      O importante é resolver seu desafio de negócio com a solução adequada.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Deliverables */}
            <section className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Entregáveis da <span className="text-primary">Solução</span>
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Cada plataforma inclui todos os componentes necessários para uma solução completa
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {deliverables.map((deliverable, index) => (
                  <Card 
                    key={index}
                    className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl group overflow-hidden relative"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${deliverable.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                    <CardHeader className="relative z-10">
                      <div className={`w-16 h-16 bg-gradient-to-br ${deliverable.gradient} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <deliverable.icon className="text-primary" size={32} />
                      </div>
                      <CardTitle className="text-xl mb-2">{deliverable.title}</CardTitle>
                      <CardDescription className="text-base">{deliverable.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <ul className="space-y-3">
                        {deliverable.features.map((feature, i) => (
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
                  Por Que Escolher <span className="text-primary">Plataformas Sob Medida</span>?
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Benefícios reais para empresas que precisam de soluções completas
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <Card 
                    key={index}
                    className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg group overflow-hidden relative"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                    <CardHeader className="relative z-10">
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 bg-gradient-to-br ${benefit.gradient} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                          <benefit.icon className="text-primary" size={24} />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-xl mb-2">{benefit.title}</CardTitle>
                          <CardDescription className="text-base">{benefit.text}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
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
                    <Layers className="text-primary" size={32} />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Pronto para Sua Plataforma Completa?
                  </h2>
                  <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto leading-relaxed">
                    Agende uma conversa gratuita e descubra como podemos arquitetar e construir 
                    a plataforma completa que sua equipe precisa.
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

