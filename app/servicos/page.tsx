"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, Zap, Brain, Target, BarChart3, Users, Clock, Shield, ArrowRight, Sparkles, Workflow, Cloud, Server } from "lucide-react"
import { useContact } from "@/contexts/contact-context"
import Link from "next/link"

export default function ServicosPage() {
  const { openContactModal } = useContact()

  const serviceRoutes = [
    {
      icon: Workflow,
      title: "Automação de Processos",
      description: "Conecte sistemas, reduza retrabalho e crie fluxos mais rápidos com n8n.",
      href: "/automacao-processos",
    },
    {
      icon: Cloud,
      title: "Integração AWS",
      description: "Use Lambda, S3, RDS e filas para dar escala, monitoramento e segurança à operação.",
      href: "/integracao-aws",
    },
    {
      icon: Server,
      title: "Infraestrutura n8n",
      description: "Implemente ambientes próprios ou gerenciados com foco em estabilidade e suporte.",
      href: "/infraestrutura-n8n",
    },
  ]

  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern opacity-10"></div>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-32 pb-12 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12 animate-fade-in-up">
              <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2 text-sm font-medium mb-6">
                <Sparkles size={14} className="mr-2" />
                Nossos Serviços
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance leading-tight">
                Serviços de <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Automação</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Projetamos automação de processos, integração entre sistemas, infraestrutura n8n e camadas em AWS para operações que precisam de escala e controle.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3 mt-8 text-sm text-muted-foreground">
                <span>Rotas principais:</span>
                <Link href="/automacao-processos" className="text-primary hover:underline">
                  Automação de Processos
                </Link>
                <span className="text-border">•</span>
                <Link href="/integracao-aws" className="text-primary hover:underline">
                  Integração AWS
                </Link>
                <span className="text-border">•</span>
                <Link href="/infraestrutura-n8n" className="text-primary hover:underline">
                  Infraestrutura n8n
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-8 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Escolha a <span className="text-primary">frente certa</span> para sua operação
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Estas são as três rotas mais procuradas por empresas que chegam até a Nexus.ai pelo Google.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {serviceRoutes.map((route) => (
                <Link key={route.href} href={route.href} className="group">
                  <Card className="h-full bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl">
                    <CardHeader>
                      <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <route.icon className="text-primary" size={28} />
                      </div>
                      <CardTitle className="text-2xl">{route.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {route.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <span className="inline-flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                        Ver detalhes
                        <ArrowRight className="ml-2" size={18} />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Cost Comparison Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Exemplo de <span className="text-primary">impacto operacional</span> com IA
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Um dos casos mais comuns é substituir atendimento manual repetitivo por agentes com integrações, monitoramento e infraestrutura escalável.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {/* Human Cost */}
              <Card className="bg-card border-border hover:border-red-500/30 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center">
                      <Users className="w-6 h-6 text-red-500" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-foreground">Atendimento Humano</CardTitle>
                      <CardDescription className="text-muted-foreground">Custos reais para 24h de atendimento</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-muted/50 rounded-xl p-6 border border-border">
                    <h3 className="font-bold text-lg mb-4 text-foreground">Funcionários Necessários:</h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span><strong className="text-foreground">3 funcionários</strong> (8h cada para cobrir 24h)</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span><strong className="text-foreground">+ 1 supervisor</strong> para coordenação</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span><strong className="text-foreground">+ 1 gerente</strong> para gestão</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-muted/50 rounded-xl p-6 border border-border">
                    <h3 className="font-bold text-lg mb-4 text-foreground">Custos Mensais:</h3>
                    <div className="space-y-3 text-muted-foreground">
                      <div className="flex justify-between items-center">
                        <span>Salários (5 pessoas):</span>
                        <span className="font-bold text-foreground">R$ 13.500</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Encargos (40%):</span>
                        <span className="font-bold text-foreground">R$ 5.400</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Benefícios:</span>
                        <span className="font-bold text-foreground">R$ 2.000</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Treinamento:</span>
                        <span className="font-bold text-foreground">R$ 1.500</span>
                      </div>
                      <div className="flex justify-between items-center border-t border-border pt-3 mt-3">
                        <span className="font-bold text-lg text-foreground">Total Mensal:</span>
                        <span className="text-xl font-bold text-red-500">R$ 22.400</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-red-500/10 rounded-xl p-4 border border-red-500/20">
                    <h4 className="font-bold text-foreground mb-3">Limitações:</h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 mt-1">•</span>
                        <span>Apenas 1 cliente por vez</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 mt-1">•</span>
                        <span>Faltas e licenças médicas</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 mt-1">•</span>
                        <span>Rotatividade alta</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 mt-1">•</span>
                        <span>Qualidade inconsistente</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 mt-1">•</span>
                        <span>Horário comercial limitado</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* AI Cost */}
              <Card className="bg-card border-border hover:border-green-500/30 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                      <Brain className="w-6 h-6 text-green-500" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-foreground">Agente de IA</CardTitle>
                      <CardDescription className="text-muted-foreground">Custo real para 24h de atendimento</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-muted/50 rounded-xl p-6 border border-border">
                    <h3 className="font-bold text-lg mb-4 text-foreground">Recursos Necessários:</h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span><strong className="text-foreground">1 Agente de IA</strong> (atende 24h sem parar)</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span><strong className="text-foreground">Infraestrutura AWS</strong> (escalável)</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span><strong className="text-foreground">Monitoramento</strong> (automatizado)</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-muted/50 rounded-xl p-6 border border-border">
                    <h3 className="font-bold text-lg mb-4 text-foreground">Custos Mensais:</h3>
                    <div className="space-y-3 text-muted-foreground">
                      <div className="flex justify-between items-center">
                        <span>Desenvolvimento (1x):</span>
                        <span className="font-bold text-foreground">R$ 5.000</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Infraestrutura AWS:</span>
                        <span className="font-bold text-foreground">R$ 100 - 400</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Manutenção:</span>
                        <span className="font-bold text-foreground">R$ 250</span>
                      </div>
                      <div className="flex justify-between items-center border-t border-border pt-3 mt-3">
                        <span className="font-bold text-lg text-foreground">Total Mensal:</span>
                        <span className="text-xl font-bold text-green-500">R$ 1.100</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-500/10 rounded-xl p-4 border border-green-500/20">
                    <h4 className="font-bold text-foreground mb-3">Vantagens:</h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">•</span>
                        <span>Atende 100+ clientes simultaneamente</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">•</span>
                        <span>Nunca falta ou tira férias</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">•</span>
                        <span>Qualidade consistente 24/7</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">•</span>
                        <span>Aprende e melhora continuamente</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">•</span>
                        <span>Escalável instantaneamente</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Savings Calculation */}
            <Card className="bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 border-primary/30 overflow-hidden relative">
              <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
              <CardContent className="p-12 relative z-10">
                <div className="text-center mb-10">
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">
                    Economia Real com <span className="text-primary">IA</span>
                  </h3>
                  <p className="text-xl text-muted-foreground">
                    Veja o impacto financeiro real na sua empresa
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <Card className="bg-card border-border text-center">
                    <CardContent className="p-6">
                      <div className="text-4xl font-bold text-red-500 mb-2">R$ 22.400</div>
                      <div className="text-muted-foreground mb-2 font-medium">Custo Mensal Humano</div>
                      <div className="text-sm text-muted-foreground">5 funcionários + encargos</div>
                    </CardContent>
                  </Card>

                  <Card className="bg-card border-border text-center">
                    <CardContent className="p-6">
                      <div className="text-4xl font-bold text-green-500 mb-2">R$ 2.500</div>
                      <div className="text-muted-foreground mb-2 font-medium">Custo Mensal IA</div>
                      <div className="text-sm text-muted-foreground">1 agente + infraestrutura</div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-primary to-accent border-primary/30 text-center">
                    <CardContent className="p-6">
                      <div className="text-4xl font-bold text-white mb-2">R$ 19.900</div>
                      <div className="text-white/90 mb-2 font-medium">Economia Mensal</div>
                      <div className="text-sm text-white/80">89% de redução de custos</div>
                    </CardContent>
                  </Card>
                </div>

                <div className="text-center">
                  <div className="inline-flex items-center gap-3 bg-card border border-primary/20 rounded-full px-6 py-4">
                    <Zap className="w-5 h-5 text-primary" />
                    <span className="font-bold text-lg text-foreground">
                      <span className="text-primary">R$ 238.800</span> economizados por ano
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Soluções com <span className="text-primary">IA aplicada</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Quando IA faz sentido, desenhamos o agente junto com integrações, dados e operação.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl group">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Brain className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl text-foreground">Chatbots Inteligentes</CardTitle>
                  <CardDescription className="text-base">
                    Atendimento automatizado 24/7 com IA conversacional avançada
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>Processamento de linguagem natural</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>Integração com sistemas existentes</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>Análise de sentimento em tempo real</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl group">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl text-foreground">Agentes de Vendas</CardTitle>
                  <CardDescription className="text-base">
                    IA que qualifica leads e acelera o processo de vendas
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>Qualificação automática de leads</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>Agendamento inteligente de reuniões</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>Follow-up personalizado</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl group">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <BarChart3 className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl text-foreground">Agentes Analíticos</CardTitle>
                  <CardDescription className="text-base">
                    IA que analisa dados e gera insights acionáveis
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>Análise preditiva de dados</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>Relatórios automáticos</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>Alertas inteligentes</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Como Desenvolvemos Seus <span className="text-primary">Agentes de IA</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Processo estruturado para criar agentes de IA que realmente funcionam para o seu negócio
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="bg-card border-border text-center group hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-foreground">1. Análise de Necessidades</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Entendemos seus processos e identificamos onde a IA pode gerar mais valor
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border text-center group hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Brain className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-foreground">2. Desenvolvimento</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Criamos o agente de IA personalizado com as funcionalidades específicas do seu negócio
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border text-center group hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-foreground">3. Integração</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Conectamos o agente aos seus sistemas existentes de forma segura e eficiente
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border text-center group hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-foreground">4. Monitoramento</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Acompanhamos performance e otimizamos continuamente o agente
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Resultados Que <span className="text-primary">Transformam</span> Seu Negócio
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Além da economia, veja os benefícios operacionais que seus concorrentes ainda não têm
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl group">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Clock className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-foreground">Atendimento Instantâneo</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Resposta em <strong className="text-foreground">milissegundos</strong> vs minutos de espera humana
                  </p>
                  <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
                    <div className="text-2xl font-bold text-primary mb-1">0.3s</div>
                    <div className="text-sm text-muted-foreground">Tempo médio de resposta</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl group">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-foreground">Capacidade Ilimitada</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Atenda <strong className="text-foreground">milhares simultaneamente</strong> sem degradação
                  </p>
                  <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
                    <div className="text-2xl font-bold text-primary mb-1">∞</div>
                    <div className="text-sm text-muted-foreground">Clientes simultâneos</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl group">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <BarChart3 className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-foreground">Dados em Tempo Real</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    <strong className="text-foreground">Analytics automáticos</strong> de cada interação
                  </p>
                  <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
                    <div className="text-2xl font-bold text-primary mb-1">100%</div>
                    <div className="text-sm text-muted-foreground">Conversas analisadas</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl group">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-foreground">Qualidade Consistente</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    <strong className="text-foreground">Mesmo padrão</strong> em todas as interações
                  </p>
                  <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
                    <div className="text-2xl font-bold text-primary mb-1">99.9%</div>
                    <div className="text-sm text-muted-foreground">Consistência</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl group">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-foreground">Personalização Total</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    <strong className="text-foreground">Adapta-se</strong> ao perfil de cada cliente
                  </p>
                  <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
                    <div className="text-2xl font-bold text-primary mb-1">1:1</div>
                    <div className="text-sm text-muted-foreground">Experiência personalizada</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl group">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-foreground">ROI Comprovado</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    <strong className="text-foreground">Retorno</strong> em menos de 30 dias
                  </p>
                  <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
                    <div className="text-2xl font-bold text-primary mb-1">1.500%</div>
                    <div className="text-sm text-muted-foreground">ROI anual médio</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <Card className="bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 border-primary/30 overflow-hidden relative">
              <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
              <CardContent className="p-12 text-center relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-6">
                  <Sparkles className="text-primary" size={32} />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Pronto para estruturar sua próxima <span className="text-primary">automação</span>?
                </h2>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Agende uma conversa gratuita para mapear o melhor caminho entre automação de processos, integração AWS, infraestrutura n8n e agentes de IA.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button onClick={openContactModal} size="lg" className="px-8 py-6 text-lg group">
                    Agendar Reunião
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  </Button>
                  <Button asChild variant="outline" size="lg" className="px-8 py-6 text-lg">
                    <Link href="/automacao-processos">
                      Ver automação de processos
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  )
}
