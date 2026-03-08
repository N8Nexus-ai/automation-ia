"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Server, Shield, Zap, BarChart3, Clock, Settings, ArrowLeft, ArrowRight, Link2, Code } from "lucide-react"
import { useContact } from "@/contexts/contact-context"
import Link from "next/link"

export default function InfraestruturaN8nPage() {
  const { openContactModal } = useContact()

  const infrastructureOptions = [
    {
      icon: Server,
      title: "Sua Própria Instância n8n",
      description: "Controle total sobre sua infraestrutura e dados",
      gradient: "from-primary/20 to-primary/5",
      advantages: [
        "Controle total sobre dados e configurações",
        "Customização completa da instalação",
        "Sem dependências externas",
        "Escalabilidade conforme sua necessidade"
      ],
      idealFor: [
        "Empresas com equipe técnica própria",
        "Necessidades específicas de compliance",
        "Controle total sobre dados sensíveis"
      ]
    },
    {
      icon: Settings,
      title: "Infraestrutura Gerenciada",
      description: "Deixe conosco toda a complexidade técnica",
      gradient: "from-accent/20 to-accent/5",
      advantages: [
        "Zero preocupação com infraestrutura",
        "Backup automático e recuperação",
        "Atualizações automáticas do n8n",
        "Monitoramento 24/7 e suporte"
      ],
      idealFor: [
        "Empresas que querem focar no negócio",
        "Equipes sem expertise técnica",
        "Necessidade de disponibilidade máxima"
      ]
    }
  ]

  const stats = [
    { value: "400+", label: "Integrações", icon: Link2 },
    { value: "99.9%", label: "Uptime", icon: Clock },
    { value: "24/7", label: "Suporte", icon: Shield },
    { value: "100%", label: "Open Source", icon: Code }
  ]

  const benefits = [
    { 
      icon: Zap, 
      title: "Fácil de Usar", 
      text: "Interface visual intuitiva para criar automações complexas",
      gradient: "from-primary/20 to-primary/5"
    },
    { 
      icon: Shield, 
      title: "Open Source", 
      text: "Código aberto, sem dependências de fornecedores",
      gradient: "from-accent/20 to-accent/5"
    },
    { 
      icon: BarChart3, 
      title: "400+ Integrações", 
      text: "Conecte com praticamente qualquer sistema ou API",
      gradient: "from-primary/20 to-accent/5"
    },
    { 
      icon: Clock, 
      title: "Execução Confiável", 
      text: "99.9% de uptime e execução garantida",
      gradient: "from-accent/20 to-accent/5"
    }
  ]

  const useCases = [
    'Quando sua equipe precisa rodar n8n com mais estabilidade, backup, observabilidade e suporte.',
    'Quando as automacoes deixaram de ser experimento e passaram a ser parte critica da operacao.',
    'Quando existe duvida entre manter uma instancia propria ou terceirizar a camada de infraestrutura.',
  ]

  const problemsSolved = [
    'Ambientes frágeis, com risco de indisponibilidade, atualizacao manual e pouca previsibilidade operacional.',
    'Falta de padrao para backup, monitoramento, seguranca e sustentacao do n8n em producao.',
    'Escalabilidade limitada quando o volume de workflows e integracoes cresce com a operacao.',
  ]

  const faqs = [
    {
      question: 'Quando vale ter uma infraestrutura n8n dedicada?',
      answer:
        'Vale quando o n8n deixa de ser teste e passa a sustentar processos reais da operacao. Nesse ponto, backup, monitoramento, atualizacoes e disponibilidade deixam de ser detalhe tecnico e viram risco de negocio.',
    },
    {
      question: 'Melhor usar instancia propria ou infraestrutura gerenciada?',
      answer:
        'Depende do nivel de controle, compliance e maturidade tecnica do time. Instancia propria faz mais sentido para equipes com autonomia operacional; gerenciada funciona melhor quando a prioridade e foco no negocio com menos carga tecnica.',
    },
    {
      question: 'Infraestrutura n8n resolve quais dores na pratica?',
      answer:
        'Resolve indisponibilidade, falta de padrao de backup, atualizacao manual, baixa visibilidade de erros e dificuldade para crescer o ambiente conforme aumentam os workflows e integracoes.',
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
                  n8n
                </Badge>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance leading-tight">
                Infraestrutura <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">n8n</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-4xl mx-auto">
                Oferecemos duas opções flexíveis para sua infraestrutura n8n: sua própria instância 
                ou nossa infraestrutura gerenciada. Escolha o que melhor se adapta ao seu negócio.
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
                    O que é <span className="text-primary">n8n</span>?
                  </h2>
                  <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                    <p>
                      n8n é uma plataforma de automação de workflow open-source que permite criar 
                      automações complexas através de uma interface visual intuitiva. É a alternativa 
                      poderosa ao Zapier, com a vantagem de poder ser self-hosted ou gerenciada.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Infrastructure Options */}
            <section className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Escolha Sua <span className="text-primary">Infraestrutura</span>
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Duas opções poderosas para implementar automações com n8n
                </p>
              </div>
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

            {/* Benefits */}
            <section className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Por Que Escolher <span className="text-primary">n8n</span>?
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  n8n é a plataforma de automação mais poderosa e flexível do mercado
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

            <section className="mb-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className="text-2xl">Quando investir em infraestrutura n8n</CardTitle>
                    <CardDescription>
                      Indicadores de que o ambiente precisa sair do improviso e entrar em operacao profissional.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      {useCases.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className="text-2xl">Problemas que resolvemos</CardTitle>
                    <CardDescription>
                      Situações frequentes em times que já dependem do n8n para automacao e integracao.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      {problemsSolved.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section className="mb-20">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-10">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    FAQ sobre <span className="text-primary">Infraestrutura n8n</span>
                  </h2>
                  <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    Perguntas frequentes de quem esta profissionalizando a operacao de automacao.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {faqs.map((faq) => (
                    <Card key={faq.question} className="bg-card border-border">
                      <CardHeader>
                        <CardTitle className="text-xl leading-snug">{faq.question}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
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
                    a melhor opção de infraestrutura n8n para seu negócio.
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
        </article>
        
        <Footer />
      </div>
    </main>
  )
}
