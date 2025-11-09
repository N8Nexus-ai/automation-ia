"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Target, Zap, Award, Code, Database, Cloud, Workflow, Layers, ArrowRight, CheckCircle2, Sparkles } from "lucide-react"
import { useContact } from "@/contexts/contact-context"

export default function SobrePage() {
  const { openContactModal } = useContact()
  const values = [
    {
      icon: Target,
      title: "Missão",
      description: "Desenhar e construir a solução exata que o cliente precisa para automatizar processos, eliminando erros manuais e otimizando custos e tempo.",
      gradient: "from-primary/20 to-primary/5"
    },
    {
      icon: Zap,
      title: "Visão",
      description: "Ser reconhecido como parceiro estratégico que oferece desde automações simples até plataformas completas, resolvendo desafios de negócio com tecnologia adequada ao que cada cliente precisa.",
      gradient: "from-accent/20 to-accent/5"
    },
    {
      icon: Award,
      title: "Valores",
      description: "Arquitetura primeiro, flexibilidade total, impacto mensurável. Resolvemos o problema de negócio — a tecnologia é o meio, não o fim.",
      gradient: "from-primary/20 to-accent/5"
    }
  ]

  const stats = [
    { value: "50+", label: "Projetos Concluídos", icon: CheckCircle2, delay: "0s" },
    { value: "99.3%", label: "Redução de Tempo", icon: Zap, delay: "0.2s" },
    { value: "24/7", label: "Suporte Disponível", icon: Cloud, delay: "0.4s" },
    { value: "100%", label: "Ponta-a-Ponta", icon: Layers, delay: "0.6s" }
  ]

  const technologies = [
    { name: "Arquitetura de Soluções", icon: Layers },
    { name: "APIs Personalizadas", icon: Code },
    { name: "Banco de Dados", icon: Database },
    { name: "Painéis de Controle", icon: Workflow },
    { name: "n8n Workflow Automation", icon: Zap },
    { name: "AWS Cloud Services", icon: Cloud },
    { name: "OpenAI & IA Generativa", icon: Sparkles },
    { name: "Docker & Containers", icon: Code }
  ]

  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern opacity-10"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10">
        <Header />
        
        <div className="pt-32 pb-20 px-4">
          <div className="container mx-auto max-w-7xl">
            {/* Hero Section */}
            <div className="text-center mb-20 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-8">
                <Sparkles size={16} />
                Conheça quem somos
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance leading-tight">
                Sobre a <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Nexus.ai</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Lideramos a Arquitetura e o desenvolvimento de Automações. Nossa missão é desenhar e construir 
                a solução exata que o cliente precisa — desde automações simples até plataformas completas ponta-a-ponta.
              </p>
            </div>

            {/* Stats Grid */}
            <section className="mb-24">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <Card 
                    key={index} 
                    className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl group"
                    style={{ animationDelay: stat.delay }}
                  >
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <stat.icon className="text-primary" size={24} />
                      </div>
                      <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Nossa História */}
            <section className="mb-24">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="inline-block">
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">
                      Do <span className="text-primary">Simples</span> ao <span className="text-accent">Completo</span>
                    </h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                  </div>
                  <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                    <p>
                      A Nexus.ai oferece <strong className="text-foreground">flexibilidade total</strong>. Você pode escolher apenas uma automação 
                      simples para conectar sistemas, ou uma solução completa ponta-a-ponta com API, Banco de Dados e 
                      Painel de Controle visual. O importante é resolver seu desafio de negócio.
                    </p>
                    <div className="space-y-3 pt-4">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Zap className="text-primary" size={14} />
                        </div>
                        <div>
                          <strong className="text-foreground block mb-1">Automação Simples:</strong>
                          <p className="text-muted-foreground">Workflows n8n que conectam seus sistemas e eliminam trabalho manual. Ideal para quem precisa de automação rápida e direta.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Layers className="text-accent" size={14} />
                        </div>
                        <div>
                          <strong className="text-foreground block mb-1">Plataforma Completa:</strong>
                          <p className="text-muted-foreground">Para empresas que precisam de mais, construímos a solução completa ponta-a-ponta: Back-end (APIs e Banco de Dados), orquestrador (n8n) e Painel de Controle visual.</p>
                        </div>
                      </div>
                    </div>
                    <p className="pt-2">
                      Você escolhe: apenas automação ou plataforma completa. Integramos à sua infraestrutura interna ou 
                      cuidamos de toda a hospedagem e gerenciamento. <strong className="text-foreground">Flexibilidade total, resultado garantido.</strong>
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <div className="bg-gradient-to-br from-primary/20 via-accent/10 to-primary/5 rounded-3xl p-8 border border-primary/20 backdrop-blur-sm">
                    <div className="grid grid-cols-2 gap-6">
                      {stats.map((stat, index) => (
                        <div key={index} className="text-center p-4 bg-card/50 rounded-xl border border-border/50 hover:border-primary/50 transition-all">
                          <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                            {stat.value}
                          </div>
                          <div className="text-sm text-muted-foreground">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="absolute -z-10 -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-2xl opacity-50"></div>
                </div>
              </div>
            </section>

            {/* Valores */}
            <section className="mb-24">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Nossos <span className="text-primary">Valores</span>
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Os princípios que guiam cada projeto e cada decisão
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {values.map((value, index) => (
                  <Card 
                    key={index} 
                    className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl group overflow-hidden relative"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                    <CardHeader className="relative z-10">
                      <div className={`w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <value.icon className="text-primary" size={32} />
                      </div>
                      <CardTitle className="text-2xl mb-2">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <CardDescription className="text-base leading-relaxed">
                        {value.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Tecnologias */}
            <section className="mb-24">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Nossa <span className="text-primary">Stack</span> Tecnológica
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Tecnologias de ponta para construir soluções robustas e escaláveis
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {technologies.map((tech, index) => (
                  <Card 
                    key={index} 
                    className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg group cursor-pointer"
                  >
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                        <tech.icon className="text-primary" size={24} />
                      </div>
                      <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                        {tech.name}
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
                    <Sparkles className="text-primary" size={32} />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">
                    Pronto para transformar seu negócio?
                  </h3>
                  <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto">
                    Vamos conversar sobre como podemos automatizar seus processos e acelerar seu crescimento.
                  </p>
                  <Button 
                    onClick={openContactModal} 
                    size="lg" 
                    className="px-8 py-6 text-lg group"
                  >
                    Agendar Reunião
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  </Button>
                </CardContent>
              </Card>
            </section>
          </div>
        </div>
        
        <Footer />
      </div>
    </main>
  )
}
