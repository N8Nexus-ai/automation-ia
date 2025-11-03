"use client"

import { Header } from "@/components/header"
import { FooterLight } from "@/components/footer-light"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Server, Cloud, Shield, Clock, ArrowLeft, Zap } from "lucide-react"
import { useContact } from "@/contexts/contact-context"
import Link from "next/link"

export default function InfraestruturaFlexivelPage() {
  const { openContactModal } = useContact()

  const infrastructureOptions = [
    {
      icon: Server,
      title: "On-Premise",
      description: "Integramos na sua infraestrutura interna (Data Center próprio)",
      color: "primary",
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
      color: "accent",
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

  const supportPlans = [
    {
      name: "Mantenha Vivo",
      description: "Monitoramento, segurança e correção de bugs",
      features: ["Monitoramento ativo", "Correção de bugs", "Segurança e atualizações", "Suporte básico"],
      color: "primary"
    },
    {
      name: "Piloto Automático",
      description: "Tudo do anterior + franquia de horas para melhorias",
      features: ["Tudo do Mantenha Vivo", "Franquia de horas/mês", "Melhorias contínuas", "Suporte prioritário"],
      color: "accent"
    }
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
                Infraestrutura
              </Badge>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight text-gray-900">
              Infraestrutura Flexível & Suporte Contínuo
            </h1>
            
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Nossa grande vantagem: flexibilidade. Você escolhe o modelo de infraestrutura e suporte 
              que melhor se adapta ao seu negócio. On-premise ou nuvem gerenciada, sempre com suporte contínuo.
            </p>
          </header>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 pb-12 border-b border-gray-200">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">100%</div>
              <div className="text-sm text-gray-600">Flexível</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">24/7</div>
              <div className="text-sm text-gray-600">Monitoramento</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">99.9%</div>
              <div className="text-sm text-gray-600">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">∞</div>
              <div className="text-sm text-gray-600">Escalável</div>
            </div>
          </div>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Modelos de Infraestrutura</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Escolha o modelo que melhor se adapta às suas necessidades de segurança, compliance e controle:
            </p>
          </div>

          {/* Infrastructure Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {infrastructureOptions.map((option, index) => {
              const iconColor = option.color === "primary" ? "text-primary" : "text-accent"
              const bgColor = option.color === "primary" ? "bg-primary/5" : "bg-accent/5"
              const iconBg = option.color === "primary" ? "bg-primary/10" : "bg-accent/10"
              const checkColor = option.color === "primary" ? "text-primary" : "text-accent"
              return (
                <Card key={index} className={`border-2 border-transparent hover:border-primary/30 hover:shadow-xl transition-all duration-300 overflow-hidden ${bgColor}`}>
                  <CardHeader>
                    <div className={`w-14 h-14 ${iconBg} rounded-xl flex items-center justify-center mb-4`}>
                      <option.icon className={`w-7 h-7 ${iconColor}`} />
                    </div>
                    <CardTitle className="text-xl text-gray-900 mb-2 font-bold">{option.title}</CardTitle>
                    <CardDescription className="text-gray-700">{option.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className={`font-bold text-lg mb-3 ${iconColor}`}>Vantagens:</h3>
                      <ul className="space-y-2">
                        {option.advantages.map((advantage, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle className={`w-5 h-5 mt-0.5 flex-shrink-0 ${checkColor}`} />
                            <span className="text-gray-700 text-sm">{advantage}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-4 border-t border-gray-200">
                      <h3 className="font-bold text-sm text-gray-900 mb-2">Ideal para:</h3>
                      <ul className="space-y-1">
                        {option.idealFor.map((item, i) => (
                          <li key={i} className="text-gray-600 text-sm">• {item}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Support Plans */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Contratos de Sustentação</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Garanta que sua automação continue funcionando perfeitamente com nossos planos de suporte:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {supportPlans.map((plan, index) => {
                const iconColor = plan.color === "primary" ? "text-primary" : "text-accent"
                const bgColor = plan.color === "primary" ? "bg-primary/5" : "bg-accent/5"
                const iconBg = plan.color === "primary" ? "bg-primary/10" : "bg-accent/10"
                const checkColor = plan.color === "primary" ? "text-primary" : "text-accent"
                return (
                  <Card key={index} className={`border-2 border-transparent hover:border-primary/30 hover:shadow-xl transition-all duration-300 overflow-hidden ${bgColor}`}>
                    <CardHeader>
                      <div className={`w-14 h-14 ${iconBg} rounded-xl flex items-center justify-center mb-4`}>
                        <Shield className={`w-7 h-7 ${iconColor}`} />
                      </div>
                      <CardTitle className="text-xl text-gray-900 mb-2 font-bold">{plan.name}</CardTitle>
                      <CardDescription className="text-gray-700">{plan.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {plan.features.map((feature, i) => (
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
          </div>

          {/* CTA */}
          <div className="mt-16 pt-12 border-t border-gray-200">
            <div className="bg-gradient-to-br from-primary/5 via-accent/5 to-primary/10 rounded-2xl p-8 text-center border-2 border-primary/20">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Qual Infraestrutura é Ideal para Você?
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed max-w-2xl mx-auto">
                Agende uma conversa gratuita e nossa equipe ajudará você a escolher 
                o melhor modelo de infraestrutura e suporte para seu negócio.
              </p>
              <Button 
                onClick={openContactModal} 
                size="lg" 
                className="px-8 py-6 text-lg bg-gradient-to-r from-primary to-indigo-400 hover:from-primary/90 hover:to-indigo-400/90 text-white shadow-lg hover:shadow-xl transition-all"
              >
                Agendar Reunião Gratuita
              </Button>
            </div>
          </div>
        </div>
      </article>
      
      <FooterLight />
    </main>
  )
}

