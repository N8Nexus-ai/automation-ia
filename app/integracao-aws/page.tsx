"use client"

import { Header } from "@/components/header"
import { FooterLight } from "@/components/footer-light"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Cloud, Shield, Zap, BarChart3, Clock, Target, ArrowLeft } from "lucide-react"
import { useContact } from "@/contexts/contact-context"
import Link from "next/link"

export default function IntegracaoAwsPage() {
  const { openContactModal } = useContact()

  const awsServices = [
    {
      icon: Cloud,
      title: "Lambda Functions",
      description: "Execução de código sem servidor para máxima eficiência",
      features: ["Processamento de eventos", "APIs serverless", "Automação de tarefas", "Integração com n8n"],
      color: "primary"
    },
    {
      icon: Shield,
      title: "S3 Storage",
      description: "Armazenamento seguro e escalável para seus dados",
      features: ["Backup automático", "Versionamento de arquivos", "Criptografia de dados", "CDN global"],
      color: "accent"
    },
    {
      icon: BarChart3,
      title: "RDS Database",
      description: "Bancos de dados gerenciados e altamente disponíveis",
      features: ["Backup automático", "Escalabilidade automática", "Monitoramento 24/7", "Segurança avançada"],
      color: "primary"
    },
    {
      icon: Zap,
      title: "API Gateway",
      description: "Gerenciamento e segurança de APIs",
      features: ["Rate limiting", "Autenticação JWT", "Logs detalhados", "Cache inteligente"],
      color: "accent"
    },
    {
      icon: Cloud,
      title: "SQS & SNS",
      description: "Mensageria e notificações em tempo real",
      features: ["Filas de processamento", "Notificações push", "Email automático", "SMS e WhatsApp"],
      color: "primary"
    },
    {
      icon: Shield,
      title: "CloudWatch",
      description: "Monitoramento e alertas em tempo real",
      features: ["Métricas personalizadas", "Alertas automáticos", "Dashboards em tempo real", "Logs centralizados"],
      color: "accent"
    }
  ]

  const benefits = [
    { icon: Shield, title: "Segurança Máxima", text: "99.99% de uptime e certificações de segurança internacionais" },
    { icon: Zap, title: "Escalabilidade", text: "Cresça de 1 a milhões de usuários sem reestruturação" },
    { icon: Clock, title: "Disponibilidade", text: "24/7 sem interrupções ou manutenções programadas" },
    { icon: Target, title: "Custo-Benefício", text: "Pague apenas pelo que usar, sem desperdícios" }
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
              Integração AWS
            </h1>
            
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Conectamos seus sistemas e processos à nuvem AWS de forma segura e escalável, 
              aproveitando todo o poder da infraestrutura da Amazon para acelerar seu negócio.
            </p>
          </header>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 pb-12 border-b border-gray-200">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">99.99%</div>
              <div className="text-sm text-gray-600">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">∞</div>
              <div className="text-sm text-gray-600">Escalabilidade</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">24/7</div>
              <div className="text-sm text-gray-600">Disponibilidade</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">100%</div>
              <div className="text-sm text-gray-600">Seguro</div>
            </div>
          </div>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">O que é Integração AWS?</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Integração AWS é a conexão de seus sistemas e processos com a infraestrutura de nuvem 
              da Amazon Web Services. Isso permite aproveitar serviços como Lambda, S3, RDS e outros 
              para criar soluções escaláveis, seguras e econômicas.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Serviços AWS Que Integramos</h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Utilizamos os melhores serviços da AWS para criar soluções robustas e escaláveis:
            </p>
          </div>

          {/* AWS Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {awsServices.map((service, index) => {
              const iconColor = service.color === "primary" ? "text-primary" : "text-accent"
              const bgColor = service.color === "primary" ? "bg-primary/5" : "bg-accent/5"
              const iconBg = service.color === "primary" ? "bg-primary/10" : "bg-accent/10"
              const checkColor = service.color === "primary" ? "text-primary" : "text-accent"
              return (
                <Card key={index} className={`border-2 border-transparent hover:border-primary/30 hover:shadow-xl transition-all duration-300 overflow-hidden ${bgColor}`}>
                  <CardHeader>
                    <div className={`w-14 h-14 ${iconBg} rounded-xl flex items-center justify-center mb-4`}>
                      <service.icon className={`w-7 h-7 ${iconColor}`} />
                    </div>
                    <CardTitle className="text-xl text-gray-900 mb-2 font-bold">{service.title}</CardTitle>
                    <CardDescription className="text-gray-700">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {service.features.map((feature, i) => (
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Vantagens da Integração AWS</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Por que escolher AWS para suas automações e integrações:
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
                Pronto para Migrar para AWS?
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed max-w-2xl mx-auto">
                Agende uma conversa gratuita e descubra como a AWS pode revolucionar 
                a infraestrutura e performance da sua empresa.
              </p>
              <Button 
                onClick={openContactModal} 
                size="lg" 
                className="px-8 py-6 text-lg bg-gradient-to-r from-primary to-indigo-400 hover:from-primary/90 hover:to-indigo-400/90 text-white shadow-lg hover:shadow-xl transition-all"
              >
                Agendar Reunião
              </Button>
            </div>
          </div>
        </div>
      </article>
      
      <FooterLight />
    </main>
  )
}
