"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Bot, Brain, MessageSquare, Target, Zap, Users, ArrowLeft, ArrowRight, Infinity, Clock, Sparkles } from "lucide-react"
import { useContact } from "@/contexts/contact-context"
import Link from "next/link"

export default function AgentesIAPage() {
  const { openContactModal } = useContact()

  const useCases = [
    {
      icon: MessageSquare,
      title: "Atendimento ao Cliente 24/7",
      description: "Chatbots inteligentes que respondem dúvidas, resolvem problemas e entregam informações instantaneamente.",
      benefits: [
        "Resposta imediata a perguntas",
        "Escala para milhares de conversas simultâneas",
        "Disponibilidade total sem parar"
      ],
      gradient: "from-primary/20 to-primary/5"
    },
    {
      icon: Target,
      title: "Qualificação de Leads",
      description: "Agentes de IA que identificam, qualificam e priorizam leads qualificados automaticamente.",
      benefits: [
        "Identificação de intenção de compra",
        "Coleta automática de informações",
        "Nutrição personalizada de leads"
      ],
      gradient: "from-accent/20 to-accent/5"
    },
    {
      icon: Brain,
      title: "Suporte Técnico Inteligente",
      description: "Assistentes virtuais que resolvem problemas técnicos com base em bases de conhecimento.",
      benefits: [
        "Solução de problemas comuns",
        "Guia passo a passo automatizado",
        "Escalação inteligente quando necessário"
      ],
      gradient: "from-primary/20 to-primary/5"
    },
    {
      icon: Users,
      title: "Gestão de Relacionamento",
      description: "IA que gerencia relacionamento com clientes e prospects de forma personalizada.",
      benefits: [
        "Follow-up automatizado",
        "Histórico completo de interações",
        "Segmentação dinâmica"
      ],
      gradient: "from-accent/20 to-accent/5"
    }
  ]

  const stats = [
    { value: "89%", label: "Economia de Custos", icon: Zap },
    { value: "24/7", label: "Disponibilidade", icon: Clock },
    { value: "0.3s", label: "Tempo de Resposta", icon: Sparkles },
    { value: "∞", label: "Conversas Simultâneas", icon: Infinity }
  ]

  const features = [
    { name: "Processamento de linguagem natural (NLP)", icon: Brain },
    { name: "Integração com WhatsApp, Telegram, Messenger", icon: MessageSquare },
    { name: "Personalização baseada em perfil do cliente", icon: Users },
    { name: "Análise de sentimento em tempo real", icon: Target },
    { name: "Escalabilidade automática na AWS", icon: Zap },
    { name: "Múltiplos idiomas suportados", icon: Sparkles }
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
                  <Bot size={14} className="mr-2" />
                  Agentes de IA
                </Badge>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance leading-tight">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Agentes de IA
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-4xl mx-auto">
                Chatbots inteligentes e assistentes virtuais que atendem seus clientes 24/7 com precisão humana, 
                reduzindo custos em até 89% comparado a equipes humanas.
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
                    O que são <span className="text-primary">Agentes de IA</span>?
                  </h2>
                  <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                    <p>
                      Agentes de IA são sistemas inteligentes que utilizam processamento de linguagem natural (NLP) 
                      e machine learning para interagir com clientes de forma natural e contextualizada. Diferente 
                      de chatbots tradicionais, nossos agentes aprendem com cada interação e se adaptam ao perfil 
                      de cada cliente.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Use Cases */}
            <section className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Soluções <span className="text-primary">Personalizadas</span>
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Criamos agentes de IA sob medida para diferentes necessidades do seu negócio
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {useCases.map((useCase, index) => (
                  <Card 
                    key={index}
                    className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl group overflow-hidden relative"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${useCase.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                    <CardHeader className="relative z-10">
                      <div className={`w-16 h-16 bg-gradient-to-br ${useCase.gradient} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <useCase.icon className="text-primary" size={32} />
                      </div>
                      <CardTitle className="text-xl mb-2">{useCase.title}</CardTitle>
                      <CardDescription className="text-base">{useCase.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <ul className="space-y-3">
                        {useCase.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary" />
                            <span className="text-muted-foreground text-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Features */}
            <section className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Tecnologia de <span className="text-primary">Ponta</span>
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Utilizamos as mais avançadas tecnologias de IA para garantir resultados excepcionais
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, index) => {
                  const isPrimary = index % 2 === 0
                  const gradient = isPrimary ? "from-primary/20 to-primary/5" : "from-accent/20 to-accent/5"
                  return (
                    <Card 
                      key={index}
                      className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg group overflow-hidden relative"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                      <CardContent className="p-4 relative z-10">
                        <div className="flex items-start gap-3">
                          <div className={`w-10 h-10 bg-gradient-to-br ${gradient} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                            <feature.icon className="text-primary" size={20} />
                          </div>
                          <span className="text-muted-foreground text-sm pt-2">{feature.name}</span>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </section>

            {/* CTA */}
            <section className="text-center">
              <Card className="bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 border-primary/30 overflow-hidden relative">
                <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
                <CardContent className="p-12 relative z-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-6">
                    <Bot className="text-primary" size={32} />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Pronto para Revolucionar Seu Atendimento?
                  </h2>
                  <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto leading-relaxed">
                    Agende uma conversa gratuita e descubra como nossos agentes de IA podem 
                    transformar seu relacionamento com clientes.
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
