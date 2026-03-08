"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Cloud, Shield, Zap, BarChart3, Clock, Target, ArrowLeft, ArrowRight, Infinity, Activity } from "lucide-react"
import { useContact } from "@/contexts/contact-context"
import Link from "next/link"

export default function IntegracaoAwsPage() {
  const { openContactModal } = useContact()

  const awsServices = [
    {
      icon: Zap,
      title: "Lambda Functions",
      description: "Execução de código sem servidor para máxima eficiência",
      features: ["Processamento de eventos", "APIs serverless", "Automação de tarefas", "Integração com n8n"],
      gradient: "from-primary/20 to-primary/5"
    },
    {
      icon: Cloud,
      title: "S3 Storage",
      description: "Armazenamento seguro e escalável para seus dados",
      features: ["Backup automático", "Versionamento de arquivos", "Criptografia de dados", "CDN global"],
      gradient: "from-accent/20 to-accent/5"
    },
    {
      icon: BarChart3,
      title: "RDS Database",
      description: "Bancos de dados gerenciados e altamente disponíveis",
      features: ["Backup automático", "Escalabilidade automática", "Monitoramento 24/7", "Segurança avançada"],
      gradient: "from-primary/20 to-primary/5"
    },
    {
      icon: Shield,
      title: "API Gateway",
      description: "Gerenciamento e segurança de APIs",
      features: ["Rate limiting", "Autenticação JWT", "Logs detalhados", "Cache inteligente"],
      gradient: "from-accent/20 to-accent/5"
    },
    {
      icon: Cloud,
      title: "SQS & SNS",
      description: "Mensageria e notificações em tempo real",
      features: ["Filas de processamento", "Notificações push", "Email automático", "SMS e WhatsApp"],
      gradient: "from-primary/20 to-accent/5"
    },
    {
      icon: Activity,
      title: "CloudWatch",
      description: "Monitoramento e alertas em tempo real",
      features: ["Métricas personalizadas", "Alertas automáticos", "Dashboards em tempo real", "Logs centralizados"],
      gradient: "from-accent/20 to-accent/5"
    }
  ]

  const stats = [
    { value: "99.99%", label: "Uptime", icon: Activity },
    { value: "∞", label: "Escalabilidade", icon: Infinity },
    { value: "24/7", label: "Disponibilidade", icon: Clock },
    { value: "100%", label: "Seguro", icon: Shield }
  ]

  const benefits = [
    { 
      icon: Shield, 
      title: "Segurança Máxima", 
      text: "99.99% de uptime e certificações de segurança internacionais",
      gradient: "from-primary/20 to-primary/5"
    },
    { 
      icon: Zap, 
      title: "Escalabilidade", 
      text: "Cresça de 1 a milhões de usuários sem reestruturação",
      gradient: "from-accent/20 to-accent/5"
    },
    { 
      icon: Clock, 
      title: "Disponibilidade", 
      text: "24/7 sem interrupções ou manutenções programadas",
      gradient: "from-primary/20 to-accent/5"
    },
    { 
      icon: Target, 
      title: "Custo-Benefício", 
      text: "Pague apenas pelo que usar, sem desperdícios",
      gradient: "from-accent/20 to-accent/5"
    }
  ]

  const useCases = [
    'Quando voce precisa conectar sistemas internos com servicos como Lambda, S3, RDS ou filas de processamento.',
    'Quando a operacao sofre com processos manuais, baixa observabilidade e gargalos de integracao entre plataformas.',
    'Quando o time precisa escalar automacoes sem depender de infraestrutura improvisada ou rotinas frágeis.',
  ]

  const problemsSolved = [
    'Sincronizacao entre CRM, ERP, atendimento, dados operacionais e fluxos automatizados.',
    'Processamento de arquivos, eventos e chamadas de API com controle, logs e monitoramento.',
    'Arquiteturas que precisam de seguranca, escalabilidade e menor risco de indisponibilidade.',
  ]

  const faqs = [
    {
      question: 'Quando faz sentido integrar AWS com n8n e outros sistemas?',
      answer:
        'Faz sentido quando a operacao precisa de mais escala, seguranca e observabilidade do que conectores simples conseguem entregar. Isso costuma acontecer quando entram filas, arquivos, APIs internas, banco de dados e monitoramento em tempo real.',
    },
    {
      question: 'Quais servicos AWS costumam entrar primeiro em um projeto?',
      answer:
        'Os mais comuns sao Lambda para processamento, S3 para arquivos, RDS para dados estruturados, SQS ou SNS para mensageria e CloudWatch para monitoramento. A combinacao depende do fluxo e do volume operacional.',
    },
    {
      question: 'Integracao AWS serve so para empresas grandes?',
      answer:
        'Nao. Empresas menores tambem se beneficiam quando precisam reduzir trabalho manual, ganhar confiabilidade e preparar a base para crescimento sem refazer a arquitetura depois.',
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
                  <Cloud size={14} className="mr-2" />
                  AWS
                </Badge>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance leading-tight">
                Integração <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">AWS</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-4xl mx-auto">
                Conectamos seus sistemas e processos à nuvem AWS de forma segura e escalável, 
                aproveitando todo o poder da infraestrutura da Amazon para acelerar seu negócio.
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
                    O que é <span className="text-primary">Integração AWS</span>?
                  </h2>
                  <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                    <p>
                      Integração AWS é a conexão de seus sistemas e processos com a infraestrutura de nuvem 
                      da Amazon Web Services. Isso permite aproveitar serviços como Lambda, S3, RDS e outros 
                      para criar soluções escaláveis, seguras e econômicas.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* AWS Services */}
            <section className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Serviços AWS Que <span className="text-primary">Integramos</span>
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Utilizamos os melhores serviços da AWS para criar soluções robustas e escaláveis
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {awsServices.map((service, index) => (
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

            {/* Benefits */}
            <section className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Vantagens da <span className="text-primary">Integração AWS</span>
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Por que escolher AWS para suas automações e integrações
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
                    <CardTitle className="text-2xl">Quando usar Integração AWS</CardTitle>
                    <CardDescription>
                      Sinais de que sua operação já pede uma camada mais robusta de arquitetura.
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
                      Casos comuns em que a integracao certa elimina retrabalho e risco operacional.
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
                    FAQ sobre <span className="text-primary">Integração AWS</span>
                  </h2>
                  <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    Respostas curtas para as dúvidas mais comuns antes de estruturar a arquitetura.
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
                    <Cloud className="text-primary" size={32} />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Pronto para Migrar para <span className="text-primary">AWS</span>?
                  </h2>
                  <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto leading-relaxed">
                    Agende uma conversa gratuita e descubra como a AWS pode revolucionar 
                    a infraestrutura e performance da sua empresa.
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
