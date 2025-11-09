"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Server, Cloud, Shield, Clock, ArrowLeft, Zap, ArrowRight, Infinity, Activity } from "lucide-react"
import { useContact } from "@/contexts/contact-context"
import Link from "next/link"

export default function InfraestruturaFlexivelPage() {
  const { openContactModal } = useContact()

  const infrastructureOptions = [
    {
      icon: Server,
      title: "On-Premise",
      description: "Integramos na sua infraestrutura interna (Data Center próprio)",
      gradient: "from-primary/20 to-primary/5",
      advantages: [
        "Controle total sobre dados",
        "Compliance específico",
        "Sem dependências externas",
        "Customização completa"
      ],
      idealFor: [
        "Empresas com infraestrutura própria",
        "Necessidades específicas de compliance",
        "Dados sensíveis e críticos"
      ]
    },
    {
      icon: Cloud,
      title: "Nuvem Gerenciada",
      description: "Cuidamos de toda a hospedagem e gerenciamento para você (AWS, DigitalOcean)",
      gradient: "from-accent/20 to-accent/5",
      advantages: [
        "Zero preocupação com infraestrutura",
        "Escalabilidade automática",
        "Backup automático",
        "Monitoramento 24/7"
      ],
      idealFor: [
        "Equipes sem expertise técnica",
        "Necessidade de escalabilidade",
        "Implementação rápida"
      ]
    }
  ]

  const stats = [
    { value: "100%", label: "Flexível", icon: Zap },
    { value: "24/7", label: "Monitoramento", icon: Clock },
    { value: "99.9%", label: "Uptime", icon: Activity },
    { value: "∞", label: "Escalável", icon: Infinity }
  ]

  const supportPlans = [
    {
      name: "Mantenha Vivo",
      description: "Monitoramento, segurança e correção de bugs",
      features: ["Monitoramento ativo", "Correção de bugs", "Segurança e atualizações", "Suporte básico"],
      gradient: "from-primary/20 to-primary/5",
      icon: Shield
    },
    {
      name: "Piloto Automático",
      description: "Tudo do anterior + franquia de horas para melhorias",
      features: ["Tudo do Mantenha Vivo", "Franquia de horas/mês", "Melhorias contínuas", "Suporte prioritário"],
      gradient: "from-accent/20 to-accent/5",
      icon: Zap
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
                  <Server size={14} className="mr-2" />
                  Infraestrutura
                </Badge>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance leading-tight">
                Infraestrutura{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Flexível
                </span>{" "}
                & Suporte Contínuo
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-4xl mx-auto">
                Nossa grande vantagem: flexibilidade. Você escolhe o modelo de infraestrutura e suporte 
                que melhor se adapta ao seu negócio. On-premise ou nuvem gerenciada, sempre com suporte contínuo.
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
                    Modelos de <span className="text-primary">Infraestrutura</span>
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Escolha o modelo que melhor se adapta às suas necessidades de segurança, compliance e controle
                  </p>
                </div>
              </div>
            </section>

            {/* Infrastructure Options */}
            <section className="mb-20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {infrastructureOptions.map((option, index) => (
                  <Card 
                    key={index}
                    className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl group overflow-hidden relative"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${option.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                    <CardHeader className="relative z-10">
                      <div className={`w-16 h-16 bg-gradient-to-br ${option.gradient} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <option.icon className="text-primary" size={32} />
                      </div>
                      <CardTitle className="text-xl mb-2">{option.title}</CardTitle>
                      <CardDescription className="text-base">{option.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6 relative z-10">
                      <div>
                        <h3 className="font-bold text-lg mb-3 text-primary">Vantagens:</h3>
                        <ul className="space-y-2">
                          {option.advantages.map((advantage, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary" />
                              <span className="text-muted-foreground text-sm">{advantage}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="pt-4 border-t border-border">
                        <h3 className="font-bold text-sm text-foreground mb-2">Ideal para:</h3>
                        <ul className="space-y-1">
                          {option.idealFor.map((item, i) => (
                            <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                              <span className="text-primary mt-1">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Support Plans */}
            <section className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Contratos de <span className="text-primary">Sustentação</span>
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Garanta que sua automação continue funcionando perfeitamente com nossos planos de suporte
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {supportPlans.map((plan, index) => (
                  <Card 
                    key={index}
                    className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl group overflow-hidden relative"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                    <CardHeader className="relative z-10">
                      <div className={`w-16 h-16 bg-gradient-to-br ${plan.gradient} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <plan.icon className="text-primary" size={32} />
                      </div>
                      <CardTitle className="text-xl mb-2">{plan.name}</CardTitle>
                      <CardDescription className="text-base">{plan.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <ul className="space-y-3">
                        {plan.features.map((feature, i) => (
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
                    <Server className="text-primary" size={32} />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Qual Infraestrutura é Ideal para Você?
                  </h2>
                  <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto leading-relaxed">
                    Agende uma conversa gratuita e nossa equipe ajudará você a escolher 
                    o melhor modelo de infraestrutura e suporte para seu negócio.
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

